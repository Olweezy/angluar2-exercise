import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiRequest {
  constructor(private http: Http) {}

  getUser(username: string) {
    return this.makeRequest(`users/${username}`);
  }

  getReposForUser(username: string) {
    return this.makeRequest(`users/${username}/repos`);
  }

  getRepoForUser(username: string, repositoryName: string) {
    return this.makeRequest(`repos/${username}/${repositoryName}`);
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `https://api.github.com/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}