import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Housing } from '../models/housing.model';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-housing-detail',
  templateUrl: './housing-detail.component.html',
  styleUrls: ['./housing-detail.component.css']
})
export class HousingDetailComponent implements OnInit {

  housing$!: Observable<Housing>;

  constructor(private housingService: HousingService, private route: ActivatedRoute) { }
    

    ngOnInit(): void {
      const housingId = +this.route.snapshot.params['id'];
      this.housing$ = this.housingService.getHousingById(housingId);
    }

}
