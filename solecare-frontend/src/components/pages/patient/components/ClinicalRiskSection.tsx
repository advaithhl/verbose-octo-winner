import React from 'react';
import { AlertTriangle, Target, Calendar } from 'lucide-react';

const ClinicalRiskSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Risk Classification & Goals Card */}
      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-0">
          <div className="flex items-center mb-2">
            <Target className="w-5 h-5 mr-2 text-orange-500" />
            <h3 className="text-lg font-semibold text-gray-900">Risk Classification & Goals</h3>
          </div>
          <p className="text-sm text-gray-500 mb-6">Current risk group and patient-defined care targets</p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-gray-600">Risk Group</p>
              <p className="text-lg font-semibold text-gray-900">RG III</p>
              <p className="text-xs text-orange-600">High Risk</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Diabetes Type</p>
              <p className="text-lg font-semibold text-gray-900">Type 2</p>
              <p className="text-xs text-blue-600">15 years duration</p>
            </div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Care Goals</p>
            <div className="space-y-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-300 mr-2">
                Ulcer Prevention
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-300 mr-2">
                Maintain Mobility
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-300">
                Reduce Pain
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Amputation & Wound Status Card */}
      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Amputation & Wound Status</h3>
          <p className="text-sm text-gray-500 mb-6">Current wound status and amputation history</p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">Amputation Status</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
              None
            </span>
          </div>
          <div className="space-y-3">
            <div className="p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <p className="font-medium text-gray-900">Active Wound - Left Foot</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-300">
                  Healing
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-600">Location:</span>
                  <span className="ml-1 font-medium">Plantar, 1st metatarsal</span>
                </div>
                <div>
                  <span className="text-gray-600">Size:</span>
                  <span className="ml-1 font-medium">1.2 x 0.8 cm</span>
                </div>
                <div>
                  <span className="text-gray-600">Ulcer-free days:</span>
                  <span className="ml-1 font-medium">0 (current episode)</span>
                </div>
                <div>
                  <span className="text-gray-600">Hospital-free days:</span>
                  <span className="ml-1 font-medium">142</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalRiskSection;