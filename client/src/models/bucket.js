const RequestHelper = require('../helpers/request_helper')
const PubSub = require('../helpers/pub_sub')

const Bucket = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Bucket.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:submit", (evt) =>{
  this.postBucket(evt.detail)
  console.log(evt.detail);
  });
};

Bucket.prototype.postBucket = function(bucket) {
  this.request.post(bucket)
    .then((buckets) => {
      PubSub.publish("InfoView:data-loaded", buckets)
      console.log(buckets);
    })
    .catch(console.error);
}


Bucket.prototype.getData = function () {};



module.exports = Bucket
