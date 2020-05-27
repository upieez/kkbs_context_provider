import { SEARCH_USER } from "../types";

export default (state, action) => {
	switch (action.type) {
		case SEARCH_USER:
			return {
				...state,
				filtered: state.user.filter((user) => {
					const regex = new RegExp(`${action.payload.text}`, "gi");
					return user.name.match(regex);
				}),
			};

		default:
			return state;
	}
};
