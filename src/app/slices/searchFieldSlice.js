import { createSlice } from '@reduxjs/toolkit'

export const searchFieldSlice = createSlice({
    name: 'searchField',
    initialState: { 
        value: '',
    },
    reducers: {
        updateSearchField: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateSearchField } = searchFieldSlice.actions;


export default searchFieldSlice.reducer;