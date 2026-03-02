export default function DataTable({ columns = [], rows = [] }) {
  return (
    <div className="card overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-900/50">
              {columns.map((col, i) => (
                <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-slate-700/50 transition-colors">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-3 text-sm">
                    {col === 'Status' ? (
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        ['Active', 'Completed', 'Delivered'].includes(row[col])
                          ? 'bg-green-500/20 text-green-400'
                          : ['Processing', 'Pending'].includes(row[col])
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-slate-500/20 text-slate-400'
                      }`}>
                        {row[col]}
                      </span>
                    ) : (
                      row[col]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
