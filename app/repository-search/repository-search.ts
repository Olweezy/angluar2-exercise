import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { ApiRequest } from '../helpers/api-requests'

@Component({
  selector: 'my-app',
  templateUrl: '/app/repository-search/repository-search.html',
  styleUrls: ['/app/repository-search/repository-search.css']
})

export class RepositorySearch {
  repos: Observable<any>
  noResults: Boolean = false

  constructor(private apiRequest: ApiRequest) {
  }

  searchForUsersRepos(username: string) {
       this.apiRequest.getReposForUser(username)
          .subscribe(
          data => {this.repos = data, 
                   this.noResults = false},
          err => {this.repos = null,
                  this.noResults = true},
          () => {console.log('done')}
      )}
  }

