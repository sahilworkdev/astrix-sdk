import { configureStore } from '@reduxjs/toolkit'
import selectedEventReducer from './reducers/selectedEventSlice'

export const store = configureStore({
  reducer: {
    selectedEvent:selectedEventReducer
  },
})
