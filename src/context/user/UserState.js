import React, { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { SEARCH_USER } from "../types";

const UserState = (props) => {
	const initialState = {
		user: [{ name: "kevin" }, { name: "kun" }, { name: "sam" }],
		filtered: null,
	};
	const [state, dispatch] = useReducer(UserReducer, initialState);

	const printUser = (text) => {
		console.log("user");
		dispatch({ type: SEARCH_USER, payload: text });
	};

	return (
		<UserContext.Provider value={{ user: state.user }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserState;
