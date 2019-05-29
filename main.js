function doFirst(){
    boxImage = document.getElementsByClassName("boxImage")
    for(var i =0; i< boxImage.length; i++){
        boxImage[i].addEventListener("dragstart", startDrag , false);    
    }
    leftbox = document.getElementsByClassName('leftbox'); 

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
        var code = ["html.png/",
                    "js.png",
                    "css.png"]    ]

        //for(var i=0; i< code.length; i++){
            
           /* if (e.target.value == boxImage[i]){
                console.log(code[i]);
                e.dataTransfer.setData('Text', code[i]);
                
        }*/
       
        
    //}
}

function dropped(e){
    e.preventDefault();
    for(var i =0; i<leftbox.length; i++){
        if(e.target == leftbox[i]){
            console.log(boxImage[i])
            boxImage[i].style.filter= "grayscale(100%)";
            leftbox[i].innerHTML =  '<img src=' + e.dataTransfer.getData('Text') +'/>';
            }
            }
        
            }
    }
window.addEventListener("load", doFirst , false);
