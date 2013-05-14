define(["backbone","marionette"],function(Backbone,Marionette){

    // set up the app instance
    var application = new Marionette.Application();

    application.on('initialize:after', function() {
        Backbone.history.start();
        alert("your app is running");
    });

    // export the app from this module
    return application;
});