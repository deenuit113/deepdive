import React from 'react'

const Option = ({ name, updateItemCount }) => {

    return (
        <form>
            <input
                type='checkbox'
                id={`${name} option`}
                onClick={(e) => updateItemCount(name, e.target.checked)}
            />
            <label htmlFor={`${name} option`}>{name}</label>
        </form>
    )
}

export default Option