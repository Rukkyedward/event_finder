import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import AccountInfo from '../component/sections/AccountInfo';
import ChangeEmail from '../component/sections/ChangeEmail';
import ChangePassword from '../component/sections/ChangePassword';
import NotificationSettings from '../component/sections/NotificationSettings';
import DeleteAccount from '../component/sections/DeleteAccount';
import Logout from '../component/sections/Logout';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    profilePhoto: null
  });

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return <AccountInfo userData={userData} onUserDataChange={setUserData} />;
      case 'email':
        return <ChangeEmail currentEmail={userData.email} />;
      case 'password':
        return <ChangePassword />;
      case 'notifications':
        return <NotificationSettings />;
      case 'delete':
        return <DeleteAccount />;
      case 'logout':
        return <Logout />;
      default:
        return <AccountInfo userData={userData} onUserDataChange={setUserData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar 
              userData={userData} 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
