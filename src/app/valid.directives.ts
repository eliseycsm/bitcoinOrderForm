import { ValidatorFn, AbstractControl, ControlContainer} from '@angular/forms'

export function validSGNumber(numRegex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key:string]: any} | null => {
      const invalid = numRegex.test(control.value)
      return invalid ?  {forbiddenNum: { value: control.value}}: null;
    };
  }

export function validAge(dateVal: Date): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      
      //update logic below is test code
      let dateInput = control.value
      let now = new Date().getFullYear()
      if ((now - dateInput.getFullYear()) < 21) {
        return { invalidAge: {value: control.value}}
      }
      return null
  }
}