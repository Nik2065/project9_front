import { 
    apiUrl, commonHeaders
} from '../const.js'




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
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
        });

        
        //console.log({result1});


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
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
});

    return result1;
}



export async function GetEmployeeList() {
    
    const url= baseUrl + '/Emplyees/GetEmployeesList';

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

}

//пока получаем все чаты пользователя
export async function GetAuthUserActiveChats(){

    const url= baseUrl + '/Chats/GetAuthUserActiveChats';
    
    const result = {
        err: false,
        msg: "",
        chats: []
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
            result.chats = json.chatViews;
        }

    }
    catch(error){
        console.error(error);
        result.err = error;
    }
    
    return result;
}


export function GetSecondEmployee(employeeList, loginId){

    //console.log({employeeList});
    //console.log({loginId});


    let secondEmp = {};
    employeeList.forEach(item1 => {
        //console.log({item1});
        if(item1.id != loginId)
        {
            Object.assign(secondEmp, item1);
            return secondEmp;
        }
    });

    return secondEmp;
}


export function IsAuthorFunc(employeeList, loginId){

    employeeList.forEach(item1 => {
        //console.log({item1});
        if(item1.id == loginId)
        {
            return true;
        }
    });

    return false;
}

