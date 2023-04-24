interface TableProps {
  tableHeaders: Array<string>;
  tableData: Array<any>;
  showButtons?: Boolean;
  setEdit: Function;
  deleteContact: Function;
}

export const ContactTable = ({
  tableData,
  tableHeaders,
  showButtons,
  setEdit,
  deleteContact,
}: TableProps) => {
  return (
    <div className="flex flex-col my-5">
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          <div className="overflow-scroll border rounded-l">
            <table className="min-w-full divide-y divide-grey-300">
              <thead className="bg-gray-100">
                <tr>
                  {tableHeaders.map((header: any) => {
                    return (
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        {header}
                      </th>
                    );
                  })}

                  {showButtons && (
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    ></th>
                  )}
                  {showButtons && (
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    ></th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tableData.map((tableRow: any) => {
                  const { id, firstName, lastName, status } = tableRow;
                  return (
                    <tr>
                      <td className="px-5 py-4 text-sm font-normal text-gray-00 whitespace-nowrap capitalize">
                        {id}
                      </td>
                      <td className="px-5 py-4 text-sm font-normal text-gray-00 whitespace-nowrap capitalize">
                        {firstName}
                      </td>
                      <td className="px-5 py-4 text-sm font-normal text-gray-00 whitespace-nowrap capitalize">
                        {lastName}
                      </td>
                      <td className="px-5 py-4 text-sm font-normal text-gray-00 whitespace-nowrap capitalize">
                        {status}
                      </td>

                      {showButtons && (
                        <td
                          className="px-5 py-4 text-sm font-bold text-right whitespace-nowrap"
                          onClick={() => {
                            setEdit(tableRow["id"]);
                          }}
                        >
                          <a
                            className="text-blue-400 hover:text-blue-600"
                            href="#"
                          >
                            Edit
                          </a>
                        </td>
                      )}
                      {showButtons && (
                        <td
                          className="px-5 py-4 text-sm font-bold text-right whitespace-nowrap"
                          onClick={() => {
                            deleteContact(tableRow["id"]);
                          }}
                        >
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="#"
                          >
                            Delete
                          </a>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
