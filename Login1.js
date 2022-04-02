function mylogin(){
    //console.log("hi")

    var EnteredEmail=document.querySelector("#exampleInputEmail1").value;
    var EnteredPassward=document.querySelector("#exampleInputPassword1").value;
   //console.log(EnteredEmail)
  

  if(EnteredPassward=="1234" && EnteredEmail=="masai@gmail.com")
  {
     alert("Succefully Matched")
  }
  else{
    alert("Invalid Email Or Passward ")
  }
  event.preventDefault();
  }