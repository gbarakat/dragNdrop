(function timerHandler(){
    const SECONDHAND = document.getElementById("second");
    const Clockbg = document.getElementById("circle")
    const stpIntrvalBtn = document.getElementById("stpInterval")
    
    let sec = 0;
    let secPosition = sec*360/60;
    let stopInterval = false;
    let click= 0;

    function runTheClock() {
        console.log(click);
        if(!stopInterval || click == 0)
        {
            secPosition = secPosition+6;
            click=0;
            if (secPosition > 210){

                    Clockbg.style.fill = "red";
            }
            if (secPosition == 360){
                secPosition=0;
                Clockbg.style.fill = "green";
                //score -=100
            if(stpIntrvalBtn.innerHTML="Play Timer"){
                stpIntrvalBtn.innerHTML="Stop Timer"
            }    
        }
        SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
        } 

    }

    setInterval(runTheClock, 1000);

    stpIntrvalBtn.addEventListener("click", stopTimer)

    function stopTimer(){
            stopInterval = true;
            if(click==0 ){
                //when the timer is stopped
                click++;
                stpIntrvalBtn.innerHTML="Play Timer";
            }else{
                 //when the timer is running
                click=0;
                stpIntrvalBtn.innerHTML="Stop Timer";
            }

    } 
})();

function doFirst(){
    var currentObject ;
    var boxImage = document.getElementsByClassName("boxImage")
    for(var i =0; i< boxImage.length; i++){
        boxImage[i].addEventListener("dragstart", startDrag , false);    
    }
    var leftbox = document.getElementsByClassName('leftbox'); 

    for(var i = 0; i< leftbox.length; i++){
            
            leftbox[i].addEventListener("dragenter",function(e){
                    e.preventDefault(); 
                      e.target.style.backgroundColor="white";
                    },
                false
            );
    
            leftbox[i].addEventListener("dragover", function(e){
                    e.preventDefault();
                        e.target.style.backgroundColor="gray";
                    },
                false
            );
            
            leftbox[i].addEventListener("dragleave", function(e){
                e.preventDefault();
                    e.target.style.backgroundColor="white";
                    },
                false
                );
            
            leftbox[i].addEventListener('drop',dropped, false);
   }

    function startDrag(e){
        currentObject = e.target;
        }

    function dropped(evt){
        evt.preventDefault();
        for(var i =0; i<leftbox.length; i++){
                evt.target.innerHTML = " ";
                evt.target.append(currentObject);
                currentObject.removeEventListener("dragstart", startDrag, false);    
                    }
                }
    }
window.addEventListener("load", doFirst , false);
