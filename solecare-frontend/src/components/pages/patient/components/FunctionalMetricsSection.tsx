import React from 'react';
import { Activity, Footprints, Stethoscope, Calendar } from 'lucide-react';

const FunctionalMetricsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Activity Metrics Card */}
      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-3">
          <div className="flex items-center mb-2">
            <Activity className="w-5 h-5 mr-2 text-purple-500" />
            <h3 className="text-lg font-semibold text-gray-900">Activity Metrics</h3>
          </div>
          <p className="text-sm text-gray-500">Daily activity and mobility tracking</p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">3,247</p>
            <p className="text-sm text-gray-600">Steps today</p>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Daily walking distance</span>
              <span className="text-purple-600 font-medium">2.1 km</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '70%'}}></div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Average (7 days)</span>
              <span className="font-medium text-gray-900">2.8 km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Exceptional activities</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                Walking
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Foot Deformity Card */}
      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-3">
          <div className="flex items-center mb-2">
            <Footprints className="w-5 h-5 mr-2 text-orange-500" />
            <h3 className="text-lg font-semibold text-gray-900">Foot Deformity</h3>
          </div>
          <p className="text-sm text-gray-500">Current foot structure assessment</p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-gray-600">Primary Deformity</p>
              <p className="text-lg font-semibold text-gray-900">Hallux Valgus</p>
              <p className="text-xs text-orange-600">Moderate degree</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600">Secondary Issues</p>
              <div className="space-y-1 mt-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-300 mr-1 mb-1">
                  Hammer Toe
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-300">
                  Pes Planus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Care Frequency Card */}
      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-3">
          <div className="flex items-center mb-2">
            <Stethoscope className="w-5 h-5 mr-2 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-900">Care Frequency</h3>
          </div>
          <p className="text-sm text-gray-500">Regular care visit tracking</p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Podiatrist Visits</p>
                <p className="text-xs text-gray-600">Last: March 18, 2024</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-300">
                Monthly
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Physician Foot Exam</p>
                <p className="text-xs text-gray-600">Last: March 10, 2024</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-300">
                Quarterly
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalMetricsSection;