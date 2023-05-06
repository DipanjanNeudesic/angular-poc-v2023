import { repositoryActionTypes } from "../../constants/enums/repositoryActionTypes.enum";
import { ApiRequest } from "../ApiRequest";
import { SingleRepositoryApiRequest } from "../SingleRepositoryApiRequest";
import { Repositories } from "./Repositories";
import { Repository } from "./Repository";



export interface RepositoriesState {
  pending: boolean;
  repositories: Repositories | Object;
  error: string | null,
  repository:Repository
}

export interface FetchRepositoriesSuccessPayload {
  repositories: Repositories;
}

export interface FetchRepositoriesFailurePayload {
  message: string;
  documentation_url:string
}

export interface FetchRepositoriesRequest {
  type: typeof repositoryActionTypes.FETCH_GET_REQUEST;
  payload:ApiRequest
}

export type FetchRepositoriesSuccess = {
  type: typeof repositoryActionTypes.FETCH_GET_SUCCESS;
  payload: FetchRepositoriesSuccessPayload;
};

export type FetchRepositoriesFailure = {
  type: typeof repositoryActionTypes.FETCH_GET_FAILURE;
  payload: FetchRepositoriesFailurePayload;
};



export interface FetchSingleRepositorySuccessPayload {
  repository: Repository;
}

export interface FetchSingleRepositoryFailurePayload {
  message: string;
  documentation_url:string
}

export interface FetchSingleRepositoryRequest {
  type: typeof repositoryActionTypes.FETCH_SINGLE_REPOSITORY_REQUEST;
  payload:SingleRepositoryApiRequest
}

export type FetchSingleRepositorySuccess = {
  type: typeof repositoryActionTypes.FETCH_SINGLE_REPOSITORY_SUCCESS;
  payload: FetchSingleRepositorySuccessPayload;
};

export type FetchSingleRepositoryFailure = {
  type: typeof repositoryActionTypes.FETCH_SINGLE_REPOSITORY_FAILURE;
  payload: FetchSingleRepositoryFailurePayload;
};

export interface SortPayload{
  sortcriteria:string
}


export type RepositoriesActions =
  | FetchRepositoriesRequest
  | FetchRepositoriesSuccess
  | FetchRepositoriesFailure
  | FetchSingleRepositoryRequest
  | FetchSingleRepositorySuccess
  | FetchSingleRepositoryFailure
