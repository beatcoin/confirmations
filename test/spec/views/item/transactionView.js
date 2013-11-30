(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/transactionView'
		],
		function( Transactionview ) {

			describe('Transactionview Itemview', function () {

				it('should be an instance of Transactionview Itemview', function () {
					var transactionView = new Transactionview();
					expect( transactionView ).to.be.an.instanceof( Transactionview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );