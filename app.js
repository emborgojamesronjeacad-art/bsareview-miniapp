// app.js
// Agricultural Reviewer App
// 6 Subjects × 50 Questions = 300 Questions
// answer is the zero-based index of the correct option.

const subjects = [
  {
    id: 1,
    name: "Agricultural Extension and Communication",
    questions: [
      ["What is the primary goal of agricultural extension?", ["To increase taxes", "To educate farmers and improve their livelihoods", "To replace farmers with machines", "To regulate food prices"], 1],
      ["Who is widely recognized as the father of agricultural extension?", ["Seaman A. Knapp", "Gregor Mendel", "Louis Pasteur", "Norman Borlaug"], 0],
      ["Which is an example of individual extension teaching?", ["Field day", "Radio broadcast", "Farm and home visit", "Farmers' rally"], 2],
      ["Which extension method reaches a large audience simultaneously?", ["Individual interview", "Farm visit", "Personal letter", "Radio broadcast"], 3],
      ["What does communication involve?", ["Transferring information and understanding", "Selling farm products only", "Planting crops", "Measuring soil fertility"], 0],
      ["In communication, who originates the message?", ["Receiver", "Sender", "Channel", "Feedback"], 1],
      ["What is feedback in communication?", ["The communication barrier", "The original message", "The receiver's response", "The communication channel"], 2],
      ["Which is an example of a mass communication medium?", ["Personal interview", "Home visit", "Individual consultation", "Television"], 3],
      ["What is the main purpose of a demonstration in extension?", ["To show how to perform a practice", "To collect taxes", "To prohibit farming", "To replace all farm workers"], 0],
      ["Which extension approach encourages farmers to learn by doing?", ["Lecture only", "Demonstration method", "Memorization only", "Written examination"], 1],
      ["What is the first step in planning an extension program?", ["Purchase equipment", "Conduct the final evaluation", "Identify community needs", "Print certificates"], 2],
      ["What does participatory extension emphasize?", ["Decisions made only by officials", "One-way communication", "Avoiding farmer feedback", "Farmer involvement in decision-making"], 3],
      ["Which is an example of a visual communication aid?", ["Poster", "Telephone conversation", "Radio commentary", "Oral interview"], 0],
      ["What is the main purpose of an extension evaluation?", ["To increase paperwork", "To determine program effectiveness", "To prevent farmer participation", "To eliminate training"], 1],
      ["Which factor is essential for effective communication?", ["Using unfamiliar terms", "Ignoring feedback", "Using language understood by the audience", "Providing incomplete information"], 2],
      ["What is an innovation in agricultural extension?", ["An old practice that never changes", "A government tax", "A farm boundary", "An idea or practice perceived as new"], 3],
      ["Who is an early adopter?", ["Someone who adopts an innovation relatively early", "Someone who never learns", "A person who rejects all new ideas", "A person who adopts last"], 0],
      ["What is the purpose of a field day?", ["To collect land taxes", "To allow farmers to observe and learn from demonstrations", "To prohibit farm visits", "To conduct soil excavation only"], 1],
      ["Which is a common barrier to communication?", ["Clear language", "Active listening", "Noise and misunderstanding", "Constructive feedback"], 2],
      ["What does ICT stand for?", ["International Crop Treatment", "Integrated Cattle Training", "Information Control Technique", "Information and Communication Technology"], 3],
      ["Which is an example of interpersonal communication?", ["A conversation between an extension worker and a farmer", "A national television broadcast", "A newspaper advertisement", "A recorded radio program"], 0],
      ["What is the main purpose of a farm visit?", ["To impose penalties", "To provide personalized advice at the farm", "To set market prices", "To replace farmer decisions"], 1],
      ["Which research approach involves farmers in identifying and solving problems?", ["Laboratory testing alone", "Top-down instruction only", "Participatory action research", "Random advertising"], 2],
      ["What is a training needs assessment?", ["A final financial audit", "A list of farm products", "A method for setting crop prices", "A process for identifying knowledge and skill gaps"], 3],
      ["Which extension method is suitable for teaching a small group?", ["Group discussion", "National television", "A nationwide radio announcement", "A mass newspaper advertisement"], 0],
      ["What is the role of an extension worker?", ["To control all farm decisions", "To facilitate learning and connect farmers with useful information", "To guarantee all harvests", "To eliminate farmer organizations"], 1],
      ["Which is the best indicator of adoption of a farming practice?", ["The number of posters printed", "The number of meetings scheduled", "Farmers actually using the practice", "The size of the extension office"], 2],
      ["What is the purpose of a baseline survey?", ["To replace program evaluation", "To advertise farm machinery", "To establish market monopolies", "To document conditions before an intervention"], 3],
      ["Which is a characteristic of an effective extension message?", ["Clear, accurate, and relevant information", "Unverified claims", "Technical jargon without explanation", "Conflicting instructions"], 0],
      ["What does adult learning generally emphasize?", ["Memorizing unrelated facts", "Relevant experience and practical problem-solving", "Avoiding learner participation", "Learning without objectives"], 1],
      ["Which is an example of nonverbal communication?", ["A written report", "A radio announcement", "Facial expressions and gestures", "A text message"], 2],
      ["Why should extension materials be culturally appropriate?", ["To make them more expensive", "To discourage local knowledge", "To avoid communicating with farmers", "To improve relevance and understanding"], 3],
      ["What is the diffusion of innovation?", ["The process by which an innovation spreads through a social system", "The destruction of seed varieties", "The movement of soil by wind", "The regulation of commodity prices"], 0],
      ["Which factor can influence the adoption of agricultural innovations?", ["The color of the extension office", "Perceived usefulness and compatibility with existing practices", "The number of office chairs", "The length of a report alone"], 1],
      ["What is a result demonstration?", ["A lesson on public speaking", "A farm registration process", "Evidence showing the outcome of a recommended practice", "A list of extension employees"], 2],
      ["What is the main purpose of a method demonstration?", ["To display final yields only", "To conduct a market auction", "To measure rainfall only", "To teach the steps of performing a practice"], 3],
      ["Which is an example of upward communication?", ["A farmer reporting a problem to an extension supervisor", "A supervisor issuing instructions to staff", "A radio broadcast to farmers", "A poster displayed in a market"], 0],
      ["What does two-way communication allow?", ["Only the sender to speak", "Both parties to exchange messages and feedback", "Messages to be sent without a receiver", "All feedback to be ignored"], 1],
      ["Which organization is associated with international food and agricultural development?", ["FIFA", "IMO", "FAO", "ICAO"], 2],
      ["What is a farm record used for in extension work?", ["To replace all field observations", "To determine a farmer's personality", "To guarantee a profit", "To support farm planning and decision-making"], 3],
      ["Which is a suitable way to communicate with farmers who have limited literacy?", ["Use pictures, demonstrations, and oral explanations", "Distribute text-heavy materials only", "Use unexplained technical terms", "Avoid practical examples"], 0],
      ["What is an extension campaign?", ["A single private conversation", "A coordinated set of activities promoting a specific message or practice", "A farm machinery repair", "A soil classification system"], 1],
      ["Why are farmer organizations useful in extension?", ["They eliminate the need for learning", "They prevent cooperation", "They support collective learning and action", "They guarantee identical farm incomes"], 2],
      ["What is monitoring in an extension program?", ["An activity performed only after several years", "A process for setting commodity prices", "A method for choosing crop varieties", "Regular tracking of activities and progress"], 3],
      ["What is a SMART objective?", ["Specific, Measurable, Achievable, Relevant, and Time-bound", "Simple, Manual, Agricultural, Rural, and Technical", "Strategic, Modern, Accurate, Random, and Traditional", "Social, Marketable, Annual, Regional, and Tested"], 0],
      ["Which is an example of a communication channel?", ["A farm budget", "A mobile messaging application", "A crop disease", "A fertilizer nutrient"], 1],
      ["What should an extension worker do when farmers disagree with a recommendation?", ["Ignore their concerns", "End all communication", "Listen, investigate, and discuss suitable alternatives", "Force immediate adoption"], 2],
      ["Which is the best reason to use local farmer leaders in extension?", ["They remove the need for evidence", "They guarantee universal adoption", "They replace every specialist", "They can help build trust and facilitate communication"], 3],
      ["What is the purpose of a community needs assessment?", ["To identify priority problems and resources", "To select a television channel only", "To calculate fertilizer prices only", "To determine national borders"], 0],
      ["Which practice supports ethical communication?", ["Exaggerating expected yields", "Providing truthful information and respecting privacy", "Hiding relevant risks", "Promising results that cannot be guaranteed"], 1]
    ]
  },
  {
    id: 2,
    name: "Agricultural Economics and Marketing",
    questions: [
      ["What is agricultural economics primarily concerned with?", ["Animal anatomy only", "The allocation of scarce resources in agriculture", "Plant disease identification only", "Weather forecasting alone"], 1],
      ["What is opportunity cost?", ["The total money in a bank", "The selling price of a product", "The value of the next-best alternative forgone", "The amount of tax collected"], 2],
      ["What does the law of demand generally state?", ["Demand always increases with price", "Price never affects demand", "Supply determines every purchase", "Quantity demanded falls as price rises, other things equal"], 3],
      ["What does the law of supply generally state?", ["Quantity supplied rises as price rises, other things equal", "Quantity supplied always falls as price rises", "Supply is unrelated to price", "Demand always equals zero"], 0],
      ["What is a market equilibrium?", ["A condition of zero production", "A point where quantity demanded equals quantity supplied", "A situation with no buyers", "A situation where every product is free"], 1],
      ["What is a fixed cost?", ["A cost that changes with each unit produced", "The market value of a harvest", "A cost that remains constant over the relevant production range", "The revenue from sales"], 2],
      ["Which is an example of a variable farm cost?", ["Annual land rent that does not change with output", "A fixed annual insurance premium", "A permanent land purchase", "Fertilizer used according to the area planted"], 3],
      ["How is total revenue calculated?", ["Price per unit multiplied by quantity sold", "Total cost divided by labor", "Fixed cost minus variable cost", "Profit divided by acreage"], 0],
      ["How is profit generally calculated?", ["Total cost plus total revenue", "Total revenue minus total cost", "Total revenue multiplied by total cost", "Fixed cost plus land area"], 1],
      ["What is gross margin?", ["Total revenue minus all fixed and variable costs", "Total fixed cost minus land value", "Revenue minus specified variable costs", "The difference between two market prices only"], 2],
      ["What is price elasticity of demand?", ["The total quantity stored", "The difference between fixed and variable costs", "The average price of all commodities", "The responsiveness of quantity demanded to a price change"], 3],
      ["If demand is elastic, what happens to quantity demanded when price increases?", ["It decreases proportionately more than the price increase", "It always stays unchanged", "It increases in every case", "It decreases by exactly zero"], 0],
      ["What is a production function?", ["A list of market prices", "A relationship between inputs and output", "A method of measuring rainfall", "A livestock vaccination schedule"], 1],
      ["What is marginal product?", ["The total cost of all inputs", "The average selling price", "The additional output from one more unit of an input", "The difference between two taxes"], 2],
      ["What does diminishing marginal returns mean?", ["Output always falls when any input is added", "All inputs become free", "Total output can never increase", "Additional output from extra units of an input eventually declines when other inputs are fixed"], 3],
      ["Which is an example of a capital resource in farming?", ["A tractor", "Rainfall", "Natural sunlight", "A farmer's physical effort"], 0],
      ["What is agricultural marketing?", ["Growing crops without selling them", "Activities involved in moving products from producers to consumers", "Measuring soil pH only", "Providing livestock vaccinations"], 1],
      ["What is a marketing margin?", ["The total area planted", "The amount of seed sown", "The difference between the consumer price and producer price at comparable units and quality", "The number of farm workers"], 2],
      ["What is a cooperative?", ["A government tax office", "A private weather station", "A type of fertilizer", "An organization owned and operated by members for their mutual benefit"], 3],
      ["What is one advantage of agricultural cooperatives?", ["Collective bargaining and potentially lower input costs", "Guaranteed profits in every season", "Complete elimination of market risk", "Freedom from all production costs"], 0],
      ["What is value addition?", ["Reducing product quality", "Increasing a product's value through processing, grading, packaging, or related services", "Selling only unprocessed commodities", "Increasing waste intentionally"], 1],
      ["Why is grading important in agricultural marketing?", ["It guarantees the highest price", "It eliminates all transportation costs", "It helps classify products according to quality and standards", "It removes the need for storage"], 2],
      ["What is the main purpose of agricultural storage?", ["To increase spoilage", "To prevent all price changes", "To eliminate market demand", "To preserve products and help manage the timing of sales"], 3],
      ["What is a supply chain?", ["The network of activities and participants moving products from inputs to consumers", "A list of crop diseases", "A farm boundary map", "A livestock breeding chart"], 0],
      ["What is a market intermediary?", ["A soil scientist only", "A trader, wholesaler, retailer, or other participant between producers and buyers", "A seed germination test", "A farm irrigation method"], 1],
      ["What is comparative advantage?", ["Producing everything at the highest cost", "Avoiding specialization", "Having a lower opportunity cost of producing a good", "Selling goods without considering alternatives"], 2],
      ["What is inflation?", ["A decrease in all production costs", "A rise in the quantity of rainfall", "A decline in every commodity's quality", "A sustained increase in the general price level"], 3],
      ["What is depreciation in farm management?", ["The reduction in the value of an asset over time", "The increase in soil fertility", "The increase in farm output", "The sale of a crop at auction"], 0],
      ["What is a farm budget?", ["A record of rainfall alone", "An estimate of expected income and expenses", "A list of animal breeds", "A map of farm boundaries only"], 1],
      ["What is break-even output?", ["The output that maximizes rainfall", "The quantity with the highest fixed cost", "The output level at which total revenue equals total cost", "The amount produced without labor"], 2],
      ["What is risk in agricultural production?", ["A guaranteed profit", "A fixed selling price", "A certain outcome known in advance", "Uncertainty about outcomes that can be described probabilistically"], 3],
      ["Which is an example of production risk?", ["A crop disease outbreak", "A printed market brochure", "A farm logo", "A receipt for office supplies"], 0],
      ["What is diversification in farming?", ["Planting only one crop forever", "Producing different crops or enterprises to spread risk", "Eliminating all farm records", "Selling only to one buyer by rule"], 1],
      ["What is contract farming?", ["A system with no agreement between parties", "A method of soil sampling", "An arrangement where production and marketing terms are agreed upon in advance", "A type of animal disease"], 2],
      ["What is a futures market commonly used for?", ["Measuring crop height", "Testing seed viability", "Determining soil texture", "Trading standardized contracts for future delivery or settlement"], 3],
      ["What is consumer surplus?", ["The difference between what consumers are willing to pay and what they actually pay", "The total farm labor cost", "The producer's total fixed cost", "The value of unused fertilizer"], 0],
      ["What is producer surplus?", ["The total amount of unsold stock", "The difference between the price received and the minimum price producers would accept, over units sold", "The amount of rainfall above normal", "The total amount of imported machinery"], 1],
      ["What is a public good in economics?", ["A product that only one person can use at a time and from which others can be excluded", "A product sold only at auctions", "A good that is generally non-excludable and non-rival", "A product that must be imported"], 2],
      ["What is a subsidy?", ["A penalty for producing a crop", "A type of soil amendment", "A fee paid only by consumers", "Financial assistance provided by a government or other institution"], 3],
      ["What does GDP measure?", ["The value of final goods and services produced within a country over a period", "The number of farms in a province only", "The price of one commodity", "The quantity of rainfall in a country"], 0],
      ["What is agricultural credit?", ["A crop rotation method", "Borrowed funds used for agricultural purposes", "A livestock vaccination", "A system for classifying soils"], 1],
      ["What is working capital?", ["The market value of farmland only", "The total amount of annual rainfall", "Funds and short-term resources used for day-to-day operations", "The total number of farm buildings"], 2],
      ["What is inventory management?", ["Planting crops at random", "Setting national interest rates", "Breeding livestock only", "Managing stocks of inputs and products to meet needs and limit costs"], 3],
      ["What is a value chain?", ["The activities that add value as a product moves from production to consumption", "A method of measuring crop height", "A system for classifying animal diseases", "A schedule of rainfall"], 0],
      ["Why is market information important to farmers?", ["It guarantees a fixed profit", "It helps farmers make informed selling and production decisions", "It removes all price fluctuations", "It eliminates the need for transportation"], 1],
      ["What is opportunity cost of land?", ["Its annual rainfall", "Its soil color", "The value of the best alternative use forgone", "The number of workers on the farm"], 2],
      ["What is economies of scale?", ["Higher average costs at every level of production", "A decrease in output due to drought", "The absence of specialization", "Lower average costs as production expands over a relevant range"], 3],
      ["What is a monopsony?", ["A market with one dominant buyer", "A market with many competing buyers", "A market with no sellers", "A market with only one consumer and no producer"], 0],
      ["What is postharvest loss?", ["An increase in market demand", "A reduction in quantity or quality after harvest", "An increase in planted acreage", "A rise in farm labor productivity"], 1],
      ["Which practice can reduce postharvest losses in grain?", ["Storing wet grain in sealed containers without drying", "Leaving grain exposed to rain", "Drying grain to a safe moisture level before proper storage", "Mixing clean grain with infested grain"], 2]
    ]
  },
  {
    id: 3,
    name: "Animal Science",
    questions: [
      ["What is the scientific study of animals called?", ["Geology", "Animal science", "Astronomy", "Hydrology"], 1],
      ["Which animal is a ruminant?", ["Pig", "Chicken", "Cattle", "Horse"], 2],
      ["How many compartments are in a typical adult cattle stomach?", ["One", "Two", "Three", "Four"], 3],
      ["Which stomach compartment is commonly called the true stomach of a ruminant?", ["Abomasum", "Rumen", "Reticulum", "Omasum"], 0],
      ["What is the main function of the rumen?", ["Filtering urine", "Microbial fermentation of feed", "Producing eggs", "Storing bile"], 1],
      ["Which nutrient is the main energy source in most livestock diets?", ["Water", "Minerals", "Carbohydrates", "Vitamins"], 2],
      ["Which nutrient is particularly important for tissue growth and repair?", ["Water", "Minerals only", "Carbohydrates only", "Protein"], 3],
      ["What is colostrum?", ["The first milk produced after birth", "A type of pasture grass", "A livestock parasite", "A feed additive made from salt"], 0],
      ["Why is colostrum important to newborn mammals?", ["It prevents all diseases permanently", "It supplies antibodies and essential nutrients", "It replaces water throughout life", "It determines the animal's breed"], 1],
      ["What is the process of giving birth in cattle called?", ["Molting", "Incubation", "Calving", "Shearing"], 2],
      ["What is artificial insemination?", ["Natural mating in a pasture", "A method of measuring body weight", "A procedure for dehorning", "Introducing semen into the female reproductive tract by artificial means"], 3],
      ["What is estrus?", ["The period when a female is sexually receptive", "The final stage of digestion", "A type of feed deficiency", "The process of egg incubation"], 0],
      ["What is gestation?", ["The period between two milkings", "The period of pregnancy", "The process of wool growth", "The time required to digest feed"], 1],
      ["What is the gestation period of cattle approximately?", ["60 days", "150 days", "283 days", "500 days"], 2],
      ["Which animal is commonly raised for both meat and eggs?", ["Dairy cattle", "Silkworm", "Honeybee", "Chicken"], 3],
      ["What is brooding in poultry?", ["Providing warmth and care to young chicks", "Collecting mature cattle", "Milking dairy cows", "Shearing sheep"], 0],
      ["What is the primary function of a balanced ration?", ["To maximize feed waste", "To meet an animal's nutrient requirements", "To eliminate drinking water", "To prevent all genetic disorders"], 1],
      ["Which mineral is essential for strong bones and eggshell formation?", ["Iron only", "Sodium only", "Calcium", "Iodine only"], 2],
      ["What is feed conversion ratio (FCR)?", ["The number of animals per barn", "The amount of water in milk", "The number of eggs per nest", "Feed consumed per unit of weight gain or product output"], 3],
      ["In general, a lower FCR in meat production indicates what?", ["Better feed efficiency", "Poorer feed efficiency in all circumstances", "No relationship to feed use", "Higher mortality in every case"], 0],
      ["What is selective breeding?", ["Breeding animals without recording traits", "Choosing parents with desirable traits to improve future generations", "Feeding only one type of grass", "Preventing all reproduction"], 1],
      ["What is heredity?", ["The process of digestion", "The daily movement of livestock", "The transmission of genetic traits from parents to offspring", "The storage of animal feed"], 2],
      ["What is heterosis?", ["A disease affecting cattle", "A feed storage method", "The loss of all genetic variation", "Improved performance of crossbred offspring relative to a parental average or benchmark"], 3],
      ["Which reproductive cell is produced by males?", ["Sperm", "Ovum", "Embryo", "Placenta"], 0],
      ["Which organ produces ova in female mammals?", ["Liver", "Ovary", "Kidney", "Lung"], 1],
      ["What is weaning?", ["Starting pregnancy", "Increasing the animal's birth weight", "Gradually ending dependence on the mother's milk", "Removing all drinking water"], 2],
      ["What is mastitis?", ["A hoof injury", "A poultry feather disorder", "A type of forage", "Inflammation of the mammary gland"], 3],
      ["Which practice helps prevent the spread of livestock diseases?", ["Good sanitation and biosecurity", "Sharing needles without cleaning", "Allowing unrestricted contact with sick animals", "Ignoring quarantine"], 0],
      ["What is vaccination?", ["A method of weighing livestock", "Administration of a vaccine to stimulate protective immunity", "A process for castrating animals", "A type of feed fermentation"], 1],
      ["What is deworming?", ["Removing horns", "Clipping feathers", "Treating animals to control internal or external parasitic worms", "Collecting milk"], 2],
      ["Which animal is a monogastric livestock species?", ["Cattle", "Sheep", "Goat", "Pig"], 3],
      ["What is roughage?", ["Bulky feed rich in fiber, such as hay or pasture", "A liquid mineral supplement only", "A type of vaccine", "A poultry egg"], 0],
      ["Which feed is commonly considered a high-energy concentrate?", ["Fresh drinking water", "Maize grain", "Salt lick", "Mineral block alone"], 1],
      ["What is silage?", ["Dry grain stored in sacks", "Fresh milk after pasteurization", "Forage preserved through controlled fermentation", "A chemical used for deworming"], 2],
      ["What is hay?", ["Fresh manure", "Fermented milk", "A mineral supplement", "Forage dried and stored for animal feed"], 3],
      ["Which gas is produced by rumen fermentation and contributes to greenhouse emissions?", ["Methane", "Oxygen", "Helium", "Neon"], 0],
      ["What is the main function of the placenta during pregnancy?", ["Producing feed for the mother", "Supporting exchange of nutrients, gases, and wastes between mother and fetus", "Digesting the mother's food completely", "Producing eggshells"], 1],
      ["What is the purpose of castration in livestock management?", ["To increase unwanted breeding", "To prevent feeding", "To remove or disable male reproductive function", "To guarantee a specific coat color"], 2],
      ["Which livestock product is produced by mammary glands?", ["Wool", "Eggshell", "Honey", "Milk"], 3],
      ["Which animal is commonly farmed for wool?", ["Sheep", "Duck", "Pig", "Tilapia"], 0],
      ["What is the purpose of a pedigree record?", ["To record daily rainfall", "To document an animal's ancestry", "To measure soil acidity", "To classify fertilizers"], 1],
      ["What does body condition scoring help assess?", ["Market demand", "The color of feed", "An animal's relative body fat and condition", "The age of a pasture"], 2],
      ["Why is clean drinking water essential for livestock?", ["It eliminates every disease", "It replaces all nutrients", "It guarantees maximum weight gain", "It supports hydration, digestion, temperature regulation, and normal body functions"], 3],
      ["What is quarantine in animal production?", ["Separating animals to reduce disease introduction or spread", "Mixing sick and healthy animals", "A system of feed rationing", "A method of egg grading"], 0],
      ["What is crossbreeding?", ["Mating animals of the same exact genetic line only", "Mating animals from different breeds within the same species", "Mating unrelated species to produce fertile offspring in all cases", "Preventing animals from reproducing"], 1],
      ["Which poultry system allows birds to move within a designated outdoor area?", ["Battery brooding only", "A fully sealed incubator", "Free-range production", "Artificial insemination"], 2],
      ["What is the incubation period of chicken eggs approximately?", ["7 days", "14 days", "35 days", "21 days"], 3],
      ["Which practice is important when storing animal feed?", ["Keep feed dry, clean, and protected from pests", "Store feed in standing water", "Mix new feed with moldy feed", "Leave feed bags open in the rain"], 0],
      ["What is animal welfare?", ["Maximizing production regardless of suffering", "The physical and mental well-being of animals", "The process of selling livestock only", "The classification of feed ingredients"], 1],
      ["Which record helps a dairy farmer monitor milk production?", ["A soil survey only", "A rainfall chart only", "Daily milk yield records", "A list of crop varieties"], 2]
    ]
  },
  {
    id: 4,
    name: "Crop Protection",
    questions: [
      ["What is crop protection?", ["The study of farm machinery only", "The management of pests, diseases, and weeds that harm crops", "The study of animal breeding", "The marketing of farm products"], 1],
      ["Which organism causes late blight of potato?", ["Aphid", "Nematode", "Phytophthora infestans", "Grasshopper"], 2],
      ["Which of the following is a fungal plant pathogen?", ["Maize", "Rice", "Earthworm", "Puccinia species"], 3],
      ["What is an insect pest?", ["An insect that damages crops or stored products", "Any beneficial soil organism", "A crop nutrient", "A type of fertilizer"], 0],
      ["Which insect is a common sap-sucking pest?", ["Earthworm", "Aphid", "Butterfly larva only", "Honeybee"], 1],
      ["What is a weed?", ["A crop grown for sale", "A beneficial insect", "A plant growing where it is unwanted", "A soil nutrient"], 2],
      ["What is integrated pest management (IPM)?", ["Using the highest pesticide dose at all times", "Eliminating all insects, including beneficial species", "Relying exclusively on one pesticide", "Combining compatible methods to manage pests economically and sustainably"], 3],
      ["What is a biological control agent?", ["A natural enemy used to suppress a pest", "A chemical fertilizer", "A harvesting machine", "A crop variety"], 0],
      ["Which organism is commonly used to control aphids biologically?", ["Termite", "Lady beetle", "Mosquito", "Stored-grain weevil"], 1],
      ["What is a pesticide?", ["A crop rotation schedule", "A type of irrigation pipe", "A substance used to prevent, destroy, or control pests", "A soil texture class"], 2],
      ["What is a herbicide designed to control?", ["Fungi", "Bacteria", "Rodents", "Weeds"], 3],
      ["What is a fungicide used for?", ["Managing fungal diseases", "Increasing soil depth", "Improving animal reproduction", "Measuring market prices"], 0],
      ["What is an insecticide?", ["A fertilizer that supplies nitrogen", "A substance used to control insects", "A tool for pruning trees", "A method of soil sampling"], 1],
      ["What does pesticide resistance mean?", ["All pests are permanently eliminated", "Plants become immune to every disease", "A pest population becomes less susceptible to a pesticide", "A pesticide becomes a fertilizer"], 2],
      ["Which practice helps delay pesticide resistance?", ["Using the same mode of action repeatedly without a plan", "Applying pesticides at any dose", "Ignoring pest monitoring", "Rotating modes of action and integrating nonchemical controls"], 3],
      ["What is a plant disease?", ["A harmful disruption of normal plant function caused by a pathogen or other factor", "Any natural change in leaf color", "The normal process of seed germination", "A type of fertilizer"], 0],
      ["Which is an example of a bacterial plant disease?", ["Powdery mildew", "Bacterial wilt", "Rust", "Downy mildew"], 1],
      ["What is a vector in plant pathology?", ["A type of soil mineral", "A crop growth stage", "An organism that transmits a pathogen", "A harvesting tool"], 2],
      ["Which insect commonly transmits many plant viruses?", ["Earthworm", "Honeybee in all cases", "Butterfly pollinator only", "Aphid"], 3],
      ["What is a symptom of a plant disease?", ["Chlorosis or yellowing of leaves", "A properly formed root", "Normal seed development", "Healthy flowering"], 0],
      ["What is a disease sign?", ["A plant's response to drought only", "Visible evidence of the pathogen itself, such as fungal spores", "A market price change", "The age of the crop"], 1],
      ["What is crop rotation used for in pest management?", ["To increase pest survival indefinitely", "To eliminate the need for all monitoring", "To disrupt pest life cycles and reduce buildup", "To make every soil identical"], 2],
      ["What is a quarantine measure in plant protection?", ["Applying excess fertilizer", "Increasing weed seed movement", "Mixing infested seeds with healthy seeds", "Restricting movement of infested plant materials to prevent pest spread"], 3],
      ["What is a seed treatment?", ["Applying a suitable protective product or treatment to seed before planting", "Harvesting grain at maturity", "Storing produce in a market", "Pruning mature trees"], 0],
      ["What is a plant-parasitic nematode?", ["A beneficial insect", "A microscopic roundworm that feeds on plants", "A fungal spore", "A mineral nutrient"], 1],
      ["Which is a common symptom of root-knot nematode infestation?", ["Larger fruit in every case", "Improved root growth", "Galls on roots", "Blue flower petals"], 2],
      ["What is the economic injury level?", ["The number of farm workers required", "The total amount of fertilizer applied", "The lowest market price", "The pest population at which economic damage justifies control"], 3],
      ["What is the economic threshold in pest management?", ["The pest level at which action should be taken to prevent reaching the economic injury level", "The highest possible pesticide dose", "The total crop yield", "The number of weeds after harvest"], 0],
      ["What is a contact pesticide?", ["A product that works only as a fertilizer", "A pesticide that affects a target when it contacts the treated surface or organism", "A seed variety", "A method of biological nitrogen fixation"], 1],
      ["What is a systemic pesticide?", ["A pesticide that always remains outside the plant", "A product used only to control weeds", "A pesticide absorbed and moved within a plant", "A pesticide that has no biological activity"], 2],
      ["Why is personal protective equipment important when applying pesticides?", ["It increases pest reproduction", "It replaces label instructions", "It guarantees zero exposure", "It reduces exposure to hazardous substances"], 3],
      ["What should a pesticide applicator read before use?", ["The product label and safety instructions", "A random social media post", "A market advertisement", "An unrelated crop calendar"], 0],
      ["Which practice helps protect pollinators?", ["Spraying flowering crops indiscriminately during peak bee activity", "Following label restrictions and avoiding harmful applications when pollinators are active", "Destroying all flowering plants", "Applying any pesticide without checking risks"], 1],
      ["What is the purpose of scouting a crop?", ["To determine national population", "To measure market inflation", "To detect pests, diseases, and crop problems through regular observation", "To calculate livestock gestation"], 2],
      ["Which is a mechanical weed control method?", ["Using a systemic fungicide", "Introducing a virus to livestock", "Applying an insect attractant", "Hand weeding or hoeing"], 3],
      ["What is cultural pest control?", ["Changing crop practices to make conditions less favorable for pests", "Using only chemical pesticides", "Ignoring field sanitation", "Planting infested seed intentionally"], 0],
      ["Which crop practice can reduce disease carryover?", ["Keeping all infected residues indefinitely", "Removing or managing infected crop residues appropriately", "Planting diseased seedlings", "Irrigating every field continuously"], 1],
      ["What is a fungicide's mode of action?", ["The color of its packaging", "The amount of seed planted", "The biological process or target through which it affects a fungus", "The price of the crop"], 2],
      ["Which environmental condition often favors many fungal plant diseases?", ["Completely dry leaves at all times", "Absence of susceptible hosts", "No pathogen present", "Prolonged leaf wetness and favorable humidity"], 3],
      ["What is damping-off?", ["Decay of seeds or young seedlings before or soon after emergence", "A type of fruit ripening", "A nutrient deficiency in mature cattle", "A market grading system"], 0],
      ["What is crop resistance to pests?", ["A guarantee that pests will never be present", "The ability of a crop variety to limit pest damage or development", "The use of more fertilizer", "A type of storage container"], 1],
      ["What is a pesticide preharvest interval?", ["The time required to plant a seed", "The length of a crop rotation", "The required time between the last pesticide application and harvest", "The period between two rainfall events"], 2],
      ["What is a major risk of pesticide misuse?", ["Guaranteed improvement of biodiversity", "Elimination of all residues", "Prevention of resistance under every condition", "Harm to people, beneficial organisms, and the environment"], 3],
      ["What is sanitation in crop protection?", ["Removing or managing sources of pests and pathogens", "Increasing the spread of infested material", "Mixing healthy and diseased seed", "Leaving contaminated tools uncleaned"], 0],
      ["What is a pheromone trap often used for?", ["Increasing soil salinity", "Monitoring or trapping certain insect pests", "Measuring soil nitrogen directly", "Irrigating crops"], 1],
      ["Which is a common fungal disease of many cereal crops?", ["Foot-and-mouth disease", "Mastitis", "Rust", "Newcastle disease"], 2],
      ["Why should pesticide containers never be reused for food or drinking water?", ["They always improve water quality", "They are designed for food storage", "They guarantee safe drinking water", "Hazardous residues may contaminate their contents"], 3],
      ["What is a major advantage of resistant crop varieties?", ["They can reduce pest damage and sometimes lower pesticide needs", "They eliminate the need for all crop management", "They always yield well under every condition", "They prevent all environmental stresses"], 0],
      ["Which practice is important when disposing of pesticide waste?", ["Pouring leftovers into streams", "Following the label and local hazardous-waste requirements", "Burning containers in any location", "Burying waste beside wells"], 1],
      ["What is the purpose of an accurate pest identification?", ["To select pesticides at random", "To avoid field monitoring", "To choose an appropriate and effective management strategy", "To guarantee a market price"], 2]
    ]
  },
  {
    id: 5,
    name: "Crop Science",
    questions: [
      ["What is crop science?", ["The study of ocean currents", "The study of crop production, management, and improvement", "The study of animal anatomy only", "The study of mineral extraction"], 1],
      ["Which plant part primarily absorbs water and mineral nutrients?", ["Flower", "Fruit", "Root", "Seed coat"], 2],
      ["What is photosynthesis?", ["The breakdown of rocks into soil", "The absorption of water by roots only", "The release of seeds from fruit", "The process by which plants use light energy to make organic compounds from carbon dioxide and water"], 3],
      ["Which gas do plants absorb during photosynthesis?", ["Carbon dioxide", "Oxygen", "Nitrogen gas directly in all plants", "Hydrogen"], 0],
      ["Which pigment absorbs light for photosynthesis?", ["Hemoglobin", "Chlorophyll", "Melanin", "Keratin"], 1],
      ["What is transpiration?", ["The movement of nutrients through soil only", "The formation of seeds", "The loss of water vapor from plant surfaces, especially leaves", "The conversion of flowers into fruit"], 2],
      ["What is germination?", ["The ripening of fruit", "The loss of leaves", "The harvesting of grain", "The resumption of embryo growth to produce a seedling"], 3],
      ["Which condition is generally necessary for seed germination?", ["Adequate moisture", "Complete absence of water", "Permanent exposure to toxic chemicals", "Destruction of the embryo"], 0],
      ["What is seed dormancy?", ["A stage when plants produce maximum fruit", "A condition in which a viable seed fails to germinate under otherwise favorable conditions", "A type of fertilizer application", "The harvesting of mature grain"], 1],
      ["What is a monocotyledon?", ["A plant with no roots", "A plant that produces no seeds", "A flowering plant whose embryo typically has one cotyledon", "A plant that lacks vascular tissue"], 2],
      ["Which is a common monocot crop?", ["Bean", "Peanut", "Tomato", "Rice"], 3],
      ["Which is a common dicot crop?", ["Soybean", "Maize", "Rice", "Sugarcane"], 0],
      ["What is pollination?", ["The absorption of fertilizer", "The transfer of pollen to a receptive stigma in flowering plants", "The growth of roots into soil", "The storage of harvested grain"], 1],
      ["What is self-pollination?", ["Pollination between unrelated species", "Pollination by wind only", "Transfer of pollen to a stigma of the same flower or plant, depending on the species", "The absence of pollen"], 2],
      ["What is cross-pollination?", ["The production of roots", "The formation of chlorophyll", "The movement of water through xylem", "Transfer of pollen between flowers on different plants of the same species"], 3],
      ["What is crop rotation?", ["Growing different crops in sequence on the same land", "Growing only one crop indefinitely", "Harvesting all crops on the same day", "Changing farm boundaries"], 0],
      ["Which is a major benefit of leguminous crops in a rotation?", ["They remove all nutrients from soil", "They can contribute nitrogen through symbiosis with nitrogen-fixing bacteria", "They eliminate the need for water", "They always prevent every pest"], 1],
      ["Which bacterium commonly forms nitrogen-fixing nodules on legumes?", ["Lactobacillus", "Salmonella", "Rhizobium", "Vibrio"], 2],
      ["What is plant breeding?", ["The process of marketing grain", "The removal of all genetic variation", "The measurement of rainfall", "The development of crop varieties with desirable traits"], 3],
      ["What is hybrid vigor also called?", ["Heterosis", "Dormancy", "Transpiration", "Etiolation"], 0],
      ["What is a cultivar?", ["A type of agricultural tax", "A cultivated plant variety selected for particular traits", "A soil horizon", "A type of irrigation equipment"], 1],
      ["What is the purpose of seed certification?", ["To guarantee the highest market price", "To ensure every seed is genetically identical", "To provide assurance of varietal identity and specified seed quality standards", "To eliminate the need for seed testing"], 2],
      ["What is seed viability?", ["The weight of a seed bag", "The color of a seed coat", "The number of leaves on a seedling", "The ability of a seed to remain alive and potentially germinate"], 3],
      ["What is plant spacing?", ["The distance between plants or planting rows", "The depth of a river", "The weight of harvested grain", "The acidity of fertilizer"], 0],
      ["Why is proper plant spacing important?", ["It guarantees identical yields in all fields", "It helps manage competition for light, water, and nutrients", "It prevents all plant diseases", "It eliminates the need for irrigation"], 1],
      ["What is thinning in crop production?", ["Adding more seeds to every planting hole", "Harvesting mature grain", "Removing excess seedlings to achieve the desired stand", "Applying pesticides to weeds"], 2],
      ["What is the main purpose of irrigation?", ["To increase soil erosion", "To eliminate all soil nutrients", "To prevent photosynthesis", "To supply water to crops when needed"], 3],
      ["What is mulching?", ["Covering the soil surface with suitable materials", "Removing every root from the field", "Mixing grain with water after harvest", "Planting seeds without spacing"], 0],
      ["Which is a potential benefit of organic mulch?", ["It always raises soil salinity", "It can conserve moisture and suppress weeds", "It prevents all insect activity", "It stops all nutrient cycling"], 1],
      ["What is the harvest index?", ["The amount of rainfall received", "The number of plants per hectare", "The ratio of economic yield to total aboveground biological yield, commonly expressed as a fraction or percentage", "The weight of seed before planting"], 2],
      ["What is lodging in cereal crops?", ["The formation of new roots", "The development of seed dormancy", "The natural opening of flowers", "The bending or falling of stems, often before harvest"], 3],
      ["What is photoperiodism?", ["A plant's response to the relative lengths of day and night", "The movement of water through soil", "The formation of root nodules", "The breakdown of harvested grain"], 0],
      ["What is vernalization?", ["The drying of seeds in sunlight", "Induction or acceleration of flowering by exposure to prolonged low temperatures in responsive plants", "The removal of weeds by hand", "The application of phosphorus fertilizer"], 1],
      ["What is a C4 plant?", ["A plant that cannot perform photosynthesis", "A plant with no chloroplasts", "A plant using a photosynthetic pathway that initially fixes carbon into a four-carbon compound", "A plant that grows only underwater"], 2],
      ["Which is a common C4 crop?", ["Rice", "Wheat", "Barley", "Maize"], 3],
      ["Which is generally a C3 crop?", ["Wheat", "Maize", "Sugarcane", "Sorghum"], 0],
      ["What is the main function of xylem?", ["Transporting sugars from leaves only", "Transporting water and mineral nutrients through the plant", "Producing pollen", "Storing seeds outside the fruit"], 1],
      ["What is the main function of phloem?", ["Absorbing soil water", "Anchoring plants", "Transporting sugars and other organic substances", "Producing root hairs"], 2],
      ["What is chlorosis?", ["A normal seed stage", "A type of fruit formation", "A method of crop rotation", "Yellowing of plant tissue due to reduced chlorophyll"], 3],
      ["Which nutrient is a major component of chlorophyll?", ["Magnesium", "Sodium", "Gold", "Mercury"], 0],
      ["Which macronutrient is strongly associated with vegetative growth and protein synthesis?", ["Helium", "Nitrogen", "Neon", "Argon"], 1],
      ["Which nutrient is important for energy transfer and root development?", ["Mercury", "Lead", "Phosphorus", "Neon"], 2],
      ["Which nutrient is important for stomatal regulation and enzyme activation?", ["Silver", "Gold", "Tin", "Potassium"], 3],
      ["What is a cover crop?", ["A crop grown to protect and improve soil between or alongside main crops", "A crop grown only for ornamental display", "A crop that cannot germinate", "A crop harvested exclusively underwater"], 0],
      ["What is green manuring?", ["Applying plastic sheets to soil", "Growing and incorporating plant material into soil to improve it", "Burning all crop residues", "Removing organic matter from fields"], 1],
      ["What is intercropping?", ["Growing one crop alone every year", "Planting only after harvest", "Growing two or more crops together on the same field for part or all of their growth periods", "Storing seeds in a warehouse"], 2],
      ["What is a major advantage of appropriate crop diversification?", ["Guaranteed identical yields every year", "Elimination of all labor requirements", "No need for soil fertility management", "Potentially improved resource use and reduced production risk"], 3],
      ["What is seed rate?", ["The quantity of seed used per unit area", "The price of one seed", "The percentage of soil clay", "The depth of irrigation water"], 0],
      ["What is the purpose of hardening seedlings before transplanting?", ["To stop root growth permanently", "To gradually acclimate seedlings to field conditions", "To eliminate the need for sunlight", "To prevent them from absorbing water"], 1],
      ["What is postharvest handling in crop science?", ["Planting the seed before rainfall", "Pollinating flowers", "Managing harvested produce to maintain quality and reduce losses", "Applying fertilizer to growing roots"], 2]
    ]
  },
  {
    id: 6,
    name: "Soil Science",
    questions: [
      ["What is soil science?", ["The study of stars", "The study of soil formation, properties, classification, and management", "The study of livestock reproduction", "The study of ocean waves"], 1],
      ["Which three mineral particle sizes are commonly used in soil texture classification?", ["Pebbles, stones, and gravel", "Humus, water, and air", "Sand, silt, and clay", "Nitrogen, phosphorus, and potassium"], 2],
      ["Which soil particle is generally the largest among sand, silt, and clay?", ["Clay", "Silt", "Humus", "Sand"], 3],
      ["Which soil particle has the smallest diameter among sand, silt, and clay?", ["Clay", "Sand", "Gravel", "Silt"], 0],
      ["What is soil texture?", ["The color of the soil only", "The relative proportions of sand, silt, and clay", "The depth of the groundwater table", "The number of earthworms in a field"], 1],
      ["What is soil structure?", ["The soil's market value", "The chemical formula of water", "The arrangement of soil particles into aggregates", "The color of plant leaves"], 2],
      ["What is humus?", ["A mineral fertilizer", "A type of sand", "A pesticide residue", "Relatively stable organic matter formed by decomposition"], 3],
      ["What is soil pH?", ["A measure of soil acidity or alkalinity", "A measure of soil depth only", "The percentage of sand only", "A measure of crop price"], 0],
      ["A soil with a pH of 5.0 is generally described as what?", ["Neutral", "Acidic", "Alkaline", "Saline in every case"], 1],
      ["A soil with a pH of 7.0 is generally considered what?", ["Strongly acidic", "Strongly alkaline", "Neutral", "Completely infertile"], 2],
      ["Which soil property strongly influences water-holding capacity?", ["The color of the farm fence", "The price of seed", "The height of nearby trees only", "Texture and structure"], 3],
      ["What is soil porosity?", ["The proportion of soil volume occupied by pores", "The amount of grain produced", "The percentage of nitrogen in leaves only", "The price of fertilizer"], 0],
      ["What is bulk density?", ["The total mass of a field", "The dry mass of soil per unit of its bulk volume", "The volume of rainfall per day", "The number of pores only"], 1],
      ["Which soil usually has the greatest water-holding capacity per unit soil volume?", ["Coarse gravel", "Clean coarse sand", "Clay-rich soil, depending on its structure", "Solid bedrock"], 2],
      ["What is soil erosion?", ["The formation of new minerals only", "The increase in soil depth everywhere", "The addition of organic matter", "The detachment and transport of soil by water, wind, or other forces"], 3],
      ["Which practice helps control water erosion on sloping farmland?", ["Contour farming", "Plowing straight downhill", "Removing all vegetation", "Leaving soil bare throughout the rainy season"], 0],
      ["What is conservation tillage?", ["A system that removes all crop residues", "Tillage management that maintains substantial crop residue cover and limits soil disturbance", "A method that requires burning every field", "A system that prevents any crop rotation"], 1],
      ["What is the main role of soil organic matter?", ["It always increases soil salinity", "It replaces all mineral nutrients", "It can improve structure, nutrient cycling, and water retention", "It prevents every form of erosion"], 2],
      ["Which organism is particularly important in many soil nitrogen transformations?", ["Birds only", "Large mammals only", "Fish", "Bacteria"], 3],
      ["What is nitrogen fixation?", ["The conversion of atmospheric nitrogen into biologically usable nitrogen compounds", "The loss of all soil nitrogen", "The removal of phosphorus from rocks only", "The evaporation of soil water"], 0],
      ["Which gas makes up most of Earth's atmosphere?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], 1],
      ["Which nutrient is often associated with root development and energy transfer in plants?", ["Sodium", "Chlorine", "Phosphorus", "Helium"], 2],
      ["Which nutrient is essential for chlorophyll formation and is a component of many proteins?", ["Gold", "Mercury", "Silver", "Nitrogen"], 3],
      ["What does CEC stand for in soil science?", ["Cation exchange capacity", "Crop emergence coefficient", "Carbon evaporation cycle", "Clay erosion category"], 0],
      ["What does a high cation exchange capacity generally indicate?", ["The soil contains no charged particles", "The soil has a greater capacity to retain and exchange cations", "The soil can never become acidic", "The soil has no nutrient-holding ability"], 1],
      ["What is leaching?", ["The formation of soil aggregates", "The movement of roots toward light", "The downward movement of dissolved substances through soil with water", "The conversion of sand into clay overnight"], 2],
      ["What is soil salinity?", ["The presence of excessive organic matter only", "The absence of all dissolved minerals", "The normal formation of humus", "The accumulation of soluble salts to levels that can harm plants"], 3],
      ["What is soil compaction?", ["The compression of soil that reduces pore space", "The increase in soil porosity under every condition", "The addition of compost", "The formation of a crop canopy"], 0],
      ["Which practice can help reduce soil compaction?", ["Driving heavy machinery over wet soil repeatedly", "Avoiding unnecessary traffic and managing machinery loads", "Removing all organic matter", "Flooding every field continuously"], 1],
      ["What is the O horizon in a soil profile?", ["The unweathered bedrock layer", "The zone of maximum clay accumulation in every soil", "The surface organic layer", "The deepest groundwater layer"], 2],
      ["What is the A horizon commonly called?", ["Bedrock", "Parent rock", "Unweathered rock", "Topsoil"], 3],
      ["What is the B horizon often associated with?", ["Subsoil where materials such as clay or iron may accumulate", "Freshly fallen leaves only", "The atmosphere above the field", "The unweathered bedrock in every profile"], 0],
      ["What is parent material?", ["A mature crop canopy", "The material from which soil develops", "A type of fertilizer bag", "A soil organism"], 1],
      ["What is soil weathering?", ["The marketing of agricultural products", "The removal of every mineral", "The breakdown and alteration of rocks and minerals", "The growth of crop roots only"], 2],
      ["Which is a physical weathering process?", ["Oxidation of minerals", "Hydrolysis of feldspar", "Chemical dissolution", "Freeze-thaw action"], 3],
      ["What is field capacity?", ["The amount of water soil retains after excess gravitational water has drained", "The maximum amount of fertilizer a farmer can buy", "The total volume of bedrock", "The percentage of clay alone"], 0],
      ["What is the permanent wilting point?", ["The point at which soil is completely saturated", "The soil-water condition at which plants cannot recover from wilting under the specified conditions", "The point at which all roots stop growing permanently in every soil", "The amount of water in fresh manure"], 1],
      ["What is available water capacity?", ["The total amount of rainfall in a year", "The water held only in large drainage pores", "The difference between water content at field capacity and permanent wilting point", "The total mass of dry soil"], 2],
      ["What is infiltration?", ["The loss of fertilizer from a warehouse", "The upward movement of seeds", "The evaporation of leaves", "The entry of water into the soil surface"], 3],
      ["What is percolation?", ["The downward movement of water through soil", "The transfer of pollen", "The decomposition of crop residues only", "The process of harvesting grain"], 0],
      ["What is irrigation scheduling?", ["Applying the same amount of water at random", "Determining when and how much water crops should receive", "Preventing all rainfall from entering soil", "Using water only after harvest"], 1],
      ["Which is a common source of soil acidity?", ["The presence of earthworms alone", "The addition of clean irrigation water in every case", "Leaching of basic cations and processes such as nitrification", "The presence of sand particles only"], 2],
      ["What material is commonly used to raise the pH of acidic agricultural soil?", ["Elemental sulfur", "Ammonium sulfate in all circumstances", "Strong acid", "Agricultural lime"], 3],
      ["What is soil fertility?", ["The soil's ability to supply essential nutrients in suitable amounts and balance", "The soil's market value only", "The amount of sand in every field", "The depth of a nearby river"], 0],
      ["What is soil productivity?", ["The number of soil particles", "The capacity of soil to produce crops under a given set of management and environmental conditions", "The amount of gravel in a field", "The acidity of rainfall alone"], 1],
      ["What is a soil test used for?", ["Determining a farmer's age", "Measuring animal gestation", "Assessing soil nutrient status and helping guide fertilizer recommendations", "Determining the market price of rice directly"], 2],
      ["What is the main purpose of composting?", ["To increase waste volume indefinitely", "To sterilize all soil permanently", "To remove every nutrient from organic materials", "To decompose organic materials into a more stable soil amendment"], 3],
      ["What is green manure?", ["A crop or plant material grown and incorporated into soil to improve its condition", "A synthetic pesticide", "A type of irrigation pipe", "A mineral with no organic component"], 0],
      ["Which practice can help maintain soil organic matter?", ["Burning all crop residues every season", "Returning suitable crop residues and adding compost or manure", "Leaving soil exposed to erosion", "Removing all plant biomass from the farm"], 1],
      ["What is soil classification?", ["The process of grading farm produce", "The selection of animal breeds", "The systematic grouping of soils according to their properties", "The process of pricing fertilizer"], 2]
    ]
  }
];

// Convert compact question data into readable question objects.
// Correct answers are stored as zero-based indices.
const quizData = subjects.map((subject) => ({
  id: subject.id,
  name: subject.name,
  questions: subject.questions.map(([question, options, answer], index) => ({
    id: index + 1,
    question,
    options,
    answer,
    correctAnswer: options[answer]
  }))
}));

// Utility functions for your app.

function getAllSubjects() {
  return quizData.map(({ id, name, questions }) => ({
    id,
    name,
    questionCount: questions.length
  }));
}

function getSubjectById(subjectId) {
  return quizData.find((subject) => subject.id === Number(subjectId)) || null;
}

function getQuestionsBySubject(subjectId) {
  const subject = getSubjectById(subjectId);
  return subject ? subject.questions : [];
}

function getRandomQuestions(subjectId, count = 10) {
  const questions = getQuestionsBySubject(subjectId);
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function checkAnswer(subjectId, questionId, selectedAnswer) {
  const questions = getQuestionsBySubject(subjectId);
  const question = questions.find(
    (item) => item.id === Number(questionId)
  );

  if (!question) {
    return {
      valid: false,
      message: "Question not found."
    };
  }

  const selectedIndex =
    typeof selectedAnswer === "number"
      ? selectedAnswer
      : question.options.indexOf(selectedAnswer);

  return {
    valid: true,
    correct: selectedIndex === question.answer,
    correctAnswer: question.correctAnswer,
    selectedAnswer: question.options[selectedIndex] ?? null
  };
}

function calculateScore(subjectId, userAnswers = {}) {
  const questions = getQuestionsBySubject(subjectId);

  let score = 0;
  let answered = 0;

  questions.forEach((question) => {
    const selected = userAnswers[question.id];

    if (selected !== undefined && selected !== null) {
      answered++;

      const selectedIndex =
        typeof selected === "number"
          ? selected
          : question.options.indexOf(selected);

      if (selectedIndex === question.answer) {
        score++;
      }
    }
  });

  return {
    score,
    totalQuestions: questions.length,
    answered,
    unanswered: questions.length - answered,
    percentage:
      answered > 0 ? Math.round((score / answered) * 100) : 0
  };
}

// Validate the question bank.
const totalQuestions = quizData.reduce(
  (total, subject) => total + subject.questions.length,
  0
);

if (quizData.some((subject) => subject.questions.length !== 50)) {
  throw new Error("Each subject must contain exactly 50 questions.");
}

if (totalQuestions !== 300) {
  throw new Error("The quiz bank must contain exactly 300 questions.");
}

// CommonJS exports (Node.js).
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    quizData,
    getAllSubjects,
    getSubjectById,
    getQuestionsBySubject,
    getRandomQuestions,
    checkAnswer,
    calculateScore
  };
}