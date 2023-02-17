import { useState } from 'react';
import styles from './index.less';
const IndexPage: React.FC<{ setShowKey: Function,open:boolean }> = (props) => {
  const { setShowKey ,open} = props;
  const [fixed,setFixed] = useState(false)
  return (
    <div className={styles.wrapper}>
      抽屉1
      <div>
        <button
          onClick={() => {
            setShowKey('two');
          }}
        >
          测试测试
        </button>
      </div>
      <div style={{ position: fixed?"fixed":"absolute", width: '30%', height: '50%', background: 'blue' }} onClick={() => {setFixed(true)}}></div>
    </div>
  );
};

export default IndexPage;
