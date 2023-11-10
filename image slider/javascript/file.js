let images=document.querySelectorAll('.images');
var count=0;
images.forEach(
    (image,index)=>{
        image.style.left=`${index*100}%`;
    }
)
let slideimage=()=>{
    images.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${count*100}%)`
        }
    )
}
function next(){
    if(count==images.length-1){
        count=0;
        slideimage();
    }
    else{
        count++;
    slideimage();
    }
}
function prev(){
    if(count==0){
    count=images.length-1;
    slideimage();
    }
    else{
        count--;
    slideimage();
    }
}
function change(){
    let ch=document.querySelector('section');
    ch.style.animation="slider 2s ease infinite ";
    // ch.style.webkitAnimation="slider 2s infinite linear";
}