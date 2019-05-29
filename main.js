function doFirst(){
    boxImage = document.getElementByclassName('boxImage');
    
    for(var i =0; i< BoxIamge.lengt; i++){
        BoxIamge[i].addEventListener("dragstart", startDrag , false);
    }
    leftbox = document.getElementsByClassName('leftbox');
   
    for(var i =0; i< leftbox.lengt; i++){
    leftbox[i].addEventListener("dragenter", function(e){e.preventDefault()}, false);
    leftbox[i].addEventListener("dragover", function(e){e.preventDefault()}, false);
    leftbox[i].addEventListener('drop', dropped , false);
   }

function startDrag(e){
    var code = ['<img src="http://source.unsplash.com/random/151x151">',
                '<img src="http://source.unsplash.com/random/149x149">',
                '<img src="http://source.unsplash.com/random/150x150">']
    if (e.target == boxImage[i]){
            e.dataTransfer.setData('Text', code);
        }

function dropped(e){
    e.preventDefault();
    leftbox.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener("load", doFirst , false);

