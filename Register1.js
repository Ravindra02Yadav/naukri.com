document.querySelector("#exampleCheck1").addEventListener("click",myfunction);

 function myfunction(){
   event.preventDefault();
    //console.log("in ")
   var enteredMobile=document.querySelector("#mobile").value;
   console.log(enteredMobile);

   localStorage.setItem("InputMobile",JSON.stringify(enteredMobile));
 }