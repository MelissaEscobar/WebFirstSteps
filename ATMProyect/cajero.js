
var imagBilletes=[];
imagBilletes["50"]= "50.png";
imagBilletes["20"]= "20.png";
imagBilletes["10"]= "10.png";

//------------------------------------

var dinero;
var caja =[];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 4));
caja.push(new Billete(10, 4));
var retirar= [];
var cant;
var totalCaja =0;//  es la variable en donde voy a registrar el dinero que tiene la caja


// -----------------------------


var boton = document.getElementById("mybutton");
boton.addEventListener("click", atm) ;

var resultado = document.getElementById("resultado");
console.log(resultado);


function atm(){
 var d =  document.getElementById("dinero");
 dinero = parseInt(d.value);
console.log(dinero);
for(var v of caja){
  totalCaja = totalCaja + (v.valor * v.cantidad);
}

//--------------------------

if (dinero> totalCaja){
/*
  document.write("<p>");
  document.write("<h2>");
  document.write("No hay dinero suficiente para retirar");
  document.write("<h2 />");
  document.write("<p/>");*/
  resultado.innerHTML= resultado.innerHTML + "No hay dinero suficiente para retirar";

} else {


        if(dinero%10 ==0){

          for(var b of caja){
            if(dinero>0){
              div = Math.floor(dinero/ b.valor);
              if(div> b.cantidad){
                cant = b.cantidad;
              }else{
                cant = div;
              }

              retirar.push(new Billete(b.valor, cant));
              dinero = dinero - (b.valor * cant);
              b.cantidad = b.cantidad - cant;
              if(cant > 0){
                resultado.innerHTML += "Recibe un total de: " + cant +"<br/>"; b.mostrarBilletes();

              }

            }
          }
        }else {
          /*
          document.write("<br/> <p> <h2> No es posible entregar esa cantidad de dinero  <h2/>" );
          document.write("<p/>"); */
          resultado.innerHTML= resultado.innerHTML + "No es posible entregar esa cantidad de dinero"

        }


}


}



//------------------- TEST ----------------

console.log(retirar);
