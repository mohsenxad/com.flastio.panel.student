import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor(
    private http: HttpClient,
  ) { }

  async upload( url: String, file:any, contentType: String): Promise<any>{
    const body: any =file;
    const headers: HttpHeaders = new HttpHeaders(
      {
        "conte": "application/x-www-form-urlencoded",
        "ContentType": contentType.toString()
      });
    return this.http
      .put(url.toString(),body, {headers}).toPromise();
  }
}
