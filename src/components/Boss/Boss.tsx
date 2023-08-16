// eslint-disable-next-line @typescript-eslint/no-unused-vars
import react, { useState } from 'react';
import { Boss as BossEnum, BossDungeonMap } from './Boss.types';
import { Form, Select } from 'antd';
import { enumToOptions } from '../../utils';


type Props = {
  boss?: BossEnum;
  onSave?: (values: BossEnum) => void
};

const Boss = ({ boss, onSave
}: Props) => {
  const [form] = Form.useForm();
  const [bossSelected, setBossSelected] = useState<BossEnum>();

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
          onChange={(value) => { setBossSelected(BossEnum[value]) }}
          placeholder="Select a final boss"
          options={enumToOptions(BossEnum)} />
      </Form.Item>
      <Form.Item label={bossSelected && "Last dungeon"} >
        {bossSelected && <strong>{BossDungeonMap.get(bossSelected)}</strong>}
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

