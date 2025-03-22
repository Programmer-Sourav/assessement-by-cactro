export const initialState = {
    somevalue: [],
    somevalue2 : ""
}

export default function appReducer(state = initialState, action){
      switch(action.type){
          case "SOME_ARRAY": 
          return {...state, somevalue: [state.somevalue, ...action.payload]}
          case "SOME_VALUE": 
          return {...state, somevalue2 : action.payload}
      }
}