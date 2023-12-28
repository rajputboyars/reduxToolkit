import {createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: "Userslice",
    initialState: [],
    reducers: {
        addUser(state,action){
            state.push(action.payload)
            // console.log(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        deleteAllUser(state,action){
            return []
        }
    }
})


export default UserSlice.reducer
export const {addUser,removeUser,deleteAllUser} = UserSlice.actions