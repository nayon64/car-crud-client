import React, { useEffect, useState } from 'react';

const OrderItem = ({ order, handleDelete }) => {
  const { _id, customer, price, serviceName, phone, service } = order;
  let [orderItem, setOrderItem] = useState({});
  useEffect(() => {
    fetch(`https://car-crud-server.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderItem(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-28 h-28">
              {orderItem.img && (
                <img src={orderItem.img} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">{price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default OrderItem;