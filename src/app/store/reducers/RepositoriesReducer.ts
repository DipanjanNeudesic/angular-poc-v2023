import { createReducer, on } from '@ngrx/store';
import initialRepositoryState from 'src/app/store/initialstate/RepositoriesState';
import {
  SortRepositoriesByNumber,
  SortRepositoriesByString,
  fetchRepositoriesFailure,
  fetchRepositoriesRequest,
  fetchRepositoriesSuccess,
  fetchSingleRepositoryFailure,
  fetchSingleRepositoryRequest,
  fetchSingleRepositorySuccess,
} from '../actions/RepositoryActions';
import { Repositories } from 'src/app/shared/interfaces/store/Repositories';

export const RepositoryReducer = createReducer(
  initialRepositoryState,
  on(fetchRepositoriesRequest, (state, action) => ({
    ...state,
    pending: true,
  })),
  on(fetchRepositoriesSuccess, (state, action) => ({
    ...state,
    pending: false,
    repositories: action.repositories,
    error: null,
  })),
  on(fetchRepositoriesFailure, (state, action) => ({
    ...state,
    pending: false,
    repositories: {},
    error: action.message,
  })),
  on(fetchSingleRepositoryRequest, (state, action) => ({
    ...state,
    pending: true,
  })),
  on(fetchSingleRepositorySuccess, (state, action) => ({
    ...state,
    repository: action.repository,
    error: null,
  })),
  on(fetchSingleRepositoryFailure, (state, action) => ({
    ...state,
    repository: {},
    error: action.message,
  })),
  on(SortRepositoriesByString, (state,action)=>({
    ...state,
    repositories: {
      ...state.repositories,
      items: [...(state.repositories as Repositories).items].sort((a, b) => {
        if ((a as any)[action.sortcriteria] > (b as any)[action.sortcriteria]) {
          return 1;
        } else {
          return -1;
        }
      })
    }
  })),
  on(SortRepositoriesByNumber, (state,action)=>({
    ...state,
    repositories: {
      ...state.repositories,
      items: [...(state.repositories as Repositories).items].sort((a, b) => {
        if (!a.created_at || !b.created_at) return -1;
        if (
          new Date((a as any)[action.sortcriteria]) > new Date((b as any)[action.sortcriteria])
        ) {
          return 1;
        } else {
          return -1;
        }
      })
    }
  }))
);
