import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const Navbar = () => {
	const { aToken, setAToken } = useContext(AdminContext);
	const { dToken, setDToken } = useContext(DoctorContext);

	const logout = () => {
		if (aToken) {
			setAToken(false);
			localStorage.removeItem('adminToken');
		}
		if (dToken) {
			setDToken(false);
			localStorage.removeItem('doctorToken');
		}
	};

	return (
		<header className="bg-white border-b border-gray-200 shadow-sm">
			<div className="px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Left side - Logo and Title */}
					<div className="flex items-center gap-4">
						<img 
							className="w-10 h-10" 
							src={assets.logo_cure_connect_red} 
							alt="CureConnect Admin" 
						/>
						<div>
							<h1 className="text-xl font-bold text-gray-900">
								{aToken ? 'Admin Dashboard' : 'Doctor Dashboard'}
							</h1>
							<p className="text-sm text-gray-500">
								{aToken ? 'Manage your healthcare platform' : 'Manage your appointments'}
							</p>
						</div>
					</div>

					{/* Right side - User Menu */}
					<div className="flex items-center gap-4">
						{/* Notifications */}
						<button className="relative p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 00-6 6v3.75a6 6 0 01-6 6h12a6 6 0 01-6-6V9.75a6 6 0 00-6-6z" />
							</svg>
							<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
						</button>

						{/* User Profile */}
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
								<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
							</div>
							<div className="hidden md:block">
								<p className="text-sm font-medium text-gray-900">
									{aToken ? 'Admin User' : 'Doctor User'}
								</p>
								<p className="text-xs text-gray-500">
									{aToken ? 'Administrator' : 'Medical Professional'}
								</p>
							</div>
						</div>

						{/* Logout Button */}
						<button 
							onClick={logout}
							className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200 font-medium"
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
							</svg>
							<span className="hidden md:block">Logout</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
