import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineComponent } from './medicine/medicine.component';
import { AddEditMedicineComponent } from './add-edit-medicine/add-edit-medicine.component';


const routes: Routes = [
  {
      
  path: 'medicine',
  component: MedicineComponent,
 
    
      children:  [
        {
          path: ':id',
          component: AddEditMedicineComponent
         }  
        ]
   }]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
