import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ArrowRight, Mail, User, MessageSquare } from "lucide-react";

/**
 * Contact form component for HUMANAI portfolio website
 * Handles user inquiries with form validation, submission, and email notifications
 * Uses React Hook Form with Zod validation and TanStack Query for API management
 * @returns JSX.Element - Complete contact section with form and validation
 */
export default function Contact() {
  // Toast notifications for user feedback
  const { toast } = useToast();
  // Query client for cache management
  const queryClient = useQueryClient();

  // Form configuration with Zod schema validation and default values
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema), // Zod validation resolver
    defaultValues: {
      name: "",    // User's full name
      email: "",   // User's email address
      message: "", // User's inquiry message
    },
  });

  // Mutation for handling contact form submission with success/error handling
  const mutation = useMutation({
    /**
     * Mutation function to submit contact form data to API
     * @param data - Validated contact form data containing name, email, and message
     * @returns Promise<any> - API response result
     */
    mutationFn: async (data: InsertContact) => {
      const result = await apiRequest("/api/contacts", "POST", data);
      return result;
    },
    
    /**
     * Success handler for successful form submission
     * Shows success toast, resets form, and invalidates contact cache
     */
    onSuccess: () => {
      toast({
        title: "Message received!",
        description: "Your contact information has been recorded. We'll respond within 24 hours.",
      });
      form.reset(); // Clear form fields
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] }); // Refresh cache
    },
    
    /**
     * Error handler for failed form submission
     * @param error - Error object from failed API request
     */
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Write to HUMANAI support team
        </h1>
        <p className="text-gray-300 text-lg">
          If you have any questions or comments about HUMANAI, please contact us
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-emerald-500/20 mb-12 hover:scale-105 hover:shadow-2xl hover:border-emerald-400/40 hover:bg-slate-800/70 transition-all duration-300">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Send us a message</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
                      <Input
                        {...field}
                        placeholder="Your Name"
                        className="pl-12 h-14 bg-slate-900/50 border-emerald-500/30 rounded-xl text-white placeholder-gray-400 focus:bg-slate-900/70 focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email"
                        className="pl-12 h-14 bg-slate-900/50 border-emerald-500/30 rounded-xl text-white placeholder-gray-400 focus:bg-slate-900/70 focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-6 text-emerald-400 w-5 h-5" />
                      <Textarea
                        {...field}
                        placeholder="Your message"
                        className="pl-12 pt-6 min-h-32 bg-slate-900/50 border-emerald-500/30 rounded-xl text-white placeholder-gray-400 focus:bg-slate-900/70 focus:border-emerald-500 transition-all resize-none"
                      />
                    </div>
                  </FormControl>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">Max characters</span>
                    <span className="text-xs text-gray-500">0/500</span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="w-full h-14 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {mutation.isPending ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Send
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>

      {/* Additional Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-emerald-500/20 rounded-xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-teal-500/20 hover:border-emerald-400/40 transition-all duration-300 cursor-pointer">
          <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
          <p className="text-sm font-medium text-white mb-1">Email</p>
          <p className="text-xs text-gray-300">humanai7.enquiries@gmail.com</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 rounded-xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400/40 transition-all duration-300 cursor-pointer">
          <MessageSquare className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <p className="text-sm font-medium text-white mb-1">Response Time</p>
          <p className="text-xs text-gray-300">Within 24 hours</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-teal-500/20 rounded-xl backdrop-blur-sm hover:scale-105 hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-emerald-500/20 hover:border-teal-400/40 transition-all duration-300 cursor-pointer">
          <User className="w-8 h-8 text-teal-400 mx-auto mb-3" />
          <p className="text-sm font-medium text-white mb-1">Support</p>
          <p className="text-xs text-gray-300">24/7 Available</p>
        </div>
      </div>
    </div>
  );
}