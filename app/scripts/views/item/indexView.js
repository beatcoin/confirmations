define([
	'backbone',
	'communicator',
	'hbs!tmpl/item/indexView_tmpl'
],
function( Backbone, Communicator, IndexviewTmpl  ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Indexview ItemView");
		},
		
    	template: IndexviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

	/* Ui events hash */
	events: {
	    'click #search': 'handleSearch'
	},

	/* on render callback */
	onRender: function() {},
	
	handleSearch: function(event) {
	    Communicator.mediator.trigger('APP:SEARCH_CLICKED');
	}
    });

});
