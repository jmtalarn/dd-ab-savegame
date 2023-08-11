// eslint-disable-next-line @typescript-eslint/no-unused-vars
import react, { useState } from 'react';
import { Boss as BossEnum } from './Boss.types';
import { Form, Select } from 'antd';
import { enumToOptions } from '../../utils';


type Props = {
  boss?: BossEnum;
  //onChange?: (values: PlayerStats) => void
};

const Boss = ({ boss  //, onChange 
}: Props) => {
  const [form] = Form.useForm();

  return (
    <Form
      initialValues={{ boss }}
      //onFinish={onFinish}
      form={form}
    >
      <Form.Item name="boss" label="Boss">
        <Select
          placeholder="Select a final boss"
          options={enumToOptions(BossEnum)} />
      </Form.Item>


    </Form>
  );
};

export default Boss;
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
