import React, { Suspense, SuspenseProps } from 'react';
import useAfterFirstTruthy from './useAfterFirstTruthy';

export type LazyMountProps = {
  trigger?: boolean;
  children?: SuspenseProps['children'];
  /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
  fallback?: SuspenseProps['fallback'];
}

const LazyMount = ({ children, trigger = false, fallback }: LazyMountProps) => {
  const isMounted = useAfterFirstTruthy(trigger);

  if (!isMounted) {
    return null;
  }

  if (fallback) {
    return (
      <Suspense fallback={fallback} >
        {children}
      </Suspense>
    )
  }

  return <>{children}</>;
};

export default LazyMount;
