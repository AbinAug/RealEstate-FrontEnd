import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IAPIResponseModel, IDashboard, IPropertyType } from '../../model/master';

@Component({
  selector: 'app-createproperty',
  imports: [ReactiveFormsModule],
  templateUrl: './createproperty.component.html',
  styleUrl: './createproperty.component.css'
})
export class CreatepropertyComponent implements OnInit {
  gridData : IDashboard[]=[]
  ngOnInit(): void {
    this.getGridData();
  }

  getGridData(){
    this.masterSrv.getAllProperty().subscribe((res:IAPIResponseModel)=>{
      this.gridData = res.data;
    })
  }

  masterSrv = inject(MasterService)
   //gridData : IDashboard[]=[]
   form : FormGroup = new FormGroup(
      {
    
      }
    )
    
    // ngOnInit(): void {
    //   this.getGridData();
    // }
  
    // getGridData(){
    //   this.masterSrv.getAllPropertyType().subscribe((res:IAPIResponseModel)=>{
    //     this.gridData = res.data;
    //   })
    // }


  onCreateNewProperty(){
    console.log(123);
     this.masterSrv.savePropertyDetails(this.form.value).subscribe((res: IAPIResponseModel)=>{
    console.log(this.form.value);
           if(res.result){
             alert('Record Saved!!');
    //         this.getGridData();
           }
           else{
              alert(res.message);
           }
         })
  }
}
