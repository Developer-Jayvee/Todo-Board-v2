

export const emailValidator = (email: string) => {
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if(!email) return false;
    if(email.length > 254) return false;

    var valid = emailRegex.test(email);
    
    if(!valid) return false;
   
    return true;    
}   