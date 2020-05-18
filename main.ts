$(document).ready(function(){
    var btn = $('#btn');
    var chiste = $('#text');
    btn.click(function(e){
        e.preventDefault();
        $.get('http://api.icndb.com/jokes/random',function(data){
            console.log(data);
            chiste.html(data.value.joke);
        });
    });
});