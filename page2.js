

  function makeGover(name,weather,location,images){
    var gover={}
      gover.name=name
      gover.weather=weather
      gover.location=location
      gover.list=[]
      // gover.add=addGover
      // gover.remove=removeGover  
      // gover.sort=sortGover
      return gover
    }
    
  var gover1 =makeGover("Hammamet","Sunny","Cap Bon")
 
  var gover2 =makeGover("Jerba","Cloudy","South")
  var gover3 =makeGover("Sousse","Sunny","South",[,,,])

console.log(this.list)
  $('p1').text(gover1.name) 
 
  $('p1').append(gover1.weather)
  
  $('p1').append(gover1.location)

  $('p2').text(gover2.name) 
 
  $('p2').append(gover2.weather)
  
  $('p2').append(gover2.location)
  $('p3').text(gover3.name) 
 
  $('p3').append(gover3.weather)
  
  $('p3').append(gover3.location)
  



 
  
    

  $(document).ready(function(){
    ;$(".image1").click(function(){
      $(".Hammamet").toggleClass("active");
    })
    ;$(".image2").click(function(){
      $(".jerba").toggleClass("active");
    })
    ;$(".image3").click(function(){
      $(".Sousse").toggleClass("active");
    })
    // ;$(".image4").click(function(){
    //   $(".Hammamet").toggleClass("active");
    // })
    // ;$(".image5").click(function(){
    //   $(".Hammamet").toggleClass("active")
    // })






    $(".Dje").click(function(){
        $(".jerba").toggleClass("active");
      });
    
      $(".click").click(function(){
        $(".Sousse").toggleClass("active");
      });

  });
    

