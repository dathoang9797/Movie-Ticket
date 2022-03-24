import React from 'react';
import { Button, Cascader, InputNumber } from 'antd';
import { DatePicker } from 'antd';
import { FormAntStyle, ShowTimeContainer } from '@Pages/AdminPage/ShowTimePage/ShowTimePage.styles';
import { SingleValueType } from 'rc-cascader/lib/Cascader';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [],
      },
    ],
  },
];

function ShowTime() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleChangeDate = (value: moment.Moment | null, dateString: string) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };

  const handleChangeInputNumber = (value: number) => {
    console.log(value);
  };

  const onOk = (value: any) => {
    console.log('onOk: ', value);
  };

  const handleChange = (value: SingleValueType) => {
    console.log(value);
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
      >
        <h3 className='text-2xl text-center mb-4'>Tạo Lịch Chiếu</h3>
        <FormAntStyle.Item
          label='Hệ Thống Rạp'
          name='username'
          rules={[{ message: 'Please input your username!' }]}
        >
          <Cascader options={options} onChange={handleChange} placeholder='Chọn hệ thống rạp' />,
        </FormAntStyle.Item>
        <FormAntStyle.Item
          label='Cum Rạp'
          name='username'
          rules={[{ message: 'Please input your username!' }]}
        >
          <Cascader options={options} onChange={handleChange} placeholder='Chọn Cụm Rạp' />,
        </FormAntStyle.Item>

        <FormAntStyle.Item
          label='Ngày chiếu giờ chiếu'
          name='username'
          rules={[{ message: 'Please input your username!' }]}
        >
          <DatePicker showTime onChange={handleChangeDate} onOk={onOk} />
        </FormAntStyle.Item>

        <FormAntStyle.Item
          label='Ngày chiếu giờ chiếu'
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
          <Button>Tạo lịch chiếu</Button>
        </FormAntStyle.Item>
      </FormAntStyle>
    </ShowTimeContainer>
  );
}

export default ShowTime;
