import { Col, Row} from 'antd';
import { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import './Card.css';

const Card = forwardRef(({imgSrc, name, price }, ref) => {

    const [quantity, setQuantity] = useState(0);

    const handleClick = (operation) => {
        if (operation === 'increment') {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else if (operation === 'decrement') {
            setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const numValue = parseInt(value) || 0;
            setQuantity(numValue);
        }
    };

    useImperativeHandle(ref, () => ({
        getCardData: () => ({
            price,
            quantity,
            name
        })
    }));

    return (
        <>
            <Row align="middle" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={4}><img src={imgSrc} /></Col>
                <Col span={6}>{name}</Col>
                <Col span={3}>{price} $</Col>
                <Col span={1}>
                    <Row><button onClick={() => handleClick('increment')}>^</button></Row>
                    <Row><button onClick={() => handleClick('decrement')} className='reverse'>^</button></Row>
                </Col>
                <Col span={1}><input type='text' value={quantity} onChange={handleInputChange}/></Col>
            </Row>
        </>
    );
});

export default Card