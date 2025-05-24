import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { FancyHeading } from "./FancyHeading";

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Ruhan Nandalal",
      designation: "Colleague & Team Lead - Colossus AI",
      src: "/testimonials/ruhan.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Tharana Bopearachchi",
      designation: "Colleague & Project Manager - Colossus AI",
      src: "/testimonials/tharana.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Akila Senanayake",
      designation: "Colleague & Marketing Manager - Colossus AI",
      src: "/testimonials/akila.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Chiran Senarath",
      designation: "Colleague & Business Analyst - Colossus AI",
      src: "/testimonials/chiran.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Pasindu Gamage",
      designation: "Colleague & UI Designer - Colossus AI",
      src: "/testimonials/pasidu.jpg",
    },
  ];
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <FancyHeading title="Testimonials" />
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};
