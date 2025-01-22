import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PropertyComponent } from './pages/property/property.component';
import { PropertyTypeComponent } from './pages/property-type/property-type.component';
import { SiteComponent } from './pages/site/site.component';
import { BookingComponent } from './pages/booking/booking.component';
import { CreatepropertyComponent } from './pages/createproperty/createproperty.component';
import { AdvancedSearchComponent } from './pages/advancedsearch/advancedsearch.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'property-type',
                component:PropertyTypeComponent
            },
            {
                path:'createproperty',
                component:CreatepropertyComponent
            },
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'site-master',
                component:SiteComponent
            },
            {
                path:'booking',
                component:BookingComponent
            }
        ]
    }
];
