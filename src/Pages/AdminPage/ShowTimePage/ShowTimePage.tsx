import React, { useEffect, useState } from 'react';
import { Button, InputNumber, Select, DatePicker } from 'antd';
import { FormAntStyle, ShowTimeContainer } from '@Pages/AdminPage/ShowTimePage/ShowTimePage.styles';
import { ThongTinHeThongRap, ThongTinHeThongCumRap } from '@Core/Models/Rap.type';
import { PropsRouterComponent } from '@Core/Models/Global.type';
import { AxiosError } from 'axios';
import { quanLyRapService } from '@Services/QuanLyRapService';
import { quanLyDatVeService } from '@Services/QuanLyDatVeService';
import moment from 'moment';
import { useFormik } from 'formik';
import { Phim } from '@Core/Models/Phim.type';

type State = {
  thongTinHeThongRap: ThongTinHeThongRap[];
  cumRapChieu: ThongTinHeThongCumRap[];
};

function ShowTime(props: PropsRouterComponent) {
  const [state, setState] = useState<State>({
    thongTinHeThongRap: [],
    cumRapChieu: [],
  });
  const dateFormat = 'DD/MM/YYYY hh:mm:ss';

  const formik = useFormik<Phim>({
    initialValues: {
      maPhim: props.match.params.maPhim ?? '',
      ngayChieuGioChieu: '',
      maRap: '',
      giaVe: 0,
    },
    onSubmit: async (values) => {
      try {
        const converMaPhim = Number(values.maPhim);
        const valuesUpdate = { ...values, maPhim: converMaPhim };
        const result = await quanLyDatVeService.taoLichChieu(valuesUpdate);
        console.log({ result });
      } catch (error) {}
    },
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await quanLyRapService.layThongTinHeThongRap();
        if (typeof result.content === 'string') {
          console.log(result);
          return;
        }
        console.log({ result });
        setState({
          ...state,
          thongTinHeThongRap: result.content,
        });
      } catch (error) {
        const err = error as AxiosError;
      }
    }
    fetchData();
  }, []);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleChangeInputNumber = (value: number) => {
    formik.setFieldValue('giaVe', value);
  };

  const handleChangeHeThongRap = async (value: string) => {
    try {
      console.log({ value });
      const result = await quanLyRapService.layThongTinCumRapTheoHeThong(value);
      console.log({ result });
      if (typeof result.content === 'string') {
        return console.log(result.content);
      }
      setState({ ...state, cumRapChieu: result.content });
    } catch (error) {
      const err = error as AxiosError;
      console.log('error', err.response?.data);
    }
  };

  const handleChangeCumRap = (value: string) => {
    formik.setFieldValue('maRap', value);
  };

  const onOk = async (value: any) => {
    await formik.setFieldValue('ngayChieuGioChieu', moment(value).format(dateFormat));
  };

  const handleChangeDate = (value: moment.Moment | null, dateString: string) => {
    formik.setFieldValue('ngayChieuGioChieu', moment(value).format(dateFormat));
  };
  const convertMaHeThongRap = (thongTinHeThongRap: ThongTinHeThongRap[]) => {
    return thongTinHeThongRap.map((heThongRap, index) => {
      return {
        label: heThongRap.biDanh,
        value: heThongRap.maHeThongRap,
      };
    });
  };

  const conertTenHeThongRap = () => {
    return state.cumRapChieu.map((cumRap, index) => {
      return {
        label: cumRap.maCumRap,
        value: cumRap.tenCumRap,
      };
    });
  };

  return (
    <ShowTimeContainer>
      <FormAntStyle
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={handleFinishFailed}
        autoComplete='off'
        onSubmitCapture={formik.handleSubmit}
      >
        <h3 className='text-2xl text-center mb-4'>Tạo Lịch Chiếu - {props.match.params.tenPhim}</h3>
        <FormAntStyle.Item
          label='Hệ Thống Rạp'
          name='username'
          rules={[{ message: 'Please input your username!' }]}
        >
          <Select
            options={convertMaHeThongRap(state.thongTinHeThongRap)}
            onChange={handleChangeHeThongRap}
            placeholder='Chọn hệ thống rạp'
          />
        </FormAntStyle.Item>
        <FormAntStyle.Item
          label='Cum Rạp'
          name='username'
          rules={[{ message: 'Please input your username!' }]}
        >
          <Select
            options={conertTenHeThongRap()}
            placeholder='Chọn Cụm Rạp'
            onChange={handleChangeCumRap}
          />
        </FormAntStyle.Item>

        <FormAntStyle.Item label='Ngày chiếu giờ chiếu' name='date'>
          <DatePicker
            showTime
            onChange={handleChangeDate}
            onOk={onOk}
            defaultValue={moment()}
            format={dateFormat}
          />
        </FormAntStyle.Item>

        <FormAntStyle.Item
          label='Giá vé'
          name='username'
          rules={[{ message: 'Please input your username!' }]}
        >
          <FormAntStyle.Item name='field' noStyle>
            <InputNumber
              min={75000}
              max={150000}
              defaultValue={0}
              onChange={handleChangeInputNumber}
            />
          </FormAntStyle.Item>
        </FormAntStyle.Item>
        <FormAntStyle.Item
          label='Chức năng'
          name='username'
          rules={[{ message: 'Please input your username!' }]}
        >
          <Button htmlType='submit'>Tạo lịch chiếu</Button>
        </FormAntStyle.Item>
      </FormAntStyle>
    </ShowTimeContainer>
  );
}

export default ShowTime;
