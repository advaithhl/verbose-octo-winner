import { 
  Users, 
  Activity, 
  TrendingUp, 
  Shield, 
  Heart, 
  Calendar,
  FileText,
  Stethoscope,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">DiabetCare Registry</h1>
                <p className="text-sm text-gray-600">Comprehensive Diabetic Foot Care Management</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Patient Care Registry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive tracking and management system for diabetic foot care, 
            integrating clinical assessments, device monitoring, and patient outcomes.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"  onClick={() => navigate('/login')}>
            <Users className="w-5 h-5 mr-2" />
            Join Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-blue-100 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  <Stethoscope className="w-5 h-5 mr-2 text-blue-500" />
                  Clinical Assessment
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive risk evaluation and wound monitoring
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Risk Group Classification (RG I-IV)</li>
                <li>• Wound tracking and healing progress</li>
                <li>• Amputation status monitoring</li>
                <li>• Treatment adherence assessment</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-green-100 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  <Activity className="w-5 h-5 mr-2 text-green-500" />
                  Device & Sensor Data
                </h3>
                <p className="text-sm text-gray-600">
                  Real-time monitoring and compliance tracking
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom footwear monitoring</li>
                <li>• Activity correlation analysis</li>
                <li>• Wear-time vs. activity tracking</li>
                <li>• 2D/3D foot scan integration</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-purple-100 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 mr-2 text-purple-500" />
                  Longitudinal Tracking
                </h3>
                <p className="text-sm text-gray-600">
                  Long-term trends and outcome analysis
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Timeline view of health metrics</li>
                <li>• Treatment outcome tracking</li>
                <li>• Risk group progression</li>
                <li>• Healing event documentation</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-orange-100 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  <Heart className="w-5 h-5 mr-2 text-orange-500" />
                  Patient Outcomes
                </h3>
                <p className="text-sm text-gray-600">
                  Quality of life and satisfaction metrics
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Device acceptance ratings</li>
                <li>• Functional understanding assessment</li>
                <li>• Quality of life indicators</li>
                <li>• Patient-reported outcomes</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-indigo-100 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-indigo-500" />
                  Care Coordination
                </h3>
                <p className="text-sm text-gray-600">
                  Multi-disciplinary team management
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Role-based access control</li>
                <li>• Follow-up scheduling</li>
                <li>• Care team notifications</li>
                <li>• Assessment reminders</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-teal-100 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  <Shield className="w-5 h-5 mr-2 text-teal-500" />
                  Data Security
                </h3>
                <p className="text-sm text-gray-600">
                  HIPAA-compliant data management
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Encrypted data storage</li>
                <li>• Audit trail logging</li>
                <li>• Privacy controls</li>
                <li>• Secure data export</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-blue-500" />
            Registry Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">127</div>
              <div className="text-sm text-gray-600">Active Patients</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">89%</div>
              <div className="text-sm text-gray-600">Compliance Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">34</div>
              <div className="text-sm text-gray-600">Healed Wounds</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">15</div>
              <div className="text-sm text-gray-600">Care Team Members</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 DiabetCare Registry. Advanced healthcare management system.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;