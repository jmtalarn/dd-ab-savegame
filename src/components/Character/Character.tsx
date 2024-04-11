
import { Card } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faVenus, faMars } from '@fortawesome/pro-solid-svg-icons';
import styles from './Character.module.css';
import '../../styles/generic.module.css';
import { Character, Sex, ClassLabel, RaceLabel } from './Character.types';
import CharacterName from '../CharacterName';
import { capitalize } from '../../utils';

type Props = {
  character: Character;
};


const Player = ({ character }: Props) => {
  return (
    <Card title={<CharacterName classType={character.class} text={character.name} />}>
      <div className={styles['card-content']}>
        <p>{capitalize(ClassLabel.get(character.class) ?? '')}</p>
        <p>{capitalize(RaceLabel.get(character.race) ?? '')}</p>
        <p>
          <FontAwesomeIcon icon={character.sex === Sex.Male ? faMars : faVenus} />
        </p>
      </div>
    </Card>
  );

  {
    /* <Form.Item
        className={styles['form-item']}
        labelAlign="left"
        labelCol={labelCol}
        label="Identificador"
        name="character.identifier"
      >
        <Input placeholder="Mama - Papa - Miquel - Jordi" value={playerStats.identifier} />
      </Form.Item>
      <Form.Item className={styles['form-item']} labelAlign="left" labelCol={labelCol} label="Monedas" name="coins">
        <InputNumber min={0} max={24} placeholder="0 - 24" value={playerStats.coins} />
      </Form.Item>
      <Form.Item className={styles['form-item']} labelAlign="left" labelCol={labelCol} label="Vida" name="life">
        <InputNumber min={0} max={10} placeholder="0 - 10" value={playerStats.life} />
      </Form.Item>
      <Form.Item className={styles['form-item']} labelAlign="left" labelCol={labelCol} label="Objetos" name="objects">
        {playerStats.objects}
      </Form.Item> */
  }
};

export default Player;
