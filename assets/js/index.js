function calculo(){
    let cantidad = document.querySelector("#cantidad").value;
    const precio = 400000;
    let total = Number(precio) * Number(cantidad);
    let resultado = document.querySelector("#total");
        resultado.innerHTML = "$" + total;
        document.querySelector("#cantidad_fnl").innerHTML = cantidad;



    let color = document.querySelector("#color").value;
    document.querySelector("#colorf").style.backgroundColor = color;


}