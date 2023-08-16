// eslint-disable-next-line @typescript-eslint/no-unused-vars
import react, { useState } from 'react';
import { Dungeon as Dungeons } from './Dungeon.types';
import { Form, Select } from 'antd';
import { enumToOptions } from '../../utils';


type Props = {
  dungeon?: Dungeons;
  blocked?: boolean;
  onSave?: (values: Dungeons) => void
};

const Dungeon = ({ dungeon, blocked = false
}: Props) => {
  const [form] = Form.useForm();

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
          options={enumToOptions(Dungeons)} />
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

