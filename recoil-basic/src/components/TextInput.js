import React from 'react'
import { useRecoilState } from 'recoil'
import { testState } from '../App'

const TextInput = () => {
    const [text, setText] = useRecoilState(testState);
    return (
        <div>
            <input
                input value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br/>
            Echo: {text}
        </div>
    )
}

export default TextInput