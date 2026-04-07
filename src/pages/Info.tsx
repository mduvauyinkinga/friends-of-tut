import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Palette, Camera, BookOpen, Music } from "lucide-react";

const roles = [
  { icon: <Palette size={28} className="text-primary-foreground" />, title: "Fashion Team", desc: "Styling, design direction, and fashion show coordination.", contact: "fashion@friendsoftut.co.za" },
  { icon: <Camera size={28} className="text-primary-foreground" />, title: "Media Team", desc: "Photography, videography, editing, and visual storytelling.", contact: "media@friendsoftut.co.za" },
  { icon: <BookOpen size={28} className="text-primary-foreground" />, title: "Content Creation", desc: "Social media management, copywriting, and brand voice.", contact: "content@friendsoftut.co.za" },
  { icon: <Music size={28} className="text-primary-foreground" />, title: "Music Team", desc: "DJ sets, live performances, playlists, and sound curation.", contact: "music@friendsoftut.co.za" },
];

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  comment: z.string().min(10, "Comment must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Info = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent("Friends of TUT - Comment from " + data.name);
    const body = encodeURIComponent(data.comment + "\n\nFrom: " + data.name + " (" + data.email + ")");
    window.location.href = `mailto:friendsoftut@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening email client with your comment! Thanks for the feedback 🎉");
    form.reset();
  };

  return (
    <>
      <section className="gradient-hero py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl text-primary-foreground mb-4">DEPARTMENTS & ROLES</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Cav the different Departments with each having a role to play to make sure FriendsofTUT keeps SETTING THE BAR.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl text-center mb-10">DEPARTMENTS & ROLES</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {roles.map((r) => (
              <div key={r.title} className="p-6 rounded-xl border border-border bg-card hover:border-secondary transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 border-2 border-border/50 hover:border-primary/50 transition-colors">
                  {r.icon}
                </div>
                <h3 className="text-2xl mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{r.desc}</p>
                <a href={`mailto:${r.contact}`} className="text-primary text-sm font-medium hover:underline">{r.contact}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment Form */}
      <section className="py-16 bg-muted">
        <div className="container max-w-lg">
          <h2 className="text-4xl text-center mb-2">LEAVE A COMMENT</h2>
          <p className="text-center text-muted-foreground mb-8">Share your thoughts with us below.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" autoComplete="name" {...field} />
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
                      <Input type="email" placeholder="Email Address" autoComplete="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comment</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your comment..." rows={4} autoComplete="off" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-display text-lg tracking-wide" disabled={form.formState.isSubmitting}>
                Submit Comment
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Info;
