Hackathon.StickerView = Ember.View.extend({
  store: null,
  templateName: 'sticker',
  didInsertElement: function() {
    var self = this;
    console.log("insert elemtn with id " + this.sticker.id);

    $( "#" + self.sticker.id).draggable({
      stop: function() {

          var element = $(this);
          var sticker = self.store.find('sticker', self.sticker.id);
          sticker.then(function(loaded) {
            if (!sticker.get('isDeleted')) {
              loaded.set('left', element.css('left'));
              loaded.set('top', element.css('top'));
              loaded.set('zIndex', element.zIndex());
              loaded.save();
            }
          });
      }
    }, { stack: ".sticker" });
    console.log("Add droppable");
    $("#bucket").droppable({
      drop: function( event, ui ) {
        console.log("asdasdasd");
        var elementId = $(ui.draggable).attr("id");
          var sticker = self.store.find('sticker', elementId);
          sticker.then(function(loaded) {
            loaded.deleteRecord();
            loaded.save();
            console.log("loaded delete!!!");
        });
      }
    });
    $( "#draggable" ).droppable({
      drop: function( event, ui ) {
        console.log("drop??");
      }
    });

    $('#' + self.sticker.get('id')).css('left', self.sticker.get('left'));
    $('#' + self.sticker.get('id')).css('top', self.sticker.get('top'));
    $('#' + self.sticker.get('id')).zIndex(self.sticker.get('zIndex'));

    self.sticker.addObserver('left', function(curValue, smth2, smth3, smth4) {
      $('#' + self.sticker.get('id')).css('left', curValue.get('left'));
    });
    self.sticker.addObserver('top', function(curValue, smth2, smth3, smth4) {
      $('#' + self.sticker.get('id')).css('top', curValue.get('top'));
    });
    self.sticker.addObserver('zIndex', function(curValue, smth2, smth3, smth4) {
      $('#' + self.sticker.get('id')).zIndex(curValue.get('zIndex'));
    });
     
  },
  mouseEnter:function(e){
    var self = this;
    e.preventDefault();
  }
});