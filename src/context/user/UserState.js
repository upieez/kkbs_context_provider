import React, { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { SEARCH_USER } from "../types";

const UserState = (props) => {
	const initialState = { user: [] };
	const [state, dispatch] = useReducer(UserReducer, initialState);
	return (
		<UserContext.Provider value={{ user: state.user }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserState;
