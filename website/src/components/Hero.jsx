import React from 'react';
import { ArrowRight, Github, Linkedin, Database, Shield, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient - Subtle and Clean */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              Available for Data Science Roles
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Turning Raw Data into <br />
              <span className="text-brand-600">Actionable Intelligence.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Hi, I'm <strong>Vedashree .B</strong>. I bridge the gap between machine learning models and production systems. 
              Specializing in <strong>Security Analytics</strong> and <strong>Healthcare Decision Systems</strong>, I build software that doesn't just predict the future—it secures it.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-md hover:shadow-lg"
              >
                View Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-all"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Abstract "Data Card" Visual */}
          <div className="hidden lg:block relative">
            {/* Main Card */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 transform rotate-1 hover:rotate-0 transition-all duration-500">
              
              {/* Fake Terminal Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-auto text-xs text-slate-400 font-mono">analysis_pipeline.py</div>
              </div>

              {/* Fake Code / Metrics */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 text-brand-600 rounded-md">
                      <Database size={18} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Dataset Processed</div>
                      <div className="font-bold text-slate-800">2.4M Records</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 text-green-600 rounded-md">
                      <Activity size={18} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Model Accuracy</div>
                      <div className="font-bold text-slate-800">94.8%</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-md">
                      <Shield size={18} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Threats Blocked</div>
                      <div className="font-bold text-slate-800">Active</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <p><span className="text-purple-600">def</span> <span className="text-blue-600">detect_anomaly</span>(data):</p>
                <p className="pl-4">risk_score = model.predict(data)</p>
                {/* Fixed the > symbol below using &gt; */}
                <p className="pl-4"><span className="text-purple-600">return</span> risk_score &gt; <span className="text-orange-500">0.85</span></p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;