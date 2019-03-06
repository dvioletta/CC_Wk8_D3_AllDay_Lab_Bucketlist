const Bucket = require('../models/bucket');


const FormView = function(form) {
  this.form = form
}

FormView.prototype.bindevents = function() {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });


Need to write in here a handlesubmit event.
Need to write in here create form.

FormView.prototype.createFormBucket = function() {
  const newBucket = {
    name: form.name.value,
    description: form.description.value,
    date: form.date.value
  }
}
