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
