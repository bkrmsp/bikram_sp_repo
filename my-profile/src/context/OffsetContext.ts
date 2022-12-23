import { createContext, Dispatch, SetStateAction } from 'react';

const OffsetContext = createContext<[number, Dispatch<SetStateAction<number>>]>([0, () => { }]);

export default OffsetContext;