import  React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, User, Briefcase, GraduationCap, Award, FileText, Menu, X, Download, Calendar, Building } from 'lucide-react';

interface EducationItem {
  year: string;
  institute: string;
  exam: string;
  percentage: string;
}

interface Client {
  name: string;
  type: string;
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  const education: EducationItem[] = [
    { year: '2023', institute: 'Indira Gandhi National Open University', exam: 'M.Com', percentage: '60%' },
    { year: '2021', institute: 'ICAI', exam: 'CA Inter Group 2', percentage: '52%' },
    { year: '2019', institute: 'ICAI', exam: 'CA Inter Group 1', percentage: '54%' },
    { year: '2021', institute: 'Delhi University', exam: 'B.Com', percentage: '75%' },
    { year: '2017', institute: 'ICAI', exam: 'Common Proficiency Test', percentage: '56%' },
    { year: '2017', institute: 'DAV Bariatu (CBSE), Ranchi', exam: 'Intermediate (Commerce)', percentage: '81%' },
    { year: '2015', institute: 'Don Bosco School (ICSE), Gumla', exam: 'Matriculation', percentage: '80%' }
  ];

  const clients: Client[] = [
    { name: "McDonald's", type: "MNC" },
    { name: "Engineers India Ltd.", type: "PSU" },
    { name: "Power Grid Corporation of India Ltd.", type: "PSU" },
    { name: "Max Bupa Life Insurance", type: "Insurance" },
    { name: "G4S Security Solutions", type: "Security" },
    { name: "Turnor India Pvt. Ltd.", type: "Private" },
    { name: "Canara Bank", type: "Banking" },
    { name: "Punjab & Sind Bank", type: "Banking" },
    { name: "Bank of Baroda", type: "Banking" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">Gupta (CA)</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Education', 'Clients'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {['About', 'Experience', 'Education', 'Clients'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 gradient-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-white">
              <div className={`${isVisible.hero ? 'animate-fadeInUp' : 'opacity-0'}`}>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Gupta
                  <span className="block text-2xl lg:text-3xl font-normal text-blue-200">
                    CA Finalist
                  </span>
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Skilled in accounting, auditing, and taxation with hands-on experience in assurance and consultancy assignments
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>yogitagupta6599@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>8527032669</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>South Delhi, India</span>
                  </div>
                </div>
                <button
                  onClick={() => scrollToSection('about')}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div>
                <img
                  src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/c8593729-7610-4ac7-c493-288fe72d4a00/public"
                  alt="Gupta - CA Finalist"
                  className="w-60 h-70 object-cover object-top rounded-full shadow-2xl border-8 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`${isVisible.about ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <User className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Career Objective</h3>
                  <p className="text-gray-600">
                    I am a CA Final student with a strong foundation in accounting, auditing, and taxation, 
                    backed by practical experience. Skilled at working under pressure with patience and dedication.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <Award className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Accounting and Auditing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      ERP Systems (Finnacle, Oracle)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Risk Control Matrix (RCM)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Statutory & Tax Audits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`${isVisible.experience ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center mb-16">Work Experience</h2>
            
            <div className="space-y-8">
              {/* T.R. Chadha & Co. LLP */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Article Associate</h3>
                    <p className="text-blue-600 font-medium">T.R. Chadha & Co. LLP (New Delhi)</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 lg:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>Feb 2021 - Mar 2023</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Key Responsibilities</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Drafted Risk Control Matrix (RCM) for business processes</li>
                      <li>• Conducted walkthroughs and testing of controls</li>
                      <li>• Identified control gaps and prepared reports</li>
                      <li>• Prepared SOPs and process narratives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Audit Areas</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Revenue & Purchase cycles</li>
                      <li>• PPE & Payroll audits</li>
                      <li>• Accounts receivables & payables</li>
                      <li>• Tax Audit under Sec. 44AB</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* N.K. Bhargava & Co. */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Article Associate</h3>
                    <p className="text-green-600 font-medium">N.K. Bhargava & Co. (New Delhi)</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 lg:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>Feb 2020 - Jan 2021</span>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  Gained foundational experience in statutory audits, concurrent audits of banks, and 
                  maintenance of books for central statutory audit processes.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-12 bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-center">Key Achievement</h3>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg">
                  <Award className="w-5 h-5" />
                  <span>Improved Tax Audit efficiency by 30% through streamlined processes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`${isVisible.education ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center mb-16">Education</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Year</th>
                    <th className="px-6 py-4 text-left">Institute / University</th>
                    <th className="px-6 py-4 text-left">Examination</th>
                    <th className="px-6 py-4 text-left">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {education.map((edu, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-blue-600">{edu.year}</td>
                      <td className="px-6 py-4 text-gray-800">{edu.institute}</td>
                      <td className="px-6 py-4 text-gray-600">{edu.exam}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                          {edu.percentage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`${isVisible.clients ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center mb-16">Clients Handled</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Building className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{client.name}</h3>
                      <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {client.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 text-gray-600">
                <FileText className="w-5 h-5" />
                <span>Industries: Power, Service, Trading, Banking, Insurance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-300">
              <a href="mailto:yogitagupta6599@gmail.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="w-5 h-5" />
                yogitagupta6599@gmail.com
              </a>
              <a href="tel:8527032669" className="flex items-center gap-2 hover:text-white">
                <Phone className="w-5 h-5" />
                8527032669
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                South Delhi, India
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-gray-400">
            <p>&copy; 2024 Gupta (CA Finalist). Professional Portfolio.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
 