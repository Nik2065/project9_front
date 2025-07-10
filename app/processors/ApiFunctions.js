import { 
    apiUrl, 
} from '../const.js'
import  {GetAuthDataFromStorage, getAuthHeaders, commonHeaders} from './CommonFunctions.js'
import moment from 'moment';



export async function SearchLoanRequestsFromApi(searchOptions){

    console.log({searchOptions});

    //TODO: добавить параметры поиска
    const namesearch = 'FirstName=' + searchOptions.FirstName;
    const snsearch = '&MiddleName=' + searchOptions.SecondName;
    const thirdsearch = '&ThirdName=' + searchOptions.ThirdName;
    const lrid = '&LoanRequestId=' + searchOptions.LoanRequestId;
    const shId = '&ShopOrderId=' + searchOptions.ShopOrderId;
    const prId = '&ProcessId=' + searchOptions.ProcessId; 
    const processCode = '&ProcessCode=' + searchOptions.ProcessCode;
    const lst = '&LastStatusId=' + searchOptions.LastStatusId;
    const pointCode = '&PointCode=' + searchOptions.PointCode;



    const url=  '/api/LoanRequests/Search?' 
    + namesearch + snsearch + thirdsearch + lrid + shId
    + processCode + prId + lst + pointCode;


    const result = await fetch(url,{
        method: "GET",
        headers: commonHeaders
    })

    return result;


}

//--------------------------------------------------
export async function GetStatusDataFromApi(days, statuses){

    const end = new Date();
    //console.log(statuses);
    //console.log(end.toLocaleDateString());
    const begin =  getDateXDaysAgo(days);
    //console.log(begin);

    console.log(begin.toISOString());


    let url=  '/api/LoanRequests/GetStatusMonitorResult?begin=' + begin.toISOString() 
    + "&end=" + end.toISOString()
    + "&statuses=" + statuses.join(',');

    console.log({url});

    const result = await fetch(url,{
        method: "GET",
        headers: commonHeaders
    })

    return result;

}

function getDateXDaysAgo(numOfDays) {
    const date = new Date();
    const daysAgo = new Date(date.getTime());
    daysAgo.setDate(date.getDate() - numOfDays);
    //daysAgo.setHours(0, 0, 0, 0);
    return daysAgo;
  }


export async function searchComputers(pMin, pMax, elementsInRow){


    const url= apiUrl +  '/Computers/SearchComputers?' 
    + 'pmin=' + pMin + '&pmax=' + pMax
    + '&elementsInRow=' + elementsInRow 
    ;


    const result = await fetch(url,{
        method: "GET",
        headers: commonHeaders,
    });

    return result;
}



export async function GetCpuList(){
    const url = apiUrl + '/DataList/GetCpuList'

    const result = await fetch(url,{
        method: "GET",
        headers: commonHeaders,
    });

    return result;
}

export async function GetGpuList(){
    const url = apiUrl + '/DataList/GetGpuList'

    const result = await fetch(url,{
        method: "GET",
        headers: commonHeaders,
    });

    return result;
}




export async function Auth(email, password) {

    let authResult = {
        success: true,
        message: "",
        token: "",
        expires: null,
        username: ""
    };


    try {
    
        const url= apiUrl + '/User/Token';

        const obj = {
            Email: email,
            Password: password
        };

        const result1 = await fetch(url, {
                method:'POST',
                body: JSON.stringify(obj),
                headers: commonHeaders
        });

        
        console.log({result1});


        if(result1.status === 200){

            const body = await result1.json();

            //console.log({body});

            authResult.success = true;
            authResult.token = body.access_token;
            authResult.expires = body.expires;
            authResult.username = body.username;
            authResult.message = "";
        
            return authResult;
        }
        else if(result1.status === 401){
                authResult.success = false;
                authResult.token = "";
                authResult.message = "Ошибка авторизации";
        
                return authResult;

        }
        else{
                authResult.success = false;
                authResult.token = "";
                authResult.message = "Ошибка";
        
            return authResult;
        }

    }
    catch(error){
        
        authResult.success = false;
        authResult.token = "";
        authResult.message = "Ошибка: Сервер недоступен";
        
        return authResult;
    }

    //пока убираем ограничение по коду
    //if(res.status === 200){

    //}
}

export async function GetToken(email, password) {
 
        let authResult = {
            success: true,
            message: "",
            token: "",
            expires: null,
            username: ""
        };

    
        const url= apiUrl + '/User/Token';

        const obj = {
            emailAsLogin: email,
            pwd: password
        };

        const result1 = await fetch(url, {
                method:'POST',
                body: JSON.stringify(obj),
                headers: commonHeaders
        });
    
        console.log({result1});

        if(result1.status === 200){

            const body = await result1.json();
            console.log({body});

            authResult.success = true;
            authResult.token = body.access_token;
            authResult.expires = body.expires_in;
            authResult.username = body.login;
            authResult.message = body.message;

            //
            const end = moment(body.expires_in);
            console.log(end);
        
            //diff
            //const diff = moment().add(new Date(), 'seconds');
            //console.log()
            const now = new Date();
            const now1 = moment(now);
            var duration = moment.duration(end.diff(now1));
            //var hours = duration.asHours();

            console.log({duration});

            return authResult;
        }
        else if(result1.status === 401){
                authResult.success = false;
                authResult.token = "";
                authResult.message = "Ошибка авторизации";
        
                return authResult;
        }
        else{
                authResult.success = false;
                authResult.token = "";
                authResult.message = "Ошибка";
        
            return authResult;
        }



}



//создание аккаунта
export async function SendSignUpData(email, password) {
    

    const url= apiUrl + '/User/SignUp';

    const o = {
        Email: email,
        Password: password
    };

    const result1 = await fetch(url, {
            method:'POST',
            body: JSON.stringify(o),
            headers: commonHeaders
    });

    return result1;
}


/*
export async function GetEmployeeList() {
    
    const url= apiUrl + '/Emplyees/GetEmployeesList';

    const result = {
        err: false,
        msg: "",
        empList: []
    };

    try{

        const result1 = await fetch(url, {
            method:'POST',
            body: JSON.stringify({}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        
        if(result1 != null && result1 != undefined)
        {
            const json = await result1.json();
            //console.log({json});
            result.empList = json.employeeViews;
        }

    }
    catch(error){
        console.error(error);
        result.err = error;
    }

    return result;

}*/


export async function SendDataToCreateProduct(title, description,  cost, cpu_id, gpu_id){

    console.log("SendDataToCreateProduct");
    const h = getAuthHeaders();
    console.log({h});
    const url= apiUrl + '/ProductList/CreateProduct';

    const o = {
        title: title,
        description: description,
        cost: cost,
        cpuId: cpu_id,
        gpuId: gpu_id
    };

    //console.log({o});

    const res = await fetch(url, {
        method:'POST',
        body: JSON.stringify(o),
        headers: h
    });

    return res;
}

export async function GetUserProductsList(options){
    let url = apiUrl + '/ProductList/GetUserProductsList'

    if(options.page)
        url = url + '?page=' + options.page;

    console.log({url});

    const result = await fetch(url,{
        method: "GET",
        headers: getAuthHeaders(),
    });

    return result;
}

export async function GetMainPageProductsList(options){
    let url = apiUrl + '/ProductList/GetProductsList'

    if(options){
        url = url + "?priceMin=" + options.priceMin + "&priceMax=" + options.priceMax;

    }

    //if(options.page)
    //    url = url + '?page=' + options.page;



    console.log(url);

    const result = await fetch(url,{
        method: "GET",
        headers: getAuthHeaders(),
    });

    return result;
}
