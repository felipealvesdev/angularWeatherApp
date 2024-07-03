import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  date = new Date;
  private timer: any;

  ngOnInit(): void {
    this.timer = setInterval(()=> {
      this.date = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
   if(this.timer) {
    clearInterval(this.timer);
   }
  }

  getHoursAndMinutes() {
    return `${this.getDateHours()}:${this.getDateMinutes()}`;
  }

  getDateHours() {
    return this.date.getHours();
  }
  getDateMinutes() {
    return this.date.getMinutes();
  }
}
