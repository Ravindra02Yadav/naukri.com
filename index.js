// trends start
var trendingData = [
    {
        image:"https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",
        TrendName:"Remote",
        TrendInfo:"6.6K+ Jobs",
    },
    {
        image:"https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg",
        TrendName:"MNC",
        TrendInfo:"55.7K+ Jobs",
    },
    {
        image:"https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg",
        TrendName:"HR",
        TrendInfo:"5.5K+ Jobs",
    },
    {
        image:"https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
        TrendName:"Software & IT",
        TrendInfo:"40K+ Jobs",
    },
    {
        image:"https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg",
        TrendName:"Analytics",
        TrendInfo:"8.4K+ Jobs",
    },
]
trendingData.map(function (elem){
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.src = elem.image;
    var name = document.createElement("h4");
    name.innerText = elem.TrendName;
    var span1 = document.createElement("span");
    name.append(span1);
    var italic1 = document.createElement("i");
    span1.append(italic1)
    var span2 = document.createElement("span");
    var info = document.createElement("p");
    info.textContent = elem.TrendInfo;
    span2.append(info);

    box.append(img,name,span2);
    document.querySelector("#trending").append(box)
})
// trend ends 
// feature starts 
var featureData = [
    {
        image:"https://img.naukimg.com/logo_images/groups/v2/126896.gif",
        comName:"Bharti Airtel",
        comReview:"4.1 | 10.4K+ reviews",
        comInfo:"Leading global telecom company."
    },
    {
        image:"https://img.naukimg.com/logo_images/groups/v2/58550.gif",
        comName:"FIT JEE",
        comReview:"3.6 | 336 reviews",
        comInfo:"first 'corporatized' institute for IIT-JEE."
    },
    {
        image:"https://img.naukimg.com/logo_images/groups/v2/240936.gif",
        comName:"JPMorgan chase",
        comReview:"4.1 | 2.5K+ reviews",
        comInfo:"Leader in financial services."
    },
    {
        image:"https://img.naukimg.com/logo_images/groups/v2/2436002.gif",
        comName:"Xoriant",
        comReview:"4.1 | 352 reviews",
        comInfo:"Software Development & technology services firm."
    },
]
featureData.map(function (elem){
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.src = elem.image;

    var comDetails = document.createElement("div");
    var name = document.createElement("h4");
    name.textContent = elem.comName;
    var review = document.createElement("span");
    review.textContent = elem.comReview;
    comDetails.append(name,review);
    
    var info = document.createElement("p");
    info.textContent = elem.comInfo;

    var btn = document.createElement("button");
    btn.innerText = "View jobs"

box.append(img,comDetails,info,btn);
document.querySelector("#feature").append(box)
})

function mylogin(){
    //console.log("hi")

    var EnteredEmail=document.querySelector("#exampleInputEmail1").value;
    var EnteredPassward=document.querySelector("#exampleInputPassword1").value;
   //console.log(EnteredEmail)
  

  if(EnteredPassward=="1234" && EnteredEmail=="gauravjx12@gmail.com")
  {
     alert("You have signed-in successfully!")
     window.location.href="jobs.html"
  }
  else{
    alert("Sign-in unsuccessful!")
  }
  event.preventDefault();
  }