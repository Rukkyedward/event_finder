import React, { useState } from 'react';

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: 'true',
    pushNotifications: '',
    eventReminders: '',
    newEvents: '',
    promotions: ''
  });

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const notificationLabels = {
    emailNotifications: {
      title: 'Email Notifications',
      description: 'Receive notifications via email'
    },
    pushNotifications: {
      title: 'Push Notifications',
      description: 'Receive push notifications on your device'
    },
    eventReminders: {
      title: 'Event Reminders',
      description: 'Get reminded about upcoming events'
    },
    newEvents: {
      title: 'New Events',
      description: 'Get notified about new events in your area'
    },
    promotions: {
      title: 'Promotions',
      description: 'Receive promotional offers and discounts'
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Notification Settings</h2>
      
      <div className="space-y-4">
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">
                {notificationLabels[key].title}
              </h3>
              <p className="text-sm text-gray-600">
                {notificationLabels[key].description}
              </p>
            </div>
            <button
              onClick={() => handleNotificationChange(key)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                value ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  value ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;