import { useState } from 'react';
import { Boss as BossEnum, BossDungeonMap } from './Boss.types';
import { Form, Select, Button } from 'antd';
import { enumToOptions } from '../../utils';


type Props = {
  boss?: BossEnum;
  onSave?: (values: BossEnum) => void
};

const Boss = ({ boss, onSave
}: Props) => {
  const [form] = Form.useForm();
  const [bossSelected, setBossSelected] = useState<BossEnum>(boss);
  console.log({ boss, bossSelected })
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
          options={enumToOptions(BossEnum)}
          value={bossSelected}
        />
      </Form.Item>
      <Form.Item label={bossSelected && "Last dungeon"} >
        {bossSelected && <strong>{BossDungeonMap.get(BossEnum[bossSelected as unknown as keyof typeof BossEnum])}</strong>}
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Boss;

