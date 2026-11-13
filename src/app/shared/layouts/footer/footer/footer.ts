import { Component } from '@angular/core';
import { APP_ICONS } from '@app/core/icons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {

//Implementing icons 
icons = APP_ICONS;

}
