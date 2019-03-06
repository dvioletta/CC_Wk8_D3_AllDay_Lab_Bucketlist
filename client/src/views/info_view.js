const PubSub = require('../helpers/pub_sub');
const BucketDetailView = require('./bucket_detail_view');


const InfoView = function(container) {
  this.container = container;
  // console.log(this.container);
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe("Bucket:data-loaded", (evt) => {
    this.render(evt.detail);

  });
};

InfoView.prototype.render = function (buckets) {
  this.container.innerHTML = '';
  const bucketView = new BucketDetailView(this.container);
  buckets.forEach((bucket) => bucketView.render(bucket));
};

module.exports = InfoView;
