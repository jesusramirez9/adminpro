import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions() :any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  //./assets/css/colors/pupple-dark.css
  

  constructor(private SettingsService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
