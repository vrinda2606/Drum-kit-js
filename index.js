var noOfDrumButtons = document.querySelectorAll(".drum").length
for(var i=0;i<noOfDrumButtons;i++){
    
document.querySelectorAll("button")[i].addEventListener("click",function (){
    var buttonclicked = this.innerHTML;
    sound(buttonclicked);
    buttonAnimation(buttonclicked);
    }   
);

}

document.addEventListener("keydown",function(event){
    sound(event.key);
    buttonAnimation(event.key);
}
);

function sound(key){

    switch(key){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            break;                
        case "d":
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
            break;
        default: console.log(this);
}
}


function buttonAnimation(currentkey){
     document.querySelector("."+ currentkey).classList.add("pressed");

     setTimeout(function (){
        document.querySelector("."+ currentkey).classList.remove("pressed");
     },100);
     
} 