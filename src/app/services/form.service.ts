import { Injectable } from '@angular/core';
import { Form } from '../modules/form';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  // private forms:Form[]=[];
  formDetails: Form[] = [
    {
      id: 1,
      name: 'gnanesh',
      phoneNumber: '9566595025',
      email: 'gnaneshg1002@gmail.com',
    },
    {
      id: 2,
      name: 'kavin',
      phoneNumber: '9566595785',
      email: 'kaving1002@gmail.com',
    },
  ];

  getItem(id: number): any {
    for (let form of this.formDetails) {
      if (form.id === id) return form;
    }
  }

  add(nameRef: string, phoneNumberRef: string, emailRef: string): Form[] {
  let temp: Form = {
      id: this.formDetails.length + 1,
      name: nameRef,
      phoneNumber: phoneNumberRef,
      email: emailRef,
    };
    this.formDetails.push(temp);
    return this.formDetails;
  }
  delete(id: number): Form[] {
    this.formDetails = this.formDetails.filter((o) => o.id !== id);
    return this.formDetails;
  }

  edit(id: number, name: string, phoneNumber: string, email: string): Form[] {
    for (let form of this.formDetails) {
      if (form.id === id) {
        form.id === id,
          (form.name = name),
          (form.phoneNumber = phoneNumber),
          (form.email = email);
      }
    }
    return this.formDetails;
  }
}
