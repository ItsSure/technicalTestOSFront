import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private readonly baseUrl = 'http://localhost:8080/api';

  constructor(private readonly http: HttpClient) {}

  getAlumnos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/alumnos`);
  }

  createAlumno(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/alumnos`, data);
  }

  deleteAlumno(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/alumnos/${id}`);
  }
}
