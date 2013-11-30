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

	Communicator.mediator.on('APP:SEARCH_CLICKED', function() {
	    App.socket.emit('search', { query: '2358f266eaef84f8a9b56768b38e9d5a74b23845ae3277ba70d7b7ebcbeffef1' });
//	    App.router.navigate('transaction', true);
	});

	return App;
});
