import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
	const { aToken } = useContext(AdminContext);
	const { dToken } = useContext(DoctorContext);
	return (
        <aside className="min-h-screen bg-white border-r border-gray-200 shadow-sm">
            <div className="p-6">
                {/* Logo */}
                <div className="flex items-center mb-8">
                    <img 
                        src={assets.logo_cure_connect_red} 
                        alt="CureConnect Admin" 
                        className="w-10 h-10"
                    />
                    <span className="ml-3 text-xl font-bold text-gray-900">Admin Panel</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="px-4">
                {aToken && (
                    <ul className="space-y-2">
                        <NavLink 
                            className={({isActive}) => `
                                flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                                ${isActive 
                                    ? 'bg-primary/10 text-primary border-r-4 border-primary shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                }
                            `} 
                            to={'/admin-dashboard'}
                        >
                            <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20' : 'bg-gray-100 group-hover:bg-primary/10'}`}>
                                <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
                            </div>
                            <span className="hidden md:block">Dashboard</span>
                        </NavLink>
                        
                        <NavLink 
                            className={({isActive}) => `
                                flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                                ${isActive 
                                    ? 'bg-primary/10 text-primary border-r-4 border-primary shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                }
                            `} 
                            to={'/all-appointments'}
                        >
                            <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20' : 'bg-gray-100 group-hover:bg-primary/10'}`}>
                                <img src={assets.appointment_icon} alt="Appointments" className="w-5 h-5" />
                            </div>
                            <span className="hidden md:block">Appointments</span>
                        </NavLink>

                        <NavLink 
                            className={({isActive}) => `
                                flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                                ${isActive 
                                    ? 'bg-primary/10 text-primary border-r-4 border-primary shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                }
                            `} 
                            to={'/add-doctor'}
                        >
                            <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20' : 'bg-gray-100 group-hover:bg-primary/10'}`}>
                                <img src={assets.add_icon} alt="Add Doctor" className="w-5 h-5" />
                            </div>
                            <span className="hidden md:block">Add Doctor</span>
                        </NavLink>

                        <NavLink 
                            className={({isActive}) => `
                                flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                                ${isActive 
                                    ? 'bg-primary/10 text-primary border-r-4 border-primary shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                }
                            `} 
                            to={'/doctor-list'}
                        >
                            <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20' : 'bg-gray-100 group-hover:bg-primary/10'}`}>
                                <img src={assets.people_icon} alt="Doctors List" className="w-5 h-5" />
                            </div>
                            <span className="hidden md:block">Doctors List</span>
                        </NavLink>
                    </ul>
                )}

                {dToken && (
                    <ul className="space-y-2">
                        <NavLink 
                            className={({isActive}) => `
                                flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                                ${isActive 
                                    ? 'bg-primary/10 text-primary border-r-4 border-primary shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                }
                            `} 
                            to={'/doctor-dashboard'}
                        >
                            <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20' : 'bg-gray-100 group-hover:bg-primary/10'}`}>
                                <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
                            </div>
                            <span className="hidden md:block">Dashboard</span>
                        </NavLink>
                        
                        <NavLink 
                            className={({isActive}) => `
                                flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                                ${isActive 
                                    ? 'bg-primary/10 text-primary border-r-4 border-primary shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                }
                            `} 
                            to={'/doctor-appointments'}
                        >
                            <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20' : 'bg-gray-100 group-hover:bg-primary/10'}`}>
                                <img src={assets.appointment_icon} alt="Appointments" className="w-5 h-5" />
                            </div>
                            <span className="hidden md:block">Appointments</span>
                        </NavLink>
                        
                        <NavLink 
                            className={({isActive}) => `
                                flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                                ${isActive 
                                    ? 'bg-primary/10 text-primary border-r-4 border-primary shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                }
                            `} 
                            to={'/doctor-profile'}
                        >
                            <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20' : 'bg-gray-100 group-hover:bg-primary/10'}`}>
                                <img src={assets.people_icon} alt="Profile" className="w-5 h-5" />
                            </div>
                            <span className="hidden md:block">Profile</span>
                        </NavLink>
                    </ul>
                )}
            </nav>

            {/* Bottom Section */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-sm font-medium text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                </div>
            </div>
        </aside>
    )
};

export default Sidebar;
