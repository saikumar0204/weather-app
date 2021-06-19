var search=document.querySelector('#search-box')
// var searchBox= new google.maps.places.SearchBox(search)
// searchBox.addListener('places_changed',()=>{
//   const places= searcBox.getPlaces()[0]
//   if(places==null) return ;
//   console.log(places.geometry);
// })
// function initMap(){
//   var searchBox= new google.maps.places.SearchBox(search)
//   console.log('Point 1');
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(search);
//   searchBox.addListener('places_changed',()=>{
//     const places= searchBox.getPlaces();
//     if(places.length==0){
//       return ;
//     }
//     console.log('Event Fired');
//   })
// }

// function initMap(){
//   var searchBox= new google.maps.places.SearchBox(search)
//   console.log('Point 1');
  
//   searchBox.addListener('places_changed',()=>{
//     const places= searchBox.getPlaces();
//     if(places.length==0){
//       return ;
//     }
//     console.log('Event Fired');
//   })
// }

var wind=document.getElementById('wind')
var temp=document.getElementById('temp')
var precip=document.getElementById('precip')
var pressure=document.getElementById('pressure')
var vis= document.getElementById('place')
var time= document.getElementById('timezone')
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
