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
  memoria: string = '0';
  x! : number;
  y!: number;

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

  grausParaRadianos(graus: number): number {
    return (graus * Math.PI) / 180;
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

      //OPERACOES HORIZONTAL
      case 6: {
        // (
        break;
      }
      case 7: {
        // )
        break;
      }
      case 8: {
        // mc
        break;
      }
      case 9: {
        // m+
        break;
      }
      case 10: {
        // m-
        break;
      }
      case 11: {
        // mr
        break;
      }
      case 12: {
        // 2^nd
        break;
      }
      case 13: {
        this.visor = "" + (this.valor1 * this.valor1);
        break;
      }
      case 14: {
        this.visor = "" + (this.valor1 * this.valor1 * this.valor1);
        break;
      }
      case 15: {
        
        break;
      }
      case 16: {
        this.visor = "" + Math.pow(Math.E, this.valor1);
        break;
      }
      case 17: {
        this.visor = "" + Math.pow(10, this.valor1);
        break;
      }
      case 18: {
        this.visor = "" + (1 / this.valor1);
        break;
      }
      case 19: {
        this.visor = "" + Math.sqrt(this.valor1);
        break;
      }
      case 20: {
        this.visor = "" + Math.pow(this.valor1, 1/3);
        break;
      }
      case 21: {
        
        break;
      }
      case 22: { 
        this.visor = "" + Math.log(this.valor1);
        break;
      }
      case 23: {
        this.visor = "" + Math.log10(this.valor1);
        break;
      }
      case 24: {
        let resultado = 1;
        if (this.valor1 < 0) {
          this.visor = "Error";
        } else { 
          for (let i = 2; i <= this.valor1; i++) {
            resultado *= i;
          }
          this.visor = "" + resultado;
        }
        break;
      }
      case 25: {
        this.visor = "" + Math.sin(this.grausParaRadianos(this.valor1)).toFixed(11);
        break;
      }
      case 26: {
        this.visor = "" + Math.cos(this.grausParaRadianos(this.valor1)).toFixed(11);
        break;
      }
      case 27: {
        this.visor = "" + Math.tan(this.grausParaRadianos(this.valor1)).toFixed(11);
        break;
      }
      case 28: {
        this.visor = "" + Math.E;
        break;
      }
      case 29: {
        // EE
        break;
      }
      case 30: {
        //Rad
        break;
      }
      case 31: {
        this.visor = "" + Math.sinh(this.grausParaRadianos(this.valor1)).toFixed(11);
        break;
      }
      case 32: {
        this.visor = "" + Math.cosh(this.grausParaRadianos(this.valor1)).toFixed(11);
        break;
      }
      case 33: {
        this.visor = "" + Math.tanh(this.grausParaRadianos(this.valor1)).toFixed(11);
        break;
      }
      case 34: {
        this.visor = "" + Math.PI;
        break;
      }
      case 35: {
        //Rand
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
