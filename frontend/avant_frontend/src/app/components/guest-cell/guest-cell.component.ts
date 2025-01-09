import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';


@Component({
  selector: 'app-guest-cell',
  imports: [TuiAvatar, TuiCell, TuiButton],
  templateUrl: './guest-cell.component.html',
  styleUrl: './guest-cell.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestCellComponent {
  guest = input({ first_name: 'first name', email: 'email here' });
  myCounter = signal("ON")

  OnEditButtonClicked(event: MouseEvent) {
    this.myCounter() == "ON" ? this.myCounter.set("OFF") : this.myCounter.set("ON");
  }
}
