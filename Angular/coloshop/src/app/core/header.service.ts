import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http : HttpClient) { }
  url  = 'http://localhost:3000/Data'
  getUrl = this.http.get(this.url)
}
