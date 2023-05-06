import { createAction, props } from '@ngrx/store';
import { repositoryActionTypes } from 'src/app/shared/constants/enums/repositoryActionTypes.enum';
import { ApiRequest } from 'src/app/shared/interfaces/ApiRequest';
import { SingleRepositoryApiRequest } from 'src/app/shared/interfaces/SingleRepositoryApiRequest';
import {
  FetchRepositoriesFailurePayload,
  FetchRepositoriesSuccessPayload,
  FetchSingleRepositoryFailurePayload,
  FetchSingleRepositorySuccessPayload,
  SortPayload,
} from 'src/app/shared/interfaces/store/RepostoryActiontypes';

export const fetchRepositoriesRequest = createAction(
  repositoryActionTypes.FETCH_GET_REQUEST,
  props<ApiRequest>()
);

export const fetchRepositoriesSuccess = createAction(
  repositoryActionTypes.FETCH_GET_SUCCESS,
  props<FetchRepositoriesSuccessPayload>()
);

export const fetchRepositoriesFailure = createAction(
  repositoryActionTypes.FETCH_GET_FAILURE,
  props<FetchRepositoriesFailurePayload>()
);

export const fetchSingleRepositoryRequest = createAction(
  repositoryActionTypes.FETCH_SINGLE_REPOSITORY_REQUEST,
  props<SingleRepositoryApiRequest>()
);

export const fetchSingleRepositorySuccess = createAction(
  repositoryActionTypes.FETCH_SINGLE_REPOSITORY_SUCCESS,
  props<FetchSingleRepositorySuccessPayload>()
);

export const fetchSingleRepositoryFailure = createAction(
  repositoryActionTypes.FETCH_SINGLE_REPOSITORY_FAILURE,
  props<FetchSingleRepositoryFailurePayload>()
);

export const SortRepositoriesByString=createAction(
  repositoryActionTypes.SORT_REPOSITORIES_BY_NUMBER,
  props<SortPayload>()
)

export const SortRepositoriesByNumber=createAction(
  repositoryActionTypes.SORT_REPOSITORIES_BY_NUMBER,
  props<SortPayload>()
)