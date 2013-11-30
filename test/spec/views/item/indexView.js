(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/indexView'
		],
		function( Indexview ) {

			describe('Indexview Itemview', function () {

				it('should be an instance of Indexview Itemview', function () {
					var indexView = new Indexview();
					expect( indexView ).to.be.an.instanceof( Indexview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );