var products = [];
var wishList = [];
var familyId = 1;
var receipts = [];


getProducts();


function getProducts() {
    console.log("as");
	var result = null;
	$.getJSON( "json/produtos.json", function( data ) {
		$.each( data, function( key, val ) {	
			$.each(val, function(){
				products[this.id] = this;
			});
		});
	});

    $.getJSON( "json/wishlist.json", function( data ) {
        //var items = '<fieldset data-role="controlgroup" data-type="vertical">';
        $.each( data, function( key, val ) {
            if(val['familyId'] == familyId) { //verificar family id
                var product,i=0;
                $.each(val["products"], function() {
                  wishList[i] = this;
                  i++;
                });
                return ;
            }
        });
    });

    $.getJSON("json/")







}
