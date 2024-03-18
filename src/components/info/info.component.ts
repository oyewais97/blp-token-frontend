import { Component,OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ServiceModule} from '../../services/service.module';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [ServiceModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit{
  tokenData: any;

  constructor(private apiService: ApiService,private route: Router) { }

  ngOnInit(): void {
    this.fetchTokenData();
  }

  fetchTokenData(): void {
    this.apiService.getTokenData().then(data => {
      this.tokenData = data;
      console.log("TOKEN DATA", this.tokenData)
    }).catch(error => {
      console.error('Error fetching token data:', error);
    });
  }

  formatBalance(balanceInWei: string): string {

    const balanceInEther = Number(balanceInWei) / Math.pow(10, 18);
    return balanceInEther.toFixed(2); 
  }

  updateToken() {

    this.route.navigate([
      '/update'
    ])
    console.log('Token updated');
  }
}
