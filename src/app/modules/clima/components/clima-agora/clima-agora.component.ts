import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { Clima } from '../../models/clima.model';

@Component({
  selector: 'app-clima-agora',
  templateUrl: './clima-agora.component.html',
  styleUrls: ['./clima-agora.component.css']
})
export class ClimaAgoraComponent implements OnInit {

  cidade: string;
  detalhesClima: Clima = new Clima();
  mostrarClimaAgora: boolean = false;

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
  }

  buscarClimaAgora() {
    this.climaService.obterClimaAgora(this.cidade).subscribe(
      res => {
        if (res.weather[0].icon == '01d') {
          this.detalhesClima.icone = 'clear-day'
        } else if (res.weather[0].icon == '02d') {
          this.detalhesClima.icone = 'partly-cloudy-day'
        } else if (res.weather[0].icon == '03d') {
          this.detalhesClima.icone = 'cloudy'
        } else if (res.weather[0].icon == '04d') {
          this.detalhesClima.icone = 'cloudy'
        } else if (res.weather[0].icon == '09d') {
          this.detalhesClima.icone = 'partly-cloudy-day-rain'
        } else if (res.weather[0].icon == '10d') {
          this.detalhesClima.icone = 'rain'
        } else if (res.weather[0].icon == '11d') {
          this.detalhesClima.icone = 'thunderstorms'
        } else if (res.weather[0].icon == '13d') {
          this.detalhesClima.icone = 'snow'
        } else if (res.weather[0].icon == '50d') {
          this.detalhesClima.icone = 'mist'
        } else if (res.weather[0].icon == '01n') {
          this.detalhesClima.icone = 'clear-night'
        } else if (res.weather[0].icon == '02n') {
          this.detalhesClima.icone = 'partly-cloudy-night'
        } else if (res.weather[0].icon == '03n') {
          this.detalhesClima.icone = 'cloudy'
        } else if (res.weather[0].icon == '04n') {
          this.detalhesClima.icone = 'cloudy'
        } else if (res.weather[0].icon == '09n') {
          this.detalhesClima.icone = 'partly-cloudy-night-rain'
        } else if (res.weather[0].icon == '10n') {
          this.detalhesClima.icone = 'rain'
        } else if (res.weather[0].icon == '11n') {
          this.detalhesClima.icone = 'thunderstorms'
        } else if (res.weather[0].icon == '13n') {
          this.detalhesClima.icone = 'snow'
        } else if (res.weather[0].icon == '50n') {
          this.detalhesClima.icone = 'mist'
        };

        this.detalhesClima.cidade = res.name;
        this.detalhesClima.descricao = res.weather[0].description;
        this.detalhesClima.temperaturaAgora = res.main.temp;
        this.detalhesClima.temperaturaMin = res.main.temp_min;
        this.detalhesClima.temperaturaMax = res.main.temp_max;
        this.detalhesClima.sensacaoTermica = res.main.feels_like;
        this.detalhesClima.lat = res.coord.lat;
        this.detalhesClima.lon = res.coord.lon;

        this.mostrarClimaAgora = true;
      }
    )
  }

}
