export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);


export const enumToOptions = (e, keyToIgnore) =>
	Object.entries(e)
		.filter(([key, _]) => isNaN(Number(key)))
		.filter(([key, _]) => key !== keyToIgnore)
		.map(([key, value]) => (isNaN(Number(value))) ? ({ value: key, label: value }) : ({ value: key, label: key }));



export const enumKeyForValue = (value, enumObject) => value ? (Object.entries(enumObject).find(([_, val]) => val === value)[0]) : null;

export const ordinalize = (number, last) => {
	if (number === 0) { return "None" }
	if (number === last) { return "Final" }
	switch (number) {
		case 1: return "First";
		case 2: return "Second";
		case 3: return "Third";
		case 4: return "Fourth"
	}
}
