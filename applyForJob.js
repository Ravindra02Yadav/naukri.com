var fixHead=document.querySelector("#asd")
fixHead.style.display="none";
window.addEventListener("scroll",function(){
    
    console.log("object");
    if(window.scrollY>300)
    {
        fixHead.style.display="block";
        document.querySelector("#stickyBar").append(fixHead)


    }
    else{
        fixHead.style.display="none";
        document.querySelector("#stickyBar").append(fixHead)

    }
 
})
// document.querySelector("#jobDescriptionSection").style.display="none";

document.querySelector("#successJob").style.display="none";
document.querySelector("#leftMoreJob").style.display="none";


document.querySelector("#applyJobBtn").addEventListener("click",appliedfunc)
function appliedfunc(){
    document.querySelector("#btnJobApplied").innerText="APPLIED";
    document.querySelector("#btnJobApplied").style.color="#28AD35";
    document.querySelector("#btnJobApplied").style.backgroundColor="white";
    document.querySelector("#btnJobApplied").style.border="none";
    document.querySelector("#leftMoreJob").style.display="block";
    document.querySelector("#rightMoreJob").style.display="none";



    document.querySelector("#jobDescriptionSection").style.display="none";
    document.querySelector("#successJob").style.display="flex";
    document.querySelector(".applyBlue").style.backgroundColor="#F7F7F7";

}
