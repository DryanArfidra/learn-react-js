import useCounter from './useCounter';
import useToggle from './useToggle';

function useCounterWithToggle(initialCount = 0) {
  const { count, increment, decrement } = useCounter(initialCount);
  const [isToggled, toggle] = useToggle(false);
  return { count, increment, decrement, isToggled, toggle };
}

export default useCounterWithToggle;