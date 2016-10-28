import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Bye bye question?😭👋')) {
        this.sendAction('destroyQuestion', question);
      }
   },
   destroyAnswer(answer) {
     this.sendAction('destroyAnswer', answer);
   }
 }
});
