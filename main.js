  let hour=document.getElementById('Hour');
  let minute=document.getElementById('Minute');
  let second=document.getElementById('Second');
  let displayHour=0, displayMin=0, displaySec=0;
  
  function Timer() {
 
    if ((hour.value==0&&minute.value==0)&&(second.value==0)) {
      hour.value=0;
      minute.value=0;
      second.value=0;
      playTimer();
      return;
      
    }else if(second.value!=0){
      second.value--;
    }else if(second.value==0 && minute.value !=0) {
      second.value= 59;
      minute.value--;
 
    }else if (minute.value==0 && hour.value!=0) {
      hour.value--;
      minute.value= 60;
    }else if((second.value==0 && minute.value==0)&&(hour.value!=0)){
      hour.value--;
      minute.value=60;
      second.value=59;
    }
    if (second.value>60) {
      second.value=second.value-60;
      minute.value++;
    }
    if (minute.value > 60&& minute.value < 100) {
      minute.value = minute.value - 60;
      hour.value++;
    }
  };
  function displayTime() {
    if (second.value < 10) {
      displaySec = '0' + (second.value).toString();
    }
    else {
      displaySec = (second.value).toString();
    }
    
    if (minute.value < 10) {
      displayMin = '0' + (minute.value).toString();
    }
    else {
      displayMin = (minute.value).toString();
    }
    if (hour.value < 10) {
      displayHour = '0' + (hour.value).toString();
    }
    else {
      displayHour = (hour.value).toString();
    }
    
    hour.value = displayHour;
    minute.value = displayMin;
    second.value = displaySec;
  }
  let pause = document.createElement('button');
  let Body = document.body;
  pause.setAttribute('id', 'pause');
  pause.innerHTML = "⏸️";
  displayTime();
  let start=document.getElementById('startBtn');
  let reset=document.getElementById('stopBtn');
  
  start.addEventListener('click',function(){
    if ((hour.value>0||minute.value>0)||(second.value>0)) {
      if (((minute.value).length<=2)&&((second.value).length<=2)){
    
    timeInterval=setInterval(Timer,1000);
    reset.disabled=false;
    start.disabled = true;
    second.disabled = true;
    second.style.fontWeight = 'bolder';
    minute.disabled = true;
    minute.style.fontWeight = 'bolder';
    hour.disabled = true;
    hour.style.fontWeight = 'bolder';
   
    Body.appendChild(pause);
    pauseWatch = document.getElementById('pause');
    pauseWatch.addEventListener('click', function() {
      start.disabled=false;
      clearInterval(timeInterval);
      return;
    })
      }else{
        alert('Apologize! you can\' set value of more than 2 digits (T_T)')
        hour.value = '00';
        minute.value = '00';
        second.value = '00';
      }
      
    }else{
      alert("Time can't flow backwards when you set it to zero ಠಿ_ಠ");
    }
    
    reset.addEventListener('click',function(e) {
        start.disabled=false;
        second.disabled = false;
        second.style.fontWeight = 'bolder';
        minute.disabled = false;
        minute.style.fontWeight = 'bolder';
        hour.disabled = false;
        hour.style.fontWeight = 'bolder';
      hour.value='00';
      minute.value='00';
      second.value='00';
      clearInterval(timeInterval);
      Body.removeChild(pauseWatch);
      reset.disabled=true;
    })
  });
  
  function hourUp() {
    
    hour.value++;
  }
  function minuteUp() {
    minute.value++;
  }
  function secondUp(){
    second.value++;
  }
  function hourDown() {
    if (hour.value>0) {
      hour.value--;
    }
  }
  function minuteDown() {
    if (minute.value>0) {
      minute.value--;
    }
  }
  function secondDown(){
    if (second.value>0) {
      second.value--;
    }
  }
  
  function playTimer() {
    let audio=new Audio('Timer_sound.mp3');
    audio.play();
  }
  
  
