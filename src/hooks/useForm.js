import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const formOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setState(initialState);
  };

  return [state, formOnChange, reset];
};
