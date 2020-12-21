import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }

  obterClimaAgora(cidade: any): Observable<any> {
    return this.http.get(
      environment.baseUrl +
      'weather?q=' + cidade +
      '&appid=' + environment.appId +
      '&units=' + environment.units
    )
  }

}