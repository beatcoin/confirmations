define([
    'backbone',
    'communicator', 
],
function(Backbone, Communicator ) {
    'use strict';

    var Controller = {};

    // private module/app router  capture route and call start method of our controller
    Controller.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            '': 'showIndex',
            'transaction': 'showTransaction'
        }
    });

    Controller.showIndex = function() {
        Communicator.mediator.trigger('APP:INDEX');
    };

    Controller.showTransaction = function() {
        Communicator.mediator.trigger('APP:TRANSACTION');
    };

    return Controller;
});
