import React from 'react';

import ConfirmModal from './ConfirmModal';
import ErrorModal from './ErrorModal';
import MessageModal from './MessageModal';

export enum ModalType {
  ERROR = 'error',
  CONFIRM = 'confirm',
  MESSAGE = 'message',
  NONE = 'none',
}

type IState = {
  visible: boolean;
  modalType: ModalType;
  message: string;
  outputResolver: any;
};

export type IModalContext = {
  modal: {
    visible: boolean;
    modalType: ModalType;
    message: string;
    outputResolver: (output: any) => any;
    openModal: (type: ModalType, message: string) => Promise<any>;
    toggleVisible: (visible: boolean) => void;
  };
};

export const ModalContext = React.createContext<Partial<IModalContext>>({});

export default class ModalProvider extends React.Component<any, IState> {
  state: IState = {
    visible: false,
    modalType: ModalType.NONE,
    message: '',
    outputResolver: undefined,
  };

  toggleVisible(): void {
    this.setState({visible: !this.state.visible});
  }

  openModal(type: ModalType, message: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.setState({
        visible: true,
        modalType: type,
        message: message,
        outputResolver: resolve,
      });
    });
  }

  getModelComponentFromType() {
    let modalComponent;
    switch (this.state.modalType) {
      case ModalType.ERROR:
        modalComponent = (
          <ErrorModal
            toggleVisible={this.toggleVisible.bind(this)}
            message={this.state.message}
            outputResolver={this.state.outputResolver}
          />
        );
        break;
      case ModalType.CONFIRM:
        modalComponent = (
          <ConfirmModal
            toggleVisible={this.toggleVisible.bind(this)}
            message={this.state.message}
            outputResolver={this.state.outputResolver}
          />
        );
        break;
      case ModalType.MESSAGE:
        modalComponent = (
          <MessageModal
            toggleVisible={this.toggleVisible.bind(this)}
            message={this.state.message}
            outputResolver={this.state.outputResolver}
          />
        );
        break;
      default:
        modalComponent = null;
    }
    return modalComponent;
  }

  render() {
    let modelComponet = null;

    if (this.state.visible) {
      modelComponet = this.getModelComponentFromType();
    }

    const modalContext = {
      modal: {
        ...this.state,
        openModal: this.openModal.bind(this),
        toggleVisible: this.toggleVisible.bind(this),
      },
    };

    return (
      <ModalContext.Provider value={modalContext}>
        {modelComponet}
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export const withModalProvider = (ChildComponent: any) => (props: any) => {
  return (
    <ModalProvider>
      <ModalContext.Consumer>
        {context => {
          return <ChildComponent {...props} {...context} />;
        }}
      </ModalContext.Consumer>
    </ModalProvider>
  );
};
