import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Housing } from '../models/housing.model';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {
  
  @Input() housing!: Housing;
  
  constructor(private housingService: HousingService, private router: Router) {

  }
  
  ngOnInit(): void {
    
  }

  onViewHousing() {
    this.router.navigateByUrl(`housing/${this.housing.id}`);
  }
}
