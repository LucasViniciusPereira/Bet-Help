import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }

  getNome(){
    return "Meu primeiro servico Angular.js 4";
  }

}
