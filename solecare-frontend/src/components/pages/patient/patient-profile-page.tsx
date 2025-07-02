import React, { useState } from 'react';
import { 
  User, 
  Activity, 
  Shield, 
  Clock, 
  Heart, 
  AlertTriangle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Edit,
  Download,
  Eye,
  Settings,
  Target,
  TrendingUp,
  Smartphone
} from 'lucide-react';
import ClinicalRiskSection from './components/ClinicalRiskSection';
import FunctionalMetricsSection from './components/FunctionalMetricsSection';
import DeviceSensorSection from './components/DeviceSensorSection';
import PatientReportedSection from './components/PatientReportedSection';
import LongitudinalSection from './components/LongitudinalSection';
import { useNavigate } from 'react-router-dom';

const PatientProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const handleDataExport = () => {
    alert("Data Export Requested - Your medical data export has been initiated. You'll receive it within 24 hours.");
  };

  const handlePrivacyUpdate = () => {
    alert("Privacy Settings Updated - Your data privacy preferences have been saved successfully.");
  };

  const Badge = ({ children, variant = 'default', className = '' }) => {
    const variants = {
      default: 'bg-gray-100 text-gray-800 border-gray-200',
      outline: 'border bg-transparent'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}>
        {children}
      </span>
    );
  };

  const Button = ({ children, variant = 'default', className = '', onClick, ...props }) => {
    const variants = {
      default: 'bg-blue-600 hover:bg-blue-700 text-white',
      outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700'
    };
    
    return (
      <button 
        className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${variants[variant]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };

  const TabButton = ({ value, currentValue, onClick, children }) => {
    const isActive = value === currentValue;
    return (
      <button
        onClick={() => onClick(value)}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
          isActive 
            ? 'bg-blue-50 text-blue-700 border-blue-200' 
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
        }`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Maria Schmidt</h1>
                <p className="text-gray-600">Patient ID: DFS-2024-0321</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge className="bg-green-50 text-green-700 border-green-200">
                    Active Treatment
                  </Badge>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                    Type 2 Diabetes
                  </Badge>
                  <Badge className="bg-orange-50 text-orange-700 border-orange-200">
                    Risk Group III
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Timeline
              </Button>
              <Button variant="outline" className="bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200" onClick={() => navigate('/user-profile/settings')}>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Alert Section */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start">
            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-amber-800 text-sm">
              Next appointment scheduled for March 28, 2024 at 10:00 AM with Dr. Weber - Quarterly foot exam due
            </p>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="space-y-4">
          {/* Tab Navigation */}
          <div className="bg-white border border-blue-100 rounded-lg p-2">
            <div className="grid grid-cols-7 gap-1">
              <TabButton value="overview" currentValue={activeTab} onClick={setActiveTab}>
                <Activity className="w-4 h-4 mr-2" />
                Overview
              </TabButton>
              <TabButton value="clinical" currentValue={activeTab} onClick={setActiveTab}>
                <Target className="w-4 h-4 mr-2" />
                Clinical Risk
              </TabButton>
              <TabButton value="functional" currentValue={activeTab} onClick={setActiveTab}>
                <Activity className="w-4 h-4 mr-2" />
                Functional
              </TabButton>
              <TabButton value="devices" currentValue={activeTab} onClick={setActiveTab}>
                <Smartphone className="w-4 h-4 mr-2" />
                Devices
              </TabButton>
              <TabButton value="outcomes" currentValue={activeTab} onClick={setActiveTab}>
                <Heart className="w-4 h-4 mr-2" />
                Outcomes
              </TabButton>
              <TabButton value="longitudinal" currentValue={activeTab} onClick={setActiveTab}>
                <TrendingUp className="w-4 h-4 mr-2" />
                Timeline
              </TabButton>
              <TabButton value="privacy" currentValue={activeTab} onClick={setActiveTab}>
                <Shield className="w-4 h-4 mr-2" />
                Privacy
              </TabButton>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Personal Information */}
                <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
                  <div className="p-6 pb-3">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <User className="w-5 h-5 mr-2 text-blue-600" />
                      Personal Information
                    </h3>
                  </div>
                  <div className="px-6 pb-6 space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-600">Born: March 15, 1965</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-600">+49 30 12345678</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-600">maria.schmidt@email.com</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-600">Berlin, Germany</span>
                    </div>
                  </div>
                </div>

                {/* Current Treatment Status */}
                <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
                  <div className="p-6 pb-3">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-red-500" />
                      Treatment Status
                    </h3>
                  </div>
                  <div className="px-6 pb-6 space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Treatment Progress</span>
                        <span className="text-green-600 font-medium">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-600">Current Phase:</p>
                      <p className="font-medium text-gray-900">Orthopedic Shoe Adaptation</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-600">Days in Treatment:</p>
                      <p className="font-medium text-gray-900">142 days</p>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
                  <div className="p-6 pb-3">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-green-500" />
                      Recent Activity
                    </h3>
                  </div>
                  <div className="px-6 pb-6 space-y-3">
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">Temperature Check</p>
                      <p className="text-gray-600">2 hours ago</p>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">Questionnaire Completed</p>
                      <p className="text-gray-600">Yesterday</p>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">Appointment Scheduled</p>
                      <p className="text-gray-600">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clinical' && <ClinicalRiskSection />}
          {activeTab === 'functional' && <FunctionalMetricsSection />}
          {activeTab === 'devices' && <DeviceSensorSection />}
          {activeTab === 'outcomes' && <PatientReportedSection />}
          {activeTab === 'longitudinal' && <LongitudinalSection />}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
                  <div className="p-6 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-green-600" />
                      Data Privacy Controls
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Manage your medical data privacy and sharing preferences</p>
                  </div>
                  <div className="px-6 pb-6 space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Anonymous Research Data</p>
                          <p className="text-sm text-gray-600">Share anonymized data for diabetic foot research</p>
                        </div>
                        <Badge className="bg-green-50 text-green-700 border-green-200">
                          Enabled
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Healthcare Provider Access</p>
                          <p className="text-sm text-gray-600">Allow authorized providers to access your data</p>
                        </div>
                        <Badge className="bg-green-50 text-green-700 border-green-200">
                          Enabled
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Third-party Analytics</p>
                          <p className="text-sm text-gray-600">Share data with approved analytics partners</p>
                        </div>
                        <Badge className="bg-red-50 text-red-700 border-red-200">
                          Disabled
                        </Badge>
                      </div>
                    </div>
                    <Button onClick={handlePrivacyUpdate} className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Update Privacy Settings
                    </Button>
                  </div>
                </div>

                <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
                  <div className="p-6 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Data Management</h3>
                    <p className="text-sm text-gray-600 mt-1">Access and manage your stored medical data</p>
                  </div>
                  <div className="px-6 pb-6 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <button className="border border-gray-300 rounded-lg p-4 flex flex-col items-center space-y-2 hover:bg-gray-50 transition-colors">
                        <Eye className="w-5 h-5 text-blue-600" />
                        <span className="text-sm">View Data</span>
                      </button>
                      <button 
                        className="border border-gray-300 rounded-lg p-4 flex flex-col items-center space-y-2 hover:bg-gray-50 transition-colors"
                        onClick={handleDataExport}
                      >
                        <Download className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Export Data</span>
                      </button>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">GDPR Compliance</p>
                      <p className="text-xs text-blue-600 mt-1">
                        Your data is processed according to European data protection standards. 
                        You have the right to access, modify, or delete your data at any time.
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>Data retention: 10 years (medical requirement)</p>
                      <p>Last backup: March 21, 2024</p>
                      <p>Encryption: AES-256</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;