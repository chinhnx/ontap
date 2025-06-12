import React from 'react'
import Add from '../assets/Add button.svg'
import Status from '../assets/user status.svg'
import { Button, Dropdown, message, Space, type MenuProps } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items: MenuProps['items'] = [
  {
    label: 'Sẵn sàng',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const Header = () => {
  return (
    <header className=" bg-white ">
      <div className='h-[60px] flex justify-between items-center py-[19px] px-5'>
        <div className=''>
          <img src={Add} alt="" />
        </div>
        <div className='flex items-center'>
          <p className='text-[14px] font-normal pr-2.5'>Trạng thái nhân viên</p>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                <img src={Status} alt="" />
                <p className='py-2.5'>Sẵn sàng</p>
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>

        </div>

      </div>
    </header>
  )
}

export default Header