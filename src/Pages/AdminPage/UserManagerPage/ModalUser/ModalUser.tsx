import { ThongTinTaiKhoan } from '@Core/Models/NguoiDung.type';
import { Button, Modal } from 'antd';
import React from 'react';

type PropsModalUser = {
  isModalVisible: boolean;
  handleCancel: () => void;
  handleOk: () => void;
  showModal: () => void;
  chiTietNguoiDung: ThongTinTaiKhoan;
};

function ModalUser({
  handleCancel,
  handleOk,
  isModalVisible,
  showModal,
  chiTietNguoiDung,
}: PropsModalUser) {
  console.log({ chiTietNguoiDung });
  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal title='Basic Modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default ModalUser;
