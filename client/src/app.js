const FormView = require('./views/form_view')
const InfoView = require('./views/info_view')
const Bucket = require('./models/bucket')


document.addEventListener('DOMContentLoaded', () => {
console.log('DOMContentLoaded');
const bucketForm = document.querySelector("#bucket-form");
const bucketFormView = new FormView(bucketForm);
bucketFormView.bindEvents();

const bucketContainer = document.querySelector("#bucket-container");
const bucketContainerView = new InfoView(bucketContainer);
bucketContainerView.bindEvents();

const url = "http://localhost:3000/api/bucket"
const bucket = new Bucket();
bucket.bindEvents();
bucket.getData();

});
