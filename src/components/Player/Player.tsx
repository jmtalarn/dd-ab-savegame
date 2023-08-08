import react from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAxeBattle, faHatWizard, faDagger, faBowArrow } from '@fortawesome/pro-duotone-svg-icons';
// import cx from 'classnames';
// import generic from '../../styles/generic.module.css';
// import styles from './CharacterName.module.css';
import { Character, Characters, PlayerStats } from '../Character/Character.types';
import { Form, Input, InputNumber, Select, Slider, Switch } from 'antd';
import CharacterName from '../CharacterName';

type Props = {
  playerStats: PlayerStats;
};

const Player = ({ playerStats }: Props) => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 4 },
    // wrapperCol: { span: 16 },
  };

  // const onGenderChange = (value: string) => {
  //   switch (value) {
  //     case 'male':
  //       form.setFieldsValue({ note: 'Hi, man!' });
  //       break;
  //     case 'female':
  //       form.setFieldsValue({ note: 'Hi, lady!' });
  //       break;
  //     case 'other':
  //       form.setFieldsValue({ note: 'Hi there!' });
  //       break;
  //     default:
  //   }
  // };

  const onFinish = (values: any) => {
    console.log(values);
  };

  // const onReset = () => {
  //   form.resetFields();
  // };

  // const onFill = () => {
  //   form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  // };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="identifier" label="identifer">
        <Input placeholder="Mama, Papa, Miquel, Jordi ..." />
      </Form.Item>

      <Form.Item name="character" label="Character">
        <Select
          showSearch
          placeholder="Select a character"
          optionFilterProp="children"
          // onChange={onChange}
          // onSearch={onSearch}
          filterOption={(input, option) =>
            ((option?.label ?? '') as string).toLowerCase().includes(input.toLowerCase())
          }
          options={Characters.map((character: Character) => ({
            value: character.name,
            label: <CharacterName classType={character.class} text={character.name} />,
          }))}
        />
      </Form.Item>
      <Form.Item name="life" label="Life">
        <Slider
          defaultValue={10}
          max={12}
          min={0}
          marks={[...Array(10).keys()].reduce((acc: Record<number, string>, curr: number) => {
            acc[curr] = curr.toString();
            return acc;
          }, {})}
        />
      </Form.Item>
      <Form.Item name="level" label="Level">
        <Switch checkedChildren="2" unCheckedChildren="1" />
      </Form.Item>
      <Form.Item name="coins" label="Coins">
        <InputNumber defaultValue={0} min={0} />
      </Form.Item>
    </Form>
  );
};

export default Player;
{
  /* character
    level: 1,
    coins: 5,
    life: 8,
    position: { dungeon: Dungeon.Neverwinter, position: 3 },
    objects: [],
    identifier: 'Welcome player one!',
    personality: 'El rebelde',
    attacks: 'Desastre natural',
    backpack */
}
