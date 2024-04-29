import styles from '../index.less';
import {Button} from 'antd'
import {Button as V2Button} from 'antd-mobile'
import Girl from '@/assets/cropped_img2.png'
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page about</h1>
      <Button type='primary'>主要按钮</Button>
      <V2Button type='primary' size='small' inline>v2 button</V2Button>
      <img src={Girl} alt="" width="200px"/>
      <img src={require("@/assets/cropped_img2.png")} alt="" width="200px"/>
      <div className={styles.test}>123</div>
      <div className={styles.a2}>
          <div className="demo">
             这是一段显示文本
          </div>
      </div>
    </div>
  );
}
