import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/appconfig/appconfig.service';
import { AppStateInterface } from 'src/app/shared/interfaces/store/AppStateInterface';
import * as RepositoryStateActions from 'src/app/store/actions/RepositoryStateAction';
import * as RepositoryActions from 'src/app/store/actions/RepositoryActions';
import { Router } from '@angular/router';
import { BasecomponentComponent } from 'src/app/shared/components/basecomponent/basecomponent.component';

@Component({
  selector: 'ag-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SearchbarComponent implements OnInit {
  searchTerm!: string;
  constructor(private store: Store<AppStateInterface>, private route: Router) {}

  ngOnInit(): void {}

  handlechange(): void {
    this.store.dispatch(
      RepositoryStateActions.getSearchTerm({ searchterm: this.searchTerm })
    );

    this.store.dispatch(
      RepositoryActions.fetchRepositoriesRequest({
        pageNumber: 1,
        itemsPerPage: 5,
      })
    );

    this.route.navigateByUrl('/results');
  }
}
