// requires FreeFlightAnalyticsRecording
// requires FreeFlightAnalyticsRecording.ScreenshotModule
// requires jQuery
FreeFlightAnalyticsRecording.ScreenRecordingModule = {};

/** start recording by saving a list of pngs
 *  @param duration the number of milliseconds to record for
 *  @param delay the delay after every screenshot (inverse of framerate)
 */ 
FreeFlightAnalyticsRecording.ScreenRecordingModule.startRecording = function(duration, delay) {
  var screenshotList = []; // list of screenshot pngs to send to backend to create gifs from
  // take screenshots until duration has been reached
  // push a screenshot to the screenshot list according to the framerate
  var intervalId = setInterval(function() {
    FreeFlightAnalyticsRecording.ScreenshotModule.takeScreenshot(function(canvas) {
      var image = canvas.toDataURL("image/png");
      screenshotList.push(image);
    });
  }, delay);
  
  setTimeout(function() {
    clearInterval(intervalId);
    // send data to back end
    $.ajax({
      type: 'POST',
      url: FreeFlightAnalyticsRecording.RouteMap.screenRecordingURL,
      data: {delay: delay, screenshotList: screenshotList}
    });
  }, duration);
}