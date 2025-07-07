import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { finalize, throttleTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'InfiniteBatchDataLoader',
  template: `
   <div>
   <div *ngIf="loading" class="loader">Loading...</div>

<div class="scroll-container">
  <cdk-virtual-scroll-viewport
    itemSize="50"
    style="height: 400px; width: 100%;"
    (scrolledIndexChange)="onScroll()"
    #viewport>
    <div *cdkVirtualFor="let item of items" class="item">
      {{ item.title }}
    </div>
  </cdk-virtual-scroll-viewport>
</div>

   </div>


  `,
  styles:`
  .loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.scroll-container {
  width: 100%;
  overflow: hidden;
}

.item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  color: #333;
}


  `
})
export class InfiniteBatchDataLoader implements AfterViewInit {
    @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

  items: any[] = [];
  batchSize = 50;
  currentBatch = 1;
  totalRecords: number = 0; // Store the total number of records
  loading = false;
  buffer = 10;

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.loadBatch(this.currentBatch);
  }

  loadBatch(batch: number, direction: 'up' | 'down' | null = null) {

    if (this.loading) return;

    // Ensure batch is within the range: 1 to totalBatches
    if (batch < 1 ) {
      console.log('Invalid batch number. Skipping API call.');
      return;
    }


    console.log(`Loading batch: ${batch}`); // Debug log for batch loading
    this.loading = true;

    this.http
      .get<any>(`http://localhost:3000/posts?_page=${batch}&_per_page=${this.batchSize}`)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((response: any) => {
        console.log('API Response:', response); // Log the response to check data

        if (response.data) {
          const newItems = response.data;
          this.totalRecords = response.totalRecords; // Assuming the API returns the total records count


          if (direction === 'down') {
            this.items = [...this.items, ...newItems]; // Add to the list for scrolling down
            this.currentBatch = batch;
          } else if (direction === 'up') {
            this.items = [...newItems, ...this.items]; // Add to the beginning for scrolling up
            this.currentBatch = batch;
          } else {
            this.items = [...newItems]; // First batch load
            this.currentBatch = batch;
          }
        } else {
          console.error('Error: No data returned');
        }
      }, (error) => {
        console.error('Error loading batch:', error);
        this.loading = false;
      });
  }

  onScroll() {
    if (this.loading) return;

    const range = this.viewport.getRenderedRange();
    const total = this.viewport.getDataLength();

    // Scroll Down (Load Next Batch)
    if (range.end >= total - this.buffer ) {
      console.log('Scrolling Down...');
      this.loadBatch(this.currentBatch + 1, 'down');
    }

    // Scroll Up (Load Previous Batch)
    if (range.start <= this.buffer && this.currentBatch > 1) {
      console.log('Scrolling Up...');
      this.loadBatch(this.currentBatch - 1, 'up');
    }
  }
}
