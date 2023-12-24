import { useState } from "react";
import styled from "styled-components";
import USERS from "./data/users.json";
import Table from "./table";

const beautifyPhone = (phoneNumber) => {
  let cleanNumber = phoneNumber.replace(/\D/g, "");

  return cleanNumber.length === 10
    ? `(${cleanNumber.substring(0, 3)}) ${cleanNumber.substring(
        3,
        6
      )}-${cleanNumber.substring(6)}`
    : "Invalid phone number";
};

const fieldOptions = [
  {
    fieldName: "id",
    headerName: "ID",
    width: "5%",
    // render: ({ row }) => <div>{row.id}</div>,
    // render: ({ row }) => <input type="checkbox" checked={row.isChecked} />,
    color: "#96cec5",
    selection: true,
    selectionIdentifier: "id", // "id" | (row) => (value, index, array) => value.id === row.id,
  },
  {
    fieldName: "firstName",
    headerName: "First Name",
    sortable: true,
    sortFieldName: "firstName",
    filterable: true,
    filterFieldName: "firstName",
    width: "19%",
    render: ({ row }) => <div>{`Dr. ${row.firstName}`}</div>,
    color: "#f1f1f1",
  },
  {
    fieldName: "lastName",
    headerName: "Last Name",
    sortable: true,
    sortFieldName: "lastName",
    filterable: true,
    filterFieldName: "lastName",
    width: "19%",
    color: "#e9aa52",
  },
  {
    fieldName: "email",
    headerName: "Email",
    sortable: true,
    sortFieldName: "email",
    filterable: true,
    filterFieldName: "email",
    width: "19%",
    color: "#d97653",
  },
  {
    fieldName: "phone",
    headerName: "Phone",
    sortable: true,
    sortFieldName: "phone",
    filterable: true,
    filterFieldName: "phone",
    width: "19%",
    render: ({ row }) => <div>{beautifyPhone(row.phone)}</div>,
    color: "#8f723c",
  },
  {
    fieldName: "address",
    headerName: "Address",
    sortable: true,
    sortFieldName: "address",
    filterable: true,
    filterFieldName: "address",
    width: "19%",
    render: ({ row }) => <div>{row.address}</div>,
    color: "#664833",
  },
];

const options = {
  name: "Users",
  fieldOptions,
  searchable: true,
  pagination: true,
  identifier: "id", // "id" | (row) => (value, index, array) => value.id === row.id,
};

const App = () => {
  const [users, setUsers] = useState(USERS);
  return (
    <StyledApp>
      <Table options={options} data={users} /* setUsers={setUsers} */ />
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  // background-color: #ff6961;
`;
