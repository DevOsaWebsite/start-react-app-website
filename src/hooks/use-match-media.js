import { useState, useLayoutEffect } from 'react';

const queries = [
	'(max-width: 319.98px)',
	'(max-width: 424.98px)',
	'(max-width: 768.98px)',
	'(max-width: 991.98px)',
	'(max-width: 1199.98px)',
	'(max-width: 1440px)',
	'(max-width: 2560px)',
];

export const useMatchMedia = () => {
	const mediaQueryLists = queries.map(query => matchMedia(query));

	const getValues = () => mediaQueryLists.map(mql => mql.matches);

	const [values, setValues] = useState(getValues);

	useLayoutEffect(() => {
		const handler = () => setValues(getValues);

		mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

		return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
	});

	return ['isXs', 'isSm', 'isMd', 'isLg', 'isXl', 'isXxl, is4k'].reduce((acc, screen, index) => ({
		...acc,
		[screen]: values[index]
	}), {});
}