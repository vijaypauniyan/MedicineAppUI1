import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import {MedicineService} from '../../services/Medicine.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  constructor(private medicineService:MedicineService,
    private route:ActivatedRoute,
    private router:Router) { }
  cars: any[];

  cols: any[];
  onRowEditSave(rodate:any) {
    console.log(rodate)  
    this.router.navigate([rodate.medicineId],{relativeTo:this.route}); 
 }
 AddRole(){
  this.router.navigate([-1],{relativeTo:this.route}); 
}
  ngOnInit(): void {
    this.medicineService.GetMedicine().subscribe((data:any) => {
      this.cars= data;
    });

    this.cols = [
        { field: 'fullName', header: 'fullName' },
        { field: 'brand', header: 'brand' },
        { field: 'price', header: 'price' },
        { field: 'note', header: 'note' },
        { field: 'expiryDate', header: 'expiryDate' },
        { field: 'quantity', header: 'quantity' }
    ];
  }

}
