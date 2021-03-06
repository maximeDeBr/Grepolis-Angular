import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../user/authentication.service';
import {BehaviorSubject} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit
{

  public server: string;
  private _currentUser = this._authService.user$;
  public searchPlayerForm: FormGroup;

  constructor(private http: HttpClient, private aRoute: ActivatedRoute, private _authService: AuthenticationService, private router: Router)
  {
  }

  ngOnInit()
  {
    this.aRoute.params.subscribe(params =>
    {
      (params['server'] ? this.server = params['server'] : this.server = 'nl');

    });
    this.fetchServerStats();
    this.searchPlayerForm = new FormGroup({
      searchPlayerInput: new FormControl()
    });
  }

  private fetchServerStats()
  {
    const serverStats = document.getElementById('serverStatsContent');
    const spinner = document.getElementById('serverStatsContentSpinner');
    serverStats.style.display = 'none';
    spinner.style.display = 'block';
    serverStats.innerHTML = '';
    let countWorlds = document.createElement('span');
    this.http.get(`https://grepolistoolsapi20190524025011.azurewebsites.net/api/Worlds/count/${this.server}`).toPromise()
      .then((res) =>
      {
        if (!res)
        {
          this.router.navigate(['404']);
        }
        countWorlds.innerText = `Amount of worlds active:   ${res}`;
      });
    serverStats.appendChild(countWorlds);
    let countPlayers = document.createElement('span');
    this.http.get(`https://grepolistoolsapi20190524025011.azurewebsites.net/api/Players/count/${this.server}`).toPromise()
      .then((res) =>
      {
        countPlayers.innerText = `Amount of players:   ${res}`;
      });
    serverStats.appendChild(countPlayers);
    let countAlliances = document.createElement('span');
    this.http.get(`https://grepolistoolsapi20190524025011.azurewebsites.net/api/Alliances/count/${this.server}`).toPromise()
      .then((res) =>
      {
        countAlliances.innerText = `Amount of Alliances:   ${res}`;
      });
    serverStats.appendChild(countAlliances);
    let countTowns = document.createElement('span');
    this.http.get(`https://grepolistoolsapi20190524025011.azurewebsites.net/api/Towns/count/${this.server}`).toPromise()
      .then((res) =>
      {
        countTowns.innerText = `Amount of Towns:  ${res}`;
      }).then(() =>
    {
      serverStats.style.display = 'flex';
      spinner.style.display = 'none';
    });
    serverStats.appendChild(countTowns);

  }


  get currentUser(): BehaviorSubject<string>
  {
    return this._currentUser;
  }

  searchPlayer()
  {
    this.router.navigate(['search', this.searchPlayerForm.value.searchPlayerInput]);
  }
}
