/*
 * @Author: WGF
 * @Date: 2023-02-09 17:47:35
 * @LastEditors: WGF
 * @LastEditTime: 2023-02-09 19:01:46
 * @FilePath: \umi\src\components\Menu\components\Drawer2\index.tsx
 * @Description: 文件描述
 */
import styles from './index.less';
const IndexPage: React.FC<{ setShowKey: Function }> = (props) => {
  const { setShowKey } = props;
  return (
    <div className={styles.wrapper}>
      抽屉2
      <div>
        <button onClick={() => {setShowKey("one")}}>切换到抽屉1</button>
      </div>
    </div>
  );
};

export default IndexPage;
