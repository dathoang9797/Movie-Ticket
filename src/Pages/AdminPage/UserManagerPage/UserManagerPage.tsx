import { NguoiDungVM } from '@Core/Models/NguoiDung.type';
import ModalUser from '@Pages/AdminPage/UserManagerPage/ModalUser/ModalUser';
import { useAppDispatch, useAppSelector } from '@Redux/hook';
import { selectNguoiDungState } from '@Redux/Selector/QuanLyNguoiDungSelect';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { getHeaderTableUserField } from '@Utils/User/UserUtils';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const { selectDanhSachNguoiDung, selectChiTietNguoiDung } = selectNguoiDungState;
const { getDanhSachNguoiDungAsync, setXoaNguoiDungAsync, getChiTietNguoiDungAsync } =
  quanLyNguoiDungThunk;

function UserManagerPage() {
  const dispatch = useAppDispatch();
  const danhSachNguoiDung = useAppSelector(selectDanhSachNguoiDung);
  const chiTietNguoiDung = useAppSelector(selectChiTietNguoiDung);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const newData = danhSachNguoiDung.map((nguoiDung, index) => {
    return {
      ...nguoiDung,
      action: (
        <div className='space-x-3'>
          <button
            className='bg-green-700 text-white rounded px-6 py-2'
            onClick={() => {
              showModal();
              handleGetDetailUser(nguoiDung.taiKhoan);
            }}
          >
            Sữa
          </button>
          <button
            className='bg-red-700 text-white rounded px-6 py-2'
            onClick={() => {
              handleDeleteUser(nguoiDung.taiKhoan);
            }}
          >
            Xóa
          </button>
        </div>
      ),
    };
  });

  const handleDeleteUser = (taiKhoan: NguoiDungVM['taiKhoan']) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(setXoaNguoiDungAsync(taiKhoan));
        await dispatch(getDanhSachNguoiDungAsync());
      }
    });
  };

  const handleGetDetailUser = (taiKhoan: NguoiDungVM['taiKhoan']) => {
    dispatch(getChiTietNguoiDungAsync(taiKhoan));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(getDanhSachNguoiDungAsync());
    return () => {};
  }, [dispatch]);

  return (
    <div className='w-full p-5'>
      <ModalUser
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        chiTietNguoiDung={chiTietNguoiDung}
      />
      <Table columns={getHeaderTableUserField()} dataSource={newData} />
    </div>
  );
}

export default UserManagerPage;
