// NOTE: private route 1: ()안에 적는다. layout 파일을 두기 위한 용도
// NOTE: private route 2: _파일명. 폴더 정리용
import React, {ReactNode} from 'react';
import styles from '@/app/(beforeLogin)/_component/main.module.css';

type Props = {
  children: ReactNode,
  modal: ReactNode
}

function Layout({children, modal}: Props) {
  return (
    <div className={styles.container}>
      {children}

      {modal}
    </div>
  );
}

export default Layout;

// 주소가 localhost:3000일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3000/i/flow/login 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx