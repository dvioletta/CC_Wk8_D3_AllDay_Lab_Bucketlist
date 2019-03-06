const PubSub = require('../helpers/pub_sub');

const BucketDetailView = function (container) {
  this.container = container;
};


BucketDetailView.prototype.render = function (bucket) {
  console.log(bucket);
  const bucketContainer = document.createElement('div')
  bucketContainer.id = 'list';

  const name = this.createHeading(bucket.name);
  bucketContainer.appendChild(name);

  const description = this.createDetail('description', bucket.description);
  bucketContainer.appendChild(description);

  const date = this.createDetail('date', bucket.date);
  bucketContainer.appendChild(date);

  const deleteButton = this.createDeleteButton(list._id);
  bucketContainer.appendChild(deleteButton);
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

BucketDetailView.prototype.createDeleteButton = function (bucketID) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = bucketID;

  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketDetailView:list-delete-clicked', evt.target.value);
  });
  return button;
}

module.exports = BucketDetailView
