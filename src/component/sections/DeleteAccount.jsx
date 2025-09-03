import React from 'react';
import { Trash2} from 'lucide-react';

const DeleteAccount = () => {
  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deleted successfully');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-red-600">Delete Account</h2>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="font-medium text-red-800 mb-2">Warning!</h3>
        <p className="text-red-700 mb-4">
          Deleting your account will permanently remove all your data including:
        </p>
        <ul className="text-red-700 space-y-1 mb-4">
          <li>• Your profile information</li>
          <li>• Event history and bookings</li>
          <li>• Saved events and preferences</li>
          <li>• All personal data</li>
        </ul>
        <p className="text-red-700 font-medium">
          This action cannot be undone!
        </p>
      </div>
      
      <button
        onClick={handleDeleteAccount}
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
      >
        <Trash2 size={16} />
        Delete My Account
      </button>
    </div>
  );
};

export default DeleteAccount;