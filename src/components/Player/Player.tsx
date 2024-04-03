import { useState } from 'react';
import { Character, Characters, PlayerStats, Class, PersonalityValues, PersonalityType, AttackType, AttackValues, BackPacks, BackPackType, BackPacksNames, ObjectLooted } from '../Character/Character.types';
import { Button, Form, Input, InputNumber, Select, Slider, Radio } from 'antd';
import CharacterName from '../CharacterName';
import { enumToOptions } from '../../utils';

type Props = {
  playerStats?: PlayerStats;
  playerClass: Class;
  onSave?: (values: PlayerStats) => void
};

const filterAndFormatCharacterClassOptions = (characterClass: Class) => Characters.filter((character: Character) => character.class === characterClass).map((character: Character) => ({
  value: character.name,
  label: <CharacterName classType={character.class} text={character.name} />,
}))

const characterClassOptionsMap = ({
  [Class.Fighter]: filterAndFormatCharacterClassOptions(Class.Fighter),
  [Class.Sorcerer]: filterAndFormatCharacterClassOptions(Class.Sorcerer),
  [Class.Rogue]: filterAndFormatCharacterClassOptions(Class.Rogue),
  [Class.Bard]: filterAndFormatCharacterClassOptions(Class.Bard),
});

const Player = ({ playerStats = { level: 1, life: 10, coins: 0 }, playerClass, onSave }: Props) => {
  const [form] = Form.useForm();

  const charactersMap = new Map(Characters.map((character: Character) => ([character.name, character])));
  const backpacksMap = new Map(BackPacks.map((item: BackPackType) => ([item.backpack, item])));

  const [, setCharacter] = useState<Character>();
  const [characterPersonalities, setCharacterPersonalities] = useState<PersonalityType[]>([]);
  const [characterAttacks, setCharacterAttacks] = useState<AttackType[]>([]);
  const onBackpackChange = (selectedBackpackName: BackPacksNames) => {
    const selectedBackPack = backpacksMap.get(selectedBackpackName);
    setBackpack(selectedBackPack);
    if (selectedBackPack) {
      form.setFieldValue(["backpack", "items"], selectedBackPack.items);
    }
  };
  const [backpack, setBackpack] = useState<BackPackType>();
  const [loot, setLoot] = useState<ObjectLooted[]>([]);

  const onCharacterChange = (characterName: string) => {
    const selectedCharacter = charactersMap.get(characterName);
    setCharacter(selectedCharacter);
    if (selectedCharacter) {
      switch (selectedCharacter.class) {
        case Class.Bard:
          setCharacterPersonalities(PersonalityValues.PersonalityBard);
          setCharacterAttacks(AttackValues.AttacksBard);
          break;
        case Class.Fighter:
          setCharacterPersonalities(PersonalityValues.PersonalityFighter);
          setCharacterAttacks(AttackValues.AttacksFighter);
          break;
        case Class.Sorcerer:
          setCharacterPersonalities(PersonalityValues.PersonalitySorcerer);
          setCharacterAttacks(AttackValues.AttacksSorcerer);
          break;
        case Class.Rogue:
          setCharacterPersonalities(PersonalityValues.PersonalityRogue);
          setCharacterAttacks(AttackValues.AttacksRogue);
          break;
      }
    }

  }

  const layout = {
    labelCol: { span: 4 },
  };


  const onFinish = (values: PlayerStats) => {
    onSave?.(values);
  };

  return (
    <Form {...layout}
      initialValues={playerStats}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item name="identifier" label="identifer">
        <Input placeholder="Mama, Papa, Miquel, Jordi ..." />
      </Form.Item>

      <Form.Item name={["character", "name"]} label="Character">
        <Select
          showSearch
          placeholder="Select a character"
          optionFilterProp="children"
          onChange={(value) => { onCharacterChange(value) }}

          filterOption={(input, option) =>
            ((option?.label ?? '') as string).toLowerCase().includes(input.toLowerCase())
          }
          options={characterClassOptionsMap[playerClass]}
        />
      </Form.Item>
      <Form.Item name="life" label="Life">
        <Slider
          max={10}
          min={0}
          marks={[...Array(11).keys()].reduce((acc: Record<number, string>, curr: number) => {
            acc[curr] = curr.toString();
            return acc;
          }, {})}
        />
      </Form.Item>
      <Form.Item name="level" label="Level">
        <Radio.Group>
          <Radio.Button value="1">Level 1</Radio.Button>
          <Radio.Button value="2">Level 2</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="coins" label="Coins">
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item name="personality" label="Personality">
        <Select
          placeholder="Select a personality"
          options={characterPersonalities.map((value: string) => ({ value, label: value }))} />
      </Form.Item>
      <Form.Item name="attacks" label="Attacks">
        <Select
          placeholder="Select an attack"
          options={characterAttacks.map((value: string) => ({ value, label: value }))} />
      </Form.Item>
      <Form.Item label="BackPack">
        <Form.Item name={['backpack', 'backpack']}>
          <Select
            onChange={onBackpackChange}
            placeholder="Select a backpack"
            options={BackPacks.map(item => ({ value: item.backpack, label: item.backpack }))} />
        </Form.Item>
        <Form.Item>
          {backpack?.items.join(", ")}
        </Form.Item>
      </Form.Item>
      <Form.Item name="loot" label="Loot">
        <Select
          value={loot}
          placeholder="Select your looted objects"
          mode="multiple"
          onChange={setLoot}
          options={enumToOptions(ObjectLooted)} />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Player;
