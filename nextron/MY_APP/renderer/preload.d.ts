import { IpcHandler } from "../main/preload";

declare global {
  interface Window {
    ipc: IpcHandler;
  }
}

// alert와 confirm을 무시하는 코드 추가
window.alert = () => {};
window.confirm = () => true;
