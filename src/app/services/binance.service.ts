import { Injectable } from '@angular/core';
import Binance from 'binance-api-node';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BinanceService {

  private client =  Binance()
  private depthDataSubject =  new Subject()

  depthData$ = this.depthDataSubject.asObservable()

  orderBook: any

  constructor() { }

  connectStream (symbol: string) {
    this.client.ws.depth (symbol,(data) => {
      this.depthDataSubject.next(data)
    })
  }

  startConnect (symbol: string) {
    this.connectStream(symbol)
    this.depthData$.subscribe(data => {
      this.orderBook = data
    })
  }

  endConnect () {
  }

}
