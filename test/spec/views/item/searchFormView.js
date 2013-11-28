(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/searchFormView'
		],
		function( Searchformview ) {

			describe('Searchformview Itemview', function () {

				it('should be an instance of Searchformview Itemview', function () {
					var searchFormView = new Searchformview();
					expect( searchFormView ).to.be.an.instanceof( Searchformview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );