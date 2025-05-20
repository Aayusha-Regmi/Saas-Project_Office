import React from "react";
import { motion } from "framer-motion";
import ServicesCard from "../../../components/common/ServicesCard";

const ServicePlans = () => {
  /* ────────────────────────────────────────────────────────── */
  /* data                                                       */
  /* ────────────────────────────────────────────────────────── */
  const services = [
    {
      id: 1,
      title: "Tax Planning",
      description:
        "Finance Minister Barshaman Pun has tabled a budget of\nRs. 18.60 trillion for the fiscal",
      icon: "/images/img_group.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 2,
      title: "Personal Tax",
      description:
        "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_group_45x49.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 3,
      title: "Insurance Tax",
      description:
        "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_vector_44x48.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 4,
      title: "Corporate Tax",
      description:
        "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_group_44x48.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 5,
      title: "Tax Audit Support",
      description:
        "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_group_47x51.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 6,
      title: "Investment Advisor",
      description:
        "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_vector_45x49.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 7,
      title: "Tax Advisory",
      description:
        "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_group_51x48.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 8,
      title: "International Tax",
      description:
        "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_tax5_1.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
  ];

  /* ────────────────────────────────────────────────────────── */
  /* framer-motion variants                                    */
  /* ────────────────────────────────────────────────────────── */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  /* ────────────────────────────────────────────────────────── */
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {services.map((service) => (
        <motion.div key={service.id} variants={card}>
          <ServicesCard
            title={service.title}
            description={service.description}
            icon={service.icon}
            cornerImage={service.cornerImage}
            buttonText="Read More"
            buttonLink={`/caseStudy/${service.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServicePlans;
