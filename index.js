const horas = document.getElementById('Horas');
const Minutos = document.getElementById('Minutos');
const Segundos = document.getElementById('Segundos');

const relógio = setInterval(()=>{

    const dateToday = new Date();
  let Hr = dateToday.getHours().toString().padStart(2, '0');
  
 
let min = dateToday.getMinutes().toString().padStart(2, '0');
  
 
let S = dateToday.getSeconds().toString().padStart(2, '0');

    if(Hr<10) Hr = '0' + Hr
    if(min<10) min = '0' + min
    if(S<10) S = '0' + S


    horas.textContent = Hr;
    Minutos.textContent = min;
    Segundos.textContent = S;

})