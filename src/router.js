import Wrapper from "layouts/Wrapper";
import HomePage from "pages/HomePage";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from "react-router-dom";

export const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Wrapper />}>
		<Route index element={<HomePage />} />
	</Route>
))