import StatsCard from '../components/StatsCard'
import FormComponent from '../components/FormComponent'
import DataTable from '../components/DataTable'

export default function Matches_listPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Matches</h1>
        <p className="text-slate-400">Schedule and manage volleyball matches and track results</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Match Management</h1>
          <p className="text-slate-400">Schedule upcoming matches and track results</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"upcoming_matches","label":"Upcoming Matches","value":"3","icon":"calendar-alt","color":"green"},{"id":"wins_this_season","label":"Wins This Season","value":"12","icon":"trophy","color":"yellow"}]} />

      <FormComponent key="2" title="Schedule New Match" fields={[{"name":"opponent","label":"Opponent Team","type":"text","required":true},{"name":"matchDate","label":"Match Date","type":"date","required":true},{"name":"matchTime","label":"Match Time","type":"time","required":true},{"name":"venue","label":"Venue","type":"text","required":true},{"name":"matchType","label":"Match Type","type":"select","required":true,"options":["League","Tournament","Friendly","Championship"]},{"name":"homeAway","label":"Home/Away","type":"select","required":true,"options":["Home","Away"]},{"name":"notes","label":"Match Notes","type":"textarea","required":false}]} />

      <DataTable key="3" columns={["Opponent","Date","Time","Venue","Type","Result","Actions"]} rows={[]} />
    </div>
  )
}
