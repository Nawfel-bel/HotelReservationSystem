import { Component, inject, Input } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { Router } from '@angular/router';
import { IReservation } from '../../models/reservation';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { TuiAppearance, TuiButton, TuiTextfield, TuiTitle, TuiDataList } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm, TuiHeader } from '@taiga-ui/layout';
import { TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { TuiDay, TuiDayRange } from '@taiga-ui/cdk';
import { TuiInputDateRangeModule, TuiUnfinishedValidator } from '@taiga-ui/legacy';


@Component({
  selector: 'app-edit-reservation',
  imports: [
    TuiAppearance,
    TuiButton,
    TuiCardLarge,
    TuiForm,
    TuiHeader,
    TuiTextfield,
    TuiTitle,
    ReactiveFormsModule,
    ReactiveFormsModule,
    TuiInputDateRangeModule,
    TuiUnfinishedValidator,
    TuiDataList,
    TuiDataListWrapper,
    TuiSelectModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './edit-reservation.component.html',
  styleUrl: './edit-reservation.component.css'
})
export class EditReservationComponent {

  reservationService = inject(ReservationsService);
  private readonly router = inject(Router);

  $reservation: IReservation | undefined = undefined;
  form: FormGroup;
  formBuilder: FormBuilder;
  min = new TuiDay(2000, 2, 20);
  max = new TuiDay(2040, 2, 20);

  constructor(fb: FormBuilder) {
    this.formBuilder = fb;
    this.form = this.formBuilder.group({
      guest_id: new FormControl('', Validators.required),
      room_ids: this.formBuilder.array([this.createRoomIdField()]),
      range: new FormControl(new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)), Validators.required),
    });
  }


  ngOnInit(): void {
    if (this.$reservation) {
      this.form.patchValue({
        guest_id: this.$reservation.guestId,
        room_ids: this.$reservation.roomIds,
        start_date: this.$reservation.startDate,
        end_date: this.$reservation.endDate,
      })
    }
  }

  get roomIds() {
    return (this.form.get('room_ids') as FormArray);
  }
  createRoomIdField() {
    return this.formBuilder.control('', [Validators.required]);
  }
  addRoomIdNumber() {
    this.roomIds.push(this.createRoomIdField());
  }
  removeRoomId(index: number) {
    this.roomIds.removeAt(index);
  }

  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.reservationService.createReservation(formData).subscribe(() =>
        this.router.navigate(['/reservations'])
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
