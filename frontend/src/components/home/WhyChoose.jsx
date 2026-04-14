import React from "react";
import {
  FaClock,
  FaChartLine,
  FaBookOpen,
  FaAward,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";

const featuresLeft = [
  {
    title: "Trusted User Guidance",
    desc: "Clear onboarding flow for signup, OTP, role selection, and dashboard access.",
    icon: FaClock,
  },
  {
    title: "Live Progress Visibility",
    desc: "Track module activity, wallet movement, and participation status in real time.",
    icon: FaChartLine,
  },
  {
    title: "Flexible Re-Entry",
    desc: "Continue your journey smoothly with structured module workflows and saved account state.",
    icon: FaBookOpen,
  },
];

const featuresRight = [
  {
    title: "Verified Partner Network",
    desc: "Cashback and shopkeeper flows run with verified records and transparent actions.",
    icon: FaAward,
  },
  {
    title: "Role-Based Operations",
    desc: "Dedicated experiences for users, shopkeepers, and admin teams keep work organized.",
    icon: FaBriefcase,
  },
  {
    title: "Active Community",
    desc: "Join thousands of participants building value through Yes Time modules.",
    icon: FaUsers,
  },
];

const FeatureItem = ({ title, desc, Icon, reverse }) => {
  if (!Icon) return null;

  return (
    <article
      className={`flex items-center gap-6 group transition-transform duration-300 hover:scale-[1.02] ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex-1 ${
          reverse ? "text-left" : "text-right"
        }`}
      >
        <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 mt-2 group-hover:text-zinc-200 text-sm md:text-base transition-colors">
          {desc}
        </p>
      </div>

      <div
        className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-900/50 border border-yellow-500/25 text-yellow-500 text-xl shrink-0"
        aria-hidden="true"
      >
        <Icon />
      </div>
    </article>
  );
};

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://henceforthsolutions.com/wp-content/themes/henceforthsloutions/assets/images/why-choose/reason-5.webp')",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-zinc-950/75 to-black/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-yellow-600">Yes Time?</span>
          </h2>

          <div className="w-20 h-1.5 bg-linear-to-r from-yellow-600 to-yellow-400 mx-auto rounded-full mb-8" />

          <p className="text-zinc-300 max-w-2xl mx-auto text-lg italic">
            "A transparent system for savings, ownership, cashback, and long-term confidence."
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left */}
          <div className="flex flex-col gap-12 lg:w-[35%]">
            {featuresLeft.map((item) => (
              <FeatureItem
                key={item.title}
                title={item.title}
                desc={item.desc}
                Icon={item.icon}
              />
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:w-[30%] flex justify-center relative">
            <div className="relative">
              <img
                src="https://henceforthsolutions.com/wp-content/themes/henceforthsloutions/assets/images/why-choose/why-choose-image.webp"
                alt="Yes Time Platform"
                loading="lazy"
                width={320}
                height={320}
                className="relative z-10 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-[6px] border-zinc-900"
              />

            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-12 lg:w-[35%]">
            {featuresRight.map((item) => (
              <FeatureItem
                key={item.title}
                title={item.title}
                desc={item.desc}
                Icon={item.icon}
                reverse
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;