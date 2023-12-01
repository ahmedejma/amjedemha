function MakeGov(name,temperature,location,distance,images) {
    return {
    name:name ,
    temperature:temperature,
    location:location,
    distance:distance,
    images:images,
    getNextImages,
    sortbyTemperature,
    sortbyDistance,
  
  }
  }

  var gover1 =MakeGov("Hammamet",32,"Cap Bon",40,["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxFF4cmTla_Nci3U-K4FVJjpuncLXpouv2A&usqp=CAU",
  ["https://a.cdn-hotels.com/gdcs/production146/d1430/e1a0723c-a2f6-491f-b099-8fb1bee294b2.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  "https://a.cdn-hotels.com/gdcs/production8/d260/d0f5c4a9-820e-4a7e-9cea-18cbbf0adc82.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
"https://a.cdn-hotels.com/gdcs/production199/d1976/a073366a-43a5-4707-8321-488349ce7c9e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"]])

  var gover2 =MakeGov("Jerba",37,"Cap Bon",20,["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Lu_GSu0sLT99fwWXqY7rtvmhyl-jF8tbrL0h849rSN6ClO0Ik6p0R6yNIQVEgvfbOnI&usqp=CAU",
  ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrEEw66QC-ao39kxZhas0scM9B8jpSpuk0Q&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmwTO-r6DDeq_KWfe6HgV2XXj56UFqkMen4FiIm_IzXA8KFaTa_nfJdEb67u9Eyc-NXk&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXzQVM-SIAXV1Nr-r7pzGwOa1PMIdKw-WU_uYa4nVh8btNkAFWbSrzT3AfvcDmr-Kzg8&usqp=CAU"]])


  var gover3 =MakeGov("Soussa",36,"Cap Bon",60,["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLOtkvAPhARuM1ZYIjyNftNqST17DEXYEPw&usqp=CAU",
  ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe35sv6e5TcksZcrRX7E_apSDJSblhQgBorw&usqp=CAU",
  "https://a.cdn-hotels.com/gdcs/production8/d260/d0f5c4a9-820e-4a7e-9cea-18cbbf0adc82.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsqzJoc71IwyjSRT-3eLI8aHDKuXgnMCWSg&usqp=CAU"]])

  console.log(gover1)
 


  $('body').css("background-color","bisque")
  $("title").text("Hotely Booking")
  $(".first").text("Come To Tunisia").css({"font-size":"40px","margin-top": "5px"})
  $(".first").css({"text-align":"center","background-color":"aqua"})



function getNextImages() {
$('#img').attr('src',gover1[0].images)
$('#img').attr('src',gover2[0].images)
$('#img').attr('src',gover3[0].images)
}



$(".shop1").html("<img id='img1'  class='ham' src = " + gover1.images[0]  + "/>")
$(".shop2").html("<img id='img2' class='jer' src = " + gover2.images[0]  + "/>")
$(".shop3").html("<img id='img3' class='sus' src = " + gover3.images[0]  + "/>")



$(".shop1").append("<img class='img11' class='ham' src = " + gover1.images[1][0]+ "/>"  )
$(".shop1").append("<img class='img11' class='ham' src = " + gover1.images[1][1]+ "/>"  )
$(".shop1").append("<img class='img11' class='ham' src = " + gover1.images[1][2]+ "/>"  )

$(".shop2").append("<img class='img22' class='jer' src = " + gover2.images[1][0]+ "/>"  )
$(".shop2").append("<img class='img22' class='jer' src = " + gover2.images[1][1]+ "/>"  )
$(".shop2").append("<img class='img22' class='jer' src = " + gover2.images[1][2]+ "/>"  )
$(".shop3").append("<img class='img33' class='sus' src = " + gover3.images[1][0]+ "/>"  )
$(".shop3").append("<img class='img33' class='sus' src = " + gover3.images[1][1]+ "/>"  )
$(".shop3").append("<img class='img33' class='sus' src = " + gover3.images[1][2]+ "/>"  )


$(".shop1").append("<h2>" + " Government : "+ gover1.name + "</h2>" + "<h2>" + " Temperature : " + gover1.temperature + "</h2>" +"<h2>" + "Location :" +  gover1.location + "</h2>"  + "<h2>" + "Distance :" + gover1.distance + "</h2>" )  
$(".shop2").append("<h2>" + " Government : "+ gover2.name + "</h2>" + "<h2>" + " Temperature : " + gover2.temperature + "</h2>" +"<h2>" + "Location :" +  gover2.location + "</h2>"  + "<h2>" + "Distance :" + gover2.distance + "</h2>" )  
$(".shop3").append("<h2>" + " Government : "+ gover3.name + "</h2>" + "<h2>" + " Temperature : " + gover3.temperature + "</h2>" +"<h2>" + "Location :" +  gover3.location + "</h2>"  + "<h2>" + "Distance :" + gover3.distance + "</h2>" )  


$(".img11").css({"width":"360px","height":"240px"})
$(".img22").css({"width":"360px","height":"240px"})
$(".img33").css({"width":"360px","height":"240px"})










$("#img1").click(function(){
  $(".img11").toggleClass("active");
})
$("#img2").click(function(){
  $(".img22").toggleClass("active");
})
$("#img3").click(function(){
  $(".img33").toggleClass("active");
})




var list=[gover1,gover2,gover3]

function sortbyDistance(){

    list.sort(function(a,b){
      return  a.distance - b.distance
    })

}

  
function sortbyTemperature () {
 
  list.sort(function(a,b){
  return  a.temperature - b.temperature
  } ) 
 }



