import React, { useState } from 'react';

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: '',
    budget: '',
    details: '',
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const goals = [
    "Build a Website", "Build an App", "Grow My Business", 
    "Redesign My Brand", "Create Content", "Automate With AI", "Something Else"
  ];
  
  const budgets = [
    "Under $1,000", "$1,000–$5,000", "$5,000–$10,000", "$10,000+", "Custom Budget"
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Add the Web3Forms access key
      const web3FormsData = {
        ...formData,
        access_key: 'b4cbc6b5-9761-4583-87c7-8167ad9bf9d3', // Added the user's real key here
        subject: `New Lead from ${formData.name} - ${formData.company || 'No Company'}`
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(web3FormsData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setStatus('success');
      // Reset form after success
      setTimeout(() => {
        setStep(1);
        setStatus('idle');
        setFormData({ goal: '', budget: '', details: '', name: '', email: '', company: '', phone: '' });
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 bg-white text-black relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E')] opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4">
            HAVE AN IDEA?<br/>
            LET'S MAKE IT REAL.
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Tell us what you're building, fixing or growing.
          </p>
        </div>

        <div className="bg-[#FAFAFA] border border-gray-200 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          {/* Progress Indicator */}
          <div className="flex items-center space-x-2 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                  i <= step ? 'bg-black' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
            {/* Step 1 */}
            <div className={step === 1 ? 'block' : 'hidden'}>
              <h3 className="text-2xl font-display font-bold mb-6">I'm looking to...</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => { setFormData({ ...formData, goal: g }); handleNext(); }}
                    className={`p-4 text-left rounded-xl border-2 transition-all font-medium ${
                      formData.goal === g ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-gray-400 bg-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className={step === 2 ? 'block' : 'hidden'}>
              <h3 className="text-2xl font-display font-bold mb-6">Estimated Budget</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => { setFormData({ ...formData, budget: b }); handleNext(); }}
                    className={`p-4 text-left rounded-xl border-2 transition-all font-medium ${
                      formData.budget === b ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-gray-400 bg-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <button 
                type="button" 
                onClick={() => setStep(1)}
                className="text-gray-500 hover:text-black font-semibold text-sm tracking-widest uppercase"
              >
                ← Back
              </button>
            </div>

            {/* Step 3 */}
            <div className={step === 3 ? 'block' : 'hidden'}>
              <h3 className="text-2xl font-display font-bold mb-6">Project Details</h3>
              <textarea
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell us a bit about your project, timeline, and goals..."
                className="w-full bg-white border-2 border-gray-200 rounded-xl p-6 min-h-[200px] focus:outline-none focus:border-black resize-none mb-6 font-medium placeholder-gray-400"
                required
              />
              <div className="flex justify-between items-center">
                <button 
                  type="button" 
                  onClick={() => setStep(2)}
                  className="text-gray-500 hover:text-black font-semibold text-sm tracking-widest uppercase"
                >
                  ← Back
                </button>
                <button 
                  type="button"
                  onClick={handleNext}
                  disabled={!formData.details.trim()}
                  className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              </div>
            </div>

            {/* Step 4 */}
            <div className={step === 4 ? 'block' : 'hidden'}>
              <h3 className="text-2xl font-display font-bold mb-6">Your Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-black font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-black font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-black font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-black font-medium"
                  />
                </div>
              </div>
              
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg font-medium text-sm">
                  Something went wrong. Please try again.
                </div>
              )}
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg font-medium text-sm">
                  Message received! We'll be in touch shortly.
                </div>
              )}

              <div className="flex justify-between items-center">
                <button 
                  type="button" 
                  onClick={() => setStep(3)}
                  className="text-gray-500 hover:text-black font-semibold text-sm tracking-widest uppercase"
                >
                  ← Back
                </button>
                <button 
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all w-full md:w-auto"
                >
                  {status === 'submitting' ? 'Submitting...' : 'START THE CONVERSATION →'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
