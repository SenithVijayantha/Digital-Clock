window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden");
});


function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
    }
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
    
}
 
function currentDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let displayDate = day + "/" + month + "/" + year;

    document.getElementById("date").innerText = displayDate;
    // var d = setTimeout(function(){ currentDate() }, 1000); 
}

currentTime();
currentDate();

// loading animation

