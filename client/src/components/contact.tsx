import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, User, MessageSquare } from "lucide-react";

// ✅ Zod schema for form validation
const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(1, "Message is required"),
});

type InsertContact = z.infer<typeof insertContactSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
    criteriaMode: "all",
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await fetch("https://formspree.io/f/xyzjzqrw ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message.");
      return response.json();
    },

    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      form.reset();
    },

    onError: (error: any) => {
      toast({
        title: "Failed to send",
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
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Write to HUMANAI support team
        </h1>
        <p className="text-gray-300 text-lg">
          If you have any questions or comments about HUMANAI, please contact us
        </p>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-emerald-500/20 mb-12 hover:scale-105 hover:shadow-2xl hover:border-emerald-400/40 hover:bg-slate-800/70 transition-all duration-300">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Send us a message
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
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

            {/* Email */}
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

            {/* Message */}
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
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Send Button - Always Enabled */}
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
    </div>
  );
}
