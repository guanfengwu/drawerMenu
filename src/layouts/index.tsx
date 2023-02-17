/*
 * @Author: WGF
 * @Date: 2023-02-16 20:35:33
 * @LastEditors: WGF
 * @LastEditTime: 2023-02-17 08:58:38
 * @FilePath: \drawerMenu\src\layouts\index.tsx
 * @Description: 文件描述
 */
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import './index.less';
import DrawerMenu from '@/components/Menu';

const { Header, Content, Footer } = Layout;
const menuData = [
  { route: 'section1', name: '菜单1' },
  { route: 'section2', name: '菜单2' },
];

function BasicLayout(props: { location: { pathname: any }; children: any }) {
  const {
    location: { pathname },
    children,
  } = props;
  const [open, setOpen] = useState(false);
  const [defaultShow, setDefaultShow] = useState('one');
  const [showMask, setShowMask] = useState<boolean>(false); // 控制遮罩的显隐
  const onClose = () => {
    setOpen(false);
    setTimeout(() => {
      setDefaultShow('one');
    }, 200);
  };
  return (
    <Layout>
      <Header>
        <div
          className="logo"
          onClick={() => {
            setOpen(!open);
            setTimeout(() => {
              setDefaultShow('one');
            }, 200);
          }}
        >
          Umi
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '44px' }}
        >
          {menuData.map((menu) => (
            <Menu.Item key={`/${menu.route}`}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content>
        <div
          style={{
            background: '#fff',
            minHeight: 280,
            height: 'calc(100vh - 44px)',
            position: 'relative',
          }}
        >
          <DrawerMenu open={open} defaultShow={defaultShow} />
          {open && <div className="mask" onClick={onClose} />}
          <div style={{ display: 'flex' }}>
            <div>
              <button
                onClick={() => {
                  setDefaultShow('two');
                  setOpen(true);
                }}
              >
                测试按钮
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
export default BasicLayout;
