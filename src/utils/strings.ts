import { Dungeon } from "../components/Dungeon/Dungeon.types"
import { Boss } from "../components/Boss/Boss.types"
import { ObjectLooted } from "../components/Character/Character.types"

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);


export const enumToOptions = (e: Dungeon | Boss | ObjectLooted, dict?: Map<number, string>, keyToIgnore?: Dungeon | Boss | ObjectLooted) => Object.keys(e)
	.filter(([key,]) => dict ? !isNaN(Number(key)) : isNaN(Number(key)))
	.filter(([key,]) => key !== keyToIgnore?.toString())
	.map((key) => dict ? ({ value: key, label: dict.get(Number(key)!) }) : ({ value: key, label: key })
	)





export const enumKeyForValue = (value: string, enumObject: object) => value ? (Object.entries(enumObject)?.find(([, val]) => val === value)?.[0]) : null;

export const ordinalize = (number: number, last: number) => {
	if (number === 0) { return "None" }
	if (number === last) { return "Final" }
	switch (number) {
		case 1: return "First";
		case 2: return "Second";
		case 3: return "Third";
		case 4: return "Fourth"
		case 5: return "Fifth";
		case 6: return "Sixth";
	}
}
