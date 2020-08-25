import * as React from 'react';
import { initialGlobalValue, reducers, GlobalContext } from '@/store';
import useReducerWithLogger from '@/store/useReducerWithLogger';
import Editor from './editor';


export default function() {
  const [cardData, dispatch] = useReducerWithLogger(reducers, initialGlobalValue);
  return (
    <GlobalContext.Provider value={{ cardData, dispatch }}>
      <Editor cardData={cardData} dispatch={dispatch} />
    </GlobalContext.Provider>
  )
}
