import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "moedaAbreviatura",
})
export class MoedaAbreviatura implements PipeTransform {
  transform(valor: any): any {
    if (valor < 0) {
      valor = valor * -1;
    }
    let x = valor.toString().split(".", 1);
    let y = x.toString().slice(0).length;

    if (y <= 3) {

      let value = valor.toString().slice(0);
      let array = value.split('');

      let temPonto = false;
      for (let i in array) {
        if (array[i] == '.') {
          temPonto = true;
          break;
        }
      }

      if (!temPonto) {
        return ("R$ " + value);
      } if (valor.toString().slice(-3, -2) != ".") {
        return ("R$ " + x[0] + "," + valor.toString().slice(-1) + '0');
      } if (valor.toString().slice(-2, -1) != ".") {
        return ("R$ " + x[0] + "," + valor.toString().slice(-2));
      }
    }

    if (y > 3 && y <= 6) {
      if (x[0].slice(-3, -2) != "0") {
        return ("R$ " + x[0].slice(0, y - 3) + "," + x[0].slice(-3, -2) + " mil");
      } else {
        return ("R$ " + x[0].slice(0, y - 3) + " mil");
      }
    }

    if (y > 6 && y <= 9) {
      if (x[0].slice(-6, -5) != "0") {
        return ("R$ " + x[0].slice(0, y - 6) + "," + x[0].slice(-6, -5) + " mi");
      } else {
        return ("R$ " + x[0].slice(0, y - 6) + " mi");
      }
    }

    if (y > 9 && y <= 12) {
      if (x[0].slice(-9, -8) != "0") {
        return ("R$ " + x[0].slice(0, y - 9) + "," + x[0].slice(-9, -8) + " bi");
      } else {
        return ("R$ " + x[0].slice(0, y - 9) + " bi");
      }
    }

    if (y > 12 && y <= 15) {
      if (x[0].slice(-12, -11) != "0") {
        return ("R$ " + x[0].slice(0, y - 12) + "," + x[0].slice(-12, -11) + " tri");
      } else {
        return ("R$ " + x[0].slice(0, y - 12) + " tri");
      }
    }

    if (y > 15 && y <= 18) {
      if (x[0].slice(-15, -14) != "0") {
        return ("R$ " + x[0].slice(0, y - 15) + "," + x[0].slice(-15, -14) + " quatr");
      } else {
        return ("R$ " + x[0].slice(0, y - 15) + " quatr");
      }
    }

    if (y > 18 && y <= 21) {
      if (x[0].slice(-18, -17) != "0") {
        return ("R$ " + x[0].slice(0, y - 18) + "," + x[0].slice(-18, -17) + " quint");
      } else {
        return ("R$ " + x[0].slice(0, y - 18) + " quint");
      }
    }

    // return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
