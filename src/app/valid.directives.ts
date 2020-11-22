import { ValidatorFn, AbstractControl} from '@angular/forms'

/* export function validSGNumber(numRegex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key:string]: any} | null => {
      const invalid = numRegex.test(control.value)
      return invalid ?  {forbiddenNum: { value: control.value}}: null;
    };
  } */

export function validAge(validAge: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      
      //calculate full Age using time
      let dob = new Date(control.value).getTime()
      let now = Date.now() //returns # of ms since 01/01/70
      let ageDiff = new Date(now - dob).getUTCFullYear() //utcFullyear only works on dateobj
      let age = Math.abs(ageDiff - 1970)
      if (age < validAge) {
        return { invalidAge: {value: control.value}}
      }
      return null
  }
}

export function validURL(): ValidatorFn {
  return(control: AbstractControl): {[key: string]: any} | null => {
    let rejectURL = false

    try {
      new URL(control.value)  //URL API has 95% support only
    }catch {
      rejectURL = true
    }
    return rejectURL? { invalidURL : true} : null
  }
}