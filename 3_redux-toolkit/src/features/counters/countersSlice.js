
import {createSlice} from "@reduxjs/toolkit"

const allCounters = [
  { id: 1, value: 0 },
  { id: 2, value: 5 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
  { id: 5, value: 2 },
  { id: 6, value: 0 },
  { id: 7, value: 0 },
  { id: 8, value: 0 },
]

const counterSlice = createSlice({
  name: "counters",
  initialState: allCounters,
  reducers: {
    plus: (state, action) =>{
      const counterIndex = state.findIndex( 
        (counter) => (counter.id ===action.payload)
      )
      state[counterIndex].value++;
    },
    minus: (state, action) =>{
      const counterIndex = state.findIndex( 
        (counter) => (counter.id ===action.payload)
      )
      state[counterIndex].value--;
    },
  },
})

export default counterSlice.reducer
export const {plus, minus} = counterSlice.actions