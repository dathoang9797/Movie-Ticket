import { ThongTinDangNhapVM } from '@Core/Models/NguoiDung.type';
import * as yup from 'yup';
import { SchemaOf } from 'yup';

export const signInUserSchema: SchemaOf<ThongTinDangNhapVM> = yup.object().shape({
  taiKhoan: yup.string().required('*Field is require!'),
  matKhau: yup.string().required('*Field is require!'),
});
