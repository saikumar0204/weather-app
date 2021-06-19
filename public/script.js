var search=document.querySelector('#search-box')
var wind=document.getElementById('wind')
var temp=document.getElementById('temp')
var precip=document.getElementById('precip')
var pressure=document.getElementById('pressure')
var vis= document.getElementById('place')
var time= document.getElementById('timezone')
var raw= document.getElementById('raw')


search.addEventListener('keypress',(e)=>{
  if(e.keyCode==13){
    // console.log(search.value);
    fetch('/weather',{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
        'Accept':"application/json"
      },
      body:JSON.stringify({
        place:search.value
      })
    }).then(res=>res.json().then(data=>{
      if(data){
          raw.classList.remove('hidden')
          wind.innerText=data.current.wind_speed;
          temp.innerText=data.current.temperature;
          precip.innerText=data.current.precip;
          pressure.innerText=data.current.pressure;
          place.innerText=data.location.name;
          time.innerText= data.location.timezone_id;
      }
      
    }))
  }

})

raw.addEventListener('click',()=>{
  fetch('/data',{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  })
})