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
        "Tax Planning involves strategizing financial decisions to minimize tax liabilities. Effective planning might include choosing the right investments, understanding available deductions, and timing income and expenses.",
      icon: "/images/img_group.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 2,
      title: "Personal Tax",
      description:
        "Personal Tax refers to the taxation of individual income. It typically includes salaries, pensions, and interest. Understanding personal tax obligations can help individuals file accurately and avoid penalties.",
      icon: "/images/img_group_45x49.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 3,
      title: "Insurance Tax",
      description:
        "Insurance Tax pertains to any taxes levied on insurance premiums, policies, or benefits. It’s crucial for both insurers and policyholders to be aware of these taxes to ensure compliance and proper financial planning.",
      icon: "/images/img_vector_44x48.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 4,
      title: "Corporate Tax",
      description:
        "Corporate Tax is the tax imposed on the income or profit of corporations. It varies by jurisdiction and can affect business decisions regarding company structure, dividends, and reinvestment.",
      icon: "/images/img_group_44x48.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 5,
      title: "Tax Audit Support",
      description:
        "Tax Audit Support involves assistance provided to individuals or businesses during a tax audit process. This might include preparing documents, responding to inquiries, and ensuring compliance with tax laws.",
      icon: "/images/img_group_47x51.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 6,
      title: "Investment Advisor",
      description:
        "An Investment Advisor provides financial advice and strategies related to investments to help individuals or businesses maximize their returns while managing risks. Their guidance can also include tax implications of investment choices.",
      icon: "/images/img_vector_45x49.svg",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 7,
      title: "Tax Advisory",
      description:
        "Tax Advisory services provide expert guidance on tax matters, helping clients navigate complex regulations and optimize their tax situations. This may include advice on compliance, planning, and risk assessment.",
      icon: "/images/img_group_51x48.png",
      cornerImage: "/images/img_group_1171275971.svg",
    },
    {
      id: 8,
      title: "International Tax",
      description:
        "International Tax encompasses the tax challenges multinational companies face when operating across borders. This includes issues like transfer pricing, tax treaties, and compliance with varying national laws.",
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
