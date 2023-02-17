/*
 * @Author: WGF
 * @Date: 2023-02-09 16:56:25
 * @LastEditors: WGF
 * @LastEditTime: 2023-02-10 09:57:58
 * @FilePath: \umi\src\components\Menu\index.tsx
 * @Description: 文件描述
 */
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import Drawer1 from './components/Drawer1';
import Drawer2 from './components/Drawer2';
import Drawer3 from './components/Drawer3';
const IndexPage: React.FC<{ open: boolean; defaultShow?: string }> = (
  props,
) => {
  const { open, defaultShow } = props;
  const [showKey, setShowKey] = useState<string>('one');
  
  useEffect(() => {
    defaultShow && setShowKey(defaultShow);
  }, [defaultShow]);
  return (
    <div
      className={styles.wrapper}
      style={{
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <div
        className={styles.header}
        style={{ height: '50px', background: 'yellow' }}
      >
        头部
      </div>
      <div
        className={styles.content}
        style={{ height: 'calc(100% - 50px)', background: 'green' }}
      >
        <div className={styles.drawer}>
          <Drawer1 setShowKey={setShowKey} open={open}/>
        </div>
        <div
          className={styles.drawer}
          style={{
            transform:
              showKey === 'two' ? 'translateX(0)' : 'translateX(-100%)',
          }}
        >
          <Drawer2 setShowKey={setShowKey} />
        </div>
        
      </div>
    </div>
  );
};

export default IndexPage;
