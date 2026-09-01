// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { Button } from "../../../../components/ui/button";
// // // // // import { Card, CardContent } from "../../../../components/ui/card";
// // // // // import { services } from "../../../../lib/services";
// // // // // import { useEffect, useState, useMemo } from "react";

// // // // // const categories = [
// // // // //   { id: "farm-management", label: "Farm Management", value: "Farm Management", categoryImage: "/image-352.png" },
// // // // //   { id: "cow-food", label: "Cow Food", value: "Cow Food", categoryImage: "/image-348p.png" },
// // // // //   { id: "cow-service", label: "Cow Service", value: "Cow Service", categoryImage: "/image-352.png" },
// // // // //   { id: "waste-management", label: "Waste Management", value: "Waste Management", categoryImage: "/image-348p.png" },
// // // // // ];

// // // // // export const ServiceCategorySection = (): JSX.Element => {
// // // // //   const navigate = useNavigate();
// // // // //   const [selectedCategory, setSelectedCategory] = useState("farm-management");

// // // // //   useEffect(() => {
// // // // //     window.scrollTo(0, 0);
// // // // //   }, []);

// // // // //   const filteredServices = useMemo(() => {
// // // // //     const activeCategory = categories.find(cat => cat.id === selectedCategory);

// // // // //     if (!activeCategory) {
// // // // //       return [];
// // // // //     }

// // // // //     const filtered = services.filter(service => service.category === activeCategory.value);
// // // // //     return filtered;
// // // // //   }, [selectedCategory]);

// // // // //   const activeCategory = categories.find(cat => cat.id === selectedCategory);

// // // // //   return (
// // // // //     <section id="service-showcase" className="w-full bg-white">
// // // // //       {/* Header Section */}
// // // // //       <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 max-w-[1400px] mx-auto pt-8 sm:pt-12 md:pt-16">
// // // // //         <p className="font-inter font-bold text-[#ff860e] text-xs sm:text-sm md:text-xl mb-2">
// // // // //           Service Category
// // // // //         </p>
// // // // //         <h2 className="font-inter font-bold text-black text-lg sm:text-2xl md:text-[40px] leading-tight mb-8 md:mb-12">
// // // // //           Service That We Provide
// // // // //         </h2>

// // // // //         {/* Category Selector */}
// // // // //         <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
// // // // //           {categories.map((cat) => (
// // // // //             <button
// // // // //               key={cat.id}
// // // // //               onClick={() => setSelectedCategory(cat.id)}
// // // // //               className={`px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border-2 font-inter font-semibold transition-all ${
// // // // //                 selectedCategory === cat.id
// // // // //                   ? "border-[#ff860e] bg-[#ff860e] text-white shadow-lg"
// // // // //                   : "border-gray-300 bg-white text-black hover:border-[#ff860e]"
// // // // //               }`}
// // // // //             >
// // // // //               {cat.label}
// // // // //             </button>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Two-Column Layout: Services (Left) & Image (Right) */}
// // // // //       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-12 md:pb-20">
// // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
// // // // //           {/* Left: Services Grid */}
// // // // //           <div className="">
// // // // //             <h3 className="font-inter font-bold text-black text-xl sm:text-2xl md:text-3xl mb-2 flex items-center gap-3">
// // // // //               <span className="w-1 h-8 bg-[#ff860e] rounded-full"></span>
// // // // //               {activeCategory?.label} Services
// // // // //             </h3>

// // // // //             {/* Services Grid */}
// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
// // // // //               {filteredServices && filteredServices.length > 0 ? (
// // // // //                 filteredServices.map((service) => (
// // // // //                   <Card
// // // // //                     key={service.id}
// // // // //                     className="relative w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 group"
// // // // //                   >
// // // // //                     <CardContent className="p-0">
// // // // //                       <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
// // // // //                         <img
// // // // //                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// // // // //                           alt={service.title}
// // // // //                           src={service.image}
// // // // //                         />
// // // // //                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // // // //                       </div>

// // // // //                       {/* Service Info */}
// // // // //                       <div className="p-4">
// // // // //                         <h4 className="font-inter font-semibold text-black text-sm md:text-base mb-1 line-clamp-2">
// // // // //                           {service.title}
// // // // //                         </h4>
// // // // //                         <p className="font-inter font-normal text-gray-600 text-xs md:text-sm mb-3 line-clamp-2">
// // // // //                           {service.description}
// // // // //                         </p>
// // // // //                         <div className="flex gap-2">
// // // // //                           <Button
// // // // //                             onClick={() => {
// // // // //                               window.scrollTo(0, 0);
// // // // //                               navigate('/service', { state: { service } });
// // // // //                             }}
// // // // //                             variant="ghost"
// // // // //                             className="flex-1 h-8 bg-gray-100 hover:bg-gray-200 text-black text-xs font-medium rounded-lg transition"
// // // // //                           >
// // // // //                             View
// // // // //                           </Button>
// // // // //                           <Button
// // // // //                             onClick={() => navigate('/enquiry', { state: { service } })}
// // // // //                             className="flex-1 h-8 bg-[#ff860e] hover:bg-[#e67e0b] text-white text-xs font-medium rounded-lg transition"
// // // // //                           >
// // // // //                             Enquire
// // // // //                           </Button>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </CardContent>
// // // // //                   </Card>
// // // // //                 ))
// // // // //               ) : (
// // // // //                 <div className="col-span-full text-center py-12">
// // // // //                   <p className="text-gray-500 text-base">No services found for this category</p>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>

// // // // //             {/* View All Services Button */}
// // // // //             {filteredServices && filteredServices.length > 0 && (
// // // // //               <div className="mt-8">
// // // // //                 <Button
// // // // //                   onClick={() => navigate('/services', { state: { category: activeCategory?.value } })}
// // // // //                   className="w-full sm:w-auto bg-[#ff860e] hover:bg-[#e67e0b] text-white font-bold py-3 px-8 rounded-lg transition"
// // // // //                 >
// // // // //                   View All {activeCategory?.label} Services
// // // // //                 </Button>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Right: Category Image */}
// // // // //           {/* <div className="flex items-center justify-center rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[500px] order-1 lg:order-2">
// // // // //             <img
// // // // //               src={activeCategory?.categoryImage || "/image-352.png"}
// // // // //               alt={activeCategory?.label}
// // // // //               className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
// // // // //             />
// // // // //           </div> */}
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // // ...existing code...
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { Button } from "../../../../components/ui/button";
// // // // // import { useEffect } from "react";

// // // // // export const ServiceCategorySection = (): JSX.Element => {
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     window.scrollTo(0, 0);
// // // // //   }, []);

// // // // //   return (
// // // // //     <section
// // // // //       id="service-showcase"
// // // // //       // Added 'relative' and 'overflow-hidden' here for correct positioning of the overlay
// // // // //       className="relative w-full py-12 h-[720px] sm:py-14 md:py-16 bg-white bg-cover bg-center overflow-hidden"
// // // // //       style={{ backgroundImage: "url('/services-bg.png')", minHeight: "600px" }}
// // // // //     >
// // // // //       {/* --- NEW: Background Blur & Fade Overlay --- */}
// // // // //       {/* This div sits on top of the background image but behind the content.
// // // // //           It uses a mask to apply a blur and dark fade only to the left side. */}
// // // // //       <div
// // // // //         className="absolute inset-0 z-0 pointer-events-none"
// // // // //         style={{
// // // // //           // Applies a dark overlay tint for better text contrast
// // // // //           backgroundColor: "rgba(0, 0, 0, 0.4)",
// // // // //           // Applies the blur to the background image behind this div
// // // // //           backdropFilter: "blur(6px)",
// // // // //           WebkitBackdropFilter: "blur(6px)", // Safari support
// // // // //           // Creates a horizontal gradient mask: visible on the left, transparent on the right
// // // // //           maskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 40%, transparent 70%)",
// // // // //           WebkitMaskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 40%, transparent 70%)", // Safari support
// // // // //         }}
// // // // //       />

// // // // //       {/* Added 'relative z-10' to ensure content sits on top of the blurred overlay */}
// // // // //       <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center">

// // // // //         {/* Main Grid Layout */}
// // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">

// // // // //           {/* Left Side: Farm360 Content & Design */}
// // // // //           <div className="flex flex-col w-[650px]  space-y-6">
// // // // //             <div className="inline-block px-4 py-1.5 bg-gray-600 rounded-full w-fit">
// // // // //               <span className="text-white font-bold text-sm uppercase tracking-wider">
// // // // //                 About Farm360
// // // // //               </span>
// // // // //             </div>

// // // // //             <h2 className="font-inter font-extrabold text-white text-3xl md:text-5xl leading-tight">
// // // // //               Revolutionizing <span className="text-gray-300">Dairy Farming</span> with 360° Solutions
// // // // //             </h2>

// // // // //             <p className="font-inter text-white text-lg md:text-xl leading-relaxed max-w-xl">
// // // // //               Farm360 is a complete solution for modern dairy farm management. We help you manage everything—including cow health, feeding systems, and farm maintenance—all in one place.
// // // // //             </p>

// // // // //             {/* View All Farm Management Services Button */}
// // // // //             <div className="pt-8">
// // // // //               <Button
// // // // //                 onClick={() => navigate('/services', { state: { category: "Farm Management" } })}
// // // // //                 className="w-full h-[60px] text-xl sm:w-auto bg-[#8dc201] hover:bg-[#7dae01] text-white font-bold py-6 px-10 rounded-xl shadow-xl transition-all hover:scale-105"
// // // // //               >
// // // // //                 View All Farm Management Services
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Right Side: (Empty in provided snippet) */}
// // // // //           <div></div>

// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };




// // // // //   return (
// // // // //     <section id="service-showcase" className="w-full bg--white relative overflow-hidden">
// // // // //       {/* 1. Background Animation Added Here */}

// // // // //       <BackgroundGlow />

// // // // //       <div className="relative z-10">
// // // // //         <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 max-w-[1400px] mx-auto pt-8 sm:pt-12 md:pt-16">
// // // // //           <p className="font-inter font-bold text-[#8dc63f] text-xs sm:text-sm md:text-xl mb-2">
// // // // //             Service Category
// // // // //           </p>
// // // // //           <h2 className="font-inter font-bold text-black text-lg sm:text-2xl md:text-[40px] leading-tight mb-8 md:mb-12">
// // // // //             Service That We Provide
// // // // //           </h2>

// // // // //           <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
// // // // //             {categories.map((cat) => (
// // // // //               <button
// // // // //                 key={cat.id}
// // // // //                 onClick={() => setSelectedCategory(cat.id)}
// // // // //                 className={`px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border-2 font-inter font-semibold transition-all ${
// // // // //                   selectedCategory === cat.id
// // // // //                     ? "border-[#8dc63f] bg-[#8dc63f] text-white shadow-lg"
// // // // //                     : "border-gray-300 bg-white text-black hover:border-[#8dc63f]"
// // // // //                 }`}
// // // // //               >
// // // // //                 {cat.label}
// // // // //               </button>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-12 md:pb-20">
// // // // //           <div className="w-full">
// // // // //             <h3 className="font-inter font-bold text-black text-xl sm:text-2xl md:text-3xl mb-8 flex items-center gap-3">
// // // // //               <span className="w-1 h-8 bg-[#8dc63f] rounded-full"></span>
// // // // //               {activeCategory?.label} Services
// // // // //             </h3>

// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // //               <AnimatePresence mode="wait">
// // // // //                 {filteredServices.map((service, index) => (
// // // // //                   <motion.div
// // // // //                     key={`${selectedCategory}-${service.id}`}
// // // // //                     initial={{ opacity: 0, y: 30 }}
// // // // //                     animate={{ opacity: 1, y: 0 }}
// // // // //                     exit={{ opacity: 0, scale: 0.95 }}
// // // // //                     transition={{ duration: 0.5, delay: index * 0.1 }}
// // // // //                   >
// // // // //                     <Card className="h-full bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
// // // // //                       <CardContent className="p-0">
// // // // //                         <div className="relative h-[200px] overflow-hidden">
// // // // //                           <img
// // // // //                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// // // // //                             alt={service.title}
// // // // //                             src={service.image}
// // // // //                           />
// // // // //                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
// // // // //                         </div>

// // // // //                         <div className="p-4">
// // // // //                           <h4 className="font-inter font-semibold text-black mb-1 line-clamp-1">
// // // // //                             {service.title}
// // // // //                           </h4>
// // // // //                           <p className="text-gray-600 text-xs mb-3 line-clamp-2">
// // // // //                             {service.description}
// // // // //                           </p>
// // // // //                           <div className="flex gap-2">
// // // // //                             <Button
// // // // //                               onClick={() => {
// // // // //                                 window.scrollTo(0, 0);
// // // // //                                 navigate('/service', { state: { service } });
// // // // //                               }}
// // // // //                               variant="ghost"
// // // // //                               className="flex-1 h-8 bg-gray-100 hover:bg-gray-200 text-xs font-medium rounded-lg"
// // // // //                             >
// // // // //                               View
// // // // //                             </Button>
// // // // //                             <Button
// // // // //                               onClick={() => navigate('/enquiry', { state: { service } })}
// // // // //                               className="flex-1 h-8 bg-[#8dc63f] hover:brightness-110 text-white text-xs font-medium rounded-lg"
// // // // //                             >
// // // // //                               Enquire
// // // // //                             </Button>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </CardContent>
// // // // //                     </Card>
// // // // //                   </motion.div>
// // // // //                 ))}
// // // // //               </AnimatePresence>
// // // // //             </div>

// // // // //             {filteredServices.length > 0 && (
// // // // //               <div className="mt-12 text-center">
// // // // //                 <Button
// // // // //                   onClick={() => navigate('/services', { state: { category: activeCategory?.value } })}
// // // // //                   className="bg-[#8dc63f] hover:brightness-110 text-white font-bold py-3 px-10 rounded-lg transition"
// // // // //                 >
// // // // //                   View All Services
// // // // //                 </Button>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // import { useNavigate } from "react-router-dom";
// // // import { Button } from "../../../../components/ui/button";
// // // import { Card, CardContent } from "../../../../components/ui/card";
// // // import { services } from "../../../../lib/services";
// // // import { useEffect, useState, useMemo, useRef, useLayoutEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { GiGoat, GiChicken } from "react-icons/gi";
// // // import { FaCow } from "react-icons/fa6";
// // // import gsap from "gsap";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // gsap.registerPlugin(ScrollTrigger);

// // // // =========================================================
// // // // CANVA-STYLE LEFT-TO-RIGHT BLOCK SLIDE REVEAL VARIANTS
// // // // =========================================================
// // // const blockContainerVariants = {
// // //   hidden: { opacity: 0 },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: {
// // //       staggerChildren: 0.18,
// // //       delayChildren: 0.1,
// // //     },
// // //   },
// // // };

// // // const blockItemLeftToRightVariants = {
// // //   hidden: {
// // //     x: "-100%",
// // //     opacity: 0,
// // //     filter: "blur(6px)",
// // //   },
// // //   visible: {
// // //     x: "0%",
// // //     opacity: 1,
// // //     filter: "blur(0px)",
// // //     transition: {
// // //       duration: 0.85,
// // //       ease: [0.16, 1, 0.3, 1], // Smooth Canva cubic-bezier slide curve
// // //     },
// // //   },
// // // };

// // // const categories = [
// // //   {
// // //     id: "Diary Tech Service",
// // //     label: "Dairy Tech",
// // //     value: "Diary Tech Service",
// // //     icon: FaCow,
// // //   },
// // //   {
// // //     id: "Goat Farm Service",
// // //     label: "Goat Farm",
// // //     value: "Goat Farm Service",
// // //     icon: GiGoat,
// // //   },
// // //   {
// // //     id: "Poultry Farm Service",
// // //     label: "Poultry Farm",
// // //     value: "Poultry Farm Service",
// // //     icon: GiChicken,
// // //   },
// // // ];

// // // // --- Background Animation Component ---
// // // const BackgroundGlow = () => (
// // //   <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
// // //     {[...Array(3)].map((_, i) => (
// // //       <motion.div
// // //         key={i}
// // //         className="absolute rounded-full bg-[#8dc63f]/10 blur-[80px]"
// // //         initial={{ opacity: 0 }}
// // //         animate={{
// // //           opacity: [0.3, 0.6, 0.3],
// // //           x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
// // //           y: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
// // //         }}
// // //         transition={{
// // //           duration: 10 + i * 2,
// // //           repeat: Infinity,
// // //           ease: "linear",
// // //         }}
// // //         style={{
// // //           width: 300 + i * 100,
// // //           height: 300 + i * 100,
// // //           top: `${20 + i * 20}%`,
// // //           left: i === 0 ? "-10%" : i === 1 ? "80%" : "40%",
// // //         }}
// // //       />
// // //     ))}
// // //   </div>
// // // );

// // // export const ServiceCategorySection = (): JSX.Element => {
// // //   const navigate = useNavigate();
// // //   const [selectedCategory, setSelectedCategory] = useState("Diary Tech Service");
// // //   const servicesListRef = useRef<HTMLHeadingElement>(null);
// // //   const categoryContainerRef = useRef<HTMLDivElement>(null);

// // //   // GSAP Container Refs
// // //   const pinnedViewportSectionRef = useRef<HTMLDivElement>(null);
// // //   const cardsTrackRef = useRef<HTMLDivElement>(null);
// // //   const triggerRef = useRef<ScrollTrigger | null>(null);

// // //   useEffect(() => {
// // //     window.scrollTo(0, 0);
// // //   }, []);

// // //   const filteredServices = useMemo(() => {
// // //     const activeCategory = categories.find((cat) => cat.id === selectedCategory);
// // //     if (!activeCategory) return [];

// // //     return services
// // //       .filter((service) => service.category === activeCategory.value)
// // //       .slice(0, 4);
// // //   }, [selectedCategory]);

// // //   const activeCategory = categories.find((cat) => cat.id === selectedCategory);

// // //   useEffect(() => {
// // //     if (categoryContainerRef.current) {
// // //       const container = categoryContainerRef.current;
// // //       const centerScrollPosition = (container.scrollWidth - container.clientWidth) / 2;
// // //       container.scrollLeft = centerScrollPosition;
// // //     }
// // //   }, []);

// // //   // =========================================================
// // //   // GSAP SCROLLTRIGGER PINNING (PREVENTS OUR WORK FROM SCROLLING UP EARLY)
// // //   // =========================================================
// // //  // =========================================================
// // //   // PURE GSAP SCROLLTRIGGER (NO DOM PIN OVERLAP BUG)
// // //   // =========================================================
// // //   useLayoutEffect(() => {
// // //     const pinEl = pinnedViewportSectionRef.current;
// // //     const cardsTrack = cardsTrackRef.current;

// // //     if (!pinEl || !cardsTrack) return;

// // //     const ctx = gsap.context(() => {
// // //       const isMobile = window.innerWidth < 768;

// // //       const getScrollAmount = () => {
// // //         if (isMobile) {
// // //           const distance = cardsTrack.scrollWidth - pinEl.clientWidth + 32;
// // //           return distance > 0 ? -distance : 0;
// // //         }
// // //         // Original Desktop Logic (Untouched)
// // //         return -(cardsTrack.scrollWidth - pinEl.clientWidth + 200);
// // //       };

// // //           if (isMobile) {
// // //         // Grab the outermost section containing the title, category icons, video, AND cards
// // //         const outerSection = document.getElementById("service-showcase");

// // //         gsap.to(cardsTrack, {
// // //           x: getScrollAmount,
// // //           ease: "none",
// // //           scrollTrigger: {
// // //             // 📍 PIN THE ENTIRE SECTION, NOT JUST THE INNER WRAPPER
// // //             trigger: outerSection || pinEl,
// // //             pin: outerSection || pinEl,
// // //             pinType: "fixed",      // 🔒 Forces full page layout lock on mobile webkit/safari
// // //             pinSpacing: true,     // 🛡️ Keeps 'Our Working Method' pushed down until Card 7 finishes

// // //             start: "top top+=80",
// // //             end: () => `+=${Math.abs(getScrollAmount())}`,
// // //             scrub: 0.20,
// // //             invalidateOnRefresh: true,
// // //             anticipatePin: 1,
// // //           },
// // //         });


// // //       } else {
// // //         // 📍 DESKTOP ACTION: Original Pinning Untouched
// // //         const tween = gsap.to(cardsTrack, {
// // //           x: getScrollAmount,
// // //           ease: "none",
// // //           scrollTrigger: {
// // //             trigger: pinEl,
// // //             pin: true,
// // //             pinSpacing: true,
// // //             scrub: 1,
// // //             start: "top top-=210",
// // //             end: () => `+=${Math.abs(getScrollAmount())}`,
// // //             invalidateOnRefresh: true,
// // //             anticipatePin: 1,
// // //           },
// // //         });

// // //         triggerRef.current = tween.scrollTrigger || null;
// // //       }
// // //     }, pinnedViewportSectionRef);

// // //     const timer = setTimeout(() => {
// // //       ScrollTrigger.refresh();
// // //     }, 150);

// // //     return () => {
// // //       clearTimeout(timer);
// // //       ctx.revert();
// // //     };
// // //   }, [selectedCategory, filteredServices]);

// // //   // =========================================================
// // //   // RELIABLE TAB CLICK SCROLLING TO HORIZONTAL CARDS
// // //   // =========================================================
// // //   const handleCategoryClick = (categoryId: string) => {
// // //     setSelectedCategory(categoryId);

// // //     // Reset track position to 0
// // //     if (cardsTrackRef.current) {
// // //       gsap.set(cardsTrackRef.current, { x: 0 });
// // //     }

// // //     setTimeout(() => {
// // //       if (triggerRef.current) {
// // //         window.scrollTo({
// // //           top: triggerRef.current.start,
// // //           behavior: "smooth",
// // //         });
// // //       } else if (servicesListRef.current) {
// // //         const elementPosition = servicesListRef.current.getBoundingClientRect().top + window.pageYOffset;
// // //         window.scrollTo({
// // //           top: elementPosition - 100,
// // //           behavior: "smooth",
// // //         });
// // //       }
// // //     }, 200);
// // //   };

// // //   return (
// // //     <section id="service-showcase" className="w-full bg-white relative">
// // //       {/* Background Glow */}
// // //       <BackgroundGlow />

// // //       <div className="relative z-10">
// // //         {/* Header */}
// // //         <div
// // //           className="
// // //             text-center
// // //             px-4
// // //             sm:px-6
// // //             max-w-[1400px]
// // //             mx-auto
// // //             pt-8
// // //             sm:pt-12
// // //             md:pt-16
// // //           "
// // //         >
// // //           <p
// // //             className="
// // //               font-inter
// // //               font-bold
// // //               text-[#7CB142]
// // //               text-xs
// // //               sm:text-sm
// // //               md:text-xl
// // //               mb-2
// // //             "
// // //           >
// // //             Service Category
// // //           </p>

// // //           <h2
// // //             className="
// // //               font-inter
// // //               font-semibold
// // //               text-black
// // //               text-[28px]
// // //               sm:text-[36px]
// // //               md:text-[40px]
// // //               leading-tight
// // //               mb-10
// // //             "
// // //           >
// // //             Service That We Provide
// // //           </h2>

// // //           {/* Category Buttons Container */}
// // //           <div
// // //             ref={categoryContainerRef}
// // //             className="
// // //               flex
// // //               justify-center
// // //               items-center
// // //               gap-3
// // //               sm:gap-4
// // //               overflow-x-auto
// // //               sm:overflow-visible
// // //               bg-white
// // //               rounded-[24px]
// // //               sm:rounded-[30px]
// // //               px-4
// // //               sm:px-6
// // //               py-4
// // //               sm:py-5
// // //               shadow-xl
// // //               relative
// // //               z-20
// // //               max-w-[950px]
// // //               mx-auto
// // //               w-full

// // //               [scrollbar-width:none]
// // //               [-ms-overflow-style:none]
// // //               [&::-webkit-scrollbar]:hidden
// // //             "
// // //           >
// // //             {categories.map((cat) => {
// // //               const IconComponent = cat.icon;
// // //               const isSelected = selectedCategory === cat.id;

// // //               return (
// // //                 <button
// // //                   key={cat.id}
// // //                   type="button"
// // //                   onClick={() => handleCategoryClick(cat.id)}
// // //                   className={`
// // //                     flex-1
// // //                     sm:flex-initial
// // //                     min-w-[80px]
// // //                     sm:min-w-0
// // //                     flex
// // //                     items-center
// // //                     justify-center
// // //                     gap-2
// // //                     px-5
// // //                     sm:px-8
// // //                     md:px-10
// // //                     py-3.3
// // //                     sm:py-3
// // //                     rounded-xl
// // //                     border
// // //                     font-[Poppins]
// // //                     font-medium
// // //                     transition-all
// // //                     duration-300
// // //                     text-sm
// // //                     sm:text-base
// // //                     cursor-pointer
// // //                     ${
// // //                       isSelected
// // //                         ? "bg-[#7CB142] border-[#7CB142] text-white shadow-md shadow-[#7CB142]/20 font-semibold"
// // //                         : "bg-white border-gray-300 text-black hover:bg-gray-50"
// // //                     }
// // //                   `}
// // //                 >
// // //                   <IconComponent className="text-3xl sm:hidden shrink-0 scale-125" />

// // //                   <span className="hidden sm:inline">
// // //                     {cat.label.trim().endsWith("Service")
// // //                       ? cat.label
// // //                       : `${cat.label.trim()} Service`}
// // //                   </span>
// // //                 </button>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>

// // //         {/* PINNED VIEWPORT CONTAINER */}
// // //         <div ref={pinnedViewportSectionRef} className="w-full bg-white relative">
// // //           {/* Dynamic Video Panel */}
// // //           <div
// // //             className="
// // //               w-full
// // //               -mt-[50px]
// // //               relative
// // //               z-10
// // //             "
// // //           >
// // //             <div
// // //               className="
// // //                 relative
// // //                 w-full
// // //                 h-[260px]
// // //                 sm:h-[350px]
// // //                 md:h-[450px]
// // //                 lg:h-[550px]
// // //                 overflow-hidden
// // //                 shadow-2xl
// // //                 rounded-b-[30px]
// // //                 bg-black
// // //               "
// // //             >
// // //               <video
// // //                 key={selectedCategory}
// // //                 autoPlay
// // //                 muted
// // //                 loop
// // //                 playsInline
// // //                 className="
// // //                   w-full
// // //                   h-full
// // //                   object-cover
// // //                 "
// // //               >
// // //                 <source
// // //                   src={
// // //                     selectedCategory === "Diary Tech Service"
// // //                       ? "/cow.mp4"
// // //                       : selectedCategory === "Goat Farm Service"
// // //                       ? "/goat.mp4"
// // //                       : selectedCategory === "Poultry Farm Service"
// // //                       ? "/cow-service.mp4"
// // //                       : "/waste-management.mp4"
// // //                   }
// // //                   type="video/mp4"
// // //                 />
// // //               </video>

// // //               <div
// // //                 className="
// // //                   absolute
// // //                   inset-0
// // //                   bg-gradient-to-b
// // //                   from-black/80
// // //                   via-black/20
// // //                   to-black/90
// // //                   pointer-events-none
// // //                 "
// // //               />

// // //               {/* CANVA BLOCK REVEAL ANIMATED OVERLAY TEXT */}
// // //               <div className="absolute bottom-10 left-6 sm:bottom-20 sm:left-12 md:bottom-24 z-20 max-w-[650px] text-left pointer-events-none">
// // //                 <AnimatePresence mode="wait">
// // //                   <motion.div
// // //                     key={selectedCategory}
// // //                     variants={blockContainerVariants}
// // //                     initial="hidden"
// // //                     animate="visible"
// // //                     exit="hidden"
// // //                   >
// // //                     {selectedCategory === "Diary Tech Service" ? (
// // //                       <>
// // //                         <div className="overflow-hidden pb-1">
// // //                           <motion.h2
// // //                             variants={blockItemLeftToRightVariants}
// // //                             className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
// // //                           >
// // //                             Smart Agricultural Solutions
// // //                           </motion.h2>
// // //                         </div>
// // //                         <div className="overflow-hidden pb-1">
// // //                           <motion.h2
// // //                             variants={blockItemLeftToRightVariants}
// // //                             className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
// // //                           >
// // //                             For Modern Livestock Farms
// // //                           </motion.h2>
// // //                         </div>
// // //                       </>
// // //                     ) : selectedCategory === "Goat Farm Service" ? (
// // //                       <>
// // //                         <div className="overflow-hidden pb-1">
// // //                           <motion.h2
// // //                             variants={blockItemLeftToRightVariants}
// // //                             className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
// // //                           >
// // //                             Advanced Nutrition & Feed Management
// // //                           </motion.h2>
// // //                         </div>
// // //                         <div className="overflow-hidden pb-1">
// // //                           <motion.h2
// // //                             variants={blockItemLeftToRightVariants}
// // //                             className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
// // //                           >
// // //                             For Healthy Goat Breeds
// // //                           </motion.h2>
// // //                         </div>
// // //                       </>
// // //                     ) : selectedCategory === "Poultry Farm Service" ? (
// // //                       <>
// // //                         <div className="overflow-hidden pb-1">
// // //                           <motion.h2
// // //                             variants={blockItemLeftToRightVariants}
// // //                             className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
// // //                           >
// // //                             Automated Poultry & Hatchery Tech
// // //                           </motion.h2>
// // //                         </div>
// // //                         <div className="overflow-hidden pb-1">
// // //                           <motion.h2
// // //                             variants={blockItemLeftToRightVariants}
// // //                             className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
// // //                           >
// // //                             For High Yield Production
// // //                           </motion.h2>
// // //                         </div>
// // //                       </>
// // //                     ) : (
// // //                       <>
// // //                         <div className="overflow-hidden pb-1">
// // //                           <motion.h2
// // //                             variants={blockItemLeftToRightVariants}
// // //                             className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
// // //                           >
// // //                             Sustainable Farm Innovations
// // //                           </motion.h2>
// // //                         </div>
// // //                         <div className="overflow-hidden pb-1">
// // //                           <motion.h2
// // //                             variants={blockItemLeftToRightVariants}
// // //                             className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
// // //                           >
// // //                             For Tomorrow's Agriculture
// // //                           </motion.h2>
// // //                         </div>
// // //                       </>
// // //                     )}
// // //                   </motion.div>
// // //                 </AnimatePresence>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Cards Heading + Horizontal Track */}
// // //           <div
// // //             className="
// // //               max-w-[1400px]
// // //               mx-auto
// // //               px-4
// // //               sm:px-6
// // //               py-8
// // //               sm:py-12
// // //               md:py-16
// // //             "
// // //           >
// // //             {/* Section Title */}
// // //             <h3
// // //               ref={servicesListRef}
// // //               className="
// // //                 font-inter
// // //                 font-semibold
// // //                 text-black
// // //                 text-[24px]
// // //                 sm:text-[30px]
// // //                 md:text-[30px]
// // //                 mb-6
// // //                 sm:mb-10
// // //               "
// // //             >
// // //               List Of {activeCategory?.label} Service
// // //             </h3>

// // //             {/* Cards Horizontal Track */}
// // //             <div className="overflow-hidden w-full">
// // //               <div
// // //                 ref={cardsTrackRef}
// // //                 className="
// // //                   flex
// // //                   gap-4
// // //                   sm:gap-6
// // //                   pb-6
// // //                   pt-2
// // //                   w-max
// // //                 "
// // //               >
// // //                 <AnimatePresence mode="wait">
// // //                   {[
// // //                     ...filteredServices,
// // //                     ...filteredServices,
// // //                     ...filteredServices,
// // //                   ]
// // //                     .slice(0, 7)
// // //                     .map((service, index) => (
// // //                       <motion.div
// // //                         key={`${selectedCategory}-${service.id}-${index}`}
// // //                         initial={{ opacity: 0, y: 20 }}
// // //                         animate={{ opacity: 1, y: 0 }}
// // //                         exit={{ opacity: 0 }}
// // //                         transition={{
// // //                           duration: 0.4,
// // //                           delay: index * 0.08,
// // //                         }}
// // //                         className="
// // //                           flex-shrink-0
// // //                           w-[280px]
// // //                           sm:w-[320px]
// // //                         "
// // //                       >
// // //                         <Card
// // //                           className="
// // //                             overflow-hidden
// // //                             rounded-[18px]
// // //                             shadow-xl
// // //                             border-none
// // //                             group
// // //                             bg-white
// // //                             h-full
// // //                           "
// // //                         >
// // //                           <CardContent className="p-0">
// // //                             {/* Image */}
// // //                             <div
// // //                               className="
// // //                                 relative
// // //                                 h-[260px]
// // //                                 overflow-hidden
// // //                               "
// // //                             >
// // //                               <img
// // //                                 src={service.image}
// // //                                 alt={service.title}
// // //                                 className="
// // //                                   w-full
// // //                                   h-full
// // //                                   object-cover
// // //                                   transition-transform
// // //                                   duration-700
// // //                                   group-hover:scale-105
// // //                                 "
// // //                               />

// // //                               {/* Gradient */}
// // //                               <div
// // //                                 className="
// // //                                   absolute
// // //                                   inset-0
// // //                                   bg-gradient-to-t
// // //                                   from-black/80
// // //                                   via-black/20
// // //                                   to-transparent
// // //                                 "
// // //                               />

// // //                               {/* Content */}
// // //                               <div
// // //                                 className="
// // //                                   absolute
// // //                                   bottom-0
// // //                                   left-0
// // //                                   w-full
// // //                                   p-4
// // //                                 "
// // //                               >
// // //                                 <h4
// // //                                   className="
// // //                                     text-white
// // //                                     font-semibold
// // //                                     text-sm
// // //                                     leading-snug
// // //                                     mb-3
// // //                                   "
// // //                                 >
// // //                                   {service.title}
// // //                                 </h4>

// // //                                 {/* Buttons */}
// // //                                 <div className="flex gap-2 items-center">
// // //                                   <Button
// // //                                     type="button"
// // //                                     onClick={() => {
// // //                                       window.scrollTo(0, 0);
// // //                                       navigate("/service", {
// // //                                         state: { service },
// // //                                       });
// // //                                     }}
// // //                                     className="
// // //                                       flex-1
// // //                                       h-8
// // //                                       px-2
// // //                                       rounded-full
// // //                                       bg-white
// // //                                       hover:bg-gray-200
// // //                                       text-black
// // //                                       text-xs
// // //                                       font-medium
// // //                                     "
// // //                                   >
// // //                                     View
// // //                                   </Button>

// // //                                   <Button
// // //                                     type="button"
// // //                                     onClick={() =>
// // //                                       navigate("/enquiry", {
// // //                                         state: { service },
// // //                                       })
// // //                                     }
// // //                                     className="
// // //                                       flex-1
// // //                                       h-8
// // //                                       px-2
// // //                                       rounded-full
// // //                                       bg-[#8dc63f]
// // //                                       hover:brightness-110
// // //                                       text-white
// // //                                       text-xs
// // //                                       font-medium
// // //                                     "
// // //                                   >
// // //                                     Let's Talk
// // //                                   </Button>
// // //                                 </div>
// // //                               </div>
// // //                             </div>
// // //                           </CardContent>
// // //                         </Card>
// // //                       </motion.div>
// // //                     ))}
// // //                 </AnimatePresence>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ServiceCategorySection;


// import { useNavigate } from "react-router-dom";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { services } from "../../../../lib/services";
// import { useEffect, useState, useMemo, useRef, useLayoutEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // =========================================================
// // 1. GSAP CONFIGURATION & PLUGINS
// // =========================================================
// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.config({
//   autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
//   ignoreMobileResize: true,
// });

// // =========================================================
// // 2. CONSTANTS & VARIANTS
// // =========================================================
// const blockContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.18,
//       delayChildren: 0.1,
//     },
//   },
// };

// const blockItemLeftToRightVariants = {
//   hidden: {
//     x: "-100%",
//     opacity: 0,
//     filter: "blur(6px)",
//   },
//   visible: {
//     x: "0%",
//     opacity: 1,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.85,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const categories = [
//   {
//     id: "Diary Tech Service",
//     label: "Dairy Tech",
//     value: "Diary Tech Service",
//     categoryImage: "/game-icons_cow.png",
//   },
//   {
//     id: "Goat Farm Service",
//     label: "Goat Farm",
//     value: "Goat Farm Service",
//     categoryImage: "/image_1194-removebg-preview.png",
//   },
//   {
//     id: "Poultry Farm Service",
//     label: "Poultry Farm",
//     value: "Poultry Farm Service",
//     categoryImage: "/cbi_chicken.png",
//   },
// ];

// // =========================================================
// // 3. ASSET READINESS HELPER
// // =========================================================
// const waitForLayoutReady = async (): Promise<void> => {
//   const waitForImage = (img: HTMLImageElement): Promise<void> => {
//     if (img.complete) {
//       return typeof img.decode === "function"
//         ? img.decode().catch(() => undefined)
//         : Promise.resolve();
//     }
//     if (img.loading === "lazy") {
//       return Promise.resolve();
//     }
//     return new Promise<void>((resolve) => {
//       const done = () => {
//         img.removeEventListener("load", done);
//         img.removeEventListener("error", done);
//         resolve();
//       };
//       img.addEventListener("load", done, { once: true });
//       img.addEventListener("error", done, { once: true });
//     });
//   };

//   const waitForVideo = (video: HTMLVideoElement): Promise<void> => {
//     if (video.readyState >= 1) {
//       return Promise.resolve();
//     }
//     return new Promise<void>((resolve) => {
//       const done = () => {
//         video.removeEventListener("loadedmetadata", done);
//         video.removeEventListener("error", done);
//         resolve();
//       };
//       video.addEventListener("loadedmetadata", done, { once: true });
//       video.addEventListener("error", done, { once: true });
//     });
//   };

//   const images = Array.from(document.images);
//   const videos = Array.from(document.querySelectorAll("video"));

//   const assetReady = Promise.all([
//     document.fonts?.ready ?? Promise.resolve(),
//     ...images.map(waitForImage),
//     ...videos.map(waitForVideo),
//   ]);

//   await Promise.race([
//     assetReady,
//     new Promise<void>((resolve) => {
//       window.setTimeout(resolve, 3000);
//     }),
//   ]);

//   await new Promise<void>((resolve) => {
//     requestAnimationFrame(() => {
//       requestAnimationFrame(() => resolve());
//     });
//   });
// };

// // =========================================================
// // 4. SHARED UI SUB-COMPONENTS
// // =========================================================

// // Background Glow
// const BackgroundGlow = () => (
//   <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//     {[...Array(3)].map((_, i) => (
//       <motion.div
//         key={i}
//         className="absolute rounded-full bg-[#8dc63f]/10 blur-[80px]"
//         initial={{ opacity: 0 }}
//         animate={{
//           opacity: [0.3, 0.6, 0.3],
//           x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
//           y: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
//         }}
//         transition={{
//           duration: 10 + i * 2,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{
//           width: 300 + i * 100,
//           height: 300 + i * 100,
//           top: `${20 + i * 20}%`,
//           left: i === 0 ? "-10%" : i === 1 ? "80%" : "40%",
//         }}
//       />
//     ))}
//   </div>
// );

// // Header & Category Button Row
// interface CategorySelectorProps {
//   selectedCategory: string;
//   onSelectCategory: (categoryId: string) => void;
//   containerRef: React.RefObject<HTMLDivElement>;
// }

// const CategorySelector = ({
//   selectedCategory,
//   onSelectCategory,
//   containerRef,
// }: CategorySelectorProps) => (
//   <div className="text-center px-4 sm:px-6 max-w-[1400px] mx-auto pt-8 sm:pt-12 md:pt-16">
//     <p className="font-inter font-bold text-[#7CB142] text-xs sm:text-sm md:text-xl mb-2">
//       Service Category
//     </p>

//     <h2 className="font-inter font-semibold text-black text-[28px] sm:text-[36px] md:text-[40px] leading-tight mb-10">
//       Service That We Provide
//     </h2>

//     <div
//       ref={containerRef}
//       className="
//         flex
//         justify-center
//         items-center
//         gap-3
//         sm:gap-4
//         overflow-x-auto
//         sm:overflow-visible
//         bg-white
//         rounded-[24px]
//         sm:rounded-[30px]
//         px-4
//         sm:px-6
//         py-4
//         sm:py-5
//         shadow-xl
//         relative
//         z-20
//         max-w-[950px]
//         mx-auto
//         w-full
//         [scrollbar-width:none]
//         [-ms-overflow-style:none]
//         [&::-webkit-scrollbar]:hidden
//       "
//     >
//       {categories.map((cat) => {
//         const isSelected = selectedCategory === cat.id;
//         return (
//           <button
//             key={cat.id}
//             type="button"
//             onClick={() => onSelectCategory(cat.id)}
//             className={`
//               flex-1
//               sm:flex-initial
//               min-w-[80px]
//               sm:min-w-0
//               flex
//               items-center
//               justify-center
//               gap-2
//               px-5
//               sm:px-8
//               md:px-10
//               py-3.3
//               sm:py-3
//               rounded-xl
//               border
//               font-[Poppins]
//               font-medium
//               transition-all
//               duration-300
//               text-sm
//               sm:text-base
//               cursor-pointer
//               ${
//                 isSelected
//                   ? "bg-[#7CB142] border-[#7CB142] text-white shadow-md shadow-[#7CB142]/20 font-semibold"
//                   : "bg-white border-gray-300 text-black hover:bg-gray-50"
//               }
//             `}
//           >
//             <img
//               src={cat.categoryImage}
//               alt={cat.label}
//               className={`w-6 h-6 sm:w-5 sm:h-5 object-contain shrink-0 transition-transform duration-200 ${
//                 isSelected ? "brightness-0 invert" : ""
//               }`}
//             />
//             <span className="hidden sm:inline">
//               {cat.label.trim().endsWith("Service")
//                 ? cat.label
//                 : `${cat.label.trim()} Service`}
//             </span>
//           </button>
//         );
//       })}
//     </div>
//   </div>
// );

// // Dynamic Video Panel with Canva Text Reveal
// interface VideoPanelProps {
//   selectedCategory: string;
// }

// const VideoPanel = ({ selectedCategory }: VideoPanelProps) => (
//   <div className="w-full -mt-[50px] relative z-10">
//     <div className="relative w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden shadow-2xl rounded-b-[30px] bg-black">
//       <video
//         key={selectedCategory}
//         autoPlay
//         muted
//         loop
//         playsInline
//         onLoadedMetadata={() => ScrollTrigger.refresh()}
//         className="w-full h-full object-cover"
//       >
//         <source
//           src={
//             selectedCategory === "Diary Tech Service"
//               ? "/cow.mp4"
//               : selectedCategory === "Goat Farm Service"
//               ? "/goat.mp4"
//               : selectedCategory === "Poultry Farm Service"
//               ? "/cow-service.mp4"
//               : "/waste-management.mp4"
//           }
//           type="video/mp4"
//         />
//       </video>

//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 pointer-events-none" />

//       {/* CANVA BLOCK REVEAL ANIMATED OVERLAY TEXT */}
//       <div className="absolute bottom-10 left-6 sm:bottom-20 sm:left-12 md:bottom-24 z-20 max-w-[650px] text-left pointer-events-none">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selectedCategory}
//             variants={blockContainerVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//           >
//             {selectedCategory === "Diary Tech Service" ? (
//               <>
//                 <div className="overflow-hidden pb-1">
//                   <motion.h2
//                     variants={blockItemLeftToRightVariants}
//                     className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
//                   >
//                     Smart Agricultural Solutions
//                   </motion.h2>
//                 </div>
//                 <div className="overflow-hidden pb-1">
//                   <motion.h2
//                     variants={blockItemLeftToRightVariants}
//                     className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
//                   >
//                     For Modern Livestock Farms
//                   </motion.h2>
//                 </div>
//               </>
//             ) : selectedCategory === "Goat Farm Service" ? (
//               <>
//                 <div className="overflow-hidden pb-1">
//                   <motion.h2
//                     variants={blockItemLeftToRightVariants}
//                     className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
//                   >
//                     Advanced Nutrition & Feed Management
//                   </motion.h2>
//                 </div>
//                 <div className="overflow-hidden pb-1">
//                   <motion.h2
//                     variants={blockItemLeftToRightVariants}
//                     className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
//                   >
//                     For Healthy Goat Breeds
//                   </motion.h2>
//                 </div>
//               </>
//             ) : selectedCategory === "Poultry Farm Service" ? (
//               <>
//                 <div className="overflow-hidden pb-1">
//                   <motion.h2
//                     variants={blockItemLeftToRightVariants}
//                     className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
//                   >
//                     Automated Poultry & Hatchery Tech
//                   </motion.h2>
//                 </div>
//                 <div className="overflow-hidden pb-1">
//                   <motion.h2
//                     variants={blockItemLeftToRightVariants}
//                     className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
//                   >
//                     For High Yield Production
//                   </motion.h2>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="overflow-hidden pb-1">
//                   <motion.h2
//                     variants={blockItemLeftToRightVariants}
//                     className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
//                   >
//                     Sustainable Farm Innovations
//                   </motion.h2>
//                 </div>
//                 <div className="overflow-hidden pb-1">
//                   <motion.h2
//                     variants={blockItemLeftToRightVariants}
//                     className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
//                   >
//                     For Tomorrow's Agriculture
//                   </motion.h2>
//                 </div>
//               </>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   </div>
// );

// // Horizontal Cards Track Component (Desktop GSAP Driven)
// interface CardsTrackProps {
//   selectedCategory: string;
//   displayCards: (typeof services)[number][];
//   cardsTrackRef: React.RefObject<HTMLDivElement>;
//   servicesListRef: React.RefObject<HTMLHeadingElement>;
//   activeCategoryLabel?: string;
// }

// const DesktopCardsTrack = ({
//   selectedCategory,
//   displayCards,
//   cardsTrackRef,
//   servicesListRef,
//   activeCategoryLabel,
// }: CardsTrackProps) => {
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
//       <h3
//         ref={servicesListRef}
//         className="font-inter font-semibold text-black text-[24px] sm:text-[30px] md:text-[30px] mb-6 sm:mb-10"
//       >
//         List Of {activeCategoryLabel} Service
//       </h3>

//       <div className="overflow-hidden w-full">
//         <div ref={cardsTrackRef} className="flex gap-6 pb-6 pt-2 w-max will-change-transform">
//           <AnimatePresence mode="wait">
//             {displayCards.map((service, index) => (
//               <motion.div
//                 key={`${selectedCategory}-${service.id}-${index}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{
//                   duration: 0.4,
//                   delay: index * 0.08,
//                 }}
//                 className="flex-shrink-0 w-[320px]"
//               >
//                 <Card className="overflow-hidden rounded-[18px] shadow-xl border-none group bg-white h-full">
//                   <CardContent className="p-0">
//                     <div className="relative h-[260px] overflow-hidden">
//                       <img
//                         src={service.image}
//                         alt={service.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//                       <div className="absolute bottom-0 left-0 w-full p-4">
//                         <h4 className="text-white font-semibold text-sm leading-snug mb-3">
//                           {service.title}
//                         </h4>
//                         <div className="flex gap-2 items-center">
//                           <Button
//                             type="button"
//                             onClick={() => {
//                               window.scrollTo(0, 0);
//                               navigate("/service", { state: { service } });
//                             }}
//                             className="flex-1 h-8 px-2 rounded-full bg-white hover:bg-gray-200 text-black text-xs font-medium cursor-pointer"
//                           >
//                             View
//                           </Button>
//                           <Button
//                             type="button"
//                             onClick={() =>
//                               navigate("/enquiry", { state: { service } })
//                             }
//                             className="flex-1 h-8 px-2 rounded-full bg-[#8dc63f] hover:brightness-110 text-white text-xs font-medium cursor-pointer"
//                           >
//                             Let's Talk
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Mobile Cards List Component
// const MobileCardsList = ({
//   selectedCategory,
//   displayCards,
//   servicesListRef,
//   activeCategoryLabel,
// }: {
//   selectedCategory: string;
//   displayCards: (typeof services)[number][];
//   servicesListRef: React.RefObject<HTMLHeadingElement>;
//   activeCategoryLabel?: string;
// }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full px-4 py-8">
//       <h3
//         ref={servicesListRef}
//         className="font-inter font-semibold text-black text-[22px] mb-6"
//       >
//         List Of {activeCategoryLabel} Service
//       </h3>

//       <div className="flex gap-4 overflow-x-auto pb-6 pt-2 w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
//         <AnimatePresence mode="wait">
//           {displayCards.map((service, index) => (
//             <motion.div
//               key={`${selectedCategory}-${service.id}-${index}`}
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{
//                 duration: 0.35,
//                 delay: index * 0.05,
//               }}
//               className="flex-shrink-0 w-[280px]"
//             >
//               <Card className="overflow-hidden rounded-[18px] shadow-xl border-none group bg-white h-full">
//                 <CardContent className="p-0">
//                   <div className="relative h-[260px] overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//                     <div className="absolute bottom-0 left-0 w-full p-4">
//                       <h4 className="text-white font-semibold text-sm leading-snug mb-3">
//                         {service.title}
//                       </h4>
//                       <div className="flex gap-2 items-center">
//                         <Button
//                           type="button"
//                           onClick={() => {
//                             window.scrollTo(0, 0);
//                             navigate("/service", { state: { service } });
//                           }}
//                           className="flex-1 h-8 px-2 rounded-full bg-white hover:bg-gray-200 text-black text-xs font-medium cursor-pointer"
//                         >
//                           View
//                         </Button>
//                         <Button
//                           type="button"
//                           onClick={() =>
//                             navigate("/enquiry", { state: { service } })
//                           }
//                           className="flex-1 h-8 px-2 rounded-full bg-[#8dc63f] hover:brightness-110 text-white text-xs font-medium cursor-pointer"
//                         >
//                           Let's Talk
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// // =========================================================
// // 5. MOBILE VIEW SECTION (NO HORIZONTAL PINNING)
// // =========================================================
// interface MobileSectionProps {
//   selectedCategory: string;
//   onSelectCategory: (categoryId: string) => void;
//   displayCards: (typeof services)[number][];
//   activeCategoryLabel?: string;
// }

// const MobileServiceSection = ({
//   selectedCategory,
//   onSelectCategory,
//   displayCards,
//   activeCategoryLabel,
// }: MobileSectionProps) => {
//   const categoryContainerRef = useRef<HTMLDivElement>(null);
//   const servicesListRef = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     if (categoryContainerRef.current) {
//       const container = categoryContainerRef.current;
//       container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
//     }
//   }, []);

//   const handleCategoryClick = (categoryId: string) => {
//     onSelectCategory(categoryId);

//     setTimeout(() => {
//       if (servicesListRef.current) {
//         servicesListRef.current.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }, 60);
//   };

//   return (
//     <section id="service-showcase" className="w-full bg-white relative">
//       <BackgroundGlow />
//       <div className="relative z-10">
//         <CategorySelector
//           selectedCategory={selectedCategory}
//           onSelectCategory={handleCategoryClick}
//           containerRef={categoryContainerRef}
//         />
//         <div className="w-full bg-white relative">
//           <VideoPanel selectedCategory={selectedCategory} />
//           <MobileCardsList
//             selectedCategory={selectedCategory}
//             displayCards={displayCards}
//             servicesListRef={servicesListRef}
//             activeCategoryLabel={activeCategoryLabel}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// // =========================================================
// // 6. DESKTOP VIEW SECTION (SINGLE CLICK COMPLETE REDIRECTION)
// // =========================================================
// interface DesktopSectionProps {
//   selectedCategory: string;
//   onSelectCategory: (categoryId: string) => void;
//   displayCards: (typeof services)[number][];
//   activeCategoryLabel?: string;
// }

// const DesktopServiceSection = ({
//   selectedCategory,
//   onSelectCategory,
//   displayCards,
//   activeCategoryLabel,
// }: DesktopSectionProps) => {
//   const rootSectionRef = useRef<HTMLElement>(null);
//   const pinnedViewportSectionRef = useRef<HTMLDivElement>(null);
//   const cardsTrackRef = useRef<HTMLDivElement>(null);
//   const categoryContainerRef = useRef<HTMLDivElement>(null);
//   const servicesListRef = useRef<HTMLHeadingElement>(null);
//   const triggerRef = useRef<ScrollTrigger | null>(null);

//   useLayoutEffect(() => {
//     const pinEl = pinnedViewportSectionRef.current;
//     const cardsTrack = cardsTrackRef.current;
//     const rootEl = rootSectionRef.current;

//     if (!pinEl || !cardsTrack || !rootEl) return;

//     let cancelled = false;

//     // Reset translation to Card 1 on initial load
//     gsap.set(cardsTrack, { x: 0 });

//     const ctx = gsap.context(() => {
//       const getScrollAmount = () => {
//         const trackWidth = cardsTrack.scrollWidth;
//         const viewportWidth = window.innerWidth;
//         const total = trackWidth - viewportWidth + 240;
//         return total > 0 ? -total : 0;
//       };

//       const tween = gsap.to(cardsTrack, {
//         x: () => getScrollAmount(),
//         ease: "none",
//         scrollTrigger: {
//           trigger: pinEl,
//           pin: true,
//           pinSpacing: true,
//           scrub: 1,
//           start: "top top-=210",
//           end: () => `+=${Math.abs(getScrollAmount())}`,
//           invalidateOnRefresh: true,
//           anticipatePin: 1,
//         },
//       });

//       triggerRef.current = tween.scrollTrigger || null;
//     }, rootSectionRef);

//     const initAfterReady = async () => {
//       try {
//         await waitForLayoutReady();
//       } catch {
//         // Fallback
//       }

//       if (!cancelled) {
//         ScrollTrigger.refresh();
//       }
//     };

//     void initAfterReady();

//     const handleWindowLoad = () => ScrollTrigger.refresh();
//     window.addEventListener("load", handleWindowLoad, { once: true });

//     const ro = new ResizeObserver(() => {
//       if (!cancelled) {
//         ScrollTrigger.refresh();
//       }
//     });

//     ro.observe(document.documentElement);
//     ro.observe(pinEl);
//     ro.observe(cardsTrack);

//     return () => {
//       cancelled = true;
//       window.removeEventListener("load", handleWindowLoad);
//       ro.disconnect();

//       if (triggerRef.current) {
//         triggerRef.current.kill(true);
//         triggerRef.current = null;
//       }
//       ctx.revert();
//     };
//   }, [selectedCategory, displayCards]);

//   // Single-Click Smooth Redirection to 7 Cards fully in Desktop
//   const handleCategoryClick = (categoryId: string) => {
//   onSelectCategory(categoryId);

//   // 1. Reset horizontal track translation immediately
//   if (cardsTrackRef.current) {
//     gsap.set(cardsTrackRef.current, { x: 0 });
//   }

//   // 2. Refresh ScrollTrigger calculations and smooth scroll accurately
//   requestAnimationFrame(() => {
//     ScrollTrigger.refresh();

//     setTimeout(() => {
//       // 🔧 ADJUST OFFSET HERE:
//       // Positive number (e.g. 50, 100, 150) moves the scroll FURTHER DOWN.
//       const customOffset = 80;

//       if (triggerRef.current) {
//         // Use GSAP's exact calculated scroll start position for the pinned section
//         const targetScroll = triggerRef.current.start + customOffset;

//         window.scrollTo({
//           top: targetScroll,
//           behavior: "smooth",
//         });
//       } else if (servicesListRef.current) {
//         // Fallback calculation if triggerRef is not yet attached
//         const rect = servicesListRef.current.getBoundingClientRect();
//         const targetY = window.pageYOffset + rect.top + customOffset;

//         window.scrollTo({
//           top: targetY,
//           behavior: "smooth",
//         });
//       }
//     }, 100);
//   });
// };

//   return (
//     <section ref={rootSectionRef} id="service-showcase" className="w-full bg-white relative">
//       <BackgroundGlow />
//       <div className="relative z-10">
//         <CategorySelector
//           selectedCategory={selectedCategory}
//           onSelectCategory={handleCategoryClick}
//           containerRef={categoryContainerRef}
//         />
//         <div ref={pinnedViewportSectionRef} className="w-full bg-white relative">
//           <VideoPanel selectedCategory={selectedCategory} />
//           <DesktopCardsTrack
//             selectedCategory={selectedCategory}
//             displayCards={displayCards}
//             cardsTrackRef={cardsTrackRef}
//             servicesListRef={servicesListRef}
//             activeCategoryLabel={activeCategoryLabel}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// // =========================================================
// // 7. MAIN ORCHESTRATOR COMPONENT
// // =========================================================
// export const ServiceCategorySection = (): JSX.Element => {
//   const [selectedCategory, setSelectedCategory] = useState("Diary Tech Service");
//   const [isMobile, setIsMobile] = useState<boolean | null>(null);

//   useEffect(() => {
//     const checkScreen = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   const filteredServices = useMemo(() => {
//     const activeCategory = categories.find((cat) => cat.id === selectedCategory);
//     if (!activeCategory) return [];

//     return services
//       .filter((service) => service.category === activeCategory.value)
//       .slice(0, 4);
//   }, [selectedCategory]);

//   const activeCategory = categories.find((cat) => cat.id === selectedCategory);

//   const displayCards = useMemo(() => {
//     return [
//       ...filteredServices,
//       ...filteredServices,
//       ...filteredServices,
//     ].slice(0, 7);
//   }, [filteredServices]);

//   if (isMobile === null) {
//     return (
//       <section id="service-showcase" className="w-full bg-white relative min-h-screen">
//         <BackgroundGlow />
//       </section>
//     );
//   }

//   return isMobile ? (
//     <MobileServiceSection
//       selectedCategory={selectedCategory}
//       onSelectCategory={setSelectedCategory}
//       displayCards={displayCards}
//       activeCategoryLabel={activeCategory?.label}
//     />
//   ) : (
//     <DesktopServiceSection
//       selectedCategory={selectedCategory}
//       onSelectCategory={setSelectedCategory}
//       displayCards={displayCards}
//       activeCategoryLabel={activeCategory?.label}
//     />
//   );
// };

// export default ServiceCategorySection;



import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { services } from "../../../../lib/services";
import { useEffect, useState, useMemo, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// =========================================================
// 1. GSAP CONFIGURATION & PLUGINS
// =========================================================
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
  ignoreMobileResize: true,
});

// =========================================================
// 2. CONSTANTS & VARIANTS
// =========================================================
const blockContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const categories = [
  {
    id: "Diary Tech Service",
    label: "Dairy Tech",
    value: "Diary Tech Service",
    categoryImage: "/game-icons_cow.png",
  },
  {
    id: "Goat Farm Service",
    label: "Goat Farm",
    value: "Goat Farm Service",
    categoryImage: "/image_1194-removebg-preview.png",
  },
  {
    id: "Poultry Farm Service",
    label: "Poultry Farm",
    value: "Poultry Farm Service",
    categoryImage: "/cbi_chicken.png",
  },
];

// =========================================================
// 3. ASSET READINESS HELPER
// =========================================================
const waitForLayoutReady = async (): Promise<void> => {
  const waitForImage = (img: HTMLImageElement): Promise<void> => {
    if (img.complete) {
      return typeof img.decode === "function"
        ? img.decode().catch(() => undefined)
        : Promise.resolve();
    }
    if (img.loading === "lazy") {
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      const done = () => {
        img.removeEventListener("load", done);
        img.removeEventListener("error", done);
        resolve();
      };
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  };

  const waitForVideo = (video: HTMLVideoElement): Promise<void> => {
    if (video.readyState >= 1) {
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      const done = () => {
        video.removeEventListener("loadedmetadata", done);
        video.removeEventListener("error", done);
        resolve();
      };
      video.addEventListener("loadedmetadata", done, { once: true });
      video.addEventListener("error", done, { once: true });
    });
  };

  const images = Array.from(document.images);
  const videos = Array.from(document.querySelectorAll("video"));

  const assetReady = Promise.all([
    document.fonts?.ready ?? Promise.resolve(),
    ...images.map(waitForImage),
    ...videos.map(waitForVideo),
  ]);

  await Promise.race([
    assetReady,
    new Promise<void>((resolve) => {
      window.setTimeout(resolve, 3000);
    }),
  ]);

  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
};

// =========================================================
// 4. SHARED UI SUB-COMPONENTS
// =========================================================

// Background Glow
const BackgroundGlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-[#8dc63f]/10 blur-[80px]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
          y: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: 300 + i * 100,
          height: 300 + i * 100,
          top: `${20 + i * 20}%`,
          left: i === 0 ? "-10%" : i === 1 ? "80%" : "40%",
        }}
      />
    ))}
  </div>
);

// Header & Category Button Row
interface CategorySelectorProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  containerRef: React.RefObject<HTMLDivElement>;
  onTitleClick?: () => void;
}

const CategorySelector = ({
  selectedCategory,
  onSelectCategory,
  containerRef,
  onTitleClick,
}: CategorySelectorProps) => (
  <div className="text-center px-4 sm:px-6 max-w-[1400px] mx-auto pt-8 sm:pt-12 md:pt-16">
    <p
      onClick={onTitleClick}
      className="font-inter font-bold text-[#7CB142] text-xs sm:text-sm md:text-xl mb-2 cursor-pointer select-none"
    >
      Service Category
    </p>

    <h2
      onClick={onTitleClick}
      className="font-inter font-semibold text-black text-[28px] sm:text-[36px] md:text-[40px] leading-tight mb-10 cursor-pointer select-none"
    >
      Service That We Provide
    </h2>

    <div
      ref={containerRef}
      className="
        flex
        justify-center
        items-center
        gap-3
        sm:gap-4
        overflow-x-auto
        sm:overflow-visible
        bg-white
        rounded-[24px]
        sm:rounded-[30px]
        px-4
        sm:px-6
        py-4
        sm:py-5
        shadow-xl
        relative
        z-20
        max-w-[950px]
        mx-auto
        w-full
        [scrollbar-width:none]
        [-ms-overflow-style:none]
        [&::-webkit-scrollbar]:hidden
      "
    >
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`
              flex-1
              sm:flex-initial
              min-w-[80px]
              sm:min-w-0
              flex
              items-center
              justify-center
              gap-2
              px-5
              sm:px-8
              md:px-10
              py-3.3
              sm:py-3
              rounded-xl
              border
              font-[Poppins]
              font-medium
              transition-all
              duration-300
              text-sm
              sm:text-base
              cursor-pointer
              ${
                isSelected
                  ? "bg-[#7CB142] border-[#7CB142] text-white shadow-md shadow-[#7CB142]/20 font-semibold"
                  : "bg-white border-gray-300 text-black hover:bg-gray-50"
              }
            `}
          >
            <img
              src={cat.categoryImage}
              alt={cat.label}
              className={`w-6 h-6 sm:w-5 sm:h-5 object-contain shrink-0 transition-transform duration-200 ${
                isSelected ? "brightness-0 invert" : ""
              }`}
            />
            <span className="hidden sm:inline">
              {cat.label.trim().endsWith("Service")
                ? cat.label
                : `${cat.label.trim()} Service`}
            </span>
          </button>
        );
      })}
    </div>
  </div>
);

// Dynamic Video Panel with Canva Text Reveal
interface VideoPanelProps {
  selectedCategory: string;
}

const VideoPanel = ({ selectedCategory }: VideoPanelProps) => (
  <div className="w-full -mt-[50px] relative z-10">
    <div className="relative w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden shadow-2xl rounded-b-[30px] bg-black">
      <video
        key={selectedCategory}
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={() => ScrollTrigger.refresh()}
        className="w-full h-full object-cover"
      >
        <source
          src={
            selectedCategory === "Diary Tech Service"
              ? "/COW-SC-COMPRESSED.mp4"
              : selectedCategory === "Goat Farm Service"
              ? "/GOAT-SC-COMPRESSED.mp4"
              : selectedCategory === "Poultry Farm Service"
              ? "/cow-service.mp4"
              : "/waste-management.mp4"
          }
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 pointer-events-none" />

      {/* CANVA BLOCK REVEAL ANIMATED OVERLAY TEXT */}
      <div className="absolute bottom-10 left-6 sm:bottom-20 sm:left-12 md:bottom-24 z-20 max-w-[650px] text-left pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={blockContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {selectedCategory === "Diary Tech Service" ? (
              <>
                <div className="overflow-hidden pb-1">
                  <motion.h2
                    variants={blockItemLeftToRightVariants}
                    className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
                  >
                    Smart Agricultural Solutions
                  </motion.h2>
                </div>
                <div className="overflow-hidden pb-1">
                  <motion.h2
                    variants={blockItemLeftToRightVariants}
                    className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
                  >
                    For Modern Livestock Farms
                  </motion.h2>
                </div>
              </>
            ) : selectedCategory === "Goat Farm Service" ? (
              <>
                <div className="overflow-hidden pb-1">
                  <motion.h2
                    variants={blockItemLeftToRightVariants}
                    className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
                  >
                    Advanced Nutrition & Feed Management
                  </motion.h2>
                </div>
                <div className="overflow-hidden pb-1">
                  <motion.h2
                    variants={blockItemLeftToRightVariants}
                    className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
                  >
                    For Healthy Goat Breeds
                  </motion.h2>
                </div>
              </>
            ) : selectedCategory === "Poultry Farm Service" ? (
              <>
                <div className="overflow-hidden pb-1">
                  <motion.h2
                    variants={blockItemLeftToRightVariants}
                    className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
                  >
                    Automated Poultry & Hatchery Tech
                  </motion.h2>
                </div>
                <div className="overflow-hidden pb-1">
                  <motion.h2
                    variants={blockItemLeftToRightVariants}
                    className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
                  >
                    For High Yield Production
                  </motion.h2>
                </div>
              </>
            ) : (
              <>
                <div className="overflow-hidden pb-1">
                  <motion.h2
                    variants={blockItemLeftToRightVariants}
                    className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
                  >
                    Sustainable Farm Innovations
                  </motion.h2>
                </div>
                <div className="overflow-hidden pb-1">
                  <motion.h2
                    variants={blockItemLeftToRightVariants}
                    className="text-white font-normal text-[22px] sm:text-[32px] md:text-[38px] leading-[120%] tracking-tight drop-shadow-lg"
                  >
                    For Tomorrow's Agriculture
                  </motion.h2>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </div>
);

// Horizontal Cards Track Component (Desktop GSAP Driven)
interface CardsTrackProps {
  selectedCategory: string;
  displayCards: (typeof services)[number][];
  cardsTrackRef: React.RefObject<HTMLDivElement>;
  servicesListRef: React.RefObject<HTMLHeadingElement>;
  activeCategoryLabel?: string;
  onTitleClick?: () => void;
}

const DesktopCardsTrack = ({
  selectedCategory,
  displayCards,
  cardsTrackRef,
  servicesListRef,
  activeCategoryLabel,
  onTitleClick,
}: CardsTrackProps) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10">
      <h3
        ref={servicesListRef}
        onClick={onTitleClick}
        className="font-inter font-semibold text-black text-[24px] sm:text-[30px] md:text-[30px] mb-6 sm:mb-8 cursor-pointer select-none"
      >
        List Of {activeCategoryLabel} Service
      </h3>

      <div className="overflow-hidden w-full">
        <div ref={cardsTrackRef} className="flex gap-6 pb-6 pt-2 w-max will-change-transform">
          <AnimatePresence mode="wait">
            {displayCards.map((service, index) => (
              <motion.div
                key={`${selectedCategory}-${service.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="flex-shrink-0 w-[320px]"
              >
                <Card className="overflow-hidden rounded-[18px] shadow-xl border-none group bg-white h-full">
                  <CardContent className="p-0">
                    <div className="relative h-[260px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <h4 className="text-white font-semibold text-sm leading-snug mb-3">
                          {service.title}
                        </h4>
                        <div className="flex gap-2 items-center">
                          <Button
                            type="button"
                            onClick={() => {
                              window.scrollTo(0, 0);
                              navigate("/service", { state: { service } });
                            }}
                            className="flex-1 h-8 px-2 rounded-full bg-white hover:bg-gray-200 text-black text-xs font-medium cursor-pointer"
                          >
                            View
                          </Button>
                          <Button
                            type="button"
                            onClick={() =>
                              navigate("/enquiry", { state: { service } })
                            }
                            className="flex-1 h-8 px-2 rounded-full bg-[#8dc63f] hover:brightness-110 text-white text-xs font-medium cursor-pointer"
                          >
                            Let's Talk
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Mobile Cards List Component
const MobileCardsList = ({
  selectedCategory,
  displayCards,
  servicesListRef,
  activeCategoryLabel,
  onTitleClick,
}: {
  selectedCategory: string;
  displayCards: (typeof services)[number][];
  servicesListRef: React.RefObject<HTMLHeadingElement>;
  activeCategoryLabel?: string;
  onTitleClick?: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-8">
      <h3
        ref={servicesListRef}
        onClick={onTitleClick}
        className="font-inter font-semibold text-black text-[22px] mb-6 cursor-pointer select-none"
      >
        List Of {activeCategoryLabel} Service
      </h3>

      <div className="flex gap-4 overflow-x-auto pb-6 pt-2 w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <AnimatePresence mode="wait">
          {displayCards.map((service, index) => (
            <motion.div
              key={`${selectedCategory}-${service.id}-${index}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              className="flex-shrink-0 w-[280px]"
            >
              <Card className="overflow-hidden rounded-[18px] shadow-xl border-none group bg-white h-full">
                <CardContent className="p-0">
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <h4 className="text-white font-semibold text-sm leading-snug mb-3">
                        {service.title}
                      </h4>
                      <div className="flex gap-2 items-center">
                        <Button
                          type="button"
                          onClick={() => {
                            window.scrollTo(0, 0);
                            navigate("/service", { state: { service } });
                          }}
                          className="flex-1 h-8 px-2 rounded-full bg-white hover:bg-gray-200 text-black text-xs font-medium cursor-pointer"
                        >
                          View
                        </Button>
                        <Button
                          type="button"
                          onClick={() =>
                            navigate("/enquiry", { state: { service } })
                          }
                          className="flex-1 h-8 px-2 rounded-full bg-[#8dc63f] hover:brightness-110 text-white text-xs font-medium cursor-pointer"
                        >
                          Let's Talk
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// =========================================================
// 5. MOBILE VIEW SECTION
// =========================================================
interface MobileSectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  displayCards: (typeof services)[number][];
  activeCategoryLabel?: string;
}

const MobileServiceSection = ({
  selectedCategory,
  onSelectCategory,
  displayCards,
  activeCategoryLabel,
}: MobileSectionProps) => {
  const categoryContainerRef = useRef<HTMLDivElement>(null);
  const servicesListRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  const scrollToCards = () => {
    if (servicesListRef.current) {
      const topPos =
        servicesListRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPos - 75,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    setTimeout(scrollToCards, 60);
  };

  return (
    <section id="service-showcase" className="w-full bg-white relative">
      <BackgroundGlow />
      <div className="relative z-10">
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryClick}
          containerRef={categoryContainerRef}
          onTitleClick={scrollToCards}
        />
        <div className="w-full bg-white relative">
          <VideoPanel selectedCategory={selectedCategory} />
          <MobileCardsList
            selectedCategory={selectedCategory}
            displayCards={displayCards}
            servicesListRef={servicesListRef}
            activeCategoryLabel={activeCategoryLabel}
            onTitleClick={scrollToCards}
          />
        </div>
      </div>
    </section>
  );
};

// =========================================================
// 6. DESKTOP VIEW SECTION (SINGLE CLICK TO 7 CARDS PINNING POINT)
// =========================================================
// =========================================================
// 6. DESKTOP VIEW SECTION (FIXED FULL CARDS VISIBILITY REDIRECTION)
// =========================================================
interface DesktopSectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  displayCards: (typeof services)[number][];
  activeCategoryLabel?: string;
}

const DesktopServiceSection = ({
  selectedCategory,
  onSelectCategory,
  displayCards,
  activeCategoryLabel,
}: DesktopSectionProps) => {
  const rootSectionRef = useRef<HTMLElement>(null);
  const pinnedViewportSectionRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const categoryContainerRef = useRef<HTMLDivElement>(null);
  const servicesListRef = useRef<HTMLHeadingElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useLayoutEffect(() => {
    const pinEl = pinnedViewportSectionRef.current;
    const cardsTrack = cardsTrackRef.current;
    const rootEl = rootSectionRef.current;

    if (!pinEl || !cardsTrack || !rootEl) return;

    let cancelled = false;
    gsap.set(cardsTrack, { x: 0 });

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const trackWidth = cardsTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        const total = trackWidth - viewportWidth + 240;
        return total > 0 ? -total : 0;
      };

      const tween = gsap.to(cardsTrack, {
        x: () => getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: pinEl,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top-=210",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      triggerRef.current = tween.scrollTrigger || null;
    }, rootSectionRef);

    const initAfterReady = async () => {
      try {
        await waitForLayoutReady();
      } catch {
        // Fallback
      }

      if (!cancelled) {
        ScrollTrigger.refresh();
      }
    };

    void initAfterReady();

    const handleWindowLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleWindowLoad, { once: true });

    const ro = new ResizeObserver(() => {
      if (!cancelled) {
        ScrollTrigger.refresh();
      }
    });

    ro.observe(document.documentElement);
    ro.observe(pinEl);
    ro.observe(cardsTrack);

    return () => {
      cancelled = true;
      window.removeEventListener("load", handleWindowLoad);
      ro.disconnect();

      if (triggerRef.current) {
        triggerRef.current.kill(true);
        triggerRef.current = null;
      }
      ctx.revert();
    };
  }, [selectedCategory, displayCards]);

  // ✅ Scroll directly so the Heading & Cards are positioned inside the viewport
  const scrollToCardsSection = () => {
    if (cardsTrackRef.current) {
      gsap.set(cardsTrackRef.current, { x: 0 });
    }

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();

      setTimeout(() => {
        if (servicesListRef.current) {
          const rect = servicesListRef.current.getBoundingClientRect();
          // Navbar height + slight breathing room (~80px)
          const targetY = window.pageYOffset + rect.top  +150;

          window.scrollTo({
            top: targetY,
            behavior: "smooth",
          });
        } else if (triggerRef.current) {
          window.scrollTo({
            top: triggerRef.current.start,
            behavior: "smooth",
          });
        }
      }, 50);
    });
  };

  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    scrollToCardsSection();
  };

  return (
    <section ref={rootSectionRef} id="service-showcase" className="w-full bg-white relative">
      <BackgroundGlow />
      <div className="relative z-10">
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryClick}
          containerRef={categoryContainerRef}
          onTitleClick={scrollToCardsSection}
        />
        <div ref={pinnedViewportSectionRef} className="w-full bg-white relative">
          <VideoPanel selectedCategory={selectedCategory} />
          <DesktopCardsTrack
            selectedCategory={selectedCategory}
            displayCards={displayCards}
            cardsTrackRef={cardsTrackRef}
            servicesListRef={servicesListRef}
            activeCategoryLabel={activeCategoryLabel}
            onTitleClick={scrollToCardsSection}
          />
        </div>
      </div>
    </section>
  );
};

// =========================================================
// 7. MAIN ORCHESTRATOR COMPONENT
// =========================================================
export const ServiceCategorySection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("Diary Tech Service");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const filteredServices = useMemo(() => {
    const activeCategory = categories.find((cat) => cat.id === selectedCategory);
    if (!activeCategory) return [];

    return services
      .filter((service) => service.category === activeCategory.value)
      .slice(0, 4);
  }, [selectedCategory]);

  const activeCategory = categories.find((cat) => cat.id === selectedCategory);

  const displayCards = useMemo(() => {
    return [
      ...filteredServices,
      ...filteredServices,
      ...filteredServices,
    ].slice(0, 7);
  }, [filteredServices]);

  if (isMobile === null) {
    return (
      <section id="service-showcase" className="w-full bg-white relative min-h-screen">
        <BackgroundGlow />
      </section>
    );
  }

  return isMobile ? (
    <MobileServiceSection
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
      displayCards={displayCards}
      activeCategoryLabel={activeCategory?.label}
    />
  ) : (
    <DesktopServiceSection
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
      displayCards={displayCards}
      activeCategoryLabel={activeCategory?.label}
    />
  );
};

export default ServiceCategorySection;