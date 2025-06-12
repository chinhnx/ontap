import { Table } from "antd";
import { useEffect, useState } from 'react';
import axios from 'axios';

interface InsuranceOrder {
  channel: string;
  customer: string;
  contract: string;
  insurance: string;
  insuranceType: string;
  status: string;
  phone: string;
  start: string;
  end: string;
  issuanceDate: string;
}

const columns = [
  {
    title: "Kênh",
    dataIndex: "channel",
    key: "channel",
  },
  {
    title: "Khách hàng",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "Hợp đồng",
    dataIndex: "contract",
    key: "contract",
  },
  {
    title: "Bảo hiểm",
    dataIndex: "insurance",
    key: "insurance",
  },
  {
    title: "Loại bảo hiểm",
    dataIndex: "insuranceType",
    key: "insuranceType",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Ngày bắt đầu",
    dataIndex: "start",
    key: "start",
  },
  {
    title: "Ngày kết thúc",
    dataIndex: "end",
    key: "end",
  },
];

const Oders = () => {
  const [orders, setOrders] = useState<InsuranceOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dev-api-insurance.baohiemtasco.vn/insur-policy/vetc-callcenter/v2/insur-order', {
          params: {
            ts_implement_user: 'tester1',
            key_search: '',
            limit: 25,
            offset: 0
          }
        });
        setOrders(response.data.data || []);
      } catch (err) {
        setError('Failed to load orders');
        console.error('Error fetching orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-[20px] font-semibold py-6 px-[22px]">Danh sách đơn hàng</h1>
      <div className="text-[14px] font-normal">
        <Table 
          columns={columns} 
          dataSource={orders} 
          loading={loading}
          rowKey={(record) => record.contract}
        />
      </div>
    </div>
  );
};

export default Oders;