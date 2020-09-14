
// Returns whether an object contains key or not. 
// @Return Boolean
export function containsKey( keyToFind, objectArray ){

    for (var i=0; i < objectArray.length; i++) {
        if (objectArray[i].key === keyToFind) {
            return true;
        }
    }
    return false;
}
// Returns value of the desire key.
// @Returns value, null or undefined
export function getValuesFromObject(obj, key) {
    return key.split(".").reduce(function(o, x) {
        return (typeof o == "undefined" || o === null) ? o : o[x];
    }, obj);
}