const PubSub = require('../helpers/pub_sub')


const FormView = function(form) {
  this.form = form
}

FormView.prototype.bindEvents = function() {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};


FormView.prototype.createBucket = function(form) {
  const newBucket = {
    name: form.name.value,
    description: form.description.value,
    date: form.date.value
  }
  return newBucket;
}

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBucket = this.createBucket(evt.target);
  PubSub.publish("FormView:submit", newBucket);

  evt.target.reset()
}

module.exports = FormView;
