Hackathon.IndexController = Ember.ObjectController.extend({

  actions: {
    createSticker: function() {
      console.log("start saving");
      var newSticker = this.store.createRecord('sticker', {
        title: $("#title").val(),
        body: $("#body").val(),
        zIndex: 0
      });
      newSticker.save();
      console.log("create sticker!!!");
    },

    updateFridgeButton: function(id) {
    console.log("update button from: " + id);
    	var button = this.store.find('buttonFridge', id);
          button.then(function(loaded) {
          	console.log("update button from: " + loaded.get('status'));
          	if(loaded.get('status') === "true") {
          		loaded.set('status', "false");
          	} else {
          		loaded.set('status', "true");
          	}
            loaded.save();
          });
      console.log("update button");

    }
  }

});
