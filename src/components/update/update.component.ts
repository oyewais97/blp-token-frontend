import { Component, OnInit } from '@angular/core';
import {ServiceModule} from '../../services/service.module'
import {ApiService} from '../../services/api.service'
import {FormsModule,FormBuilder,ReactiveFormsModule , FormGroup, Validators } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ServiceModule,FormsModule,RouterModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
  tokenAddress: string = '';
  totalSupply: number = 0;
  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
  }

  async updateTokenData(){
    const updateToken = await this.apiService.updateToken(this.tokenAddress,this.totalSupply);
    if(updateToken){
      this.route.navigate([
        '/info'
      ])
    }
  }

}
