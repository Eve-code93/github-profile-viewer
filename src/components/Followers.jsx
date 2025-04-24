import PropTypes from 'prop-types';

const Followers = ({ users, className, style }) => {
  if (!users || users.length === 0) {
    return <div>No followers found.</div>;
  }

  return (
    <div className={className} style={style}>
      <h2>Followers</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

// Prop validation
Followers.propTypes = {
  users: PropTypes.array.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Followers.defaultProps = {
  className: '',
  style: {},
};

export default Followers;
