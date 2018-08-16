import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'; // Importa la libreria leaflet en la variable L

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
  //myMap: any; // Revisar su uso

  constructor() { }

  ngOnInit() {
    const myMap: any =L.map('map',{zoomControl:false}).setView([19.414462, -99.050053], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(myMap);

    L.control.zoom({
      position: 'topright'
    }).addTo(myMap);

    const hospital = L.icon({
      iconUrl: 'assets/hospital.svg',
      // shadowUrl: 'leaf-shadow.png',

      iconSize: [30, 45], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [15, 70], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([19.435306, -99.140053], {
      icon: hospital
    }).addTo(myMap);
    L.marker([19.417242, -99.048802], {
      icon: hospital
    }).addTo(myMap);
    L.marker([19.422069, -99.047826], {
      icon: hospital
    }).addTo(myMap);
    L.marker([19.416159, -99.064123], {
      icon: hospital
    }).addTo(myMap);
    L.marker([19.407602, -99.091479], {
      icon: hospital
    }).addTo(myMap);
    L.marker([19.423870, -99.139981], {
      icon: hospital
    }).addTo(myMap);
  }

  showLocation() {
    if (navigator.geolocation) {
      let map = myMap
      navigator.geolocation.getCurrentPosition(function (position){
        var ubicacionicon = L.icon({

          iconUrl: 'assets/ubicacion.svg',
    
          iconSize: [30, 45], // size of the icon
          shadowSize: [50, 64], // size of the shadow
          iconAnchor: [15, 70], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62], // the same for the shadow
          popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        L.marker([position.coords.latitude, position.coords.longitude], {
          icon: ubicacionicon
        }).addTo(map);
        map.flyTo([position.coords.latitude, position.coords.longitude], 16)
      })
    } 
    else {
      console.log("No tienes acceso a GPS")
    }
  }

}
