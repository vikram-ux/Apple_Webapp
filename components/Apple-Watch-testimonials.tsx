import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Combining Apple Watch and iPhone opens up a world of features that make each device better. You can do things like create a custom route with Maps on your iPhone, then download it to your watch to use any time. Or start a cycling workout on your watch and see your metrics automatically appear as a Live Activity on your iPhone.",
        name: "Apple Watch and AirPods",
      src: "/apple-watch-airpods.png",
    },
    {
      quote:
        "You can do so much with just Apple Watch and AirPods — all without your iPhone. Take calls, stream music and podcasts, hear incoming notifications. Even respond to messages with Siri.",
      name: "Apple Watch and AirPods",
    //   designation: "CTO at InnovateSphere",
      src: "/iphone-appleWatch.jpg",
    },

   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
