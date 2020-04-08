function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var hr = " ";
    m = addZeroes(m);
    if (h > 12) {
        h -= 12;
        hr = "PM";
    }else {
        hr = "AM";
    }
    document.getElementById('clock').innerHTML = h + ":" + m + " " + hr;
    var t = setTimeout(startTime, 500);
}

function addZeroes(i) {
  if (i < 10){
      i = "0" + i
  };
  return i;
}
