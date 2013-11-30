define([
	'backbone',
	'hbs!tmpl/item/transactionView_tmpl'
],
function( Backbone, TransactionviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Transactionview ItemView");
		},
		
    	template: TransactionviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
