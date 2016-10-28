import DS from 'ember-data';

export default DS.Model.extend({
  responder: DS.attr(),
  reply: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
});
