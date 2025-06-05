import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: (response) => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@humanai.dev",
      description: "Send us an email anytime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM PST",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Schedule a meeting",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-slate-300 font-medium tracking-wide uppercase text-xs sm:text-sm mb-4">
              get in touch with us
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
              Let's Create <span className="text-slate-300">Together</span>
            </h1>
            <p className="text-slate-100 text-base sm:text-lg max-w-2xl mx-auto mb-6 lg:mb-8 px-4">
              Ready to transform your ideas into reality? We'd love to hear about your project and explore how we can help bring your vision to life.
            </p>
            
            {/* Contact Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
              <div className="bg-slate-500/20 rounded-lg px-6 py-3 backdrop-blur-sm border border-slate-400/30">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-slate-300" />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">500+</div>
                    <div className="text-slate-200 text-sm">Messages</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-500/20 rounded-lg px-6 py-3 backdrop-blur-sm border border-slate-400/30">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-slate-300" />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">&lt;24h</div>
                    <div className="text-slate-200 text-sm">Response</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-500/20 rounded-lg px-6 py-3 backdrop-blur-sm border border-slate-400/30">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-slate-300" />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">98%</div>
                    <div className="text-slate-200 text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Send us a message</h2>
                <p className="text-slate-200/80">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-200">Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Your full name"
                              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-slate-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-200">Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              placeholder="your@email.com"
                              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-slate-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="What's this about?"
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-slate-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Tell us about your project..."
                            rows={6}
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-slate-300 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={mutation.isPending}
                    className="w-full bg-slate-600 hover:bg-slate-700 text-white py-4 h-auto font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    {mutation.isPending ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-slate-300/50 transition-all duration-500 hover:transform hover:scale-105">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                          <p className="text-slate-300 font-medium">{info.details}</p>
                          <p className="text-slate-400 text-sm">{info.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>

                    {/* Floating accent */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse ${
                      index % 3 === 0 ? 'bg-blue-400' : 
                      index % 3 === 1 ? 'bg-green-400' : 'bg-purple-400'
                    }`}></div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-slate-500/20 to-gray-500/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose HUMANAI?</h3>
                <div className="space-y-4 text-slate-200/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p>Expert AI integration and modern web development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p>Personalized solutions tailored to your needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p>Fast turnaround with exceptional quality</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p>Ongoing support and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-slate-500/20 to-gray-500/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-slate-100/80 mb-6 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their ideas into successful digital products with HUMANAI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group">
                  Schedule a Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group">
                  View Portfolio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}