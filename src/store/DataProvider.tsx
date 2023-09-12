import { createContext, useState } from 'react';
import { SaveGameType } from './SaveGameProvider';





export type DataContextType = {
	currentSaveGame?: { key: string, savegame: SaveGameType },
	saveGames?: { [key: string]: SaveGameType }[],
}

export const DataContext = createContext<DataContextType>();

type DataProviderProps = {
	children?: React.ReactNode
}
export const DataProvider = ({ children }: DataProviderProps) => {
	// this state will be shared with all components 

	const [data, setData] = useState<DataContextType>({});


	return (
		<DataContext.Provider value={{ data, setData }}>
			{children}
		</DataContext.Provider>
	);
};

