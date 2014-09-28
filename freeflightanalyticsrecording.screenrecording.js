// requires FreeFlightAnalyticsRecording
// requires FreeFlightAnalyticsRecording.ScreenshotModule
// requires jQuery
FreeFlightAnalyticsRecording.ScreenRecordingModule = {};

/** start recording by saving a list of pngs
 *  @param duration the number of milliseconds to record for
 *  @param framerate the framerate at which to record at
 */ 
FreeFlightAnalyticsRecording.ScreenRecordingModule.startRecording = function(duration, framerate) {
  var screenshotList = []; // list of screenshot pngs to send to backend to create gifs from
  // take screenshots until duration has been reached
  // push a screenshot to the screenshot list according to the framerate
  var intervalId = setInterval(function() {
    FreeFlightAnalyticsRecording.ScreenshotModule.takeScreenshot(function(canvas) {
      var image = canvas.toDataURL("image/png");
      screenshotList.push(image);
    });
  }, 1000 / framerate);
  
  setTimeout(function() {
    clearInterval(intervalId);
    // send data to back end
    $.ajax({
      type: 'POST',
      url: FreeFlightAnalyticsRecording.RouteMap.screenRecordingURL,
      data: {framerate: framerate, screenshotList: screenshotList}
    });
  }, duration);
}