import React from 'react';
import { Star, Brain, Heart, FileText } from 'lucide-react';

const PatientReportedSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            Device Acceptance
          </h3>
          <p className="text-sm text-gray-600 mt-1">Patient satisfaction with orthopedic provision</p>
        </div>
        <div className="px-6 pb-6 space-y-4">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Aesthetics</span>
                <span className="text-yellow-600 font-medium">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Practicability</span>
                <span className="text-green-600 font-medium">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Weight Comfort</span>
                <span className="text-green-600 font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Ease of Use</span>
                <span className="text-blue-600 font-medium">88%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg">
            <p className="text-sm font-medium text-yellow-800">Overall Satisfaction</p>
            <p className="text-2xl font-bold text-yellow-600">86%</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-blue-100 rounded-lg shadow-sm">
        <div className="p-6 pb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-purple-500" />
            Functional Understanding & Psychology
          </h3>
          <p className="text-sm text-gray-600 mt-1">Patient comprehension and psychological wellbeing</p>
        </div>
        <div className="px-6 pb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">Device Understanding</p>
              <p className="text-lg font-semibold text-gray-900">Excellent</p>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-purple-400 text-purple-400" />
                ))}
              </div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Quality of Life</p>
              <p className="text-lg font-semibold text-gray-900">Good</p>
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 border border-green-300 rounded-md mt-1">
                Improving
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Mood Assessment</span>
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-md">
                Stable
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Treatment Adherence</span>
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded-md">
                High
              </span>
            </div>
          </div>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <FileText className="w-4 h-4 mr-2" />
            Complete Psychology Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientReportedSection;