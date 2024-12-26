import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardsComponent } from '../../ui/cards/cards.component';


@Component({
  selector: 'app-about',
  imports: [CardsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public api:ApiService){}


}
