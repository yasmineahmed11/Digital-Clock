function clock(){
  let now = new Date();
  let dig = document.getElementById("div1");
  let hour = now.getHours();

  if(hour > 12){
    dig.innerHTML = `${hour - 12} : ${now.getMinutes()} :  ${now.getSeconds()} pm`;
  }

  else if(hour == 12){
    dig.innerHTML = `${hour} : ${now.getMinutes()} : ${now.getSeconds()} pm`
  }

  else if( hour == 0){
    dig.innerHTML = `12 : ${now.getMinutes()} : ${now.getSeconds()} am`;
  }

  else{
    dig.innerHTML = `${hour} : ${now.getMinutes()} : ${now.getSeconds()} am`;
  }
}

let digtime = window.setInterval(clock, 1000);

document.getElementById("stop").onclick= function(){
  window.clearInterval(digtime);
}

document.getElementById("play").onclick = function () {
  digtime = window.setInterval(clock, 1000);
};