import { Injectable } from '@angular/core';
import { ValidationResult } from '../../model/validationResult';

@Injectable({
  providedIn: 'root'
})
export class UniversityEmailValidator {

    whiteListEmail: String[] = [
        'max@flekswork.com',
        'hello@flekswork.com',
        'support@flekswork.com',
        'max@flastio.com',
        'hello@flastio.com',
        'support@flastio.com',
        'mehdizmm@gmail.com',
        'mxzadeh@gmail.com',
        'mhzm1981@yahoo.com',
        'maryam.sarab@gmail.com',
        'nateglazer@yahoo.com',
        'sirena@flastio.com',
        'mohsenxad@gmail.com',
        'xad@flekswork.com',
        'mohamadshamsi76@gmail.com',
        's.farajnezam@gmail.com',
        'gmilashghali@gmail.com'
    ];

    validate(email: String):ValidationResult{
        let validationResult: ValidationResult = {
          hasError: false,
          messageList: []
        };
        if(!email){
          validationResult.hasError = true;
          validationResult.messageList.push("Enter Email Address");
        }else{
    
          if(
            email.length <= 5 ||
            !email.includes('@')
    
          ){
            validationResult.hasError = true;
            validationResult.messageList.push("Enter Valid Email Address");
          }
    
    
          if(
            !this.whiteListEmail.includes(email) &&
            !email.endsWith(".edu")
          ){
            validationResult.hasError = true;
            validationResult.messageList.push("Enter Valid University Email Address");
          }
        }
        return validationResult;
      }
}