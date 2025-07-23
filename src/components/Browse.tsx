import React, { useState, useMemo } from "react";

type Column<T> = {
  header: string;
  accessor: keyof T;
};

type BrowseProps<T> = {
  columns: Column<T>[];
  data: T[];
  footerContent?: React.ReactNode;
  title?: string;
  subtitle?: string;
  headerActions?: React.ReactNode; 
};


function Browse<T extends Record<string, any>>({
  columns,
  data,
  footerContent,
  title,
  subtitle,
  headerActions,
}: BrowseProps<T>) {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!search.trim()) return data;
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  return (
    <div className="bg-white shadow-md">
      {/* Header */}
      <div className="p-4 bg-accent border-b border-light">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            {title && <h2 className="text-xl font-bold text-light">{title}</h2>}
            {subtitle && <p className="text-sm text-light">{subtitle}</p>}
          </div>

          <div className="flex items-center gap-2">
            

            <div className="relative w-2xs">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-light">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-light rounded focus:outline-none focus:ring-2 focus:ring-light text-sm placeholder-light font-semibold text-light"
              />
            </div>

            {headerActions && <div>{headerActions}</div>}

          </div>
        </div>
      </div>


      {/* Table */}
      <div className="overflow-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gradient-to-r from-gradient-from to-gradient-to text-accent">
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 font-semibold text-left border-b border-zinc-300"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="hover:bg-light transition-colors border-b border-light"
                >
                  {columns.map((col, colIdx) => (
                    <td key={colIdx} className="px-4 py-3 text-dark">
                      {String(row[col.accessor])}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center p-4 text-accent"
                >
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      {footerContent && (
        <div className="p-4 bg-light border-t-accent text-sm font-semibold text-accent">
          {footerContent}
        </div>
      )}
    </div>
  );
}

export default Browse;
