import React, { ReactNode } from 'react';
import useAfterFirstTruthy from './useAfterFirstTruthy';

export type LazyMountProps = {
  children: ReactNode;
  trigger: boolean;
}

const LazyMount = ({ children, trigger }: LazyMountProps) => {
  const isMounted = useAfterFirstTruthy(trigger);

  return <>{isMounted && children}</>;
};

export default LazyMount;
