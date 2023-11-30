




    
  function makeGover(name,temperature,location){
    
    var gover={}
    gover.list
      gover.name=name
      gover.temperature=temperature
      gover.location=location

      // gover.add=addGover
      // gover.remove=removeGover  
      gover.sortByTemperature=sorTempature
      return gover
    }
    
  var gover1 =makeGover("Hammamet",39,"Cap Bon")
  var gover2 =makeGover("Jerba",32,"South")
  var gover3 =makeGover("Sousse",35,"South")

var list = [gover1,gover2,gover3]

// console.log(this.list)
  $('p1').text("Government: " + gover1.name + " Temperature: " +  gover1.temperature + " Location:" + gover1.location) 
  $('p2').text("Government: " + gover2.name + " Temperature: " + gover2.temperature + " Location:" + gover2.location) 
  $('p3').text("Government: " +gover3.name + " Temperature: " +  gover3.temperature + " Location:" +gover3.location) 
 
  // $('p1').text(<ul> <li>gover1.name</li> <li>gover2.weather  </li> <li> gover1.location</li> </ul>)

  
 var sorTempature=function() {
  list.sort(function(a,b){
    a.temperature-b.temperature
  })
 }

 $('input').click(function(){
  

 })



 
  
    

  $(document).ready(function(){
    ;$(".image1").click(function(){
      $(".ham").toggleClass("active");
    })
    ;$(".image2").click(function(){
      $(".jer").toggleClass("active");
    })
    ;$(".image3").click(function(){
      $(".sus").toggleClass("active");
    })
  })
    



//   $(document).ready(function(){

// ;$(".image4").click(function(){
//       $(".Hammamet").toggleClass("active");
//     })
//     ;$(".image5").click(function(){
//       $(".Hammamet").toggleClass("active")
//     })


//     $(".Dje").click(function(){
//         $(".jerba").toggleClass("active");
//       });
    
//       $(".click").click(function(){
//         $(".Sousse").toggleClass("active");
//       });

//     })
