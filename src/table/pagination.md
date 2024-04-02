# Pageable Data Retrieval System Documentation

This document outlines the structure and use of the Pageable Data Retrieval System. This system provides a standardized way to request, retrieve, and manage paginated data with sorting and filtering capabilities from a server or database. The system is designed to be flexible, allowing for the retrieval of any type of data (`T`) in a paginated format, with the ability to sort and filter the results according to various criteria.

## Interfaces and Enums

### PaginationRequest

Defines the structure for making pagination requests.

- `pageNumber`: Integer indicating the current page number being requested.
- `pageSize`: Integer specifying the number of items per page.

### PaginationResponse

Defines the structure for pagination responses from the server or database.

- `pageNumber`: Integer indicating the current page number being returned.
- `pageSize`: Integer specifying the number of items per page.
- `totalElements`: Integer indicating the total number of items available across all pages.
- `totalPages`: Integer specifying the total number of pages available.

### SortField

Defines the structure for specifying sorting fields in requests.

- `field`: String indicating the name of the field to sort by.
- `direction`: `SortDirection` indicating the direction of sorting (ascending or descending).

### SortDirection

An enumeration specifying the direction of sorting.

- `ASC`: Ascending order.
- `DESC`: Descending order.

### Filter

Defines the structure for specifying filters in requests.

- `field`: String indicating the name of the field to filter by.
- `value`: String specifying the value to filter for.
- `operation`: `FilterOperation` indicating the type of filtering operation to perform.

### FilterOperation

An enumeration specifying the types of filter operations.

- `EQUALS`: Equal to.
- `NOT_EQUALS`: Not equal to.
- `GREATER_THAN`: Greater than.
- `LESS_THAN`: Less than.
- `CONTAINS`: Contains.
- `NOT_CONTAINS`: Does not contain.

### PageRequest

Defines the structure for making page requests, combining pagination, sorting, and filtering criteria.

- `pagination`: `PaginationRequest` detailing the pagination request.
- `sort`: Array of `SortField` indicating the sorting criteria.
- `filters`: Array of `Filter` specifying the filtering criteria.

### PageResponse<T>

Defines the structure for page responses, including the content and pagination response, along with sorting and filtering details.

- `content`: Array of `T` containing the page's data.
- `pagination`: `PaginationResponse` detailing the pagination response.
- `filters`: Array of `Filter` indicating the filtering criteria used.
- `sort`: Array of `SortField` specifying the sorting criteria used.

## Functions

### fetchPage

A function to fetch a page of data based on the given `PageRequest`.

- **Input**: `PageRequest` containing the pagination, sorting, and filtering criteria.
- **Output**: `PageResponse<T>` containing the fetched content, along with pagination response and request details for filtering and sorting.

This function implements the logic to fetch data from a server according to the parameters in `request`. It handles pagination, sorting, and filtering based on the request details. The `totalElements` and `totalPages` are calculated based on the data and pagination request.

### getPage

A function to retrieve a page of data from the database based on the given `PageRequest`.

- **Input**: `PageRequest` detailing the pagination, sorting, and filtering criteria.
- **Output**: `PageResponse<T>` containing the retrieved data, along with pagination response and request details for filtering and sorting.

This function implements the logic to retrieve data from a database according to the parameters in `request`. It handles pagination, sorting, and filtering as specified in the request. The `totalElements` and `totalPages` are calculated based on the data and pagination request.

## Additional Information

The Pageable Data Retrieval System is designed to be implemented in any backend system that requires efficient data retrieval with flexible sorting and filtering capabilities. It's suitable for applications where data needs to be presented in a paginated format to the user, such as in web applications, APIs, or any client-server architecture scenarios.

Implementers of this system should ensure that their server or database is optimized to handle sorting and filtering efficiently, especially when dealing with large datasets. Proper indexing and query optimization can significantly improve the performance of the data retrieval process.
