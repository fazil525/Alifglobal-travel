const uaeTours = [
    {
        id: "burj-khalifa",
        title: "Burj Khalifa At the Top",
        location: "Downtown Dubai",
        price: "AED 159",
        duration: "2-3 Hours",
        type: "Must Try",
        badgeColor: "#e11d48",
        image: "assets/burj_khalifa.png",
        shortDesc: "Experience panoramic views of Dubai from the tallest building in the world.",
        detailedDescription: "The Burj Khalifa At the Top experience takes you to levels 124 and 125, offering a breathtaking 360-degree view of the city, desert, and coastline. Standing at a monumental height, this activity provides unparalleled photo opportunities. Interactive displays guide you through the marvels of the tower's engineering, making it a perfect starting point for first-time visitors to Dubai.",
        fullPlan: [
            "Arrival & Briefing: Arrive at Dubai Mall Lower Ground level 15 minutes early.",
            "The History: Walk through a multimedia presentation of Dubai's history and the tower's construction.",
            "The Ascent: Board the high-speed elevator, traveling at 10 meters per second.",
            "Level 124: Step out onto the open-air observation terrace for stunning views.",
            "Level 125: Explore the spacious indoor deck, featuring VR experiences and Arabic mashrabiya motifs.",
            "Descent & Souvenirs: Return to the ground floor via the boutique shop."
        ],
        inclusions: ["Admission to Level 124 & 125", "High-power telescopes", "Free Wi-Fi"]
    },
    {
        id: "desert-safari",
        title: "Premium Desert Safari",
        location: "Dubai Desert Conservation Reserve",
        price: "AED 299",
        duration: "6 Hours",
        type: "Popular",
        badgeColor: "#f97316",
        image: "assets/desert_safari.png",
        shortDesc: "Thrilling dune bashing, camel riding, and a massive BBQ dinner under the stars.",
        detailedDescription: "Escape the city and venture into the golden sands of the Arabian Desert. This safari combines heart-pumping adventure with traditional Bedouin culture. You'll experience 4x4 dune bashing across massive sand dunes, followed by a serene evening at a traditional desert camp featuring live entertainment, henna painting, and an extensive buffer dinner.",
        fullPlan: [
            "Hotel Pick-up: Convenient pick-up from your hotel in a 4x4 Toyota Land Cruiser.",
            "Dune Bashing: 45 minutes of adrenaline-pumping driving over massive sand dunes.",
            "Sunset Photography: A stop at the highest dune to capture the stunning desert sunset.",
            "Camp Arrival: Welcome drinks, Arabic coffee (Gahwa), and dates at the Bedouin camp.",
            "Cultural Activities: Camel riding, sandboarding, falcons, and henna tattoo painting.",
            "Dinner & Entertainment: Multi-course BBQ buffet dinner alongside live Belly Dance and Tanoura fire shows."
        ],
        inclusions: ["Round-trip 4x4 transport", "Dune bashing", "BBQ Dinner", "Camel ride", "Live Shows"]
    },
    {
        id: "atlantis-aqua",
        title: "Atlantis Aquaventure",
        location: "Palm Jumeirah",
        price: "AED 295",
        duration: "Full Day",
        type: "Must Try",
        badgeColor: "#e11d48",
        image: "assets/atlantis.png",
        shortDesc: "The world's largest waterpark featuring over 100 record-breaking slides.",
        detailedDescription: "Aquaventure Waterpark at Atlantis The Palm promises an unforgettable day of thrills and splashes. Spanning over 22 hectares, it holds the Guinness World Record for the most waterslides in a single park. Brave the terrifying Leap of Faith, ride the massive rapids of the Lazy River, or relax on 1km of private pristine beach exclusively for park guests.",
        fullPlan: [
            "Arrival: Head to the Palm Jumeirah early to beat the crowds.",
            "Trident Tower: Tackle the newest record-breaking massive slides and river rapids.",
            "Leap of Faith: Slide down a near-vertical drop through a clear tube surrounded by sharks.",
            "Relaxation: Float seamlessly along the 2-kilometer long Lazy River.",
            "Kids Zone: Splasher's Island provides safe, interactive fun for younger children.",
            "Beach Access: Wind down your day lounging on the exclusive Aquaventure private beach."
        ],
        inclusions: ["Full day unlimited access", "Access to Aquaventure Beach", "Over 105 slides & attractions"]
    },
    {
        id: "grand-mosque",
        title: "Sheikh Zayed Grand Mosque Tour",
        location: "Abu Dhabi",
        price: "AED 199",
        duration: "Half Day",
        type: "Cultural",
        badgeColor: "#8b5cf6",
        image: "assets/grand-mosque.png",
        shortDesc: "A spiritual and architectural marvel featuring the world's largest hand-knotted carpet.",
        detailedDescription: "An absolute masterpiece of modern Islamic architecture and design. The Sheikh Zayed Grand Mosque is incredibly vast, accommodating over 40,000 worshippers. Adorned with 82 white marble domes, 24-carat gold chandeliers, and reflective pools, it stands as a monument to peace and tolerance. This guided tour offers deep insights into its construction and cultural significance.",
        fullPlan: [
            "Transport: Comfortable air-conditioned transfer from your hotel to Abu Dhabi.",
            "Dress Code Briefing: Ensuring respectful attire (Abayas provided for women if needed).",
            "Courtyard Walk: Guided walk around the breathtaking 17,000 square meter courtyard.",
            "Main Prayer Hall: Enter the spectacular hall to see the 12-ton crystal chandelier.",
            "Carpet Viewing: Walk alongside the world's largest hand-woven carpet.",
            "Photography & Q&A: Dedicated time for photos at key view points and questions."
        ],
        inclusions: ["Round-trip transport", "Professional Guide", "Entrance fees", "Abaya rental"]
    },
    {
        id: "museum-future",
        title: "Museum of the Future",
        location: "Sheikh Zayed Road, Dubai",
        price: "AED 149",
        duration: "2 Hours",
        type: "Must Try",
        badgeColor: "#e11d48",
        image: "assets/museum-future.png",
        shortDesc: "Journey to the year 2071 inside the most beautiful building on Earth.",
        detailedDescription: "The Museum of the Future is a visionary cultural institution set inside a stunning torus-shaped building inscribed with Arabic calligraphy. Unlike traditional museums that showcase the past, this immersive space predicts the future. Spanning multiple floors, guests explore interactive exhibits concerning space travel, climate change, spirituality, and advanced bio-engineering.",
        fullPlan: [
            "Check-In: Collect your wristband and admire the futuristic lobby.",
            "Lift Off (Level 5): A simulated space shuttle ride to the OSS Hope Space Station in 2071.",
            "HEAL Institute (Level 4): Explore a massive digital amazon rainforest and DNA library.",
            "Al Waha (Level 3): A spa for the senses focusing on human connection and mental wellbeing.",
            "Tomorrow Today (Level 2): Encounter near-future technologies and robotics.",
            "Future Heroes (Level 1): An interactive playground designed exclusively for children."
        ],
        inclusions: ["Entry Ticket", "Access to all 5 immersive floors", "Free parking"]
    },
    {
        id: "ferrari-world",
        title: "Ferrari World Yas Island",
        location: "Yas Island, Abu Dhabi",
        price: "AED 345",
        duration: "Full Day",
        type: "Theme Park",
        badgeColor: "#0ea5e9",
        image: "assets/ferrari-world.png",
        shortDesc: "Home to Formula Rossa, the fastest rollercoaster in the world.",
        detailedDescription: "Located on Yas Island under a massive iconic red roof, Ferrari World Abu Dhabi is the first Ferrari-branded theme park. It is an adrenaline-fueled paradise combining high-speed rollercoasters with family-friendly attractions and incredible Italian dining. It perfectly captures the passion, excellence, and speed associated with the legendary racing brand.",
        fullPlan: [
            "Arrival & Ticketing: Enter the massive indoor park and grab park maps.",
            "Formula Rossa: Immediately head to the world's fastest rollercoaster (240km/h in 4.9s).",
            "Flying Aces: Ride the coaster with the world's highest rollercoaster loop.",
            "Family Zones: Enjoy the Bell'Italia miniature Italy tour and Tyre Twist.",
            "Racing Simulators: Test your skills in professional-grade F1 driving simulators.",
            "Dining: Authentic Italian pizza and pasta at Mamma Rossella."
        ],
        inclusions: ["Unlimited ride access", "Shows and entertainment", "Free shuttle from Dubai"]
    },
    {
        id: "louvre-ad",
        title: "Louvre Museum Abu Dhabi",
        location: "Saadiyat Island, Abu Dhabi",
        price: "AED 63",
        duration: "3-4 Hours",
        type: "Cultural",
        badgeColor: "#8b5cf6",
        image: "assets/louvre-ad.png",
        shortDesc: "A universal museum exploring shared human history under a breathtaking 'rain of light' dome.",
        detailedDescription: "The Louvre Abu Dhabi is a spectacular architectural feat designed by Jean Nouvel. The massive silver dome is constructed of 7,850 stars that filter sunlight perfectly into a 'rain of light'. The galleries are laid out chronologically across human history, bringing together ancient artifacts and modern art from different civilizations in the same space to highlight our shared humanity.",
        fullPlan: [
            "Arrival: Walk the waterfront promenade leading to the entrance.",
            "The Grand Vestibule: An introduction to the museum's universal chronological layout.",
            "Ancient Empires: Explore artifacts from early civilizations side-by-side.",
            "Classical & Renaissance: View masterpieces on loan from French museums.",
            "The Dome: Spend time relaxing under the awe-inspiring geometric dome and waterways.",
            "Modern Art & Café: Conclude with contemporary exhibits and a waterfront coffee."
        ],
        inclusions: ["Museum Entry", "Access to Galleries & Exhibitions", "Free Dome Access"]
    },
    {
        id: "global-village",
        title: "Global Village Dubai",
        location: "Sheikh Mohammed Bin Zayed Road",
        price: "AED 25",
        duration: "Evening (4+ Hours)",
        type: "Popular",
        badgeColor: "#f97316",
        image: "assets/global-village.png",
        shortDesc: "A massive multi-cultural festival park combining shopping, dining, and extreme rides.",
        detailedDescription: "Global Village is the ultimate seasonal extravaganza in Dubai. Featuring around 30 pavilions representing over 90 different cultures, it is a shopping and dining paradise. You can buy authentic honey from Yemen, spices from Iran, crafts from Africa, and dine on exotic street food from across Asia and the Americas—all while watching spectacular live shows.",
        fullPlan: [
            "Entrance (Sunset): Arrive around 5 PM to see the park light up at dusk.",
            "Pavilion Hopping: Stroll through massive, architecturally themed country pavilions.",
            "Street Food: Explore the 'Floating Market' and 'Street Food Avenue' for dinner.",
            "Main Stage Shows: Catch international dance troupes and acrobatic performances.",
            "Carnival Rides: Head to the massive funfair area for Ferris wheel views and rides.",
            "Fireworks: End the evening watching the spectacular weekend fireworks display."
        ],
        inclusions: ["Park Entry Ticket", "Access to all pavilions", "Free live shows"]
    },
    {
        id: "miracle-garden",
        title: "Dubai Miracle Garden",
        location: "Dubailand",
        price: "AED 95",
        duration: "2-3 Hours",
        type: "Must Try",
        badgeColor: "#e11d48",
        image: "assets/miracle-garden.png",
        shortDesc: "Wander through 150 million blossoming flowers in the world's largest natural flower garden.",
        detailedDescription: "Opening only during Dubai's cooler months, the Miracle Garden is literally an oasis of color. It holds multiple Guinness World Records, including a life-size Emirates A380 airplane entirely covered in fresh flora. The incredible scent of millions of petunias and geraniums fills the air as you walk through heart-shaped arches and floral castles.",
        fullPlan: [
            "Arrival: Early morning arrival is recommended for the best lighting and fewer crowds.",
            "The Emirates A380: Capture photos at the colossal, flower-covered jumbo jet.",
            "Hearts Passage: Walk through the iconic path formed by massive heart-shaped flower arches.",
            "Floral Castle: Explore the multi-story castle entirely wrapped in blossoms.",
            "Lake Area: Relax by the tranquil water features surrounded by towering floral sculptures.",
            "Refreshments: Grab some fresh juices and snacks in the shaded cabana areas."
        ],
        inclusions: ["Entry Ticket", "Access to all viewing platforms"]
    },
    {
        id: "ski-dubai",
        title: "Ski Dubai Snow Park",
        location: "Mall of the Emirates",
        price: "AED 220",
        duration: "3 Hours",
        type: "Popular",
        badgeColor: "#f97316",
        image: "https://picsum.photos/seed/skidubai/600/400",
        shortDesc: "Swap the desert heat for sub-zero temperatures inside a massive indoor winter wonderland.",
        detailedDescription: "Located inside the Mall of the Emirates, Ski Dubai maintains a temperature of -1 to 2 degrees Celsius year-round. While it offers premium ski slopes, the Snow Park ticket is perfect for those who just want to play in the snow. Activities include the twin-track bobsled run, a snow cavern filled with interactive experiences, and giant zorbing balls.",
        fullPlan: [
            "Gear Up: Collect your provided winter jackets, trousers, boots, and socks at the counter.",
            "Snow Cavern: Enter the park and explore the icy pathways and frozen sculptures.",
            "Tubing & Bobsled: Race down the hills in an inflatable tube or the fast bobsled run.",
            "Zorb Ball: Climb inside a massive transparent ball and roll down the snowy slopes.",
            "Penguin Encounter: Watch the march of the Gentoo and King penguins.",
            "Hot Chocolate: Warm up at the Avalanche Cafe halfway up the ski slope."
        ],
        inclusions: ["Snow Park Entry", "Winter clothing & boots provided", "Unlimited rides in park"]
    },
    {
        id: "ain-dubai",
        title: "Ain Dubai Observation Wheel",
        location: "Bluewaters Island",
        price: "AED 130",
        duration: "1 Hour",
        type: "Must Try",
        badgeColor: "#e11d48",
        image: "https://picsum.photos/seed/aindubai/600/400",
        shortDesc: "Soar to 250m on the world's largest and highest observation wheel.",
        detailedDescription: "Standing taller than the High Roller in Vegas and the London Eye, Ain Dubai offers majestic, unhindered 360-degree views of the Dubai skyline, Palm Jumeirah, and the Arabian Gulf. The massive, luxurious, air-conditioned cabins provide an incredibly smooth rotation that takes approximately 38 minutes to complete.",
        fullPlan: [
            "Arrival at Bluewaters: Stroll across the scenic pedestrian bridge from JBR.",
            "Boarding: Enter your spacious, glass-enclosed, air-conditioned cabin.",
            "The Ascent: Slowly rise up, noticing how the Palm Jumeirah emerges into full view.",
            "The Apex (250m): Capture breathtaking photos of the Marina skyline as you reach the top.",
            "The Descent: Enjoy the sprawling ocean views as the wheel completes its cycle.",
            "Bluewaters Exploration: After disembarking, enjoy the waterfront dining at Bluewaters."
        ],
        inclusions: ["One complete rotation (38 min)", "Shared Observation Cabin", "Free Wi-Fi"]
    },
    {
        id: "dhow-cruise",
        title: "Dhow Cruise Dinner - Marina",
        location: "Dubai Marina",
        price: "AED 150",
        duration: "2 Hours",
        type: "Romantic",
        badgeColor: "#10b981",
        image: "https://picsum.photos/seed/dhowcruise/600/400",
        shortDesc: "Sail through the illuminated Dubai Marina on a traditional wooden Dhow with a buffet dinner.",
        detailedDescription: "Combine the old with the new on a classic wooden Dhow boat that cruises through the futuristic canals of the Dubai Marina. This evening cruise offers stunning vantage points of towering skyscrapers, luxury yachts, and the Ain Dubai. Inside, guests are treated to a massive international buffet, live music, and traditional Tanoura dance performances.",
        fullPlan: [
            "Boarding: Arrive at Dubai Marina pier around 8:00 PM; receive a welcome drink.",
            "Setting Sail: The Dhow gently departs, cruising past the twisted Cayan Tower.",
            "Dinner Buffet: Access the extensive buffet featuring Arabic and International cuisine.",
            "Open-Air Deck: Move to the upper deck to feel the breeze and take amazing photos.",
            "Ain Dubai Views: The cruise heads out near Bluewaters Island for spectacular wheel views.",
            "Entertainment: Enjoy the spinning Tanoura dancer performance before docking."
        ],
        inclusions: ["2-Hour Cruise", "International Buffet Dinner", "Unlimited Soft Drinks", "Live Show"]
    },
    {
        id: "seaworld-ad",
        title: "SeaWorld Abu Dhabi",
        location: "Yas Island, Abu Dhabi",
        price: "AED 375",
        duration: "Full Day",
        type: "Theme Park",
        badgeColor: "#0ea5e9",
        image: "https://picsum.photos/seed/seaworld/600/400",
        shortDesc: "The region's first marine life theme park featuring immersive realms and incredible habitats.",
        detailedDescription: "SeaWorld Abu Dhabi represents the next generation of marine life parks. Instead of simple tanks, the park is divided into massive, highly immersive 'realms' mimicking natural environments—from the icy poles to the tropical oceans. Highlights include the Endless Ocean realm (the world's largest multi-species aquarium) and cutting-edge interactive rescue and rehabilitation centers.",
        fullPlan: [
            "One Ocean Core: Enter through the central hub featuring an incredible 360-degree media screen.",
            "Polar Ocean: Experience the freezing temperatures while observing penguins and walruses.",
            "Endless Ocean: Look through a 20-meter tall observation window into a massive ecosystem.",
            "MicroOcean: Family-friendly rides, colorful climbing structures, and interactive games.",
            "Dining: Eat at a restaurant fully submerged alongside the massive aquarium tanks.",
            "Animal Care Center: Take a behind-the-scenes look at the veterinary care taking place."
        ],
        inclusions: ["All day park access", "Access to all 8 realms", "Live presentations"]
    },
    {
        id: "dubai-frame",
        title: "The Dubai Frame",
        location: "Zabeel Park",
        price: "AED 50",
        duration: "1.5 Hours",
        type: "Cultural",
        badgeColor: "#8b5cf6",
        image: "assets/dubai_frame.png",
        shortDesc: "Walk on exactly 150m of glass, bridging the gap between Old Dubai and New Dubai.",
        detailedDescription: "The Dubai Frame is one of the most uniquely shaped buildings globally, acting as a massive metaphorical window representing the city's transformation. As you ride up to the sky deck, you'll look out one side to see the historic, pearl-diving roots of Old Dubai (Deira), and out the other side to see the hyper-modern skyline of Downtown Dubai (Burj Khalifa).",
        fullPlan: [
            "Past Gallery: Start your journey through an immersive multimedia museum showing Dubai's origins.",
            "The Elevator: Ride the rapid panoramic glass elevator up 150 meters.",
            "The Sky Deck: Walk across the heart-stopping 93-meter long smart glass floor that turns clear underfoot.",
            "The Views: Take photos framing Old Dubai to the North and New Dubai to the South.",
            "Future Gallery: Descend and walk through a sensory projection tunnel depicting Dubai 50 years from now.",
            "Zabeel Park: Exit into the beautiful, sprawling green spaces of Zabeel Park."
        ],
        inclusions: ["Entry Ticket", "Access to Past, Present, and Future Galleries"]
    },
    {
        id: "qasr-al-watan",
        title: "Qasr Al Watan Palace",
        location: "Abu Dhabi",
        price: "AED 65",
        duration: "2-3 Hours",
        type: "Cultural",
        badgeColor: "#8b5cf6",
        image: "https://picsum.photos/seed/qasralwatan/600/400",
        shortDesc: "Explore the breathtaking working Presidential Palace of the UAE.",
        detailedDescription: "More than just a palace, Qasr Al Watan is a unique testament to the spirit of the UAE's people and its leaders. Previously closed to the public, you can now walk through the immense Great Hall, admire the exquisite Arabian craftsmanship, and visit the incredible 'House of Knowledge' highlighting Arabian contributions to human civilization.",
        fullPlan: [
            "Visitor Center: Park easily and take the luxury shuttle bus up to the main Palace gates.",
            "The Great Hall: Walk into the monumental central dome, reflecting sheer opulence.",
            "Spirit of Collaboration Room: See where the Federal Supreme Council and Arab League meet.",
            "House of Knowledge: Browse rare artifacts, manuscripts, and the impressive chandelier.",
            "Presidential Banquet: View the lavish dining room used to host global heads of state.",
            "Palace in Motion (Evening only): A spectacular light and sound show projected onto the palace facade."
        ],
        inclusions: ["Palace Entry", "Access to Gardens", "Palace In Motion show (evening)"]
    },
    // Addition of 15 authentic locations across all other Emirates & Al Ain
    {
        id: "al-noor-island",
        title: "Al Noor Island",
        location: "Sharjah",
        price: "AED 50",
        duration: "2-3 Hours",
        type: "Romantic",
        badgeColor: "#10b981",
        image: "https://picsum.photos/seed/alnoorisland/600/400",
        shortDesc: "A serene lagoon island featuring a spectacular Butterfly House and light displays.",
        detailedDescription: "Located in Khalid Lagoon, Al Noor Island is a peaceful retreat blending art, nature, and stunning architecture. The centerpiece is the golden, organically shaped Butterfly House harboring hundreds of exotic species. Walk the illuminated pathways past bespoke art installations and relax by the literature pavilion.",
        fullPlan: [
            "Entrance: Cross the beautifully designed footbridge into the island.",
            "Butterfly House: Walk through the humid tropical biome surrounded by colorful butterflies.",
            "Art Walk: Follow the winding pathways exploring glowing, custom-made sculptures.",
            "Literature Pavilion: Relax with a book in the beautifully designed open-air pavilion.",
            "Gleaming Meadows: Wait until dusk to see the incredible fiber-optic light displays."
        ],
        inclusions: ["Island Entry", "Butterfly House Access", "Guided Tour (optional)"]
    },
    {
        id: "sharjah-safari",
        title: "Sharjah Safari",
        location: "Sharjah (Al Dhaid)",
        price: "AED 120",
        duration: "Half Day",
        type: "Popular",
        badgeColor: "#f97316",
        image: "https://picsum.photos/seed/sharjahsafari/600/400",
        shortDesc: "The largest safari out of Africa featuring thousands of exotic animals.",
        detailedDescription: "Experience the ultimate wildlife adventure at Sharjah Safari, covering multiple distinct African environments. From traversing the massive savannahs looking for lions and rhinos to exploring the dense canopy zones, this safari provides an authentic African wildlife experience right in the UAE.",
        fullPlan: [
            "Arrival: Check into the visitor center located in the Al Bridi Nature Reserve.",
            "Into Africa: Walk through the first zones representing African villages.",
            "The Safari Drive: Board the safari vehicle and traverse the massive open savannahs.",
            "Lion Encounter: Drive safely through the predators' expansive territory.",
            "Bird Aviary: Walk through the immersive flying zones."
        ],
        inclusions: ["Safari Ticket", "Guided Vehicle Tour", "Access to all zones"]
    },
    {
        id: "sharjah-art-museum",
        title: "Sharjah Art Museum",
        location: "Sharjah (Heart of Sharjah)",
        price: "AED Free",
        duration: "2 Hours",
        type: "Cultural",
        badgeColor: "#8b5cf6",
        image: "https://picsum.photos/seed/sharjahart/600/400",
        shortDesc: "The region's leading art museum showcasing incredible Middle Eastern art.",
        detailedDescription: "Immerse yourself in aesthetic brilliance at the Sharjah Art Museum. As the cultural capital of the Arab World, this massive museum holds one of the largest collections of regional art spanning hundreds of years. The quiet galleries provide perfect escapism and deep insight into Arabic storytelling through paint.",
        fullPlan: [
            "Entrance: Explore the beautifully restored historic architecture of the building.",
            "Permanent Galleries: View works from renowned Orientalist painters.",
            "Modern Art: Progress to contemporary works from prominent Arab artists.",
            "Exhibitions: Check out the rotating seasonal exhibits.",
            "Library & Café: Unwind in the fine arts library or the quiet courtyard cafe."
        ],
        inclusions: ["Free Entry", "Audio Guide", "Access to permanent & temporary exhibits"]
    },
    {
        id: "jebel-jais-flight",
        title: "Jebel Jais Flight (World's Longest Zipline)",
        location: "Ras Al Khaimah",
        price: "AED 350",
        duration: "2-3 Hours",
        type: "Must Try",
        badgeColor: "#e11d48",
        image: "https://picsum.photos/seed/jaisflight/600/400",
        shortDesc: "Soar across the rugged mountain peaks on the Guinness World Record longest zipline.",
        detailedDescription: "Unleash your inner thrill-seeker on the Jebel Jais Flight. Suspended across the UAE's highest peak, you will fly face-down in a superhero position at speeds of up to 160km/h over a span of 2.8 kilometers. The combination of pure adrenaline and breathtaking mountainous views is unmatched.",
        fullPlan: [
            "Ascent: Drive up the beautifully winding mountain road to the Welcome Center.",
            "Gearing Up: Professional safety briefing and fitting of harness and helmet.",
            "The Launch: Step onto the transparent launch platform over the massive canyon.",
            "The Flight: Soar at incredible speeds covering 2.83 kilometers of mountainous terrain.",
            "Suspended Platform: Land on a breathtaking glass-bottomed platform suspended mid-air.",
            "Final Descent: Complete a shorter secondary zipline to reach the ground base."
        ],
        inclusions: ["Zipline Flight", "Safety Gear", "Certificate of Completion"]
    },
    {
        id: "suwaidi-pearls",
        title: "Suwaidi Pearls Farm",
        location: "Ras Al Khaimah",
        price: "AED 250",
        duration: "2 Hours",
        type: "Cultural",
        badgeColor: "#8b5cf6",
        image: "https://picsum.photos/seed/suwaidipearls/600/400",
        shortDesc: "Discover the historical roots of the UAE's pearl diving heritage on a floating farm.",
        detailedDescription: "Before the discovery of oil, the UAE's economy relied heavily on the perilous trade of pearl diving. Journey out on a traditional boat to this unique floating pearl farm nestled at the base of the towering Hajar mountains. Learn the incredible history, see how oysters are seeded, and even try opening one yourself.",
        fullPlan: [
            "Mangrove Cruise: Depart on a traditional dhow boat through beautiful mangroves.",
            "History Briefing: Learn the intense history and dangers of deep-sea pearl diving.",
            "Oyster Seeding: Watch a fascinating demonstration of how modern pearls are cultivated.",
            "Oyster Opening: Try your luck at opening a living oyster to find a pearl.",
            "Gift Shop: Trade or purchase beautiful, authentic Arabian pearls."
        ],
        inclusions: ["Boat Transfer", "Guided Tour", "Arabic Coffee and Dates"]
    },
    {
        id: "dhayah-fort",
        title: "Dhayah Fort",
        location: "Ras Al Khaimah",
        price: "AED Free",
        duration: "1 Hour",
        type: "Cultural",
        badgeColor: "#8b5cf6",
        image: "https://picsum.photos/seed/dhayahfort/600/400",
        shortDesc: "Hike up to the highest hilltop fort in the UAE for 360-degree views of palm oasis.",
        detailedDescription: "Standing as a symbol of historical resilience, Dhayah Fort is the only surviving hilltop fort in the UAE. After climbing a zig-zagging staircase of rock, you are rewarded with an incredible vantage point over lush date palm gardens, the dramatic Hajar Mountains, and the Arabian Gulf.",
        fullPlan: [
            "Arrival: Journey through the sprawling, picturesque palm oasis.",
            "The Climb: Ascend the 200+ rocky steps to the summit of the hill.",
            "Exploration: Walk inside the ancient restored mud-brick towers.",
            "Photography: Take unparalleled photos overlooking the mountains meeting the sea."
        ],
        inclusions: ["Free Entry", "Unrestricted Access"]
    },
    {
        id: "snoopy-island",
        title: "Snoopy Island Snorkeling",
        location: "Fujairah",
        price: "AED 150",
        duration: "3-4 Hours",
        type: "Popular",
        badgeColor: "#f97316",
        image: "https://picsum.photos/seed/snoopyisland/600/400",
        shortDesc: "Snorkel in crystal-clear waters around an island shaped exactly like Snoopy.",
        detailedDescription: "Escape to the East Coast of the UAE, facing the Indian Ocean. Snoopy Island, affectionately named for its resemblance to the cartoon dog sleeping on his back, boasts the most vibrant coral reefs in the country. Swim alongside turtles, reef sharks, and thousands of tropical fish.",
        fullPlan: [
            "Beach Arrival: Relax on the sandy beaches of Al Aqah.",
            "Equipment Prep: Collect your snorkel, mask, and fins from the dive center.",
            "The Swim: Paddle the short distance from the beach out to the rock formation.",
            "Reef Exploration: Swim slowly around the island to spot sea turtles and vivid corals.",
            "Beach Relaxation: Head back for lunch and relaxation by the shore."
        ],
        inclusions: ["Snorkeling Gear Rental", "Beach Access", "Showers and Lockers"]
    },
    {
        id: "al-badiyah-mosque",
        title: "Al Badiyah Mosque",
        location: "Fujairah",
        price: "AED Free",
        duration: "45 Mins",
        type: "Cultural",
        badgeColor: "#8b5cf6",
        image: "https://picsum.photos/seed/albadiyah/600/400",
        shortDesc: "Visit the oldest known functioning mosque in the entire United Arab Emirates.",
        detailedDescription: "Estimated to date back to the 15th century, Al Badiyah Mosque is a marvel of ancient engineering. Built simply using stone and mud without a single piece of wood, its unique design features four distinct, unequal domes. It offers a deeply humble and fascinating contrast to the mega-mosques of the cities.",
        fullPlan: [
            "Arrival: Drive up the beautiful eastern coastal road to the village of Al Badiyah.",
            "The Mosque: Enter the tiny, cavern-like prayer room (respectful attire required).",
            "Watchtower Hike: Walk up the hill behind the mosque to two ancient Portuguese watchtowers.",
            "The View: Look out over the historic village and the sprawling ocean."
        ],
        inclusions: ["Free Entry", "Historical Marker Access"]
    },
    {
        id: "fujairah-fort",
        title: "Fujairah Fort & Heritage Village",
        location: "Fujairah",
        price: "AED 5",
        duration: "1.5 Hours",
        type: "Cultural",
        badgeColor: "#8b5cf6",
        image: "https://picsum.photos/seed/fujairahfort/600/400",
        shortDesc: "Explore the massive, rugged stone fort that once guarded the coastline.",
        detailedDescription: "Considered the oldest fort in the UAE (built around 1670), Fujairah Fort was a critical defensive stronghold. Surrounded by a restored Heritage Village, this site showcases exactly what traditional life looked like centuries before modernization, featuring traditional old mud-brick homes and agricultural systems.",
        fullPlan: [
            "The Fort: Walk inside the imposing irregular-shaped towers and courtyards.",
            "Heritage Village: Explore the surrounding reconstructed traditional village.",
            "Al Yazrah system: See the traditional irrigation setups used for local farming.",
            "Museum Visit: Take a short walk to the nearby Fujairah Museum to see uncovered artifacts."
        ],
        inclusions: ["Fort Entry", "Heritage Village Access"]
    },
    {
        id: "al-ain-zoo",
        title: "Al Ain Zoo",
        location: "Al Ain",
        price: "AED 30",
        duration: "Half Day",
        type: "Popular",
        badgeColor: "#f97316",
        image: "https://picsum.photos/seed/alainzoo/600/400",
        shortDesc: "A sprawling conservation park famous for its Arabian species and desert habitats.",
        detailedDescription: "Founded in 1968 by Sheikh Zayed, this monumental zoo focuses on conservation and spacious, natural enclosures. It is renowned for successfully breeding endangered species like the Arabian Oryx. The zoo also features an enormous man-made safari experience that safely immerses guests among free-roaming wildlife.",
        fullPlan: [
            "Arrival: Enter the massive 400-hectare park in the shadow of Jebel Hafeet.",
            "Big Cat Exhibits: View magnificent white lions, pumas, and cheetahs.",
            "Feeding Sessions: Participate in interactive giraffe feeding.",
            "Al Ain Safari: Add on the truck safari experience driving among zebras and rhinos.",
            "Sheikh Zayed Desert Learning Centre: Learn about the UAE's fragile ecosystems."
        ],
        inclusions: ["General Admission", "Access to mostly all enclosures"]
    },
    {
        id: "al-ain-oasis",
        title: "Al Ain Oasis",
        location: "Al Ain",
        price: "AED Free",
        duration: "2 Hours",
        type: "Must Try",
        badgeColor: "#e11d48",
        image: "https://picsum.photos/seed/alainoasis/600/400",
        shortDesc: "Walk beneath 147,000 date palms in a UNESCO World Heritage site.",
        detailedDescription: "The absolute heart of Al Ain ('The Garden City'), this 3,000-acre oasis is an incredibly peaceful escape. It relies on the ancient 'Falaj' irrigation system, a 3,000-year-old network of water channels that keep the massive canopy of date palms vibrant and green against the brutal desert heat.",
        fullPlan: [
            "Eco-Centre: Start your visit interpreting the history of the oasis and the falaj.",
            "The Walk: Wander deep into the intensely shaded, quiet pathways among the palms.",
            "The Falaj: Observe the running ancient water channels up close.",
            "Bicycle Rental: Rent a bike to navigate the massive sprawling pathways quickly.",
            "Al Jahili Fort: Conclude by walking to the nearby majestic circular fort."
        ],
        inclusions: ["Free Entry", "Eco-Centre Access"]
    },
    {
        id: "jebel-hafeet",
        title: "Jebel Hafeet Mountain Drive",
        location: "Al Ain",
        price: "AED Free",
        duration: "1.5 Hours",
        type: "Romantic",
        badgeColor: "#10b981",
        image: "https://picsum.photos/seed/jebelhafeet/600/400",
        shortDesc: "Drive up one of the greatest driving roads in the world for an epic sunset.",
        detailedDescription: "Jebel Hafeet towers 1,249 meters over Al Ain. The road cut into its side features 60 corners over 11.7 kilometers and has been hailed as one of the best driving roads globally. The summit provides totally unobstructed views over the golden desert and the green oasis city below.",
        fullPlan: [
            "The Ascent: Enjoy the flawlessly paved, curling drive up the limestone mountain.",
            "Viewing Points: Stop off at the designated parking balconies for photos.",
            "The Summit: Reach the top before sunset to watch the colors change over Oman and the UAE.",
            "Mercure Grand Hotel: Grab a coffee or dinner at the hotel built near the summit.",
            "Green Mubazzarah: Drive back down to dip your feet in the natural hot springs at the mountain's base."
        ],
        inclusions: ["Unrestricted Road Access", "Free Parking"]
    },
    {
        id: "ajman-museum",
        title: "Ajman Museum",
        location: "Ajman",
        price: "AED 5",
        duration: "1 Hour",
        type: "Cultural",
        badgeColor: "#8b5cf6",
        image: "https://picsum.photos/seed/ajmanmuseum/600/400",
        shortDesc: "An impressive 18th-century fort transformed into a museum showcasing Emirate history.",
        detailedDescription: "Once the ruler's palace and then a police station, the Ajman Fort is now a beautifully curated museum. It displays a vast collection of archaeological artifacts, centuries-old weapons, and fascinating dioramas depicting traditional life, pearl diving, and folklore.",
        fullPlan: [
            "The Courtyard: Enter through the heavy wooden doors and view the central defensive towers.",
            "Weaponry Room: Inspect authentic swords, daggers, and historic muskets.",
            "Trading & Pearl Diving: Walk through the rooms explaining traditional survival methods.",
            "Medical History: Learn about ancient Arabic traditional medicine.",
            "Souq Diorama: Wander the life-size recreations of historic marketplaces."
        ],
        inclusions: ["Museum Entry"]
    },
    {
        id: "al-zorah-reserve",
        title: "Al Zorah Nature Reserve",
        location: "Ajman",
        price: "AED 180",
        duration: "2-3 Hours",
        type: "Popular",
        badgeColor: "#f97316",
        image: "https://picsum.photos/seed/alzorah/600/400",
        shortDesc: "Kayak amongst thousands of flamingos in this massive mangrove ecosystem.",
        detailedDescription: "A sharp contrast to the desert and cityscapes, Al Zorah is a vibrant coastal wetland spanning 1 million square meters of mangrove forest. It is an incredibly rich ecosystem acting as a sanctuary for over 58 species of birds, including massive flocks of elegant pink flamingos.",
        fullPlan: [
            "Arrival & Briefing: Meet your guides and get fitted for a life jacket.",
            "Kayaking: Launch your kayak into the tranquil, shallow waters of the mangroves.",
            "Bird Watching: Paddle quietly close to the massive flocks of flamingos.",
            "The Creek: Navigate the complex network of calm tidal creeks.",
            "Relaxation: Enjoy the pure serenity away from the noise of the city before returning."
        ],
        inclusions: ["Kayak Rental", "Life Jacket", "Guided Tour"]
    },
    {
        id: "dreamland-aqua-park",
        title: "Dreamland Aqua Park",
        location: "Umm Al Quwain",
        price: "AED 160",
        duration: "Full Day",
        type: "Theme Park",
        badgeColor: "#0ea5e9",
        image: "https://picsum.photos/seed/dreamland/600/400",
        shortDesc: "The UAE's largest family waterpark featuring massive pools and lush green camping.",
        detailedDescription: "Operating for decades, Dreamland is a beloved institution providing unpretentious, spacious fun. Unlike highly crowded modern parks, it offers over 250,000 square meters of lush green landscapes, massive wave pools, and classic water rides. It also features unique overnight waterside camping options.",
        fullPlan: [
            "Wave Pool: Start the day relaxing in the massive central wave pool area.",
            "The Rides: Take on the Kamikaze, Twister, and Black Hole slides.",
            "Dead Sea Pool: Float effortlessly in the high-salinity floatation pool.",
            "Family Rafting: Enjoy the multi-person raft rides down the mini rivers.",
            "BBQ & Picnic: Wind down by utilizing the open green spaces and picnic areas."
        ],
        inclusions: ["All Day Access", "Unlimited Rides", "Free Parking"]
    }
];
