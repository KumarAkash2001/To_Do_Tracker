import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TASK } from 'src/app/ModelClass/Task';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class TomorrowTaskByPriorityService {

  private baseUrl = 'http://localhost:9000/api/v3';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getTomorrowTasksByPriority(): Observable<TASK[]> {
    const authToken = this.tokenService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    const url = `${this.baseUrl}/tomorrowTasksByPriority`;

    return this.http.get<TASK[]>(url, { headers });
  }
}