import { DecimalPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BinanceService } from '../../services/binance.service';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [NgFor , DecimalPipe],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.css'
})
export class SellComponent {

  @Input() depth: number = 15

  asks: any

  constructor( private binanceService: BinanceService){}

  ngOnInit(): void {
    this.binanceService.connectStream('BTCUSDT')

    this.binanceService.depthData$.subscribe(data =>{
      this.asks = (data as any).askDepth
      this.asks.length =  this.depth
      })
    
  }

  getMaxTotal () {
    return Math.max(...this.asks.map((_ask: any) => _ask.price * _ask.quantity))
  }
}
