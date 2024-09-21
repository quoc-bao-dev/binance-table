import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuyComponent } from "./components/buy/buy.component";
import { SellComponent } from "./components/sell/sell.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuyComponent, SellComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  depth =  15
  
}
