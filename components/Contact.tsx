import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'loading', message: '' });

    const formData = new FormData(e.currentTarget);
    // Note: User needs to get an Access Key from https://web3forms.com/
    formData.append('access_key', 'a0e37750-a2ba-4860-a5a0-618b9ad53261');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState({ status: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        (e.target as HTMLFormElement).reset();
      } else {
        setFormState({ status: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setFormState({ status: 'error', message: 'Failed to connect to the server. Please check your internet.' });
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-teal-400 font-mono text-sm tracking-widest mb-4 uppercase">.connect()</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-8">Get In Touch</h3>
              <p className="text-gray-400 text-lg mb-12">
                I'm currently looking for new opportunities as a Java Engineer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-teal-500 transition-all duration-300">
                    <Mail className="text-gray-400 group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-bold tracking-widest">Email Me</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-teal-400 transition-colors">{PERSONAL_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-purple-500 transition-all duration-300">
                    <Phone className="text-gray-400 group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-bold tracking-widest">Call Me</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white hover:text-purple-400 transition-colors">{PERSONAL_INFO.phone}</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-blue-500 transition-all duration-300">
                    <MapPin className="text-gray-400 group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-bold tracking-widest">Location</p>
                    <p className="text-white">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="How can I help you?"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {formState.status === 'success' && (
                  <div className="flex items-center gap-2 text-teal-400 bg-teal-400/10 p-4 rounded-xl">
                    <CheckCircle size={20} />
                    <span>{formState.message}</span>
                  </div>
                )}

                {formState.status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl">
                    <AlertCircle size={20} />
                    <span>{formState.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState.status === 'loading'}
                  className="w-full bg-teal-500 hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
                >
                  {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
