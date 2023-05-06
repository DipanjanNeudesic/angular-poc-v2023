import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/interfaces/store/AppStateInterface';

export const selectFeature = (state: AppStateInterface) => state;

export const RepositoryStatusSelector = createSelector(
  selectFeature,
  (state: any) => {
     return state.repositorystate
  });

export const RepositorySelector = createSelector(
  selectFeature,
  (state) => state.repositories
);

export const SingleRepositorySelector=createSelector(
  selectFeature,
  (state)=>state.singlerepo
)
