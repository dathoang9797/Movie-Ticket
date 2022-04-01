import { NguoiDungVM } from '@Core/Models/NguoiDung.type';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';

type ColumnsUser = Omit<NguoiDungVM, 'maNhom' | 'accessToken'>;

const columns: ColumnsType<ColumnsUser> = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    render: (text, record, index) => index + 1,
  },
  {
    title: 'Họ Tên',
    dataIndex: 'hoTen',
    key: 'hoTen',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Loại Tài Khoản',
    dataIndex: 'maLoaiNguoiDung',
    key: 'maLoaiNguoiDung',
    render: (text, record) => {
      if (record.maLoaiNguoiDung === process.env.REACT_APP_MA_LOAI_NGUOI_DUNG_QUAN_TRI) {
        return <Tag color={'green'}>Quản Trị</Tag>;
      }
      return <Tag color={'blue'}>Khách Hàng</Tag>;
    },
  },
  {
    title: 'Tài Khoản',
    dataIndex: 'taiKhoan',
    key: 'taiKhoan',
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
  },
];

export const getHeaderTableUserField = () => {
  return columns;
};
