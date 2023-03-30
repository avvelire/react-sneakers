import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="19" rx="10" ry="10" width="150" height="91" />
    <rect x="10" y="128" rx="3" ry="3" width="150" height="15" />
    <rect x="10" y="159" rx="3" ry="3" width="93" height="15" />
    <rect x="10" y="190" rx="8" ry="8" width="80" height="24" />
    <rect x="117" y="186" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
);

export default Skeleton;
