// Html Paster
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
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function startMenu(action){
    if(action === 'toggle'){
        if(startMenu('isOpen')){
            startMenu('close');
        }else{
            startMenu('open');
        }
    }
    if(action === 'close'){
        $('#startmenu').css("display", "none");
        $('img.startButton').attr('src','img/start.png')
    }
    if(action === 'open'){
        $('#startmenu').css("display", "block");
        $('img.startButton').attr('src','img/start-pressed.png')
    }
    if(action === 'isOpen'){
        if($('#startmenu').css('display') == "none"){
            return false;
        }else{
            return true;
        }
    }
    if(action === 'isActive'){
        if($('#startmenu').is(':hover') || $('.startButton').is(':hover')){
            return true;
        }else{
            return false;
        }
    }
}

//Main window manager
var windowManager = {
    windowCount:0,
    close: function() {
        $(event.target).parent().parent().parent().remove();
    },
    new: function(content,title, top, left){
        console.log('new window run');

        //Make new window id based on number of current windows
        var windowID = "window"+this.windowCount;

        //Add titlebar from titlebar template html
        var titleBar = $('#titlebarTemplate').html();
        if (top == undefined) {
            top = "0";
        }
        if (left == undefined) {
            left = "0";
        }

        //Create windowTemplate with id of windowID
        var windowMain = "<div class='windowDefault' style='top: "+top+"; left: "+left+";' id='"+windowID+"'>"+titleBar+"<div class='windowContent'>"+content+"</div></div>";

        //Add template to HTML
        $('div.screen').append(windowMain);

        //Make new window draggable
        $('#'+windowID).draggable({
            addClasses:true,
            handle:".titleBar"
        });

        //If user has specified title, set title.
        if(title === undefined){
        }else{
            $('#'+windowID).children('.titleBar').children('.windowTitle').html(title);
        }

        console.log(windowID+' created');

        this.windowCount += 1;
    }
};

$(document).ready(function(){
  console.log("jQuery Loaded");
  //If user clicks anywhere but the start menu, close the start menu
  $(this).click(function(){
    if(startMenu('isActive')===false){
        startMenu('close');
    }
  });
});

//WindowLoader
function showContactInfo(){
    var xhr= new XMLHttpRequest();
    xhr.open('GET', 'contact.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        javascript:windowManager.new(this.responseText,"<img src=\"img/contactTitle.png\" class=\"contactWindowTabText\">", "15%", "15%");
    };
    xhr.send();
}
function showMinecraft(){
    var xhr= new XMLHttpRequest();
    xhr.open('GET', 'minecraft.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        javascript:windowManager.new(this.responseText,"<img src=\"img/minecraftTitle.png\" class=\"contactWindowTabText\">", "10%", "5%");
    };
    xhr.send();
    checkServer();
}
