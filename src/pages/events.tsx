import { Heading, Subtitle } from "@kevinjosec/typekit";
import NavbarComponent from "../components/Navbar.component";
import { cubicBezier, motion } from "framer-motion";

export default function Events() {
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
      <section className="pt-32 pb-24 px-6 min-h-screen flex flex-col justify-center max-w-7xl mx-auto">
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
                  children="events"
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
          Where faith meets fellowship and meaningful experiences. Come be part
          of moments that shape and strengthen our community.
        </motion.p>
        <div className="my-4">
          <Subtitle children="Coming soon!" />
        </div>
      </section>
    </div>
  );
}
