// import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useRef } from "react";
// import { s } from "framer-motion/client";

// const navigationItems = [
//   { label: "Home", id: "home" },
//   { label: "Services", path: "/services" },
//   { label: "Shop", id: "shop" },
//   { label: "About", id: "Aboutus" },
//   { label: "Contact", id: "contact" },
// ];

// export const Navbar = ({ showOnlyNav,  }: { showOnlyNav?: boolean }): JSX.Element => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [waveCoords, setWaveCoords] = useState({ x: 0, y: 0 });


//   // 1. Add loading state
//   const [isRedirecting, setIsRedirecting] = useState(false);

//   const handleNavigation = (sectionId: string, path?: string) => {
//     setMobileMenuOpen(false);
//     if (path) {
//       if (location.pathname !== path) navigate(path);
//       return;
//     }
//     if (sectionId === "shop") { navigate("/shop"); return; }
//     if (sectionId === "contact") { navigate("/contact"); return; }
//     if (sectionId === "Aboutus") { navigate("/about"); return; }

//     if (location.pathname !== "/") {
//       navigate("/", { state: { scrollTo: sectionId } });
//       return;
//     }

//     if (sectionId === "home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       const element = document.getElementById(sectionId);
//       element?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

// const handleSwitchToTech = (e: React.MouseEvent<HTMLButtonElement>) => {
//   setWaveCoords({
//     x: e.clientX,
//     y: e.clientY,
//   });

//   setIsAnimating(true);

//   // Timing optimized to switch pages while the wave is in its final shrink phase
//   setTimeout(() => {
//     window.location.href = "https://www.azhizen.com/";
//   }, 1800);
// };

//   const navContainerClasses = "max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 h-20 md:h-24";
//   const desktopButtonClasses = "bg-lime-400 hover:bg-lime-500 text-black font-bold py-2.5 px-6 rounded-full flex items-center gap-2 transition text-xs md:text-sm shadow-lg whitespace-nowrap active:scale-95";

//   return (
//     <nav className="w-full">
//       {/* 3. Loading Overlay UI */}
// <AnimatePresence>
//   {isAnimating && (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-white"
//     >
//       {/* Morphing Wave Background */}
//       <motion.div
//         initial={{
//           clipPath: `circle(0% at ${waveCoords.x}px ${waveCoords.y}px)`,
//           backgroundColor: "#84cc16" // Green cover phase
//         }}
//         animate={{
//           clipPath: [
//             `circle(0% at ${waveCoords.x}px ${waveCoords.y}px)`,
//             `circle(150% at ${waveCoords.x}px ${waveCoords.y}px)`, // Cover
//             `circle(150% at ${waveCoords.x}px ${waveCoords.y}px)`, // Hold
//             `circle(0% at ${waveCoords.x}px ${waveCoords.y}px)`    // Shrink
//           ],
//           backgroundColor: [
//             "#84cc16", // Start Green
//             "#84cc16",
//             "#0e7490", // Transition to Blue
//             "#0e7490"
//           ]
//         }}
//         transition={{
//           duration: 2.2,
//           times: [0, 0.4, 0.6, 1],
//           ease: "circOut"
//         }}
//         className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto"
//       >
//         <div className="relative flex items-center justify-center">

//           {/* Green Logo Phase */}
//           <motion.img
//             src="azhizen-logo-green.png"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{
//               opacity: [0, 1, 1, 0],
//               scale: [0.8, 1, 1, 1.1]
//             }}
//             transition={{
//               duration: 2.2,
//               times: [0, 0.2, 0.4, 0.5]
//             }}
//             className="absolute w-48 md:w-80 object-contain"
//           />

//           {/* Blue Logo Phase */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{
//               opacity: [0, 0, 1, 1, 0],
//               scale: [0.5, 0.5, 1, 1, 0.8]
//             }}
//             transition={{
//               duration: 2.2,
//               times: [0, 0.45, 0.55, 0.8, 1]
//             }}
//             className="flex flex-col items-center"
//           >
//             <img
//               src="azhizen-logo-blue.png"
//               className="w-48 md:w-80 object-contain mb-6"
//             />
//             <div className="flex flex-col items-center gap-4">
//               <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
//               <span className="text-white text-sm font-bold tracking-[0.2em]">SWITCHING TO TECH</span>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
//       {/* CONTACT PAGE NAVBAR */}
//       {location.pathname === "/contact" && (
//         <div className="absolute top-0 py-4 left-0 w-full z-50 bg-transparent">
//           <div className={`hidden md:flex ${navContainerClasses}`}>
//             <img
//               src="/azhizen-logo-white.png"
//               alt="AZHIZEN"
//               className="h-10 md:h-12 w-auto cursor-pointer"
//               onClick={() => navigate("/")}
//             />
//             <div className="flex items-center gap-8">
//               {navigationItems.map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => handleNavigation(item.id || "", item.path)}
//                   className="text-sm lg:text-base font-semibold text-white hover:text-lime-400 transition-colors"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//             <button onClick={handleSwitchToTech} className={desktopButtonClasses}>
//               Switch to Tech
//             </button>
//           </div>
//           <MobileNav
//             logo="/azhizen-logo-white.png"
//             handleNavigation={handleNavigation}
//             handleSwitchToTech={handleSwitchToTech} // Pass the function
//             mobileMenuOpen={mobileMenuOpen}
//             setMobileMenuOpen={setMobileMenuOpen}
//             isTransparent={true}
//           />
//         </div>
//       )}

//       {/* SOLID NAVBARS */}
//       {(location.pathname === "/services" || location.pathname === "/shop" || location.pathname === "/about" || location.pathname === "/service" || location.pathname === "/enquiry" || location.pathname === "/buy" || location.pathname === "/") && (
//         <div className="relative w-full z-50 ">
//           <div className={`hidden md:flex ${navContainerClasses}`}>
//             <img
//               src="/azhizen-logo-green.png"
//               alt="AZHIZEN"
//               className="h-10 md:h-12 w-auto cursor-pointer"
//               onClick={() => navigate("/")}
//             />
//             <div className="flex items-center gap-8">
//               {navigationItems.map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => handleNavigation(item.id || "", item.path)}
//                   className="text-sm lg:text-base font-semibold text-gray-700 hover:text-lime-600 transition-colors"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//             <button onClick={handleSwitchToTech} className={desktopButtonClasses}>
//               Switch to Tech
//             </button>
//           </div>
//           <MobileNav
//             logo="/azhizen-logo-green.png"
//             handleNavigation={handleNavigation}
//             handleSwitchToTech={handleSwitchToTech} // Pass the function
//             mobileMenuOpen={mobileMenuOpen}
//             setMobileMenuOpen={setMobileMenuOpen}
//             isTransparent={false}
//           />
//         </div>
//       )}
//     </nav>
//   );
// };

// const MobileNav = ({ logo, handleNavigation, handleSwitchToTech, mobileMenuOpen, setMobileMenuOpen, isTransparent }: any) => {
//   return (
//     <div className="md:hidden w-full h-20 flex items-center justify-between px-6">
//       <img src={logo} alt="AZHIZEN" className="h-8 w-auto" />
//       <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="z-50 flex flex-col gap-1.5 p-2">
//         <span className={`h-0.5 w-6 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-black' : isTransparent && logo.includes('white') ? 'bg-white' : 'bg-black'}`}></span>
//         <span className={`h-0.5 w-6 transition-all ${mobileMenuOpen ? 'opacity-0' : isTransparent && logo.includes('white') ? 'bg-white' : 'bg-black'}`}></span>
//         <span className={`h-0.5 w-6 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-black' : isTransparent && logo.includes('white') ? 'bg-white' : 'bg-black'}`}></span>
//       </button>

//       {mobileMenuOpen && (
//         <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-2xl p-6 pt-24 space-y-4 animate-in fade-in slide-in-from-top duration-300 z-40">
//           {navigationItems.map((item) => (
//             <button
//               key={item.label}
//               onClick={() => handleNavigation(item.id || "", item.path)}
//               className="block w-full text-left text-lg font-bold text-gray-800 hover:text-lime-600 py-2"
//             >
//               {item.label}
//             </button>
//           ))}
//           <button onClick={handleSwitchToTech} className="w-full bg-lime-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2">
//             Switch to Tech
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };




// import { useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { TechTransition } from "./TechTransition";

// const navigationItems = [
//   { label: "Home", id: "home", path: "/" },
//   { label: "Services", id: "service-showcase", path: "/services" },
//   { label: "Shop", id: "shop", path: "/shop" },
//   { label: "About", id: "Aboutus", path: "/about" },
//   { label: "Contact", id: "contact", path: "/contact" },
//   { label: "Gallery", id: "gallery", path: "/", mobileOnly: true },
//   { label: "FAQ", id: "faq", path: "/", mobileOnly: true },
// ];

// export const Navbar = ({ showOnlyNav }: { showOnlyNav?: boolean }): JSX.Element => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isPastHero, setIsPastHero] = useState(false);
//   const [isScrolledOnContact, setIsScrolledOnContact] = useState(false);
//   const [activeSection, setActiveSection] = useState<string>("home");

//   // Helper function to scroll cleanly with fixed navbar offset
//   const scrollToTarget = (targetId: string) => {
//     if (targetId === "home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return true;
//     }
//     const element = document.getElementById(targetId);
//     if (element) {
//       const navOffset = 80;
//       const elementPos = element.getBoundingClientRect().top + window.pageYOffset;
//       window.scrollTo({
//         top: Math.max(0, elementPos - navOffset),
//         behavior: "smooth",
//       });
//       return true;
//     }
//     return false;
//   };

//   // 1. Cross-Page Scroll Handler (when arriving at '/' from /services, /shop, etc.)
//   useEffect(() => {
//     const state = location.state as { scrollTo?: string } | null;
//     if (location.pathname === "/" && state?.scrollTo) {
//       const targetId = state.scrollTo;
//       window.history.replaceState({}, document.title);

//       let attempts = 0;
//       const timer = setInterval(() => {
//         const success = scrollToTarget(targetId);
//         attempts++;
//         if (success || attempts > 20) {
//           clearInterval(timer);
//         }
//       }, 100);

//       return () => clearInterval(timer);
//     }
//   }, [location.pathname, location.state]);

//   // 2. Homepage Scroll Tracker
//   // Homepage Scroll Tracker (Boundary-Aware)
// useEffect(() => {
//   if (location.pathname !== "/") return;

//   const handleHomepageScroll = () => {
//     // Check which section is currently centered in the viewport
//     const midScreen = window.scrollY + window.innerHeight / 3;

//     const galleryEl = document.getElementById("gallery");
//     const faqEl = document.getElementById("faq");

//     if (
//       faqEl &&
//       midScreen >= faqEl.offsetTop &&
//       midScreen < faqEl.offsetTop + faqEl.offsetHeight
//     ) {
//       setActiveSection("faq");
//     } else if (
//       galleryEl &&
//       midScreen >= galleryEl.offsetTop &&
//       midScreen < galleryEl.offsetTop + galleryEl.offsetHeight
//     ) {
//       setActiveSection("gallery");
//     } else {
//       setActiveSection("home");
//     }
//   };

//   window.addEventListener("scroll", handleHomepageScroll, { passive: true });
//   return () => window.removeEventListener("scroll", handleHomepageScroll);
// }, [location.pathname]);

//   // 3. Home Page Hero Tracker (for navbar transparent-to-solid transition)
//   useEffect(() => {
//     if (location.pathname !== "/") {
//       setIsPastHero(false);
//       return;
//     }

//     const targetElement = document.getElementById("Aboutus");

//     if (!targetElement) {
//       const handleScrollFallback = () => {
//         setIsPastHero(window.scrollY > window.innerHeight - 90);
//       };
//       window.addEventListener("scroll", handleScrollFallback, { passive: true });
//       return () => window.removeEventListener("scroll", handleScrollFallback);
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting || entry.boundingClientRect.top <= 90) {
//           setIsPastHero(true);
//         } else {
//           setIsPastHero(false);
//         }
//       },
//       {
//         root: null,
//         rootMargin: "-90px 0px 0px 0px",
//         threshold: 0,
//       }
//     );

//     observer.observe(targetElement);
//     return () => observer.disconnect();
//   }, [location.pathname]);

//   // 4. Contact Page Scroll Tracker
//   useEffect(() => {
//     if (location.pathname !== "/contact") {
//       setIsScrolledOnContact(false);
//       return;
//     }

//     const handleContactScroll = () => {
//       setIsScrolledOnContact(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleContactScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleContactScroll);
//   }, [location.pathname]);

//   // 5. Navigation Handler
//   const handleNavigation = (sectionId: string, path?: string) => {
//     setMobileMenuOpen(false);

//     // Standalone routes
//     if (sectionId === "service-showcase" || path === "/services") {
//       navigate("/services");
//       return;
//     }
//     if (sectionId === "shop") {
//       navigate("/shop");
//       return;
//     }
//     if (sectionId === "contact") {
//       navigate("/contact");
//       return;
//     }
//     if (sectionId === "Aboutus") {
//       navigate("/about");
//       return;
//     }

//     // Anchor items (Gallery, FAQ, Home)
//     if (location.pathname !== "/") {
//       navigate("/", { state: { scrollTo: sectionId } });
//       return;
//     }

//     // On homepage: slight delay to allow drawer to close before smooth scroll
//     setTimeout(() => {
//       scrollToTarget(sectionId);
//     }, 200);
//   };

//   const handleSwitchToTech = () => {
//     setIsAnimating(true);
//   };

//   const onAnimationComplete = () => {
//     window.location.href = "https://tech.azhizen.com/";
//   };

//   const isHomePage = location.pathname === "/";
//   const isContactPage = location.pathname === "/contact";

//   const isTransparent = (isHomePage && !isPastHero) || (isContactPage && !isScrolledOnContact);
//   const logoSrc = isTransparent ? "/azhizen-logo-white.png" : "/azhizen-logo-green.png";
//   const navBg = isTransparent
//     ? "bg-transparent"
//     : "bg-white shadow-md border-b border-gray-100";

//   const isItemActive = (item: typeof navigationItems[0]) => {
//     if (item.path && item.path !== "/" && location.pathname === item.path) return true;

//     if (location.pathname === "/") {
//       if (
//         item.id === "home" &&
//         (activeSection === "home" || activeSection === "service-showcase" || activeSection === "Aboutus")
//       )
//         return true;
//       if (item.id === "gallery" && activeSection === "gallery") return true;
//       if (item.id === "faq" && activeSection === "faq") return true;
//     }

//     return false;
//   };

//   return (
//     <nav className={`w-full z-50 fixed top-0 left-0 transition-colors duration-300 ${navBg}`}>
//       <AnimatePresence>
//         {isAnimating && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <TechTransition onComplete={onAnimationComplete} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* DESKTOP NAVBAR */}
//       <div className="hidden md:flex max-w-[1440px] mx-auto items-center justify-between px-6 md:px-10 lg:px-16 h-20">
//         <div className="w-[240px] flex items-center justify-start shrink-0 overflow-visible">
//           <img
//             src={logoSrc}
//             alt="AZHIZEN"
//             className={`cursor-pointer transition-all duration-200 ${
//               logoSrc.includes("green")
//                 ? "h-10 md:h-12 w-auto scale-[2.8] -translate-x-2 origin-left"
//                 : "h-10 md:h-12 w-auto object-contain"
//             }`}
//             onClick={() => navigate("/")}
//           />
//         </div>

//         <div className="flex items-center gap-8 justify-center">
//           {navigationItems
//             .filter((item) => !item.mobileOnly)
//             .map((item) => {
//               const active = isItemActive(item);
//               let dynamicTextColor = "";
//               if (active) {
//                 dynamicTextColor = "text-[#7CB142] font-semibold scale-105";
//               } else if (isTransparent) {
//                 dynamicTextColor = "text-white hover:text-[#7CB142] font-normal";
//               } else {
//                 dynamicTextColor = "text-gray-700 hover:text-[#7CB142] font-normal";
//               }

//               return (
//                 <button
//                   key={item.label}
//                   onClick={() => handleNavigation(item.id || "", item.path)}
//                   className={`text-sm lg:text-base transition-all duration-200 cursor-pointer whitespace-nowrap ${dynamicTextColor}`}
//                 >
//                   {item.label}
//                 </button>
//               );
//             })}
//         </div>

//         <div className="w-[240px] flex items-center justify-end shrink-0">
//           <button
//             onClick={handleSwitchToTech}
//             className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2.5 px-6 rounded-full flex items-center gap-2 transition text-xs md:text-sm shadow-lg whitespace-nowrap active:scale-95 cursor-pointer"
//           >
//             Switch to Tech
//           </button>
//         </div>
//       </div>

//       {/* MOBILE NAVBAR */}
//       <MobileNav
//         logo={logoSrc}
//         handleNavigation={handleNavigation}
//         handleSwitchToTech={handleSwitchToTech}
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//         isTransparent={isTransparent}
//         navigate={navigate}
//         isItemActive={isItemActive}
//         navigationItems={navigationItems}
//       />
//     </nav>
//   );
// };

// const MobileNav = ({
//   logo,
//   handleNavigation,
//   handleSwitchToTech,
//   mobileMenuOpen,
//   setMobileMenuOpen,
//   isTransparent,
//   navigate,
//   isItemActive,
//   navigationItems,
// }: any) => {
//   return (
//     <div className="md:hidden w-full h-20 flex items-center justify-between px-6 overflow-hidden">
//       <div className="flex items-center justify-start h-14 w-60">
//         <img
//           src={logo}
//           alt="AZHIZEN"
//           className={`w-auto max-w-full object-contain cursor-pointer transition-all duration-200 ${
//             isTransparent ? "h-[40px] ml-4" : "h-[120px] sm:h-18"
//           }`}
//           onClick={() => navigate("/")}
//         />
//       </div>

//       {/* Hamburger Button */}
//       <button
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         className="z-50 flex flex-col gap-1.5 p-2 cursor-pointer focus:outline-none"
//         aria-label="Toggle menu"
//       >
//         <span
//           className={`h-0.5 w-6 transition-all duration-300 ${
//             mobileMenuOpen ? "rotate-45 translate-y-2 bg-black" : isTransparent ? "bg-white" : "bg-black"
//           }`}
//         />
//         <span
//           className={`h-0.5 w-6 transition-all duration-300 ${
//             mobileMenuOpen ? "opacity-0" : isTransparent ? "bg-white" : "bg-black"
//           }`}
//         />
//         <span
//           className={`h-0.5 w-6 transition-all duration-300 ${
//             mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-black" : isTransparent ? "bg-white" : "bg-black"
//           }`}
//         />
//       </button>

//       {/* Side Drawer Overlay & Panel */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMobileMenuOpen(false)}
//               className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
//             />

//             {/* Side Drawer Panel */}
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ duration: 0.25, ease: "easeInOut" }}
//               className="fixed top-0 left-0 w-[80%] max-w-[320px] h-full bg-white text-gray-800 shadow-2xl z-50 flex flex-col justify-between overflow-y-auto"
//             >
//               <div>
//                 {/* Header with Logo and Close Icon */}
//                 <div className="w-full h-20 flex items-center justify-between px-6 border-b border-gray-100">
//                   <div className="flex items-center justify-start h-14 w-60">
//                     <img
//                       src="/azhizen-logo-green.png"
//                       alt="AZHIZEN"
//                       className="h-[120px] sm:h-18 w-auto max-w-full object-contain cursor-pointer"
//                       onClick={() => {
//                         setMobileMenuOpen(false);
//                         navigate("/");
//                       }}
//                     />
//                   </div>
//                   <button
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="p-2 text-gray-700 hover:text-black cursor-pointer focus:outline-none"
//                     aria-label="Close menu"
//                   >
//                     <svg className="w-6 h-6 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Navigation Items List */}
//                 <div className="flex flex-col px-6 py-2">
//                   {navigationItems.map((item: any) => {
//                     const active = isItemActive(item);
//                     return (
//                       <button
//                         key={item.label}
//                         onClick={() => handleNavigation(item.id || "", item.path)}
//                         className={`block w-full text-left text-lg py-3 border-b border-gray-100 cursor-pointer transition-colors ${
//                           active ? "text-[#7CB142] font-semibold" : "font-medium text-gray-800 hover:text-[#7CB142]"
//                         }`}
//                       >
//                         {item.label}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Bottom Section */}
//               <div className="p-6 border-t border-gray-100 flex flex-col gap-4 bg-gray-50/50">
//                 <button
//                   onClick={handleSwitchToTech}
//                   className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-98 transition-transform"
//                 >
//                   Switch to Tech
//                 </button>
//                 <div className="text-center text-xs text-gray-400">
//                   © AZHIZEN
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Navbar;



import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TechTransition } from "./TechTransition";

const navigationItems = [
  { label: "Home", id: "home", path: "/" },
  { label: "Services", id: "service-showcase", path: "/services" },
  { label: "Shop", id: "shop", path: "/shop" },
  { label: "About", id: "Aboutus", path: "/about" },
  { label: "Contact", id: "contact", path: "/contact" },
  { label: "Gallery", id: "gallery", path: "/", mobileOnly: true },
  { label: "FAQ", id: "faq", path: "/", mobileOnly: true },
];

export const Navbar = ({ showOnlyNav }: { showOnlyNav?: boolean }): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionMode, setTransitionMode] = useState<"toTech" | "toDiary">("toTech");
  const [isPastHero, setIsPastHero] = useState(false);
  const [isScrolledOnContact, setIsScrolledOnContact] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Helper function to scroll cleanly with fixed navbar offset
  const scrollToTarget = (targetId: string) => {
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return true;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPos - navOffset),
        behavior: "smooth",
      });
      return true;
    }
    return false;
  };

  // Play animation on return from Tech (via fresh reload or bfcache)
  useEffect(() => {
    const playReturnAnimation = () => {
      if (sessionStorage.getItem("wentToTech") === "true") {
        sessionStorage.removeItem("wentToTech");
        setTransitionMode("toDiary");
        setIsAnimating(true);
      }
    };

    // Trigger on fresh mount
    playReturnAnimation();

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        playReturnAnimation();
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  // 1. Cross-Page Scroll Handler
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (location.pathname === "/" && state?.scrollTo) {
      const targetId = state.scrollTo;
      window.history.replaceState({}, document.title);

      let attempts = 0;
      const timer = setInterval(() => {
        const success = scrollToTarget(targetId);
        attempts++;
        if (success || attempts > 20) {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [location.pathname, location.state]);

  // 2. Homepage Scroll Tracker
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleHomepageScroll = () => {
      const midScreen = window.scrollY + window.innerHeight / 3;

      const galleryEl = document.getElementById("gallery");
      const faqEl = document.getElementById("faq");

      if (
        faqEl &&
        midScreen >= faqEl.offsetTop &&
        midScreen < faqEl.offsetTop + faqEl.offsetHeight
      ) {
        setActiveSection("faq");
      } else if (
        galleryEl &&
        midScreen >= galleryEl.offsetTop &&
        midScreen < galleryEl.offsetTop + galleryEl.offsetHeight
      ) {
        setActiveSection("gallery");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleHomepageScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleHomepageScroll);
  }, [location.pathname]);

  // 3. Home Page Hero Tracker
  useEffect(() => {
    if (location.pathname !== "/") {
      setIsPastHero(false);
      return;
    }

    const targetElement = document.getElementById("Aboutus");

    if (!targetElement) {
      const handleScrollFallback = () => {
        setIsPastHero(window.scrollY > window.innerHeight - 90);
      };
      window.addEventListener("scroll", handleScrollFallback, { passive: true });
      return () => window.removeEventListener("scroll", handleScrollFallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top <= 90) {
          setIsPastHero(true);
        } else {
          setIsPastHero(false);
        }
      },
      {
        root: null,
        rootMargin: "-90px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(targetElement);
    return () => observer.disconnect();
  }, [location.pathname]);

  // 4. Contact Page Scroll Tracker
  useEffect(() => {
    if (location.pathname !== "/contact") {
      setIsScrolledOnContact(false);
      return;
    }

    const handleContactScroll = () => {
      setIsScrolledOnContact(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleContactScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleContactScroll);
  }, [location.pathname]);

  // 5. Navigation Handler
  const handleNavigation = (sectionId: string, path?: string) => {
    setMobileMenuOpen(false);

    if (sectionId === "service-showcase" || path === "/services") {
      navigate("/services");
      return;
    }
    if (sectionId === "shop") {
      navigate("/shop");
      return;
    }
    if (sectionId === "contact") {
      navigate("/contact");
      return;
    }
    if (sectionId === "Aboutus") {
      navigate("/about");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    setTimeout(() => {
      scrollToTarget(sectionId);
    }, 200);
  };

  // Direct Click Handler with window-level redirect
  const handleSwitchToTech = () => {
    sessionStorage.setItem("wentToTech", "true");
    setTransitionMode("toTech");
    setIsAnimating(true);
  };

  const handleTransitionComplete = () => {
    if (transitionMode === "toTech") {
      window.location.href = "https://tech.azhizen.com";
    } else {
      setIsAnimating(false);
    }
  };

  const isHomePage = location.pathname === "/";
  const isContactPage = location.pathname === "/contact";

  const isTransparent = (isHomePage && !isPastHero) || (isContactPage && !isScrolledOnContact);
  const logoSrc = isTransparent ? "/azhizen-logo-white.png" : "/azhizen-logo-green.png";
  const navBg = isTransparent
    ? "bg-transparent"
    : "bg-white shadow-md border-b border-gray-100";

  const isItemActive = (item: typeof navigationItems[0]) => {
    if (item.path && item.path !== "/" && location.pathname === item.path) return true;

    if (location.pathname === "/") {
      if (
        item.id === "home" &&
        (activeSection === "home" || activeSection === "service-showcase" || activeSection === "Aboutus")
      )
        return true;
      if (item.id === "gallery" && activeSection === "gallery") return true;
      if (item.id === "faq" && activeSection === "faq") return true;
    }

    return false;
  };

  return (
    <nav className={`w-full z-50 fixed top-0 left-0 transition-colors duration-300 ${navBg}`}>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TechTransition mode={transitionMode} onComplete={handleTransitionComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex max-w-[1440px] mx-auto items-center justify-between px-6 md:px-10 lg:px-16 h-20">
        <div className="w-[240px] flex items-center justify-start shrink-0 overflow-visible">
          <img
            src={logoSrc}
            alt="AZHIZEN"
            className={`cursor-pointer transition-all duration-200 ${
              logoSrc.includes("green")
                ? "h-10 md:h-12 w-auto scale-[2.8] -translate-x-2 origin-left"
                : "h-10 md:h-12 w-auto object-contain"
            }`}
            onClick={() => navigate("/")}
          />
        </div>

        <div className="flex items-center gap-8 justify-center">
          {navigationItems
            .filter((item) => !item.mobileOnly)
            .map((item) => {
              const active = isItemActive(item);
              let dynamicTextColor = "";
              if (active) {
                dynamicTextColor = "text-[#7CB142] font-semibold scale-105";
              } else if (isTransparent) {
                dynamicTextColor = "text-white hover:text-[#7CB142] font-normal";
              } else {
                dynamicTextColor = "text-gray-700 hover:text-[#7CB142] font-normal";
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.id || "", item.path)}
                  className={`text-sm lg:text-base transition-all duration-200 cursor-pointer whitespace-nowrap ${dynamicTextColor}`}
                >
                  {item.label}
                </button>
              );
            })}
        </div>

        <div className="w-[240px] flex items-center justify-end shrink-0">
          <button
            onClick={handleSwitchToTech}
            className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2.5 px-6 rounded-full flex items-center gap-2 transition text-xs md:text-sm shadow-lg whitespace-nowrap active:scale-95 cursor-pointer"
          >
            Switch to Tech
          </button>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <MobileNav
        logo={logoSrc}
        handleNavigation={handleNavigation}
        handleSwitchToTech={handleSwitchToTech}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isTransparent={isTransparent}
        navigate={navigate}
        isItemActive={isItemActive}
        navigationItems={navigationItems}
      />
    </nav>
  );
};

const MobileNav = ({
  logo,
  handleNavigation,
  handleSwitchToTech,
  mobileMenuOpen,
  setMobileMenuOpen,
  isTransparent,
  navigate,
  isItemActive,
  navigationItems,
}: any) => {
  return (
    <div className="md:hidden w-full h-20 flex items-center justify-between px-6 overflow-hidden">
      <div className="flex items-center justify-start h-14 w-60">
        <img
          src={logo}
          alt="AZHIZEN"
          className={`w-auto max-w-full object-contain cursor-pointer transition-all duration-200 ${
            isTransparent ? "h-[40px] ml-4" : "h-[120px] sm:h-18"
          }`}
          onClick={() => navigate("/")}
        />
      </div>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="z-50 flex flex-col gap-1.5 p-2 cursor-pointer focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 transition-all duration-300 ${
            mobileMenuOpen ? "rotate-45 translate-y-2 bg-black" : isTransparent ? "bg-white" : "bg-black"
          }`}
        />
        <span
          className={`h-0.5 w-6 transition-all duration-300 ${
            mobileMenuOpen ? "opacity-0" : isTransparent ? "bg-white" : "bg-black"
          }`}
        />
        <span
          className={`h-0.5 w-6 transition-all duration-300 ${
            mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-black" : isTransparent ? "bg-white" : "bg-black"
          }`}
        />
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-[80%] max-w-[320px] h-full bg-white text-gray-800 shadow-2xl z-50 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="w-full h-20 flex items-center justify-between px-6 border-b border-gray-100">
                  <div className="flex items-center justify-start h-14 w-60">
                    <img
                      src="/azhizen-logo-green.png"
                      alt="AZHIZEN"
                      className="h-[120px] sm:h-18 w-auto max-w-full object-contain cursor-pointer"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate("/");
                      }}
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-700 hover:text-black cursor-pointer focus:outline-none"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col px-6 py-2">
                  {navigationItems.map((item: any) => {
                    const active = isItemActive(item);
                    return (
                      <button
                        key={item.label}
                        onClick={() => handleNavigation(item.id || "", item.path)}
                        className={`block w-full text-left text-lg py-3 border-b border-gray-100 cursor-pointer transition-colors ${
                          active ? "text-[#7CB142] font-semibold" : "font-medium text-gray-800 hover:text-[#7CB142]"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 flex flex-col gap-4 bg-gray-50/50">
                <button
                  onClick={handleSwitchToTech}
                  className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-98 transition-transform"
                >
                  Switch to Tech
                </button>
                <div className="text-center text-xs text-gray-400 font-[Poppins]">
                  © AZHIZEN
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;