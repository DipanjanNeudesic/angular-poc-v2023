import { RepositoriesState } from "src/app/shared/interfaces/store/RepostoryActiontypes";


const initialRepositoryState: RepositoriesState = {
    pending: false,
    repositories:{
      total_count:0,
      incomplete_results:false,
      items:[]
    },
    error: null,
    repository:{}
  };

  export default initialRepositoryState;