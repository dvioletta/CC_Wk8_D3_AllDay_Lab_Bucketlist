const FormView = require('./views/form_view')
const InfoView = require('./views/info_view')
const BucketDetailView = require('./views/bucket_detail_view')
const Bucket = require('./models/bucket')


document.addEventListener('DOMContentLoaded', () => {
console.log('DOMContentLoaded');
const bucketForm = document.querySelector("#bucket-form");
const bucketFormView = new FormView(bucketForm);
bucketFormView.bindEvents();

const bucketContainer = document.querySelector("#list");
const bucketContainerView = new InfoView(bucketContainer);
bucketContainerView.bindEvents();

const url = "http://localhost:3000/api/bucket";
const bucket = new Bucket(url);
bucket.bindEvents();
bucket.getData();

});
