import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
  name:"yuvaraj"
}

export const selectedEventSlice = createSlice({
  name: 'selectedEvent',
  initialState,
  reducers: {
    setSelectedEvent: (state,action) => {
      state = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedEvent } = selectedEventSlice.actions

export default selectedEventSlice.reducer