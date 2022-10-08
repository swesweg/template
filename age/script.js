document.querySelector("#submit").addEventListener("click",function
(){
    const update = function(){
        let dob = document.querySelector("#dob").Value,
            day=new Date(dob),
            time = day.getTime(),
            today = new Date(),
            timenow = today.getTime(),
            value = timenow-time(),
            sec = Math.floor(value/1000),
            min = Math.floor(value/(1000*6)),
            hour = Math.floor(value/(1000*60*60)),
            days = Math.floor(value/(1000*60*60*24)),
            week = Math.floor(value/(1000*60*60*24*7)),
            month = Math.floor(value/(1000*60*60*24*30.4375)),
            year = Math.floor(value/(1000*60*60*24*365.25));
            
         let insert = function(x,y){
       document.querySelector(x).innerHTML = y;
       }
       insert("#year",year + "-years");
       insert("#month",month + "-months");
       insert("#week",week + "-weeks");
       insert("#day",day + "-days");
       insert("#hour",hour + "-hours");
       insert("#min",min + "-minutes");
       insert("#sec",sec + "-seconds");
    }
    setInterval(update, 1000);
})