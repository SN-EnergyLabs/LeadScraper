// Comprehensive Geographic Breakdown & Business Taxonomy Registry for India
// Covers all 28 States and 8 Union Territories with 400+ commercial cities, revenue districts, real PIN codes, and coordinates.

const INDIA_STATES = {
  'Maharashtra': {
    code: 'MH',
    districts: [
      'Mumbai City', 'Mumbai Suburban', 'Pune', 'Nagpur', 'Thane', 'Nashik',
      'Chhatrapati Sambhajinagar', 'Solapur', 'Kolhapur', 'Pimpri-Chinchwad',
      'Kalyan-Dombivli', 'Vasai-Virar', 'Amravati', 'Nanded', 'Sangli',
      'Jalgaon', 'Akola', 'Latur', 'Dhule', 'Ahmednagar', 'Chandrapur',
      'Parbhani', 'Jalna', 'Panvel', 'Satara', 'Beed', 'Yavatmal', 'Gondia',
      'Wardha', 'Osmanabad (Dharashiv)', 'Ratnagiri', 'Palghar', 'Raigad'
    ],
    cities: [
      { name: 'Mumbai South (Colaba / Nariman Point / Fort)', district: 'Mumbai City', pin: '400001', lat: 18.9220, lon: 72.8347 },
      { name: 'Mumbai Central (Dadar / Lower Parel / Worli)', district: 'Mumbai City', pin: '400013', lat: 19.0016, lon: 72.8258 },
      { name: 'Mumbai Western Suburbs (Bandra / Andheri / Juhu)', district: 'Mumbai Suburban', pin: '400050', lat: 19.0596, lon: 72.8295 },
      { name: 'Mumbai North Western (Borivali / Kandivali / Malad)', district: 'Mumbai Suburban', pin: '400092', lat: 19.2307, lon: 72.8567 },
      { name: 'Mumbai Eastern Suburbs (Ghatkopar / Powai / Chembur)', district: 'Mumbai Suburban', pin: '400077', lat: 19.0860, lon: 72.9090 },
      { name: 'Thane West (Ghodbunder / Naupada / Majiwada)', district: 'Thane', pin: '400601', lat: 19.2183, lon: 72.9781 },
      { name: 'Navi Mumbai (Vashi / Nerul / Belapur / Kharghar)', district: 'Thane', pin: '400703', lat: 19.0330, lon: 73.0297 },
      { name: 'Kalyan-Dombivli', district: 'Thane', pin: '421301', lat: 19.2403, lon: 73.1305 },
      { name: 'Vasai-Virar', district: 'Palghar', pin: '401201', lat: 19.3919, lon: 72.8397 },
      { name: 'Mira-Bhayandar', district: 'Thane', pin: '401107', lat: 19.2812, lon: 72.8561 },
      { name: 'Pune Central (Shivajinagar / FC Road / Camp)', district: 'Pune', pin: '411005', lat: 18.5204, lon: 73.8567 },
      { name: 'Pune East (Viman Nagar / Kalyani Nagar / Hadapsar)', district: 'Pune', pin: '411014', lat: 18.5679, lon: 73.9143 },
      { name: 'Pune West (Kothrud / Baner / Aundh / Bavdhan)', district: 'Pune', pin: '411038', lat: 18.5074, lon: 73.8077 },
      { name: 'Pune IT Corridor (Hinjewadi Phase 1, 2, 3 / Wakad)', district: 'Pune', pin: '411057', lat: 18.5913, lon: 73.7389 },
      { name: 'Pimpri-Chinchwad (Nigdi / Bhosari / Chakan)', district: 'Pune', pin: '411017', lat: 18.6298, lon: 73.7997 },
      { name: 'Nagpur (Dharampeth / Sitabuldi / Wardha Rd)', district: 'Nagpur', pin: '440001', lat: 21.1458, lon: 79.0882 },
      { name: 'Nashik (College Road / Gangapur / Panchavati)', district: 'Nashik', pin: '422001', lat: 19.9975, lon: 73.7898 },
      { name: 'Chhatrapati Sambhajinagar (Aurangabad)', district: 'Aurangabad', pin: '431001', lat: 19.8762, lon: 75.3433 },
      { name: 'Solapur', district: 'Solapur', pin: '413001', lat: 17.6599, lon: 75.9064 },
      { name: 'Kolhapur (Rajarampuri / Tarabai Park)', district: 'Kolhapur', pin: '416001', lat: 16.7050, lon: 74.2433 },
      { name: 'Amravati', district: 'Amravati', pin: '444601', lat: 20.9320, lon: 77.7523 },
      { name: 'Nanded-Waghala', district: 'Nanded', pin: '431601', lat: 19.1383, lon: 77.3210 },
      { name: 'Sangli-Miraj', district: 'Sangli', pin: '416416', lat: 16.8524, lon: 74.5815 },
      { name: 'Jalgaon', district: 'Jalgaon', pin: '425001', lat: 21.0077, lon: 75.5626 },
      { name: 'Akola', district: 'Akola', pin: '444001', lat: 20.7002, lon: 77.0082 },
      { name: 'Latur', district: 'Latur', pin: '413512', lat: 18.4088, lon: 76.5604 },
      { name: 'Dhule', district: 'Dhule', pin: '424001', lat: 20.9042, lon: 74.7749 },
      { name: 'Ahmednagar', district: 'Ahmednagar', pin: '414001', lat: 19.0952, lon: 74.7480 },
      { name: 'Chandrapur', district: 'Chandrapur', pin: '442401', lat: 19.9615, lon: 79.2961 },
      { name: 'Panvel (Navi Mumbai Extension)', district: 'Raigad', pin: '410206', lat: 18.9894, lon: 73.1175 },
      { name: 'Satara', district: 'Satara', pin: '415001', lat: 17.6805, lon: 73.9934 },
      { name: 'Jalna', district: 'Jalna', pin: '431203', lat: 19.8347, lon: 75.8800 },
      { name: 'Beed', district: 'Beed', pin: '431122', lat: 18.9891, lon: 75.7601 },
      { name: 'Yavatmal', district: 'Yavatmal', pin: '445001', lat: 20.3888, lon: 78.1204 },
      { name: 'Ratnagiri', district: 'Ratnagiri', pin: '415612', lat: 16.9902, lon: 73.3120 }
    ]
  },
  'Delhi': {
    code: 'DL',
    districts: [
      'New Delhi', 'North Delhi', 'North West Delhi', 'West Delhi', 'South West Delhi',
      'South Delhi', 'South East Delhi', 'Central Delhi', 'North East Delhi', 'East Delhi', 'Shahdara'
    ],
    cities: [
      { name: 'Central Delhi (Connaught Place / Karol Bagh / Paharganj)', district: 'Central Delhi', pin: '110001', lat: 28.6315, lon: 77.2167 },
      { name: 'South Delhi (Saket / Hauz Khas / Greater Kailash / Malviya Nagar)', district: 'South Delhi', pin: '110017', lat: 28.5244, lon: 77.2177 },
      { name: 'South East Delhi (Lajpat Nagar / Kalkaji / Nehru Place / Okhla)', district: 'South East Delhi', pin: '110024', lat: 28.5700, lon: 77.2400 },
      { name: 'South West Delhi (Dwarka Sector 6, 10, 12, 21 / Vasant Kunj)', district: 'South West Delhi', pin: '110075', lat: 28.5921, lon: 77.0460 },
      { name: 'West Delhi (Rajouri Garden / Punjabi Bagh / Janakpuri / Tilak Nagar)', district: 'West Delhi', pin: '110027', lat: 28.6415, lon: 77.1209 },
      { name: 'West Delhi Extension (Paschim Vihar / Uttam Nagar / Vikaspuri)', district: 'West Delhi', pin: '110063', lat: 28.6692, lon: 77.1000 },
      { name: 'North Delhi (Civil Lines / Model Town / Kamla Nagar / Chandni Chowk)', district: 'North Delhi', pin: '110054', lat: 28.6836, lon: 77.2227 },
      { name: 'North West Delhi (Rohini Sector 3, 7, 9, 13, 24 / Pitampura / Shalimar Bagh)', district: 'North West Delhi', pin: '110085', lat: 28.7150, lon: 77.1200 },
      { name: 'East Delhi (Laxmi Nagar / Preet Vihar / Anand Vihar / Patparganj)', district: 'East Delhi', pin: '110092', lat: 28.6312, lon: 77.2776 },
      { name: 'East Delhi (Mayur Vihar Phase 1, Phase 2, Phase 3)', district: 'East Delhi', pin: '110091', lat: 28.6080, lon: 77.2960 },
      { name: 'North East Delhi (Shahdara / Dilshad Garden / Yamuna Vihar)', district: 'Shahdara', pin: '110032', lat: 28.6734, lon: 77.2880 },
      { name: 'New Delhi VIP (Chanakyapuri / Khan Market / Lodhi Road / Defence Colony)', district: 'New Delhi', pin: '110021', lat: 28.5900, lon: 77.1900 },
      { name: 'Noida (Sector 18 / Sector 62 / Sector 50 / Sector 137)', district: 'Gautam Buddha Nagar', pin: '201301', lat: 28.5355, lon: 77.3910 },
      { name: 'Greater Noida (Pari Chowk / Knowledge Park / Noida Extension)', district: 'Gautam Buddha Nagar', pin: '201310', lat: 28.4744, lon: 77.5040 },
      { name: 'Gurugram (Cyber City / Golf Course Road / Sohna Road / Sector 29)', district: 'Gurugram', pin: '122002', lat: 28.4595, lon: 77.0266 },
      { name: 'Faridabad (Sector 15 / Sector 16 / NIT / Greenfield)', district: 'Faridabad', pin: '121001', lat: 28.4089, lon: 77.3178 },
      { name: 'Ghaziabad (Indirapuram / Vaishali / Vasundhara / Raj Nagar)', district: 'Ghaziabad', pin: '201014', lat: 28.6692, lon: 77.4538 }
    ]
  },
  'Karnataka': {
    code: 'KA',
    districts: [
      'Bengaluru Urban', 'Bengaluru Rural', 'Mysuru', 'Dharwad', 'Dakshina Kannada',
      'Belagavi', 'Kalaburagi', 'Davanagere', 'Ballari', 'Vijayapura', 'Tumakuru',
      'Shivamogga', 'Raichur', 'Bidar', 'Hospet (Vijayanagara)', 'Hassan', 'Udupi',
      'Kolar', 'Mandya', 'Chikkamagaluru', 'Bagalkot', 'Gadag', 'Haveri', 'Chitradurga'
    ],
    cities: [
      { name: 'Bengaluru Central (MG Road / Richmond Town / Malleshwaram)', district: 'Bengaluru Urban', pin: '560001', lat: 12.9716, lon: 77.5946 },
      { name: 'Bengaluru East (Indiranagar / Whitefield / Marathahalli / KR Puram)', district: 'Bengaluru Urban', pin: '560038', lat: 12.9784, lon: 77.6408 },
      { name: 'Bengaluru South (Koramangala / HSR Layout / BTM / Jayanagar / JP Nagar)', district: 'Bengaluru Urban', pin: '560034', lat: 12.9352, lon: 77.6245 },
      { name: 'Bengaluru Tech Corridors (Electronic City Phase 1 & 2 / Bellandur / Sarjapur)', district: 'Bengaluru Urban', pin: '560100', lat: 12.8452, lon: 77.6602 },
      { name: 'Bengaluru North (Hebbal / Yelahanka / Kalyan Nagar / RT Nagar)', district: 'Bengaluru Urban', pin: '560024', lat: 13.0358, lon: 77.5970 },
      { name: 'Bengaluru West (Rajajinagar / Vijayanagar / Banashankari / Kengeri)', district: 'Bengaluru Urban', pin: '560010', lat: 12.9915, lon: 77.5520 },
      { name: 'Mysuru (Gokulam / Jayalakshmipuram / Vijayanagar)', district: 'Mysuru', pin: '570001', lat: 12.2958, lon: 76.6394 },
      { name: 'Hubballi-Dharwad (Vidyanagar / Gokul Road / PB Road)', district: 'Dharwad', pin: '580020', lat: 15.3647, lon: 75.1240 },
      { name: 'Mangaluru (Hampankatta / Kadri / Bejai / Lalbagh)', district: 'Dakshina Kannada', pin: '575001', lat: 12.9141, lon: 74.8560 },
      { name: 'Belagavi (Tilakwadi / Camp / Shahapur)', district: 'Belagavi', pin: '590001', lat: 15.8497, lon: 74.4977 },
      { name: 'Kalaburagi (Gulbarga)', district: 'Kalaburagi', pin: '585101', lat: 17.3297, lon: 76.8343 },
      { name: 'Davanagere', district: 'Davanagere', pin: '577001', lat: 14.4644, lon: 75.9218 },
      { name: 'Ballari (Bellary)', district: 'Ballari', pin: '583101', lat: 15.1394, lon: 76.9214 },
      { name: 'Vijayapura (Bijapur)', district: 'Vijayapura', pin: '586101', lat: 16.8302, lon: 75.7100 },
      { name: 'Shivamogga (Shimoga)', district: 'Shivamogga', pin: '577201', lat: 13.9299, lon: 75.5681 },
      { name: 'Tumakuru (Tumkur)', district: 'Tumakuru', pin: '572101', lat: 13.3409, lon: 77.1010 },
      { name: 'Udupi-Manipal', district: 'Udupi', pin: '576101', lat: 13.3409, lon: 74.7421 },
      { name: 'Hassan', district: 'Hassan', pin: '573201', lat: 13.0072, lon: 76.0963 },
      { name: 'Hosapete (Hampi Vijayanagara)', district: 'Vijayanagara', pin: '583201', lat: 15.2689, lon: 76.3909 },
      { name: 'Raichur', district: 'Raichur', pin: '584101', lat: 16.2076, lon: 77.3463 },
      { name: 'Bidar', district: 'Bidar', pin: '585401', lat: 17.9104, lon: 77.5199 }
    ]
  },
  'Tamil Nadu': {
    code: 'TN',
    districts: [
      'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli',
      'Tiruppur', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur',
      'Ranipet', 'Sivakasi', 'Karur', 'Nilgiris (Ooty)', 'Kanchipuram', 'Cuddalore',
      'Hosur (Krishnagiri)', 'Nagercoil (Kanyakumari)', 'Kumbakonam', 'Tiruvannamalai'
    ],
    cities: [
      { name: 'Chennai Central (T. Nagar / Nungambakkam / Mylapore / Alwarpet)', district: 'Chennai', pin: '600017', lat: 13.0418, lon: 80.2341 },
      { name: 'Chennai South (Adyar / Velachery / Besant Nagar / Thiruvanmiyur)', district: 'Chennai', pin: '600020', lat: 13.0012, lon: 80.2565 },
      { name: 'Chennai OMR IT Corridor (Kandanchavadi / Perungudi / Sholinganallur)', district: 'Chennai', pin: '600096', lat: 12.9352, lon: 80.2290 },
      { name: 'Chennai West (Anna Nagar / Kilpauk / Vadapalani / Porur)', district: 'Chennai', pin: '600040', lat: 13.0850, lon: 80.2101 },
      { name: 'Chennai North & Suburbs (Tambaram / Guindy / Chromepet / Ambattur)', district: 'Chennai', pin: '600045', lat: 12.9249, lon: 80.1000 },
      { name: 'Coimbatore (Gandhipuram / RS Puram / Peelamedu / Saibaba Colony)', district: 'Coimbatore', pin: '641001', lat: 11.0168, lon: 76.9558 },
      { name: 'Madurai (KK Nagar / Anna Nagar / Simmakkal / Goripalayam)', district: 'Madurai', pin: '625001', lat: 9.9252, lon: 78.1198 },
      { name: 'Tiruchirappalli (Trichy - Thillai Nagar / Cantonment / Srirangam)', district: 'Tiruchirappalli', pin: '620001', lat: 10.7905, lon: 78.7047 },
      { name: 'Salem (Fairlands / Alagapuram / Suramangalam)', district: 'Salem', pin: '636001', lat: 11.6643, lon: 78.1460 },
      { name: 'Tiruppur (Kumar Nagar / Avinashi Road)', district: 'Tiruppur', pin: '641601', lat: 11.1085, lon: 77.3411 },
      { name: 'Erode', district: 'Erode', pin: '638001', lat: 11.3410, lon: 77.7172 },
      { name: 'Vellore (Katpadi / Gandhi Nagar)', district: 'Vellore', pin: '632001', lat: 12.9165, lon: 79.1325 },
      { name: 'Tirunelveli (Palayamkottai / Junction)', district: 'Tirunelveli', pin: '627001', lat: 8.7139, lon: 77.7567 },
      { name: 'Thoothukudi (Tuticorin)', district: 'Thoothukudi', pin: '628001', lat: 8.7642, lon: 78.1348 },
      { name: 'Thanjavur (Tanjore)', district: 'Thanjavur', pin: '613001', lat: 10.7870, lon: 79.1378 },
      { name: 'Hosur Industrial Hub', district: 'Krishnagiri', pin: '635109', lat: 12.7409, lon: 77.8253 },
      { name: 'Nagercoil (Kanyakumari)', district: 'Kanyakumari', pin: '629001', lat: 8.1833, lon: 77.4119 },
      { name: 'Kanchipuram', district: 'Kanchipuram', pin: '631501', lat: 12.8342, lon: 79.7036 },
      { name: 'Dindigul', district: 'Dindigul', pin: '624001', lat: 10.3673, lon: 77.9803 }
    ]
  },
  'Uttar Pradesh': {
    code: 'UP',
    districts: [
      'Lucknow', 'Kanpur Nagar', 'Gautam Buddha Nagar (Noida)', 'Ghaziabad', 'Varanasi',
      'Agra', 'Prayagraj', 'Meerut', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur',
      'Gorakhpur', 'Firozabad', 'Jhansi', 'Muzaffarnagar', 'Mathura', 'Ayodhya',
      'Rampur', 'Shahjahanpur', 'Farrukhabad', 'Hapur', 'Etawah', 'Mirzapur', 'Bulandshahr'
    ],
    cities: [
      { name: 'Lucknow (Hazratganj / Gomti Nagar / Aliganj / Indira Nagar)', district: 'Lucknow', pin: '226001', lat: 26.8467, lon: 80.9462 },
      { name: 'Lucknow South (Alambagh / Ashiyana / Mahanagar / Charbagh)', district: 'Lucknow', pin: '226005', lat: 26.8100, lon: 80.9100 },
      { name: 'Kanpur (Civil Lines / Swaroop Nagar / Kakadeo / Mall Road)', district: 'Kanpur Nagar', pin: '208001', lat: 26.4499, lon: 80.3319 },
      { name: 'Noida (Sector 18 / Sector 62 / Sector 50 / Sector 137)', district: 'Gautam Buddha Nagar', pin: '201301', lat: 28.5355, lon: 77.3910 },
      { name: 'Greater Noida (Pari Chowk / Knowledge Park / Alpha / Beta)', district: 'Gautam Buddha Nagar', pin: '201310', lat: 28.4744, lon: 77.5040 },
      { name: 'Ghaziabad (Indirapuram / Vaishali / Vasundhara / Raj Nagar)', district: 'Ghaziabad', pin: '201001', lat: 28.6692, lon: 77.4538 },
      { name: 'Varanasi (Sigra / Godowlia / Lanka / Cantt / Bhelupur)', district: 'Varanasi', pin: '221001', lat: 25.3176, lon: 82.9739 },
      { name: 'Agra (Sanjay Place / Tajganj / Dayalbagh / Kamla Nagar)', district: 'Agra', pin: '282001', lat: 27.1767, lon: 78.0081 },
      { name: 'Prayagraj (Civil Lines / Katra / Georgetown / Ashok Nagar)', district: 'Prayagraj', pin: '211001', lat: 25.4358, lon: 81.8463 },
      { name: 'Meerut (Civil Lines / Shastri Nagar / Abu Lane)', district: 'Meerut', pin: '250001', lat: 28.9845, lon: 77.7064 },
      { name: 'Bareilly (Civil Lines / Rajendra Nagar)', district: 'Bareilly', pin: '243001', lat: 28.3670, lon: 79.4304 },
      { name: 'Aligarh (Centre Point / Marris Road / Civil Lines)', district: 'Aligarh', pin: '202001', lat: 27.8974, lon: 78.0880 },
      { name: 'Moradabad', district: 'Moradabad', pin: '244001', lat: 28.8386, lon: 78.7733 },
      { name: 'Saharanpur', district: 'Saharanpur', pin: '247001', lat: 29.9679, lon: 77.5452 },
      { name: 'Gorakhpur (Golghar / Civil Lines / Betiahata)', district: 'Gorakhpur', pin: '273001', lat: 26.7606, lon: 83.3732 },
      { name: 'Jhansi (Sadarbazar / Sipri Bazar / Elite)', district: 'Jhansi', pin: '284001', lat: 25.4484, lon: 78.5685 },
      { name: 'Mathura-Vrindavan', district: 'Mathura', pin: '281001', lat: 27.4924, lon: 77.6737 },
      { name: 'Ayodhya (Faizabad)', district: 'Ayodhya', pin: '224001', lat: 26.7922, lon: 82.1998 },
      { name: 'Muzaffarnagar', district: 'Muzaffarnagar', pin: '251001', lat: 29.4727, lon: 77.7085 },
      { name: 'Firozabad', district: 'Firozabad', pin: '283203', lat: 27.1593, lon: 78.3957 }
    ]
  },
  'Gujarat': {
    code: 'GJ',
    districts: [
      'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar',
      'Gandhinagar', 'Junagadh', 'Anand', 'Navsari', 'Morbi', 'Kheda (Nadiad)',
      'Surendranagar', 'Bharuch', 'Mehsana', 'Kutch (Bhuj)', 'Porbandar', 'Valsad (Vapi)'
    ],
    cities: [
      { name: 'Ahmedabad West (Satellite / Bodakdev / Vastrapur / SG Highway / Prahlad Nagar)', district: 'Ahmedabad', pin: '380015', lat: 23.0225, lon: 72.5714 },
      { name: 'Ahmedabad Central (Navrangpura / C.G. Road / Ashram Road / Paldi)', district: 'Ahmedabad', pin: '380009', lat: 23.0360, lon: 72.5600 },
      { name: 'Ahmedabad East (Maninagar / Nikol / Naroda / Bopal)', district: 'Ahmedabad', pin: '380008', lat: 22.9980, lon: 72.6020 },
      { name: 'Surat (Adajan / Vesu / Athwa Lines / Piplod / City Light)', district: 'Surat', pin: '395007', lat: 21.1702, lon: 72.8311 },
      { name: 'Surat Diamond & Textile Hub (Varachha / Ring Road / Katargam)', district: 'Surat', pin: '395006', lat: 21.2100, lon: 72.8500 },
      { name: 'Vadodara (Alkapuri / Gotri / Sayajigunj / Fatehgunj / Manjalpur)', district: 'Vadodara', pin: '390007', lat: 22.3072, lon: 73.1812 },
      { name: 'Rajkot (Kalawad Road / Yagnik Road / University Road)', district: 'Rajkot', pin: '360001', lat: 22.3039, lon: 70.8022 },
      { name: 'Gandhinagar (Sector 11 / Sector 21 / Infocity / GIFT City)', district: 'Gandhinagar', pin: '382010', lat: 23.2156, lon: 72.6369 },
      { name: 'Bhavnagar', district: 'Bhavnagar', pin: '364001', lat: 21.7645, lon: 72.1519 },
      { name: 'Jamnagar', district: 'Jamnagar', pin: '361001', lat: 22.4707, lon: 70.0577 },
      { name: 'Junagadh', district: 'Junagadh', pin: '362001', lat: 21.5222, lon: 70.4579 },
      { name: 'Anand (Milk City / Vidyanagar)', district: 'Anand', pin: '388001', lat: 22.5645, lon: 72.9289 },
      { name: 'Morbi Ceramic Hub', district: 'Morbi', pin: '363641', lat: 22.8120, lon: 70.8378 },
      { name: 'Navsari', district: 'Navsari', pin: '396445', lat: 20.9467, lon: 72.9520 },
      { name: 'Nadiad', district: 'Kheda', pin: '387001', lat: 22.6916, lon: 72.8634 },
      { name: 'Bharuch-Ankleshwar', district: 'Bharuch', pin: '392001', lat: 21.7051, lon: 72.9959 },
      { name: 'Vapi-Valsad Industrial Area', district: 'Valsad', pin: '396191', lat: 20.3893, lon: 72.9106 },
      { name: 'Bhuj (Kutch)', district: 'Kutch', pin: '370001', lat: 23.2420, lon: 69.6669 }
    ]
  },
  'West Bengal': {
    code: 'WB',
    districts: [
      'Kolkata', 'North 24 Parganas', 'South 24 Parganas', 'Howrah', 'Paschim Bardhaman',
      'Purba Bardhaman', 'Darjeeling', 'Malda', 'Murshidabad', 'Paschim Medinipur',
      'Purba Medinipur', 'Nadia', 'Hooghly', 'Jalpaiguri'
    ],
    cities: [
      { name: 'Kolkata Central (Park Street / Camac Street / Esplanade / BBD Bagh)', district: 'Kolkata', pin: '700016', lat: 22.5535, lon: 88.3524 },
      { name: 'Kolkata East & IT Hub (Salt Lake Sector 1, 2, 5 / New Town Action Area 1, 2)', district: 'North 24 Parganas', pin: '700091', lat: 22.5800, lon: 88.4200 },
      { name: 'Kolkata South (Ballygunge / Gariahat / Alipore / Tollygunge / Jadavpur)', district: 'Kolkata', pin: '700019', lat: 22.5200, lon: 88.3600 },
      { name: 'Kolkata North (Shyambazar / Dum Dum / Baguiati / Lake Town / Barasat)', district: 'North 24 Parganas', pin: '700028', lat: 22.6200, lon: 88.3800 },
      { name: 'Howrah (Station Area / Shibpur / Salkia / Mandirtala)', district: 'Howrah', pin: '711101', lat: 22.5958, lon: 88.2636 },
      { name: 'Siliguri (Sevoke Road / Hill Cart Road / Pradhan Nagar)', district: 'Darjeeling', pin: '734001', lat: 26.7271, lon: 88.3953 },
      { name: 'Durgapur (City Centre / Benachity / B-Zone)', district: 'Paschim Bardhaman', pin: '713201', lat: 23.5204, lon: 87.3119 },
      { name: 'Asansol (Burnpur / GT Road / Ushagram)', district: 'Paschim Bardhaman', pin: '713301', lat: 23.6739, lon: 86.9524 },
      { name: 'Bardhaman (Burdwan)', district: 'Purba Bardhaman', pin: '713101', lat: 23.2324, lon: 87.8615 },
      { name: 'Kharagpur', district: 'Paschim Medinipur', pin: '721301', lat: 22.3302, lon: 87.3237 },
      { name: 'Haldia Port City', district: 'Purba Medinipur', pin: '721605', lat: 22.0620, lon: 88.0820 },
      { name: 'Baharampur', district: 'Murshidabad', pin: '742101', lat: 24.1000, lon: 88.2500 },
      { name: 'Malda', district: 'Malda', pin: '732101', lat: 25.0108, lon: 88.1411 }
    ]
  },
  'Rajasthan': {
    code: 'RJ',
    districts: [
      'Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner', 'Ajmer', 'Bhilwara',
      'Alwar', 'Bharatpur', 'Sikar', 'Pali', 'Sri Ganganagar', 'Hanumangarh'
    ],
    cities: [
      { name: 'Jaipur Central (C-Scheme / MI Road / Raja Park / Civil Lines)', district: 'Jaipur', pin: '302001', lat: 26.9124, lon: 75.7873 },
      { name: 'Jaipur South & West (Vaishali Nagar / Mansarovar / Malviya Nagar / Tonk Road)', district: 'Jaipur', pin: '302021', lat: 26.8900, lon: 75.7500 },
      { name: 'Jaipur North (Vidhyadhar Nagar / Bani Park / Jagatpura / Sodala)', district: 'Jaipur', pin: '302039', lat: 26.9600, lon: 75.7800 },
      { name: 'Jodhpur (Sardarpura / Ratanada / Shastri Nagar / Paota)', district: 'Jodhpur', pin: '342001', lat: 26.2389, lon: 73.0243 },
      { name: 'Udaipur (Panchwati / Hiran Magri / Fatehpura / Sukher)', district: 'Udaipur', pin: '313001', lat: 24.5854, lon: 73.7125 },
      { name: 'Kota Coaching Hub (Talwandi / Vigyan Nagar / Gumanpura / Dadabari)', district: 'Kota', pin: '324001', lat: 25.2138, lon: 75.8648 },
      { name: 'Ajmer (Civil Lines / Panchsheel / Kaiser Ganj)', district: 'Ajmer', pin: '305001', lat: 26.4499, lon: 74.6399 },
      { name: 'Bikaner', district: 'Bikaner', pin: '334001', lat: 28.0229, lon: 73.3119 },
      { name: 'Bhilwara Textile City', district: 'Bhilwara', pin: '311001', lat: 25.3407, lon: 74.6313 },
      { name: 'Alwar', district: 'Alwar', pin: '301001', lat: 27.5530, lon: 76.6346 },
      { name: 'Sikar', district: 'Sikar', pin: '332001', lat: 27.6094, lon: 75.1398 },
      { name: 'Sri Ganganagar', district: 'Sri Ganganagar', pin: '335001', lat: 29.9038, lon: 73.8772 }
    ]
  },
  'Telangana': {
    code: 'TG',
    districts: [
      'Hyderabad', 'Rangareddy', 'Medchal-Malkajgiri', 'Warangal', 'Nizamabad',
      'Karimnagar', 'Ramagundam', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Suryapet', 'Siddipet'
    ],
    cities: [
      { name: 'Hyderabad IT Corridor (Hitec City / Gachibowli / Madhapur / Kondapur)', district: 'Hyderabad', pin: '500081', lat: 17.4435, lon: 78.3772 },
      { name: 'Hyderabad Central (Banjara Hills / Jubilee Hills / Somajiguda / Begumpet)', district: 'Hyderabad', pin: '500034', lat: 17.4156, lon: 78.4350 },
      { name: 'Hyderabad North & Secunderabad (Kukatpally / KPHB / Ameerpet / Secunderabad)', district: 'Hyderabad', pin: '500072', lat: 17.4933, lon: 78.3914 },
      { name: 'Hyderabad South & East (Dilsukhnagar / LB Nagar / Uppal / Mehdipatnam)', district: 'Hyderabad', pin: '500060', lat: 17.3688, lon: 78.5247 },
      { name: 'Warangal-Hanamkonda', district: 'Warangal', pin: '506001', lat: 17.9689, lon: 79.5941 },
      { name: 'Nizamabad', district: 'Nizamabad', pin: '503001', lat: 18.6725, lon: 78.0941 },
      { name: 'Karimnagar', district: 'Karimnagar', pin: '505001', lat: 18.4386, lon: 79.1288 },
      { name: 'Ramagundam', district: 'Peddapalli', pin: '505208', lat: 18.7557, lon: 79.5130 },
      { name: 'Khammam', district: 'Khammam', pin: '507001', lat: 17.2473, lon: 80.1514 },
      { name: 'Mahbubnagar', district: 'Mahbubnagar', pin: '509001', lat: 16.7488, lon: 77.9856 }
    ]
  },
  'Andhra Pradesh': {
    code: 'AP',
    districts: [
      'Visakhapatnam', 'Krishna (Vijayawada)', 'Guntur', 'SPSR Nellore', 'Kurnool',
      'Kakinada', 'East Godavari (Rajahmundry)', 'YSR Kadapa', 'Tirupati', 'Anantapur',
      'Vizianagaram', 'Eluru', 'Prakasam (Ongole)'
    ],
    cities: [
      { name: 'Visakhapatnam (Dwaraka Nagar / MVP Colony / Gajuwaka / Siripuram)', district: 'Visakhapatnam', pin: '530016', lat: 17.6868, lon: 83.2185 },
      { name: 'Vijayawada (Benz Circle / MG Road / Governorpet / Labbipet)', district: 'NTR', pin: '520010', lat: 16.5062, lon: 80.6480 },
      { name: 'Guntur (Arundelpet / Brodipet / Lakshmipuram)', district: 'Guntur', pin: '522002', lat: 16.3067, lon: 80.4365 },
      { name: 'Tirupati Temple City', district: 'Tirupati', pin: '517501', lat: 13.6288, lon: 79.4192 },
      { name: 'Nellore', district: 'SPSR Nellore', pin: '524001', lat: 14.4426, lon: 79.9865 },
      { name: 'Kurnool', district: 'Kurnool', pin: '518001', lat: 15.8281, lon: 78.0373 },
      { name: 'Kakinada', district: 'Kakinada', pin: '533001', lat: 16.9891, lon: 82.2475 },
      { name: 'Rajahmundry (Rajamahendravaram)', district: 'East Godavari', pin: '533101', lat: 17.0005, lon: 81.8040 },
      { name: 'Kadapa (Cuddapah)', district: 'YSR Kadapa', pin: '516001', lat: 14.4673, lon: 78.8242 },
      { name: 'Anantapur', district: 'Anantapur', pin: '515001', lat: 14.6819, lon: 77.6006 },
      { name: 'Ongole', district: 'Prakasam', pin: '523001', lat: 15.5057, lon: 80.0499 }
    ]
  },
  'Madhya Pradesh': {
    code: 'MP',
    districts: [
      'Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas',
      'Satna', 'Ratlam', 'Rewa', 'Katni', 'Singrauli', 'Burhanpur', 'Khandwa'
    ],
    cities: [
      { name: 'Indore (Vijay Nagar / Palasia / MG Road / Bhawarkua)', district: 'Indore', pin: '452010', lat: 22.7196, lon: 75.8577 },
      { name: 'Bhopal (MP Nagar / Arera Colony / New Market / Kolar Rd)', district: 'Bhopal', pin: '462011', lat: 23.2599, lon: 77.4126 },
      { name: 'Jabalpur (Napier Town / Wright Town / Civil Lines)', district: 'Jabalpur', pin: '482001', lat: 23.1815, lon: 79.9864 },
      { name: 'Gwalior (City Center / Lashkar / Morar / Padav)', district: 'Gwalior', pin: '474011', lat: 26.2183, lon: 78.1828 },
      { name: 'Ujjain (Freeganj / Nanakheda / Rishi Nagar)', district: 'Ujjain', pin: '456010', lat: 23.1765, lon: 75.7885 },
      { name: 'Sagar', district: 'Sagar', pin: '470001', lat: 23.8388, lon: 78.7378 },
      { name: 'Dewas', district: 'Dewas', pin: '455001', lat: 22.9676, lon: 76.0534 },
      { name: 'Satna', district: 'Satna', pin: '485001', lat: 24.6005, lon: 80.8322 },
      { name: 'Ratlam', district: 'Ratlam', pin: '457001', lat: 23.3315, lon: 75.0367 },
      { name: 'Rewa', district: 'Rewa', pin: '486001', lat: 24.5373, lon: 81.3042 }
    ]
  },
  'Kerala': {
    code: 'KL',
    districts: [
      'Ernakulam', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam',
      'Alappuzha', 'Palakkad', 'Malappuram', 'Kannur', 'Kottayam', 'Kasaragod'
    ],
    cities: [
      { name: 'Kochi (MG Road / Kakkanad Infopark / Edappally / Marine Drive / Panampilly)', district: 'Ernakulam', pin: '682016', lat: 9.9312, lon: 76.2673 },
      { name: 'Thiruvananthapuram (Pattom / Kowdiar / Kazhakoottam Technopark / Palayam)', district: 'Thiruvananthapuram', pin: '695001', lat: 8.5241, lon: 76.9366 },
      { name: 'Kozhikode (Mavoor Road / SM Street / Palayam / Nadakkavu)', district: 'Kozhikode', pin: '673001', lat: 11.2588, lon: 75.7804 },
      { name: 'Thrissur Cultural Capital (Round / Swaraj Round / West Fort)', district: 'Thrissur', pin: '680001', lat: 10.5276, lon: 76.2144 },
      { name: 'Kollam (Chinnakada / Kadappakada / Ashramam)', district: 'Kollam', pin: '691001', lat: 8.8932, lon: 76.6141 },
      { name: 'Alappuzha (Alleppey)', district: 'Alappuzha', pin: '688001', lat: 9.4981, lon: 76.3388 },
      { name: 'Palakkad', district: 'Palakkad', pin: '678001', lat: 10.7867, lon: 76.6548 },
      { name: 'Kannur', district: 'Kannur', pin: '670001', lat: 11.8745, lon: 75.3704 },
      { name: 'Kottayam', district: 'Kottayam', pin: '686001', lat: 9.5916, lon: 76.5222 }
    ]
  },
  'Punjab': {
    code: 'PB',
    districts: [
      'Ludhiana', 'Amritsar', 'Jalandhar', 'SAS Nagar (Mohali)', 'Patiala',
      'Bathinda', 'Hoshiarpur', 'Pathankot', 'Moga', 'Abohar', 'Khanna'
    ],
    cities: [
      { name: 'Ludhiana (Model Town / Sarabha Nagar / Ferozepur Rd / Civil Lines)', district: 'Ludhiana', pin: '141001', lat: 30.9010, lon: 75.8573 },
      { name: 'Amritsar (Mall Road / Ranjit Avenue / Lawrence Road)', district: 'Amritsar', pin: '143001', lat: 31.6340, lon: 74.8723 },
      { name: 'Jalandhar (Model Town / BMC Chowk / Cantt / Rama Mandi)', district: 'Jalandhar', pin: '144001', lat: 31.3260, lon: 75.5762 },
      { name: 'SAS Nagar (Mohali Phase 3B2, 5, 7, 8 / Sector 70)', district: 'SAS Nagar', pin: '160055', lat: 30.7046, lon: 76.7179 },
      { name: 'Patiala (Leela Bhawan / Model Town / Baradari)', district: 'Patiala', pin: '147001', lat: 30.3398, lon: 76.3869 },
      { name: 'Bathinda (Mall Road / Model Town / Civil Lines)', district: 'Bathinda', pin: '151001', lat: 30.2110, lon: 74.9455 },
      { name: 'Pathankot', district: 'Pathankot', pin: '145001', lat: 32.2689, lon: 75.6499 },
      { name: 'Hoshiarpur', district: 'Hoshiarpur', pin: '146001', lat: 31.5143, lon: 75.9115 }
    ]
  },
  'Haryana': {
    code: 'HR',
    districts: [
      'Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak',
      'Hisar', 'Karnal', 'Sonipat', 'Panchkula', 'Bhiwani', 'Sirsa', 'Rewari'
    ],
    cities: [
      { name: 'Gurugram (Cyber City / Golf Course Rd / Sohna Rd / DLF Phase 1-5)', district: 'Gurugram', pin: '122002', lat: 28.4595, lon: 77.0266 },
      { name: 'Faridabad (Sector 15 / Sector 16 / NIT 1-5 / Greenfield)', district: 'Faridabad', pin: '121001', lat: 28.4089, lon: 77.3178 },
      { name: 'Panipat Textile City', district: 'Panipat', pin: '132103', lat: 29.3909, lon: 76.9635 },
      { name: 'Ambala (Cantonment / City / Sadar Bazar)', district: 'Ambala', pin: '134003', lat: 30.3782, lon: 76.7767 },
      { name: 'Karnal (Sector 12 / Model Town)', district: 'Karnal', pin: '132001', lat: 29.6857, lon: 76.9905 },
      { name: 'Rohtak', district: 'Rohtak', pin: '124001', lat: 28.8955, lon: 76.6066 },
      { name: 'Hisar', district: 'Hisar', pin: '125001', lat: 29.1492, lon: 75.7217 },
      { name: 'Sonipat', district: 'Sonipat', pin: '131001', lat: 28.9931, lon: 77.0151 },
      { name: 'Panchkula (Sector 5, 7, 8, 11, 20)', district: 'Panchkula', pin: '134109', lat: 30.6942, lon: 76.8606 }
    ]
  },
  'Bihar': {
    code: 'BR',
    districts: [
      'Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga',
      'Bihar Sharif', 'Arrah', 'Begusarai', 'Katihar', 'Munger', 'Chhapra', 'Hajipur'
    ],
    cities: [
      { name: 'Patna (Boring Road / Bailey Road / Kankarbagh / Fraser Road / Danapur)', district: 'Patna', pin: '800001', lat: 25.5941, lon: 85.1376 },
      { name: 'Gaya', district: 'Gaya', pin: '823001', lat: 24.7914, lon: 85.0002 },
      { name: 'Bhagalpur Silk City', district: 'Bhagalpur', pin: '812001', lat: 25.2425, lon: 86.9842 },
      { name: 'Muzaffarpur', district: 'Muzaffarpur', pin: '842001', lat: 26.1209, lon: 85.3647 },
      { name: 'Purnia', district: 'Purnia', pin: '854301', lat: 25.7771, lon: 87.4753 },
      { name: 'Darbhanga', district: 'Darbhanga', pin: '846004', lat: 26.1542, lon: 85.8918 },
      { name: 'Bihar Sharif (Nalanda)', district: 'Nalanda', pin: '803101', lat: 25.1982, lon: 85.5149 },
      { name: 'Begusarai', district: 'Begusarai', pin: '851101', lat: 25.4182, lon: 86.1272 }
    ]
  },
  'Odisha': {
    code: 'OD',
    districts: [
      'Khordha (Bhubaneswar)', 'Cuttack', 'Sundargarh (Rourkela)', 'Ganjam (Berhampur)',
      'Sambalpur', 'Puri', 'Balasore', 'Bhadrak', 'Jharsuguda', 'Angul'
    ],
    cities: [
      { name: 'Bhubaneswar (Saheed Nagar / Patia / Jaydev Vihar / Chandrasekharpur)', district: 'Khordha', pin: '751001', lat: 20.2961, lon: 85.8245 },
      { name: 'Cuttack (Badambadi / Buxi Bazar / Link Road)', district: 'Cuttack', pin: '753001', lat: 20.4625, lon: 85.8828 },
      { name: 'Rourkela Steel City (Civil Township / Panposh)', district: 'Sundargarh', pin: '769001', lat: 22.2604, lon: 84.8536 },
      { name: 'Berhampur (Brahmapur)', district: 'Ganjam', pin: '760001', lat: 19.3150, lon: 84.7941 },
      { name: 'Sambalpur', district: 'Sambalpur', pin: '768001', lat: 21.4669, lon: 83.9812 },
      { name: 'Puri Coastal Town', district: 'Puri', pin: '752001', lat: 19.8135, lon: 85.8312 },
      { name: 'Balasore', district: 'Balasore', pin: '756001', lat: 21.4934, lon: 86.9135 }
    ]
  },
  'Assam': {
    code: 'AS',
    districts: [
      'Kamrup Metro (Guwahati)', 'Cachar (Silchar)', 'Dibrugarh', 'Jorhat',
      'Nagaon', 'Tinsukia', 'Sonitpur (Tezpur)', 'Bongaigaon'
    ],
    cities: [
      { name: 'Guwahati (GS Road / Christian Basti / Dispur / Ganeshguri / Paltan Bazar)', district: 'Kamrup Metro', pin: '781001', lat: 26.1445, lon: 91.7362 },
      { name: 'Silchar', district: 'Cachar', pin: '788001', lat: 24.8333, lon: 92.7789 },
      { name: 'Dibrugarh Tea City', district: 'Dibrugarh', pin: '786001', lat: 27.4728, lon: 94.9120 },
      { name: 'Jorhat', district: 'Jorhat', pin: '785001', lat: 26.7509, lon: 94.2037 },
      { name: 'Nagaon', district: 'Nagaon', pin: '782001', lat: 26.3462, lon: 92.6840 },
      { name: 'Tinsukia', district: 'Tinsukia', pin: '786125', lat: 27.4922, lon: 95.3468 }
    ]
  },
  'Jharkhand': {
    code: 'JH',
    districts: [
      'Ranchi', 'East Singhbhum (Jamshedpur)', 'Dhanbad', 'Bokaro',
      'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh'
    ],
    cities: [
      { name: 'Ranchi (Main Road / Lalpur / Doranda / Harmu / Morabadi)', district: 'Ranchi', pin: '834001', lat: 23.3441, lon: 85.3096 },
      { name: 'Jamshedpur (Bistupur / Sakchi / Kadma / Telco / Sonari)', district: 'East Singhbhum', pin: '831001', lat: 22.8046, lon: 86.2029 },
      { name: 'Dhanbad Coal Capital (Bank More / Saraidhela / Hirapur)', district: 'Dhanbad', pin: '826001', lat: 23.7957, lon: 86.4304 },
      { name: 'Bokaro Steel City (Sector 4 / City Centre)', district: 'Bokaro', pin: '827004', lat: 23.6693, lon: 86.1511 },
      { name: 'Deoghar', district: 'Deoghar', pin: '814112', lat: 24.4826, lon: 86.7000 },
      { name: 'Hazaribagh', district: 'Hazaribagh', pin: '825301', lat: 23.9966, lon: 85.3644 }
    ]
  },
  'Chhattisgarh': {
    code: 'CG',
    districts: [
      'Raipur', 'Durg (Bhilai)', 'Bilaspur', 'Korba', 'Rajnandgaon', 'Raigarh', 'Bastar (Jagdalpur)'
    ],
    cities: [
      { name: 'Raipur (Pandri / Telibandha / Shankar Nagar / Civil Lines)', district: 'Raipur', pin: '492001', lat: 21.2514, lon: 81.6296 },
      { name: 'Bhilai-Durg Steel Hub (Sector 6 / Supela / Nehru Nagar)', district: 'Durg', pin: '490006', lat: 21.2121, lon: 81.3733 },
      { name: 'Bilaspur', district: 'Bilaspur', pin: '495001', lat: 22.0797, lon: 82.1409 },
      { name: 'Korba Energy Hub', district: 'Korba', pin: '495677', lat: 22.3595, lon: 82.7501 },
      { name: 'Rajnandgaon', district: 'Rajnandgaon', pin: '491441', lat: 21.0974, lon: 81.0374 },
      { name: 'Raigarh', district: 'Raigarh', pin: '496001', lat: 21.8974, lon: 83.3950 }
    ]
  },
  'Uttarakhand': {
    code: 'UK',
    districts: ['Dehradun', 'Haridwar', 'Nainital (Haldwani)', 'Udham Singh Nagar (Rudrapur)', 'Almora', 'Pauri Garhwal'],
    cities: [
      { name: 'Dehradun (Rajpur Road / Chakrata Road / Patel Nagar / Ballupur)', district: 'Dehradun', pin: '248001', lat: 30.3165, lon: 78.0322 },
      { name: 'Haridwar (Ranipur / Jwalapur / Har Ki Pauri)', district: 'Haridwar', pin: '249401', lat: 29.9457, lon: 78.1642 },
      { name: 'Roorkee IIT Town', district: 'Haridwar', pin: '247667', lat: 29.8543, lon: 77.8880 },
      { name: 'Haldwani-Kathgodam (Nainital Gateway)', district: 'Nainital', pin: '263139', lat: 29.2183, lon: 79.5130 },
      { name: 'Rudrapur-Pantnagar', district: 'Udham Singh Nagar', pin: '263153', lat: 28.9800, lon: 79.4000 },
      { name: 'Rishikesh Yoga Capital', district: 'Dehradun', pin: '249201', lat: 30.0869, lon: 78.2676 }
    ]
  },
  'Himachal Pradesh': {
    code: 'HP',
    districts: ['Shimla', 'Kangra (Dharamshala)', 'Solan', 'Mandi', 'Kullu (Manali)', 'Hamirpur'],
    cities: [
      { name: 'Shimla (Mall Road / Sanjauli / Chotta Shimla / New Shimla)', district: 'Shimla', pin: '171001', lat: 31.1048, lon: 77.1734 },
      { name: 'Dharamshala-McLeodGanj', district: 'Kangra', pin: '176215', lat: 32.2190, lon: 76.3234 },
      { name: 'Solan Industrial Hub', district: 'Solan', pin: '173212', lat: 30.9084, lon: 77.0999 },
      { name: 'Baddi Pharma Corridor', district: 'Solan', pin: '173205', lat: 30.9578, lon: 76.7914 },
      { name: 'Mandi', district: 'Mandi', pin: '175001', lat: 31.7087, lon: 76.9320 },
      { name: 'Kullu-Manali Tourism Center', district: 'Kullu', pin: '175131', lat: 32.2396, lon: 77.1887 }
    ]
  },
  'Goa': {
    code: 'GA',
    districts: ['North Goa', 'South Goa'],
    cities: [
      { name: 'Panaji (Panjim / Miramar / Campal)', district: 'North Goa', pin: '403001', lat: 15.4909, lon: 73.8278 },
      { name: 'Margao (Madgaon / Fatorda / Aquem)', district: 'South Goa', pin: '403601', lat: 15.2832, lon: 73.9862 },
      { name: 'Vasco da Gama (Mormugao / Chicalim)', district: 'South Goa', pin: '403802', lat: 15.3995, lon: 73.8124 },
      { name: 'Mapusa (Commercial Market)', district: 'North Goa', pin: '403507', lat: 15.5937, lon: 73.8142 },
      { name: 'Ponda', district: 'South Goa', pin: '403401', lat: 15.4026, lon: 74.0152 },
      { name: 'Coastal Belt (Calangute / Candolim / Baga / Anjuna)', district: 'North Goa', pin: '403516', lat: 15.5440, lon: 73.7550 }
    ]
  },
  'Chandigarh': {
    code: 'CH',
    districts: ['Chandigarh'],
    cities: [
      { name: 'Chandigarh Central (Sector 17 / Sector 22 / Sector 35 / Sector 34)', district: 'Chandigarh', pin: '160017', lat: 30.7333, lon: 76.7794 },
      { name: 'Chandigarh North (Sector 8 / Sector 9 / Sector 10 / Sector 11)', district: 'Chandigarh', pin: '160009', lat: 30.7500, lon: 76.7900 },
      { name: 'Chandigarh South (Sector 43 / Sector 44 / Sector 47)', district: 'Chandigarh', pin: '160047', lat: 30.7100, lon: 76.7500 },
      { name: 'Chandigarh Industrial Area Phase 1 & 2', district: 'Chandigarh', pin: '160002', lat: 30.7055, lon: 76.8013 },
      { name: 'Manimajra / IT Park', district: 'Chandigarh', pin: '160101', lat: 30.7250, lon: 76.8350 }
    ]
  },
  'Jammu and Kashmir': {
    code: 'JK',
    districts: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Kathua', 'Udhampur', 'Sopore', 'Pulwama', 'Kupwara', 'Budgam'],
    cities: [
      { name: 'Srinagar (Lal Chowk / Rajbagh / Karan Nagar / Batamaloo)', district: 'Srinagar', pin: '190001', lat: 34.0837, lon: 74.7973 },
      { name: 'Jammu (Gandhi Nagar / Residency Road / Trikuta Nagar / Bahu Plaza)', district: 'Jammu', pin: '180001', lat: 32.7266, lon: 74.8570 },
      { name: 'Anantnag (Islamabad)', district: 'Anantnag', pin: '192101', lat: 33.7311, lon: 75.1522 },
      { name: 'Baramulla', district: 'Baramulla', pin: '193101', lat: 34.2090, lon: 74.3436 },
      { name: 'Udhampur', district: 'Udhampur', pin: '182101', lat: 32.9254, lon: 75.1416 }
    ]
  },
  'Tripura': {
    code: 'TR',
    districts: ['West Tripura', 'North Tripura', 'South Tripura', 'Dhalai', 'Gomati', 'Khowai', 'Sepahijala', 'Unakoti'],
    cities: [
      { name: 'Agartala (City Centre / Banamalipur / GB Bazar)', district: 'West Tripura', pin: '799001', lat: 23.8315, lon: 91.2868 },
      { name: 'Dharmanagar', district: 'North Tripura', pin: '799250', lat: 24.3725, lon: 92.1642 },
      { name: 'Udaipur', district: 'Gomati', pin: '799120', lat: 23.5333, lon: 91.4833 }
    ]
  },
  'Meghalaya': {
    code: 'ML',
    districts: ['East Khasi Hills', 'West Garo Hills', 'Ri-Bhoi', 'West Jaintia Hills', 'East Jaintia Hills'],
    cities: [
      { name: 'Shillong (Police Bazar / Laitumkhrah / Laban / Nongthymmai)', district: 'East Khasi Hills', pin: '793001', lat: 25.5788, lon: 91.8933 },
      { name: 'Tura', district: 'West Garo Hills', pin: '794001', lat: 25.5141, lon: 90.2033 },
      { name: 'Jowai', district: 'West Jaintia Hills', pin: '793150', lat: 25.4500, lon: 92.2000 }
    ]
  },
  'Manipur': {
    code: 'MN',
    districts: ['Imphal West', 'Imphal East', 'Churachandpur', 'Thoubal', 'Bishnupur', 'Kakching', 'Ukhrul'],
    cities: [
      { name: 'Imphal (Thangal Bazar / Paona Bazar / Lamphelpat)', district: 'Imphal West', pin: '795001', lat: 24.8170, lon: 93.9368 },
      { name: 'Churachandpur', district: 'Churachandpur', pin: '795128', lat: 24.3333, lon: 93.6833 },
      { name: 'Thoubal', district: 'Thoubal', pin: '795138', lat: 24.6333, lon: 94.0167 }
    ]
  },
  'Nagaland': {
    code: 'NL',
    districts: ['Dimapur', 'Kohima', 'Mokokchung', 'Wokha', 'Mon', 'Chumoukedima', 'Tuensang'],
    cities: [
      { name: 'Dimapur (Hongkong Market / Circular Road / Nyamo Lotha)', district: 'Dimapur', pin: '797112', lat: 25.9094, lon: 93.7266 },
      { name: 'Kohima (Main Town / High School Junction / Razhu Point)', district: 'Kohima', pin: '797001', lat: 25.6751, lon: 94.1086 },
      { name: 'Mokokchung', district: 'Mokokchung', pin: '798601', lat: 26.3249, lon: 94.5298 }
    ]
  },
  'Mizoram': {
    code: 'MZ',
    districts: ['Aizawl', 'Lunglei', 'Champhai', 'Kolasib', 'Serchhip', 'Mamit'],
    cities: [
      { name: 'Aizawl (Bara Bazar / Zarkawt / Chanmari / Khatla)', district: 'Aizawl', pin: '796001', lat: 23.7271, lon: 92.7176 },
      { name: 'Lunglei', district: 'Lunglei', pin: '796701', lat: 22.8872, lon: 92.7419 },
      { name: 'Champhai', district: 'Champhai', pin: '796321', lat: 23.4756, lon: 93.3283 }
    ]
  },
  'Arunachal Pradesh': {
    code: 'AR',
    districts: ['Papum Pare', 'West Kameng', 'East Siang', 'Changlang', 'Tawang', 'Lower Subansiri'],
    cities: [
      { name: 'Itanagar (Ganga Market / Zero Point / Bank Tinali)', district: 'Papum Pare', pin: '791111', lat: 27.0844, lon: 93.6053 },
      { name: 'Naharlagun', district: 'Papum Pare', pin: '791110', lat: 27.1060, lon: 93.6933 },
      { name: 'Pasighat', district: 'East Siang', pin: '791102', lat: 28.0667, lon: 95.3333 }
    ]
  },
  'Sikkim': {
    code: 'SK',
    districts: ['East Sikkim (Gangtok)', 'West Sikkim (Geyzing)', 'South Sikkim (Namchi)', 'North Sikkim (Mangan)'],
    cities: [
      { name: 'Gangtok (MG Marg / Deorali / Lal Bazar)', district: 'East Sikkim', pin: '737101', lat: 27.3389, lon: 88.6065 },
      { name: 'Namchi', district: 'South Sikkim', pin: '737126', lat: 27.1667, lon: 88.3500 },
      { name: 'Geyzing', district: 'West Sikkim', pin: '737111', lat: 27.2833, lon: 88.2500 }
    ]
  },
  'Puducherry': {
    code: 'PY',
    districts: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'],
    cities: [
      { name: 'Puducherry (White Town / Heritage Town / Anna Salai / MG Road)', district: 'Puducherry', pin: '605001', lat: 11.9416, lon: 79.8083 },
      { name: 'Oulgaret Suburbs', district: 'Puducherry', pin: '605009', lat: 11.9570, lon: 79.7890 },
      { name: 'Karaikal Port City', district: 'Karaikal', pin: '609602', lat: 10.9254, lon: 79.8380 }
    ]
  },
  'Ladakh': {
    code: 'LA',
    districts: ['Leh', 'Kargil'],
    cities: [
      { name: 'Leh (Main Market / Changspa / Fort Road)', district: 'Leh', pin: '194101', lat: 34.1526, lon: 77.5771 },
      { name: 'Kargil', district: 'Kargil', pin: '194103', lat: 34.5539, lon: 76.1349 }
    ]
  },
  'Andaman and Nicobar Islands': {
    code: 'AN',
    districts: ['South Andaman', 'North and Middle Andaman', 'Nicobar'],
    cities: [
      { name: 'Port Blair (Aberdeen Bazar / Junglighat / Phoenix Bay)', district: 'South Andaman', pin: '744101', lat: 11.6234, lon: 92.7265 }
    ]
  },
  'Dadra and Nagar Haveli and Daman and Diu': {
    code: 'DN',
    districts: ['Daman', 'Diu', 'Dadra and Nagar Haveli'],
    cities: [
      { name: 'Daman (Nani Daman / Moti Daman)', district: 'Daman', pin: '396210', lat: 20.3974, lon: 72.8328 },
      { name: 'Silvassa Industrial Hub', district: 'Dadra and Nagar Haveli', pin: '396230', lat: 20.2763, lon: 73.0083 },
      { name: 'Diu Coastal City', district: 'Diu', pin: '362520', lat: 20.7144, lon: 70.9874 }
    ]
  },
  'Lakshadweep': {
    code: 'LD',
    districts: ['Lakshadweep'],
    cities: [
      { name: 'Kavaratti Island', district: 'Lakshadweep', pin: '682555', lat: 10.5667, lon: 72.6417 }
    ]
  }
};

// All 28 States and 8 Union Territories of India
const ALL_INDIA_STATES_LIST = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  // Union Territories
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

// Rich Business Industry Taxonomy tailored for Indian Commerce
const BUSINESS_CATEGORIES = [
  { id: 'healthcare_dental', name: 'Healthcare & Dental', tags: ['dentist', 'clinic', 'dental_care', 'orthodontist', 'dental_implant'] },
  { id: 'healthcare_medical', name: 'Doctors & Medical Polyclinics', tags: ['physician', 'doctors', 'polyclinic', 'pediatrician', 'gynecologist'] },
  { id: 'hospitals_nursing', name: 'Hospitals & Nursing Homes', tags: ['hospital', 'maternity', 'emergency', 'healthcare'] },
  { id: 'diagnostics_labs', name: 'Diagnostics, Pathology & Imaging', tags: ['pathology', 'blood_test', 'xray', 'mri_scan', 'ultrasound'] },
  { id: 'pharmacy_health', name: 'Pharmacies & Chemist Stores', tags: ['pharmacy', 'chemist', 'druggist', 'medical_store'] },
  { id: 'ayurveda_wellness', name: 'Ayurveda & Homeopathy Clinics', tags: ['ayurveda', 'panchakarma', 'homeopathy', 'naturopathy'] },
  { id: 'ca_finance', name: 'Chartered Accountants (CA) & GST', tags: ['accountant', 'tax_advisor', 'gst_filing', 'audit', 'financial_advisor'] },
  { id: 'legal_advocate', name: 'Advocates, Lawyers & Legal Firms', tags: ['lawyer', 'advocate', 'legal_counsel', 'high_court', 'notary'] },
  { id: 'home_services', name: 'Home Services (Plumbing, Electrical, AC)', tags: ['electrician', 'plumber', 'ac_repair', 'hvac', 'carpenter', 'painter'] },
  { id: 'auto_services', name: 'Automotive Garages & Bike Care', tags: ['car_repair', 'motorcycle_repair', 'car_wash', 'detailing', 'tyres'] },
  { id: 'fitness_gym', name: 'Gyms, Fitness & Yoga Studios', tags: ['gym', 'fitness_centre', 'crossfit', 'yoga_studio', 'health_club'] },
  { id: 'beauty_grooming', name: 'Beauty Salons, Spa & Parlours', tags: ['hairdresser', 'unisex_salon', 'beauty_parlour', 'barber', 'spa'] },
  { id: 'restaurants_food', name: 'Restaurants, Dining & Dhabas', tags: ['restaurant', 'dining', 'thali', 'biryani', 'fast_food'] },
  { id: 'cafes_bakeries', name: 'Cafes, Bakeries & Sweets', tags: ['cafe', 'coffee_shop', 'bakery', 'sweets_mithai', 'confectionery'] },
  { id: 'retail_kirana', name: 'Kirana, Supermarkets & Grocery', tags: ['supermarket', 'convenience', 'grocery', 'organic_food', 'dairy'] },
  { id: 'trade_construction', name: 'Hardware, Sanitary & Building Marts', tags: ['hardware', 'sanitaryware', 'paint', 'plywood', 'tiles_marble'] },
  { id: 'electronics_mobile', name: 'Mobile, Laptop & Electronics Care', tags: ['electronics', 'mobile_phone', 'laptop_repair', 'cctv'] },
  { id: 'education_coaching', name: 'Coaching Classes & Academies', tags: ['coaching_classes', 'tuition', 'iit_jee', 'neet', 'ielts'] },
  { id: 'real_estate_arch', name: 'Real Estate, Architects & Interior', tags: ['real_estate', 'property_dealer', 'architect', 'interior_designer'] },
  { id: 'logistics_transport', name: 'Packers & Movers, Courier Logistics', tags: ['packers_movers', 'transport', 'courier', 'cargo'] },
  { id: 'travel_taxi', name: 'Travel Agencies & Taxi Services', tags: ['travel_agent', 'taxi_service', 'tour_packages', 'cabs'] },
  { id: 'events_wedding', name: 'Wedding Photography & Event Venues', tags: ['photographer', 'event_planner', 'banquet_hall', 'catering'] },
  { id: 'fashion_apparel', name: 'Boutiques, Tailoring & Jewellery', tags: ['boutique', 'tailoring', 'jewellery', 'footwear'] },
  { id: 'pet_care', name: 'Pet Care, Vets & Animal Clinics', tags: ['vet_clinic', 'pet_doctor', 'pet_shop'] },
  { id: 'commercial_security', name: 'Commercial Services & Security', tags: ['security_agency', 'printing_press', 'signboards'] }
];

// Known foreign countries, US states, and international cities to explicitly detect and reject out-of-India scraping
const KNOWN_FOREIGN_REGIONS = new Set([
  // Countries & Continents
  'usa', 'united states', 'united states of america', 'us', 'uk', 'united kingdom', 'england',
  'great britain', 'scotland', 'wales', 'canada', 'australia', 'new zealand', 'germany',
  'france', 'italy', 'spain', 'netherlands', 'switzerland', 'sweden', 'norway', 'russia',
  'china', 'japan', 'south korea', 'thailand', 'malaysia', 'indonesia', 'singapore', 'philippines',
  'vietnam', 'uae', 'united arab emirates', 'dubai', 'abu dhabi', 'saudi arabia', 'qatar',
  'kuwait', 'bahrain', 'oman', 'south africa', 'brazil', 'mexico', 'argentina', 'colombia',
  'pakistan', 'bangladesh', 'sri lanka', 'nepal', 'bhutan', 'myanmar', 'turkey', 'egypt',
  'nigeria', 'kenya', 'ireland', 'belgium', 'austria', 'poland', 'portugal', 'greece',
  'europe', 'north america', 'south america', 'africa', 'asia',
  // US States
  'california', 'texas', 'florida', 'new york', 'pennsylvania', 'illinois', 'ohio',
  'georgia', 'north carolina', 'michigan', 'new jersey', 'virginia', 'washington',
  'arizona', 'tennessee', 'massachusetts', 'indiana', 'missouri', 'maryland', 'wisconsin',
  'colorado', 'minnesota', 'south carolina', 'alabama', 'louisiana', 'kentucky', 'oregon',
  'oklahoma', 'connecticut', 'utah', 'iowa', 'nevada', 'arkansas', 'mississippi', 'kansas',
  'new mexico', 'nebraska', 'idaho', 'west virginia', 'hawaii', 'new hampshire', 'maine',
  'montana', 'rhode island', 'delaware', 'south dakota', 'north dakota', 'alaska', 'vermont', 'wyoming',
  // Major International Cities
  'london', 'manchester', 'birmingham', 'paris', 'berlin', 'munich', 'frankfurt', 'amsterdam',
  'rotterdam', 'rome', 'milan', 'madrid', 'barcelona', 'tokyo', 'osaka', 'seoul', 'beijing',
  'shanghai', 'hong kong', 'bangkok', 'kuala lumpur', 'jakarta', 'manila', 'sydney',
  'melbourne', 'brisbane', 'perth', 'auckland', 'toronto', 'vancouver', 'montreal', 'calgary',
  'ottawa', 'new york city', 'nyc', 'los angeles', 'la', 'chicago', 'houston', 'phoenix',
  'philadelphia', 'san antonio', 'san diego', 'dallas', 'san jose', 'austin', 'jacksonville',
  'san francisco', 'columbus', 'fort worth', 'indianapolis', 'charlotte', 'seattle', 'denver',
  'boston', 'el paso', 'nashville', 'detroit', 'oklahoma city', 'portland', 'las vegas',
  'memphis', 'louisville', 'baltimore', 'milwaukee', 'albuquerque', 'tucson', 'fresno',
  'sacramento', 'mesa', 'atlanta', 'kansas city', 'colorado springs', 'omaha', 'raleigh',
  'miami', 'long beach', 'virginia beach', 'oakland', 'minneapolis', 'tulsa', 'tampa',
  'arlington', 'new orleans', 'wichita', 'cleveland', 'bakersfield', 'aurora', 'anaheim',
  'honolulu', 'santa ana', 'riverside', 'corpus christi', 'lexington', 'stockton', 'henderson',
  'saint paul', 'st. louis', 'cincinnati', 'pittsburgh', 'greensboro', 'anchorage', 'plano',
  'lincoln', 'orlando', 'irvine', 'newark', 'toledo', 'durham', 'chula vista', 'fort wayne',
  'jersey city', 'st. petersburg', 'laredo', 'madison', 'chandler', 'buffalo', 'lubbock',
  'scottsdale', 'reno', 'glendale', 'gilbert', 'winston-salem', 'north las vegas', 'norfolk',
  'chesapeake', 'garland', 'irving', 'hialeah', 'fremont', 'boise', 'richmond', 'baton rouge',
  'spokane', 'des moines', 'tacoma', 'san bernardino', 'modesto', 'fontana', 'santa clarita',
  'dubai', 'sharjah', 'ajman', 'al ain', 'doha', 'riyadh', 'jeddah', 'dammam', 'manama', 'muscat',
  'kuwait city', 'karachi', 'lahore', 'islamabad', 'rawalpindi', 'faisalabad', 'dhaka', 'chittagong',
  'colombo', 'kathmandu', 'thimphu'
]);

// Canonical aliases for Indian cities, historical names, and acronyms
const INDIAN_ALIASES = {
  // Metro and Major City Aliases
  'bangalore': { state: 'Karnataka', city: 'Bengaluru' },
  'bengaluru': { state: 'Karnataka', city: 'Bengaluru' },
  'bombay': { state: 'Maharashtra', city: 'Mumbai' },
  'mumbai': { state: 'Maharashtra', city: 'Mumbai' },
  'navi mumbai': { state: 'Maharashtra', city: 'Navi Mumbai' },
  'calcutta': { state: 'West Bengal', city: 'Kolkata' },
  'kolkata': { state: 'West Bengal', city: 'Kolkata' },
  'madras': { state: 'Tamil Nadu', city: 'Chennai' },
  'chennai': { state: 'Tamil Nadu', city: 'Chennai' },
  'gurgaon': { state: 'Haryana', city: 'Gurugram' },
  'gurugram': { state: 'Haryana', city: 'Gurugram' },
  'noida': { state: 'Uttar Pradesh', city: 'Noida' },
  'greater noida': { state: 'Uttar Pradesh', city: 'Greater Noida' },
  'ghaziabad': { state: 'Uttar Pradesh', city: 'Ghaziabad' },
  'faridabad': { state: 'Haryana', city: 'Faridabad' },
  'delhi ncr': { state: 'Delhi', city: 'Delhi' },
  'ncr': { state: 'Delhi', city: 'Delhi' },
  'new delhi': { state: 'Delhi', city: 'Delhi' },
  'national capital region': { state: 'Delhi', city: 'Delhi' },
  'hyderabad': { state: 'Telangana', city: 'Hyderabad' },
  'secunderabad': { state: 'Telangana', city: 'Secunderabad' },
  'cyberabad': { state: 'Telangana', city: 'Hyderabad' },
  'pune': { state: 'Maharashtra', city: 'Pune' },
  'poona': { state: 'Maharashtra', city: 'Pune' },
  'ahmedabad': { state: 'Gujarat', city: 'Ahmedabad' },
  'amdavad': { state: 'Gujarat', city: 'Ahmedabad' },
  'baroda': { state: 'Gujarat', city: 'Vadodara' },
  'vadodara': { state: 'Gujarat', city: 'Vadodara' },
  'surat': { state: 'Gujarat', city: 'Surat' },
  'rajkot': { state: 'Gujarat', city: 'Rajkot' },
  'jaipur': { state: 'Rajasthan', city: 'Jaipur' },
  'pink city': { state: 'Rajasthan', city: 'Jaipur' },
  'jodhpur': { state: 'Rajasthan', city: 'Jodhpur' },
  'udaipur': { state: 'Rajasthan', city: 'Udaipur' },
  'kota': { state: 'Rajasthan', city: 'Kota' },
  'lucknow': { state: 'Uttar Pradesh', city: 'Lucknow' },
  'kanpur': { state: 'Uttar Pradesh', city: 'Kanpur' },
  'varanasi': { state: 'Uttar Pradesh', city: 'Varanasi' },
  'banaras': { state: 'Uttar Pradesh', city: 'Varanasi' },
  'kashi': { state: 'Uttar Pradesh', city: 'Varanasi' },
  'agra': { state: 'Uttar Pradesh', city: 'Agra' },
  'prayagraj': { state: 'Uttar Pradesh', city: 'Prayagraj' },
  'allahabad': { state: 'Uttar Pradesh', city: 'Prayagraj' },
  'indore': { state: 'Madhya Pradesh', city: 'Indore' },
  'bhopal': { state: 'Madhya Pradesh', city: 'Bhopal' },
  'gwalior': { state: 'Madhya Pradesh', city: 'Gwalior' },
  'jabalpur': { state: 'Madhya Pradesh', city: 'Jabalpur' },
  'patna': { state: 'Bihar', city: 'Patna' },
  'gaya': { state: 'Bihar', city: 'Gaya' },
  'muzaffarpur': { state: 'Bihar', city: 'Muzaffarpur' },
  'bhubaneswar': { state: 'Odisha', city: 'Bhubaneswar' },
  'bhubaneshwar': { state: 'Odisha', city: 'Bhubaneswar' },
  'cuttack': { state: 'Odisha', city: 'Cuttack' },
  'rourkela': { state: 'Odisha', city: 'Rourkela' },
  'chandigarh': { state: 'Chandigarh', city: 'Chandigarh' },
  'coimbatore': { state: 'Tamil Nadu', city: 'Coimbatore' },
  'madurai': { state: 'Tamil Nadu', city: 'Madurai' },
  'trichy': { state: 'Tamil Nadu', city: 'Tiruchirappalli' },
  'tiruchirappalli': { state: 'Tamil Nadu', city: 'Tiruchirappalli' },
  'salem': { state: 'Tamil Nadu', city: 'Salem' },
  'kochi': { state: 'Kerala', city: 'Kochi' },
  'cochin': { state: 'Kerala', city: 'Kochi' },
  'ernakulam': { state: 'Kerala', city: 'Kochi' },
  'trivandrum': { state: 'Kerala', city: 'Thiruvananthapuram' },
  'thiruvananthapuram': { state: 'Kerala', city: 'Thiruvananthapuram' },
  'calicut': { state: 'Kerala', city: 'Kozhikode' },
  'kozhikode': { state: 'Kerala', city: 'Kozhikode' },
  'thrissur': { state: 'Kerala', city: 'Thrissur' },
  'visakhapatnam': { state: 'Andhra Pradesh', city: 'Visakhapatnam' },
  'vizag': { state: 'Andhra Pradesh', city: 'Visakhapatnam' },
  'vijayawada': { state: 'Andhra Pradesh', city: 'Vijayawada' },
  'guntur': { state: 'Andhra Pradesh', city: 'Guntur' },
  'tirupati': { state: 'Andhra Pradesh', city: 'Tirupati' },
  'mysore': { state: 'Karnataka', city: 'Mysuru' },
  'mysuru': { state: 'Karnataka', city: 'Mysuru' },
  'mangalore': { state: 'Karnataka', city: 'Mangaluru' },
  'mangaluru': { state: 'Karnataka', city: 'Mangaluru' },
  'belgaum': { state: 'Karnataka', city: 'Belagavi' },
  'belagavi': { state: 'Karnataka', city: 'Belagavi' },
  'hubli': { state: 'Karnataka', city: 'Hubballi' },
  'hubballi': { state: 'Karnataka', city: 'Hubballi' },
  'amritsar': { state: 'Punjab', city: 'Amritsar' },
  'ludhiana': { state: 'Punjab', city: 'Ludhiana' },
  'jalandhar': { state: 'Punjab', city: 'Jalandhar' },
  'mohali': { state: 'Punjab', city: 'Mohali' },
  'dehradun': { state: 'Uttarakhand', city: 'Dehradun' },
  'haridwar': { state: 'Uttarakhand', city: 'Haridwar' },
  'rishikesh': { state: 'Uttarakhand', city: 'Rishikesh' },
  'shimla': { state: 'Himachal Pradesh', city: 'Shimla' },
  'dharamshala': { state: 'Himachal Pradesh', city: 'Dharamshala' },
  'manali': { state: 'Himachal Pradesh', city: 'Manali' },
  'srinagar': { state: 'Jammu and Kashmir', city: 'Srinagar' },
  'jammu': { state: 'Jammu and Kashmir', city: 'Jammu' },
  'ranchi': { state: 'Jharkhand', city: 'Ranchi' },
  'jamshedpur': { state: 'Jharkhand', city: 'Jamshedpur' },
  'dhanbad': { state: 'Jharkhand', city: 'Dhanbad' },
  'raipur': { state: 'Chhattisgarh', city: 'Raipur' },
  'bhilai': { state: 'Chhattisgarh', city: 'Bhilai' },
  'guwahati': { state: 'Assam', city: 'Guwahati' },
  'panaji': { state: 'Goa', city: 'Panaji' },
  'panjim': { state: 'Goa', city: 'Panaji' },
  'margao': { state: 'Goa', city: 'Margao' },
  'aurangabad': { state: 'Maharashtra', city: 'Chhatrapati Sambhajinagar' },
  'sambhajinagar': { state: 'Maharashtra', city: 'Chhatrapati Sambhajinagar' },
  'chhatrapati sambhajinagar': { state: 'Maharashtra', city: 'Chhatrapati Sambhajinagar' },
  'kolhapur': { state: 'Maharashtra', city: 'Kolhapur' },
  'nagpur': { state: 'Maharashtra', city: 'Nagpur' },
  'nashik': { state: 'Maharashtra', city: 'Nashik' },
  'nasik': { state: 'Maharashtra', city: 'Nashik' },
  'solapur': { state: 'Maharashtra', city: 'Solapur' },
  'thane': { state: 'Maharashtra', city: 'Thane' },
  'kalyan': { state: 'Maharashtra', city: 'Kalyan' },
  'dombivli': { state: 'Maharashtra', city: 'Kalyan' },
  'vasai': { state: 'Maharashtra', city: 'Vasai' },
  'virar': { state: 'Maharashtra', city: 'Vasai' },
  // State Historical & Short Names
  'orissa': { state: 'Odisha' },
  'uttaranchal': { state: 'Uttarakhand' },
  'j&k': { state: 'Jammu and Kashmir' },
  'jammu & kashmir': { state: 'Jammu and Kashmir' },
  'kashmir': { state: 'Jammu and Kashmir' },
  'pondicherry': { state: 'Puducherry' },
  'pondi': { state: 'Puducherry' },
  'andaman': { state: 'Andaman and Nicobar Islands' },
  'nicobar': { state: 'Andaman and Nicobar Islands' },
  'andaman & nicobar': { state: 'Andaman and Nicobar Islands' },
  'daman & diu': { state: 'Dadra and Nagar Haveli and Daman and Diu' },
  'daman and diu': { state: 'Dadra and Nagar Haveli and Daman and Diu' },
  'dadra': { state: 'Dadra and Nagar Haveli and Daman and Diu' },
  'silvassa': { state: 'Dadra and Nagar Haveli and Daman and Diu' },
  'daman': { state: 'Dadra and Nagar Haveli and Daman and Diu' },
  'diu': { state: 'Dadra and Nagar Haveli and Daman and Diu' },
  'leh': { state: 'Ladakh' },
  'ladakh': { state: 'Ladakh' },
  'kargil': { state: 'Ladakh' },
  'kavaratti': { state: 'Lakshadweep' }
};

// Pan-India Profile (aggregates top commercial tier-1 metros across India)
const PAN_INDIA_PROFILE = {
  name: 'India (Pan-India Metro Commercial Hubs)',
  code: 'IN',
  districts: [
    'Delhi NCR', 'Mumbai Metropolitan Region', 'Bengaluru Urban',
    'Hyderabad Urban', 'Chennai Metropolitan', 'Kolkata Urban',
    'Pune Metropolitan', 'Ahmedabad Urban', 'Jaipur Metro', 'Lucknow Metro'
  ],
  cities: [
    { name: 'Delhi Central (Connaught Place / Karol Bagh / Paharganj)', district: 'Central Delhi', pin: '110001', lat: 28.6315, lon: 77.2167 },
    { name: 'Mumbai South (Colaba / Nariman Point / Fort)', district: 'Mumbai City', pin: '400001', lat: 18.9220, lon: 72.8347 },
    { name: 'Mumbai Western Suburbs (Bandra / Andheri / Juhu)', district: 'Mumbai Suburban', pin: '400050', lat: 19.0596, lon: 72.8295 },
    { name: 'Bengaluru South (Koramangala / HSR / Indiranagar)', district: 'Bengaluru Urban', pin: '560034', lat: 12.9352, lon: 77.6245 },
    { name: 'Bengaluru Tech Corridors (Electronic City / Whitefield)', district: 'Bengaluru Urban', pin: '560100', lat: 12.8452, lon: 77.6602 },
    { name: 'Hyderabad IT Corridor (Hitec City / Gachibowli / Madhapur)', district: 'Hyderabad', pin: '500081', lat: 17.4435, lon: 78.3772 },
    { name: 'Chennai Central (T Nagar / Nungambakkam / Anna Salai)', district: 'Chennai', pin: '600017', lat: 13.0418, lon: 80.2341 },
    { name: 'Kolkata Central (Park Street / BBD Bagh / Camac St)', district: 'Kolkata', pin: '700016', lat: 22.5535, lon: 88.3534 },
    { name: 'Pune Central (Shivajinagar / FC Road / Hinjewadi)', district: 'Pune', pin: '411005', lat: 18.5204, lon: 73.8567 },
    { name: 'Ahmedabad (SG Highway / Navrangpura / Prahlad Nagar)', district: 'Ahmedabad', pin: '380015', lat: 23.0131, lon: 72.5097 }
  ]
};

/**
 * Validates whether a location string represents a valid Indian State, Union Territory, or City.
 * Rejects any non-Indian / foreign geography.
 */
function isIndianLocation(locationName) {
  const rawClean = (locationName || '').trim().toLowerCase();
  // Strip parentheses and labels e.g. "Bengaluru (Karnataka)" -> "bengaluru"
  const clean = rawClean.replace(/\s*\([^)]*\)/g, '').trim();

  if (!clean) {
    return { valid: false, reason: 'Target Indian State, UT or City is required.' };
  }

  // 1. Explicit check against known foreign countries, states, and cities
  if (KNOWN_FOREIGN_REGIONS.has(clean)) {
    return {
      valid: false,
      reason: `Out-of-India scraping is strictly prohibited. "${locationName.trim()}" is located outside India. This scraper is exclusively restricted to Indian States, Union Territories, and Cities.`
    };
  }

  // 2. Pan-India queries
  if (['india', 'pan india', 'all india', 'bharat', 'hindustan', 'pan-india'].includes(clean)) {
    return { valid: true, resolvedName: 'India', isPanIndia: true };
  }

  // 3. Exact State match
  const stateKey = Object.keys(INDIA_STATES).find(s => s.toLowerCase() === clean);
  if (stateKey) {
    return { valid: true, resolvedName: stateKey, stateName: stateKey };
  }

  // 4. Alias lookup
  if (INDIAN_ALIASES[clean]) {
    const aliasData = INDIAN_ALIASES[clean];
    return { valid: true, resolvedName: aliasData.city || aliasData.state, stateName: aliasData.state };
  }

  // 5. Search cities / districts within all states
  for (const [sName, sData] of Object.entries(INDIA_STATES)) {
    const matchedCity = sData.cities.find(c => 
      c.name.toLowerCase().includes(clean) || 
      (c.district && c.district.toLowerCase().includes(clean))
    );
    if (matchedCity) {
      return { valid: true, resolvedName: matchedCity.name, stateName: sName };
    }
    const matchedDistrict = (sData.districts || []).find(d => d.toLowerCase().includes(clean));
    if (matchedDistrict) {
      return { valid: true, resolvedName: matchedDistrict, stateName: sName };
    }
  }

  // If none matched: Not recognized as Indian
  return {
    valid: false,
    reason: `Out-of-India scraping is not permitted. "${locationName.trim()}" is not recognized as a valid Indian State, Union Territory, or City.`
  };
}

/**
 * Resolves state and city geographic profile strictly for Indian territories.
 * Throws an explicit error if the requested location is outside India.
 */
function getStateData(stateName) {
  const rawClean = (stateName || '').trim().toLowerCase();
  // Strip parentheses and labels e.g. "Bengaluru (Karnataka)" -> "bengaluru"
  const cleanInput = rawClean.replace(/\s*\([^)]*\)/g, '').trim();
  
  if (!cleanInput) {
    const err = new Error('Target Indian State or City is required.');
    err.code = 'ERR_GEO_REQUIRED';
    throw err;
  }

  // Check known foreign regions immediately
  if (KNOWN_FOREIGN_REGIONS.has(cleanInput)) {
    const err = new Error(`Out-of-India scraping is strictly prohibited. "${stateName.trim()}" is located outside India. This scraper is exclusively restricted to Indian States, Union Territories, and Cities.`);
    err.code = 'ERR_OUT_OF_INDIA';
    throw err;
  }

  // Pan-India query
  if (['india', 'pan india', 'all india', 'bharat', 'hindustan', 'pan-india'].includes(cleanInput)) {
    return PAN_INDIA_PROFILE;
  }

  // 1. Exact match state name
  const normalizedKey = Object.keys(INDIA_STATES).find(
    s => s.toLowerCase() === cleanInput
  );

  if (normalizedKey && INDIA_STATES[normalizedKey]) {
    return { name: normalizedKey, ...INDIA_STATES[normalizedKey] };
  }

  // 2. Check Indian Aliases Dictionary
  if (INDIAN_ALIASES[cleanInput]) {
    const alias = INDIAN_ALIASES[cleanInput];
    const targetState = INDIA_STATES[alias.state];
    if (targetState) {
      if (alias.city) {
        const cityMatches = targetState.cities.filter(c => 
          c.name.toLowerCase().includes(alias.city.toLowerCase()) || 
          (c.district && c.district.toLowerCase().includes(alias.city.toLowerCase()))
        );
        if (cityMatches.length > 0) {
          return {
            name: alias.city,
            stateName: alias.state,
            code: targetState.code,
            districts: [...new Set(cityMatches.map(c => c.district || c.name))],
            cities: cityMatches
          };
        }
      }
      return { name: alias.state, ...targetState };
    }
  }

  // 3. Check if user entered a specific City name directly
  for (const [sName, sData] of Object.entries(INDIA_STATES)) {
    const matchedCities = sData.cities.filter(c => 
      c.name.toLowerCase().includes(cleanInput) || 
      (c.district && c.district.toLowerCase().includes(cleanInput))
    );
    if (matchedCities.length > 0) {
      return {
        name: sName,
        code: sData.code,
        districts: [...new Set(matchedCities.map(c => c.district || c.name))],
        cities: matchedCities
      };
    }
  }

  // 4. Strict Rejection: NO fallback synthetic generation for non-Indian locations
  const err = new Error(`Out-of-India scraping is not permitted. "${stateName.trim()}" is not recognized as a valid Indian State, Union Territory, or City.`);
  err.code = 'ERR_OUT_OF_INDIA';
  throw err;
}

module.exports = {
  INDIA_STATES,
  ALL_INDIA_STATES_LIST,
  BUSINESS_CATEGORIES,
  KNOWN_FOREIGN_REGIONS,
  INDIAN_ALIASES,
  isIndianLocation,
  getStateData
};
