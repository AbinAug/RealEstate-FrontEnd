export interface IPropertyType
{
    propertyTypeId: number;
    propertyType:string;
}

export interface IDashboard
{
    propertyTypeId: number;
    propertyType:string;
    description:string;
    title:string;
    city:string;
    state:string;
    thumbnailImage:string;
    price: Int32Array;
}

export interface IAPIResponseModel
{
    result: boolean;
    message:string;
    data:any;
}

export class Site {
    siteId: number
    siteTitle: string
    location: string
    propertyTypeId: string
    city: string
    pincode: string
    state: string
    totalProperties: string
    createdDate: Date
    lastUpdatedDate: Date

    constructor(){
        this.city='';
        this.siteId=0;
        this.createdDate = new Date();
        this.siteTitle = '';
        this.lastUpdatedDate = new Date();
        this.state = '';
        this.location='';
        this.propertyTypeId = '';
        this.pincode = '';
        this.totalProperties = '';
    }
  }
  