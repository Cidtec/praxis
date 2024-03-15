import { ReactNode } from "react";

interface Props<T> {
  bodyTableJSX(children:(row:T) => JSX.Element): ReactNode;
  columnsTable: string[];
  handleEdit: (row:T) => void;
  handleDelete: (row:T) => void;
}
const TableComponent =<T,> ({
  bodyTableJSX,
  columnsTable,
  handleDelete,
  handleEdit,
}: Props <T>) => {
  function ActionsJSX(row: T) {
    return (
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={() => handleEdit(row)}
        >
          Edit
        </button>
        <button
          className="ml-4 text-red-500 hover:text-red-700"
          onClick={() => handleDelete(row)}
        >
          Delete
        </button>
      </td>
    );
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columnsTable.map((column, index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column}
            </th>
          ))}
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Operations
          </th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {bodyTableJSX((row) => ActionsJSX(row))}
      </tbody>
    </table>
  );
};

export default TableComponent;
