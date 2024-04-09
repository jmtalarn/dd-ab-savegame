import React, { useState } from 'react';
import cx from 'classnames';
import { Radio, Row, Col, Select } from 'antd';
import styles from './PlayerPosition.module.css'
import route from './route.svg'
import { Dungeon as Dungeons, DungeonLabel } from '../Dungeon/Dungeon.types';
import { DungeonPosition } from '../Character/Character.types';
import { enumToOptions } from '../../utils/strings'

const PlayerPosition: React.FC = ({ value = {}, onChange }) => {
	const [dungeon, setDungeon] = useState<DungeonType>();
	const [position, setPosition] = useState<DungeonPosition>();


	const onRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// radioGroupRef.current.querySelectorAll(`.ant-radio-checked`).forEach(el => el.classList.remove("ant-radio-checked"));
		const newPosition = e.target.value;

		setPosition(newPosition);
		onChange?.({ dungeon, position: newPosition })
	}

	const onSelectChange = (newDungeon: DungeonType) => {
		setDungeon(newDungeon);
		onChange?.({ position, dungeon: newDungeon })
	}

	return (
		<Row>
			<Col span="12">
				<Select
					className={styles.select}
					placeholder="Select a dungeon"
					options={enumToOptions(Dungeons, DungeonLabel)}
					value={value.dungeon || dungeon}
					onChange={onSelectChange}

				/>
			</Col>
			<Col span="10" className={styles['route-container']}>
				<img src={route} className={styles.route} />
				<Radio.Group
					className={styles['radio-group']}
					value={value.position || position}
					onChange={onRadioGroupChange}
				>
					<Radio className={cx([styles.final])} value={6} checked={position === 6} />
					<Radio value={5} className={cx([styles.fifth])} checked={position === 5} />
					<Radio className={cx([styles.fourth])} value={4} checked={position === 4} />
					<Radio value={3} className={cx([styles.third])} checked={position === 3} />
					<Radio className={cx([styles.second])} value={2} checked={position === 2} />
					<Radio value={1} className={cx([styles.first])} checked={position === 1} />

				</Radio.Group>
			</Col>
		</Row >

	)
};


export default PlayerPosition;
