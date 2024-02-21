import { useState } from "react";
import "./userform.css";

const UserForm = (props) => {
	const { classes, user, handleEditUser, id } = props;

	const [currentUser, setCurrentUser] = useState(user);

	const handleChange = (e) => {
		setCurrentUser({
			...currentUser,
			[e.target.name]: e.target.value,
		});
	};

	const handleClose = () => {
		let close = document.getElementById(id);
		close.style.display = "none";
		setCurrentUser(user);
	};

	return (
		<div id={id} className="modal">
			<div class="modal-content">
				<div className="modal-header">
					<p>Basic Modal</p>
					<button className="modal-cross" onClick={handleClose}>
						<svg
							viewBox="64 64 896 896"
							class=""
							data-icon="close"
							width="1em"
							height="1em"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
						</svg>
					</button>
				</div>
				<div className="modal-form-section">
					<div className="modal-form">
						<label htmlFor="modal-name">Name: </label>
						<input
							type="text"
							id="modal-name"
							name="name"
							value={currentUser.name}
							onChange={handleChange}
						/>
					</div>
					<div className="modal-form">
						<label htmlFor="modal-mail">Email: </label>
						<input
							type="text"
							id="modal-mail"
							name="email"
							value={currentUser.email}
							onChange={handleChange}
						/>
					</div>
					<div className="modal-form">
						<label htmlFor="modal-phone">Phone: </label>
						<input
							type="text"
							id="modal-phone"
							name="phone"
							value={currentUser.phone}
							onChange={handleChange}
						/>
					</div>
					<div className="modal-form">
						<label htmlFor="modal-website">Website: </label>
						<input
							type="text"
							id="modal-website"
							name="website"
							value={currentUser.website}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="modal-submit-section">
					<button
						className="modal-submit-section-button"
						onClick={handleClose}
					>
						Cancel
					</button>
					<button
						id="submit-btn"
						className="modal-submit-section-button submit-button"
						onClick={() => handleEditUser(currentUser)}
					>
						OK
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserForm;
