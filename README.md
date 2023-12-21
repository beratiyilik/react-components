
# @beratiyilik/react-components

## Description
@beratiyilik/react-components is a collection of efficient and type-safe components implemented in React. This library currently includes a dynamic and customizable table component and plans to expand with reusable components such as autocomplete in the future.

## Getting Started

### Installation

To add this component library to your project, use the following NPM or Yarn command:

```bash
npm install @beratiyilik/react-components
# or
yarn add @beratiyilik/react-components
```

### Usage

To use the `Table` component in your project:

```javascript
import React from 'react';
import { Table } from '@beratiyilik/react-components';
import users from './data/users.json'; // Example data

const App = () => {
  // Table settings and options
  const options = {
    name: "Users", // Name of the table
    fieldOptions: [
      // Configuration options for each column
      {
        fieldName: "firstName", // Field name
        headerName: "First Name", // Header name
        sortable: true, // Allows sorting
        filterable: true, // Allows filtering
        width: "20%", // Column width
        // Custom render function (optional)
        render: ({ row }) => <div>{row.firstName}</div>,
      },
      // Similar configurations for other fields...
    ],
    searchable: true, // Enable search functionality
    pagination: true, // Enable pagination
  };

  return <Table options={options} data={users} />;
};

export default App;
```

### Features

- **Table:** Currently, a flexible table component with features like sorting, filtering, and customizable column rendering is available.
- **Customizability:** Components come with various customization options.
- **Type Safety:** Developed with TypeScript, offering type-safe usage.

## Contributing

If you want to contribute to the project, please follow these steps:

1. Fork the project.
2. Create a new branch for your feature or fix (`git checkout -b feature/your_feature`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to your branch (`git push origin feature/your_feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.
