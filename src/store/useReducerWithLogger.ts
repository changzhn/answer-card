import * as React from 'react';

const { useReducer, useEffect } = React;

type Reducer<S> = (prevState: S, action: GlobalValue.Action) => S;
/**
 * useLogger 模拟redux-logger中间件
 * @param reducer
 * @param initState
 */
const useLogger = (
  reducer: Reducer<GlobalValue.AnswerCardData>,
  initState: GlobalValue.AnswerCardData
): [GlobalValue.AnswerCardData, React.Dispatch<GlobalValue.Action>] => {

  const [state, dispath] = useReducer(reducer, initState);
  function loggerDispatch(action: any) {
    console.log('修改之前状态: ', state);
    console.log('action: ', action);
    dispath(action);
  }
  useEffect(() => {
    console.log('修改之后状态: ', state);
  }, [state]);
  return [state, loggerDispatch];
};

export default useLogger;
