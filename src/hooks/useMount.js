import { useEffect } from 'react';

const noop = () => {}
const useMount = (onMount = noop) => useEffect(onMount, []);

export default useMount;
