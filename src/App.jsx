import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

 
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import Home from './components/Home';
import ProfileOverview from './components/ProfileOverview';
import RepoCard from './components/RepoCard';
import Followers from './components/Followers';
import Following from './components/Following';
import About from './components/About';
import Layout from "./components/Layout";
import NavBar from './components/NavBar';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const fetchGitHubData = async (user) => {
    setUsername(user);
    setError('');
    setUserData(null);
    setRepos([]);
    setFollowers([]);
    setFollowing([]);

    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error('User not found');
      const data = await response.json();
      setUserData(data);

      const [reposRes, followersRes, followingRes] = await Promise.all([
        fetch(data.repos_url),
        fetch(data.followers_url),
        fetch(`https://api.github.com/users/${user}/following`)
      ]);

      const [reposData, followersData, followingData] = await Promise.all([
        reposRes.json(),
        followersRes.json(),
        followingRes.json()
      ]);

      setRepos(reposData);
      setFollowers(followersData);
      setFollowing(followingData);
      setSearchHistory(prev => [user, ...prev.filter(u => u !== user)]);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Router>
      <Layout>
         
        <SearchBar onSearch={fetchGitHubData} />
         
        <ErrorMessage message={error} />

        
        <Routes>
           
          <Route path="/" element={<Home />} />

           
          <Route path="/profile" element={<ProfileOverview user={userData} history={searchHistory}/>} />

          
          <Route path="/profile/repos" element={<RepoCard repos={repos} />} />
          <Route path="/profile/followers" element={<Followers users={followers} />} />
          <Route path="/profile/following" element={<Following users={following} />} />

           
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
 
 