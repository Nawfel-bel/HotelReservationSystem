import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { TuiAppearance, TuiButton, TuiError, TuiTextfield, TuiTitle } from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm, TuiHeader } from '@taiga-ui/layout';
import { GuestsService } from '../../services/guests.service';
import { IGuest } from '../../models/guest';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrl: './edit-guest.component.css',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TuiAppearance,
    TuiButton,
    NgForOf,
    TuiCardLarge,
    TuiError,
    TuiFieldErrorPipe,
    TuiForm,
    TuiHeader,
    TuiTextfield,
    TuiTitle
  ],
})
export class EditGuestComponent implements OnInit {

  guestService = inject(GuestsService);
  private readonly router = inject(Router);

  $guest: IGuest | undefined = undefined;
  form: FormGroup;
  formBuilder: FormBuilder;
  isEditMode = false;

  constructor(fb: FormBuilder) {
    this.formBuilder = fb;
    this.form = this.formBuilder.group({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      phone_numbers: this.formBuilder.array([this.createPhoneNumber()])
    });
  }

  @Input()
  set id(id: string) {
    if (id == '0') {
      return;
    }
    this.$guest = this.guestService.$guests()?.find(guest => guest.id === id)
    this.isEditMode = true;
  }


  ngOnInit(): void {
    if (this.$guest) {
      this.form.patchValue({
        first_name: this.$guest.firstName,
        last_name: this.$guest.lastName,
        email: this.$guest.email,
        phone_numbers: []
      })
      this.phoneNumbers.clear()
      this.$guest.phone_numbers.forEach(nmb => {
        this.phoneNumbers.push(this.formBuilder.control(nmb, [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]));
      })
    }
  }


  get phoneNumbers() {
    return (this.form.get('phone_numbers') as FormArray);
  }

  createPhoneNumber() {
    return this.formBuilder.control('', [Validators.required, Validators.pattern('^[0-9]{10}$')]);
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.createPhoneNumber());
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      if (this.$guest) {
        this.guestService.updateGuestWithId(this.$guest.id, formData).subscribe(
          () => {
            this.router.navigate(['/guests'])
          });
      } else {
        this.guestService.createGuest(formData).subscribe(() =>
          this.router.navigate(['/guests'])
        );
      }

    } else {
      console.error('Form is invalid');
    }
  }
}
