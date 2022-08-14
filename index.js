var inc=1000;

clock();
function clock(){

  const date= new Date();
  
const hours=((date.getHours()+11)%12+1);
const minutes=date.getMinutes();
const seconds=date.getSeconds();

const hour=hours*30;
const minute=minutes*6;
const second=seconds*6;

const hourClass=document.querySelector('hour')
const minuteClass=document.quarySelector('minute')
const secondClass=document.quarySelector('second')


}

setInterval(clock,inc);