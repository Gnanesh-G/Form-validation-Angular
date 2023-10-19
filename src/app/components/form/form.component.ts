import { Component } from '@angular/core';
import { Form } from 'src/app/modules/form';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  nameRef: string = '';
  phoneNumberRef: string = '';
  emailRef: string = '';
  Edited: number = 0;
  btn: string = 'Save Data';

  forms: Form[] = [];
  constructor(private formService: FormService) {
    this.forms = this.formService.formDetails;
  }
  add(): void {
    if (this.Edited === 0) {
      this.forms = this.formService.add(
        this.nameRef,
        this.phoneNumberRef,
        this.emailRef
      );
    } else {
      this.forms = this.formService.edit(
        this.Edited,
        this.nameRef,
        this.phoneNumberRef,
        this.emailRef
      );
    }

    this.nameRef = '';
    this.phoneNumberRef = '';
    this.emailRef = '';
    this.Edited = 0;
    this.btn = 'Save Data';
  }
  delete(id: number): void {
    this.forms = this.formService.delete(id);
  }
  edit(id: number): void {
    this.Edited = id;
    let form: Form = this.formService.getItem(this.Edited);
    this.nameRef = form.name;
    this.phoneNumberRef = form.phoneNumber;
    this.emailRef = form.email;
    this.btn="Update"
  }
}
