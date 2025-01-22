import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IAPIResponseModel, IDashboard } from '../../model/master';
import { MasterService } from '../../service/master.service';
import { UserService } from '../../shared/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  username: string = '';
  form : FormGroup = new FormGroup(
    {
  
    }
  )
  gridData : any[]=[]
   masterSrv = inject(MasterService)

  constructor(private dialog: MatDialog,private userService: UserService)
  {
    this.initializeForm();
  }
  
  initializeForm(item?: IDashboard)
    {
      this.form = new FormGroup({
        propertyTypeId : new FormControl<number>(item ? item.propertyTypeId:0),
        propertyType : new FormControl<string>(item ? item.propertyType : '',[Validators.required,Validators.minLength(3)]),
        title : new FormControl<string>(item ? item.title:''),
        city : new FormControl<string>(item ? item.city:''),
        state : new FormControl<string>(item ? item.state:''),
        thumbnailImage : new FormControl<string>(item ? item.thumbnailImage:'')
      })
    }
    
  ngOnInit(): void {
    this.getGridData();
    this.userService.currentUsername.subscribe(
      (username) => (this.username = username)
    );
  }

  handleSearch(criteria: any): void {
    console.log('Search criteria received in dashboard:', criteria);

    // Example: Filter local data
    // Replace with a service call for actual data
    // this.results = this.mockData.filter((item) =>
    //   item.name.toLowerCase().includes(criteria.searchTerm.toLowerCase())
    // );
  }
  
  getGridData(){
    // console.log(1122);
     this.masterSrv.getAllProperty().subscribe((res:IAPIResponseModel)=>{
       console.log(res);
      
       this.gridData = res.data;
     })
  }

}
