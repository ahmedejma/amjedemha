




    
  function makeGover(name,temperature,location,distance){
    
    var gover={}
      gover.name=name
    //  gover.list=[]
      gover.temperature=temperature
      gover.location=location
      gover.distance=distance

      // gover.add=addGover
      // gover.remove=removeGover  
      gover.sortByTemperature=hideandsor
      gover.sortByDistance=sortByDistance
      return gover
      
    }
    
  var gover1 =makeGover("Hammamet",39,"Cap Bon",40)
  var gover2 =makeGover("Jerba",32,"South",70)
  var gover3 =makeGover("Sousse",35,"South",30)

list = [gover1,gover2]
console.log(list)

function addGover(gover) {
  return list.push(gover)
}



var gover3 =makeGover("Sousse",35,"South",30)
addGover(gover3)
console.log(this.list)

  $('p1').append("Government: " + list[0].name + " Temperature: " +  list[0].temperature + " Location:" + list[0].location + " Distance from Aerport (km) :" + list[0].distance) 
 
  $('p2').append("Government: " + list[1].name + " Temperature: " + list[1].temperature + " Location:" + list[1].location + " Distance from Aerport (km) :" + list[1].distance) 
  $('p3').append("Government: " + list[2].name + " Temperature: " +  list[2].temperature + " Location:" +list[2].location + " Distance from Aerport (km):" + list[2].distance) 
 

  
  
  function hideandsor () {
    $(".hidden").empty()
function sortByTemperature () {
  console.log("ff",list)
  list.sort(function(a,b){
  return  a.temperature - b.temperature
  } ) 
  $(".hidden").append('hidden'); 
 }
}

// hideandsor ()

function sortByDistance (){
  console.log(list)
  list.sort(function(a,b){
    return a.distance-b.distance
  })
 }

//  $("hidden").onclick = function() { 
//   $("hidden").style.display = "none"; 
//  }
  
    


    $(".image1").click(function(){
      $(".ham").toggleClass("active");
    })
    $(".image2").click(function(){
      $(".jer").toggleClass("active");
    })
    $(".image3").click(function(){
      $(".sus").toggleClass("active");
    })
