import Footer from 'layouts/Footer';
import Header from 'layouts/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Wrapper.module.scss';

const Wrapper = () => {
	return (
		<div className={styles.root} data-testid="Wrapper">
			<Header />
			<main className={styles.root__main} >
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}


export default Wrapper;
