///<reference path="../lib/jquery-3.4.1.min.js"/>
///<reference path="../Model/loginModel.js"/>

function loginController(loginModel){

    // Private property
    let loginModelObj=loginModel;

    //Private Methods
    let getLoginInfo=function(){

        loginModelObj.username= $("#txtUsername").val();
        loginModelObj.password=$("#txtPassword").val();

    }

    let loginAuth=function(){

        //local Variable

        let demoUsername="Priyanka";
        let demoPassword="123456";

        let response=undefined;

        if(loginModelObj.username===demoUsername && loginModelObj.password===demoPassword){
            
            response=true;

        }
        else{

            response="Username & Password does not match."
        }

        return response;
    }

    let redirectToDisplay=function(){

        window.location.pathname="../View/displayMessage.html";
    }

    let loginFailed=function(strMessage){

        $("#failedMessage").show();
        $("#failedMessage").html(strMessage);
    }

    let loginOutput=function(response){

        let type=typeof(response);

        if(type==="boolean"){

            redirectToDisplay();
        }
        else{

            loginFailed(response);
        }
    }

    //Public Methods (UI Actions)
    this.onCancel=function(){

        $("#txtUsername").val("");
        $("#txtPassword").val("");

        $("#txtUsername").focus();
    }
        
    this.onSubmit=function(){

        let response=undefined;

        //get Login info from View
        getLoginInfo();

        //check Authentication
        response=loginAuth();

        //output

        loginOutput(response);
    }

}

let loginModelObj=new loginModel();
let loginControllerObj=new loginController(loginModelObj);

function onCancelClickEvent(){
    loginControllerObj.onCancel();
}

function onSubmitClickEvent(){

    loginControllerObj.onSubmit();
}