import { Navbar } from "../../../../components/Navbar";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroSectionProps {
  showOnlyNav?: boolean;
}

// =========================================================
// CANVA-STYLE LEFT-TO-RIGHT BLOCK SLIDE REVEAL VARIANTS
// =========================================================
const blockContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const blockItemLeftToRightVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    x: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1], // Smooth Canva cubic-bezier slide curve
    },
  },
};

export const HeroSection = ({}: HeroSectionProps): JSX.Element => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const videoRef = useRef<HTMLVideoElement>(null);

  const phoneNumber = "+919750603988";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;

      const playVideo = () => {
        videoRef.current?.play().catch((error) => {
          console.warn("Autoplay prevented:", error);
        });
      };

      playVideo();
      document.addEventListener("click", playVideo, { once: true });

      return () =>
        document.removeEventListener("click", playVideo);
    }
  }, []);

  return (
    <>
      {isHome ? (
        <section
          className="
            relative
            w-full
            min-h-screen
            md:min-h-[100svh]
            overflow-hidden
            bg-black
          "
        >
          {/* ================= Background Video ================= */}

          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              select-none
              pointer-events-none
            "
          >
            <source
              src="/HERO-SECTION.mp4"
              type="video/mp4"
            />
          </video>

          {/* ================= Overlay ================= */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/55
              via-black/25
              to-black/55
            "
          />

          {/* ================= Navbar ================= */}

          <Navbar />

          {/* ================= Hero Container ================= */}
          <div
            className="
              relative
              z-20
              h-[calc(100vh-90px)]
              w-full
              px-6
              sm:px-12
              md:px-16
              lg:px-24
            "
          >
            <div
              className="
                flex
                flex-col
                justify-end
                items-start
                h-full
                pb-2
                sm:pb-4
                md:pb-6
                lg:pb-8
              "
            >
              <motion.div
                variants={blockContainerVariants}
                initial="hidden"
                animate="visible"
                className="
                  w-full
                  max-w-[1100px]
                  text-left
                "
              >
                {/* CANVA BLOCK REVEAL (LEFT TO RIGHT): Heading Line 1 */}
                <div className="overflow-hidden pb-1">
                  <motion.h1
                    variants={blockItemLeftToRightVariants}
                    className="
                      font-[Poppins]
                      font-normal
                      text-white
                      text-[1.5rem]
                      sm:text-[2rem]
                      md:text-[2.5rem]
                      lg:text-[2.8rem]
                      xl:text-[3.1rem]
                      leading-tight
                      tracking-wide
                      max-w-none
                    "
                  >
                    Bringing Innovation to
                  </motion.h1>
                </div>

                {/* CANVA BLOCK REVEAL (LEFT TO RIGHT): Heading Line 2 */}
                <div className="overflow-hidden mb-3 pb-1">
                  <motion.h1
                    variants={blockItemLeftToRightVariants}
                    className="
                      font-[Poppins]
                      font-normal
                      text-white
                      text-[1.5rem]
                      sm:text-[2rem]
                      md:text-[2.5rem]
                      lg:text-[2.8rem]
                      xl:text-[3.1rem]
                      leading-tight
                      tracking-wide
                      max-w-none
                    "
                  >
                    <span>
                      your Diary Tech Farming
                      <br className="sm:hidden" /> Journey
                    </span>
                  </motion.h1>
                </div>

                {/* CANVA BLOCK REVEAL (LEFT TO RIGHT): Description Paragraph */}
                <div className="overflow-hidden mb-6">
                  <motion.p
                    variants={blockItemLeftToRightVariants}
                    className="
                      text-white/95
                      text-xs
                      sm:text-sm
                      md:text-base
                      lg:text-[17px]
                      leading-relaxed
                      max-w-[800px]
                      font-[Poppins]
                      font-light
                    "
                  >
                    we convert your land into complete dairy tech automation farm House
                    help you to monitor and maintain the farm house
                  </motion.p>
                </div>

                {/* CANVA BLOCK REVEAL (LEFT TO RIGHT): CTA Button */}
              {/* CANVA BLOCK REVEAL (LEFT TO RIGHT): CTA Button */}
<div className="overflow-hidden pt-1 pb-1">
  <motion.div variants={blockItemLeftToRightVariants}>
    <button
      type="button"
      onClick={() => {
        const nextSection = document.getElementById("about");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-[#B6E51E]
        hover:bg-[#A7D91A]
        transition-all
        duration-300
        pl-5
        pr-1.5
        py-1.5
        shadow-xl
        group
        active:scale-95
        cursor-pointer
      "
    >
      <span className="font-[Poppins] font-medium text-[15px] text-black">
        Start now
      </span>
      <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ➔
      </span>
    </button>
  </motion.div>
</div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Blur */}
          <div
            className="
              absolute
              bottom-[-120px]
              right-[-120px]
              hidden
              lg:block
              w-[420px]
              h-[420px]
              rounded-full
              bg-[#B6E51E]/10
              blur-[140px]
              pointer-events-none
            "
          />

        </section>
      ) : (
        <Navbar />
      )}
    </>
  );
};

export default HeroSection;