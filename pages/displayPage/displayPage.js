Page({
  data: {},
  onLoad(query) {
    console.info("Query: ",query.country)
    my.showLoading();
    // url will no longer work after 2021-3-10
    // the code can (fairly easily) be adapted to work using https://api.covid19api.com/summary which is where the data
    // for the demo was originally obtained
    let url = 'https://cororonavirusbackup-default-rtdb.europe-west1.firebasedatabase.app/Countries.json'
    my.request({
      url: url,
      method: 'GET',
      dataType: 'json'
    }).then((result) => {
      console.info('result', result)

      // do some processing on the data
      let temp = new Object();
      for (const key in result.data) {
        if (result.data.hasOwnProperty(key)) {
          // result.data[key].Date.toISOstring()
          temp[result.data[key]['Country']] = result.data[key];
        }
      }
      if (temp.hasOwnProperty(query.country)) {
        this.setData({ countries: temp, country: temp[query.country]})
      }
      else {
        throw "Unknown Country"
      }
    }).catch((err) => {
      console.info("error", err)
      my.alert({
        title: 'An error occurred with the following message',
        content: err,
        buttonText: 'OK'
      });
    }).then( () => {
      my.hideLoading();
    });
  },
});
