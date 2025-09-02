import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-muted" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">Let's collaborate on cybersecurity projects</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-card/50 rounded-xl p-6 border border-primary/30 mb-8">
              <div className="text-center mb-6">
                <i className="fas fa-terminal text-4xl text-primary mb-3"></i>
                <h3 className="text-xl font-bold">Contact Protocols</h3>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-background/60 rounded p-3 border border-primary/20">
                  <div className="text-primary">// Secure Communication Channels</div>
                  <div className="text-muted-foreground">
                    <span className="text-secondary">const</span> channels = {'{'}
                    <br />
                    {'  '}github: <span className="text-accent">"@Mk-dugri"</span>,
                    <br />
                    {'  '}youtube: <span className="text-accent">"@MAGICOFMATHEMATICS001"</span>,
                    <br />
                    {'  '}filefusion: <span className="text-accent">"filefusion.onrender.com"</span>
                    <br />
                    {'}'};
                  </div>
                </div>
                
                <div className="bg-background/60 rounded p-3 border border-secondary/20">
                  <div className="text-secondary">// Collaboration Areas</div>
                  <div className="text-muted-foreground">
                    • Security Research & Analysis<br />
                    • Bug Bounty Collaborations<br />
                    • Educational Content Creation<br />
                    • Open Source Tool Development
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-github">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className="fab fa-github text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <a 
                    href="https://github.com/Mk-dugri" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @Mk-dugri
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-youtube">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <i className="fab fa-youtube text-secondary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">YouTube</h3>
                  <a 
                    href="https://www.youtube.com/@MAGICOFMATHEMATICS001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    @MAGICOFMATHEMATICS001
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-accent text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a 
                    href="mailto:contact@mk-dugri.dev" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    contact@mk-dugri.dev
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 neon-border">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          data-testid="input-name"
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your.email@example.com" 
                          {...field} 
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="collaboration">Collaboration Opportunity</SelectItem>
                          <SelectItem value="research">Security Research</SelectItem>
                          <SelectItem value="bug-bounty">Bug Bounty</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5} 
                          placeholder="Your message..." 
                          {...field} 
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? (
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                  ) : (
                    <i className="fas fa-paper-plane mr-2"></i>
                  )}
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
