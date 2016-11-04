import Ember from 'ember';

export default Ember.Component.extend({
favoritesList: Ember.inject.service(),
  actions: {
    delete(question) {
      if (confirm('Bye bye question?😭👋')) {
        this.sendAction('destroyQuestion', question);
        this.get('favoritesList').remove(question);
      }
  },
  addToFavorites(question) {
    this.get('favoritesList').add(question);
  }
}
});
