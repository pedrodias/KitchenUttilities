$(document).on('pagebeforeshow',"#page-wish" ,loadList);

function loadList() {
	var wishlist = "wishlist1";
	  var items = '<fieldset data-role="controlgroup" data-type="vertical">';
	  $.each( wishList, function( key, val ) {
			var product;
			product = products[val["produto"]];
			if(product == null) {
				alert("null:" + prod["produto"]);
			}
			else {
				items +=
				'<input id="checkbox'+this.produto+'" name="product'+this.produto+'" type="checkbox">'+
				'<label for="checkbox'+this.produto+'">'+product["nome"]+'</label>';
			}
	  });

	  items += '</fieldset>';	
		alert(items);
	  $("#productList").html(items);
	    $("#productList").trigger( "create" );
}

