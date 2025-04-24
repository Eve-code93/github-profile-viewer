import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Component imports
import Home from './components/Home';
import About from './components/About';
import ProfileOverview from './components/ProfileOverview';
import RepoCard from './components/RepoCard';
import Followers from './components/Followers';
import Following from './components/Following';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory'; // Added this import
import Layout from './components/Layout';

function App() {
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('githubSearchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save search history to localStorage
  useEffect(() => {
    localStorage.setItem('githubSearchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addToHistory = (username) => {
    setSearchHistory(prev => [
      username,
      ...prev.filter(item => item.toLowerCase() !== username.toLowerCase())
    ].slice(0, 5));
  };

  const handleHistorySelect = (username) => {
    // This would be handled by SearchBar component
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <SearchBar 
                      history={searchHistory}
                      onAddToHistory={addToHistory}
                      onShowHistory={() => setShowHistory(true)}
                      onHideHistory={() => setShowHistory(false)}
                    />
                    {showHistory && searchHistory.length > 0 && (
                      <SearchHistory 
                        history={searchHistory} 
                        onSelect={handleHistorySelect} 
                      />
                    )}
                    <Home />
                  </div>
                </div>
              </div>
            } 
          />
          
          <Route path="/about" element={<About />} />
          
          <Route 
            path="/users/:username" 
            element={<ProfileOverview onError={setError} />} 
          />
          
          <Route 
            path="/users/:username/repos" 
            element={<RepoCard onError={setError} />} 
          />
          
          <Route 
            path="/users/:username/followers" 
            element={<Followers onError={setError} />} 
          />
          
          <Route 
            path="/users/:username/following" 
            element={<Following onError={setError} />} 
          />
        </Routes>
        
        {error && (
          <div className="alert alert-danger mt-3">
            {error}
          </div>
        )}
      </Layout>
    </Router>
  );
}

export default App;