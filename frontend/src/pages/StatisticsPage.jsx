import StatsCard from '../components/StatsCard'
import ChartComponent from '../components/ChartComponent'
import FormComponent from '../components/FormComponent'
import DataTable from '../components/DataTable'

export default function StatisticsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Statistics</h1>
        <p className="text-slate-400">Track player performance and team analytics</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Performance Analytics</h1>
          <p className="text-slate-400">Track player statistics and team performance</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"total_points","label":"Total Points Scored","value":"1,248","icon":"star","color":"red"},{"id":"avg_attendance","label":"Average Attendance","value":"87%","icon":"percentage","color":"purple"}]} />

      <ChartComponent key="2" type="bar" title="Player Performance Overview" data={{"labels":["Points","Kills","Blocks","Aces","Digs","Assists"],"datasets":[{"label":"Team Totals","data":[1248,856,423,178,634,567]}]}} />

      <FormComponent key="3" title="Record Player Statistics" fields={[{"name":"playerId","label":"Player","type":"select","required":true,"options":[]},{"name":"matchId","label":"Match","type":"select","required":true,"options":[]},{"name":"setsPlayed","label":"Sets Played","type":"number","required":true},{"name":"points","label":"Points Scored","type":"number","required":false},{"name":"kills","label":"Kills","type":"number","required":false},{"name":"blocks","label":"Blocks","type":"number","required":false},{"name":"aces","label":"Aces","type":"number","required":false},{"name":"digs","label":"Digs","type":"number","required":false},{"name":"assists","label":"Assists","type":"number","required":false},{"name":"errors","label":"Errors","type":"number","required":false},{"name":"attendance","label":"Attendance","type":"select","required":true,"options":["Present","Absent","Late"]}]} />

      <DataTable key="4" columns={["Player","Match","Points","Kills","Blocks","Aces","Attendance","Actions"]} rows={[]} />
    </div>
  )
}
