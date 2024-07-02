import { Component } from '@angular/core';
import { MainContainerComponent } from '../main-container/main-container.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [MainContainerComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
