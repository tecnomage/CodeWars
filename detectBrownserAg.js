(function detectBrowser(userAgent) {
  // "Internet Explorer" : ? "Mozilla Firefox" : "Google Chrome";
  //var re = /Mozilla (chap \d+(\.\d)*)/i;  
  var re =  /google chrome| Firefox/i;
  let str = userAgent.includes("Firefox");
  let userBrownser = re.exec(userAgent);
  console.log(userBrownser);
  console.log(str);
  //https://regexr.com/
  //console.log(userBrownser[0]);

})("Firefox Mozilla/5.0 google chrome (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Firefox Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299")