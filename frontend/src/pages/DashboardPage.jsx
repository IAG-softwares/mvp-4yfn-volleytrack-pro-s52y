import StatsCard from '../components/StatsCard'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-slate-400">Overview of club performance with key metrics and recent activity</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Club Dashboard</h1>
          <p className="text-slate-400">Overview of your volleyball club's performance</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"total_players","label":"Total Players","value":"24","icon":"users","color":"blue"},{"id":"upcoming_matches","label":"Upcoming Matches","value":"3","icon":"calendar-alt","color":"green"},{"id":"wins_this_season","label":"Wins This Season","value":"12","icon":"trophy","color":"yellow"},{"id":"avg_attendance","label":"Average Attendance","value":"87%","icon":"percentage","color":"purple"},{"id":"total_points","label":"Total Points Scored","value":"1,248","icon":"star","color":"red"},{"id":"active_players","label":"Active Players","value":"22","icon":"user-check","color":"indigo"}]} />

      <div key="2" className="card">
        <p className="text-slate-400">Component: card</p>
      </div>

      <div key="3" className="card">
        <p className="text-slate-400">Component: card</p>
      </div>
    </div>
  )
}
