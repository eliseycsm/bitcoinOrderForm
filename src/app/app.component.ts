import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective} from '@angular/forms'
import { validAge, validURL } from './valid.directives'
import { Order } from './order'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bitcoinOrderForm';

  //configurations
  form: FormGroup
  age: Date
  btcRate: number = 1.2 //http GET required
  today = new Date()
  buyOrder: boolean = false
  sellOrder: boolean = false
  totalCost: number = 0


  //controls
  nameCtrl = new FormControl("", [Validators.required])
  contactCtrl = new FormControl("", [Validators.required, Validators.pattern('^[\+65]?[6|8|9][1-9]{7}')]) //need to include () & -
  genderCtrl = new FormControl("", [Validators.required])
  dobCtrl = new FormControl("", [Validators.required, validAge(21)])
  orderDateCtrl = new FormControl("", [Validators.required])
  orderTypeCtrl = new FormControl("", [Validators.required])
  orderUnitCtrl = new FormControl("", [Validators.required])
  paymentURLCtrl = new FormControl("", [Validators.required, validURL()]) //Validators.pattern('^(https://')
  


  constructor(private fb: FormBuilder) {

  }
  genderArr = ["Male", "Female"]

  ngOnInit() {
    this.form = this.fb.group({
      name: this.nameCtrl,
      contact: this.contactCtrl,
      gender: this.genderCtrl,
      dob: this.dobCtrl,
      orderDate: this.orderDateCtrl,
      orderType: this.orderTypeCtrl,
      paymentURL: this.paymentURLCtrl,
      orderUnit: this.orderUnitCtrl,

    })

  }

  calcTotalAmt($event){
    let units = $event.target.value
    this.totalCost = units * this.btcRate
  }

  addOrder(){
    let order = new Order(
      this.form.value.name,
      this.form.value.contact,
      this.form.value.gender,
      this.form.value.dob,
      this.form.value.orderDate,
      this.form.value.orderType,
      this.form.value.paymentURL,
      this.form.value.orderUnit,
    )
    console.log(order)
    
  }

  

  resetForm(formDirective? : FormGroupDirective ){
    this.form.reset()
    formDirective.resetForm()

  }
}
