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

//based on a pen by @robinselmer
var url = "https://mcapi.us/server/status?ip=thespud.xyz&port=25565";
//https://mcapi.us/server/status?ip=666.fluctis.com&port=25757
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Can\'t Reach Server');
   return false;
 }
 console.log(r.motd);
 var newMotd = r.motd.replaceColorCodes();
 $('#rest').html(newMotd);
 $('#players').html(r.players.now + '/' + r.players.max);
 $('#serverIcon').attr('src', r.favicon);
});

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
