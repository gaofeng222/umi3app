import {Button} from 'antd'
import Child1 from './compos/Child'
import { useState } from 'react';
import AppContext from './compos/context';
export default function IndexPage() {
  const [count,setCount] = useState(100)
  return (
    <AppContext.Provider value={{count,setCount}}>
     <h3>child的父组件</h3>
     <p>{count}</p>
     <Child1 />
    </AppContext.Provider>
  );
}
