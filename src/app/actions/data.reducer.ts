import { createReducer, on } from '@ngrx/store';
import {increment, reset, decrement} from './data.action';

const initialState = 0;

const _dataReducer = createReducer(
    initialState,
    on(increment, (state:number) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
  );
  
export function counterReducer (state:number, action) {
    return _dataReducer(state, action)
}

