import React from 'react';
import { Scan, Smartphone, Download, Activity } from 'lucide-react';

const DeviceSensorSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Custom Shoe & Scan Data Card */}
      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-0">
          <div className="flex items-center mb-2">
            <Scan className="w-5 h-5 mr-2 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900">Custom Shoe & Scan Data</h3>
          </div>
          <p className="text-sm text-gray-500 mb-6">Device specifications and fitting measurements</p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Shoe Type</p>
              <p className="text-lg font-semibold text-gray-900">Custom Therapeutic</p>
              <p className="text-xs text-blue-600">Position: Bilateral</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">Last Fitting</p>
              <p className="text-lg font-semibold text-gray-900">Mar 1, 2024</p>
              <p className="text-xs text-purple-600">6 months ago</p>
            </div>
          </div>
          <div className="border-t border-gray-200 my-4"></div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900">3D Foot Scan (DVM)</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                Available
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900">2D Plantar Scan</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                Available
              </span>
            </div>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Download className="w-4 h-4 mr-2" />
              Download Scan Data
            </button>
          </div>
        </div>
      </div>

      {/* Wear-time vs Activity Analysis Card */}
      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-0">
          <div className="flex items-center mb-2">
            <Activity className="w-5 h-5 mr-2 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-900">Wear-time vs Activity Analysis</h3>
          </div>
          <p className="text-sm text-gray-500 mb-6">Sensor data correlation between wearing time and activity</p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-xl font-bold text-green-600">85%</p>
              <p className="text-sm text-gray-600">Wear compliance</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-xl font-bold text-blue-600">72%</p>
              <p className="text-sm text-gray-600">Activity correlation</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Device wearing during activity</span>
              <span className="text-green-600 font-medium">91%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '91%'}}></div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Average daily wear</span>
              <span className="font-medium text-gray-900">8.5 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Activity during wear</span>
              <span className="font-medium text-gray-900">2,847 steps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceSensorSection;