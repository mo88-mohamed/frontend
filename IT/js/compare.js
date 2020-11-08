
var games=["valorant","hyper scape","minecraft","tomp rider","nfs payback","call of duty warzone",];
var gra=["95%","50%","10%","80%","99%","98%"];
var play=["70%","40%","50%","30%","80%","70%"];
var controls=["80%","90%","60%","20%","60%","80%"];
var optimizing=["85%","20%","80%","30%","70%","92%"];
var servers=["94%","70%","65%","85%","55%","80%"];
var z,b;
function opt(){
    var x=document.getElementsByClassName("lelist");
    var y=document.getElementsByClassName("riglist");
    for(var i=0;i<x.length;i++){
        x[i].style.display="none";
        y[i].style.display="none";
        z=b=undefined;
    }
}
function search(){
    var g1=document.getElementsByClassName("ser")[0].value;
    var g2=document.getElementsByClassName("ser")[1].value;
    var vars;
    
    opt();
if(g1.length==0 || g2.length== 0){
        alert("fill all fields");
}
else{
    for(var i=0;i<=games.length;i++){
        if(g1==games[i]){
         b=i;
          vars=[gra[b],play[b],controls[b],optimizing[b],servers[b]];
   
            document.getElementsByClassName("lelist")[b].style.display="flex";
            for(var p=0;p<vars.length;p++){
                document.getElementsByClassName("leprogress")[p].style.width=vars[p];
                document.getElementsByClassName("leprogress")[p].style.transition="all 2s";
                document.getElementsByClassName("leh")[p].innerHTML=vars[p];

            }
            
        }
        if(g2==games[i]){
            z=i;   
          vars=[gra[z],play[z],controls[z],optimizing[z],servers[z]];

               document.getElementsByClassName("riglist")[z].style.display="flex";
               for(var p=0;p<vars.length;p++){
                document.getElementsByClassName("riprogress")[p].style.width=vars[p];
                document.getElementsByClassName("riprogress")[p].style.transition="all 2s";

                document.getElementsByClassName("rih")[p].innerHTML=vars[p];


            }

           }

    }
    if(b==undefined||z==undefined){
        alert("notfound");
    }
}

}