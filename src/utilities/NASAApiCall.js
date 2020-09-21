import axios from "axios";

import {containsKey} from "./BasicFuncs";

function NASAApiCall ( baseURI = null , otherUriParams = [] ) {

    if( baseURI !== null && baseURI !== "" && containsKey( "api_key", otherUriParams ) === false ){
        console.info( "BaseURI && apiKey is not valid");        
        return;
    }

    let uriParams = "";    

    otherUriParams.forEach( ( element, index ) => {
        if( index === 0 )
            uriParams += "?" + element.key + "=" + element.value;
        
        else 
            uriParams += "&" + element.key + "=" + element.value;                
    });

    let finalUrl = `${baseURI}${uriParams}`

    return new Promise( (resolve, reject) => {
        axios.get( finalUrl )
        .then( (response) => {         
            resolve(response); 
        })
        .catch( (error) =>  {
            console.log(error);
            reject(error);         
        }); 
    });     
}

export default NASAApiCall;