document.querySelectorAll(".drum")[0].addEventListener("click",handleClick);
function handleClick(){
   var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
    

}
for (var i = 0; i<6; i++)
 {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
   
}


document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

 })



 function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
           
           break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            
           break;
        case "d":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            
           break;   
        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            
           break;  
        case "k":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
           
           break;
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
           
           break; 
        default:
            break;
       }
 }
 function buttonAnimation(currentKey) {

  var acctiveButton = document.querySelector("." + currentKey);
  acctiveButton.classList.add("pressed");
  setTimeout(function(){
  acctiveButton.classList.remove("pressed");
}, 100);
 }