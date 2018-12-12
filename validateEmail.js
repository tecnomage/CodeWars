function validateEmail(str) {
let regex = new RegExp(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/,'igm')	
return regex.test(str);
}