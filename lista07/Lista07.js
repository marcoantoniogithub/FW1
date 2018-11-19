function Calculadora() {
  this.operando1 = "";
  this.operando2 = "";
  this.somar = function() {
    this.operando1 = eval(this.operando1+this.operando2);
    return this.operando1;
  }
  this.raiz = function() {
    return Math.sqrt(parseFloat(this.operando1)); 
  }
  this.mod = function() {
    return parseFloat(this.operando1) % parseFloat(this.operando2); 
  }
}