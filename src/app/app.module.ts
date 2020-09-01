import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicineComponent } from './medicine/medicine.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { AddEditMedicineComponent } from './add-edit-medicine/add-edit-medicine.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MedicineComponent,
    AddEditMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
