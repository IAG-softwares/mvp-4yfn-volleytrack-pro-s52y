export default function StatsCard({ data = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div key={index} className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">{item.label}</span>
            <i className={`fa-solid fa-${item.icon || 'chart-simple'} text-blue-400`}></i>
          </div>
          <p className="text-2xl font-bold">{item.value}</p>
          {item.change && (
            <p className={`text-xs ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {item.change} from last period
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
