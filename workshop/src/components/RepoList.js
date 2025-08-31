import React, { useEffect, useState } from 'react';
import {accessToken} from '../token.js';
function RepoList({ url }) {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    if (!url) return;

    fetch(url, { headers: { authorization: `token ${accessToken}` } })
      .then((res) => res.json())
      .then((data) => setRepo(data))
      .catch((err) => console.error(err));
  }, [url]);

  if (!repo) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <ul>
        {repo.map((r) => (
          <li key={r.id}>
            <a href={r.html_url}>{r.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;
