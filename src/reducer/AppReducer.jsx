export const initialState = {
    somevalue: [],
    googleToken : ""
}

export default function appReducer(state = initialState, action){
      switch(action.type){
          case "SOME_ARRAY": 
          return {...state, somevalue: [state.somevalue, ...action.payload]}
          case "SOME_VALUE": 
          return {...state, googleToken : action.payload}
          default:
            return state;
      }
}