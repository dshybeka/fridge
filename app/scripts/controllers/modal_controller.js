Hackathon.ModalController = Ember.ObjectController.extend({


  color: "green",

  actions: {
    close: function() {
      return this.send('closeModal');
    },
    save: function() {
    	var complName = $("#complaint-name").val();
    	var complaint = this.store.createRecord('complaint', {
	        text: complName
      });
      complaint.save();
      return this.send('closeModal');
    }
  }

});
