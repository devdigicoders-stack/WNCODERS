import React from 'react';
import { FaUsers, FaBullseye, FaRocket, FaChartLine } from 'react-icons/fa';

export default function Partnership() {
  return (
    <section className="w-full py-20 px-6 sm:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-[#00C265] text-sm font-bold tracking-[0.15em] uppercase mb-3 block">
              OUR PARTNERSHIP
            </span>
            <h2 className="text-[#040f1a] text-3xl md:text-[40px] font-bold leading-tight">
              Where Technology Meets <br className="hidden md:block" />
              <span className="text-[#00C265]">Business Growth</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xl text-[15px] leading-relaxed">
            Our partnership is built on a shared belief that technology, creativity and strategy together create powerful digital experiences.
          </p>
        </div>

        {/* 4 Items Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-300">
          
          {/* Card 1 */}
          <div className="flex items-start gap-4 lg:px-8 first:pl-0 last:pr-0">
            <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-white border-2 border-[#00C265] flex items-center justify-center text-[#00C265]">
              <FaUsers size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#040f1a] text-[17px] mb-2">Stronger Together</h4>
              <p className="text-gray-500 text-[13.5px] leading-relaxed">
                Two expert teams working as one to deliver exceptional results.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="flex items-start gap-4 lg:px-8 first:pl-0 last:pr-0">
            <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-white border-2 border-[#00C265] flex items-center justify-center text-[#00C265]">
              <FaBullseye size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#040f1a] text-[17px] mb-2">Client Focused</h4>
              <p className="text-gray-500 text-[13.5px] leading-relaxed">
                Your success is our priority. We build solutions that drive real business impact.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4 lg:px-8 first:pl-0 last:pr-0">
            <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-white border-2 border-[#00C265] flex items-center justify-center text-[#00C265]">
              <FaRocket size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#040f1a] text-[17px] mb-2">Future Ready</h4>
              <p className="text-gray-500 text-[13.5px] leading-relaxed">
                Leveraging innovation and the latest technologies to build future-ready solutions.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start gap-4 lg:px-8 first:pl-0 last:pr-0">
            <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-white border-2 border-[#00C265] flex items-center justify-center text-[#00C265]">
              <FaChartLine size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#040f1a] text-[17px] mb-2">Long Term Value</h4>
              <p className="text-gray-500 text-[13.5px] leading-relaxed">
                We believe in lasting partnerships and delivering continuous value to your business.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
