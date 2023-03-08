import react, { useState } from 'react';
import { Layout, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { faArrowLeft } from '@fortawesome/pro-thin-svg-icons';

import styles from './StackedPage.module.css';
const { Header, Content } = Layout;

type Props = {
  children?: React.ReactNode;
  title: string;
};

const StackedPage = ({ children, title }: Props) => {
  const [stacked, setStacked] = useState<boolean>(true);

  return (
    <Layout className={cx(styles.page, { [styles.stacked]: stacked, [styles.unstacked]: !stacked })}>
      <Header className={styles.header}>
        <h2>
          <Button
            type="text"
            onClick={() => {
              setStacked(!stacked);
            }}
            shape="circle"
            icon={<FontAwesomeIcon icon={faArrowLeft} />}
          />
          {title}
        </h2>
      </Header>
      <Content className={styles.content}>{children}</Content>
    </Layout>
  );
};
export default StackedPage;
