import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];
  var popularity;
  if(question.get('answers').get('length') >=3) {
    popularity = Ember.String.htmlSafe('<span class="glyphicon glyphicon-heart"></span>  Popular ');
  }else {
    popularity = Ember.String.htmlSafe('<span class="glyphicon glyphicon-pencil"></span>  Needs answer! ');
  }
  return popularity;
}

export default Ember.Helper.helper(questionPopularity);
