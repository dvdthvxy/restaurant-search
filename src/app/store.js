import { configureStore } from '@reduxjs/toolkit';
import searchFieldReducer from './slices/searchFieldSlice'
import restaurantDataReducer from './slices/restaurantDataSlice'

export default configureStore({
  reducer: {
    searchField: searchFieldReducer,
    restaurantData: restaurantDataReducer,
  },
});
