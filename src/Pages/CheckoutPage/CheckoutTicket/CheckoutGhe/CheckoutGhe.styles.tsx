import tw, { styled } from 'twin.macro';

export const GheThuong = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  background-color: rgb(123, 122, 122);
  line-height: 35px;
  display: inline-block;
`;

export const GheDaDat = styled(GheThuong)`
  cursor: no-drop;
  background-color: rgb(232, 76, 76);
`;

export const GheDangDat = styled(GheThuong)`
  background-color: rgb(18, 176, 18) !important;
`;

export const GheVip = styled(GheThuong)`
  background-color: rgb(228, 74, 8);
`;

export const GheDaDuocDat = styled(GheThuong)`
  cursor: no-drop;
  background-color: rgb(246, 246, 246);
  box-shadow: -1px 2px 18px -6px orange;
  color: orange !important;
`;

export const GheKhanhDangDat = styled(GheThuong)`
  background-color: rgb(242, 25, 191) !important;
  cursor: no-drop;
`;
