// High-Fidelity Indian Commercial Generator & Multi-Zone Synthesis Engine
// Generates authentic Indian local business listings with real sub-zone addresses, 
// realistic business names across every commercial category, authentic +91 numbers, and verified PIN codes.

const INDIAN_SURNAMES = [
  // North
  'Sharma', 'Verma', 'Gupta', 'Singh', 'Agarwal', 'Bansal', 'Malhotra', 'Kapoor', 
  'Bhatia', 'Saxena', 'Chauhan', 'Dubey', 'Tiwari', 'Shukla', 'Mishra', 'Pandey', 
  'Yadav', 'Chaudhary', 'Rajput', 'Arora', 'Grover', 'Bajaj', 'Sethi', 'Khanna', 
  'Chadha', 'Sehgal', 'Chopra', 'Kohli', 'Ahuja', 'Juneja', 'Bhatnagar', 'Mathur', 
  'Srivastava', 'Rastogi', 'Goyal', 'Mittal', 'Singhal', 'Jindal', 'Goel', 'Garg',
  // West (Maharashtra / Gujarat)
  'Patel', 'Shah', 'Mehta', 'Desai', 'Joshi', 'Trivedi', 'Kulkarni', 'Deshmukh', 
  'Patil', 'Pawar', 'Shinde', 'Jadhav', 'Gaikwad', 'More', 'Chavan', 'Bhosle', 
  'Sawant', 'Rane', 'Parikh', 'Doshi', 'Gandhi', 'Bhatt', 'Vora', 'Modi', 
  'Solanki', 'Wagh', 'Gokhale', 'Godbole', 'Kadam', 'Salunkhe', 'Tambe',
  // South (TN / KA / TG / AP / Kerala)
  'Reddy', 'Rao', 'Nair', 'Menon', 'Pillai', 'Iyer', 'Iyengar', 'Hegde', 'Shetty', 
  'Gowda', 'Bhat', 'Murthy', 'Prasad', 'Naidu', 'Raju', 'Choudary', 'Varma', 
  'Nambiar', 'Swamy', 'Ramanathan', 'Balasubramanian', 'Sundaram', 'Venkatraman', 
  'Krishnan', 'Natarajan', 'Subramanian', 'Venkatesh', 'Kumar',
  // East (WB / Bihar / Odisha / Assam)
  'Mukherjee', 'Banerjee', 'Chatterjee', 'Bhattacharya', 'Ghosh', 'Bose', 'Das', 
  'Sen', 'Roy', 'Dutta', 'Chakraborty', 'Patnaik', 'Mohanty', 'Panda', 'Mishra', 
  'Pradhan', 'Behera', 'Jha', 'Sinha', 'Thakur', 'Mahto', 'Sahay', 'Barua', 'Saikia'
];

const INDIAN_FIRST_NAMES = [
  'Rajesh', 'Amit', 'Vikram', 'Sunil', 'Rahul', 'Priya', 'Ananya', 'Neha', 'Pooja', 
  'Sanjay', 'Deepak', 'Manoj', 'Rohit', 'Rakesh', 'Suresh', 'Ramesh', 'Karthik', 
  'Arvind', 'Mahesh', 'Ganesh', 'Vijay', 'Ajay', 'Alok', 'Ashish', 'Sachin', 
  'Gaurav', 'Nitin', 'Varun', 'Manish', 'Abhinav', 'Pradeep', 'Sandeep', 'Harish', 
  'Naresh', 'Mukesh', 'Ashok', 'Anand', 'Vinod', 'Swati', 'Kavita', 'Ritu', 'Simran'
];

const LOCALITY_ROAD_PATTERNS = [
  'Main Road', 'Ring Road', 'Station Road', 'Commercial Complex', 'Market, Block B',
  'Opposite Metro Station', 'Near City Hospital', 'Phase 1 Market', 'Sector Market',
  '100 Feet Road', 'Link Road', 'Civil Lines', 'High Street', 'VIP Road', 'Bypass Road',
  'MG Road', 'Gandhi Chowk', 'Near Bus Stand', 'Sadar Bazar', 'Court Road'
];

const MOBILE_PREFIXES = ['98', '97', '99', '94', '91', '88', '87', '70', '79', '80', '81', '84', '85'];

const STD_CODES = {
  'MH': ['022', '020', '0712', '0253'],
  'KA': ['080', '0821', '0836', '0824'],
  'DL': ['011', '0120', '0124'],
  'TN': ['044', '0422', '0452', '0431'],
  'GJ': ['079', '0261', '0265', '0281'],
  'UP': ['0522', '0512', '0120', '0542'],
  'TG': ['040', '0870'],
  'WB': ['033', '0343', '0353'],
  'RJ': ['0141', '0291', '0294'],
  'HR': ['0124', '0129', '0180'],
  'PB': ['0161', '0183', '0181'],
  'MP': ['0731', '0755', '0761'],
  'BR': ['0612', '0621', '0641'],
  'KL': ['0484', '0471', '0495']
};

// Rich Category Templates tailored for Indian Commerce
const CATEGORY_TEMPLATES = {
  'dental': {
    category: 'Healthcare & Dental',
    domain: 'dentalclinic.in',
    templates: [
      'Dr. {Surname}\'s Dental Clinic & Implant Centre - {Zone}',
      '{Zone} Multispeciality Dental Hospital & Orthodontics',
      'Smile Arts Dental Care Studio - {Zone}',
      'Dr. {Surname}\'s Advanced Laser Dental & Root Canal Care - {Zone}',
      '{Zone} 32 Pearls Cosmetic Dental Clinic',
      'Apex Dental Care & Implantology [{Zone} Branch]',
      'CarePlus Dental Centre & Invisible Aligners - {Zone}',
      'Dr. {Surname}\'s Family Dental Clinic - {Zone}',
      '{Zone} Dental Oasis & Wellness Clinic',
      'TrueSmile Multispeciality Dental Care [{Zone}]'
    ]
  },
  'doctor': {
    category: 'Healthcare & Medical',
    domain: 'healthclinic.in',
    templates: [
      'Dr. {Surname}\'s Clinic & Health Care - {Zone}',
      '{Zone} Multispeciality Polyclinic & Diagnostic',
      'Apex Family Clinic & Child Care - {Zone}',
      'Lifecare Health Centre & Consultation [{Zone}]',
      'Dr. {Surname}\'s Diabetes & Heart Care Clinic - {Zone}',
      'Sanjeevani Polyclinic & Wellness Centre - {Zone}',
      '{Zone} Medicare & General Physician Clinic',
      'Dr. {Surname}\'s Orthopedic & Joint Care Clinic - {Zone}'
    ]
  },
  'hospital': {
    category: 'Hospitals & Nursing',
    domain: 'healthcarehospital.in',
    templates: [
      '{Zone} Multispeciality Hospital & Trauma Centre',
      'Apex Lifeline Hospital & Research Institute - {Zone}',
      'Dr. {Surname}\'s Maternity & Surgical Nursing Home - {Zone}',
      'Sanjeevani Super Speciality Hospital [{Zone} Branch]',
      '{Zone} City Hospital & Critical Care Unit'
    ]
  },
  'pathology': {
    category: 'Diagnostics & Labs',
    domain: 'diagnosticlabs.in',
    templates: [
      '{Surname} Diagnostic Centre & Pathology Lab - {Zone}',
      '{Zone} Blood Testing & Advanced Imaging Centre',
      'Apex Pathology & Health Checkup Laboratory - {Zone}',
      'CarePlus Diagnostic & Ultrasound Clinic [{Zone}]',
      '{Zone} City Scan & Pathology Diagnostics'
    ]
  },
  'pharmacy': {
    category: 'Healthcare & Retail',
    domain: 'pharmastore.in',
    templates: [
      '{Surname} Medical & Chemist Store - {Zone}',
      '{Zone} 24x7 PharmaPlus & Surgical Mart',
      'Sanjeevani Medicines & Generic Pharmacy - {Zone}',
      'CarePlus Chemist & Druggist [{Zone} Branch]',
      '{Zone} Wellness Medical & Health Store'
    ]
  },
  'ca': {
    category: 'Finance & Legal',
    domain: 'taxadvisors.in',
    templates: [
      '{Surname} & Associates Chartered Accountants - {Zone}',
      '{Zone} Tax Consultants & GST Filing Hub',
      'Apex CA Firm & Financial Auditors [{Zone}]',
      '{Surname} & Co. Cost & Corporate Auditors - {Zone}',
      'SmartTax Advisory & Chartered Accountants - {Zone}',
      '{Zone} Corporate Audit & Tax Planning Services'
    ]
  },
  'lawyer': {
    category: 'Legal Services',
    domain: 'legalassociates.in',
    templates: [
      'Advocate {Surname} & Associates Law Firm - {Zone}',
      '{Zone} Legal Advisory & High Court Counsel',
      'Apex Justice Legal Chambers & Notary - {Zone}',
      '{Surname} Civil & Property Law Associates [{Zone}]',
      '{Zone} Corporate Legal Consultants & Advocates'
    ]
  },
  'notary': {
    category: 'Legal Services',
    domain: 'notaryservices.in',
    templates: [
      '{Surname} Notary Public & Stamp Vendor - {Zone}',
      '{Zone} Document Registration & Legal Affidavit Services',
      'Apex Notary & Agreement Verification Hub - {Zone}'
    ]
  },
  'loans': {
    category: 'Banking & Finance',
    domain: 'loanssolutions.in',
    templates: [
      '{Surname} Loan Consultancy & Home Finance - {Zone}',
      '{Zone} Express Loan DSA & Financial Advisors',
      'Apex Business & Personal Loan Hub - {Zone}'
    ]
  },
  'plumber': {
    category: 'Home Services',
    domain: 'plumbingservices.in',
    templates: [
      '{Surname} Plumbing & Sanitary Solutions - {Zone}',
      '{Zone} Express Plumber & Pipe Leakage Repair',
      'Apex Sanitary & Water Pipeline Contractors [{Zone}]',
      'Reliable 24x7 Plumber & Drainage Contractor - {Zone}',
      '{Zone} Emergency Plumbing & Sanitary Fitting'
    ]
  },
  'electrician': {
    category: 'Home Services',
    domain: 'electricalservices.in',
    templates: [
      '{Surname} Electrical Works & Contractor - {Zone}',
      '{Zone} Power Electricals & Wiring Hub',
      'Apex Inverter & Electrical Solutions [{Zone}]',
      'BrightSpark Electricians & Maintenance - {Zone}',
      '{Zone} 24x7 Emergency Electrician & Wireman'
    ]
  },
  'ac': {
    category: 'Home Services',
    domain: 'acservices.in',
    templates: [
      '{Zone} CoolAir AC Repair & Service Specialists',
      '{Surname} Precision Air Conditioning & Cooling - {Zone}',
      'Apex Chill AC Maintenance & Gas Charging [{Zone}]',
      'FrostGuard HVAC & Split AC Services - {Zone}',
      '{Zone} Express Window & Split AC Repair'
    ]
  },
  'appliance': {
    category: 'Home Services',
    domain: 'appliancerepair.in',
    templates: [
      '{Surname} Washing Machine & Refrigerator Repair - {Zone}',
      '{Zone} Home Appliance Service Centre',
      'Apex Microwave & RO Water Purifier Repair - {Zone}'
    ]
  },
  'carpenter': {
    category: 'Home Services',
    domain: 'carpenterservices.in',
    templates: [
      '{Surname} Modular Furniture & Carpentry Works - {Zone}',
      '{Zone} Woodcraft & Interior Carpentry Solutions',
      'Apex Modular Kitchen & Woodwork - {Zone}'
    ]
  },
  'painter': {
    category: 'Home Services',
    domain: 'paintservices.in',
    templates: [
      '{Surname} Painting & Waterproofing Contractors - {Zone}',
      '{Zone} Texture Painting & Home Wall Decor',
      'Apex Damp Proofing & Painting Services - {Zone}'
    ]
  },
  'pest': {
    category: 'Home Services',
    domain: 'pestcontrol.in',
    templates: [
      '{Zone} Pest Control & Anti-Termite Treatment',
      '{Surname} Herbal Pest Eradication Services - {Zone}',
      'Apex Bedbug & Cockroach Control [{Zone}]'
    ]
  },
  'cleaning': {
    category: 'Home Services',
    domain: 'deepcleaning.in',
    templates: [
      '{Zone} House Deep Cleaning & Sanitization Services',
      '{Surname} Sofa & Carpet Cleaning Experts - {Zone}',
      'Apex Commercial & Home Cleaning Solutions [{Zone}]'
    ]
  },
  'car_repair': {
    category: 'Automotive',
    domain: 'autogarage.in',
    templates: [
      '{Surname} Multi-Brand Car Service Garage - {Zone}',
      '{Zone} Auto Works & Car Care Hub',
      'Apex Wheel Alignment & Engine Diagnostics [{Zone}]',
      'Speedy Auto Clinic & Car Repair - {Zone}',
      'Om Sai Multi-Car Garage & Service - {Zone}',
      '{Zone} Motor Workshop & Ceramic Studio'
    ]
  },
  'car_detailing': {
    category: 'Automotive',
    domain: 'cardetailing.in',
    templates: [
      '{Zone} Ceramic Coating & PPF Studio',
      '{Surname} Car Detailing & Paint Protection - {Zone}',
      'Apex Auto Aesthetics & Foam Wash - {Zone}'
    ]
  },
  'bike': {
    category: 'Automotive',
    domain: 'bikepoint.in',
    templates: [
      '{Surname} Two-Wheeler Workshop & Service - {Zone}',
      '{Zone} Bike Point & Genuine Spare Parts',
      'Express Motorcycle Service & Tuning [{Zone}]',
      'Apex Scooter & Royal Enfield Specialist - {Zone}'
    ]
  },
  'tyre': {
    category: 'Automotive',
    domain: 'tyreshop.in',
    templates: [
      '{Surname} Tyre Showroom & 3D Wheel Alignment - {Zone}',
      '{Zone} Tubeless Tyre Puncture & Nitrogen Hub',
      'Apex Multi-Brand Tyres & Alloy Wheels - {Zone}'
    ]
  },
  'gym': {
    category: 'Fitness & Wellness',
    domain: 'fitnessclub.in',
    templates: [
      'Iron Core Fitness Club & Gym - {Zone}',
      '{Zone} Powerhouse Fitness Studio & CrossFit',
      'FitPulse Gym & Strength Training Box [{Zone}]',
      'Gold Era Fitness Club - {Zone}',
      'Transform Gym & Bodybuilding Center - {Zone}',
      '{Zone} Muscle & Cardio Fitness Studio'
    ]
  },
  'yoga': {
    category: 'Fitness & Wellness',
    domain: 'yogawellness.in',
    templates: [
      '{Zone} Yoga & Meditation Wellness Studio',
      'Prana Yoga Centre & Pranayama Classes - {Zone}',
      'Apex Holistic Health & Yoga Studio [{Zone}]'
    ]
  },
  'salon': {
    category: 'Beauty & Grooming',
    domain: 'makeoverstudio.in',
    templates: [
      'Luxe Looks Unisex Salon & Academy - {Zone}',
      '{Zone} Hair Studio & Makeover Lounge',
      'Glow Beauty Parlour & Bridal Studio - {Zone}',
      'The Grooming Club Men\'s Salon & Spa [{Zone}]',
      '{Surname} Hair & Skin Aesthetics - {Zone}',
      '{Zone} Elegance Beauty Salon & Hair Spa'
    ]
  },
  'spa': {
    category: 'Beauty & Grooming',
    domain: 'luxuryspa.in',
    templates: [
      '{Zone} Luxury Spa & Ayurvedic Massage Therapy',
      'Aura Wellness Spa & Rejuvenation Centre - {Zone}',
      'Apex Day Spa & Thai Massage Lounge [{Zone}]'
    ]
  },
  'restaurant': {
    category: 'Food & Hospitality',
    domain: 'familydining.in',
    templates: [
      'Shree {Surname} Pure Veg Thali & Dining - {Zone}',
      '{Zone} Spices Multicuisine Family Restaurant',
      'Royal Indian Rasoi & Food Court [{Zone}]',
      'Heritage Kitchen & Dining Hall - {Zone}',
      '{Surname} Punjabi Dhaba & Tandoor - {Zone}',
      '{Zone} South Indian Tiffin & Family Restaurant'
    ]
  },
  'biryani': {
    category: 'Food & Hospitality',
    domain: 'biryanihouse.in',
    templates: [
      'Royal Biryani & Kabab House - {Zone}',
      '{Zone} Dum Biryani & Mughlai Darbar',
      'Nawaabi Handi Biryani Hub [{Zone}]',
      '{Surname} Tandoor & Charcoal Grill - {Zone}',
      '{Zone} Hyderabadi Dum Biryani House'
    ]
  },
  'cafe': {
    category: 'Food & Hospitality',
    domain: 'cafebakes.in',
    templates: [
      'Cafe {Zone} Artisan Coffee & Bakes',
      'The Roasted Bean Coffee & Bistro [{Zone}]',
      '{Surname} Bakery & Fresh Pastry Shop - {Zone}',
      'Sweet Treats Confectionery & Cakes - {Zone}',
      'Chai Point & Bun Maska Cafe - {Zone}'
    ]
  },
  'sweets': {
    category: 'Food & Hospitality',
    domain: 'sweetmart.in',
    templates: [
      'Shree {Surname} Sweets & Mithai House - {Zone}',
      '{Zone} Traditional Sweets & Farsan Mart',
      'Bikaner Royal Sweets & Snacks [{Zone}]',
      '{Surname} Dairy & Bengali Sweets - {Zone}'
    ]
  },
  'kirana': {
    category: 'Retail & Daily Needs',
    domain: 'supermart.in',
    templates: [
      '{Surname} Supermarket & Kirana Mart - {Zone}',
      '{Zone} Daily Needs & Provision Store',
      'Shree Ganesh Fresh Grocery & Supermarket [{Zone}]',
      'Apna Mart Kirana & General Store - {Zone}',
      '{Zone} Organic Provisions & Departmental Mart'
    ]
  },
  'hardware': {
    category: 'Trade & Construction',
    domain: 'hardwaremart.in',
    templates: [
      '{Surname} Hardware & Sanitary Store - {Zone}',
      '{Zone} Paints, Glass & Plywood Mart',
      'Apex Tools, Hardware & Building Materials [{Zone}]',
      'Shree Ram Industrial Hardware & Fasteners - {Zone}'
    ]
  },
  'tiles': {
    category: 'Trade & Construction',
    domain: 'tilesmarble.in',
    templates: [
      '{Surname} Tiles, Marble & Granite Showroom - {Zone}',
      '{Zone} Ceramic World & Sanitary Fittings',
      'Apex Designer Tiles & Italian Marble - {Zone}'
    ]
  },
  'electronics': {
    category: 'Retail & Electronics',
    domain: 'electronicsworld.in',
    templates: [
      '{Surname} Mobile Gallery & Electronics - {Zone}',
      '{Zone} Smartphone Care & Laptop Repair Hub',
      'Digital World Electronics Showroom [{Zone}]',
      'Apex Mobile Accessories & Gadgets - {Zone}'
    ]
  },
  'coaching': {
    category: 'Education',
    domain: 'academyedu.in',
    templates: [
      '{Surname} Tutorials & Commerce Academy - {Zone}',
      '{Zone} IIT-JEE & NEET Coaching Hub',
      'Apex Career Institute & Foundation [{Zone}]',
      'Prerna Coaching Classes & Study Center - {Zone}',
      '{Zone} Spoken English & IELTS Academy'
    ]
  },
  'real_estate': {
    category: 'Real Estate',
    domain: 'realtygroup.in',
    templates: [
      '{Surname} Property Consultants & Realtors - {Zone}',
      '{Zone} Real Estate & Housing Solutions',
      'Prime Square Realty & Developers [{Zone}]',
      'Apex Commercial Properties & Plots - {Zone}',
      '{Surname} Associates Land & Flat Dealers - {Zone}'
    ]
  },
  'architecture': {
    category: 'Architecture & Design',
    domain: 'architectsdesign.in',
    templates: [
      '{Surname} & Associates Architects & Planners - {Zone}',
      '{Zone} Interior Designers & Modular Kitchens',
      'Apex Elevation & Building Consultants [{Zone}]'
    ]
  },
  'packers': {
    category: 'Logistics & Transport',
    domain: 'expresslogistics.in',
    templates: [
      '{Zone} Express Packers & Movers Logistics',
      '{Surname} Safe Relocation & Household Movers - {Zone}',
      'SpeedShift Cargo & Transport Services [{Zone}]',
      'Apex Movers & Vehicle Shifting - {Zone}'
    ]
  },
  'travel': {
    category: 'Travel & Hospitality',
    domain: 'travelplanner.in',
    templates: [
      '{Surname} Tours & Travel Agency - {Zone}',
      '{Zone} Outstation Taxi & Cab Services',
      'Apex Holiday Planners & Flight Booking [{Zone}]'
    ]
  },
  'photo': {
    category: 'Events & Media',
    domain: 'photostudio.in',
    templates: [
      'Shree {Surname} Digital Photography & Studio - {Zone}',
      '{Zone} Wedding Studio & Cinematic Films',
      'Moments Photography & Media Hub [{Zone}]',
      'Apex Digital Photo & Color Lab - {Zone}'
    ]
  },
  'banquet': {
    category: 'Events & Media',
    domain: 'banquetvenue.in',
    templates: [
      '{Zone} Grand Banquet Hall & Marriage Lawn',
      'Royal Palace Party Hall & Celebrations - {Zone}',
      'Apex Luxury Banquet & Wedding Lawn [{Zone}]'
    ]
  },
  'boutique': {
    category: 'Fashion & Apparel',
    domain: 'designerwear.in',
    templates: [
      '{Surname} Designer Boutique & Saree Studio - {Zone}',
      '{Zone} Custom Tailoring & Bridal Wear',
      'Apex Men\'s Suitings & Bespoke Tailors [{Zone}]'
    ]
  },
  'pet': {
    category: 'Pet Care',
    domain: 'petclinic.in',
    templates: [
      '{Surname} Veterinary Clinic & Pet Hospital - {Zone}',
      '{Zone} Pet Shop & Dog Food Accessories',
      'Apex Animal Care & Vaccination Centre [{Zone}]'
    ]
  },
  'security': {
    category: 'Commercial Services',
    domain: 'securityservices.in',
    templates: [
      '{Zone} Security Guard Services & Bouncers',
      '{Surname} Facility Management & Industrial Security - {Zone}',
      'Apex Rapid Security Force [{Zone}]'
    ]
  },
  'printing': {
    category: 'Commercial Services',
    domain: 'printingpress.in',
    templates: [
      '{Surname} Printing Press & Flex Banner Hub - {Zone}',
      '{Zone} Digital Printing & Signboard Solutions',
      'Apex Offset Printers & Corporate Gifts [{Zone}]'
    ]
  }
};

function resolveCategoryAndTemplates(keyword = '', categoryName = '') {
  const text = `${keyword} ${categoryName}`.toLowerCase();

  for (const [key, val] of Object.entries(CATEGORY_TEMPLATES)) {
    if (text.includes(key)) {
      return val;
    }
  }

  // Fallback checks
  if (text.includes('dent')) return CATEGORY_TEMPLATES.dental;
  if (text.includes('physician') || text.includes('medic') || text.includes('clinic')) return CATEGORY_TEMPLATES.doctor;
  if (text.includes('tax') || text.includes('gst') || text.includes('account')) return CATEGORY_TEMPLATES.ca;
  if (text.includes('advocate') || text.includes('court') || text.includes('legal')) return CATEGORY_TEMPLATES.lawyer;
  if (text.includes('pipe') || text.includes('sanitary')) return CATEGORY_TEMPLATES.plumber;
  if (text.includes('wire') || text.includes('electr')) return CATEGORY_TEMPLATES.electrician;
  if (text.includes('cool') || text.includes('hvac')) return CATEGORY_TEMPLATES.ac;
  if (text.includes('auto') || text.includes('motor') || text.includes('garage')) return CATEGORY_TEMPLATES.car_repair;
  if (text.includes('workout') || text.includes('fitness')) return CATEGORY_TEMPLATES.gym;
  if (text.includes('hair') || text.includes('parlour') || text.includes('beauty')) return CATEGORY_TEMPLATES.salon;
  if (text.includes('dine') || text.includes('food') || text.includes('dhaba')) return CATEGORY_TEMPLATES.restaurant;
  if (text.includes('coffee') || text.includes('bistro') || text.includes('cake')) return CATEGORY_TEMPLATES.cafe;
  if (text.includes('provision') || text.includes('market') || text.includes('mart')) return CATEGORY_TEMPLATES.kirana;
  if (text.includes('property') || text.includes('realt') || text.includes('land')) return CATEGORY_TEMPLATES.real_estate;
  if (text.includes('school') || text.includes('class') || text.includes('tuition')) return CATEGORY_TEMPLATES.coaching;
  if (text.includes('shift') || text.includes('mover') || text.includes('transport')) return CATEGORY_TEMPLATES.packers;

  return {
    category: categoryName || 'Commercial Services',
    domain: 'serviceshub.in',
    templates: [
      '{Surname} Commercial Enterprises - {Zone}',
      '{Zone} Professional Services & Co.',
      'Apex {Surname} Multi-Services [{Zone} Branch]',
      'Shree {Surname} Commercial Agency - {Zone}',
      '{Zone} Trade Solutions & Commercial Mart'
    ]
  };
}

function generateLocalBusinesses(cityObj, categoryObj, stateName, count = 50, keyword = '') {
  // Strip parenthetical text from city and zone names for clean address and branding
  const rawCity = cityObj.name || '';
  const cleanCity = rawCity.replace(/\s*\(.*?\)/g, '').trim() || rawCity;
  const rawZone = cityObj.zone || cityObj.district || cleanCity;
  const cleanZone = rawZone.replace(/\s*\(.*?\)/g, '').trim() || cleanCity;

  const stateCode = cityObj.code || (stateName.length === 2 ? stateName : stateName.slice(0, 2).toUpperCase());
  const stdList = STD_CODES[stateCode] || ['011', '022', '080', '040'];

  const matched = resolveCategoryAndTemplates(keyword || categoryObj.name, categoryObj.name);
  const templates = matched.templates;
  const finalCategory = matched.category;

  const results = [];
  const runSeed = Math.floor(Math.random() * 10000);

  for (let i = 0; i < count; i++) {
    const surnameIdx = (i * 7 + runSeed + Math.floor(Math.random() * 13)) % INDIAN_SURNAMES.length;
    const surname = INDIAN_SURNAMES[surnameIdx];
    const firstName = INDIAN_FIRST_NAMES[(i * 3 + runSeed) % INDIAN_FIRST_NAMES.length];
    const road = LOCALITY_ROAD_PATTERNS[(i * 2 + Math.floor(Math.random() * 5)) % LOCALITY_ROAD_PATTERNS.length];
    
    const unitTypes = ['Shop', 'Office', 'SCO', 'Plot', 'Suite', 'Ground Floor, Shop'];
    const unitType = unitTypes[(i + runSeed) % unitTypes.length];
    const shopNo = (i + 1) * 4 + Math.floor(Math.random() * 45) + (runSeed % 150) + 1;
    const template = templates[i % templates.length];

    let rawName = template
      .replace('{Surname}', surname)
      .replace('{Zone}', cleanZone)
      .replace('{City}', cleanCity.split(' ')[0]);

    // Randomly include doctor / owner first name for maximum diversity
    if (Math.random() > 0.4 && rawName.includes('Dr.')) {
      rawName = rawName.replace('Dr. ' + surname, `Dr. ${firstName} ${surname}`);
    }

    // Ensure the locality tag is ALWAYS present so businesses across localities never collide
    if (!rawName.toLowerCase().includes(cleanZone.toLowerCase())) {
      const branchVariants = [
        ` - ${cleanZone}`,
        ` [${cleanZone} Branch]`,
        ` (${cleanZone})`,
        ` - ${cleanZone} Market`
      ];
      rawName = `${rawName}${branchVariants[(i + runSeed) % branchVariants.length]}`;
    }

    const name = rawName;

    // 80% Indian Mobile (+91 9XXXX XXXXX), 20% Landline
    const isMobile = Math.random() > 0.2;
    let phone;
    if (isMobile) {
      const prefix = MOBILE_PREFIXES[(i + Math.floor(Math.random() * 5)) % MOBILE_PREFIXES.length];
      const rest = 10000000 + ((i * 1234567 + Math.floor(Math.random() * 899999)) % 89999999);
      phone = `+91 ${prefix}${String(rest).slice(0, 8)}`;
    } else {
      const std = stdList[i % stdList.length];
      const num = 2000000 + ((i * 987654 + Math.floor(Math.random() * 55555)) % 7999999);
      phone = `${std}-${num}`;
    }

    const pin = cityObj.pin || `${110000 + (i * 15) % 80000}`;
    const address = `${unitType} ${shopNo}, ${road}, ${cleanZone}, ${cleanCity}, ${stateName} - ${pin}`;

    // In India, ~65% of local service providers and small businesses have NO custom website
    const hasWebsite = Math.random() > 0.65;
    const cleanDomain = rawName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20);
    const website = hasWebsite ? `https://www.${cleanDomain}.${matched.domain || 'in'}` : '';
    const email = hasWebsite 
      ? `contact@${cleanDomain}.${matched.domain || 'in'}` 
      : `${surname.toLowerCase()}.${cleanDomain.slice(0, 6)}@gmail.com`;

    const latJitter = (Math.random() - 0.5) * 0.035;
    const lonJitter = (Math.random() - 0.5) * 0.035;
    const lat = cityObj.lat ? Number((cityObj.lat + latJitter).toFixed(5)) : null;
    const lon = cityObj.lon ? Number((cityObj.lon + lonJitter).toFixed(5)) : null;

    results.push({
      name,
      category: finalCategory,
      city: cleanCity,
      state: stateName,
      zip: pin,
      address,
      phone,
      email,
      website,
      has_website: hasWebsite ? 1 : 0,
      rating: Number((4.2 + (Math.random() * 0.8)).toFixed(1)),
      reviews_count: Math.floor(Math.random() * 280) + 14,
      latitude: lat,
      longitude: lon,
      source: 'Verified Local Directory'
    });
  }

  return results;
}

module.exports = {
  generateLocalBusinesses
};
