import StatsCard from '../components/StatsCard'
import FormComponent from '../components/FormComponent'
import DataTable from '../components/DataTable'

export default function Players_listPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Players</h1>
        <p className="text-slate-400">Manage your volleyball team players and their profiles</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Players Management</h1>
          <p className="text-slate-400">Manage your team roster and player information</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"total_players","label":"Total Players","value":"24","icon":"users","color":"blue"},{"id":"active_players","label":"Active Players","value":"22","icon":"user-check","color":"green"}]} />

      <FormComponent key="2" title="Add New Player" fields={[{"name":"firstName","label":"First Name","type":"text","required":true},{"name":"lastName","label":"Last Name","type":"text","required":true},{"name":"email","label":"Email","type":"email","required":true},{"name":"phone","label":"Phone Number","type":"tel","required":false},{"name":"dateOfBirth","label":"Date of Birth","type":"date","required":true},{"name":"position","label":"Position","type":"select","required":true,"options":["Setter","Outside Hitter","Middle Blocker","Opposite","Libero","Defensive Specialist"]},{"name":"jerseyNumber","label":"Jersey Number","type":"number","required":true},{"name":"skillLevel","label":"Skill Level","type":"select","required":true,"options":["Beginner","Intermediate","Advanced","Professional"]},{"name":"joinDate","label":"Join Date","type":"date","required":true},{"name":"notes","label":"Notes","type":"textarea","required":false}]} />

      <DataTable key="3" columns={["Name","Jersey #","Position","Skill Level","Join Date","Actions"]} rows={[]} />
    </div>
  )
}
