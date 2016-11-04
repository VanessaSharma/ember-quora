import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),

    numberOfAnswers: Ember.computed('question.answers', function() {
      return this.get('question.answers.[].length');
  }),
  actions: {
      addToFav(question) {
        this.get('favorites').add(question);

  },
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
