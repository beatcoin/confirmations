define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome',
	'socketio'
],

function( Backbone, Communicator, Welcome_tmpl, IO ) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({});

	/* Add initializers here */
	App.addInitializer( function () {
		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");
		var socket = IO.connect('http://localhost:8081');
	});

	return App;
});
