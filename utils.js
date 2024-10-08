function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function imprimirResultado(resultado){
    const LugarResultado=document.getElementById('resultado');
    LugarResultado.innerHTML=resultado;
}