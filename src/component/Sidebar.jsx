import React from 'react';
import { User, Mail, Lock, Bell, Trash2, LogOut} from 'lucide-react';

const Sidebar = ({ userData, activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'account', label: 'Account Info', icon: User },
    { id: 'email', label: 'Change Email', icon: Mail },
    { id: 'password', label: 'Change Password', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'delete', label: 'Delete Account', icon: Trash2 },
    { id: 'logout', label: 'Logout', icon: LogOut }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        {/* <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {userData.icon ? userData.icon : <User size={25} className="text-white" />}
        </div> */}

        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg overflow-hidden">
          {/* {userData.profilePhoto ? (
          <img
            src={userData.profilePhoto}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
          ) : userData.icon ? (
          userData.icon
          ) : (
           <User size={25} className="text-white" />
          )} */}
          {(userData.profilePhoto) ? (
            <img
              src={userData.profilePhoto}
              alt="Profile"
            className="w-full h-full rounded-full object-cover"
            />
          ) : userData.icon ? (
             userData.icon
          ) : (
          <User size={25} className="text-white" />
      )}
        </div>
        <div className="ml-3">
          <p className="font-medium text-gray-900">{userData.firstName} {userData.lastName}</p>
          <p className="text-sm text-gray-600">{userData.email}</p>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;