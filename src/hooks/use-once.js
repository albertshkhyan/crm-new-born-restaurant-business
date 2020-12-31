import React from 'react';

const noop = () => { };
const useOnce = (onMount = noop) => React.useEffect(onMount, []);
export default useOnce;