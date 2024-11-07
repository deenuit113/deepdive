import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountState } from '../App.js'

const CharacterCount = () => {
    const count = useRecoilValue(charCountState);
    return (
        <div>{count}</div>
    )
}

export default CharacterCount