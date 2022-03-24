import { DatePicker, Form, Input, InputNumber, Radio, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { ThongTinPhim } from '@Core/Models/Phim.type';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '@Redux/hook';
import { quanLyPhimThunk } from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimThunk';
import { PropsRouterComponent } from '@Core/Models/Global.type';
import { showError } from '@Utils/Alert/PopUp';
import { selectQuanLyPhimState } from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimSelect';
import _ from 'lodash';

type SizeType = Parameters<typeof Form>[0]['size'];
type PropsUseFormik = Omit<ThongTinPhim, 'biDanh' | 'daXoa'>;
type PropsEditFilmsPage = PropsRouterComponent;

const { layThongTinPhimAsync, setCapNhatPhimUpLoadAsync } = quanLyPhimThunk;

function EditFilmsPage(props: PropsEditFilmsPage) {
  const { match } = props;
  const { selectFilmThongTinPhim } = selectQuanLyPhimState;
  const thongTinPhim = useAppSelector(selectFilmThongTinPhim);
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const [imgSrc, setImgSrc] = useState('');
  const dispatch = useAppDispatch();

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleChangeDatePicker = async (date: moment.Moment | null) => {
    if (!date) return;
    const ngayKhoiChieu = moment(date).format('DD/MM/YYYY');
    await setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
  };

  const handleChangeSwitch = (field: string) => {
    return async (checked: boolean) => await setFieldValue(field, checked);
  };

  const handleInputNumber = (field: string) => {
    return async (value: number) => await setFieldValue(field, value);
  };

  const handleChangFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    await setFieldValue('hinhAnh', file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setImgSrc(reader.result as string);
  };

  const handleSubmitEditFilms = (valuesUpDate: PropsUseFormik) => {
    valuesUpDate.maNhom = process.env.REACT_APP_MA_NHOM_GP01;
    const formData = new FormData();
    for (const key in valuesUpDate) {
      if (key === 'hinhAnh' && typeof valuesUpDate[key] !== 'string') {
        const hinhAnh = valuesUpDate['hinhAnh'] as unknown as File;
        formData.append(key, hinhAnh, hinhAnh.name);
      } else {
        formData.append(key, valuesUpDate[key as keyof (ThongTinPhim | Blob)]);
      }
    }
    console.log({ valuesUpDate });
    for (var value of formData.values()) {
      console.table(value);
    }
    dispatch(setCapNhatPhimUpLoadAsync(formData));
  };

  const formik = useFormik<PropsUseFormik>({
    enableReinitialize: true,
    initialValues: { ..._.omit(thongTinPhim, ['biDanh', 'daXoa']) },
    //validationSchema: signInUserSchema,
    onSubmit: handleSubmitEditFilms,
  });

  const { setFieldValue, handleSubmit, handleChange, values } = formik;

  useEffect(() => {
    if (!match.params.maPhim) {
      showError('Không tìm thấy phim');
      return;
    }
    dispatch(layThongTinPhimAsync(+match.params.maPhim));
  }, [dispatch, match.params.maPhim]);

  return (
    <div className=' m-2 bg-white'>
      <h3>Thêm phim mới</h3>
      <Form
        onSubmitCapture={handleSubmit}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
      >
        <Form.Item label='Form Size' name='size'>
          <Radio.Group>
            <Radio.Button value='small'>Small</Radio.Button>
            <Radio.Button value='default'>Default</Radio.Button>
            <Radio.Button value='large'>Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Tên Phim'>
          <Input name='tenPhim' onChange={handleChange} value={values.tenPhim} />
        </Form.Item>
        <Form.Item label='Trailer'>
          <Input name='trailer' onChange={handleChange} value={values.trailer} />
        </Form.Item>
        <Form.Item label='Mô tả'>
          <Input name='moTa' onChange={handleChange} value={values.moTa} />
        </Form.Item>
        <Form.Item label='Ngày khởi chiếu'>
          <DatePicker
            format={'DD/MM/YYYY'}
            onChange={handleChangeDatePicker}
            defaultValue={moment(values.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label='Đang chiếu'>
          <Switch onChange={handleChangeSwitch('dangChieu')} checked={values.dangChieu} />
        </Form.Item>
        <Form.Item label='Sắp chiếu'>
          <Switch onChange={handleChangeSwitch('sapChieu')} checked={values.sapChieu} />
        </Form.Item>
        <Form.Item label='Hot'>
          <Switch onChange={handleChangeSwitch('hot')} checked={values.hot} />
        </Form.Item>
        <Form.Item label='Số sao'>
          <InputNumber onChange={handleInputNumber('danhGia')} value={values.danhGia} />
        </Form.Item>
        <Form.Item label='Hình Ảnh'>
          <input
            type='file'
            onChange={handleChangFile}
            accept='image/x-png, image/gif, image/jpeg'
          />
          <br />
          <img
            src={!imgSrc.length ? values.hinhAnh : imgSrc}
            alt={imgSrc}
            style={{ width: 150, height: 150 }}
          />
        </Form.Item>
        <Form.Item label='Tác vụ'>
          <button type='submit' className='bg-blue-300 tẽt-white p-2'>
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditFilmsPage;
