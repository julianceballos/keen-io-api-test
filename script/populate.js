var Keen = require('keen-js');

var client = new Keen({
  projectId: "5567544b90e4bd29748000ef",
  readKey: "359c1fcc23b8b9800f9c8fcd9760a3b689fe5608841f7c806a56510ecba1054619d0459eec68263ef7349f7e93adb80c6a3def4cd17729e705594ccbebe1e322dfa9914f20ba039c6318a892269a56c384fec4316b28eef8e705f15ed5f99c5dcb52953a77e9535bff4527dd88e9c771"
});

var purchaseEvent = {
  item: "golden gadget",
  price: 25.50,
  referrer: document.referrer,
  keen: {
    timestamp: new Date().toISOString()
  }
};

client.addEvent("purchases", purchaseEvent, function(err, res){
  if (err) {
    // there was an error!
  }
  else {
    // see sample response below
  }
});
