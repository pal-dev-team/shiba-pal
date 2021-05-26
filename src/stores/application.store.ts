import { action, observable, makeAutoObservable } from 'mobx';
/**
 * Application store interface
 * @param {string} AlertInfo : [message] [type - info, warning, danger]
 */
export interface IApplicationStore {
  AlertInfo: { message: string; type: string };
  txHash: string,
}

export class ApplicationStore implements IApplicationStore {
  constructor() {
    makeAutoObservable(this, {
      AlertInfo: observable,
      txHash: observable,
      setErrorMessage: action,
    });
  }

  AlertInfo = { message: '', type: '' };
  txHash = "";

  /**
   * for show modal error
   * @param {string} message
   * @param {string} type : [info, warning, danger] default is warning
   */
  setErrorMessage = (data: { message: string; type: string }): void => {
    this.AlertInfo.message = data.message;
    this.AlertInfo.type = data.type;
    if (data.type === '') this.AlertInfo.type = 'warning';
  };

  setTxHash = (hash: string): void => {
    this.txHash = hash;
  }
}
