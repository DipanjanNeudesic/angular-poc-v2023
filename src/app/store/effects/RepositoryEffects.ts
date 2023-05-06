import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import * as RepositoryActions from 'src/app/store/actions/RepositoryActions';

@Injectable({
  providedIn: 'root',
})
export class RepositoryEffects {
  constructor(
    private actions$: Actions,
    private repositoryService: RepositoryService
  ) {}

  fetchRepositories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RepositoryActions.fetchRepositoriesRequest),
      mergeMap((action) => {
        return this.repositoryService.getRepositories(action.pageNumber,action.itemsPerPage).pipe(
          map((repositories: any) =>
            RepositoryActions.fetchRepositoriesSuccess({ repositories })
          ),
          catchError((error) =>
            of(
              RepositoryActions.fetchRepositoriesFailure({
                message: error.message,
                documentation_url: error.documentation_url,
              })
            )
          )
        );
      })
    );
  });


  fetchSingleRepository$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RepositoryActions.fetchSingleRepositoryRequest),
      mergeMap((action) => {
        return this.repositoryService.getSingleRepository(action.owner, action.repo).pipe(
          map((repository: any) =>
            RepositoryActions.fetchSingleRepositorySuccess({repository})
          ),
          catchError((error) =>
            of(
              RepositoryActions.fetchSingleRepositoryFailure({
                message: error.message,
                documentation_url: error.documentation_url,
              })
            )
          )
        );
      })
    );
  });
}
