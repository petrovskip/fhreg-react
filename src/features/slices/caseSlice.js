import { createSlice } from '@reduxjs/toolkit'

export const layoutSlice = createSlice({
    name: 'layout',
  
  
  
    initialState: {
        currentCheckupId: 0
    },

    reducers: {
      set: (state, {type, ...rest}) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        return { ...state, ...rest }
      }
    }
  })

  // Action creators are generated for each case reducer function
export const { set } = layoutSlice.actions

export default layoutSlice.reducer