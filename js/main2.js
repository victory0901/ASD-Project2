$(document).ready(function () {
	$('#jsonButt').bind('click', function(){
        console.log("JSON Button pressed");
        
        $('#jsonlist').empty();
        $.ajax({
            url: 'xhr/data.json',
            type: 'GET',
            dataType: 'json',
            success: function(response){
                for(var i = 0, j=response.myJson.length; i<j; i++){
                    var myj = response.myJson[i];
                    $(''+
                        '<ul>'+
                            '<li>'+ myj.group[0] + myj.group[1] +'</li>'+
                            '<li>'+ myj.fname[0] + myj.fname[1] +'</li>'+
                            '<li>'+ myj.lname[0] + myj.lname[1] +'</li>'+
                            '<li>'+ myj.gift[0] + myj.gift[1] +'</li>'+
                            '<li>'+ myj.quantity[0] + myj.quantity[1] +'</li>'+
                            '<li>'+ myj.purchase[0] + myj.purchase[1] +'</li>'+
                            '<li>'+ myj.buydate[0] + myj.buydate[1] +'</li>'+
                            '<li>'+ myj.notes[0] + myj.notes[1] +'</li>'+
                        '</ul>'
                     ).appendTo('#jsonlist');
                 }
             }
        });
        $("#jsonlist").listview("refresh");
    });
 
});






