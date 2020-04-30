import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchFieldReducer from './slices/searchFieldSlice'
import restaurantDataReducer from './slices/restaurantDataSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    searchField: searchFieldReducer,
    restaurantData: restaurantDataReducer,
  },
});
