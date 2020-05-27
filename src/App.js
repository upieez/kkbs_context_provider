import React from "react";
import UserState from "./context/user/UserState";
import Name from "./Name";

function App() {
	return (
		<UserState>
			<div className='App'>
				<Name />
			</div>
		</UserState>
	);
}

export default App;
