import { createSlice } from '@reduxjs/toolkit'
import { arryPerson } from '../../data/dummyData'


const initialState = {
    users: arryPerson,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        usersSearch:(state,action) =>{
            state.users = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { usersSearch } = searchSlice.actions

export const selectsearch = (state) => state.search;

export default searchSlice.reducer