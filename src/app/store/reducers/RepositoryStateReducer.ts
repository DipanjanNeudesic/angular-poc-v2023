import { createReducer, on } from '@ngrx/store';
import initialRepositoryStatus from '../initialstate/RepositoryStatus';
import { repositoryStateActionTypes } from 'src/app/shared/constants/enums/repositoryStateActionTypes.enum';
import { RepositoryStatusState } from 'src/app/shared/interfaces/store/RepositoryStatus';
import { getSearchTerm, getTotalCount } from '../actions/RepositoryStateAction';

export const RepositoryStateReducer = createReducer(
  initialRepositoryStatus,
  on(getSearchTerm, (state, action) => ({
    ...state,
    searchterm: action.searchterm,
  })),
  on(getTotalCount, (state, action) => ({
    ...state,
    totalcount: action.totalCount,
  }))
);
