import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { IGuest } from '../../models/guest';


@Component({
  selector: 'app-guest-cell',
  imports: [TuiAvatar, TuiCell, TuiButton],
  templateUrl: './guest-cell.component.html',
  styleUrl: './guest-cell.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestCellComponent {
  guest = input<IGuest>({
    id: 'test',
    firstName: 'test',
    lastName: 'test',
    email: 'test',
    phone_numbers: ['test']
  });
  myCounter = signal("ON")

  OnEditButtonClicked(event: MouseEvent) {
    this.myCounter() == "ON" ? this.myCounter.set("OFF") : this.myCounter.set("ON");
  }
}
