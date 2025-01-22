import { ViewChild, Component, inject, OnInit, signal, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {IAPIResponseModel, IPropertyType, Site } from '../../model/master';
import { MasterService } from '../../service/master.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-site',
  standalone: true,
  imports: [FormsModule,AsyncPipe],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent implements OnInit {
  isFormView = signal<boolean>(false);

  formObj :  Site = new Site();
  masterSrv = inject(MasterService)
  gridData : Site[] = [];
  propertyType$: Observable<IPropertyType[]> = new Observable<IPropertyType[]>
  @ViewChild('propertyModal') modal : ElementRef | undefined;
  constructor(){
    this.propertyType$ = this.masterSrv.getAllPropertyType().pipe(
      map((item: IAPIResponseModel)=>
      {
        return item.data
      })
    );
  }

  ngOnInit(): void {
    this.getGridData();
  }

  openModal(){
    if(this.modal){
      this.modal.nativeElement.style.display = 'block';
    }
  }
  toggleView(){
    this.isFormView.set(!this.isFormView());
  }

  onSave(){
    this.masterSrv.saveSites(this.formObj).subscribe((res: IAPIResponseModel)=>{
      if(res.result){
        alert("Record Saved!!")
        this.getGridData();
        this.toggleView();
      }
      else{
        alert(res.message)
      }
    })
  }

  getGridData(){
    this.masterSrv.getAllSites().subscribe((res: IAPIResponseModel)=>{
      this.gridData = res.data;
    })
  }
}
