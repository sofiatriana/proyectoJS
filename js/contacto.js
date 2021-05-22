$( document ).ready(function() {
    const APIURL = 'https://hp-api.herokuapp.com/api/characters' ; 

    const infoPost = {"name":"Harry Potter","gender":"male","house":"Gryffindor"},
 
    $("#sumbit").click(() => { 
        $.ajax({
            method: "GET",
            url:  APIURL,
            data: infoPost,
            success: function(respuesta){
                $("body").prepend(`<div>${respuesta.nombre}</div>`);
            }
        });
    });
});
