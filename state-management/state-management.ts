import { effect, Injectable, signal, WritableSignal } from "@angular/core";

export interface StateManagementEvent {
    key: string;
    payload: StatePayload;
    timestamp: number;
    expiryTime?: number;
}

export interface StatePayload{
    loading?:StateStatus;
    disabled?:StateStatus;
    info?:{};
}

export class StateStatus{
    static PENDING="pending";
    static RUNNING="running";
    static DONE="done";
    static ACTIVE= true;
    static INACTIVE= false;
}

@Injectable({
    providedIn: 'root'
})
export class StateManagementService {

    private eventQueue: WritableSignal<StateManagementEvent[]> = signal([]);

    private cleanupInterval = 1000;
    private defaultExpiryTime= 5000;
    private isOnHold = false;

    constructor() {
        this.autoCleanExpiredEvents();
    }

    dispatch(key: string, payload: StatePayload, expiryTime?: number): void {
        if (this.isOnHold) return;
        const event: StateManagementEvent = {
            key,
            payload,
            timestamp: Date.now(),
            expiryTime: expiryTime ?? this.defaultExpiryTime,
        };
        this.eventQueue.update(events => [...events, event]);
    }

    dispatchWithScope(scope: string, key: string, payload?: any, expiryTime?: number): void {
        this.dispatch(`${scope}/${key}`, payload, expiryTime);
    }

    listen(key: string, callback: (payload: any) => void): void {
        let lastTimestamp = 0;
        effect(() => {
            const events = this.getEvents(key);
            const latest = events[events.length - 1];
            if (latest && latest.timestamp > lastTimestamp) {
                lastTimestamp = latest.timestamp;
                callback(latest.payload);
            }
        }, { allowSignalWrites: true });
    }

    listenOnce(key: string, callback: (payload: any) => void): void {
        let done = false;
        effect(() => {
            if (done) return;
            const events = this.getEvents(key);
            const latest = events[events.length - 1];
            if (latest) {
                done = true;
                callback(latest.payload);
            }
        },{ allowSignalWrites: true });
    }

    listenAndReplay(key: string, callback: (payload: any) => void): void {
        const events = this.getEvents(key);
        const latest = events[events.length - 1];
        if (latest) callback(latest.payload);
        this.listen(key, callback);
    }

    listenToAll(callback: (event: StateManagementEvent) => void): void {
        let lastSeen = 0;
        effect(() => {
            const events = this.eventQueue();
            const newEvents = events.filter(e => e.timestamp > lastSeen);
            if (newEvents.length) {
                lastSeen = newEvents[newEvents.length - 1].timestamp;
                newEvents.forEach(callback);
            }
        });
    }

    getEvents(key: string): StateManagementEvent[] {
        const now = Date.now();
        return this.eventQueue().filter(
            e => e.key === key && (!e.expiryTime || e.timestamp + e.expiryTime > now)
        );
    }

    getEventHistory(key: string): StateManagementEvent[] {
        return this.eventQueue().filter(e => e.key === key);
    }

    clear(key?: string): void {
        if (key) {
            this.eventQueue.update(events => events.filter(e => e.key !== key));
        } else {
            this.eventQueue.set([]);
        }
    }

    purgeOlderThan(ms: number): void {
        const cutoff = Date.now() - ms;
        this.eventQueue.update(events => events.filter(e => e.timestamp > cutoff));
    }

    hold(): void {
        this.isOnHold = true;
    }

    start(): void {
        this.isOnHold = false;
    }

    private autoCleanExpiredEvents() {
        setInterval(() => {
            const now = Date.now();
            this.eventQueue.update(events =>
                events.filter(e => !e.expiryTime || e.timestamp + e.expiryTime > now)
            );
        }, this.cleanupInterval);
    }
}
