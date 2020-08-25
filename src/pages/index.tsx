import * as React from 'react';
import { initialGlobalValue, reducers } from '@/store';
import Editor from './editor';

const { useReducer } = React;

export default function() {
  const [globalState, dispatch] = useReducer(reducers, initialGlobalValue);
  return (
    <Editor cardData={globalState} dispatch={dispatch} />
  )
}
