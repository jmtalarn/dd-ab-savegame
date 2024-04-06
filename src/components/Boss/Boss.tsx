import { useState } from 'react';
import { Boss as BossEnum, BossDungeonMap, BossLabel } from './Boss.types';
import { DungeonLabel } from '../Dungeon/Dungeon.types';
import { Form, Select, Button, Col, Flex } from 'antd';
import { enumToOptions } from '../../utils';


type Props = {
  boss?: BossEnum;
  onSave?: (values: BossEnum) => void
  onCancel?: () => void
};

const Boss = ({ boss, onSave, onCancel
}: Props) => {
  const [form] = Form.useForm();
  const [bossSelected, setBossSelected] = useState<BossEnum>(boss);

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
      <Form.Item >
        <Flex gap="middle" style={{ width: '100%' }} horizontal justify="center" >
          <Col flex="2">
            <Button style={{
              minWidth: "unset"
            }} block danger onClick={onCancel} >Cancel</Button>
          </Col>
          <Col flex="6">
            <Button style={{
              minWidth: "unset"
            }} block type="primary" htmlType="submit"  >
              Save
            </Button>
          </Col>
        </Flex>
      </Form.Item>
    </Form>
  );
};

export default Boss;

