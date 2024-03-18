import { Routes } from '@angular/router';
import {LoginComponent,UpdateComponent,InfoComponent} from '../components'
import { AuthGuard } from '../shared/auth.guard';

export const routes: Routes = [
    {
        path:'info',
        component:InfoComponent,
        canActivate:[AuthGuard]
    },
    {

      path:'',
      component:LoginComponent
    },
    {
        path:'update',
        component:UpdateComponent,
        canActivate:[AuthGuard]
    }
    
];
