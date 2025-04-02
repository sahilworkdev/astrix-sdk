import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
  selectedEventDetail:[]
}

export const selectedEventSlice = createSlice({
  name: 'selectedEvent',
  initialState,
  reducers: {
    setSelectedEvent: (state,action) => {
      state.selectedEventDetail = action.payload
      console.log(`selected event`, action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedEvent } = selectedEventSlice.actions

export default selectedEventSlice.reducer