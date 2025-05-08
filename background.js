chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "clearNow") {
    chrome.browsingData.remove({
      since: Date.now() - 60 * 60 * 1000
    }, {
      "cookies": true,
      "localStorage": true,
      "cache": true
    }, () => {
      console.log("KLLSWTCH: Data manually cleared.");
      sendResponse({ status: "success" });
    });
    return true; // Required to use sendResponse asynchronously
  }
});
