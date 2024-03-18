import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from './api.service';
import {AuthService} from './auth.service'

import {
    HttpClient,
    HttpClientModule,
    HTTP_INTERCEPTORS,
  } from '@angular/common/http';
@NgModule({
    imports: [
      CommonModule,
      HttpClientModule
      
    ],
    exports: [
      CommonModule,
    
     
    ],
    providers: [
        HttpClient,
        ApiService,
      AuthService,

      
       
    ],
  })

  export class ServiceModule{}