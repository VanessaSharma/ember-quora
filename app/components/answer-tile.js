import Ember from 'ember';

export default Ember.Component.extend({

  heading: Ember.computed('answer.reply', 'answer.responder', function() {
    return this.get('answer.reply') + ' ' + '-' + ' ' +  this.get('answer.responder');
  }),

  actions: {
    delete(answer) {
      if (confirm('Not confident about your answer?😰')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
