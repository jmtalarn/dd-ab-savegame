import { useState } from 'react';
import { Boss as BossEnum, BossDungeonMap, BossLabel } from './Boss.types';
import { DungeonLabel } from '../Dungeon/Dungeon.types';
import { Form, Select } from 'antd';
import { enumToOptions } from '../../utils';

type Props = {
  boss?: BossEnum;
  onSave?: ({ boss }: { boss: BossEnum }) => void;
  children?: React.ReactNode;
};

const Boss = ({ boss, onSave, children }: Props) => {
  const [form] = Form.useForm();
  const [bossSelected, setBossSelected] = useState<BossEnum | undefined>(boss);
  console.log({ bossSelected })


  const onFinish = ({ boss }: { boss: BossEnum }) => {
    onSave?.({ boss });
  };

  return (
    <Form
      initialValues={{ boss }}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item name="boss" label="Boss">
        <Select
          onChange={(value: string) => { setBossSelected(value as unknown as BossEnum) }}
          placeholder="Select a final boss"
          options={enumToOptions(BossEnum as unknown as BossEnum, BossLabel)}
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

