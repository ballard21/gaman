import { Building2, Users, TrendingUp, Award } from 'lucide-react';

export default function HeaderBanner() {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-12 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Business Consulting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering organizations with strategic insights and innovative solutions 
            to achieve sustainable growth and operational excellence.
          </p>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-gray-600">Companies Served</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-gray-600">Expert Consultants</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}