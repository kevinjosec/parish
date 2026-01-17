import { Heading, Paragraph, Title } from "@kevinjosec/typekit";
import NavbarComponent from "../components/Navbar.component";
import { motion, cubicBezier } from "framer-motion";
import { ABOUT_CONTENT, ABOUT_FOOTER } from "../constants";

export default function About() {
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };
  return (
    <div>
      <NavbarComponent />
      <div className="p-4 min-h-screen flex flex-col justify-center">
        <div className="overflow-hidden">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="tracking-tighter leading-[0.85] uppercase"
          >
            <div className="overflow-hidden">
              <motion.div variants={lineReveal}>
                <Heading
                  children="St Marys's"
                  //@ts-ignore
                  size=""
                  className="text-6xl md:text-8xl font-black"
                />
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div variants={lineReveal}>
                <Heading
                  children="Jacobite"
                  //@ts-ignore
                  size=""
                  className="text-6xl md:text-8xl font-black"
                />
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div variants={lineReveal} className="">
                <Heading
                  children="Syrian"
                  //@ts-ignore
                  size=""
                  className="text-6xl md:text-8xl text-[#0066FF]"
                />
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div variants={lineReveal}>
                <Heading
                  children="Orthodox"
                  //@ts-ignore
                  size=""
                  className="text-6xl md:text-8xl font-black"
                />
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div variants={lineReveal}>
                <Heading
                  children="Church"
                  //@ts-ignore
                  size=""
                  className="text-6xl md:text-8xl font-black"
                />
              </motion.div>
            </div>
          </motion.h1>
        </div>

        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="flex justify-between items-end mt-12 md:mt-0"
        >
          <p className="max-w-xs text-sm md:text-base font-medium leading-relaxed">
            A collective of obsessives, perfectionists, and visionaries building
            the next generation of digital experiences.
          </p>
          <ArrowDownRight className="w-8 h-8 md:w-12 md:h-12 text-[#0066FF]" />
        </motion.div> */}
      </div>

      <section className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="block text-[#0066FF] tracking-widest uppercase mb-4">
              <Paragraph
                children="Who we are"
                size="lg"
                className="font-bold"
              />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <Title children="Non-negotiables" className="font-bold" />
            </h2>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-10%",
              }}
              variants={staggerContainer}
              className="space-y-16 md:space-y-24"
            >
              {ABOUT_CONTENT.map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 group-hover:text-[#0066FF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-black text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto"
        >
          <span className="block text-[#0066FF] font-bold text-sm tracking-widest uppercase mb-8">
            {ABOUT_FOOTER.title}
          </span>
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            {ABOUT_FOOTER.text}
          </p>
        </motion.div>
      </section>

      {/* How We Work */}
      {/* <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <span className="block text-[#0066FF] font-bold text-sm tracking-widest uppercase mb-8">
              03 — Method
            </span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              RADICAL
              <br />
              FOCUS.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {[
                "Relentless Execution",
                "Unapologetic Simplicity",
                "Data-Informed Intuition",
                "Obsessive Craftsmanship",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="text-2xl md:text-4xl font-bold tracking-tight border-b-2 border-gray-100 pb-4 flex items-center justify-between"
                >
                  <span>{item}</span>
                  <span className="text-[#0066FF] text-sm font-mono">
                    0{index + 1}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section> */}
    </div>
  );
}
