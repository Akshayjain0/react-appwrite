import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutButton = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		authService.logout().then(() => {
			dispatch(logout());
		});
	};

	return (
		<div
			className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
			onClick={handleLogout}
		>
			LogoutButton
		</div>
	);
};

export default LogoutButton;