import { Component, OnInit } from '@angular/core';
import { Housing } from './models/housing.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FindQuare-frontend';

  ngOnInit(): void {
    
  }
}
