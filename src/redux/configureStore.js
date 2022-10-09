import { configureStore } from '@reduxjs/toolkit';
import rocketStore from './rockets/rockets';
import missionsReducer from './missions/missions';
import dragonsReducer from './dragons/dragons';

const store = configureStore({
  reducer: {
    storeSlice: rocketStore,
    missions: missionsReducer,
    dragonSlice: dragonsReducer,
  },
});

export default store;
