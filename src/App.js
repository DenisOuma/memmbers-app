import Button from "./components/Button";
import { UsersList } from "./components/UsersList";
function App() {
	return (
		<div className="container mx-auto">
			<UsersList />
			<Button primary>Welcome</Button>
			<h1>Welcome to my page</h1>
		</div>
	);
}

export default App;
