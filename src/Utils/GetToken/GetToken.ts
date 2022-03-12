import { localService } from '@Services/LocalStorageService';

export const getTokenFromLocalStorage = () => localService.getUserInfo();
