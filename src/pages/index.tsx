import { useState } from 'react';
import styles from './index.less';

export default function IndexPage() {
  let [count,setCount] = useState(0)
  function handleAdd(){
    setCount(++count)
  }
  return (
    <div>
      <p>{count}</p>
      <h1 className={styles.title}>Page index</h1>
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
