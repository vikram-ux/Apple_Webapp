import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.",
      name: "iPhone and Mac",
    //   designation: "Product Manager at TechFlow",
      src: "/iphone-mac1.jpg",
    },
    {
      quote:
        "Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction.14 To set up a group photo on your iPhone, join the group and use Apple Watch as a viewfinder to snap the shot. And when you take a call on your Apple Watch, just tap your iPhone to continue the conversation there.",
      name: "iPhone and Apple Watch",
    //   designation: "CTO at InnovateSphere",
      src: "/iphone-appleWatch.jpg",
    },
    {
      quote:
        "Set up AirPods on iPhone with just a tap. You’ll love Adaptive Audio, which automatically tailors the noise control for you to provide the best listening experience across different environments and interactions throughout the day.",
      name: "iPhone and AirPods",
    //   designation: "Operations Director at CloudScale",
      src: "/iphone-airpods.webp",
    },
   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
