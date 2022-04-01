import * as AntIcon from '@ant-design/icons';
import { PropsTemplate } from '@Core/Models/Global.type';
import { useAppSelector } from '@Redux/hook';
import { selectNguoiDungState } from '@Redux/Selector/QuanLyNguoiDungSelect';
import { localService } from '@Services/LocalStorageService';
import History from '@Utils/Libs/History';
import { Layout, Menu } from 'antd';
import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const { Sider, Header } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = ({ Component, ...restRoute }: PropsTemplate) => {
  const { selectUserInfo } = selectNguoiDungState;
  const userInfo = useAppSelector(selectUserInfo);
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const { DesktopOutlined, FileOutlined, UserOutlined, UsergroupAddOutlined } = AntIcon;
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  useEffect(() => window.scrollTo(0, 0));

  if (!localService.getUserInfo()) {
    return <Redirect to={process.env.REACT_APP_LINK_HOME} />;
  }

  if (userInfo.maLoaiNguoiDung !== process.env.REACT_APP_MA_LOAI_NGUOI_DUNG_QUAN_TRI) {
    alert('Bạn không có quyền truy cập vào trang này');
    return <Redirect to={process.env.REACT_APP_LINK_HOME} />;
  }

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => (
        <Fragment>
          <Layout className='min-h-screen'>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <div className='logo p-5 flex'>
                <img src='https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png' alt='' />
              </div>
              <Menu theme='dark' defaultSelectedKeys={[pathname]} mode='inline'>
                <Menu.Item key={process.env.REACT_APP_LINK_ADMIN_DASHBOARD} icon={<UserOutlined />}>
                  <NavLink to={process.env.REACT_APP_LINK_ADMIN_DASHBOARD}>Users</NavLink>
                </Menu.Item>
                <SubMenu key='2' icon={<FileOutlined />} title='Films'>
                  <Menu.Item key={process.env.REACT_APP_LINK_ADMIN_FILMS}>
                    <NavLink to={process.env.REACT_APP_LINK_ADMIN_FILMS}>Films</NavLink>
                  </Menu.Item>
                  <Menu.Item key={process.env.REACT_APP_LINK_ADMIN_ADD_FILMS}>
                    <NavLink to={process.env.REACT_APP_LINK_ADMIN_ADD_FILMS}>Add Film</NavLink>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item
                  key={process.env.REACT_APP_LINK_ADMIN_SHOWTIME_FILMS}
                  icon={<DesktopOutlined />}
                >
                  <NavLink to={process.env.REACT_APP_LINK_ADMIN_SHOWTIME_FILMS}>Showtime</NavLink>
                </Menu.Item>
                <Menu.Item
                  key={process.env.REACT_APP_LINK_ADMIN_EDIT_USERMANAGER}
                  icon={<UsergroupAddOutlined />}
                >
                  <NavLink to={process.env.REACT_APP_LINK_ADMIN_EDIT_USERMANAGER}>
                    UserManager
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header className='bg-white mb-2'>
                {!_.isEmpty(userInfo) ? (
                  <Fragment>
                    <div className='flex justify-end bg-white'>
                      <button
                        className='bg-white'
                        onClick={() => {
                          History.push(process.env.REACT_APP_LINK_PROFILE);
                        }}
                      >
                        <div className='rounded-full bg-red-600 w-10 h-10 flex items-center justify-center m-auto mr-2'>
                          {userInfo.taiKhoan.substring(0, 1)}
                        </div>
                      </button>
                      <button
                        className='text-blue-600 bg-white'
                        onClick={() => {
                          localService.removeUserInfo();
                          History.push(process.env.REACT_APP_LINK_HOME);
                          window.location.reload();
                        }}
                      >
                        Đăng Xuất
                      </button>
                    </div>
                  </Fragment>
                ) : (
                  ''
                )}
              </Header>
              <Component {...propsRoute} />
            </Layout>
          </Layout>
        </Fragment>
      )}
    />
  );
};

export default AdminTemplate;
