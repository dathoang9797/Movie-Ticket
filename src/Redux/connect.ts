import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '@Redux/store';

const mapState = (state: RootState) => ({});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);
export type PropsFromReducer = ConnectedProps<typeof connector>;
