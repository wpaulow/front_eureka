import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaleConosco } from '../modal/faleConosco';

@Injectable({
  providedIn: 'root'
})
export class FaleconoscoService {

  constructor(private http: HttpClient) { }

  insere(faleConosco: FaleConosco){
    return this.http.post("http://31.220.49.115:8080/faleconosco/novo/", faleConosco);
  }
}
