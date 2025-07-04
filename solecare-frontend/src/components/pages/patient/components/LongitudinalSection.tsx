import React from 'react';
import { Clock, TrendingUp, Calendar, FileText } from 'lucide-react';

const LongitudinalSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-500" />
            Timeline View
          </h3>
          <p className="text-sm text-gray-600 mt-1">Longitudinal tracking of key health metrics</p>
        </div>
        <div className="px-6 pb-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Wound Healing Progress</p>
                <p className="text-xs text-gray-600">March 20, 2024</p>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 border border-green-300 rounded-md mt-1">
                  Improved
                </span>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Risk Group Assessment</p>
                <p className="text-xs text-gray-600">March 15, 2024</p>
                <div className="flex space-x-2 mt-1">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-100 text-red-800 border border-red-300 rounded-md">
                    Was: RG IV
                  </span>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 border border-orange-300 rounded-md">
                    Now: RG III
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="w-3 h-3 bg-purple-500 rounded-full mt-1"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Weight Measurement</p>
                <p className="text-xs text-gray-600">March 10, 2024</p>
                <p className="text-sm text-purple-600 mt-1">BMI: 28.5 kg/m² (-0.8)</p>
              </div>
            </div>
          </div>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Full Timeline
          </button>
        </div>
      </div>

      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            Follow-up & Events
          </h3>
          <p className="text-sm text-gray-600 mt-1">Repeat measures and significant clinical events</p>
        </div>
        <div className="px-6 pb-6 space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <p className="font-medium text-gray-900">Upcoming Assessments</p>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-md">
                  Due Soon
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p className="text-gray-600">• Quarterly foot exam - March 28, 2024</p>
                <p className="text-gray-600">• HbA1c repeat - April 15, 2024</p>
                <p className="text-gray-600">• Device assessment - April 30, 2024</p>
              </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Last Complete Assessment</span>
                <span className="text-sm font-medium text-gray-900">March 15, 2024</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">New Wound Events</span>
                <span className="text-sm font-medium text-gray-900">1 (current)</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Healing Events</span>
                <span className="text-sm font-medium text-gray-900">3 (last year)</span>
              </div>
            </div>
          </div>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <FileText className="w-4 h-4 mr-2" />
            Schedule Next Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default LongitudinalSection;