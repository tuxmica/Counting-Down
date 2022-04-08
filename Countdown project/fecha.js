let fecha = new Date();

//let fechaahora = Date.now();
let fechaencuentro = new Date('2022-05-28T07:35:00.000-03:00');

function masClara(tiempo){
    var conteodias = 24 * 60 * 60 * 1000
    var conteohoras = 60 * 60 * 1000
    var conteominutos = 60 * 1000
    var conteosegundos = 1 * 1000
    dias = Math.floor (tiempo/conteodias)
    horas = Math.floor((tiempo-(dias*conteodias))/conteohoras)
    minutos= Math.floor(((tiempo-(dias*conteodias)-(horas*conteohoras))/conteominutos)) 
    segundos = Math.floor(((tiempo-(dias*conteodias)-(horas*conteohoras)-(minutos*conteominutos))/conteosegundos))
    return [dias, horas, minutos, segundos]
}

//let fechaahora = Date.now();
//console.log(fechaahora.getFullYear())
//console.log(fechaahora.getDay())
//console.log(fechaahora.getDate())
//console.log(fechaencuentro)
//console.log(fechaahora.toLocaleTimeString());
//console.log(fechaencuentro.toLocaleTimeString());
//console.log(fechaencuentro-fechaahora);

//console.log(fechaahora);
function yEntonces(){
    let fechaahora = new Date();
    let cuantofalta = fechaencuentro-fechaahora
    var somename = masClara(cuantofalta);
    return '<div>'+ somename[0]+' dias '+ somename[1]+' horas </div>'+ somename[2]+' minutos '+ somename[3]+' segundos'
    //console.log (somename[0]+' dias', somename[1]+' horas', somename[2]+' minutos',somename[3]+' segundos' )
} 

//console.log (somename[0]+' dias', somename[1]+' horas', somename[2]+' minutos',somename[3]+' segundos' )
