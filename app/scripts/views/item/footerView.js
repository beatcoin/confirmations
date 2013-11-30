define([
	'backbone',
	'hbs!tmpl/item/footerView_tmpl'
],
function( Backbone, FooterviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Footerview ItemView");
		},
		
    	template: FooterviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
