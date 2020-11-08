var username=["mohamed","ahmed"];
var passwords=[123456,98765];
var f=0;
function check(){
    var x=document.getElementsByClassName("valid");

        for(var o=0;o<username.length;o++){
            
            if(x[0].value==username[o]){
                f=1;
                if(x[1].value==passwords[o]){
                    f=2;
                    break;
            
            }
            }

            
        }
    
    if(f>=2){
        alert ("wlcome "+username[o]);
        window.location.href = "index.html";

    }
    else{
        f=0;
        document.getElementById("wrong").style.visibility="visible";
    }
}