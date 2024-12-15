import { 
    apiUrl, commonHeaders, loginPage
} from '../const.js'

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

export function sendAuthPostRequest(url, obj){
    //проверяем токен авторизации
    const exp = localStorage.getItem('token');


    if(exp == null){
        GoToLoginPage();
    }
    else {
        const end = moment(exp);
        const start = new Date();
        const duration = end.diff(start, 'second');
        if(duration < 3)//до окончания токена меньше 3х секунд
            GoToLoginPage();
    }
}

function GoToLoginPage(){
    window.location.href = loginPage;
}


export function sendAuthGetRequest(url){
    //проверяем токен авторизации


}

