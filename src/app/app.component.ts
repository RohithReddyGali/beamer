import { Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {increment, decrement, reset} from './actions/data.action'

declare var google: any;

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beamer';
  name = "Primeng Gmap component";
  latitude;
  longitude;
  options: any;
  overlays: any[];
  receivedLatLong;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  count$: Observable<number>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<{'count':number}>){
    this.count$ = store.select('count');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // map: google.maps.Map;

  // setMap(event) {
  //   this.map = event.map;
  // }

  // updateMap() {
  //   if (this.latitude && this.longitude) {
  //     this.map.setCenter({
  //       lat: Number(this.latitude),
  //       lng: Number(this.longitude)
  //     });
  //   }
  // }

  ngOnInit() {
    // this.options = {
    //   center: {
    //     lat: -37.6878,
    //     lng: 176.1651
    //   },
    //   zoom: 11,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // console.log(555, +this.latitude, +this.longitude);
    // console.log(666, this.options);

    // this.overlays = [
    //   new google.maps.Circle({
    //     center: {
    //       lat: -35.131889,
    //       // lat: this.latitude,
    //       lng: 173.438361
    //       // lng: this.longitude,
    //     },
    //     fillColor: "#FFA726",
    //     fillOpacity: 0.35,
    //     strokeWeight: 1,
    //     radius: 1500
    //   })
    // ];
  }

  incrementCount(){
    this.store.dispatch(increment());
  }

  decrementCount(){
    this.store.dispatch(decrement());
  }

  resetCount(){
    this.store.dispatch(reset());
  }
}
