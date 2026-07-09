const date=document.getElementById('timer')
console.log(date)
setInterval(function(){
    let timer=new Date()
    date.innerHTML=timer.toLocaleTimeString();
},1000)
