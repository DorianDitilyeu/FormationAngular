import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/orders';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((datas) => {
        return datas.map((obj) => {
          return new Order(obj);
        })
      })
    );
  }

   get collection(): Observable<Order[]> {
     return this.pCollection;
   }

   set collection(new_collection: Observable<Order[]>) {
     this.pCollection = new_collection;
   }

   // update item

   // add item

   // delete item

   // change StateOrder
}
