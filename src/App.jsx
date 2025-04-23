import { useState,  BrowserRouter as Router, Routes, Route }  from 'react'
import Commits from './components/Commits';
import ErrorMessage from './components/ErrorMessage';
import Followers from './components/Followers';
import Following from './components/Following';
import ProfileOverview from './components/ProfileOverview';
import RepoCard from './components/RepoCard';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import './App.css'

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/commits" element={<Commits />} />
          <Route path="/error" element={<ErrorMessage />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/following" element={<Following />} />
          <Route path="/profile" element={<ProfileOverview />} />
          <Route path="/repo" element={<RepoCard />} />
          <Route path="/history" element={<SearchHistory />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
