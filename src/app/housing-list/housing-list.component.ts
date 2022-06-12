// List of all housings

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Housing } from '../models/housing.model';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  constructor(private housingService: HousingService) { }
  housings$!: Observable<Housing[]>;
  ngOnInit(): void {
    this.housings$ = this.housingService.getAllHousings();
  }

}
