import { useState } from 'react';
import cx from 'classnames';
import { Radio, Row, Col, Select, RadioChangeEvent } from 'antd';
import styles from './PlayerPosition.module.css'
import route from './route.svg'
import { Dungeon, DungeonLabel } from '../Dungeon/Dungeon.types';
import { DungeonPosition, PlayerPosition as PlayerPositionType } from '../Character/Character.types';
import { enumToOptions } from '../../utils/strings'

const PlayerPosition = (
	{ value = {},
		onChange
	}: {
		value: PlayerPositionType,
		onChange: (playerPosition: PlayerPositionType) => void
	}
) => {

	const [dungeon, setDungeon] = useState<Dungeon>();
	const [dungeonPosition, setDungeonPosition] = useState<DungeonPosition>();

	const onRadioGroupChange = (e: RadioChangeEvent) => {

		const newPosition = e.target.value;

		setDungeonPosition(newPosition);
		onChange?.({ dungeon, dungeonPosition: newPosition })
	}

	const onSelectChange = (newDungeon: Dungeon) => {
		setDungeon(newDungeon);
		onChange?.({ dungeonPosition, dungeon: newDungeon })
	}

	return (
		<Row>
			<Col span="12">
				<Select
					className={styles.select}
					placeholder="Select a dungeon"
					options={enumToOptions(Dungeon as unknown as Dungeon, DungeonLabel)}
					value={value.dungeon || dungeon}
					onChange={onSelectChange}

				/>
			</Col>
			<Col span="10" className={styles['route-container']}>
				<img src={route} className={styles.route} />
				<Radio.Group
					className={styles['radio-group']}
					value={value.dungeonPosition || dungeonPosition}
					onChange={onRadioGroupChange}
				>
					<Radio className={cx([styles.final])} value={6} checked={dungeonPosition === 6} />
					<Radio value={5} className={cx([styles.fifth])} checked={dungeonPosition === 5} />
					<Radio className={cx([styles.fourth])} value={4} checked={dungeonPosition === 4} />
					<Radio value={3} className={cx([styles.third])} checked={dungeonPosition === 3} />
					<Radio className={cx([styles.second])} value={2} checked={dungeonPosition === 2} />
					<Radio value={1} className={cx([styles.first])} checked={dungeonPosition === 1} />

				</Radio.Group>
			</Col>
		</Row >

	)
};


export default PlayerPosition;
