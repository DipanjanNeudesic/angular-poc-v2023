import { createAction, props } from '@ngrx/store';
import { repositoryStateActionTypes } from 'src/app/shared/constants/enums/repositoryStateActionTypes.enum';

export const getSearchTerm = createAction(
  repositoryStateActionTypes.GETSEARCHTERM,
  props<{ searchterm: string }>()
);

export const getTotalCount = createAction(
  repositoryStateActionTypes.GETTOTALCOUNT,
  props<{ totalCount: number }>()
);
