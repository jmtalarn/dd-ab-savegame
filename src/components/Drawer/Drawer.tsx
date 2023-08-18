import react, { useState, useEffect } from 'react';
import { Layout, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { faArrowLeft } from '@fortawesome/pro-thin-svg-icons';

import styles from './Drawer.module.css';
const { Header, Content } = Layout;

type Props = {
  children?: React.ReactNode;
  title: string;
  open?: boolean;
  onClose?: () => void
};

const Drawer = ({ children, title, open = true, onClose }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  return (
    <div className={cx(styles.drawer, { [styles['drawer-open']]: isOpen, [styles['drawer-closed']]: !isOpen })}>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <h2>
            <Button
              type="text"
              onClick={() => {
                setIsOpen(!isOpen);
                onClose?.();
              }}
              shape="circle"
              icon={<FontAwesomeIcon icon={faArrowLeft} />}
            />
            {title}
          </h2>
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </div>
  );
};
export default Drawer;
