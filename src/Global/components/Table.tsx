import { ReactNode } from "react";
import { useSidebarContext } from "../../Layout/DefaultLayoutContext";
import Loader from "./Loader/Loader";

interface Props<T> {
  loading?: boolean;
  bodyTableJSX(children: (row: T) => JSX.Element): ReactNode;
  columnsTable: string[];
  handleEdit: (row: T) => void;
  handleDelete: (row: T) => void;
  idTable?: string;
}
const TableComponent = <T,>({
  loading,
  bodyTableJSX,
  columnsTable,
  handleDelete,
  handleEdit,
  idTable
}: Props<T>) => {
  const { active } = useSidebarContext();

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

  const thClasses = [
    "px-6 py-3 text-left text-xs font-black uppercase tracking-wider whitespace-nowrap",
  ];
  thClasses.push(active.color.text);

  const bodyClasses = ["bg-white divide-y"];
  bodyClasses.push(active.color.divide);

  return (
    <div className="w-full overflow-auto flex-1 bg-white rounded-lg">
      {loading ? (
        <Loader color={active.color.text} />
      ) : (
        <table id={idTable} className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0">
            <tr className={active.color.bg_light}>
              {columnsTable.map((column, index) => (
                <th key={index} className={thClasses.join(" ")}>
                  {column}
                </th>
              ))}
              <th className={thClasses.join(" ")}>Acciones</th>
            </tr>
          </thead>

          <tbody className={bodyClasses.join(" ")}>
            {bodyTableJSX((row) => ActionsJSX(row))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableComponent;
