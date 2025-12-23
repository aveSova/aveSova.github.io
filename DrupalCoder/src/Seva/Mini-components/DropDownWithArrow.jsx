import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, ConfigProvider } from 'antd';
import { useState } from 'react';
import '../Styles/Seva.css'

const DropdownWithArrow = ({ label, items, img }) => {
    const [open, setOpen] = useState(false);
    
    return (
        <ConfigProvider
            theme={{
                components: {
                    Dropdown: {
                        colorText: 'white',
                        colorBgElevated: '#F14D34',
                        borderRadiusLG: 0,
                        borderRadiusSM: 0,
                        borderRadiusXS: 0,
                        controlItemBgHover: 'rgba(0, 0, 0, 0.3)',
                        paddingLG: 0,
                        paddingSM: 0,
                        paddingXS: 0,
                        paddingXXS: 6,
                        padding: 0,
                    }
                }
            }}
        >
            <Dropdown 
                menu={{ items }}
                placement="bottom"
                trigger={['hover']}
                onOpenChange={setOpen}
            >
                <div 
                    style={{
                        padding: '0',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    <span style={{pointerEvents: 'none', color: 'rgba(255, 255, 255, 0.8)'}}>{label}</span>
                    <div style={{
                        transition: 'transform 0.3s ease',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        alignItems: 'center',
                        margin: 0
                    }}>
                        <CaretDownOutlined style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.8)', display: 'contents'}} />
                    </div>
                </div>
            </Dropdown>
        </ConfigProvider>
    );
};

export default DropdownWithArrow;