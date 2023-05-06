import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { BasecomponentComponent } from 'src/app/shared/components/basecomponent/basecomponent.component';
import { AppStateInterface } from 'src/app/shared/interfaces/store/AppStateInterface';
import { Repository } from 'src/app/shared/interfaces/store/Repository';
import { fetchSingleRepositoryRequest } from 'src/app/store/actions/RepositoryActions';
import { RepositorySelector } from 'src/app/store/selectors/rootselector';

@Component({
  selector: 'ag-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent extends BasecomponentComponent implements OnInit {
  repoinfo!: Repository;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppStateInterface>
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe((params) => {
        // this.owner = params.get('owner') as string;
        // this.reponame = params.get('reponame') as string;
        this.store.dispatch(
          fetchSingleRepositoryRequest({
            owner: params.get('owner') as string,
            repo: params.get('reponame') as string,
          })
        );
      })
    );

    this.subscriptions.push(
      this.store.pipe(select(RepositorySelector)).subscribe((data: any) => {
        this.repoinfo = data.repository;
      })
    );
  }
}
