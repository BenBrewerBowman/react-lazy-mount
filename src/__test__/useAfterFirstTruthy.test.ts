import { renderHook, act } from '@testing-library/react-hooks';
import testUseAfterFirstTruthy from '../useAfterFirstTruthy';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('useAfterFirstTruthy', () => {
  test('returns true only after first time boolean is true', () => {
    const hook = renderHook (props => testUseAfterFirstTruthy(props), {
      initialProps: false,
    });

    // false at first
    expect(hook.result.current).toBe(false);

    // returns true after first rising edge of boolean
    act(() => hook.rerender(true));
    expect(hook.result.current).toBe(true);

    // remains true after falling edge
    act(() => hook.rerender(false));
    expect(hook.result.current).toBe(true);
  });
});
