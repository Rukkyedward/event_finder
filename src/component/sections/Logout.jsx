import React from 'react';
import { LogOut } from 'lucide-react';

const LogoutSection = () => {
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      alert('You have been logged out successfully.');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Logout</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-gray-700">
          Are you sure you want to logout from your account? You'll need to sign in again to access your profile.
        </p>
      </div>
      
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        <LogOut size={16} />
        Logout
      </button>
    </div>
  );
};

export default LogoutSection;