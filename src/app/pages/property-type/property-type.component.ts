import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet , RouterLink,RouterLinkActive} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { IAPIResponseModel, IPropertyType } from '../../model/master';
@Component({
  selector: 'app-property-type',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './property-type.component.html',
  styleUrl: './property-type.component.css'
})
export class PropertyTypeComponent implements OnInit {
  form : FormGroup = new FormGroup(
    {
  
    }
  )
  gridData : IPropertyType[]=[]
   masterSrv = inject(MasterService)

  constructor()
  {
    this.initializeForm();
  }
  
  ngOnInit(): void {
    this.getGridData();
  }

  getGridData(){
    this.masterSrv.getAllPropertyType().subscribe((res:IAPIResponseModel)=>{
      this.gridData = res.data;
    })
  }

  onDelete(id : number){
    const isDelete = confirm('Are you sure You want to delete the data?')
    if(isDelete)
    {
      this.masterSrv.deletePropertyTypeById(id).subscribe((res: IAPIResponseModel)=>{
        if(res.result){
          alert('Record Deleted!!');
          this.getGridData();
        }
        else{
          alert(res.message);
        }
      })
    }
  }

  onSave(){
    this.masterSrv.savePropertyType(this.form.value).subscribe((res: IAPIResponseModel)=>{
      console.log(this.form.value);
      if(res.result){
        alert('Record Saved!!');
        this.getGridData();
      }
      else{
        alert(res.message);
      }
    })
  }

  onUpdate(){
    this.masterSrv.updatePropertyType(this.form.value).subscribe((res: IAPIResponseModel)=>{
      if(res.result){
        alert('Record Updated!!');
        this.getGridData();
      }
      else{
        alert(res.message);
      }
    })
  }

  onEdit(item: IPropertyType){
    this.initializeForm(item)
  }

  initializeForm(item?: IPropertyType)
  {
    this.form = new FormGroup({
      propertyTypeId : new FormControl<number>(item ? item.propertyTypeId:0),
      propertyType : new FormControl<string>(item ? item.propertyType : '',[Validators.required,Validators.minLength(3)])
    })
  }
}
