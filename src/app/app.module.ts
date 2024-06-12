import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {SidebarModule} from 'primeng/sidebar';
import { AppComponent } from './app.component';
import {GMapModule} from 'primeng/gmap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {StoreModule} from '@ngrx/store'
import {counterReducer} from './actions/data.reducer'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // SidebarModule,
    GMapModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    StoreModule.forRoot({count:counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
