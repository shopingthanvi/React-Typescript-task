import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Items,Item} from "./../modal"
const initialState: Items = {
  items: []
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Item>) {
      state.items.push(action.payload); 
    },
  },
})
export const { add } = itemSlice.actions

export default itemSlice.reducer
