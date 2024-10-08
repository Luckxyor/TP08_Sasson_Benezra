function ej1(){
    const Nombre=prompt("Ingrese su nombre")
    const fecha=prompt("Ingrese su fecha de nacimiento en formato YYYY-MM-DD");
    const FechaNacimiento=new Date(fecha);
    const FechaAhora=new Date();
    let Edad=FechaAhora.getFullYear()-FechaNacimiento.getFullYear();
    if (FechaAhora.getMonth() < FechaNacimiento.getMonth() || (FechaAhora.getMonth() == FechaNacimiento.getMonth() && FechaAhora.getDate() < FechaNacimiento.getDate())) {
        Edad--;
    }
    imprimirResultado(`Hola ${Nombre}, tienes ${Edad} años`);
}

function ej2(){
    const frutas=["Manzana","Naranja","Banana","Uvas","Pera","Melon","Mango","Cereza","Mandarina","Kiwi"];
    console.log(`Nuestro almacen se compone de: ${frutas}`);
    let frutaElegida=prompt("Ingrese la fruta que desea ver si se encuentra en nuestro almacen de carrefour");
    const frutaElegidaMay=capitalizeFirstLetter(frutaElegida);
    const busqueda=frutas.includes(frutaElegidaMay);
    if(busqueda){
        imprimirResultado(`SI!!!!!!!!! TENEMOS ${frutaElegidaMay}`);
    }
    else{
        imprimirResultado(`No tenemos ${frutaElegidaMay} :(`);
    }
}

function ej3(){
    if(10=='10'){
        console.log(true);
    }
    else{
        console.log(false);
    }
    if(10==='10'){
        console.log(true);
    }
    else{
        console.log(false);
    }
    //Las diferencias que encontramos es que el == hace una comparacion unicamente del contenido de la variable, en cambio el === hace una comparacion del tipo de variable y el contenido


    console.log(typeof 10.6);
    //El tipo de dato es: number


    if(true==1){
        console.log(true);
    }
    else{
        console.log(false);
    }
    //Es cierto, las conclusiones que podemos obtener es que los tipos booleanos son en realidad numeros binarios, donde el true vale 1 y el false vale 0
}

function ej4(){
    const ciudad={
        nombre: "Ciudad Autonoma de Buenos Aires",
        fechaFundacion: new Date(1580,11,6),
        poblacion: 3121000,
        extension: 203.3
    }
    for(const caraceristica in ciudad){
        console.log(`${caraceristica}: ${ciudad[caraceristica]}`)
    }
}

function ej5(){
    const numeros=[2,4,6,8,10];
    const multiplicados=numeros.map(numero=>numero*2);
    imprimirResultado(multiplicados);
}

function ej6(){
    let piso, piramideA='', piramideB='';
    for (let i = 1; i < 6; i++) {
        piso="";
        for(let repeticion=0; repeticion<i; repeticion++){
            piso+='*';
        }
        piramideA += piso + '<br>';
    }
    
    for (let i = 1; i <= 5; i++) {
        piso = '';

        for (let j = 0; j < 5 - i; j++) {
            piso += '-';
        }
        
        for (let repeticion = 0; repeticion < (2 * i - 1); repeticion++) {
            piso += '*';
        }
        
        piramideB += piso + '<br>';
    }
    imprimirResultado(piramideA + '<br>' + piramideB);
}