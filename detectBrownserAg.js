(function detectBrowser(userAgent) {
  // "Internet Explorer" : ? "Mozilla Firefox" : "Google Chrome";
  //var re = /Mozilla (chap \d+(\.\d)*)/i;  
  var re = /FireFox|Chrome|.NET/gi;
  let userBrownser = re.exec(userAgent);
  console.log(userBrownser[0]);
  if(userBrownser[0] === "Chrome"){
    return "Google Chrome"
  }else if(userBrownser[0] === "Firefox"){
    return "Mozilla Firefox"
  }else if(userBrownser[0] === ".NET"){
    return "Internet Explorer"
  }
  //https://regexr.com/
  //console.log(userBrownser[0]);

})("asdsadsa (Windows NT 10.0; Win64; x64) Microsoft AppleWebKit/537.36 (KHTML, like Gecko) Firefox Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299")


