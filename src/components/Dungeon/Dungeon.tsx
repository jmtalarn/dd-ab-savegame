import { Dungeon as Dungeons, DungeonLabel } from './Dungeon.types';
import { Form, Select } from 'antd';
import { enumToOptions } from '../../utils';

type Props = {
  dungeon?: Dungeons;
  blocked?: boolean;
  dungeonToIgnore?: Dungeons;
  onSave?: (values: Dungeons) => void;
  children?: React.ReactNode;
};

const Dungeon = (
  { dungeon,
    blocked = false,
    dungeonToIgnore,
    onSave,
    children
  }: Props) => {

  const [form] = Form.useForm();

  const onFinish = (values: Dungeons) => {
    onSave?.(values);
  };


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
      {!blocked && children}

    </Form>
  );
};

export default Dungeon;

