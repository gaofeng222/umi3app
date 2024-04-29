import {Button} from 'antd'
import Child1 from './compos/Child'
import { useCallback, useMemo, useState } from 'react';
import AppContext from './compos/context';
export default function IndexPage() {
  let [count,setCount] = useState(100)
  let [value,setValue] = useState(20)
  // function getNum(){
  //   console.log("getNum")
  //   return count * 100;
  // }
  const getNumMemo = useMemo(() => {
    return count * 100
  },[count])

  const updateCountCb = useCallback(() => console.log('update from p'),[count])
  return (
    <>
     <h3>child的父组件</h3>
     <div>getNum：{getNumMemo}</div>
     <p>{count}</p>
     <Child1 updateCount={updateCountCb}/>
     <input type='text' value={value} onChange={ev => setValue(ev.target.value)} />
     <button onClick={() => setCount(++count)}>add</button>
    </>
  );
}
