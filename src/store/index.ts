import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface Person {
    // properties
}

interface InviteeState {
  people: any
}
const initialState: any = {
    people :[]
  }

export const counterSlice = createSlice({
 name: 'counteryou',
 initialState,
 reducers: {
    add(state, action: PayloadAction<Person>) {
        state.people.push(action.payload);
    },
 },
})
export const { add } = counterSlice.actions

export default counterSlice.reducer
