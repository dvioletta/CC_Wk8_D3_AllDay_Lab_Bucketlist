const RequestHelper = require('../helpers/request_helper')
const PubSub = require('../helpers/pub_sub')

const Bucket = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};



Bucket.prototype.bindEvents = function () {
  PubSub.subscribe('BucketDetailView:list-delete-clicked', (evt) => {
    this.deleteBucket(evt.detail);
  });

  PubSub.subscribe("FormView:submit", (evt) =>{
  this.postBucket(evt.detail)
  //console.log(evt.detail);
  });
};

Bucket.prototype.postBucket = function(bucket) {
  this.request.post(bucket)
    .then((buckets) => {
      PubSub.publish("Bucket:data-loaded", buckets)
    })
    .catch(console.error);
}


Bucket.prototype.getData = function () {
  this.request.get()
  .then((buckets) => {
    PubSub.publish("Bucket:data-loaded", buckets);
  })
  .catch(console.error);
};

Bucket.prototype.deleteBucket = function (bucketID) {
  this.request.delete(bucketID)
  .then((buckets) => {
    PubSub.publish('Bucket:data-loaded', buckets)
  })
  .catch(console.error);
}

module.exports = Bucket
