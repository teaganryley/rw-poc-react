import { useState } from 'react';

const useObjectState = (initialState = {}) => {
    const [localState, _setLocalState] = useState(initialState);
    const setLocalState = fieldAndValue => _setLocalState({ ...localState, ...fieldAndValue });

    return [localState, setLocalState];
};

export default useObjectState;
