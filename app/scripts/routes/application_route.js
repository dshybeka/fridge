Hackathon.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller, model) {
      controller.set('complaints', this.store.findAll('complaint'));
  },
  actions: {
      openModal: function(modalName, model) {
        console.log("color now!! " + model);
        this.controllerFor(modalName).set('model', model);
        return this.render(modalName, {
          into: 'application',
          outlet: 'modal'
        });
      },
      
      closeModal: function() {
        return this.disconnectOutlet({
          outlet: 'modal',
          parentView: 'application'
        });
      }
    }
    
});
