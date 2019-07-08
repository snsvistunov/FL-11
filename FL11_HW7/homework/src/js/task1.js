// Your code goes here
let messages = {
    'enter_email':'Please enter your e-mail.',
    'enter_psw':'Please enter your password.',
    'enter_old_psw':'Please enter your old password.',
    'empty':'Canceled.',
    'less_6':'I don’t know any emails having name length less than 6 symbols.',
    'unknown':'I don’t know you.',
    'wrong_psw':'Wrong password.',
    'change_psw':'Do you want to change your password?',
    'change_failed':'You have failed the change.',
    'enter_new_psw':'Please enter new password.',
    'enter_new_psw_rep':'Please repeat enter new password.',
    'short_psw':'It’s too short password. Sorry.',
    'scs_change':'You have successfully changed your password.',
    'wrong_new_psw':'You wrote the wrong password.'
};
let emailList = {
    'user@gmail.com':'UserPass',
    'admin@gmail.com':'Admin'
};
let email=prompt(messages['enter_email']);
let password=false;
let oldPassword;
const emailMinLength=6;
const pswMinLength=5;
let validEmail=false;
let validPassword=false;
let changeConfirm=false;
let newPassword;
let newPasswordRepeat;
//Check e-mail
if(!email){
    alert(messages['empty']);
} else if (email.length<emailMinLength) {
    alert(messages['less_6']);
} else if(!emailList[email]){
    alert(messages['unknown']);
} else {
    validEmail=true;
}
//Check password
if (validEmail){
    password=prompt(messages['enter_psw']);
    if (!password){
        alert(messages['empty']);
    } else if (password!==emailList[email]){
        alert(messages['wrong_psw']);
    } else {
        validPassword=true;
    }
}
//Change password
if (validPassword) {
    changeConfirm=confirm(messages['change_psw']);
    if (!changeConfirm){
        alert(messages['change_failed']);
    } else {
    oldPassword=prompt(messages['enter_old_psw']);
    if (oldPassword!==password){
        alert(messages['wrong_psw']);
    } else {
        newPassword=prompt(messages['enter_new_psw']);
        if (newPassword.length<pswMinLength){
            alert(messages['short_psw']);
        } else{
            newPasswordRepeat=prompt(messages['enter_new_psw_rep']);
            if(newPasswordRepeat===newPassword){
                alert(messages['scs_change']);
            } else{
                alert(messages['wrong_new_psw']);
            }
        }
    }
}
}