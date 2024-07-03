import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService } from '../../data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgIf],
  providers:[DataService],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {
  inputValue: string = '';
  zeroCeliusInKelvin = 273.15;
  weatherData:any;

  constructor(private dataService: DataService) {}

  handleSearch() {
    if(this.inputValue) {
      this.dataService.getWeatherData(this.inputValue).subscribe(
        data => {
          this.weatherData = data;
          console.log(data);
          this.inputValue = '';
        },
        error => {
          console.log(`Something went wrong while searching the requested data.`);
        }
      )
    }
  }

  getTemperatureCelsius() {
    return (this.weatherData?.main?.temp - this.zeroCeliusInKelvin).toFixed(1);
  }
}
