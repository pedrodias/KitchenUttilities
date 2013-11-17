$(document).ready( function() {
	$.getJSON( "json/wishlist.json", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			$.each(val, function(id, produto) {
				//Gerar inputs e labels
            console.log('<p>'+eventData['produto']+'</p>');
     		});
		});
	});
});
