Hackathon.ModalstickerController = Ember.ObjectController.extend({

  actions: {
    close: function() {
      return this.send('closeModal');
    },
    save: function() {
      console.log("color inininin " + this.get('model').color);
      var id = this.get('model').id;

      if (id) {
        var sticker = this.get('model');
        sticker.set('title', $("#sticker-body").val());
        sticker.set('author', $("#sticker-author").val() != "" ? $("#sticker-author").val() : "anonymouse");
        sticker.save();
      } else {
          var newSticker = this.store.createRecord('sticker', {
          title: $("#sticker-body").val(),
          author: $("#sticker-author").val() != "" ? $("#sticker-author").val() : "anonymouse",
          zIndex: 0,
          color: this.get('model').color + "-sticker"
        });
        newSticker.save();
      }

      return this.send('closeModal');
    }
  }

});