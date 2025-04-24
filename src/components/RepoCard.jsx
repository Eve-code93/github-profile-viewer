import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const RepoCard = ({ onError }) => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('updated');
  const [error, setLocalError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setLocalError(null);
        
        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated`
        );
        
        if (!reposResponse.ok) {
          throw new Error(
            reposResponse.status === 403 
              ? 'API rate limit exceeded' 
              : 'Failed to fetch repositories'
          );
        }
        
        const reposData = await reposResponse.json();

        // Fetch commit counts for first 5 repos (due to API limits)
        const reposWithCommits = await Promise.all(
          reposData.slice(0, 5).map(async (repo) => {
            try {
              const commitsResponse = await fetch(
                `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`
              );
              
              if (!commitsResponse.ok) {
                console.error(`Failed to get commits for ${repo.name}`);
                return { ...repo, commitCount: 0 };
              }
              
              // Extract commit count from headers
              const commitCount = commitsResponse.headers.get('Link') 
                ? parseInt(commitsResponse.headers.get('Link').match(/page=(\d+)>; rel="last"/)[1], 10) || 0
                : 0;
              
              return { ...repo, commitCount };
            } catch (err) {
              console.error(err);
              return { ...repo, commitCount: 0 };
            }
          })
        );

        // For remaining repos, set commitCount to 0
        const remainingRepos = reposData.slice(5).map(repo => ({ ...repo, commitCount: 0 }));
        setRepos([...reposWithCommits, ...remainingRepos]);
      } catch (err) {
        setLocalError(err.message);
        onError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, onError]);

  const sortedRepos = [...repos].sort((a, b) => {
    switch (sortBy) {
      case 'stars': return b.stargazers_count - a.stargazers_count;
      case 'forks': return b.forks_count - a.forks_count;
      case 'commits': return b.commitCount - a.commitCount;
      case 'updated': 
      default: 
        return new Date(b.updated_at) - new Date(a.updated_at);
    }
  });

  if (error?.includes('API rate limit exceeded')) {
    return (
      <div className="alert alert-warning">
        GitHub API rate limit exceeded. Please try again later or 
        <a href="https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting" 
           target="_blank" 
           rel="noopener noreferrer"
           className="alert-link ms-1">
          learn more
        </a>.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="ms-2">Loading repositories...</span>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Repositories ({repos.length})</h4>
        <div className="btn-group">
          <button 
            className={`btn btn-sm ${sortBy === 'updated' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSortBy('updated')}
          >
            <i className="bi bi-clock-history"></i> Recent
          </button>
          <button 
            className={`btn btn-sm ${sortBy === 'stars' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSortBy('stars')}
          >
            <i className="bi bi-star-fill"></i> Stars
          </button>
          <button 
            className={`btn btn-sm ${sortBy === 'forks' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSortBy('forks')}
          >
            <i className="bi bi-diagram-2-fill"></i> Forks
          </button>
        </div>
      </div>

      <div className="list-group">
        {sortedRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="list-group-item list-group-item-action"
          >
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5 className="mb-1">{repo.name}</h5>
                <p className="mb-1 text-muted">{repo.description || 'No description'}</p>
              </div>
              <div className="d-flex flex-column align-items-end">
                <span className="badge bg-primary rounded-pill mb-1">
                  {repo.commitCount} commits
                </span>
                <small className="text-muted">
                  {new Date(repo.updated_at).toLocaleDateString()}
                </small>
              </div>
            </div>
            <div className="d-flex gap-3 mt-2">
              <small className="text-muted">
                <i className="bi bi-star-fill text-warning"></i> {repo.stargazers_count}
              </small>
              <small className="text-muted">
                <i className="bi bi-diagram-2-fill text-success"></i> {repo.forks_count}
              </small>
              <small className="text-muted">
                <i className="bi bi-code-slash"></i> {repo.language || 'Unknown'}
              </small>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

RepoCard.propTypes = {
  onError: PropTypes.func.isRequired
};

export default RepoCard;