export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);


export const enumToOptions = (e) => {
	console.log(e);
	return (
		Object.entries(e)
			.filter(([key, _]) => isNaN(Number(key)))
			.map(([key, value]) => (isNaN(Number(value))) ? ({ value: key, label: value }) : ({ value: key, label: key })));

}
