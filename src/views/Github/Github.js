import React from 'react';
import styles from './Github.scss';
import RepositoriesCard from '@/components/RepositoriesCard/RepositoriesCard';
import Loading from '@/components/Loading/Loading';
import Empty from '@/components/Empty/Empty';
import useRequest from '@/containers/useRequest';
import { searchRepositories } from '@/services/interface/github';
import emptyData from 'assets/images/empty-data.png';

function Github() {
  const [loading, data] = useRequest(searchRepositories, { q: 'javascript' });

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className={styles.root}>
      {(data &&
        data.items.map(
          ({
            description,
            id,
            name,
            forks_count,
            stargazers_count,
            language,
            owner,
          }) => (
            <RepositoriesCard
              key={id}
              name={name}
              avatarUrl={owner.avatar_url}
              description={description}
              stargazersCount={stargazers_count}
              forksCount={forks_count}
              language={language}
            />
          ),
        )) || <Empty url={emptyData} />}
    </div>
  );
}

export default Github;
