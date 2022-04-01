import { ThongTinDangNhapVM } from '@Core/Models/NguoiDung.type';
import { FormStyle } from '@Pages/SignInPage/FormSignIn/FormSignIn.styles';
import { useAppDispatch } from '@Redux/hook';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { signInUserSchema } from '@Shared/Schema/SignInSchema';
import { useFormik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';

const { setUserInfoAsync } = quanLyNguoiDungThunk;

function FormSignIn() {
  const dispatch = useAppDispatch();

  const formik = useFormik<ThongTinDangNhapVM>({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    validationSchema: signInUserSchema,
    onSubmit: (values) => dispatch(setUserInfoAsync(values)),
  });
  const { handleSubmit, handleChange, errors } = formik;
  return (
    <FormStyle.FormContainer onSubmit={handleSubmit}>
      <FormStyle.H1>Hello Again!</FormStyle.H1>
      <FormStyle.P>Welcome Back</FormStyle.P>
      <FormStyle.FormControl>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
          />
        </svg>
        <FormStyle.Input
          type='text'
          name='taiKhoan'
          placeholder='Email Address'
          onChange={handleChange}
        />
      </FormStyle.FormControl>
      <FormStyle.SpanError>{errors.taiKhoan}</FormStyle.SpanError>
      <FormStyle.FormControl>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-gray-400'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
            clipRule='evenodd'
          />
        </svg>
        <FormStyle.Input
          type='text'
          placeholder='Password'
          name='matKhau'
          onChange={formik.handleChange}
        />
      </FormStyle.FormControl>
      <FormStyle.SpanError>{errors.matKhau}</FormStyle.SpanError>
      <FormStyle.Button type='submit'>Đăng Nhập</FormStyle.Button>
      <FormStyle.Span>
        <NavLink to='sign-up'>Bạn chưa có tài khoản ?</NavLink>
      </FormStyle.Span>
    </FormStyle.FormContainer>
  );
}

export default FormSignIn;
