import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more. You can also pick up wherever you left off with Handoff.",
      name: "iPad and iPhone",
      designation: "",
      src: "/ipad-significant-other2.jpg",
    },
    {
      quote:
        "iPad and Mac are designed to work together to form the ultimate creative setup. Sketch on your iPad and have it appear instantly on your Mac with Sidecar. Then use your iPad for drawing or editing with Apple Pencil or as a second display. Extend your workflow to new places, and when you return to your desk, Universal Control allows you to use one mouse or trackpad seamlessly across both devices.",
      name: "iPad and Mac",
      designation: "",
      src: "/ipad-significant-other3.jpg",
    },
    {
      quote:
        "iPad is perfect for seeing rich Health data tracked from Apple Watch, and reviewing trends and highlights in your Health app on a larger display. You can also invite your loved ones to securely share their health information with you to give you peace of mind and stay connected to each other.",
      name: "iPad and Apple Watch",
      designation: "",
      src: "/ipad-significant-other.jpg",
    },
   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
