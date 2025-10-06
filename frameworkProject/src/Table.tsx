import React from 'react';
import { ConfigProvider, Table } from 'antd';

const { Column, ColumnGroup } = Table;

interface DataType {
  num: React.Key;
  type: string;
  size: string;
  reference: string;
  paycheck: number;
  deadline: string;
  hurry: string;
  status: string;
}

const data: DataType[] = [
  {
    num: '1',
    type: 'UE project',
    size: 'ОГРОМНЫЙ',
    reference: 'нет',
    paycheck: 888,
    deadline: 'завтра',
    hurry: 'нет',
    status: 'отменён',
  },
  {
    num: '2',
    type: 'Unity project',
    size: 'средний',
    reference: 'да',
    paycheck: 0,
    deadline: 'вчера',
    hurry: 'да',
    status: 'не начат',
  },
  {
    num: '3',
    type: 'HTML/CSS',
    size: '-',
    reference: '-',
    paycheck: -1,
    deadline: '-',
    hurry: 'нет',
    status: 'обсуждается',
  },
  {
    num: '4',
    type: 'HTML/CSS',
    size: 'Маленький',
    reference: 'да',
    paycheck: 0,
    deadline: '05.10.2025',
    hurry: 'нет',
    status: 'выполнен',
  }
]

const TableOfOrder: React.FC = () => (
  <>
    <ConfigProvider
      theme={{
        components: {
          Table: {
            fontFamily: 'Ubuntu',
            colorText: 'white',
            colorTextHeading: 'white',
            colorBgContainer: '#00296b',
          }
        },
      }}
    >
    <Table<DataType> dataSource={data} pagination={false}  >
      <ColumnGroup title="Основное по заказу">
        <Column title="Тип" dataIndex="type" key="type" />
        <Column title="Размер (по наитию)" dataIndex="size" key="size" />
        <Column title="Наличие Референса" dataIndex="reference" key="reference" />
      </ColumnGroup>
        <Column title="Оплата (в $)" dataIndex="paycheck" key="paycheck"/>
        <Column title="Дедлайн" dataIndex="deadline" key="deadline"/>
        <Column title="Торопят?" dataIndex="hurry" key="hurry"/>
        <Column title="Статус" dataIndex="status" key="status"/>
    </Table>
    </ConfigProvider>
  </>
);

export default TableOfOrder;