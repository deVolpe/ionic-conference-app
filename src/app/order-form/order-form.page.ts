import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { ReceiverOptions, ShippingOptions } from '../interfaces/order-options';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.page.html',
  styleUrls: ['./order-form.page.scss']
})
export class OrderFormPage implements OnInit {
  receiver: ReceiverOptions = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  shipping: ShippingOptions = {
    address: '',
    city: '',
    country: 'United States',
    state: '',
    postalCode: null
  };

  inputLabels: string[] = [
    'First Name',
    'Last Name',
    'Email',
    'Phone Number',
    'Address',
    'City',
    'Country',
    'State',
    'Postal Code'
  ];

  isSubmitted = false;

  constructor(private toastController: ToastController) {}

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Success',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async onAddPaymentInfo(form: NgForm) {
    this.isSubmitted = true;

    if (form.valid) {
      await this.presentToast();
    }
  }
}
