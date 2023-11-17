// eslint-disable-next-line @typescript-eslint/no-unused-vars
import react, { useState, useMemo, useEffect } from 'react';
import { Dungeon as Dungeons } from './Dungeon.types';
import { Form, Select, Button } from 'antd';
import { enumToOptions, enumKeyForValue } from '../../utils';


type Props = {
  dungeon?: Dungeons;
  blocked?: boolean;
  onSave?: (values: Dungeons) => void
};

const Dungeon = ({ dungeon,
  onSave, blocked = false, dungeonToIgnore
}: Props) => {

  const [form] = Form.useForm();

  const onFinish = (values: Dungeons) => {
    onSave?.(values);
  };

  const initialValues = useMemo(() => ({ dungeon: enumKeyForValue(dungeon, Dungeons) }), [dungeon]);

  useEffect(() => {
    form.setFieldsValue(initialValues)
  }, [form, initialValues]);

  return (
    <Form
      initialValues={initialValues}
      onFinish={onFinish}
      form={form}
      disabled={blocked}
    >
      <Form.Item name="dungeon" label="Dungeon">
        <Select
          placeholder="Select a dungeon"
          options={enumToOptions(Dungeons, dungeonToIgnore)} />
      </Form.Item>
      {!blocked && <Form.Item >
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Form.Item>}

    </Form>
  );
};

export default Dungeon;

