(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/footerView'
		],
		function( Footerview ) {

			describe('Footerview Itemview', function () {

				it('should be an instance of Footerview Itemview', function () {
					var footerView = new Footerview();
					expect( footerView ).to.be.an.instanceof( Footerview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );