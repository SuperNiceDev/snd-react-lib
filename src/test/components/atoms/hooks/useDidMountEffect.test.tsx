import { useState } from "react";

import { act, renderHook } from "@testing-library/react";
import useDidMountEffect from "snd-react-lib/hooks/useDidMountEffect";

describe("useDidMountEffect", () => {
  it("does not call callback on initial mount", () => {
    const callback = jest.fn();

    const { rerender } = renderHook(
      ({ deps }) => {
        useDidMountEffect(callback, deps);
      },
      {
        initialProps: { deps: [] },
      },
    );

    expect(callback).not.toHaveBeenCalled();

    // rerender without changing deps
    rerender({ deps: [] });
    expect(callback).not.toHaveBeenCalled();
  });

  it("calls callback when dependencies change after mount", () => {
    const callback = jest.fn();
    let dep = 0;

    const { rerender } = renderHook(
      ({ value }) => {
        useDidMountEffect(callback, [value]);
      },
      {
        initialProps: { value: dep },
      },
    );

    expect(callback).not.toHaveBeenCalled(); // initial mount

    // update dependency
    dep = 1;
    rerender({ value: dep });
    expect(callback).toHaveBeenCalledTimes(1);

    // update again
    dep = 2;
    rerender({ value: dep });
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("does not call callback if deps stay the same after mount", () => {
    const callback = jest.fn();

    const { rerender } = renderHook(
      ({ value }) => {
        useDidMountEffect(callback, [value]);
      },
      {
        initialProps: { value: 1 },
      },
    );

    rerender({ value: 1 });
    rerender({ value: 1 });
    expect(callback).not.toHaveBeenCalled();
  });

  it("works with state change", () => {
    const callback = jest.fn();

    const { result } = renderHook(() => {
      const [count, setCount] = useState(0);
      useDidMountEffect(callback, [count]);
      return { count, setCount };
    });

    // Initial render, callback should not be called
    expect(callback).not.toHaveBeenCalled();

    // Change state to trigger callback
    act(() => {
      result.current.setCount(1);
    });

    expect(callback).toHaveBeenCalledTimes(1);

    // Change again
    act(() => {
      result.current.setCount(2);
    });

    expect(callback).toHaveBeenCalledTimes(2);
  });
});
