import { Component } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeCards = [
    {
      "id": "1",
      "title": "States",
     "description": "Go to all states",
      "path": "about",
      "img": "https://imgs.search.brave.com/t09v3h4e0uRzD2urVg2p6_T2aRWPiVI-zZZQmnAGEl4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzYzLzEzLzQz/LzM2MF9GXzQ2MzEz/NDM5MV82OXRqT3hY/a2VWNnk4cEh2eFR1/bDBRT0VRVEpsMEJv/eS5qcGc"
    },
    {
      "id": "2",
     "title": "Contact us",
     "description": "Contact us for more information",
      "path": "contact",
      "img": "https://imgs.search.brave.com/TZX1HYmOoXRZkRRQWiS31foV4yD2Gdj-q5vZpxQaER0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQzLzEyLzA2/LzM2MF9GXzI0MzEy/MDY0OV8xMVhxTWVQ/NkFRSFNBcnU3S1Fk/NjRBMmI2WTVZMkg5/dS5qcGc"
    },
    
  ];

}
