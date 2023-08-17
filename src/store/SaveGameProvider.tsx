import { createContext, useState } from 'react';
import { Boss, BossDungeonMap } from '../components/Boss/Boss.types';
import { Dungeon } from '../components/Dungeon/Dungeon.types';
import {
	Character, Class
} from '../components/Character/Character.types';


export type SaveGameType = {
	boss?: Boss;
	dungeons?: Array<Dungeon>;
	players?: {
		[Class.Fighter]: Character;
		[Class.Sorcerer]: Character;
		[Class.Bard]: Character;
		[Class.Rogue]: Character;
	};
}

export type SaveGameContextType = {
	saveGame: SaveGameType,
	setBoss: (boss: Boss) => void;
	setDungeon: (dungeon: Dungeon, index: 0 | 1 | 2) => void;
	setCharacter: (character: Character, index: Class) => void;
}

export const SaveGameContext = createContext<SaveGameContextType | undefined>();

type SaveGameProviderProps = {
	initialState?: SaveGameType;
	children?: React.ReactNode
}
export const SaveGameProvider = ({ initialState, children }: SaveGameProviderProps) => {
	// this state will be shared with all components 

	const [saveGame, setSaveGame] = useState<SaveGameType>(initialState);

	const setBoss = (boss: Boss) => {
		const dungeons = [...saveGame.dungeons];
		dungeons[3] = BossDungeonMap[boss];
		setSaveGame({
			...saveGame,
			boss,
			dungeons: [...dungeons]
		});
	}
	const setDungeon = (dungeon: Dungeon, index: 0 | 1 | 2) => {
		const dungeons = [...saveGame.dungeons];
		dungeons[index] = dungeon;
		setSaveGame({
			...saveGame,
			dungeons: [...dungeons]
		});
	}
	const setCharacter = (character: Character, index: Class) => {
		const { players } = saveGame;
		setSaveGame({
			...saveGame,
			players: { ...players, [index]: character }
		});
	}
	return (
		<SaveGameContext.Provider value={{ saveGame, setBoss, setDungeon, setCharacter }}>
			{children}
		</SaveGameContext.Provider>
	);
};

