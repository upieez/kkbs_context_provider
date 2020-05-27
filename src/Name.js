import React, { useContext } from "react";
import UserContext from "./context/user/userContext";

function Name() {
	const userContext = useContext(UserContext);
	const { printUser } = userContext;
	const print = () => {
		printUser("sam");
	};
	return <button onClick={print}>WOW BANANA</button>;
}

export default Name;
