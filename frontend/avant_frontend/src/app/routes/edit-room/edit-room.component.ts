import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiAppearance, TuiButton, TuiDataList, TuiTextfield, TuiTitle } from '@taiga-ui/core';
import { RoomsService } from '../../services/rooms.service';
import { IRoom } from '../../models/room';
import { Router } from '@angular/router';
import { TuiCardLarge, TuiForm, TuiHeader } from '@taiga-ui/layout';
import { TuiDataListWrapper } from '@taiga-ui/kit';
import { TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';


@Component({
  selector: 'app-edit-room',
  imports: [
    TuiAppearance,
    TuiButton,
    TuiCardLarge,
    TuiForm,
    TuiHeader,
    TuiTextfield,
    TuiTitle,
    ReactiveFormsModule,
    TuiDataList,
    TuiDataListWrapper,
    TuiSelectModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './edit-room.component.html',
  styleUrl: './edit-room.component.css'
})
export class EditRoomComponent implements OnInit {

  roomService = inject(RoomsService);
  private readonly router = inject(Router);
  protected readonly items = ['Black', 'Gold', 'Silver'];

  $room: IRoom | undefined = undefined;
  form: FormGroup;
  formBuilder: FormBuilder;
  isEditMode = false;

  constructor(fb: FormBuilder) {
    this.formBuilder = fb;
    this.form = this.formBuilder.group({
      room_number: new FormControl('', Validators.required),
      room_type_id: new FormControl('1', Validators.required) // make this changeable later
    });
  }

  @Input()
  set id(id: string) {
    if (id == '0') {
      return;
    }
    this.$room = this.roomService.$rooms()?.find(room => room.id === id)
    this.isEditMode = true;
  }


  ngOnInit(): void {
    if (this.$room) {
      this.form.patchValue({
        room_number: this.$room.roomNumber,
        type: this.$room.roomType
      })
    }
  }

  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      if (this.$room) {
        this.roomService.updateRoomWithId(this.$room.id, formData).subscribe(
          () => {
            this.router.navigate(['/rooms'])
          });
      } else {
        this.roomService.createRoom(formData).subscribe(() =>
          this.router.navigate(['/rooms'])
        );
      }

    } else {
      console.error('Form is invalid');
    }
  }

}
