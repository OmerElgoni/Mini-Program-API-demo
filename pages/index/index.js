Page({
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  goToDisplayPage: function (event) {
    let country = event.detail.value.country
    my.navigateTo({
      url: '../displayPage/displayPage?country=' + country
    });
  }
});
