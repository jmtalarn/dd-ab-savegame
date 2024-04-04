import { useMemo, useEffect } from 'react';
import { Dungeon as Dungeons, DungeonLabel } from './Dungeon.types';
import { Form, Select, Button } from 'antd';
import { enumToOptions, enumKeyForValue } from '../../utils';


type Props = {
  dungeon?: Dungeons;
  blocked?: boolean;
  dungeonToIgnore?: Dungeons;
  onSave?: (values: Dungeons) => void
};

const Dungeon = ({ dungeon,
  onSave, blocked = false, dungeonToIgnore
}: Props) => {

  const [form] = Form.useForm();

  const onFinish = (values: Dungeons) => {
    onSave?.(values);
  };

  const initialValues = useMemo(() => ({ dungeon: enumKeyForValue(dungeon as string, Dungeons) }), [dungeon]);

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
          options={enumToOptions(Dungeons, DungeonLabel, dungeonToIgnore)} />
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

