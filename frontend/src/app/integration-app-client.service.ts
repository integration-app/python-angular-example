import { Injectable } from '@angular/core';
import { IntegrationAppClient } from '@integration-app/sdk'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntegrationAppClientService {
  
  getClient() {
    return this.http.get<string>("http://localhost:8080/integration-token")
    .pipe(map((token: any) =>new IntegrationAppClient({
      token: token,
    })));
  }

  constructor(private http: HttpClient) {}
}
