import { useTable, useSortBy } from "react-table";

// eslint-disable-next-line react/prop-types
const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table
      {...getTableProps()}
      style={{ border: "1px solid black", width: "100%" }}
    >
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, j) => (
              <th
                key={j}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={i} {...row.getRowProps()}>
              {row.cells.map((cell, j) => (
                <td key={j} {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// Example usage
const SortingTable = () => {
  const columns = [
    {
      Header: "Campaigns",
      accessor: "campaigns",
    },
    {
      Header: "Clicks",
      accessor: "clicks",
    },
    {
      Header: "Cost",
      accessor: "cost",
    },
    {
      Header: "Conversions",
      accessor: "conversions",
    },
    {
      Header: "Revenue",
      accessor: "revenue",
    },
  ];

  const data = [
    {
      campaigns: "Hello",
      clicks: 10,
      cost: "INR",
      conversions: 20,
      revenue: 343,
    },
    {
      campaigns: "World",
      clicks: 100,
      cost: "INR",
      conversions: 20,
      revenue: 565,
    },
    {
      campaigns: "Earth",
      clicks: 1000,
      cost: "INR",
      conversions: 20,
      revenue: 2343,
    },
    {
      campaigns: "Asia",
      clicks: 10000,
      cost: "INR",
      conversions: 20,
      revenue: 6787753,
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default SortingTable;
