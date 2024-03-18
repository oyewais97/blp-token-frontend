import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:7105'

  constructor(private http: HttpClient) { }

  async login(username: any,password:any): Promise<any> {
    try {
      const response = await this.http.post(`${this.baseUrl}/login`,{ username, password }).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async calculateSupply(data: any): Promise<any> {
    try {
      const response = await this.http.post(`${this.baseUrl}/calculate-supply`, data).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getTokenData(): Promise<any> {
    try {
      const response = await this.http.get(`${this.baseUrl}/token-data`).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
  updateToken(tokenAddress: string, totalSupply: number): Promise<any> {
    const url = `${this.baseUrl}/update-token`; 

  
    const payload = {
      address: tokenAddress,
      totalSupply: totalSupply
    };

    // Make the PUT request to update token data and return the promise
    return this.http.put(url, payload).toPromise();
  }

}