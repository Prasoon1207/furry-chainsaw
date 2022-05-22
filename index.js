var random1 = Math.floor(Math.random()*6)+1
var random2 = Math.floor(Math.random()*6)+1
document.querySelector(".dice .img1").setAttribute("src","images/"+"dice"+random1.toString()+".png");
document.querySelector(".dice .img2").setAttribute("src","images/"+"dice"+random2.toString()+".png");
if(random1 > random2){
  document.querySelector(".winner h1").innerHTML = "Player 1 Wins!"
}else{
  if(random1 < random2){
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!"
  }else{
    document.querySelector(".container h1").innerHTML = "Draw!"
  }
}
