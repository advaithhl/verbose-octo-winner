import React, { useState } from 'react';
import {
  User,
  Bell,
  Shield,
  Mail,
  Phone,
  Save,
  ArrowLeft,
  Eye,
  EyeOff
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Maria',
    lastName: 'Schmidt',
    email: 'maria.schmidt@email.com',
    phone: '+49 30 12345678',
    dateOfBirth: '1965-03-15',
    address: 'Unter den Linden 1, 10117 Berlin, Germany'
  });

  // Notification Preferences State
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    medicationReminders: true,
    testResultAlerts: true,
    weeklyReports: false
  });

  // Privacy Settings State
  const [privacy, setPrivacy] = useState({
    shareDataForResearch: true,
    allowDataExport: true,
    twoFactorAuth: false
  });

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handlePersonalInfoSave = () => {
    showToast("Personal Information Updated - Your personal information has been successfully updated.");
  };

  const handleNotificationsSave = () => {
    showToast("Notification Preferences Updated - Your notification preferences have been saved.");
  };

  const handlePrivacySave = () => {
    showToast("Privacy Settings Updated - Your privacy settings have been updated successfully.");
  };

  const handleSecuritySave = () => {
    showToast("Security Settings Updated - Your security settings have been updated successfully.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-white border-l-4 border-green-500 rounded-lg shadow-lg p-4 max-w-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{toastMessage.split(' - ')[0]}</p>
              <p className="text-sm text-gray-600 mt-1">{toastMessage.split(' - ')[1]}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={() => navigate('/user-profile')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Profile
        </button>
        {/* Personal Information */}
        <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Personal Information
            </h3>
            <p className="text-sm text-gray-600 mt-1">Update your personal details and contact information</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={personalInfo.firstName}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={personalInfo.lastName}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  id="phone"
                  type="text"
                  value={personalInfo.phone}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  id="dateOfBirth"
                  type="date"
                  value={personalInfo.dateOfBirth}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                id="address"
                type="text"
                value={personalInfo.address}
                onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <button
              onClick={handlePersonalInfoSave}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Personal Information
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-600" />
              Security Settings
            </h3>
            <p className="text-sm text-gray-600 mt-1">Manage your account security and password</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
              <div className="relative">
                <input
                  id="currentPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter current password"
                  className="block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                id="newPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm new password"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div className="flex items-center">
              <input
                id="twoFactorAuth"
                type="checkbox"
                checked={privacy.twoFactorAuth}
                onChange={(e) => setPrivacy({ ...privacy, twoFactorAuth: e.target.checked })}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="twoFactorAuth" className="ml-2 block text-sm font-medium text-gray-700">
                Enable Two-Factor Authentication
              </label>
            </div>

            <button
              onClick={handleSecuritySave}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Save className="w-4 h-4 mr-2" />
              Update Security Settings
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-orange-600" />
              Notification Preferences
            </h3>
            <p className="text-sm text-gray-600 mt-1">Choose how you want to receive notifications</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive updates via email</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.emailNotifications}
                  onChange={(e) => setNotifications({ ...notifications, emailNotifications: e.target.checked })}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
              </div>

              <div className="border-t border-gray-200"></div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">SMS Notifications</p>
                    <p className="text-sm text-gray-600">Receive text message alerts</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.smsNotifications}
                  onChange={(e) => setNotifications({ ...notifications, smsNotifications: e.target.checked })}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
              </div>

              <div className="border-t border-gray-200"></div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Specific Notifications</h4>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Appointment Reminders</p>
                    <p className="text-sm text-gray-600">Get reminded about upcoming appointments</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.appointmentReminders}
                    onChange={(e) => setNotifications({ ...notifications, appointmentReminders: e.target.checked })}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Medication Reminders</p>
                    <p className="text-sm text-gray-600">Daily medication and treatment reminders</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.medicationReminders}
                    onChange={(e) => setNotifications({ ...notifications, medicationReminders: e.target.checked })}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Test Result Alerts</p>
                    <p className="text-sm text-gray-600">Immediate alerts for important test results</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.testResultAlerts}
                    onChange={(e) => setNotifications({ ...notifications, testResultAlerts: e.target.checked })}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Weekly Reports</p>
                    <p className="text-sm text-gray-600">Summary of your weekly health data</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.weeklyReports}
                    onChange={(e) => setNotifications({ ...notifications, weeklyReports: e.target.checked })}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleNotificationsSave}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Notification Preferences
            </button>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-600" />
              Privacy & Data Settings
            </h3>
            <p className="text-sm text-gray-600 mt-1">Control how your medical data is used and shared</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Share Data for Research</p>
                  <p className="text-sm text-gray-600">Allow anonymized data to be used for diabetic foot research</p>
                </div>
                <input
                  type="checkbox"
                  checked={privacy.shareDataForResearch}
                  onChange={(e) => setPrivacy({ ...privacy, shareDataForResearch: e.target.checked })}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
              </div>

              <div className="border-t border-gray-200"></div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Allow Data Export</p>
                  <p className="text-sm text-gray-600">Enable downloading your complete medical data</p>
                </div>
                <input
                  type="checkbox"
                  checked={privacy.allowDataExport}
                  onChange={(e) => setPrivacy({ ...privacy, allowDataExport: e.target.checked })}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-800">GDPR Compliance</p>
              <p className="text-xs text-blue-600 mt-1">
                Your data is processed according to European data protection standards.
                You have the right to access, modify, or delete your data at any time.
              </p>
            </div>

            <button
              onClick={handlePrivacySave}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Privacy Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;