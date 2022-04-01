import { CalendarOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { ThongTinPhim } from '@Core/Models/Phim.type';
import { SearchStyle } from '@Pages/AdminPage/FilmsPage/FilmPage.styles';
import { useAppDispatch, useAppSelector } from '@Redux/hook';
import { selectQuanLyPhimState } from '@Redux/Selector/QuanLyPhimSelect';
import { quanLyPhimThunk } from '@Redux/Thunk/QuanLyPhimThunk';
import { AppDispatch } from '@Redux/store';
import { nanoid } from '@reduxjs/toolkit';
import History from '@Utils/Libs/History';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import _, { debounce } from 'lodash';
import React, { Fragment, useCallback, useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const handleDeleteFilm = (maPhim: number, dispatch: AppDispatch) => {
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
      dispatch(setXoaPhimThunk(maPhim));
    }
  });
};

const columns = (dispatch: AppDispatch) => {
  console.log('render');
  const columns: ColumnsType<ThongTinPhim> = [
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend', 'ascend'],
      defaultSortOrder: 'descend',
      width: '15%',
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      defaultSortOrder: 'descend',
      render(text, record, index) {
        return (
          <img
            src={record.hinhAnh}
            alt={record.hinhAnh}
            width={75}
            height={75}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = `https://picsum.photos/id/75/75`;
            }}
          />
        );
      },
      width: '15%',
    },
    {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => {
        const tenPhimA = a.tenPhim.toLowerCase();
        const tenPhimB = b.tenPhim.toLowerCase();
        if (tenPhimA > tenPhimB) {
          return 1;
        } else {
          return -1;
        }
      },
      sortDirections: ['descend', 'ascend'],
      defaultSortOrder: 'descend',
      width: '20%',
    },
    {
      title: 'Mô Tả',
      dataIndex: 'moTa',
      sorter: (a, b) => {
        const moTaA = a.moTa.toLowerCase();
        const moTaB = b.moTa.toLowerCase();
        if (moTaA > moTaB) {
          return 1;
        } else {
          return -1;
        }
      },
      sortDirections: ['descend', 'ascend'],
      defaultSortOrder: 'descend',
      render: (text, record, index) => {
        return (
          <Fragment>
            {record.moTa.length > 50 ? record.moTa.substring(0, 50) + '...' : record.moTa}
          </Fragment>
        );
      },
      width: '20%',
    },
    {
      title: 'Hành động',
      dataIndex: 'hanhDong',
      sorter: (a, b) => {
        const moTaA = a.moTa.toLowerCase();
        const moTaB = b.moTa.toLowerCase();
        if (moTaA > moTaB) {
          return 1;
        } else {
          return -1;
        }
      },
      sortDirections: ['descend', 'ascend'],
      defaultSortOrder: 'descend',
      render: (text, record, index) => {
        return (
          <Fragment>
            <NavLink
              className='text-xl p-2 '
              to={`${process.env.REACT_APP_LINK_ADMIN_EDIT_FILMS}/${record.maPhim}`}
            >
              <EditOutlined className='text-blue-600' />
            </NavLink>
            <span
              className='  text-xl p-2 cursor-pointer'
              onClick={() => {
                handleDeleteFilm(record.maPhim, dispatch);
              }}
            >
              <DeleteOutlined className='text-red-600' />
            </span>
            <NavLink className='text-xl p-2' to={process.env.REACT_APP_LINK_ADMIN_SHOWTIME_FILMS}>
              <CalendarOutlined className='text-green-600' />
            </NavLink>
          </Fragment>
        );
      },
      width: '20%',
    },
  ];
  return columns;
};

const { getFilmAsync, setXoaPhimThunk } = quanLyPhimThunk;
const { selectFilmArrFilm } = selectQuanLyPhimState;

function Films() {
  const arrFilm = useAppSelector(selectFilmArrFilm);
  const dispatch = useAppDispatch();

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const onSearch = (value: string) => {
    console.log(value);
    const params = { maNhom: undefined, tenPhim: value };
    dispatch(getFilmAsync(params));
  };

  const handlerDebounce = useCallback(debounce(onSearch, 500), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handlerDebounce(value);
  };

  const renderColumns = useMemo(() => columns(dispatch), [dispatch]);

  useEffect(() => {
    if (_.isEmpty(arrFilm)) {
      dispatch(getFilmAsync());
    }
  }, []);

  return (
    <div className='container pt-5'>
      <h3 className='text-4xl'>Quản Lý Phim</h3>
      <Button
        className='mb-5 mt-5'
        onClick={() => {
          History.push(process.env.REACT_APP_LINK_ADMIN_ADD_FILMS);
        }}
      >
        Thêm Phim
      </Button>
      <SearchStyle
        placeholder='input search text'
        enterButton={<SearchOutlined />}
        size='large'
        onSearch={onSearch}
        onChange={handleChange}
      />

      <Table
        columns={renderColumns}
        dataSource={arrFilm}
        onChange={onChange}
        key={`TableFilms-${nanoid()}`}
        rowKey={(record) => `MaPhim-${record.maPhim}`}
      />
    </div>
  );
}

export default Films;
