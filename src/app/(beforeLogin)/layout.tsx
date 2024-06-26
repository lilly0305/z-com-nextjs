import React, {ReactNode} from 'react';
import styles from '@/app/page.module.css';

type Props = {
  children: ReactNode,
  modal: ReactNode
}

function Layout({children, modal}: Props) {
  return (
    <div className={styles.container}>
      BeforeLoginLayout
      {children}

      {modal}
    </div>
  );
}

export default Layout;

// 주소가 localhost:3000일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3000/i/flow/login 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx