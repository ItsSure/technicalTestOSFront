import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfesoresService {
  private readonly baseUrl = 'http://localhost:8080/api';
  constructor(private readonly http: HttpClient) {}

  getProfesores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/profesores`);
  }

  createProfesor(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/profesores`, data);
  }

  deleteProfesor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/profesores/${id}`);
  }
}
