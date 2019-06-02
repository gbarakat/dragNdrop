//----------------------------------Timer Handling Function---------------------//
function doFirst(){
    (function timerHandler(){
    const SECONDHAND = document.getElementById("second");
    const Clockbg = document.getElementById("circle")
    const stpIntrvalBtn = document.getElementById("stpInterval")
    
    let sec = 0;
    let secPosition = sec*360/60;
    let stopInterval = false;
    let click= 0;

    function runTheClock() {
        //console.log(click);
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

(function dragAndDrop(){
   
    var currentObject ;
    // the image stock array will be responsible for rendering images on the document
    var imageStock=[
        {image1:"./images/django-wrong.png",
        image2:"./images/html.png",
        image3:"./images/js.png",
        image4:"./images/css.png",
        image5:"./images/react.png",
        image6:"./images/sass.png",
        image7:"./images/node.png",
        image8:"./images/angular.png"
    },
    {image1:"./images/django-wrong.png",
    image2:"./images/html.png",
    image3:"./images/js.png",
    image4:"./images/css.png",
    image5:"./images/react.png",
    image6:"./images/sass.png",
    image7:"./images/node.png",
    image8:"./images/angular.png"
    },
    {image1:"./images/django-wrong.png",
    image2:"./images/html.png",
    image3:"./images/js.png",
    image4:"./images/css.png",
    image5:"./images/react.png",
    image6:"./images/sass.png",
    image7:"./images/node.png",
    image8:"./images/angular.png"
    }  
    

    ]
    var ix=0;
    // this function render the images from imageStock array to the document
        function setCodeSrc(ix){
            document.getElementById("boxImage1").src= imageStock[ix].image1;
            document.getElementById("boxImage2").src= imageStock[ix].image2;
            document.getElementById("boxImage3").src= imageStock[ix].image3;
            document.getElementById("boxImage4").src= imageStock[ix].image4;
            document.getElementById("boxImage5").src= imageStock[ix].image5;
            document.getElementById("boxImage6").src= imageStock[ix].image6;
            document.getElementById("boxImage7").src= imageStock[ix].image7;
            document.getElementById("boxImage8").src= imageStock[ix].image8;
        }
        
        setCodeSrc(ix)    
        
    // this function is responsible for updating the images of the document
    // by changing the value of ix 
        function nxtImages(e){
            //console.log(ix);
            if(ix<3){
                ix++;
                setCodeSrc(ix);
              }else{
                ix=0;
            }
        }
    //--------------------------the Drag and drop events and methods--------------------//
    var boxImage = document.getElementsByClassName("boxImage");
    var rightbox = document.getElementById('rightbox')
    var leftbox = document.getElementsByClassName('leftbox'); 
    var submitBtn = document.getElementById("submitBtn");
    var selectedImages= []
    for(var i =0; i< boxImage.length; i++){
        boxImage[i].addEventListener("dragstart", startDrag , false);    
    }
    

    for(var i = 0; i< leftbox.length; i++){
            
            leftbox[i].addEventListener("dragenter",function(event){
                        event.preventDefault(); 
                       // event.target.style.backgroundColor="white";
                    },
                false
            );
    
            leftbox[i].addEventListener("dragover", function(e){
                        e.preventDefault();
                       // e.target.style.backgroundColor="gray";
                    },
                false
            );
            
            leftbox[i].addEventListener("dragleave", function(e){
                e.preventDefault();
    //                e.target.style.backgroundColor="white";
                    },
                false
                );
            
            leftbox[i].addEventListener('drop',dropped, false);
            rightbox.addEventListener('drop',dropBack,false)
        
   }

    function startDrag(e){
        currentObject = e.target;
        }
    function dropBack(e){
        e.preventDefault();
        e.target.append(currentObject)
    }   
    function dropped(evt){
        var subtString= currentObject.src.substr(29);
        evt.target.style.backgroundColor="white";
        evt.preventDefault();
        for(var i =0; i<leftbox.length; i++){
                    for(var j=0; j<boxImage.length; j++){
                        if(evt.target==boxImage[j]&& boxImage[j].hasAttribute("src")){
                            console.log("object detected");
                            boxImage[j].src="./images/"+subtString;
                            evt.target.innerHTML =" ";
                            evt.target.append(currentObject);
                        }else{
                            evt.target.innerHTML =" ";
                            evt.target.append(currentObject);
                            console.log("object replaced");
                        }
                    }
                    
        }
                 
                selectedImages.push(subtString);
                // these next lines for removing any duplicated values inside the array
                [...new Set(selectedImages)];
                selectedImages.filter((item,index)=> selectedImages.indexOf(item) === index);
                selectedImages.reduce((unique,item)=>
                unique.includes(item) ? unique : [...unique, item],[]);
                currentObject.removeEventListener("dragstart", startDrag, false);  
            
        
        
    }
    submitBtn.addEventListener("click",checkAnswer,false)
    function checkAnswer(e){   
               // nxtImages()
                
                for(var j=0; j<selectedImages.length; j++){
                        var n = selectedImages[j].endsWith("-wrong.png");
                    
                        if(n){
                            console.log("wrong Image captured");
                            break;
                        }else{
                            console.log("right Images Captured");
                        }
                    }       
            }
    })();
}
window.addEventListener("load", doFirst , false);
