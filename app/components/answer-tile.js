import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Not confident about your answer?😰')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
