import { useRef } from 'react';

export default function useAfterFirstTruthy(val: boolean) {
  const mounted: any = useRef();

  if (val && !mounted.current) {
    mounted.current = true;
  }

  if (mounted.current) return true;

  return false;
}
