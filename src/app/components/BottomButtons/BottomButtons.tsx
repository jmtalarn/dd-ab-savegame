import { useContext } from 'react'
import { Form, Button, Col, Flex } from 'antd';
import { MenuDrawerContext } from '../MenuDrawer';
import styles from './BottomButtons.module.css'

const BottomButtons = () => {
	const { setSelectedMenuItem } = useContext(MenuDrawerContext);

	return (<Form.Item className={styles['bottom-buttons']}>
		<Flex gap="middle" style={{ width: '100%' }} justify="center" >
			<Col flex="2">
				<Button style={{
					minWidth: "unset"
				}} block danger onClick={() => { setSelectedMenuItem?.(undefined) }} >Cancel</Button>
			</Col>
			<Col flex="6">
				<Button style={{
					minWidth: "unset"
				}} block type="primary" htmlType="submit"
				>
					Save
				</Button>
			</Col>
		</Flex>
	</Form.Item >)
}

export default BottomButtons;
