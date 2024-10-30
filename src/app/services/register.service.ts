import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  BACKEND_BASE = "http://localhost:8080/api/";

  constructor(private http:HttpClient) { }

  // getTransport(): Observable<Transport[]> {
  //   return this.http.get<Transport[]>(this.BACKAND_BASE+"getTransport");
  // }

  // getSmestaj(): Observable<Smestaj[]> {
  //   return this.http.get<Smestaj[]>(this.BACKAND_BASE+"getSmestaj");
  // }

  // addRezervacija(username: string, transport: string, smestaj: string, dest: string, cena): Observable<any> {
  //     let params=new HttpParams()
  //     .set("username", username)
  //     .set("transport", transport)
  //     .set("smestaj", smestaj)
  //     .set("dest", dest)
  //     .set("cena", cena)

  //     return this.http.post(this.BACKAND_BASE+"saveRezervacija", params, { 
  //     headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  //   })
  // }

  // getRezervacijeKorisnik(username: string): Observable<Rezervacija[]> {
  //   let params=new HttpParams()
  //   .set("username", username);

  //   return this.http.post<Rezervacija[]>(this.BACKAND_BASE + "rezervacijeKorisnika", username)
  // }
}
