import { Flex, Radio, InputNumber } from 'antd';
import { useState, useEffect } from 'react'
import BaseComp from './BaseComponent';
import '/src/App.css'

const CompCh = () => {
    const [value, setValue] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [summ, setSumm] = useState(100);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    const contentData = [
        { id: 1, name: 'One', description: 'Description for variant 1', price: 100},
        { id: 2, name: 'Two', description: 'Description for variant 2', price: 200, isSelect: true, 
            selOptions: [
                {value: 100, label: 'A: 100'},
                {value: 200, label: 'B: 200'},
                {value: 300, label: 'C: 300'}
            ]
        },
        { id: 3, name: 'Three', description: 'Description for variant 3', price: 300, isCheckbox: true, checkValue: 100},
    ];

    const calculateSum = () => {
        const currentItem = contentData.find(item => item.id === value);
        let total = currentItem?.price || 0;

        if (currentItem?.isSelect && selectedOption) {
            total += selectedOption;
        }

        if (currentItem?.isCheckbox && isChecked) {
            total += currentItem.checkValue;
        }

        return total * quantity;
    };

    useEffect(() => {
        setSumm(calculateSum());
    }, [value, quantity, selectedOption, isChecked]);

    const onChange = (e) => {
        setValue(e.target.value);
        setSelectedOption(null);
        setIsChecked(false);
        setQuantity(1);
    };

    const handleSelectChange = (selectedValue) => {
        setSelectedOption(selectedValue);
    };

    const handleCheckboxChange = (checked) => {
        setIsChecked(checked);
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity || 1);
    };

    const currentItem = contentData.find(item => item.id === value);

    return ( 
        <>
            <Flex align='center' justify='center' vertical='true'>
                <InputNumber min={1} max={100} value={quantity} onChange={handleQuantityChange}/>

                <Radio.Group
                    onChange={onChange}
                    value={value}
                    options={contentData.map(item => ({
                        value: item.id,
                        label: `Var. ${item.id}`,
                    }))}
                />

                <div>
                    {contentData.map(item => (
                        <div
                            key={item.id}
                            className={`content ${value === item.id ? 'active' : ''}`}
                        >
                            <BaseComp 
                                name={item.name} 
                                description={item.description} 
                                isSelect={item.isSelect} 
                                selOptions={item.selOptions}
                                isCheckbox={item.isCheckbox}
                                checkValue={item.checkValue}

                                onSelectChange={handleSelectChange}
                                onCheckboxChange={handleCheckboxChange}
                                currentSelectedOption={selectedOption}
                                currentChecked={isChecked}
                            />
                        </div>
                    ))}
                </div>
                <p>price: {summ}</p>
            </Flex>
        </>
    )
}

export default CompCh;