import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {
  texto : string = 'Estrada BEM';
  lat: number = -23.5397574;
  lng: number = -46.7150391;
  zoom: number = 13;

  origin = { lat: 29.8174782, lng: -95.6814757 };
  destination = { lat: 40.6976637, lng: -74.119764 };
  
  constructor() { }

  ngOnInit(): void {
  }

}
