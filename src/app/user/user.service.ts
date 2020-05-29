import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findbyname(name){
    return this.http.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`).toPromise();
  }

  findByRanking(){
    return this.http.get('https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking').toPromise();
  }
}
