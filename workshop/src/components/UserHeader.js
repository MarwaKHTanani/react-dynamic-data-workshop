import React, { useState, useEffect } from 'react';
import { getUserData } from '../utils/getUserData';
import RepoList from './RepoList';

function  UserHeader() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const username = 'MarwaKhTanani';
    getUserData(username).then((data) => setUserData(data));
  }, []);

  if (!userData) {
    return <h3>...Loading</h3>;
  }

  const { avatar_url, html_url, name, followers, repos_url } = userData;
  return (
    <div>
      <img src={avatar_url} alt={`${name}'s avatar`}/>
      <a href={html_url}>GitHub Profile</a>
      <h2>{name}</h2>
      <p>Followers: {followers}</p>
      <div>Repos: {repos_url ? <RepoList url={repos_url} /> : 'No Repos'}</div>
    </div>
  );
}

export default UserHeader;
