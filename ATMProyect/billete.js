class Billete{

  constructor(valor, cantidad){
    this.valor = valor;
    this.nombre = String(this.valor);
    this.cantidad = cantidad;
    this.imagen = new Image();
    this.imagen.src = imagBilletes[this.nombre];
  }

  mostrarBilletes(){
    document.body.appendChild(this.imagen);
    //retirar.innerHTML += "<img src="+ this.imagen.src + ">"
    //console.log(retirar.innerHTML);
  }
}
