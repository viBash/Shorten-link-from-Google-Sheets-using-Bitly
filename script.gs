var ACCESS_TOKEN = "";

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Shorten")
    .addItem("Go!","rangeShort")
    .addToUi()  
}


function rangeShort() {
  var range = SpreadsheetApp.getActiveRange(), data = range.getValues();
  var output = [];
  for(var i = 0, iLen = data.length; i < iLen; i++) {
    var url = UrlFetchApp.fetch("https://api-ssl.bitly.com/v3/shorten?access_token=" + ACCESS_TOKEN + "&longUrl=" + data[i][0] + "&format=txt");
    output.push([url.getContentText("UTF-8").replace(/\n/g,"")]);
  }
  range.offset(0,1).setValues(output);
}
