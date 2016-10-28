import Ember from 'ember';

var questions = [{
  author: "Krishan Sharma",
  question: "How many players are in a cricket team?",
  datePosted: "October 28, 2016",
  category: "Sports"
}, {
  author: "Vanessa Palacios Sharma",
  question: "How many cups are in a gallon?",
  datePosted: "March 28, 2015",
  category: "Cooking"
}, {
  author: "Nivedita Kapoor",
  question: "Where can I buy Indian groceries in Portland?",
  datePosted: "October 13, 2016",
  category: "Miscellaneous"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
