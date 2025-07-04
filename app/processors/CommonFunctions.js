import { 
    loginPage
} from '../const.js'

import moment from 'moment';



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



export function GetAuthDataFromStorage(mastRedirect){
    
    if(CheckIfTokenExpired())
    {
        if(mastRedirect){
            GoToLoginPage();
        }
        
        return null;
    }

    //if(CheckIfTokenExpired()){
    //    GoToLoginPage();
    //}

    
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



export const commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}


export const getAuthHeaders=() => {
    
    const auth = GetAuthDataFromStorage(true);
    
    //console.log({token});

    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth.token
    }
}


export function ConvertDtToString(dt){

    dt = new Date();

    let result = "";
    let h = AddZero(dt.getHours());
    let m = AddZero(dt.getMinutes());
    let d = AddZero(dt.getDate());
    let M = dt.getMonth();
    let y = dt.getFullYear();

    result = h + ":" + m + " " + d + "." + getMonthName(M)+ "." + y;
    return result;
}

function AddZero(s){
    if(s.toString().length == 1)
        return "0" + s;
    
    return s;
}

function getMonthName(n){
    if(n === 6)
        return "июн";
    if(n === 7)
        return "июл";

    else return "-1";


}