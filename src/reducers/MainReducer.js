const initialState = {
   apples: [
      { key: 1, className: "apple1" },
      { key: 2, className: "apple2" },
      { key: 3, className: "apple3" },
      { key: 4, className: "apple4" },
      { key: 5, className: "apple5" },
      { key: 6, className: "apple6" },
      { key: 7, className: "apple7" },
      { key: 8, className: "apple8" },
      { key: 9, className: "apple9" },
      { key: 10, className: "apple10" },
      { key: 11, className: "apple11" },
      { key: 12, className: "apple12" }
   ],
}

export const MainReducer = (state = initialState, action) => {
   switch (action.type) {
      //It sets animated apple values and returns them
      case 'SET_ANIMATED_APPLES':
         state.apples = action.payload.data
         return state

      default:
         return state
   }
}