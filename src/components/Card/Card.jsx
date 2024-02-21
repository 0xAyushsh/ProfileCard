import EditIcon from "../Icons/EditIcon";
import LikeIcon from "../Icons/LikeIcon";
import MailIcon from "../Icons/MailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import TrashIcon from "../Icons/TrashIcon";
import WebsiteIcon from "../Icons/WebsiteIcon";
import UserForm from "../UserForm/UserForm";
import "./card.css";

const Card = (props) => {
	const { user, handleLike, handleDelete, handleEditUser } = props;

	const handleForm = () => {
		let id = `${user.name}-${user.id}`;
		let userForm = document.getElementById(id);
		userForm.style.display = "block";
	};

	return (
		<div className="card-main">
			<div className="img-section">
				<img src="https://picsum.photos/200" alt="" />
			</div>
			<div className="detail-section">
				<div className="user-detail">
					<h3 className="name detail">{user.name}</h3>
					<div className="email detail">
						<MailIcon />
						<p>{user.email}</p>
					</div>
					<div className="number detail">
						<PhoneIcon />
						<p>{user.phone}</p>
					</div>
					<div className="website detail">
						<WebsiteIcon />
						<p>{user.website}</p>
					</div>
				</div>
				<div className="user-toggle">
					<div className="btn-area">
						<button
							id="like-button"
							onClick={() => handleLike(user)}
						>
							<LikeIcon liked={user.liked} />
						</button>
					</div>
					<div className="btn-area">
						<button id="edit-button" onClick={handleForm}>
							<EditIcon />
						</button>
					</div>
					<div className="btn-area">
						<button
							id="trash-button"
							onClick={() => {
								handleDelete(user);
							}}
						>
							<TrashIcon />
						</button>
					</div>
				</div>
			</div>
			<UserForm
				user={user}
				handleEditUser={handleEditUser}
				id={`${user.name}-${user.id}`}
			/>
		</div>
	);
};

export default Card;
