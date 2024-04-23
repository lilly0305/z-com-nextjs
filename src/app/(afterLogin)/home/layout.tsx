import React, {ReactNode} from 'react';

function Home({children}: {children: ReactNode}) {
  return (
    <div>{children}</div>
  );
}

export default Home;