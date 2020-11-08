var x,y,j=0;

function full() {
    document.getElementById("overlay").style.display="block";
    document.getElementById("full-vid").style.display="block";
    document.getElementsByClassName("vid")[0].style.display="none";
  }
  function l(){
    document.getElementById("overlay").style.display="none";
    document.getElementById("full-vid").style.display="none";
    document.getElementsByClassName("vid")[0].style.display="block";
  } 
  function menuop(){
    document.getElementById("menu").style.display="block";
    document.getElementById("menu").style.animationName="men";
    document.getElementById("menu").style.width="400px";
  }
  function menucl(){
    var i,k=0;
    document.getElementById("menu").style.animationName="nem";
    document.getElementById("menu").style.width="0px";
    for( i=0 ;i<=2;i++){
      k++;
    }
    if(k===2){
      document.getElementById("menu").style.display="none";
    }
  }
