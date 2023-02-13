import { useState, useEffect } from 'react';
import { useLocalStorage } from "./use-local-storage";
const useSwitchThem = () => {

	const [theme, setTheme] = useLocalStorage('', 'theme');

	const modeSwitdh = () => {
		if (theme) {
			return theme === 'dark';
		} else {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
		}
	}

	useEffect(() => {
		let match = '';
		if (theme) {
			match = theme;
		} else {
			match = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
		}

		document.body.setAttribute('data-theme', (match));
		return () => {
		};
	}, [mode]);

	return
}