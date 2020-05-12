import React, {createContext, useContext} from 'react';

import {HttpService} from './HttpService';
import StorageService from './StorageService';

export interface DependencyContext {
  storageService: StorageService;
  httpService: HttpService;
  updateGlobalState: () => void;
}

export enum DependencyType {
  STORAGE_SERVICE = 'storageService',
  HTTP_SERVICE = 'httpService',
}

export const DependencyInjection = createContext<Partial<DependencyContext>>(
  {},
);

export class DependenecyInjectionProvider extends React.Component<
  any,
  DependencyContext
> {
  constructor(props: any) {
    super(props);
    this.state = {
      storageService: new StorageService(),
      httpService: new HttpService(),
      updateGlobalState: this.updateGlobalState.bind(this),
    };
  }

  updateGlobalState() {
    this.setState({...this.state});
  }

  render() {
    return (
      <DependencyInjection.Provider value={this.state}>
        {this.props.children}
      </DependencyInjection.Provider>
    );
  }
}

export const withDependencyInjection = (
  ChildComponent: typeof React.Component,
  dependencies: DependencyType[],
) => (props: any) => {
  const context = useContext(DependencyInjection);
  const injection: any = {updateGlobalState: context.updateGlobalState};
  dependencies.forEach(dependency => {
    injection[dependency] = context[dependency];
  });
  return <ChildComponent {...props} {...injection} />;
};
