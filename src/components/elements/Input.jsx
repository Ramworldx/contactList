import React from 'react'

const Input = (props) => {
    const {
        type='text',
        value='',
        onChange,
        required='required',
        placeholder='Contact Name',
        className='CreateContact__nameInput',
        autoFocus,
        pattern,
        onClick,
        size,
        minLength,
        maxLength,
        title
    } = props

    return (
        <>
            <input type={type} onChange={onChange} value={value} required={required} onClick={onClick}
                placeholder={placeholder} className={className} pattern={pattern} autoFocus={autoFocus}
                size={size} minLength={minLength} maxLength={maxLength} title={title}/>
        </>
    )
}

export default Input