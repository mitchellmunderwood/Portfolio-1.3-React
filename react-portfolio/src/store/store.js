import React, { createContext, useContext, useReducer } from 'react';
import SET_PAGE from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE:
      console.log("Reducer - set page to: ", action.page)
      return {
        ...state,
        page: action.page,
      };
    
    case SET_POST:
      console.log("Reducer - set page to: ", action.post)
      return {
        ...state,
        post: action.post,
      };
    
    case SET_PROJECT:
      console.log("Reducer - set page to: ", action.project)
      return {
        ...state,
        project: action.project,
      };

    default:
      console.log("Reducer - Default, Return State:", action)
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    page: null,
    posts: [],
    post: {},
    projects: [],
    project: {},
    description: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
