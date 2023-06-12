timer= 0;
noc = 0;
function st(){
    setInterval(function(){
        if(timer<5){
            timer = timer + 1;
            document.getElementById("tr").innerHTML =  "Timer : "+ timer;
        }
    },1000);
}

function ct()
{
    if(timer == 5){
        document.getElementById("ck").style.display = "none";
        if(noc <= 20){
            document.getElementById("img").src = "tts.jpg";
            document.getElementById("h3").innerHTML = "You're as slow as a three-toed sloth, better luck next time";
        }
       else if(noc > 20 && noc <= 30){
            document.getElementById("img").src = "cheetah.jpg";
            document.getElementById("h3").innerHTML = "You're as fast as a cheetah, you can still be peregrine falcon";
        }
        else if(noc > 30 ){
            document.getElementById("img").src = "pf.jpg";
            document.getElementById("h3").innerHTML = "You're the fastest, very very congratulations";
        }
    }
    else{
        noc = noc + 1;
        document.getElementById("ts").innerHTML = "Clicked :" + noc;
    }
}