define([
	'backbone',
	'communicator',
	'socketio',
	'views/item/footerView',
	'views/item/headerView',
	'views/item/indexView',
	'views/item/transactionView',
	'routers/appRouter'
],

function( Backbone, Communicator, IO, FooterView, HeaderView, IndexView, TransactionView, AppRouter ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
	    footerRegion: '#footer',
	    headerRegion: '#header',
	    contentRegion: '#content'
	});

	/* Add initializers here */
	App.addInitializer( function () {
	    Communicator.mediator.trigger("APP:START");
	    this.socket = IO.connect('http://localhost:8081');

	    this.socket.on('success', function(data) {
		console.log('success');
		App.router.navigate('transaction', true);
	    });

	    this.socket.on('failure', function(data) {
		console.log('failure');
	    });

	    this.socket.on('miss', function(data) {
		console.log('miss');
	    });

	    this.socket.on('update', function(data) {
		console.log('update');
	    });

	    this.router = new AppRouter.Router({
		controller: AppRouter
	    });
	    App.headerRegion.show(
		new HeaderView()
	    );
	    App.footerRegion.show(
		new FooterView()
	    );
	});

	App.on('initialize:after', function() {
	    if (Backbone.history) {
		Backbone.history.start();
	    }
	});

	Communicator.mediator.on('APP:INDEX', function() {
	    App.contentRegion.show(
		new IndexView()
	    );
	});

	Communicator.mediator.on('APP:TRANSACTION', function() {
	    App.contentRegion.show(
		new TransactionView()
	    );
	});

	Communicator.mediator.on('APP:SEARCH_CLICKED', function(query) {
	    var message = { '@class' : 'de.confirmations.pojo.Subscribe',
                'room': query
	    };
	    App.socket.json.send(message);
	});

	return App;
});
