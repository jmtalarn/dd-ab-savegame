// eslint-disable-next-line @typescript-eslint/no-unused-vars
import react, { useState } from 'react';
import { Dungeon as Dungeons, Boss as Bossess } from './Dungeon.types';
import { Form, Select } from 'antd';
import { enumToOptions } from '../../utils';


type Props = {
  dungeon?: Dungeons;
  blocked?: boolean;

  //onChange?: (values: PlayerStats) => void
};

const Dungeon = ({ dungeon, blocked = false
}: Props) => {
  const [form] = Form.useForm();

  return (
    <Form
      initialValues={{ dungeon }}
      //onFinish={onFinish}
      form={form}
      disabled={blocked}
    >
      <Form.Item name="dungeon" label="Dungeon">
        <Select
          placeholder="Select a dungeon"
          options={enumToOptions(Dungeons)} />
      </Form.Item>


    </Form>
  );
};

export default Dungeon;

