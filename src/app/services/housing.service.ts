import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Housing } from '../models/housing.model';

const httpOptions = {
  Headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  
  apiUrl: string = 'http://localhost:9000/findquaire/api';


  constructor(private http: HttpClient) { }

  getAllHousings(): Observable<Housing[]> {
    return this.http.get<Housing[]>(this.apiUrl+'/housings');
  }

  getHousingById(id: number): Observable<Housing> {
    return this.http.get<Housing>(this.apiUrl+`/housing/${id}`)
  }



  housings: Housing[]= [
      {
        id: 1,
        description: 'Destcription',
        price: 1253.244,
        images: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        publication: new Date()

      },
      {
        id: 2,
        description: 'Destcription',
        price: 1253.244,
        images: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        publication: new Date()

      },
      {
        id: 1,
        description: 'Destcription',
        price: 1253.244,
        images: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        publication: new Date()

      }
    ];
/*
    getAllHousings(): Housing[] {
      return this.housings;
    }

    getHousingById(housingId: number):  Housing {
      const housing = this.housings.find(housing => housing.id = housingId);
      if(!housing) {
        throw new Error('Housing not found!');
      } else {
        return housing;
      }
    }
*/
}
