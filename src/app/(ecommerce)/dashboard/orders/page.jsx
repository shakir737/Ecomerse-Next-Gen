import OrderList from "@/components/OrderList";
import React from "react";
import prisma from "@/utils/connection";
const Orders = async () => {
  // const orders = await prisma?.order?.findMany({
  //   where: { isPaid: true },
  //   take: 10,
  //   skip: 0,
  //   include: { OrderItem: { include: { product: true } }, addressInfo: true },
  // });

  return (
    <>
      <div></div>
    </>
  );
};

export default Orders;
