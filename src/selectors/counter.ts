import { createSelector } from 'reselect';

const getCounterState = (state) => state.counter

export const getCounter = createSelector( getCounterState, (state) => {
    return state.counter;
})  