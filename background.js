const bc = document.getElementById('background');

function random(min, max){
  let numb = Math.floor(Math.random()*(max-min)) + 1;
  return numb;
}
bc.addEventListener('click', ()=>{
 // document.body.style.backgroundColor = //"rgb(" + random(0, 255) + ","+ random(0, 255) //+ ","+ random(0, 255) + ")";
  
  document.body.style.backgroundImage = "linear-gradient(-45deg, rgb(" + random(0,255)+ "," + random(0,255) + "," + random(0,255) + "), rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + "), rgb(" + random(0,255) +  "," + random(0,255) + "," + random(0,255) + ") ) " ;
});