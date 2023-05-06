import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/appconfig/appconfig.service';
import { AppStateInterface } from '../interfaces/store/AppStateInterface';
import { RepositoryStatusSelector } from 'src/app/store/selectors/rootselector';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  searchTerm!: string

  constructor(private http: HttpClient, private store: Store<AppStateInterface>) {
    store.pipe(select(RepositoryStatusSelector)).subscribe((data: any)=>{
      this.searchTerm=data.searchterm
    })
   }

  getRepositories(pageNumber: number, itemsPerPage: number){
    return this.http.get(`${AppConfigService.get("fetchRepositoriesUrl")}/search/repositories?q=${this.searchTerm}&page=${pageNumber}&per_page=${itemsPerPage}`)
  }

  getSingleRepository(owner: string , repo:string){
    return this.http.get(`${AppConfigService.get('fetchRepositoriesUrl')}/repos/${owner}/${repo}`)
  }
}
