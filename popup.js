document.getElementById("clearNow").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "clearNow" });
});
