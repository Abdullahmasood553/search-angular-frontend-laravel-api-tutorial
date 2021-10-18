import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFilterProductName(name: string) {
    const response = new Promise(resolve => {
      this.http.get(environment.apiUrl + `/products/search_product?search_product=${name}`).subscribe(data => {
        resolve(data);
      }, err => {
          console.log(err);
          
      });
    });
    return response;
  }
}
