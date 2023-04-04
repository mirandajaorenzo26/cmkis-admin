import { Faculty } from './../models/faculty';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private apiUrl = 'http://localhost:'
  constructor(private http: HttpClient) { }

  addFaculty(faculty: Faculty){

  }

}
