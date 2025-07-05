'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 bg-chocolaty-dark">
      {/* Header with Background Image */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-cream mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-beige leading-relaxed">
              I'd love to hear from you! Whether you have a question about my work, 
              want to collaborate, or just want to say hello, feel free to reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-lg bg-chocolaty-medium border-chocolaty">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-cream">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-beige">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={`mt-1 bg-chocolaty-dark border-chocolaty text-cream ${errors.name ? 'border-red-500' : ''}`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-beige">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`mt-1 bg-chocolaty-dark border-chocolaty text-cream ${errors.email ? 'border-red-500' : ''}`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-beige">
                        Phone (Optional)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="mt-1 bg-chocolaty-dark border-chocolaty text-cream"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-beige">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={`mt-1 min-h-[120px] bg-chocolaty-dark border-chocolaty text-cream ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Tell me about your project, question, or just say hello..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-chocolaty-light hover:bg-mocha text-cream py-3 transition-all duration-300 hover:scale-105"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cream mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-cream mb-6">
                  Let's Connect
                </h2>
                <p className="text-beige leading-relaxed mb-8">
                  I'm always excited to connect with fellow writers, readers, and creative minds. 
                  Whether you're looking for writing advice, collaboration opportunities, or just 
                  want to share your thoughts on my work, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-md transition-shadow duration-300 bg-chocolaty-medium border-chocolaty">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-chocolaty-light rounded-full flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-cream" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-cream">Email</h3>
                        <p className="text-beige">manavpuri2013@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow duration-300 bg-chocolaty-medium border-chocolaty">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-chocolaty-light rounded-full flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-cream" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-cream">Phone</h3>
                        <p className="text-beige">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow duration-300 bg-chocolaty-medium border-chocolaty">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-chocolaty-light rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-cream" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-cream">Location</h3>
                        <p className="text-beige">New York, NY</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow duration-300 bg-chocolaty-medium border-chocolaty">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-chocolaty-light rounded-full flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-cream" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-cream">Response Time</h3>
                        <p className="text-beige">Usually within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-chocolaty-medium border border-chocolaty p-8 rounded-lg shadow-xl max-w-md mx-4"
            >
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-cream mb-2">
                  Message Sent!
                </h3>
                <p className="text-beige">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}