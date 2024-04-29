import { memo, useContext } from "react"
import AppContext from "./context"
import { Button } from "antd"
function Child({updateCount}){
  console.log('child被渲染了...')
  return <div>
    <h3>child组件</h3>
    {/* <div>{count}</div>
     */}
     <Button onClick={updateCount}>update count</Button>
  </div>
}

export default memo(Child)