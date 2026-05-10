import { Select, Checkbox } from "antd";
import { useState } from 'react'

const BaseComp = ({
    name,
    description,
    price,
    isSelect,
    selOptions,
    isCheckbox,
    checkValue,

    onSelectChange,
    onCheckboxChange,
    currentSelectedOption,
    currentChecked
}) => {
    return (
        <>
            <h3>{name}</h3>
            <p>{description}</p>
            {isSelect===true && (
            <Select value={currentSelectedOption} onChange={onSelectChange} options={selOptions}/>)}
            {isCheckbox===true && (
                <Checkbox checked={currentChecked} onChange={(e) => onCheckboxChange(e.target.checked)}>Option</Checkbox>
            )}
        </>
    )
}

export default BaseComp;