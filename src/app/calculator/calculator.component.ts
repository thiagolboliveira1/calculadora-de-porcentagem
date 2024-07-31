import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculoComponent {
  valorTotal: number = 0;
  percentualComissao: number = 0;
  comissao: number | null = null;

  calcularComissao() {
    if (this.valorTotal > 0 && this.percentualComissao > 0) {
      this.comissao = (this.valorTotal * this.percentualComissao) / 100;
    } else {
      this.comissao = null;
    }
  }

  formatarNumero(valor: number | null): string {
    if (valor === null) {
      return '';
    }

    let formatarValor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if (valor > 1000){
      const partes = formatarValor.split(',');
      if (partes.length > 1 && partes[1].length === 2) {
        formatarValor = partes[0] + ',' + partes[1] + '0';
      }
    }
    return formatarValor;
  }



  formatarPercentual(valor: number): string {
    return valor.toFixed(2).replace('.', ',') + '%';
  }
}
