"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";



export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Answer calls or messages from your iPhone directly on your Mac. See and control what’s on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.",
      name: "Mac and iPhone",
      designation: "Product Manager at TechFlow",
      src: "/mac-iphone.jpg",
    },
    {
      quote:
        "Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start a Final Cut Pro project on your iPad and continue it on your Mac.",
      name: "Mac and iPad",
      designation: "CTO at InnovateSphere",
      src: "/mac-ipad.jpg",
    },
    {
      quote:
        "Automatically log in to your Mac when you’re wearing your Apple Watch with Auto Unlock. No password typing required.",
      name: "Mac and Apple Watch",
      designation: "Operations Director at CloudScale",
      src: "/mac-applewatch.png",
    },

  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
