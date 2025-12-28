import { Heading, Subheading, Subtitle } from "@kevinjosec/typekit";
import NavbarComponent from "../components/Navbar.component";
import { motion, cubicBezier } from "framer-motion";
import { COMMITTEE } from "../constants";

export default function Committee() {
  // Animations
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };
  const staggerContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const lineReveal = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: "0%",
      transition: {
        duration: 1,
        ease: cubicBezier(0.42, 0, 0.58, 1),
      },
    },
  };
  return (
    <div>
      <NavbarComponent />
      <section className="pt-32 pb-24 px-6 h-screen">
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase"
          >
            <div className="overflow-hidden">
              <motion.div variants={lineReveal}>
                <Heading
                  children="Our"
                  //@ts-ignore
                  size=""
                />
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div variants={lineReveal} className="text-[#0066FF]">
                <Heading
                  children="structure"
                  //@ts-ignore
                  size=""
                />
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
            delay: 0.8,
            duration: 0.8,
          }}
          className="max-w-xl text-lg md:text-xl font-medium leading-relaxed text-gray-600"
        >
          The minds behind the mission. Organized for impact, driven by
          excellence, and committed to the vision.
        </motion.p>
      </section>

      <div className="flex flex-col gap-4 px-6">
        <div className="uppercase ">
          <Subtitle
            children="Committee Members"
            className="text-[#0066FF] tracking-widest"
          />
        </div>
        <div className="flex flex-col gap-6">
          <Heading
            children={COMMITTEE.YOUTH_ASSOSCIATION.NAME}
            className="font-bold"
            size="4xl"
          />
          <Subheading children={COMMITTEE.YOUTH_ASSOSCIATION.DESC} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
