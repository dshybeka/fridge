Hackathon.Sticker = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  color: DS.attr('string'),
  left: DS.attr('string'),
  top: DS.attr('string'),
  zIndex: DS.attr('number'),
  author: DS.attr('string')
});