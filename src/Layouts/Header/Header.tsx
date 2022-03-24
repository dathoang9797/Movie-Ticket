import {
  HeaderBackGround,
  HeaderBrandImg,
  HeaderButtonBurger,
  HeaderContainer,
  HeaderContentSign,
  HeaderLi,
  HeaderLink,
  HeaderSignIn,
  HeaderSignUp,
  HeaderUl,
} from '@Layouts/Header/Header.styles';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@Redux/hook';
import { selectNguoiDungState } from '@Redux/Reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungSelect';
import _ from 'lodash';
import { localService } from '@Services/LocalStorageService';
import History from '@Utils/Libs/History';

const { Option } = Select;

const Header = () => {
  const { selectUserInfo } = selectNguoiDungState;
  const userInfo = useAppSelector(selectUserInfo);
  const { t, i18n } = useTranslation();

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const handleLogout = () => {
    localService.removeUserInfo();
    History.push(process.env.REACT_APP_LINK_HOME);
    window.location.reload();
  };

  return (
    <HeaderBackGround>
      <HeaderContainer>
        <NavLink to='/' aria-label='Back to homepage' className='flex items-center p-2'>
          <HeaderBrandImg />
        </NavLink>
        <HeaderUl>
          <HeaderLi>
            <HeaderLink exact to='/' activeClassName='border-b-2 border-violet-600'>
              Home
            </HeaderLink>
          </HeaderLi>
          <HeaderLi>
            <HeaderLink exact to='/contact' activeClassName='border-b-2 border-violet-600'>
              Contact
            </HeaderLink>
          </HeaderLi>
          <HeaderLi>
            <HeaderLink exact to='/news' activeClassName='border-b-2 border-violet-600'>
              News
            </HeaderLink>
          </HeaderLi>
        </HeaderUl>
        <HeaderContentSign>
          {_.isEmpty(userInfo) ? (
            <>
              <HeaderSignIn
                to={process.env.REACT_APP_LINK_SIGN_IN}
                className='border-violet-600 dark:bg-violet-600 dark:text-gray-900'
              >
                {t('signin')}
              </HeaderSignIn>
              <HeaderSignUp
                to={process.env.REACT_APP_LINK_SIGN_UP}
                className='border-violet-600 dark:bg-violet-600 dark:text-gray-900'
              >
                {t('signup')}
              </HeaderSignUp>
            </>
          ) : (
            <Fragment>
              <NavLink to={process.env.REACT_APP_LINK_PROFILE}> Hello {userInfo.taiKhoan}</NavLink>
              <button className='text-yellow-500  mx-3' onClick={handleLogout}>
                Đăng Xuất
              </button>
            </Fragment>
          )}

          <Select defaultValue='en' style={{ width: 100 }} onChange={handleChange}>
            <Option value='en'>Eng</Option>
            <Option value='chi'>Chi</Option>
            <Option value='vi'>Vi</Option>
          </Select>
        </HeaderContentSign>
        <HeaderButtonBurger>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6 dark:text-coolGray-100'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </HeaderButtonBurger>
      </HeaderContainer>
    </HeaderBackGround>
  );
};

export default React.memo(Header);
