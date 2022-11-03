import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://dummyjson.com/products";

  getProduct() {
    return this.http.get(this.apiUrl);
  }

}
