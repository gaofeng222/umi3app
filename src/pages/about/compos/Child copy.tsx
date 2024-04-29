import { useContext } from "react"
import AppContext from "./context"
import { Button } from "antd"
function Child(){
  const {count,setCount} = useContext(AppContext)
  console.log("🚀 ~ Child ~ data:", count)
  function changeData(){
    setCount(count + 1)
  }
  return <div>
    <h3>child组件</h3>
    <div>{count}</div>
    <Button onClick={changeData}>修改</Button>
  </div>
}

export default Child