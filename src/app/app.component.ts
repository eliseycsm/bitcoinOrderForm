import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective} from '@angular/forms'
import { validSGNumber, validAge } from './valid.directives'
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
  btcRate: string = "1.2" //http GET required
  today = new Date()
  buyOrder: boolean = false
  sellOrder: boolean = false
  totalCost: number


  //controls
  nameCtrl = new FormControl("", [Validators.required])
  contactCtrl = new FormControl("", [Validators.required, Validators.pattern('^[\+65]?[6|8|9][1-9]{7}')])
  genderCtrl = new FormControl("", [Validators.required])
  dobCtrl = new FormControl("", [Validators.required])
  orderDateCtrl = new FormControl("", [Validators.required])
  orderTypeCtrl = new FormControl("", [Validators.required])
  orderUnitCtrl = new FormControl("", [Validators.required])
  qrcodeURLCtrl = new FormControl("", [Validators.required, ])//Validators.pattern('^(https://')
  bitcoinURL = new FormControl("", [Validators.required])


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.nameCtrl,
      contact: this.contactCtrl,
      gender: this.genderCtrl,
      dob: this.dobCtrl,
      orderDate: this.orderDateCtrl,
      orderType: this.orderTypeCtrl,
      qrcodeURL: this.qrcodeURLCtrl,
      bitcoinURL: this.bitcoinURL,
      orderUnit: this.orderUnitCtrl,

    })
  }

  addOrder(){
    let order = new Order(
      this.form.value.name,
      this.form.value.contact,
      this.form.value.gender,
      this.form.value.dob,
      this.form.value.orderDate,
      this.form.value.orderType,
      this.form.value.qrcodeURL,
      this.form.value.bitcoinURL,
      this.form.value.orderUnit,
    )
    console.log(order)
    
  }

  resetForm(formDirective? : FormGroupDirective ){
    this.form.reset()
    formDirective.resetForm()

  }
}
