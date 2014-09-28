// requires html2canvas
var FreeFlightAnalyticsRecording = FreeFlightAnalyticsRecording || {};
FreeFlightAnalyticsRecording.ScreenshotModule = {};

// hits the callback with a canvas object screenshot using html2canvas
FreeFlightAnalyticsRecording.ScreenshotModule.takeScreenshot = function(callback) {
  html2canvas(document.body, {
    onrendered: function(canvas) {
      callback(canvas);
    }
  });
}

window.FreeFlightAnalyticsRecording = FreeFlightAnalyticsRecording;