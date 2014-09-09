Hackathon.IndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.findAll('sticker');
    },

    setupController: function(controller, model) {
    	controller.set('model', model);
    	controller.set('buttons', this.store.findAll('buttonFridge'));
    }
});