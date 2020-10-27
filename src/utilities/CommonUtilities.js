// Returns whether an object contains key or not.
// @Return Boolean
export function containsKey(keyToFind, objectArray) {
  for (var i = 0; i < objectArray.length; i++) {
    if (objectArray[i].key === keyToFind) {
      return true;
    }
  }
  return false;
}
// Returns value of the desire key.
// @Returns value, null or undefined
export function getValuesFromObject(obj, key) {
  return key.split(".").reduce(function (o, x) {
    return typeof o == "undefined" || o === null ? o : o[x];
  }, obj);
}

// @Returns roundedValue, null or undefined
export function roundInteger(value) {
  if (value == null || value == undefined) return value;

  return Math.round(value);
}

export function dateFormatter(date) {
    var options = {year: "numeric", month: "short", day: "numeric"};
    date = new Intl.DateTimeFormat("en-AU", options).format(date).replace(/\s/g, '-');    
    return date;
}

export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for(var i = 0; i <cookieArray.length; i++) {
    var currentCookie = cookieArray[i];
    while (currentCookie.charAt(0) == ' ') {
      currentCookie = currentCookie.substring(1);
    }
    if (currentCookie.indexOf(name) == 0) {
      return currentCookie.substring(name.length, currentCookie.length);
    }
  }
  return "";
}
