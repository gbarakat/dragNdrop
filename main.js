//----------------------------------Timer Handling Function---------------------//
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
    var submitBtn = document.getElementById("submitBtn");
    var currentObject ;
    // the image stock array will be responsible for rendering images on the document
    var imageStock=[
        {image1:"./images/css.png",image2:"./images/html.png",image3:"./images/js.png",image4:"./images/react.png"},
        {image1:"./images/react.png",image2:"./images/js.png",image3:"./images/css.png",image4:"./images/html.png"},
        {image1:"./images/js.png",image2:"./images/react.png",image3:"./images/html.png",image4:"./images/css.png"},
        {image1:"./images/html.png",image2:"./images/css.png",image3:"./images/react.png",image4:"./images/js.png"}
]
        var ix=0;
    // this function render the images from imageStock array to the document
        function setCodeSrc(ix){
            document.getElementById("boxImage1").src= imageStock[ix].image1;
            document.getElementById("boxImage2").src= imageStock[ix].image2;
            document.getElementById("boxImage3").src= imageStock[ix].image3;
            document.getElementById("boxImage4").src= imageStock[ix].image4;
        }
        
        setCodeSrc(ix)    
        submitBtn.addEventListener("click", nxtImages,false)
    // this function is responsible for updating the images of the document
    // by changing the value of ix 
        function nxtImages(e){
            if(ix<3){
                ix++;
                setCodeSrc(ix);
              }else{
                ix=0;
            }
        }
    //--------------------------the Drag and drop events and methods--------------------//
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
