import UserList from "@/components/UserList";
import prisma from "@/utils/connection";
import React from "react";

const Users = async () => {
  const users = await prisma.user.findMany();

  return <div>{users && <UserList users={users} />}</div>;
};

export default Users;
