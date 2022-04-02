
    document.querySelector("#submitOTP").addEventListener("click",myotp);

    function myotp(){
    var A=document.querySelector("#a").value;
    var B=document.querySelector("#b").value;
    var C=document.querySelector("#c").value;
    var D=document.querySelector("#d").value;

    var E = JSON.parse(localStorage.getItem("InputMobile"))||[];

    document.querySelector("#checkMobile").innerText=E;
    console.log(E);

    if(A=="1" &&  B=="2" && C=="3"  && D=="4")
    {
        alert("Mobile Number is Verified");
        window.location.href="mobile.html";
    }
    else{
        alert("Please Check OTP once agin");
        window.location.href="mobile.html";
    }

    };
