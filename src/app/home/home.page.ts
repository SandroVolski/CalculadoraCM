import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor : string = '0';
  operacao! : number;
  valor1! : number;
  valor2! : number;
  isButtonClicked: number = -1;
  aux : number = 1;

  constructor() {}

  adicionarNumero(valor : string) {
    if ((this.isButtonClicked !== -1) && (this.aux === 1)) {
      this.zerar();
    }
    if ((this.visor.length === 1) && (this.visor === '0')) {
      this.visor = valor;
    } else if (valor === '.' && this.visor.indexOf('.') === -1){
      this.visor += valor;
    } else if (valor !== '.') {
      this.visor += valor;
    }
  }

  zerar() {
    this.visor = '0';
    this.aux = 0;
  }

  adicionarOperacao(valor : number) {
    this.operacao = valor;
    this.valor1 = +this.visor;
    this.visor = this.visor;
  }

  calcular(){
    this.valor2 = +this.visor;
    
    switch(this.operacao) {
      case 0 : {
        this.visor = "" + (this.valor1 + this.valor2);
        break;
      }
      case 1 : {
        this.visor = "" + (this.valor1 - this.valor2);
        break;
      }
      case 2 : {
        this.visor = "" + (this.valor1 * this.valor2);
        break;
      }
      case 3 : {
        this.visor = "" + (this.valor1 / this.valor2);
        break;
      }
      case 4 : {
        this.visor = "" + (this.valor1 / 100);
        break;
      }
      case 5 : {
        this.visor = "" + (this.valor1 * (-1));
        break;
      }
    }
  }

  toggleButton(operation: number) {
    this.aux = 1;
    if (this.isButtonClicked === operation) {
      this.isButtonClicked = -1; 
    } else {
      this.isButtonClicked = operation;
    }
  }
}
