import { Repositories } from "./Repositories";
import { Repository } from "./Repository";
import { RepositoryStatusState } from "./RepositoryStatus";

export interface AppStateInterface{
  repositorystatus: RepositoryStatusState,
  repositories: Repositories,
  singlerepo: Repository
}