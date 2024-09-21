import { Component, Input, OnInit } from '@angular/core';
import { BinanceService } from '../../services/binance.service';
import { DecimalPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent implements OnInit {

  @Input() depth = 15
 
  bids: any

  constructor( private binanceService: BinanceService){}

  ngOnInit(): void {
    this.binanceService.connectStream('BTCUSDT')

    this.binanceService.depthData$.subscribe(data =>{
      this.bids = (data as any).bidDepth
      this.bids.length =  this.depth
      })
    
  }

  getMaxTotal () {
    return Math.max(...this.bids.map((_bid: any) => _bid.price * _bid.quantity))
  }

}
