import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectingLineService {

  constructor() { }


  getLinePosition(sourceId: string, targetId: string, parentId: string) {
    const sourceIdDoc = document.getElementById(sourceId);
    const targetIdDoc = document.getElementById(targetId);
    const sourceIdBoundingClientRect = sourceIdDoc?.getBoundingClientRect();
    const targetIdBoundingClientRect = targetIdDoc?.getBoundingClientRect();
    let lineParam: any = {}
    const parentBoundingClientRect = document.getElementById(parentId)?.getBoundingClientRect();

    if(!sourceIdBoundingClientRect || !targetIdBoundingClientRect )return{};

    if (sourceIdBoundingClientRect?.top && targetIdBoundingClientRect?.top && Math.abs(sourceIdBoundingClientRect?.top - targetIdBoundingClientRect?.top) < 100) {
      lineParam = this.strateLine(sourceIdBoundingClientRect, targetIdBoundingClientRect)
    } else {
      lineParam = this.verticalLine(sourceIdBoundingClientRect, targetIdBoundingClientRect)
    }
    lineParam['sourceId'] = sourceId;
    lineParam['targetId'] = targetId;
    lineParam['sourceRight'] = lineParam.x2 - (parentBoundingClientRect?.left ?? 0);
    lineParam['sourceTop'] = lineParam.y2 - (parentBoundingClientRect?.top ?? 0);
    return lineParam;
  }


strateLine(sourceIdBoundingClientRect: DOMRect, targetIdBoundingClientRect: DOMRect){
  let x1 = sourceIdBoundingClientRect?.right+7;
  let y1 = (sourceIdBoundingClientRect?.top + sourceIdBoundingClientRect?.height / 2)+7;
  let x2 = targetIdBoundingClientRect?.left+7 ?? 0;
  let y2 = (targetIdBoundingClientRect?.top + targetIdBoundingClientRect?.height / 2)+7;

  if(x1>x2){
    x1=sourceIdBoundingClientRect?.left+7;
    x2=targetIdBoundingClientRect?.right+7;
  }

  const length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
  const angle = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI);
  return {
    x1: x1,
    x2: x2,
    y1: y1,
    y2: y2,
    length: length,
    angle: angle
  };
}

verticalLine(sourceIdBoundingClientRect: DOMRect, targetIdBoundingClientRect: DOMRect){
  let x1=(sourceIdBoundingClientRect?.right)-(sourceIdBoundingClientRect?.width/2)+7;
  let y1=(sourceIdBoundingClientRect?.top + sourceIdBoundingClientRect?.height)+7;
  let x2=(targetIdBoundingClientRect?.left + targetIdBoundingClientRect?.width/2)+7;
  let y2=(targetIdBoundingClientRect?.top)+7;

  if(y1>y2){
    y1=sourceIdBoundingClientRect?.top+7;
    y2=(targetIdBoundingClientRect?.top + targetIdBoundingClientRect?.height)+7;
  }
  const length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
  const angle = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI);

  return {
    x1: x1,
    x2: x2,
    y1: y1,
    y2: y2,
    length: length,
    angle: angle
  };
}

}
