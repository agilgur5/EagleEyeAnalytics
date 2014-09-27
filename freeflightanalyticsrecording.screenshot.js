// requires html2canvas
window.FreeFlightAnalyticsRecording = FreeFlightAnalyticsRecording || {};
FreeFlightAnalyticsRecording.ScreenshotModule = {};

// returns canvas object screenshot using html2canvas
FreeFlightAnalyticsRecording.ScreenshotModule.takeScreenshot = function() {
  html2canvas(document.body, {
    onrendered: function(canvas) {
      return canvas;
    }
  });
}