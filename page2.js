

  function makeGover(name,weather,location,images){
    var gover={
      name:name,
      weather:weather,
      location:location,
      images:images,
    }
    return gover
}
  var gover1 =makeGover("Hammamet","Sunny","Cap Bon",["https://a.cdn-hotels.com/gdcs/production146/d1430/e1a0723c-a2f6-491f-b099-8fb1bee294b2.jpg?impolicy=fcrop&w=800&h=533&q=medium","https://a.cdn-hotels.com/gdcs/production199/d1976/a073366a-43a5-4707-8321-488349ce7c9e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"])
  var gover2 =makeGover("Jerba","Cloudy","South",[,,,])
  var gover3 =makeGover("Sousse","Sunny","South",[,,,])

  $('p1').text(gover1.name) 
  $('p1').append(gover1.weather)
  $('p1').append(gover1.location)



 
  
    

  $(document).ready(function(){
    $("button").click(function(){
      $(".Hammamet").toggleClass("active");
    });
    $(".Dje").click(function(){
        $(".jerba").toggleClass("active");
      });
      $(".click").click(function(){
        $(".Sousse").toggleClass("active");
      });

  });
    

