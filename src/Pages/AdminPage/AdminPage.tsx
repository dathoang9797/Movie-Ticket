import { UserOutlined } from '@ant-design/icons';
import { useAppSelector } from '@Redux/hook';
import { selectorNguoiDungState } from '@Redux/Reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungSelector';
import { localService } from '@Services/LocalStorageService/LocalStorageService';
import History from '@Utils/Libs/History';
import { Layout, Menu } from 'antd';
import _ from 'lodash';
import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminPage() {
  const { userInfo } = useAppSelector(selectorNguoiDungState);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const operations = (
    <Fragment>
      {!_.isEmpty(userInfo) ? (
        <Fragment>
          <button
            onClick={() => {
              History.push(process.env.REACT_APP_LINK_PROFILE);
            }}
          >
            <div className='rounded-full bg-red-600 w-10 h-10 flex items-center justify-center m-auto'>
              {userInfo.taiKhoan.substring(0, 1)}
            </div>
            <p>Hello !{userInfo.taiKhoan}</p>
          </button>
          <button
            className='bg-red-600'
            onClick={() => {
              localService.removeUserInfo();
              History.push(process.env.REACT_APP_LINK_HOME);
              window.location.reload();
            }}
          >
            Đăng Xuất
          </button>
        </Fragment>
      ) : (
        ''
      )}
    </Fragment>
  );

  return (
    <Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo p-5'>
            <img src='https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png' alt='' />
          </div>

          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1' icon={<UserOutlined />}>
              <NavLink to={process.env.REACT_APP_LINK_ADMIN_USERS}>Users</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={process.env.REACT_APP_LINK_ADMIN_FILMS}>Films</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={process.env.REACT_APP_LINK_ADMIN_SHOWTIME}>Showtime</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout></Layout>
      </Layout>
    </Fragment>
  );
}

export default AdminPage;
