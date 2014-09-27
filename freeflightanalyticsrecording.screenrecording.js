// requires FreeFlightAnalyticsRecording
// requires FreeFlightAnalyticsRecording.ScreenshotModule
// requires jQuery
FreeFlightAnalyticsRecording.ScreenRecordingModule = {};

// list of screenshot pngs to send to backend to create gifs from
FreeFlightAnalyticsRecording.ScreenRecordingModule.screenshotList = [];

/** start recording by saving a list of pngs
 *  @param duration the number of milliseconds to record for
 *  @param framerate the framerate at which to record at
 */ 
FreeFlightAnalyticsRecording.ScreenRecordingModule.startRecording = function(duration, framerate) {
  var endTime = Date.now() + duration;
  // take screenshots until duration has been reached
  while(Date.now() < endTime) {
    // push a screenshot to the screenshot list according to the framerate
    setTimeout(function() {
      var canvas = FreeFlightAnalyticsRecording.ScreenshotModule.takeScreenshot();
      var image = canvas.toDataURL("image/png");
      FreeFlightAnalyticsRecording.ScreenRecordingModule.screenshotList.push(image);
    }, 1000 / framerate);
  } // end while

  // send data to back end
  $.ajax({
    type: 'POST',
    url: FreeFlightAnalyticsRecording.RouteMap.screenRecordingURL,
    data: FreeFlightAnalyticsRecording.screenshotList
  });
}

