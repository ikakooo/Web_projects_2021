var min,sec,ms,count, malt, salt, msalt;

var stopwatch = {
  start: function(){
    // if(document.getElementById("start").firstChild.nodeValue != "Start"){
    //   document.getElementById("start").firstChild.nodeValue = "Start";
    // }
   
    sec = 0;
    min = 0;
    ms = 0;
    count = setInterval(function(){
      if(ms == 100){
        ms = 0;
        if(sec == 60){
          sec = 0;
          min++;
        }
        else{
          sec++;
        }
      }
      else{
        ms++;
      }
      
      malt = stopwatch.pad(min);
      salt = stopwatch.pad(sec);
      msalt = stopwatch.pad(ms);
      
      stopwatch.update(malt + ":" + salt );
    }, 10);
    },
  
  update: function(txt){
     var temp = document.getElementById("timer");
  temp.firstChild.nodeValue = txt;
  },
  
  pad: function(time){
    var temp;
    if(time < 10){
      temp = "0" + time;
    }
    else{
      temp = time;
    }
    return temp;
  }
}

function stopW(){
    printTime()
    clearInterval(count);
  }

function Reset()  {
    
    clearInterval(count);
    
    stopwatch.update("00" + ":" + "00");
}


function printTime(){
  var temp = document.getElementById("timer");
  console.log(temp)
    updateValue(temp.firstChild.nodeValue)
}

function updateValue (e){
    $(document).ready(function () {
            $(".multiplication-table").append(
                '<p>' + e + '</p>'
            );
    })
}