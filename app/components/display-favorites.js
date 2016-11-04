import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  actions: {
    removeFromFavorites(question) {
      this.get('favoritesList').remove(question);
    },
    emptyList() {
      this.get('favoritesList').empty();
    }
    }
});
