import { Heading, Paragraph } from "@kevinjosec/typekit";
import { ABOUT_CONTENT, ABOUT_FOOTER, ROUTES } from "../constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutComponent() {
  const navigate = useNavigate();
  const staggerContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  const lineReveal = {
    hidden: {
      y: 100,
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="p-4 flex flex-col justify-center">
      <div className="min-h-screen flex flex-col ">
        <div className="overflow-hidden mb-12">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase"
          >
            <div className="overflow-hidden">
              {/* @ts-ignore */}
              <motion.div variants={lineReveal}>Building</motion.div>
            </div>
            <div className="overflow-hidden">
              {/* @ts-ignore */}
              <motion.div variants={lineReveal}>The</motion.div>
            </div>
            <div className="overflow-hidden">
              {/* @ts-ignore */}
              <motion.div variants={lineReveal} className="text-[#0066FF]">
                Future.
              </motion.div>
            </div>
          </motion.h1>
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="max-w-2xl text-xl md:text-2xl font-medium leading-relaxed text-gray-600"
        >
          A community united by vision, driven by purpose, and committed to
          excellence in everything we do.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: 0.8,
          }}
          className="mt-12"
        >
          <div
            onClick={() => navigate(ROUTES.ABOUT)}
            className="inline-flex items-center gap-3 text-lg font-bold uppercase tracking-widest hover:text-[#0066FF] transition-colors group"
          >
            Explore
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ABOUT_CONTENT.map(({ title, text }) => (
          <div
            key={title}
            className="
              rounded-2xl border border-gray-200 bg-white p-6
              flex flex-col gap-3
              shadow-sm
              transition-all duration-300
              hover:shadow-md hover:-translate-y-1
            "
          >
            <Heading size="xl">{title}</Heading>
            <Paragraph>{text}</Paragraph>
          </div>
        ))}
        <div
          className="
            md:col-span-2
            rounded-2xl border border-gray-200 bg-white p-6
            flex flex-col gap-3
            shadow-sm
            transition-all duration-300
            hover:shadow-md hover:-translate-y-1
          "
        >
          <Heading size="xl">{ABOUT_FOOTER.title}</Heading>
          <Paragraph>{ABOUT_FOOTER.text}</Paragraph>
        </div>
      </div>
    </div>
  );
}
