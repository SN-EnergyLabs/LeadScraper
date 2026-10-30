// High-Volume Query Expander & Sub-Zone Decomposition Engine for India
// Breaks down target states & cities into micro-neighborhoods, sub-zones, and keyword variations
// to guarantee 100% geographic coverage across every city, district, and locality without dropping leads.

// Comprehensive catalog of 85+ primary Indian commercial business categories
const ALL_BUSINESS_KEYWORDS = [
  // Healthcare & Dental
  { keyword: 'Dentist', category: 'Healthcare & Dental', tags: ['dentist', 'dental_clinic', 'orthodontist'] },
  { keyword: 'Dental Clinic & Implant Centre', category: 'Healthcare & Dental', tags: ['dental_clinic', 'teeth_clinic', 'dental_implant'] },
  { keyword: 'General Physician & Family Doctor', category: 'Healthcare & Medical', tags: ['doctors', 'clinic', 'general_physician'] },
  { keyword: 'Multispeciality Polyclinic', category: 'Healthcare & Medical', tags: ['polyclinic', 'clinic', 'doctors'] },
  { keyword: 'Pediatrician & Child Specialist', category: 'Healthcare & Medical', tags: ['pediatrician', 'child_clinic', 'baby_care'] },
  { keyword: 'Gynecologist & Maternity Clinic', category: 'Healthcare & Medical', tags: ['gynecologist', 'maternity', 'womens_health'] },
  { keyword: 'Orthopedic Doctor & Joint Clinic', category: 'Healthcare & Medical', tags: ['orthopedic', 'bone_joint', 'spine_clinic'] },
  { keyword: 'Dermatologist & Skin Clinic', category: 'Healthcare & Medical', tags: ['dermatologist', 'skin_clinic', 'hair_treatment'] },
  { keyword: 'Eye Specialist & Ophthalmologist', category: 'Healthcare & Medical', tags: ['eye_doctor', 'eye_clinic', 'lasik'] },
  { keyword: 'ENT Specialist & Hearing Centre', category: 'Healthcare & Medical', tags: ['ent_doctor', 'ear_nose_throat', 'hearing_aid'] },
  { keyword: 'Pathology Lab & Diagnostic Centre', category: 'Diagnostics & Labs', tags: ['pathology', 'blood_test', 'diagnostic'] },
  { keyword: 'Diagnostic Imaging, X-Ray & MRI', category: 'Diagnostics & Labs', tags: ['xray', 'mri_scan', 'ultrasound', 'ct_scan'] },
  { keyword: 'Multispeciality Hospital', category: 'Hospitals & Nursing', tags: ['hospital', 'emergency', 'healthcare'] },
  { keyword: 'Pharmacy & Chemist Store', category: 'Healthcare & Retail', tags: ['pharmacy', 'chemist', 'medical_store'] },
  { keyword: 'Ayurvedic Clinic & Panchakarma', category: 'Alternative Medicine', tags: ['ayurveda', 'panchakarma', 'herbal'] },
  { keyword: 'Homeopathy Clinic', category: 'Alternative Medicine', tags: ['homeopathy', 'homeopathic_doctor'] },
  { keyword: 'Physiotherapy & Rehabilitation Clinic', category: 'Healthcare & Medical', tags: ['physiotherapist', 'rehab', 'physiotherapy'] },
  
  // Finance & Legal
  { keyword: 'Chartered Accountant (CA)', category: 'Finance & Legal', tags: ['accountant', 'tax_advisor', 'financial_advisor'] },
  { keyword: 'Tax Consultant & GST Filing', category: 'Finance & Legal', tags: ['tax_consultant', 'gst_filing', 'itr_advisor'] },
  { keyword: 'Company Secretary (CS) & Corporate Law', category: 'Finance & Legal', tags: ['company_secretary', 'corporate_advisor'] },
  { keyword: 'Advocate & High Court Lawyer', category: 'Legal Services', tags: ['lawyer', 'advocate', 'legal_firm'] },
  { keyword: 'Property Lawyer & Document Verification', category: 'Legal Services', tags: ['property_lawyer', 'legal_counsel', 'documentation'] },
  { keyword: 'Notary Public & Stamp Vendor', category: 'Legal Services', tags: ['notary', 'stamp_vendor', 'affidavit'] },
  { keyword: 'Loan Consultant & Home Loan DSA', category: 'Banking & Finance', tags: ['loan_agent', 'home_loan', 'business_loan'] },
  { keyword: 'Financial Planner & Mutual Funds Advisor', category: 'Banking & Finance', tags: ['mutual_funds', 'wealth_manager', 'investment'] },
  { keyword: 'Insurance Agent & Consultant', category: 'Banking & Finance', tags: ['insurance_agent', 'life_insurance', 'health_insurance'] },

  // Home & Construction Services
  { keyword: 'Plumber & Sanitary Works', category: 'Home Services', tags: ['plumber', 'sanitary', 'pipe_repair'] },
  { keyword: 'Electrician & Electrical Contractor', category: 'Home Services', tags: ['electrician', 'electrical', 'wireman'] },
  { keyword: 'AC Repair & HVAC Cooling Service', category: 'Home Services', tags: ['air_conditioning', 'hvac', 'ac_repair'] },
  { keyword: 'Refrigerator & Washing Machine Repair', category: 'Home Services', tags: ['appliance_repair', 'fridge_repair', 'washing_machine'] },
  { keyword: 'RO Water Purifier Sales & Service', category: 'Home Services', tags: ['water_purifier', 'ro_repair', 'aquaguard'] },
  { keyword: 'Carpenter & Modular Woodwork', category: 'Home Services', tags: ['carpenter', 'furniture_maker', 'wood_work'] },
  { keyword: 'Painter & Waterproofing Contractor', category: 'Home Services', tags: ['house_painter', 'waterproofing', 'texture_paint'] },
  { keyword: 'Pest Control & Anti-Termite Treatment', category: 'Home Services', tags: ['pest_control', 'termite_treatment', 'sanitization'] },
  { keyword: 'House Deep Cleaning & Sanitization', category: 'Home Services', tags: ['deep_cleaning', 'sofa_cleaning', 'housekeeping'] },
  { keyword: 'Solar Panel & Inverter Battery Dealer', category: 'Home Services', tags: ['solar_energy', 'inverter_battery', 'ups'] },

  // Automotive
  { keyword: 'Car Repair & Multi-Brand Garage', category: 'Automotive', tags: ['car_repair', 'car_wash', 'auto_parts'] },
  { keyword: 'Car Denting, Painting & Body Shop', category: 'Automotive', tags: ['denting_painting', 'car_body_shop', 'accidental_repair'] },
  { keyword: 'Car Detailing, Ceramic & PPF Studio', category: 'Automotive', tags: ['car_detailing', 'ceramic_coating', 'ppf_studio'] },
  { keyword: 'Car Wash & Dry Cleaning Centre', category: 'Automotive', tags: ['car_wash', 'foam_wash', 'interior_dry_clean'] },
  { keyword: 'Two-Wheeler Bike Workshop', category: 'Automotive', tags: ['motorcycle_repair', 'scooter_repair', 'bike_service'] },
  { keyword: 'Royal Enfield & Bullet Specialist', category: 'Automotive', tags: ['bullet_repair', 'enfield_service', 'cruiser_bikes'] },
  { keyword: 'Tyre Dealer & Wheel Alignment Shop', category: 'Automotive', tags: ['tyres', 'wheel_alignment', 'puncture_repair'] },
  { keyword: 'Car Battery & Auto Electricals', category: 'Automotive', tags: ['car_battery', 'auto_electrician', 'exide_amaron'] },

  // Fitness & Personal Grooming
  { keyword: 'Gym & Fitness Centre', category: 'Fitness & Wellness', tags: ['gym', 'fitness_centre', 'health_club'] },
  { keyword: 'CrossFit & Strength Training Box', category: 'Fitness & Wellness', tags: ['crossfit', 'strength_training', 'bodybuilding'] },
  { keyword: 'Yoga & Meditation Studio', category: 'Fitness & Wellness', tags: ['yoga_studio', 'meditation', 'pranayama'] },
  { keyword: 'Martial Arts, Karate & MMA Academy', category: 'Fitness & Wellness', tags: ['martial_arts', 'karate', 'self_defense'] },
  { keyword: 'Sports Turf & Badminton Arena', category: 'Sports & Recreation', tags: ['turf_cricket', 'badminton_court', 'sports_complex'] },
  { keyword: 'Unisex Salon & Hair Studio', category: 'Beauty & Grooming', tags: ['hairdresser', 'unisex_salon', 'hair_styling'] },
  { keyword: 'Women Beauty Parlour & Bridal Studio', category: 'Beauty & Grooming', tags: ['beauty_parlour', 'bridal_makeup', 'facial_spa'] },
  { keyword: 'Men Grooming Salon & Barber Shop', category: 'Beauty & Grooming', tags: ['barber_shop', 'men_salon', 'beard_trim'] },
  { keyword: 'Luxury Spa & Ayurvedic Massage Centre', category: 'Beauty & Grooming', tags: ['spa', 'massage_centre', 'wellness_spa'] },
  { keyword: 'Tattoo & Body Piercing Studio', category: 'Personal Styling', tags: ['tattoo_artist', 'body_piercing', 'ink_studio'] },

  // Food & Hospitality
  { keyword: 'Restaurant & Family Dining', category: 'Food & Hospitality', tags: ['restaurant', 'dining', 'dhaba'] },
  { keyword: 'Pure Veg & Gujarati Thali Restaurant', category: 'Food & Hospitality', tags: ['veg_restaurant', 'thali', 'jain_food'] },
  { keyword: 'Biryani, Tandoor & Mughlai House', category: 'Food & Hospitality', tags: ['biryani', 'mughlai', 'tandoor'] },
  { keyword: 'South Indian Tiffin & Dosa Center', category: 'Food & Hospitality', tags: ['south_indian', 'dosa', 'idli_vada'] },
  { keyword: 'Cafe & Artisan Coffee Bistro', category: 'Food & Hospitality', tags: ['cafe', 'coffee_shop', 'bistro'] },
  { keyword: 'Bakery, Fresh Cakes & Pastry Shop', category: 'Food & Hospitality', tags: ['bakery', 'cake_shop', 'pastries'] },
  { keyword: 'Sweets, Mithai & Farsan Mart', category: 'Food & Hospitality', tags: ['sweets', 'mithai', 'namkeen'] },
  { keyword: 'Ice Cream Parlour & Dessert Lounge', category: 'Food & Hospitality', tags: ['ice_cream', 'waffles', 'thick_shakes'] },
  { keyword: 'Fast Food, Pizza & Burger Joint', category: 'Food & Hospitality', tags: ['fast_food', 'pizza', 'burgers'] },
  { keyword: 'Cloud Kitchen & Tiffin Delivery Service', category: 'Food & Hospitality', tags: ['cloud_kitchen', 'tiffin_service', 'meal_delivery'] },

  // Retail & Daily Needs
  { keyword: 'Kirana Store & Supermarket', category: 'Retail & Daily Needs', tags: ['supermarket', 'convenience', 'grocery'] },
  { keyword: 'Organic Grocery & Cold Pressed Oils', category: 'Retail & Daily Needs', tags: ['organic_store', 'health_foods', 'millets'] },
  { keyword: 'Dairy & Fresh Milk Products Store', category: 'Retail & Daily Needs', tags: ['dairy', 'milk_parlour', 'paneer_ghee'] },
  { keyword: 'Hardware & Sanitaryware Store', category: 'Trade & Construction', tags: ['hardware', 'paint', 'building_materials'] },
  { keyword: 'Electrical Supplies & Lighting Showroom', category: 'Trade & Construction', tags: ['electrical_store', 'led_lights', 'fans_switches'] },
  { keyword: 'Plywood, Laminates & Glass Store', category: 'Trade & Construction', tags: ['plywood', 'laminates', 'glass_fittings'] },
  { keyword: 'Tiles, Marble & Granite Showroom', category: 'Trade & Construction', tags: ['tiles_showroom', 'marble_granite', 'sanitaryware'] },
  { keyword: 'Paint & Wallpaper Decor Showroom', category: 'Trade & Construction', tags: ['paints', 'asian_paints', 'wallpapers'] },
  { keyword: 'Mobile Phones & Accessories Store', category: 'Retail & Electronics', tags: ['mobile_store', 'smartphones', 'accessories'] },
  { keyword: 'Smartphone & Laptop Repair Centre', category: 'Retail & Electronics', tags: ['mobile_repair', 'laptop_service', 'screen_repair'] },
  { keyword: 'CCTV Security & Surveillance Dealer', category: 'Retail & Electronics', tags: ['cctv_installation', 'security_systems', 'biometrics'] },

  // Education & Coaching
  { keyword: 'IIT-JEE & NEET Coaching Institute', category: 'Education', tags: ['iit_jee', 'neet_coaching', 'medical_engineering'] },
  { keyword: 'Commerce, CA & CS Coaching Classes', category: 'Education', tags: ['ca_coaching', 'commerce_classes', 'cs_foundation'] },
  { keyword: 'School & College Tuition Classes', category: 'Education', tags: ['tuition_classes', 'cbse_coaching', 'icse_tuitions'] },
  { keyword: 'Spoken English & IELTS Training Institute', category: 'Education', tags: ['ielts_coaching', 'spoken_english', 'study_abroad'] },
  { keyword: 'Computer Coding & IT Training Academy', category: 'Education', tags: ['coding_classes', 'python_training', 'software_courses'] },
  { keyword: 'Pre-School, Daycare & Kindergarten', category: 'Education', tags: ['play_school', 'daycare', 'kindergarten'] },
  { keyword: 'Music, Dance & Fine Arts Academy', category: 'Education', tags: ['dance_academy', 'music_classes', 'guitar_piano'] },
  { keyword: 'Motor Driving School', category: 'Education & Training', tags: ['driving_school', 'car_training', 'rto_license'] },

  // Real Estate & Construction
  { keyword: 'Real Estate Agent & Property Dealer', category: 'Real Estate', tags: ['real_estate', 'property_dealer', 'realtor'] },
  { keyword: 'Commercial Property & Land Consultant', category: 'Real Estate', tags: ['commercial_property', 'industrial_land', 'office_space'] },
  { keyword: 'Architect & Building Designer', category: 'Architecture & Design', tags: ['architect', 'building_designer', 'elevation'] },
  { keyword: 'Interior Designer & Modular Kitchens', category: 'Architecture & Design', tags: ['interior_designer', 'modular_kitchen', 'home_decor'] },
  { keyword: 'Civil Contractor & Building Construction', category: 'Architecture & Design', tags: ['civil_contractor', 'builder', 'renovation'] },

  // Logistics & Travel
  { keyword: 'Packers & Movers Logistics', category: 'Logistics & Transport', tags: ['packers_movers', 'relocation', 'goods_transport'] },
  { keyword: 'Courier & Cargo Booking Service', category: 'Logistics & Transport', tags: ['courier_service', 'parcel_booking', 'cargo_express'] },
  { keyword: 'Tour & Travel Agency', category: 'Travel & Hospitality', tags: ['travel_agent', 'holiday_packages', 'ticket_booking'] },
  { keyword: 'Car Rental & Outstation Taxi Service', category: 'Travel & Hospitality', tags: ['taxi_service', 'car_rental', 'airport_cabs'] },

  // Events & Apparel
  { keyword: 'Wedding Photographer & Digital Studio', category: 'Events & Media', tags: ['wedding_photographer', 'photo_studio', 'cinematography'] },
  { keyword: 'Event Planner & Wedding Decorator', category: 'Events & Media', tags: ['event_planner', 'wedding_decorator', 'party_organizer'] },
  { keyword: 'Banquet Hall & Marriage Lawn', category: 'Events & Media', tags: ['banquet_hall', 'marriage_lawn', 'wedding_venue'] },
  { keyword: 'Catering Services & Halwai', category: 'Events & Media', tags: ['catering_service', 'wedding_caterer', 'party_food'] },
  { keyword: 'Ladies Boutique & Custom Tailoring', category: 'Fashion & Apparel', tags: ['boutique', 'ladies_tailor', 'designer_wear'] },
  { keyword: 'Men Formal Suits & Custom Tailor', category: 'Fashion & Apparel', tags: ['mens_tailor', 'suitings', 'sherwani'] },
  { keyword: 'Jewellery Showroom & Goldsmith', category: 'Fashion & Luxury', tags: ['jewellery', 'gold_ornaments', 'diamond_jewels'] },
  { keyword: 'Optical & Eyewear Showroom', category: 'Fashion & Healthcare', tags: ['optical_shop', 'spectacles', 'sunglasses'] },
  { keyword: 'Footwear & Shoe Store', category: 'Fashion & Apparel', tags: ['footwear_store', 'shoes_showroom', 'leather_sandals'] },
  { keyword: 'Dry Cleaners & Laundry Service', category: 'Personal Services', tags: ['dry_cleaners', 'laundry_service', 'steam_ironing'] },

  // Pets & Security
  { keyword: 'Veterinary Clinic & Pet Doctor', category: 'Pet Care', tags: ['vet_clinic', 'pet_doctor', 'animal_hospital'] },
  { keyword: 'Pet Shop & Dog Food Supplies', category: 'Pet Care', tags: ['pet_shop', 'dog_food', 'pet_accessories'] },
  { keyword: 'Security Guard Agency & Bouncers', category: 'Commercial Services', tags: ['security_agency', 'security_guards', 'bouncers'] },
  { keyword: 'Printing Press & Flex Banner Signage', category: 'Commercial Services', tags: ['printing_press', 'flex_printing', 'signboards'] }
];

const CATEGORY_SYNONYMS = {
  'dentist': [
    'dentist', 'dental clinic', 'dental care', 'orthodontist', 'dental hospital',
    'teeth clinic', 'dental implant center', 'root canal specialist', 'pediatric dentist', 'cosmetic dental clinic'
  ],
  'dental': [
    'dental clinic', 'dentist', 'dental care', 'orthodontist', 'dental implant center',
    'teeth clinic', 'dental hospital', 'multispeciality dental clinic'
  ],
  'doctor': [
    'general physician', 'doctors clinic', 'polyclinic', 'medical specialist',
    'family clinic', 'health center', 'pediatrician', 'gynecologist'
  ],
  'clinic': [
    'polyclinic', 'doctors clinic', 'medical center', 'family clinic', 'specialist clinic'
  ],
  'hospital': [
    'multispeciality hospital', 'nursing home', 'maternity hospital', 'healthcare center'
  ],
  'pathology': [
    'pathology lab', 'diagnostic center', 'blood test lab', 'diagnostic imaging', 'x-ray mri center'
  ],
  'pharmacy': [
    'pharmacy', 'chemist store', 'druggist', 'medical store', 'generic medicine store'
  ],
  'plumber': [
    'plumber', 'plumbing services', 'sanitary fittings', 'drain cleaning', 'emergency plumber', 'pipe repair'
  ],
  'electrician': [
    'electrician', 'electrical contractor', 'electrical services', 'electrical repair and maintenance', 'wireman'
  ],
  'ac repair': [
    'ac repair', 'air conditioning service', 'hvac repair', 'split ac gas filling', 'ac maintenance'
  ],
  'car repair': [
    'car repair', 'car workshop', 'auto mechanic', 'car service center', 'car garage',
    'multi-brand car service', 'auto detailing studio', 'wheel alignment'
  ],
  'bike repair': [
    'two-wheeler workshop', 'bike repair', 'motorcycle service', 'royal enfield specialist', 'scooter repair'
  ],
  'gym': [
    'gym', 'fitness centre', 'workout club', 'fitness studio', 'health club', 'crossfit box', 'bodybuilding gym'
  ],
  'salon': [
    'unisex salon', 'beauty parlour', 'hair salon', 'barber shop', 'hair studio', 'spa and wellness', 'bridal makeup studio'
  ],
  'lawyer': [
    'advocate', 'lawyer', 'legal counsel', 'law firm', 'legal advisor', 'high court advocate', 'civil criminal lawyer'
  ],
  'ca': [
    'chartered accountant', 'ca firm', 'tax consultant', 'gst consultant', 'accounting services', 'auditor and tax advisor'
  ],
  'real estate': [
    'real estate agent', 'property dealer', 'realtor', 'property consultant', 'commercial real estate consultant'
  ],
  'restaurant': [
    'restaurant', 'cafe', 'family restaurant', 'pure veg thali', 'biryani house',
    'fast food', 'dhaba', 'south indian restaurant', 'dining hall'
  ],
  'cafe': [
    'cafe', 'coffee shop', 'artisan bakery and cafe', 'tea cafe', 'bistro'
  ],
  'bakery': [
    'bakery', 'cake shop', 'pastry shop', 'sweet shop and mithai', 'confectionery', 'farsan mart'
  ],
  'grocery': [
    'kirana store', 'supermarket', 'departmental store', 'provision store', 'mini mart', 'organic grocery'
  ],
  'hardware': [
    'hardware store', 'sanitaryware', 'paint shop', 'plywood and hardware', 'tools and fittings'
  ],
  'coaching': [
    'coaching classes', 'tuition center', 'study circle', 'iit jee neet academy', 'career institute'
  ],
  'packers': [
    'packers and movers', 'relocation services', 'household goods transport', 'cargo logistics'
  ],
  'photographer': [
    'wedding photographer', 'photo studio', 'digital photo lab', 'cinematography studio'
  ]
};

// Deep Micro-Neighborhood Registry for India's Major Cities and Regional Hubs
const CITY_SUBZONES = {
  'delhi': [
    'Connaught Place', 'Karol Bagh', 'Paharganj', 'Saket', 'Hauz Khas', 'Greater Kailash', 
    'Malviya Nagar', 'Lajpat Nagar', 'Kalkaji', 'Nehru Place', 'Okhla', 'Dwarka Sector 6',
    'Dwarka Sector 10', 'Dwarka Sector 12', 'Dwarka Sector 21', 'Vasant Kunj', 'Rajouri Garden',
    'Punjabi Bagh', 'Janakpuri', 'Tilak Nagar', 'Paschim Vihar', 'Uttam Nagar', 'Vikaspuri',
    'Civil Lines', 'Model Town', 'Kamla Nagar', 'Chandni Chowk', 'Rohini Sector 3', 'Rohini Sector 7',
    'Rohini Sector 9', 'Rohini Sector 13', 'Pitampura', 'Shalimar Bagh', 'Laxmi Nagar', 'Preet Vihar',
    'Anand Vihar', 'Patparganj', 'Mayur Vihar Phase 1', 'Mayur Vihar Phase 2', 'Shahdara',
    'Chanakyapuri', 'Khan Market', 'Defence Colony', 'Noida Sector 18', 'Noida Sector 62',
    'Noida Sector 50', 'Greater Noida Pari Chowk', 'Gurugram Cyber City', 'Gurugram Golf Course Rd',
    'Gurugram Sohna Road', 'Faridabad Sector 15', 'Ghaziabad Indirapuram', 'Ghaziabad Raj Nagar'
  ],
  'mumbai': [
    'Colaba', 'Nariman Point', 'Fort', 'Marine Drive', 'Dadar', 'Lower Parel', 'Worli',
    'Bandra West', 'Bandra East', 'Khar', 'Santacruz', 'Juhu', 'Vile Parle', 'Andheri West',
    'Andheri East', 'Goregaon', 'Malad West', 'Kandivali', 'Borivali West', 'Borivali East',
    'Ghatkopar', 'Powai', 'Chembur', 'Kurla', 'Mulund', 'Thane West', 'Ghodbunder Road',
    'Naupada', 'Vashi Navi Mumbai', 'Nerul', 'Belapur', 'Kharghar', 'Panvel', 'Kalyan',
    'Dombivli', 'Mira Road', 'Vasai', 'Virar'
  ],
  'pune': [
    'Shivajinagar', 'FC Road', 'Camp', 'Deccan', 'Kothrud', 'Karve Nagar', 'Baner',
    'Balewadi', 'Aundh', 'Pashan', 'Hinjewadi Phase 1', 'Hinjewadi Phase 2', 'Hinjewadi Phase 3',
    'Wakad', 'Pimple Saudagar', 'Viman Nagar', 'Kalyani Nagar', 'Koregaon Park', 'Hadapsar',
    'Magarpatta City', 'Kharadi IT Park', 'Pimpri', 'Chinchwad', 'Nigdi', 'Bhosari', 'Bavdhan'
  ],
  'bangalore': [
    'MG Road', 'Brigade Road', 'Richmond Town', 'Indiranagar', 'Koramangala', 'HSR Layout',
    'BTM Layout', 'Jayanagar', 'JP Nagar', 'Whitefield', 'Marathahalli', 'Electronic City Phase 1',
    'Electronic City Phase 2', 'Bellandur', 'Sarjapur Road', 'Malleshwaram', 'Rajajinagar',
    'Banashankari', 'Basavanagudi', 'Hebbal', 'Yelahanka', 'RT Nagar', 'Kalyan Nagar',
    'Frazer Town', 'Kengeri', 'Vijayanagar'
  ],
  'bengaluru': [
    'MG Road', 'Indiranagar', 'Koramangala', 'HSR Layout', 'Whitefield', 'Electronic City',
    'Jayanagar', 'JP Nagar', 'BTM Layout', 'Marathahalli', 'Bellandur', 'Malleshwaram',
    'Rajajinagar', 'Hebbal', 'Yelahanka', 'Sarjapur Road'
  ],
  'chennai': [
    'T. Nagar', 'Anna Nagar', 'Adyar', 'Velachery', 'Mylapore', 'Nungambakkam', 'Alwarpet',
    'Besant Nagar', 'Thiruvanmiyur', 'OMR Kandanchavadi', 'OMR Sholinganallur', 'Perungudi',
    'Tambaram', 'Guindy', 'Porur', 'Kilpauk', 'Egmore', 'Vadapalani', 'Kodambakkam',
    'Perambur', 'Ambattur', 'Chromepet'
  ],
  'hyderabad': [
    'Hitec City', 'Gachibowli', 'Madhapur', 'Kondapur', 'Banjara Hills', 'Jubilee Hills',
    'Somajiguda', 'Begumpet', 'Kukatpally', 'KPHB Colony', 'Ameerpet', 'Secunderabad',
    'Miyapur', 'Dilsukhnagar', 'LB Nagar', 'Uppal', 'Mehdipatnam', 'Tolichowki',
    'Himayatnagar', 'Abids', 'Charminar'
  ],
  'ahmedabad': [
    'Navrangpura', 'C.G. Road', 'Ashram Road', 'Paldi', 'Satellite', 'Bodakdev', 'Vastrapur',
    'SG Highway', 'Prahlad Nagar', 'Bopal', 'Ambawadi', 'Maninagar', 'Naranpura',
    'Ghatlodiya', 'Chandkheda', 'Nikol', 'Naroda', 'GIFT City Gandhinagar'
  ],
  'surat': [
    'Adajan', 'Vesu', 'Athwa Lines', 'Piplod', 'City Light', 'Ring Road', 'Varachha',
    'Katargam', 'Nanpura', 'Rander', 'Majura Gate', 'Udhna Industrial Area'
  ],
  'vadodara': [
    'Alkapuri', 'Gotri', 'Sayajigunj', 'Fatehgunj', 'Manjalpur', 'Akota', 'Karelibaug',
    'Vasna Road', 'Subhanpura', 'Waghodia Road'
  ],
  'kolkata': [
    'Park Street', 'Camac Street', 'Esplanade', 'BBD Bagh', 'Salt Lake Sector 1',
    'Salt Lake Sector 2', 'Salt Lake Sector 5', 'New Town Action Area 1', 'New Town Action Area 2',
    'Ballygunge', 'Gariahat', 'Alipore', 'Tollygunge', 'Jadavpur', 'Behala', 'Shyambazar',
    'Dum Dum', 'Lake Town', 'Howrah Station Area', 'Shibpur', 'Barasat', 'Rajarhat'
  ],
  'lucknow': [
    'Hazratganj', 'Gomti Nagar', 'Indira Nagar', 'Aliganj', 'Mahanagar', 'Alambagh',
    'Ashiyana', 'Vikas Nagar', 'Charbagh', 'Chowk', 'Jankipuram', 'Telibagh', 'Rajajipuram'
  ],
  'kanpur': [
    'Civil Lines', 'Swaroop Nagar', 'Kakadeo', 'Mall Road', 'Govind Nagar', 'Gumti No. 5',
    'Kidwai Nagar', 'Arya Nagar', 'Harsh Nagar', 'Cantt'
  ],
  'nagpur': [
    'Dharampeth', 'Sitabuldi', 'Ramdaspeth', 'Wardha Road', 'Sadar', 'Shankar Nagar',
    'Pratap Nagar', 'Manish Nagar', 'Civil Lines', 'Itwari Commercial Hub'
  ],
  'jaipur': [
    'C-Scheme', 'MI Road', 'Raja Park', 'Civil Lines', 'Malviya Nagar', 'Mansarovar',
    'Vaishali Nagar', 'Tonk Road', 'Jagatpura', 'Bani Park', 'Vidhyadhar Nagar', 'Ajmer Road'
  ],
  'indore': [
    'Vijay Nagar', 'Palasia', 'MG Road', 'Sapna Sangeeta', 'Bhawarkua', 'Rajwada',
    'Annapurna Road', 'AB Road', 'Super Corridor', 'Rau'
  ],
  'bhopal': [
    'MP Nagar Zone 1', 'MP Nagar Zone 2', 'Arera Colony', 'New Market', 'Kolar Road',
    'Shahpura', 'TT Nagar', 'Hoshangabad Road', 'Bairagarh'
  ],
  'chandigarh': [
    'Sector 17 Market', 'Sector 35', 'Sector 22', 'Sector 8', 'Sector 9', 'Sector 26',
    'Sector 43', 'Industrial Area Phase 1', 'Industrial Area Phase 2', 'Mohali Phase 7',
    'Mohali Phase 3B2', 'Sector 70 Mohali', 'Panchkula Sector 5'
  ],
  'patna': [
    'Boring Road', 'Fraser Road', 'Kankarbagh', 'Bailey Road', 'Exhibition Road',
    'Rajendra Nagar', 'Patliputra Colony', 'Ashiana Nagar', 'Danapur Cantt'
  ],
  'kochi': [
    'MG Road', 'Marine Drive', 'Panampilly Nagar', 'Kakkanad Infopark', 'Edappally',
    'Palarivattom', 'Vyttila Hub', 'Kaloor', 'Fort Kochi', 'Aluva Commercial Hub'
  ],
  'coimbatore': [
    'RS Puram', 'Gandhipuram', 'Peelamedu', 'Saibaba Colony', 'Race Course',
    'Ramanathapuram', 'Avinashi Road', 'Saravanampatti IT Corridor'
  ]
};

function getCategorySynonyms(keyword) {
  if (!keyword) return ['business', 'services'];
  const clean = keyword.toLowerCase().trim();

  for (const [key, syns] of Object.entries(CATEGORY_SYNONYMS)) {
    if (clean.includes(key) || key.includes(clean)) {
      return syns;
    }
  }

  return [
    clean,
    `${clean} clinic`,
    `${clean} center`,
    `${clean} services`,
    `${clean} shop`,
    `best ${clean}`
  ];
}

/**
 * Extracts discrete micro-neighborhoods and commercial zones for a city.
 * Correctly parses parenthetical localities like "Central Delhi (Connaught Place / Karol Bagh / Paharganj)"
 * and matches dedicated neighborhood maps or generates authentic commercial hubs.
 */
function extractSubzonesForCity(rawCityName, district = '') {
  const zones = new Set();
  
  // 1. Check if name contains parentheses e.g. "Central Delhi (Connaught Place / Karol Bagh / Paharganj)"
  const parenMatch = rawCityName.match(/^(.*?)\s*\((.*?)\)$/);
  let baseName = rawCityName;
  if (parenMatch) {
    baseName = parenMatch[1].trim();
    const inside = parenMatch[2];
    const parts = inside.split(/[\/,]/).map(p => p.trim()).filter(Boolean);
    for (const part of parts) {
      zones.add(part);
    }
  }

  // 2. Check CITY_SUBZONES for baseName or district
  const cleanName = baseName.toLowerCase();
  const cleanDist = (district || '').toLowerCase();
  
  let matchedCityZones = null;
  for (const [key, list] of Object.entries(CITY_SUBZONES)) {
    if (cleanName.includes(key) || cleanDist.includes(key) || key.includes(cleanName)) {
      matchedCityZones = list;
      break;
    }
  }

  if (matchedCityZones) {
    for (const z of matchedCityZones) {
      zones.add(z);
    }
  }

  // 3. Ensure authentic local commercial centers exist for every town/city
  if (zones.size < 4) {
    zones.add(`${baseName} Main Market / Sadar Bazar`);
    zones.add(`${baseName} Station Road Commercial Chowk`);
    zones.add(`${baseName} Civil Lines & Court Area`);
    zones.add(`${baseName} Gandhi Nagar & Model Town`);
    zones.add(`${baseName} Industrial Area / MIDC`);
    zones.add(`${baseName} Bus Stand Commercial Hub`);
  }

  return Array.from(zones);
}

/**
 * Decomposes an Indian state / city search into high-yield micro-queries.
 * Ensures 100% geographic coverage across all cities, districts, and micro-localities.
 */
function buildStatewideDecompositionQueue(stateName, specificNiche = '', targetLimit = 1000) {
  const { getStateData } = require('./geoData');
  const stateGeo = getStateData(stateName);

  const queries = [];
  const seen = new Set();

  const cleanNiche = (specificNiche || '').trim().toLowerCase();
  const isAutoAll = !cleanNiche || ['all', 'auto', 'everything', 'any', 'all niches', 'all keywords', 'auto-scrape'].includes(cleanNiche);

  // 1. Gather all cities and revenue districts from stateGeo
  const cityItems = [...stateGeo.cities];

  // Include any revenue districts from stateGeo.districts not yet listed in stateGeo.cities
  const coveredDistNames = new Set(
    stateGeo.cities.map(c => (c.district || c.name || '').toLowerCase().trim())
  );

  for (const district of stateGeo.districts || []) {
    const distClean = district.toLowerCase().trim();
    if (!coveredDistNames.has(distClean)) {
      coveredDistNames.add(distClean);
      cityItems.push({
        name: district,
        district: district,
        pin: stateGeo.cities[0]?.pin || '500001',
        lat: stateGeo.cities[0]?.lat || 20.5937,
        lon: stateGeo.cities[0]?.lon || 78.9629
      });
    }
  }

  // 2. Iterate through every city/district and extract every discrete sub-zone
  for (const city of cityItems) {
    const subzones = extractSubzonesForCity(city.name, city.district);

    for (const zone of subzones) {
      if (!isAutoAll) {
        // Targeted Specific Niche Mode (e.g. "Dentist", "Dental Clinic", "Orthodontist")
        const synonyms = getCategorySynonyms(cleanNiche);
        for (const syn of synonyms.slice(0, 6)) {
          // Uniqueness key MUST include syn, zone, city, and state to prevent dropping identical zones in different cities!
          const key = `${syn}::${zone}::${city.name}::${stateGeo.name}`.toLowerCase();
          if (!seen.has(key)) {
            seen.add(key);
            queries.push({
              state: stateGeo.name,
              city: city.name,
              district: city.district || zone,
              zone: zone,
              pin: city.pin || '',
              lat: city.lat,
              lon: city.lon,
              category: cleanNiche,
              searchKeyword: syn,
              query: `${syn} in ${zone}, ${city.name}`
            });
          }
        }
      } else {
        // Auto-Scrape EVERY Business Keyword across the entire state!
        for (const biz of ALL_BUSINESS_KEYWORDS) {
          const key = `${biz.keyword}::${zone}::${city.name}::${stateGeo.name}`.toLowerCase();
          if (!seen.has(key)) {
            seen.add(key);
            queries.push({
              state: stateGeo.name,
              city: city.name,
              district: city.district || zone,
              zone: zone,
              pin: city.pin || '',
              lat: city.lat,
              lon: city.lon,
              category: biz.category,
              searchKeyword: biz.keyword,
              tags: biz.tags,
              query: `${biz.keyword} in ${zone}, ${city.name}`
            });
          }
        }
      }
    }
  }

  return queries;
}

module.exports = {
  ALL_BUSINESS_KEYWORDS,
  CATEGORY_SYNONYMS,
  CITY_SUBZONES,
  getCategorySynonyms,
  extractSubzonesForCity,
  buildStatewideDecompositionQueue
};
