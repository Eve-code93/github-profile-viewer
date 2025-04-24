import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import ProfileOverview from './components/ProfileOverview';
import RepoCard from './components/RepoCard';
import Followers from './components/Followers';
import Following from './components/Following';
import ErrorMessage from './components/ErrorMessage';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [error, setError] = useState('');

  const fetchGitHubData = async (username) => {
    setUsername(username);
    setError('');
    setUserData(null);
    setRepos([]);
    setFollowers([]);
    setFollowing([]);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error('GitHub user not found');
      const user = await userRes.json();

      const [repoRes, followerRes, followingRes] = await Promise.all([
        fetch(user.repos_url),
        fetch(user.followers_url),
        fetch(`https://api.github.com/users/${username}/following`),
      ]);

      const [repos, followers, following] = await Promise.all([
        repoRes.json(),
        followerRes.json(),
        followingRes.json(),
      ]);

      setUserData(user);
      setRepos(repos);
      setFollowers(followers);
      setFollowing(following);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-4">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home onSearch={fetchGitHubData} />} />
          <Route path="/profile" element={<ProfileOverview user={userData} />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <SearchBar onSearch={fetchGitHubData} />
        <ErrorMessage message={error} />
        {userData && <ProfileOverview user={userData} />}
        {repos.length > 0 && <RepoCard repos={repos} />}
        {followers.length > 0 && <Followers users={followers} />}
        {following.length > 0 && <Following users={following} />}
      </Router>
    </div>
  );
};

export default App;
