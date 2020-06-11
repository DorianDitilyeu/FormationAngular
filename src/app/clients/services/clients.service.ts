import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/clients';
import { environment } from 'src/environments/environment'
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map((datas) => {
        return datas.map((obj) => {
          return new Client(obj);
        })
      })
    );
   }

   get collection(): Observable<Client[]> {
     return this.pCollection;
   }

   set collection(new_collection: Observable<Client[]>) {
     this.pCollection = new_collection;
   }

   // update item
   public updateItem(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
   }

  // Change State Client
   public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client({...item});
    obj.state = state;
    return this.updateItem(obj);
   }

   // add item
   public add(item: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}clients/`, item);
  }

   // delete item

}
