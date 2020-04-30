import { createSlice } from '@reduxjs/toolkit'

export const restaurantDataSlice = createSlice({
    name: 'restaurantData',
    initialState: {
        data: []
    },
    reducers: {
        clearData: state => {
            state.data = []
        },
        setData: (state, action) => {
            state.data = [...state.data, ...action.payload]
        }
    }
})

export const { setData, clearData } = restaurantDataSlice.actions;


export default restaurantDataSlice.reducer;