import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MedicineService } from '../../services/Medicine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-medicine',
  templateUrl: './add-edit-medicine.component.html',
  styleUrls: ['./add-edit-medicine.component.css']
})
export class AddEditMedicineComponent implements OnInit {

  pagetitle:string='Add Medicine';
  constructor(private medicineService:MedicineService,
    private route:ActivatedRoute,
    private router:Router) { }
  medicineId:number=0;
  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      this.medicineId = params['id'];
      if(this.medicineId>0){
        this.pagetitle='Edit medcine';
        this.Setvalue1();
      }
    }
    )
  }
  Setvalue1(){
    this.medicineService.GetMedicineById(this.medicineId).subscribe(res => {
      this.userform.patchValue({
        medicineId:this.medicineId,
        Fullname:res.fullname,
        Quantity:res.quantity,
        price:res.price,
        note:res.brand,
        expiryDate:res.expiryDate,
        brand:res.brand
      })
    });
  }
  onSubmit(){
    if(this.medicineId>0){
      this.medicineService.UpdateMedicne(this.medicineId,this.userform.value).subscribe(res => {
        // this.NavigateToRoles();
        // this.alertService.success('Role Updated successfully');
      })
    }
    else{
      this.medicineService.AddMedicine(this.userform.value).subscribe(res => {
        // this.NavigateToRoles();
        // this.alertService.success('Role Added successfully');
      })
    }
  }
  userform =  new FormGroup({
    'MedicineId':new FormControl(null),
    'Fullname': new FormControl(null,[Validators.required, Validators.minLength(5)]),
    'Quantity': new FormControl(null,[Validators.required, Validators.minLength(5)]),
    'price': new FormControl(null,[Validators.required,Validators.email]),
    'note': new FormControl(null,[Validators.minLength(10),Validators.maxLength(12)]),
    'expiryDate': new FormControl(null,[Validators.required, Validators.minLength(5)]),
    'brand': new FormControl(null,[Validators.required, Validators.minLength(5)])
  });

}
