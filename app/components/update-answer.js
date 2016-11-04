import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    updateAnswer(answer) {
      var params = {
        responder: this.get('responder'),
        reply: this.get('reply'),
        question: this.get('question'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
