function clearData() {
  chrome.browsingData.remove({
    "since": Date.now() - 60 * 60 * 1000  // past hour
  }, {
    "cookies": true,
    "localStorage": true,
    "cache": true,
    "history": false
  }, () => {
    console.log("KLLSWTCH: Data cleared.");
  });
}
