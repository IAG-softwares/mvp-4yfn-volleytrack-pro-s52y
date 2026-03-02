import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import Players_listPage from './pages/Players_listPage'
import Matches_listPage from './pages/Matches_listPage'
import StatisticsPage from './pages/StatisticsPage'

function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/players" element={<Players_listPage />} />
          <Route path="/matches" element={<Matches_listPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
