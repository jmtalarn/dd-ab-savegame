import { useMemo, useEffect } from 'react';
import { Dungeon as Dungeons, DungeonLabel } from './Dungeon.types';
import { Form, Select, Button, Col, Flex } from 'antd';
import { enumToOptions, enumKeyForValue } from '../../utils';


type Props = {
  dungeon?: Dungeons;
  blocked?: boolean;
  dungeonToIgnore?: Dungeons;
  onSave?: (values: Dungeons) => void
  onCancel?: () => void
};

const Dungeon = (
  { dungeon,
    blocked = false,
    dungeonToIgnore,
    onCancel,
    onSave
  }: Props) => {

  const [form] = Form.useForm();

  const onFinish = (values: Dungeons) => {
    onSave?.(values);
  };

  // const initialValues = useMemo(() => ({ dungeon: enumKeyForValue(dungeon as string, Dungeons) }), [dungeon]);

  // useEffect(() => {
  //   form.setFieldsValue(initialValues)
  // }, [form, initialValues]);

  return (
    <Form
      initialValues={{ dungeon }}
      onFinish={onFinish}
      form={form}
      disabled={blocked}
    >
      <Form.Item name="dungeon" label="Dungeon">
        <Select
          placeholder="Select a dungeon"
          options={enumToOptions(Dungeons, DungeonLabel, dungeonToIgnore)} />
      </Form.Item>
      {!blocked && <Form.Item >
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
      </Form.Item>}

    </Form>
  );
};

export default Dungeon;

