export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);


export const enumToOptions = (e) =>
	Object.entries(e)
		.filter(([key, _]) => isNaN(Number(key)))
		.map(([key, value]) => (isNaN(Number(value))) ? ({ value: key, label: value }) : ({ value: key, label: key }));



export const enumKeyForValue = (value, enumObject) => { return Object.entries(enumObject).find(([key, val]) => val === value)[0]; }
