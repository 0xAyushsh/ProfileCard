import Card from "../components/Card/Card";
import "./home.css";
import { data } from "../Utils/Utils";
import { useEffect, useState } from "react";
import UserForm from "../components/UserForm/UserForm";

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setUsers(data);
	}, []);

	const handleLike = (curUser) => {
		setUsers(
			users.map((item) =>
				item.id === curUser.id ? { ...item, liked: !item.liked } : item
			)
		);
	};

	const handleDelete = (curUser) => {
		setUsers(users.filter((item) => item.id !== curUser.id));
	};

	const handleEditUser = (curUser) => {
		setUsers(
			users.map((item) =>
				item.id === curUser.id ? { ...item, ...curUser } : item
			)
		);
	};

	return (
		<>
			<div className="home-section">
				{users.map((item, index) => (
					<Card
						user={item}
						key={`${item.name}-${item.id}`}
						handleLike={handleLike}
						handleDelete={handleDelete}
						handleEditUser={handleEditUser}
					/>
				))}
			</div>
		</>
	);
};

export default Home;
