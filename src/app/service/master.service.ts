import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { IAPIResponseModel, IDashboard, IPropertyType, Site } from '../model/master';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  httpClient = inject(HttpClient);
  constructor(private http: HttpClient) { }
  //Dashboard
  getAllProperty() : Observable<IAPIResponseModel>{
    console.log(environment.localhost_API_URL + 'propertydetails');
    //return this.httpClient.get<IAPIResponseModel>(environment.RealEstate_API_URL + 'GetAllProperty')
     return this.httpClient.get<IAPIResponseModel>(environment.localhost_API_URL + 'propertydetails')
  }

  //Property Type
  getAllPropertyType() : Observable<IAPIResponseModel>{
    return this.http.get<IAPIResponseModel>(environment.API_URL + 'GetAllPropertyType')
  }

  savePropertyDetails(obj: IDashboard) : Observable<IAPIResponseModel>{
    const newObh = [obj];
    console.log(33333);
    console.log(newObh);
    // return this.http.post<IAPIResponseModel>(environment.API_URL + 'AddPropertyType',newObh)
    return this.http.post<IAPIResponseModel>(environment.localhost_API_URL + 'propertydetails',newObh)
  }

  savePropertyType(obj: IPropertyType) : Observable<IAPIResponseModel>{
    const newObh = [obj];
    return this.http.post<IAPIResponseModel>(environment.API_URL + 'AddPropertyType',newObh)
  }

  updatePropertyType(obj: IPropertyType) : Observable<IAPIResponseModel>{
    return this.http.put<IAPIResponseModel>(environment.API_URL + 'UpdatePropertyType',obj)
  }

  deletePropertyTypeById(id: number) : Observable<IAPIResponseModel>{
    return this.http.delete<IAPIResponseModel>(environment.API_URL + 'DeletePropertyTypeById?id='+ id)
  }

  //Site
  saveSites(obj: Site) : Observable<IAPIResponseModel>{
    return this.http.post<IAPIResponseModel>(environment.API_URL + 'AddSites',obj)
  }

  getAllSites() : Observable<IAPIResponseModel>{
    return this.http.get<IAPIResponseModel>(environment.API_URL + 'GetAllSites')
  }

}
