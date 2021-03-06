import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorldDataService {

  public loadingError$ = new Subject<string>();

  constructor(private http:HttpClient) { }

  getWorlds$(server):Promise<Object>
  {

    return this.http.get(`https://grepolistoolsapi20190524025011.azurewebsites.net/api/worlds/${server}`).toPromise();

  }


}
