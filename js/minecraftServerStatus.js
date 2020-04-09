function checkServer(){
    //based on a pen by @robinselmer
    var url = "https://api.mcsrvstat.us/2/thespud.xyz";
    var playerList = "";
    //https://mcapi.us/server/status?ip=666.fluctis.com&port=25757
    $.getJSON(url, function(r) {
        //data is the JSON string
     if(r.online = false){
        $('#rest').html('Can\'t Reach Server');
       return false;
     }

     $('.serverTitle').html("<p>" + r.hostname + "</p>")
     $('#rest').html(r.motd.html);
     $('#players').html(r.players.online + '/' + r.players.max);
     $('#serverIcon').attr('src', r.icon);
     if (r.players.list != null) {
         for (var i = 0; i < r.players.list.length; i++) {
             $('.innerPlayersOnline').append(r.players.list[i] + ", ")
         }
     }

    });

}
