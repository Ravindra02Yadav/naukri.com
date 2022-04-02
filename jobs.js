      joblist=[{

        jobtitle:  "Business Analyst",
        comapanyName: " Amazon",
        CTC : " 10,00,000-12,00,000 p.a",
        location : "Banglore",
        jd : "Good understanding of technology - tool like MS EXCEL,Power Bi,jira",
        posted : " 3 days ago" 

      },
      {

jobtitle:  "Business development manager",
comapanyName: " Rayzer Pay",
CTC : " 10,00,000-12,00,000 p.a",
location : "Banglore",
jd : "Good understanding of technology - tool like MS EXCEL,Power Bi,jira",
posted : " 3 days ago" 

},
{

jobtitle:  "Full-stack developer ",
comapanyName: " Amazon",
CTC : " 10,00,000-12,00,000 p.a",
location : "Banglore",
jd : " 3 years Experience in technologies - react,c,javascript,SQL",
posted : " 3 days ago" 

},
{

jobtitle:  "Data Analyst",
comapanyName: " Amazon",
CTC : " 10,00,000-12,00,000 p.a",
location : "Banglore",
jd : "Good understanding of technology - tool like MS EXCEL,Power Bi,jira",
posted : " 3 days ago" 

},



    ]
    localStorage.setItem("joblist", JSON.stringify(joblist))
    document.querySelector("form").addEventListener("submit", searchfunction)

function fun(){

  var skill=document.querySelector("#searchbox1").value;
     var  location=document.querySelector("#searchbox2").value;
joblist.map(function(elem){
if(skill==elem.jobtitle){

  // <div class="col2">

   div= document.createElement("div")
   a=document.createElement("a")
   a.setAttribute("href","#")
   a.setAttribute("class","des")
   h3=document.createElement("h3")
   h3.innerText=elem.comapanyName
   p=document.createElement("p")
   p.setAttribute("")
}

})





}
    // document.querySelector("button").addEventListener("click", searchfunction)
        function searchfunction(){

     var skill=document.querySelector("#searchbox1").value;
     var  location=document.querySelector("#searchbox2").value;

     if(skill=="Business Development Manager"|| skill=="business development manager" || skill=="Business development manager"){
    document.querySelector("#BDM").style.display="block";
  }
  if(skill=="Full stack developer"|| skill=="full stack developer" || skill=="Full Stack Developer"|| skill=="Full stack web developer") { 
    
    document.querySelector("#FSD").style.display="block";
    document.querySelector("#BDM").style.display="none"; 
    document.querySelector("#mumbai").style.display="none";
  }
  if(skill=="Business Analyst" ||  skill=="buisness analyst" || skill=="Business analyst"){
    
    document.querySelector("#FSD").style.display="none";
    document.querySelector("#BDM").style.display="none"; 
    document.querySelector("#mumbai").style.display="block"; 
  }
     
     // console.log(skill,location);
     console.log( fun(skill,location))
      window.stop();
      event.preventDefault();
    }
    
    function fun(skill,location){

    
    for (i=0;i<joblist.length;i++){
      
      for(var a in joblist[i]){

        if(joblist[i][a]==skill || joblist[i][a]==location){
          return joblist[i]
        
          break;
        }
      }
    }
  }








  
