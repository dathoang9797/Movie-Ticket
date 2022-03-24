import { DatePicker, Form, Input, InputNumber, Radio, Switch } from 'antd';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ThongTinPhim } from '@Core/Models/Phim.type';
import moment from 'moment';
import { useAppDispatch } from '@Redux/hook';
import { quanLyPhimThunk } from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimThunk';

type SizeType = Parameters<typeof Form>[0]['size'];

const { setThemPhimUpLoadHinhAsync } = quanLyPhimThunk;

function AddFilmsPage() {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('small');
  const [imgSrc, setImgSrc] = useState('');
  const dispatch = useAppDispatch();

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleSubmitAddFilms = (values: ThongTinPhim) => {
    values.maNhom = process.env.REACT_APP_MA_NHOM_GP01;
    const formData = new FormData();
    for (const key in values) {
      if (key === 'hinhAnh') {
        const hinhAnh = values['hinhAnh'] as unknown as File;
        formData.append(key, hinhAnh, hinhAnh.name);
      } else {
        formData.append(key, values[key as keyof (ThongTinPhim | Blob)]);
      }
    }
    dispatch(setThemPhimUpLoadHinhAsync(formData));
  };

  const formik = useFormik({
    initialValues: {} as ThongTinPhim,
    //validationSchema: signInUserSchema,
    onSubmit: handleSubmitAddFilms,
  });
  const { setFieldValue, handleSubmit, handleChange } = formik;

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
          <Input name='tenPhim' onChange={handleChange} />
        </Form.Item>
        <Form.Item label='Trailer'>
          <Input name='trailer' onChange={handleChange} />
        </Form.Item>
        <Form.Item label='Mô tả'>
          <Input name='moTa' onChange={handleChange} />
        </Form.Item>
        <Form.Item label='Ngày khởi chiếu'>
          <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label='Đang chiếu'>
          <Switch onChange={handleChangeSwitch('dangChieu')} />
        </Form.Item>
        <Form.Item label='Sắp chiếu'>
          <Switch onChange={handleChangeSwitch('sapChieu')} />
        </Form.Item>
        <Form.Item label='Hot'>
          <Switch onChange={handleChangeSwitch('hot')} />
        </Form.Item>
        <Form.Item label='Số sao'>
          <InputNumber onChange={handleInputNumber('danhGia')} />
        </Form.Item>
        <Form.Item label='Hình Ảnh'>
          <input
            type='file'
            onChange={handleChangFile}
            accept='image/x-png, image/gif, image/jpeg'
          />
          <br />
          <img src={imgSrc} alt={imgSrc} style={{ width: 150, height: 150 }} />
        </Form.Item>
        <Form.Item label='Tác vụ'>
          <button type='submit' className='bg-blue-300 tẽt-white p-2'>
            Thêm phim
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddFilmsPage;
