import logo from "./logo.svg";
import "./App.css";
import Table from "./table";
import users from "./data/users.json";

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
    color: "purple",
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
    color: "red",
  },
  {
    fieldName: "lastName",
    headerName: "Last Name",
    sortable: true,
    sortFieldName: "lastName",
    filterable: true,
    filterFieldName: "lastName",
    width: "19%",
    color: "blue",
  },
  {
    fieldName: "email",
    headerName: "Email",
    sortable: true,
    sortFieldName: "email",
    filterable: true,
    filterFieldName: "email",
    width: "19%",
    color: "green",
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
    color: "yellow",
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
    color: "orange",
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
  return (
    <div className="App">
      <Table options={options} data={users} />
    </div>
  );
};

export default App;
