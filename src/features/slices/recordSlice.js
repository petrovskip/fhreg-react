import { createSlice } from '@reduxjs/toolkit'

const checkupone = new Checkup(
    1,  new Date(2018, 11, 24),
    new Profile("John" , "Smith", new Date(1969, 10, 22), "Male", "Macedonian", "182", "85", "23", "1.05"),
    new History(false, false, false, true, false, false),
    new Risk(true, true, false, false, false, 15),
    new Therapy("StatinType", "10mm", "None", null, "None", null, "Antibiotics", "5mm", "None", null),
    new Score(true, false, false, false, 70.2),      
    );
    
    const checkuptwo = new Checkup(
      2,  new Date(2016, 11, 24),
      new Profile("Jane" , "Doe", new Date(1974, 11, 14), "Female", "Macedonian", "174", "68", "20", "0.99"),
      new History(false, false, false, true, false, false),
      new Risk(false, false, false, false, false, 1),
      new Therapy("None", null, "None", null, "None", null, "Antibiotics", "5mm", "None", null),
      new Score(true, false, false, false, 13.4),      
      );

export const recordsSlice = createSlice({
  name: 'records',



  initialState: {
    checkups : [
        checkupone, checkuptwo
      ]
  },
  reducers: {
    insertItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      insertItem(state.checkups, action)
    },
    removeItem: (state, action) => {
      removeItem(state.checkups, action)
    },
    updateItem: (state, action) => {
      updateObjectInArray(state.checkups, action)
    }
  }
})

// Action creators are generated for each case reducer function
export const { insertItem, removeItem, updateItem } = recordsSlice.actions

export default recordsSlice.reducer


function insertItem(array, action) {
    let newArray = array.slice()
    newArray.splice(action.index, 0, action.item)
    return newArray
  }
  
  function removeItem(array, action) {
    let newArray = array.slice()
    newArray.splice(action.index, 1)
    return newArray
  }
  
  function updateObjectInArray(array, action) {
    return array.map((item, index) => {
      if (index !== action.index) {
        // This isn't the item we care about - keep it as-is
        return item
      }
  
      // Otherwise, this is the one we want - return an updated value
      return {
        ...item,
        ...action.item
      }
    })
  }