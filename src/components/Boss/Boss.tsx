import { useState } from 'react';
import { Boss as BossEnum, BossDungeonMap, BossLabel } from './Boss.types';
import { DungeonLabel } from '../Dungeon/Dungeon.types';
import { Form, Select } from 'antd';
import { enumToOptions } from '../../utils';

type Props = {
  boss?: BossEnum;
  onSave?: (values: BossEnum) => void;
  children?: React.ReactNode;
};

const Boss = ({ boss, onSave, children }: Props) => {
  const [form] = Form.useForm();
  const [bossSelected, setBossSelected] = useState<BossEnum>(boss);
  console.log({ bossSelected })
  const onFinish = (values: BossEnum) => {
    onSave?.(values);
  };

  return (
    <Form
      initialValues={{ boss }}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item name="boss" label="Boss">
        <Select
          onChange={(value: string) => { setBossSelected(value as BossEnum) }}
          placeholder="Select a final boss"
          options={enumToOptions(BossEnum, BossLabel)}
        />
      </Form.Item>
      <Form.Item label={bossSelected && "Last dungeon"} >
        {bossSelected && <strong>{DungeonLabel.get(Number(BossDungeonMap.get(Number(bossSelected))))}</strong>}
      </Form.Item>
      {children}
    </Form>
  );
};

export default Boss;

