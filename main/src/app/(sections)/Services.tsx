import { Palette, Scissors, Weight } from "lucide-react"

import ServiceCard from "./ServiceCard"

export default function ServiceSection() {
  return (
    <>
      <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ServiceCard
          props={{
            icon: Scissors,
            title: "Hair Styling",
            description:
              "Transform your look with professional haircuts, coloring, and treatments for all hair types. Our stylists are skilled in everything from classic cuts to modern trends, offering tailored services for men and women.",
          }}
        />
        <ServiceCard
          props={{
            icon: Scissors,
            title: "Dreadlocks",
            description:
              "Achieve a clean, stylish look with our expert dreadlock services. We specialize in starting, maintaining, and styling dreadlocks for both men and women, ensuring your locks are neat, healthy, and full of personality.",
          }}
        />
        <ServiceCard
          props={{
            icon: Weight,
            title: "Wig Installs",
            description:
              "Get a seamless, natural look with our professional wig installation services. Perfect for enhancing your style, our installs are secure, long-lasting, and suited for every occasion, from casual outings to formal events.",
          }}
        />
        <ServiceCard
          props={{
            icon: Palette,
            title: "Nail Care",
            description:
              "Pamper yourself with our nail services, including manicures, pedicures, and custom nail art. Whether you're after clean, simple nails or bold designs, we cater to men and women with expert care and attention to detail.",
          }}
        />
        <ServiceCard
          props={{
            icon: Palette,
            title: "Braiding and Twists",
            description:
              "Protect your hair with our expert braiding and twist styles. Perfect for natural hair, our services include box braids, Senegalese twists, and more.",
            className: "xl:hidden",
          }}
        />
        <ServiceCard
          props={{
            icon: Palette,
            title: "Natural Hair Styling",
            description:
              "Celebrate your natural hair with our specialized styling services, including twist-outs, Bantu knots, and wash-and-go styles.",
            className: "xl:hidden",
          }}
        />
      </div>
      <div className="hidden w-full flex-wrap items-center justify-center gap-4 pt-4 xl:flex">
        <ServiceCard
          props={{
            icon: Palette,
            title: "Braiding and Twists",
            description:
              "Protect your hair with our expert braiding and twist styles. Perfect for natural hair, our services include box braids, Senegalese twists, and more.",
          }}
        />
        <ServiceCard
          props={{
            icon: Palette,
            title: "Natural Hair Styling",
            description:
              "Celebrate your natural hair with our specialized styling services, including twist-outs, Bantu knots, and wash-and-go styles.",
          }}
        />
        {/* <ServiceCard
              props={{
                icon: Palette,
                title: "Kids Haircare",
                description:
                  "Specialized haircuts and styles for kids, ensuring a comfortable experience. From cornrows to clean cuts, we make haircare fun for children.",
              }}
            /> */}
        {/* <ServiceCard
              props={{
                icon: Palette,
                title: "Hair Extensions",
                description:
                  "Enhance your look with premium-quality hair extensions. We offer expert application and styling to give you length, volume, and a natural finish.",
              }}
            /> */}
      </div>
    </>
  )
}
