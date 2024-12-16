import { 
    apiUrl, commonHeaders, loginPage
} from '../const.js'

import moment from 'moment';
import { json } from 'react-router-dom';


// Function to convert Base64 to Blob
export function base64ToBlob(base64String, contentType = '') {
    const byteCharacters = atob(base64String);
    const byteArrays = [];

    for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
    }

    const byteArray = new Uint8Array(byteArrays);
    return new Blob([byteArray], { type: contentType });
}

export function GetAuthDataFromStorage(){
    
    if(CheckIfTokenExpired())
        GoToLoginPage();
    
    const r = JSON.parse(localStorage.getItem('token'));

    return r;
}

function CheckIfTokenExpired(){

    let result = false;

    const t = localStorage.getItem('token');
    //console.log(JSON.parse(t));

    if(t == undefined || t == null){
        result = true;
    }
    else {
        const exp = JSON.parse(t).expires;
        const end = moment(exp);
        const start = new Date();
        const duration = end.diff(start, 'second');
        console.log("duration:" + duration);
        if(duration < 0)//токен закончился
            result = true;
    }

    console.log("CheckIfTokenExpired:" + result);

    return result;
}



export async function sendAuthPostRequest(url, obj){
    //проверяем токен авторизации
    
    if(CheckIfTokenExpired())
        GoToLoginPage();

    /*if(t == null){
        GoToLoginPage();
    }
    else {
        const end = moment(t.expires);
        const start = new Date();
        const duration = end.diff(start, 'second');
        if(duration < 3)//до окончания токена меньше 3х секунд
            GoToLoginPage();
    }*/


    const r = await fetch(url, {
        method:'POST',
        body: JSON.stringify(obj),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })

    return r;

}



function GoToLoginPage(){
    window.location.href = loginPage;
}


export function sendAuthGetRequest(url){
    //проверяем токен авторизации


}
