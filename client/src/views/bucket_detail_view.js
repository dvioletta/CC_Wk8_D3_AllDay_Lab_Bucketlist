const PubSub = require('../helpers/pub_sub');

const BucketDetailView = function (container) {
  this.container = container;
};


BucketDetailView.prototype.render = function (bucket) {
  const bucketContainer = document.createElement('div')
  bucketContainer.id = 'list';

  const name = this.createHeading(bucket.name);
  bucketContainer.appendChild(name);

  const description = this.createDetail('description', bucket.description);
  bucketContainer.appendChild(description);

  const date = this.createDetail('date', bucket.date);
  bucketContainer.appendChild(date);

  const button = document.createElement('button')
  button.textContent = 'Delete';
  bucketContainer.appendChild(button);

  console.log(bucket);
  this.deleteButton(button, bucket);

  this.container.appendChild(bucketContainer);
};

BucketDetailView.prototype.createHeading = function(textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading
};

BucketDetailView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

BucketDetailView.prototype.deleteButton = function (button, item) {
  button.value = item._id;
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    PubSub.publish('BucketDetailView:list-delete-clicked', evt.target.value);
  });

}

module.exports = BucketDetailView
