export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  subtitle?: string;
  keyFeatures?: string[];
  specifications?: string[];
  applications?: string[];
  title?: string;
  imageClasses?: string;
  titleClasses?: string;
  priceExtra?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "2 Bucket Milking Machine",
    subtitle: "Belt Drive Model | Dual Bucket Capacity",
    category: "Milking Equipment",
    price: "Contact for Best Price",
    image: "2bucketmilkingmachine-removebg-preview.png",
    description: "High-efficiency dual-bucket system for fast, hygienic milking in medium to large dairies. Quiet belt-driven motor ensures stable vacuum flow and cow comfort.",
    keyFeatures: [
      "Dual 25L Stainless Steel Buckets for increased volume.",
      "High Suction Capacity – 450 LPM for faster throughput.",
      "Belt Drive Motor for stable and quiet operation.",
      "Heavy-Duty Trolley with wheels for easy farm mobility.",
      "Gentle Teat Cup Liners engineered to prevent udder injury."
    ],
    specifications: [
      "Power: 1.5 HP Single Phase Motor.",
      "Bucket Material: Grade 304 Stainless Steel.",
      "Pulsation Rate: 60/40 adjustable.",
      "Operating Pressure: 45–50 kPa standard.",
      "Vacuum Pump: Oil-lubricated rotary vane pump."
    ],
    applications: [
      "Simultaneous milking of two cows to save time.",
      "Ideal for commercial dairy farms with 10+ cows.",
      "Suitable for both cows and buffaloes with proper liner adjustment.",
      "Reduces manual labor requirements during peak milking hours.",
      "Maintains milk hygiene during direct bucket collection."
    ]
  },
  {
    id: 2,
    name: "Chaff Cutter",
    subtitle: "Heavy Duty | High-Speed Fodder Processor",
    category: "Fodder Processing",
    price: "Contact for Best Price",
    image: "ChaffCutter.png",
    description: "High-speed cutter for green and dry fodder to improve livestock digestion and feed intake. Reduces feed wastage by up to 30% with hardened steel blades.",
    keyFeatures: [
      "Hardened Steel Blades for long-lasting sharpness.",
      "Adjustable Cutting Length settings to suit different livestock needs.",
      "Safety Gearbox to prevent motor overload.",
      "Heavy-Duty Cast Iron Frame for vibration-free operation.",
      "Wide Feed Hopper for quick and effortless material loading."
    ],
    specifications: [
      "Capacity: 800–1000 kg/hour processing rate.",
      "Blade Count: 3 High-Carbon Steel blades.",
      "Motor: 2 HP Electric Motor compatible.",
      "Flywheel Diameter: 450 mm balanced wheel.",
      "Chop Length: Adjustable between 10 mm and 25 mm."
    ],
    applications: [
      "Processing green and dry grass, corn stalks, and straw.",
      "Preparing uniform feed for cattle, goats, and sheep.",
      "Enhancing feed intake by making fodder easier to chew.",
      "Minimizing overall fodder waste during daily livestock feeding.",
      "Creating optimal cut sizes for silage preparation."
    ]
  },
  {
    id: 3,
    name: "Cow Lifter",
    subtitle: "Reinforced Steel | Emergency Veterinary Tool",
    category: "Veterinary Tools",
    price: "Contact for Best Price",
    image: "CowLifter.png",
    description: "Emergency hip-support lifter providing safe assistance for downer or injured cattle. Features padded clamps to prevent nerve damage and trauma.",
    keyFeatures: [
      "Padded Hip Clamps to prevent bruising and protect the animal.",
      "Galvanized Steel Frame for maximum rust resistance.",
      "Simple Crank Mechanism for easy one-person operation.",
      "Quick-Release Locking System for fast removal post-treatment.",
      "Heavy-Duty Ring Attachment for hoist or loader hooks."
    ],
    specifications: [
      "Load Capacity: Up to 900 kg.",
      "Adjustable Width: 40 cm to 65 cm to accommodate various sizes.",
      "Weight: 12 kg for easy transport around the farm.",
      "Clamp Cushioning: High-density rubber sleeve inserts.",
      "Material Grade: Heavy-gauge tubular steel."
    ],
    applications: [
      "Lifting cows unable to stand due to milk fever or injury.",
      "Supporting animals during veterinary examinations.",
      "Assisting downer cows post-calving during recovery.",
      "Preventing muscle necrosis by helping cows stand periodically.",
      "Safely moving immobilized cattle within farm enclosures."
    ]
  },
  {
    id: 4,
    name: "Grass Cutter",
    subtitle: "Precision Blade | Land Management Series",
    category: "Land Management",
    price: "Contact for Best Price",
    image: "GrassCutter.png",
    description: "Ergonomic clearing tool for dense brush, weeds, and pasture grass. Features low-vibration technology and anti-slip handles for long hours.",
    keyFeatures: [
      "High-Torque Engine for clearing dense brush and weeds.",
      "Ergonomic Handlebars for better control and operator comfort.",
      "Low Vibration Technology to protect the user during long hours.",
      "Dual Cutting Head setup supporting both metal blades and nylon cord.",
      "Easy-Start Pull Cord Mechanism for quick ignition."
    ],
    specifications: [
      "Engine Type: 4-Stroke Air Cooled engine.",
      "Fuel Tank: 1.2 Liter capacity.",
      "Cutting Width: 255 mm (Blade) / 400 mm (Nylon line).",
      "Displacement: 43 cc engine size.",
      "Shaft Type: Straight aluminum shaft with heavy-duty drive."
    ],
    applications: [
      "Clearing overgrown grass in grazing fields.",
      "Trimming edges around farm fences, sheds, and walkways.",
      "Managing weeds along irrigation ditches and field boundaries.",
      "Harvesting wild fodder for livestock feeding.",
      "Maintaining pasture lands for optimal grass growth."
    ]
  },
  {
    id: 5,
    name: "Milk Cream Separator",
    subtitle: "Electric Driven | High-Efficiency Centrifuge",
    category: "Dairy Processing",
    price: "Contact for Best Price",
    image: "/MilkCreamSeparato.png",
    description: "High-efficiency electric centrifugal machine that quickly separates cream from raw whole milk. Features food-grade stainless steel parts for easy cleaning.",
    keyFeatures: [
      "Stainless Steel Bowl and Disks for food-grade hygiene and easy cleaning.",
      "Adjustable Fat Content settings for various dairy products.",
      "Anti-Slip Rubber Feet for stable tabletop operation.",
      "Continuous Discharge System for simultaneous cream and skimmed milk output.",
      "Overheat Protection Mechanism for safe motor operation."
    ],
    specifications: [
      "Output: 100-120 Liters per hour.",
      "Milk Receiver Capacity: 12 Liters.",
      "Bowl Speed: 10,000 RPM.",
      "Number of Disks: 11–13 conical disks inside bowl.",
      "Power Rating: 60W energy-efficient motor."
    ],
    applications: [
      "Separating cream for butter, ghee, and cream production.",
      "Producing skimmed milk for specialized dietary needs or further processing.",
      "Processing raw milk at small-scale dairy units.",
      "Standardizing milk fat ratios for commercial packaging.",
      "Improving profitability through value-added dairy products."
    ]
  },
  {
    id: 6,
    name: "Digital Weighing Scale",
    subtitle: "High Precision | Industrial Grade Platform",
    category: "Measurement Tools",
    price: "Contact for Best Price",
    image: "DigitalWeighingScale.png",
    description: "Precision digital platform scale built for rugged farm environments. Features a bright LED display and rust-resistant stainless steel top plate.",
    keyFeatures: [
      "Bright LED Display for visibility in dark farm sheds.",
      "Rust-Resistant Stainless Steel Platform for long-term durability.",
      "Rechargeable Battery Backup for cordless portability.",
      "Tare and Zero Functionality for quick container weight subtraction.",
      "Heavy-Duty Load Cells for accurate weight detection under off-center loads."
    ],
    specifications: [
      "Max Weight: 200 kg.",
      "Precision: 20g Accuracy.",
      "Platform Size: 500 mm x 500 mm.",
      "Battery Life: Up to 40 hours continuous use.",
      "Display: High-contrast red LED numeric screen."
    ],
    applications: [
      "Weighing milk cans for daily production records.",
      "Measuring feed bags, fertilizer, or small livestock accurately.",
      "Monitoring feed consumption relative to milk yield.",
      "Verifying produce weight before selling to market buyers.",
      "Tracking calf growth rates over designated periods."
    ]
  },
  {
    id: 7,
    name: "Cow Dung Scrapper",
    subtitle: "Automated Cleaning | Farm Hygiene Solution",
    category: "Farm Hygiene",
    price: "Contact for Best Price",
    image: "CowDungScrapper.png",
    description: "Automated cleaning system that continuously removes waste from barn gutters. Improves barn hygiene, reduces manual labor, and protects hoof health.",
    keyFeatures: [
      "Corrosion-Resistant Scraper Blade for long-life durability.",
      "Low Maintenance Design with simple, reliable drive mechanics.",
      "Safe, Slow-Moving Operation to prevent injury to livestock.",
      "Programmable Timer for scheduled automated cleaning passes.",
      "Foldable Wings to accommodate varying gutter widths."
    ],
    specifications: [
      "Drive Power: 0.75 kW Motor.",
      "Chain Material: High-Strength Alloy Steel.",
      "Control: Automatic Timer or Manual override.",
      "Scraping Speed: 2.5 meters per minute.",
      "Gutter Width Compatibility: 1.2 m to 3.0 m."
    ],
    applications: [
      "Maintaining hygiene in free-stall barns and sheds.",
      "Reducing manual labor costs and improving overall animal health.",
      "Preventing hoof infections caused by wet, dirty barn floors.",
      "Channeling waste directly into manure collection pits.",
      "Keeping livestock clean to improve milk quality and farm sanitation."
    ]
  },
  {
    id: 8,
    name: "Motor",
    subtitle: "Heavy-Duty Induction | Multi-Purpose Power",
    category: "Power Units",
    price: "Contact for Best Price",
    image: "/motor-1.png",
    description: "Heavy-duty AC induction motor built for continuous agricultural operations. Ideal drive power for milking pumps, chaff cutters, and water systems.",
    keyFeatures: [
      "Built-In Thermal Protection to prevent overheating.",
      "Rust-Resistant Durable Body for long-term outdoor use.",
      "Low Maintenance & Long Service Life for cost-effective operation.",
      "High Starting Torque ideal for heavy agricultural machinery.",
      "Dual Voltage Compatibility supporting varied power hookups."
    ],
    specifications: [
      "Type: Single Phase AC Induction.",
      "Speed: 1440 RPM.",
      "Insulation: Class F high-temperature resistance.",
      "Enclosure: TEFC (Totally Enclosed Fan Cooled).",
      "Power Rating: 2.0 HP output."
    ],
    applications: [
      "Powering vacuum pumps for milking machines.",
      "Driving chaff cutters, feed grinders, and water pumps.",
      "Operating farm ventilation systems and manure agitators.",
      "Running farm utility elevators and conveyors.",
      "Replacing damaged drive units across varied agricultural gear."
    ]
  },
  {
    id: 9,
    name: "Milk Tank",
    subtitle: "Cooling & Storage | Grade-A Stainless Steel",
    category: "Storage & Cooling",
    price: "Contact for Best Price",
    image: "MilkTanks.png",
    description: "Commercial insulated cooling tank that rapidly chills raw milk down to 4°C. Preserves fresh milk quality and prevents bacterial growth.",
    keyFeatures: [
      "Double-Walled Insulation for superior temperature control.",
      "Polished Food-Grade Stainless Steel (SS304/SS316).",
      "Easy-Drain Outlet Valve for efficient milk transfer.",
      "Automated Agitator Paddle for consistent milk temperature distribution.",
      "Digital Temperature Controller with real-time display monitor."
    ],
    specifications: [
      "Capacity: Available in 500L, 1000L, and 2000L.",
      "Material: SS316 Inner Tank / SS304 Outer Shell.",
      "Cooling Rate: Drops temperature from 35°C to 4°C in under 3 hours.",
      "Insulation: High-density polyurethane foam (PUF).",
      "Refrigerant: Eco-friendly R404a gas system."
    ],
    applications: [
      "Storing milk at collection centers or large farms.",
      "Maintaining milk quality during summer months or before transport.",
      "Chilling raw milk rapidly to inhibit bacterial multiplication.",
      "Holding batch volumes prior to processing butter, cheese, or pasteurization.",
      "Ensuring regulatory temperature compliance for commercial milk sales."
    ]
  }
];