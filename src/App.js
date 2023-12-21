import logo from "./logo.svg";
import "./App.css";
import Table from "./table";
import users from "./data/users.json";

const maskPhone = (value) => value.replace(/\D/g, "").slice(0, 10);

const fieldOptions = [
  {
    fieldName: "firstName",
    headerName: "First Name",
    sortable: true,
    sortFieldName: "firstName",
    filterable: true,
    filterFieldName: "firstName",
    width: "20%",
    render: ({ row }) => <div>{`render ${row.firstName}`}</div>,
    color: "red",
  },
  {
    fieldName: "lastName",
    headerName: "Last Name",
    sortable: true,
    sortFieldName: "lastName",
    filterable: true,
    filterFieldName: "lastName",
    width: "20%",
    color: "blue",
  },
  {
    fieldName: "email",
    headerName: "Email",
    sortable: true,
    sortFieldName: "email",
    filterable: true,
    filterFieldName: "email",
    width: "20%",
    color: "green",
  },
  {
    fieldName: "phone",
    headerName: "Phone",
    sortable: true,
    sortFieldName: "phone",
    filterable: true,
    filterFieldName: "phone",
    width: "20%",
    render: ({ row }) => <div>{maskPhone(row.phone)}</div>,
    color: "yellow",
  },
  {
    fieldName: "address",
    headerName: "Address",
    sortable: true,
    sortFieldName: "address",
    filterable: true,
    filterFieldName: "address",
    width: "20%",
    render: ({ row }) => <div>{row.address}</div>,
    color: "orange",
  },
];

const options = {
  name: "Users",
  fieldOptions,
  allFilter: true,
  pagination: true,
};

const App = () => {
  return (
    <div className="App">
      <Table options={options} data={users} />
    </div>
  );
};

export default App;
