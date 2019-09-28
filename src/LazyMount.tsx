import React, { ReactNode } from 'react';
import useAfterFirstTruthy from './useAfterFirstTruthy';

interface Props {
  children: ReactNode;
  trigger: boolean;
}

const LazyMount = ({ children, trigger }: Props) => {
  const isMounted = useAfterFirstTruthy(trigger);

  return <>{isMounted && children}</>;
};

export default LazyMount;
