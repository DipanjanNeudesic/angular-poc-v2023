import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, concatMap } from 'rxjs';
import { BasecomponentComponent } from 'src/app/shared/components/basecomponent/basecomponent.component';
import { AppStateInterface } from 'src/app/shared/interfaces/store/AppStateInterface';
import { Repositories } from 'src/app/shared/interfaces/store/Repositories';
import { Repository } from 'src/app/shared/interfaces/store/Repository';
import { SortRepositoriesByNumber, SortRepositoriesByString, fetchRepositoriesRequest } from 'src/app/store/actions/RepositoryActions';
import { getTotalCount } from 'src/app/store/actions/RepositoryStateAction';
import {
  RepositorySelector,
  RepositoryStatusSelector,
} from 'src/app/store/selectors/rootselector';

@Component({
  selector: 'ag-collapsibletable',
  templateUrl: './collapsibletable.component.html',
  styleUrls: ['./collapsibletable.component.scss'],
})
export class CollapsibletableComponent
  extends BasecomponentComponent
  implements OnInit
{
  table!: Repository[];

  pageNumber: number = 0;

  pageSize: number = 5;

  totalitems?: number;

  totalcount: number = 0;

  displayedColumns: string[] = [
    'name',
    'description',
    'owner',
    'created_at',
    'updated_at',
    'View Info',
  ];

  constructor(private store: Store<AppStateInterface>, private route: Router) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.pipe(select(RepositorySelector)).subscribe((data: any) => {
        this.table = data.repositories.items;
        if (this.pageNumber === 1) {
          this.store.dispatch(getTotalCount({ totalCount: this.table.length }));
        }
        this.totalitems = Math.ceil(
          data.repositories.total_count / this.pageSize
        );
      })
    );

    this.subscriptions.push(
      this.store.pipe(select(RepositoryStatusSelector)).subscribe((data) => {
        this.totalcount = data.totalcount;
      })
    );
  }

  handlePageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.store.dispatch(
      fetchRepositoriesRequest({
        pageNumber: this.pageNumber + 1,
        itemsPerPage: this.pageSize,
      })
    );

    this.totalitems = Math.ceil(this.totalcount / this.pageSize);
  }

  handleButtonClick(row: Repository) {
    this.route.navigateByUrl(`/singlerepo/${row.owner?.login}/${row.name}`);
  }

  // sortData(sort: Sort) {
  //   console.log(sort.active);
  //   if (sort.active === 'name' || sort.active === 'description') {
  //     this.table.sort((a, b) => {
  //       if ((a as any)[sort.active] > (b as any)[sort.active]) {
  //         return 1;
  //       } else {
  //         return -1;
  //       }
  //     });
  //   } else if (sort.active === 'owner') {
  //     this.table.sort((a, b) => {
  //       if ((a as any)['owner']['login'] > (b as any)['owner']['login']) {
  //         return 1;
  //       } else {
  //         return -1;
  //       }
  //     });
  //   } else {
  //     this.table.sort((a, b) => {
  //       if (!a.created_at || !b.created_at) return -1;
  //       if (
  //         new Date((a as any)[sort.active]) > new Date((b as any)[sort.active])
  //       ) {
  //         return 1;
  //       } else {
  //         return -1;
  //       }
  //     });
  //   }
  // }


  sortData(sort:Sort){
    if (sort.active === 'name' || sort.active === 'description') {
      this.store.dispatch(SortRepositoriesByString({
        sortcriteria: sort.active
      }))
    }

    else if(sort.active==='created_at' || sort.active==='updated_at'){
      this.store.dispatch(SortRepositoriesByNumber({
        sortcriteria:sort.active
      }))
    }
  }
}
