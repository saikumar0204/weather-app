var search=document.querySelector('#search-box')
var wind=document.getElementById('wind-speed')
var temp=document.getElementById('temp')
var precip=document.getElementById('precip')
var pressure=document.getElementById('pressure')
var humid= document.getElementById('humidity')
var uv= document.getElementById('uv')


var desc= document.getElementById('desc')

//add place details
var place= document.getElementById('place')

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
          wind.innerText=data.current.wind_speed+' km/hr';
          temp.innerText=data.current.temperature+' °C';
          precip.innerText=data.current.precip+' mm';
          pressure.innerText=String(data.current.pressure*0.001).slice(0,6)+' bar';

          time.innerText= data.location.timezone_id;
          humid.innerText= data.current.humidity+' %'
          uv.innerText= data.current.uv_index
          
          desc.innerText= data.current.weather_descriptions[0];


          place.innerHTML=`<div class="city" ><h2 id="city">${data.location.name}</h2></div>
          <div class="timezone" id="time">${data.location.timezone_id}</div>
          <div class="localtime" id="localtime">${data.location.localtime}</div>`
          search.value=''
      }
      
    }))
  }

})

// raw.addEventListener('click',()=>{
//   fetch('/data',{
//     method:"GET",
//     headers:{
//       "Content-Type":"application/json"
//     }
//   })
// })