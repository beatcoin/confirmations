define([
	'backbone',
	'hbs!tmpl/item/searchFormView_tmpl'
],
function( Backbone, SearchformviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Searchformview ItemView");
		},
		
    	template: SearchformviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
