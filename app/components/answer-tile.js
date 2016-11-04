import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('answer.reply', 'answer.responder', function() {
    return this.get('answer.reply') + ' ' + '-' + ' ' +  this.get('answer.responder');
  }),

  actions: {
    deleteAnswer(answer) {
      if (confirm('Not confident about your answer?😰')) {
        this.sendAction('deleteAnswer', answer);
     }
    },
   updateAnswer(answer, params) {
    this.sendAction('updateAnswer', answer, params);
  }
  }
});
