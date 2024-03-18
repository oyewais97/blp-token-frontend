import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    HTTP_INTERCEPTORS,
  } from '@angular/common/http';
import {JwtInterceptor} from './jwt.interceptor'  
import {AuthGuard} from './auth.guard'


@NgModule({
    imports: [],
    exports: [],
    providers: [
      AuthGuard,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

      
       
    ],
  })

  export class SharedModule{}