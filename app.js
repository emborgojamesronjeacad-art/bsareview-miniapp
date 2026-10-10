
// =============================================
// BSA REVIEW - APP.JS
// Six subjects, 300 practice questions
// =============================================

const subjectDefinitions = [
  {
    id: 1,
    name: "Agricultural Extension and Communication",
    icon: "📢",
    concepts: [
      ["Agricultural extension", "Education and advisory services that help farmers improve practices and livelihoods", ["A system for classifying rocks", "A method for breeding livestock", "A process for grading grain"]],
      ["Communication", "The exchange of information and meaning between people", ["The movement of soil particles", "The storage of animal feed", "The classification of crops"]],
      ["Feedback", "The receiver's response to a message", ["The original sender", "A type of fertilizer", "The communication equipment"]],
      ["Extension demonstration", "A practical presentation showing how to perform a recommended practice", ["A market price list", "A soil classification chart", "A livestock pedigree"]],
      ["Farm visit", "An extension method that provides advice directly at a farmer's location", ["A national television broadcast", "A seed certification label", "A commodity auction"]],
      ["Field day", "An organized event where farmers observe practices and results in the field", ["A method of animal vaccination", "A soil erosion process", "A financial statement"]],
      ["Extension evaluation", "Assessment of whether an extension program achieved its objectives", ["The grading of harvested seed only", "The classification of insects", "The measurement of rainfall alone"]],
      ["Needs assessment", "A process for identifying community problems, priorities, and learning needs", ["A process for setting national borders", "A method of breeding plants", "A type of irrigation"]],
      ["Participatory extension", "An approach that involves farmers in decisions and problem-solving", ["An approach that excludes farmers", "A method using only television", "A system without feedback"]],
      ["Innovation diffusion", "The process through which new ideas and practices spread in a social system", ["The spread of soil erosion only", "The transport of fertilizer", "The storage of grain"]],
      ["Early adopter", "A person who adopts an innovation relatively early", ["A person who always adopts last", "A person who cannot receive information", "A person who never evaluates practices"]],
      ["Method demonstration", "A demonstration that teaches the steps of performing a practice", ["A report of national production", "A list of market prices", "A financial audit"]],
      ["Result demonstration", "A demonstration that shows the outcome of a recommended practice", ["A lesson on writing letters", "A farm boundary survey", "A livestock vaccination record"]],
      ["Mass communication", "Communication that can reach a large audience through media", ["A private conversation only", "A single farm inspection", "A one-to-one interview"]],
      ["Interpersonal communication", "Direct communication between individuals", ["A nationwide radio broadcast", "A public billboard", "A newspaper advertisement"]],
      ["Communication barrier", "A factor that interferes with accurate understanding of a message", ["Clear language", "Active listening", "Useful feedback"]],
      ["Visual aid", "A picture, chart, or poster used to help explain information", ["A spoken conversation only", "A telephone call", "An audio-only recording"]],
      ["Adult learning", "Learning that often builds on experience and practical problems", ["Learning without a purpose", "Avoiding previous experience", "Memorizing without understanding"]],
      ["Training needs assessment", "Identification of gaps in knowledge, skills, or performance", ["A list of farm boundaries", "A crop marketing contract", "A livestock breeding calendar"]],
      ["SMART objective", "An objective that is Specific, Measurable, Achievable, Relevant, and Time-bound", ["A target without a deadline", "An objective without measurements", "A goal unrelated to needs"]],
      ["Monitoring", "Regular tracking of activities, resources, and progress", ["An activity done only before a project", "The grading of seed", "The process of setting farm prices"]],
      ["Baseline survey", "A survey documenting conditions before a project or intervention", ["A final examination only", "A market advertisement", "A crop disease treatment"]],
      ["Extension agent", "A professional who connects agricultural knowledge with farmers' needs", ["A plant pathogen", "A livestock feed ingredient", "A soil mineral"]],
      ["Farmer organization", "A group that supports collective learning, cooperation, or marketing", ["A type of crop disease", "A soil horizon", "A chemical pesticide"]],
      ["ICT in agriculture", "Digital technologies used to access, process, and communicate agricultural information", ["A method of soil compaction", "A crop variety", "A livestock reproductive organ"]],
      ["Agricultural advisory service", "Guidance that helps farmers make informed production and management decisions", ["A guaranteed-profit contract", "A type of pesticide", "A method of soil formation"]],
      ["Extension campaign", "Coordinated communication activities promoting a particular practice or message", ["A single unplanned conversation", "A seed germination test", "A livestock ration"]],
      ["Local knowledge", "Knowledge developed through people's experience and practices in their community", ["Knowledge that is always incorrect", "A type of fertilizer", "A communication device"]],
      ["Active listening", "Listening carefully to understand a speaker and respond appropriately", ["Interrupting continuously", "Ignoring the speaker", "Repeating information without listening"]],
      ["Communication channel", "The medium through which a message travels", ["The person who receives a message", "The meaning of a message", "The response to a message"]],
      ["Extension objective", "A clearly stated result an extension activity aims to achieve", ["A list of unrelated activities", "A farm boundary", "A market price"]],
      ["Adoption", "The decision to begin and continue using an innovation or practice", ["The rejection of all new ideas", "The movement of soil", "The harvesting of grain"]],
      ["Trialability", "The extent to which an innovation can be tested on a limited basis", ["The price of a tractor", "The color of a crop", "The weight of a seed"]],
      ["Observability", "The extent to which results of an innovation can be seen by others", ["The amount of fertilizer in a bag", "The length of a farm road", "The cost of irrigation"]],
      ["Compatibility", "The degree to which an innovation fits existing needs, values, and practices", ["The number of posters printed", "The weight of harvested produce", "The distance to a market"]],
      ["Complexity of innovation", "The degree to which an innovation is perceived as difficult to understand or use", ["Its selling price alone", "The number of farmers in a province", "The size of an office"]],
      ["Community participation", "The involvement of community members in planning and implementing activities", ["Excluding local people", "Making all decisions without consultation", "Preventing feedback"]],
      ["Extension planning", "The process of setting objectives, activities, resources, and timelines", ["The random distribution of inputs", "The destruction of farm records", "The sale of livestock"]],
      ["Outcome indicator", "A measure showing changes associated with a program's results", ["A list of office furniture", "The number of pages in a report", "The color of a poster"]],
      ["Output indicator", "A measure of the direct products or services delivered by a program", ["A long-term social change only", "A crop disease", "A soil texture class"]],
      ["Gender-responsive extension", "Extension that considers different people's needs, access, and participation", ["A service that excludes certain farmers", "A method of soil testing", "A system for grading livestock"]],
      ["Inclusive communication", "Communication designed to be accessible and understandable to different audiences", ["Using only unexplained jargon", "Avoiding local languages", "Ignoring accessibility"]],
      ["Farmer field school", "A participatory learning approach using field observation and practical exercises", ["A commodity warehouse", "A fertilizer factory", "A crop disease"]],
      ["Communication ethics", "Principles that guide honest, responsible, and respectful communication", ["Exaggerating results", "Hiding important risks", "Sharing private information without permission"]],
      ["Agricultural information", "Knowledge and data relevant to agricultural decisions", ["Only personal opinions", "Only unrelated entertainment", "Information that cannot be used"]],
      ["Extension feedback loop", "A process in which responses inform later communication and program improvement", ["A one-way message with no response", "A crop rotation pattern", "A market monopoly"]],
      ["Demonstration plot", "A designated area used to show crop practices or technologies", ["A livestock quarantine facility", "A grain pricing chart", "A soil horizon"]],
      ["Problem diagnosis", "Systematic identification of the causes of an agricultural problem", ["Choosing a solution without investigation", "Ignoring observations", "Guessing a market price"]],
      ["Program sustainability", "The ability of useful program benefits or activities to continue over time", ["Ending all activities immediately", "Spending all resources without planning", "Avoiding community ownership"]],
      ["Evidence-based recommendation", "Advice supported by credible information, observations, or research", ["An unverified claim", "A guaranteed-profit promise", "An instruction without supporting evidence"]]
    ]
  },
  {
    id: 2,
    name: "Agricultural Economics and Marketing",
    icon: "📈",
    concepts: [
      ["Agricultural economics", "The study of how scarce resources are allocated in agriculture", ["The anatomy of livestock", "The classification of insects", "The structure of plant roots"]],
      ["Opportunity cost", "The value of the next-best alternative forgone", ["The total sales revenue", "The amount of rainfall", "The number of farm workers"]],
      ["Law of demand", "Quantity demanded generally falls as price rises, other things equal", ["Demand always rises with price", "Demand never responds to price", "Supply always becomes zero"]],
      ["Law of supply", "Quantity supplied generally rises as price rises, other things equal", ["Supply always falls as price rises", "Supply is unrelated to price", "Supply is always zero"]],
      ["Market equilibrium", "The point at which quantity demanded equals quantity supplied", ["A market with no buyers", "A market where everything is free", "A market with no production"]],
      ["Fixed cost", "A cost that remains constant over the relevant production range", ["A cost that changes with every unit", "The revenue from sales", "The quantity of harvest"]],
      ["Variable cost", "A cost that changes with the level of production or activity", ["A fixed annual land purchase", "A cost that never changes", "The market value of a crop"]],
      ["Total revenue", "Selling price per unit multiplied by quantity sold", ["Total cost plus profit", "Fixed cost minus variable cost", "Total labor divided by acreage"]],
      ["Profit", "Total revenue minus total cost", ["Total revenue plus total cost", "Total cost multiplied by acreage", "The total quantity produced"]],
      ["Gross margin", "Revenue minus specified variable costs", ["Total revenue minus all fixed and variable costs in every definition", "Fixed costs plus taxes", "Quantity sold divided by price"]],
      ["Price elasticity of demand", "The responsiveness of quantity demanded to a price change", ["The total area planted", "The weight of harvested grain", "The quantity of fertilizer used"]],
      ["Production function", "The relationship between inputs used and output produced", ["A list of market prices", "A soil profile", "A livestock pedigree"]],
      ["Marginal product", "The additional output from one more unit of an input", ["Total cost of all inputs", "The selling price", "The farm's land area"]],
      ["Diminishing marginal returns", "Additional output from extra input eventually declines when other inputs are fixed", ["Output always falls immediately", "All inputs become free", "Output never changes"]],
      ["Capital resource", "A produced resource used to produce other goods, such as a tractor", ["Natural sunlight", "Rainfall", "A farmer's physical effort alone"]],
      ["Agricultural marketing", "Activities that move agricultural products from producers toward consumers", ["Growing crops without distribution", "Testing soil pH only", "Breeding animals only"]],
      ["Marketing margin", "The price difference between marketing stages for comparable products and units", ["The total area planted", "The amount of seed used", "The number of farm workers"]],
      ["Agricultural cooperative", "A member-owned organization established for members' mutual benefit", ["A type of fertilizer", "A plant disease", "A soil classification"]],
      ["Value addition", "Increasing product value through processing, grading, packaging, or services", ["Intentionally increasing spoilage", "Reducing quality without reason", "Avoiding all processing"]],
      ["Product grading", "Classifying products according to defined quality characteristics", ["Measuring rainfall", "Counting farm workers", "Testing livestock fertility"]],
      ["Storage", "Keeping products under suitable conditions to preserve quality and manage selling time", ["Increasing spoilage", "Eliminating all demand", "Preventing all price changes"]],
      ["Supply chain", "The network moving products from input suppliers through production and distribution", ["A list of crop diseases", "A farm boundary map", "A livestock vaccination"]],
      ["Market intermediary", "A participant such as a trader, wholesaler, or retailer between sellers and buyers", ["A soil nutrient", "A seed variety", "A plant root"]],
      ["Comparative advantage", "The ability to produce a good at a lower opportunity cost", ["Producing everything at the highest cost", "Avoiding specialization", "Selling without considering alternatives"]],
      ["Inflation", "A sustained increase in the general price level", ["A decrease in all prices", "An increase in rainfall", "A decline in soil fertility"]],
      ["Depreciation", "The reduction in an asset's value over its useful life", ["An increase in soil nutrients", "An increase in farm output", "A rise in crop yield"]],
      ["Farm budget", "An estimate of expected farm income and expenses", ["A rainfall record alone", "A list of animal breeds", "A soil classification chart"]],
      ["Break-even point", "The production or sales level at which total revenue equals total cost", ["The point of maximum rainfall", "The highest fixed cost", "The point of zero production in every case"]],
      ["Production risk", "Uncertainty arising from yields, weather, pests, and production conditions", ["A guaranteed profit", "A fixed outcome", "A certain price in every market"]],
      ["Farm diversification", "Using different crops or enterprises to spread risk and use resources", ["Planting only one crop forever", "Eliminating farm records", "Selling only to one buyer by necessity"]],
      ["Contract farming", "An arrangement setting production or marketing terms between farmers and buyers", ["A system without any agreement", "A soil sampling method", "A plant disease"]],
      ["Futures contract", "A standardized agreement traded for future delivery or financial settlement", ["A method of measuring crop height", "A seed variety", "A soil nutrient"]],
      ["Consumer surplus", "The difference between consumers' willingness to pay and the price they pay", ["Total farm labor costs", "Producer fixed costs", "The value of unused fertilizer"]],
      ["Producer surplus", "The difference between the price received and minimum acceptable price across units sold", ["The amount of rainfall", "The number of imported tractors", "The total unsold stock"]],
      ["Public good", "A good that is generally non-excludable and non-rival in consumption", ["A product only one person can use and exclude others from", "A product sold only at auction", "An imported commodity"]],
      ["Subsidy", "Financial assistance provided by a government or another institution", ["A penalty for producing crops", "A soil amendment", "A fee paid only by consumers"]],
      ["Gross domestic product", "The value of final goods and services produced within a country over a period", ["The number of farms only", "The price of one crop", "The rainfall in a province"]],
      ["Agricultural credit", "Borrowed funds used for agricultural production or related activities", ["A crop rotation method", "A vaccination", "A soil classification"]],
      ["Working capital", "Funds and short-term resources used for day-to-day operations", ["The market value of farmland alone", "The annual rainfall", "The number of farm buildings"]],
      ["Inventory management", "Managing input and product stocks to meet needs and control costs", ["Planting crops at random", "Setting interest rates", "Breeding livestock only"]],
      ["Value chain", "The linked activities that add value as a product moves toward consumers", ["A method of measuring crop height", "An animal disease classification", "A rainfall schedule"]],
      ["Market information", "Information that helps farmers make informed production and selling decisions", ["A guarantee of fixed profit", "A method of eliminating all price changes", "A replacement for transportation"]],
      ["Land opportunity cost", "The value of the best alternative use of land that is forgone", ["The rainfall on the land", "The color of the soil", "The number of workers"]],
      ["Economies of scale", "Lower average costs as production expands over a relevant range", ["Higher average costs in every case", "A decrease in yield from drought", "The absence of specialization"]],
      ["Monopsony", "A market structure with one dominant buyer", ["A market with many buyers", "A market with no sellers", "A market with no producers"]],
      ["Postharvest loss", "A reduction in quantity or quality after harvest", ["An increase in demand", "An increase in planted area", "An increase in labor productivity"]],
      ["Grain drying", "Reducing grain moisture to a safe level for storage", ["Adding water to harvested grain", "Mixing clean grain with infested grain", "Leaving grain exposed to rain"]],
      ["Price information", "Current or recent price data for relevant markets and products", ["A soil nutrient measurement", "A livestock gestation record", "A seed germination method"]],
      ["Market segmentation", "Dividing buyers into groups with similar needs or characteristics", ["Mixing all products without classification", "Eliminating customer differences", "Measuring soil texture"]],
      ["Competitive market", "A market with enough buyers and sellers to limit individual market power", ["A market with only one seller by definition", "A market without buyers", "A market with no price signals"]],
      ["Cost-benefit analysis", "Comparing expected benefits with costs to evaluate an activity", ["Measuring only rainfall", "Counting animals without evaluating costs", "Classifying soil horizons"]]
    ]
  },
  {
    id: 3,
    name: "Animal Science",
    icon: "🐄",
    concepts: [
      ["Animal science", "The study of livestock biology, breeding, nutrition, management, and products", ["The study of stars", "The study of soil horizons", "The study of ocean currents"]],
      ["Ruminant", "An animal with a specialized stomach and microbial fermentation, such as cattle", ["A chicken", "A tilapia", "A monogastric animal such as a pig"]],
      ["Ruminant stomach", "The typical adult cattle stomach has four compartments", ["One compartment", "Two compartments", "Three compartments"]],
      ["Abomasum", "The true stomach of a ruminant", ["The main fermentation chamber", "The organ that produces eggs", "The urinary bladder"]],
      ["Rumen", "The main fermentation chamber where microbes digest fibrous feed", ["The organ that filters urine", "The animal's lung", "The reproductive tract"]],
      ["Carbohydrates in feed", "A major source of energy for livestock", ["A type of vaccine", "A parasite", "A mineral only"]],
      ["Protein in feed", "Supplies amino acids needed for growth and tissue repair", ["Provides no nutrients", "Is always toxic", "Replaces all water requirements"]],
      ["Colostrum", "The first milk after birth, rich in antibodies and nutrients", ["A type of pasture", "A livestock parasite", "A mineral block"]],
      ["Calving", "The process of giving birth in cattle", ["Egg incubation", "Shearing wool", "Weaning piglets"]],
      ["Artificial insemination", "Introducing semen into the female reproductive tract by artificial means", ["Natural grazing", "Measuring body weight", "Removing horns"]],
      ["Estrus", "The period when a female is sexually receptive", ["A digestion stage", "A feed deficiency", "An egg incubation method"]],
      ["Gestation", "The period of pregnancy", ["The period between milkings", "The growth of wool", "The digestion of feed"]],
      ["Cattle gestation", "Approximately 283 days in cattle", ["About 30 days", "About 90 days", "About 500 days"]],
      ["Poultry", "Domesticated birds raised for products such as meat and eggs", ["A cattle breed", "A pasture grass", "A soil organism"]],
      ["Brooding", "Providing appropriate warmth and care for young chicks", ["Collecting cattle", "Milking cows", "Shearing sheep"]],
      ["Balanced ration", "Feed formulated to meet an animal's nutrient requirements", ["Feed that maximizes waste", "Feed without nutrients", "Feed that eliminates water needs"]],
      ["Calcium", "A mineral essential for bones and eggshell formation", ["A livestock disease", "A plant pathogen", "A source of drinking water"]],
      ["Feed conversion ratio", "Feed consumed per unit of weight gain or product output", ["Animals per barn", "Water in milk", "Eggs per nest"]],
      ["Feed efficiency", "The ability to convert feed into animal growth or products", ["The color of the feed bag", "The number of barns", "The length of the farm road"]],
      ["Selective breeding", "Choosing parents with desirable traits for future generations", ["Breeding without considering traits", "Preventing reproduction", "Feeding only one type of grass"]],
      ["Heredity", "The transmission of genetic traits from parents to offspring", ["The digestion of feed", "The movement of livestock", "The storage of forage"]],
      ["Heterosis", "Improved performance of crossbred offspring relative to a chosen parental benchmark", ["A livestock disease", "A feed storage method", "The loss of genetic variation"]],
      ["Sperm", "The male reproductive cell", ["The female reproductive cell", "The placenta", "The embryo"]],
      ["Ovary", "The female organ that produces ova", ["The liver", "The kidney", "The lung"]],
      ["Weaning", "Ending or reducing a young animal's dependence on its mother's milk", ["Starting pregnancy", "Increasing birth weight directly", "Removing all water"]],
      ["Mastitis", "Inflammation of the mammary gland", ["A hoof injury", "A poultry feather condition", "A type of forage"]],
      ["Biosecurity", "Practices that reduce the introduction and spread of disease", ["Sharing unclean needles", "Ignoring quarantine", "Mixing sick and healthy animals without precautions"]],
      ["Vaccination", "Administration of a vaccine to stimulate protective immunity", ["Weighing livestock", "Castration", "Feed fermentation"]],
      ["Deworming", "Treatment to control susceptible internal or external parasitic worms", ["Removing horns", "Clipping feathers", "Collecting milk"]],
      ["Monogastric", "An animal with a simple, single-chambered stomach, such as a pig", ["A ruminant such as cattle", "A four-compartment stomach", "A plant-parasitic nematode"]],
      ["Roughage", "Bulky, fibrous feed such as hay and pasture", ["A vaccine", "A livestock egg", "A pesticide"]],
      ["Concentrate feed", "Feed relatively rich in energy or protein and generally lower in fiber than roughage", ["Drinking water only", "A mineral block only", "A type of livestock disease"]],
      ["Silage", "Forage preserved through controlled fermentation", ["Dry grain only", "Fresh milk", "A deworming medicine"]],
      ["Hay", "Forage that has been dried and stored for feed", ["Fresh manure", "Fermented milk", "A mineral supplement"]],
      ["Methane", "A greenhouse gas produced during enteric fermentation in ruminants", ["Oxygen", "Helium", "Neon"]],
      ["Placenta", "An organ supporting nutrient, gas, and waste exchange between mother and fetus", ["A feed ingredient", "A poultry egg", "A horn structure"]],
      ["Castration", "A procedure that removes or disables male reproductive function", ["Increasing unwanted breeding", "Preventing feeding", "Guaranteeing coat color"]],
      ["Mammary gland", "The organ that produces milk", ["The organ that produces wool", "The organ that makes eggshells in all animals", "The animal's hoof"]],
      ["Sheep", "A livestock species commonly raised for wool and meat", ["A poultry species", "A fish species", "A grain crop"]],
      ["Pedigree record", "A record of an animal's ancestry", ["A rainfall chart", "A soil survey", "A fertilizer label"]],
      ["Body condition score", "An assessment of an animal's relative body fat and condition", ["A measure of feed color", "A pasture age", "A market price"]],
      ["Clean drinking water", "Supports hydration, digestion, temperature regulation, and normal body functions", ["Eliminates every disease", "Replaces all nutrients", "Guarantees maximum growth"]],
      ["Quarantine", "Separating animals to reduce the risk of disease introduction or spread", ["Mixing sick animals with healthy animals", "A feed ration", "An egg grading system"]],
      ["Crossbreeding", "Mating animals of different breeds within the same species", ["Mating the same genetic line only", "Preventing all reproduction", "A guaranteed way to produce fertile offspring between any species"]],
      ["Free-range poultry", "A system that gives birds access to a designated outdoor area", ["A sealed incubator", "An artificial insemination method", "A cattle housing system"]],
      ["Chicken incubation", "Approximately 21 days under suitable conditions", ["7 days", "14 days", "35 days"]],
      ["Feed storage", "Keeping feed dry, clean, and protected from pests", ["Storing feed in standing water", "Mixing moldy feed with clean feed", "Leaving feed exposed to rain"]],
      ["Animal welfare", "The physical and mental well-being of animals", ["Production regardless of suffering", "The selling of livestock only", "The classification of feed"]],
      ["Dairy records", "Records used to monitor milk yield and production performance", ["Soil surveys only", "Rainfall charts only", "Crop variety lists"]],
      ["Livestock housing", "Shelter designed to support animal comfort, safety, hygiene, and management", ["A substitute for all nutrition", "A guarantee against every disease", "A way to eliminate veterinary care"]]
    ]
  },
  {
    id: 4,
    name: "Crop Protection",
    icon: "🛡️",
    concepts: [
      ["Crop protection", "The management of pests, diseases, and weeds that damage crops", ["The study of stars", "Livestock breeding", "Farm product marketing only"]],
      ["Late blight pathogen", "Phytophthora infestans, an oomycete that causes potato and tomato late blight", ["An aphid", "An earthworm", "A grasshopper"]],
      ["Fungal pathogen", "An organism such as Puccinia that causes plant rust diseases", ["A maize plant", "An earthworm", "A fertilizer"]],
      ["Insect pest", "An insect that damages crops or stored products", ["Every beneficial soil organism", "A plant nutrient", "A farm machine"]],
      ["Aphid", "A sap-sucking insect that can transmit some plant viruses", ["A soil mineral", "A crop variety", "A type of fertilizer"]],
      ["Weed", "A plant growing where it is unwanted", ["Every crop grown for sale", "A soil nutrient", "A type of pesticide"]],
      ["Integrated pest management", "Combining compatible control methods to manage pests sustainably", ["Using the highest pesticide dose always", "Killing every insect indiscriminately", "Relying on one pesticide forever"]],
      ["Biological control", "Using natural enemies to suppress pest populations", ["Using fertilizer", "Harvesting grain", "Measuring soil pH"]],
      ["Lady beetle", "A beneficial predator that feeds on aphids and other small pests", ["A crop pathogen", "A fertilizer", "A weed species"]],
      ["Pesticide", "A substance intended to prevent, destroy, or control pests", ["A crop rotation", "An irrigation pipe", "A soil texture"]],
      ["Herbicide", "A pesticide designed to control weeds", ["A fungicide", "A livestock vaccine", "A soil nutrient"]],
      ["Fungicide", "A product used to manage fungal diseases", ["A harvesting tool", "A livestock ration", "A market price"]],
      ["Insecticide", "A product intended to control insects", ["A nitrogen fertilizer", "A pruning tool", "A soil sample"]],
      ["Pesticide resistance", "Reduced susceptibility of a pest population to a pesticide", ["Permanent elimination of every pest", "Plant immunity to all diseases", "Conversion of pesticide into fertilizer"]],
      ["Resistance management", "Using strategies such as mode-of-action rotation and nonchemical controls", ["Repeatedly using the same mode of action without a plan", "Ignoring pest monitoring", "Applying any dose"]],
      ["Plant disease", "A harmful disruption of normal plant function caused by a pathogen or other factor", ["Every normal change in leaf color", "Normal seed germination", "A fertilizer"]],
      ["Bacterial plant disease", "A disease caused by bacteria, such as bacterial wilt", ["Powdery mildew", "Rust", "Downy mildew"]],
      ["Disease vector", "An organism that transmits a pathogen between hosts", ["A soil mineral", "A fertilizer", "A harvesting tool"]],
      ["Virus vector", "An organism such as an aphid that transmits certain plant viruses", ["An earthworm in all cases", "A grain crop", "A soil horizon"]],
      ["Disease symptom", "A plant response such as chlorosis, wilting, or necrosis", ["A pathogen itself in every case", "A market price", "The age of the crop"]],
      ["Disease sign", "Direct evidence of a pathogen, such as visible fungal spores", ["A plant's response to drought only", "A crop price change", "A farm boundary"]],
      ["Crop rotation for pest management", "Changing crops in sequence to disrupt some pest life cycles", ["Increasing pest survival indefinitely", "Avoiding all monitoring", "Making all soils identical"]],
      ["Plant quarantine", "Restricting movement of infested materials to prevent pest spread", ["Applying excess fertilizer", "Moving infested seed freely", "Irrigating every field continuously"]],
      ["Seed treatment", "Applying a suitable protective treatment to seed before planting", ["Harvesting mature grain", "Storing produce in a market", "Pruning mature trees"]],
      ["Plant-parasitic nematode", "A microscopic roundworm that feeds on plants", ["A beneficial insect", "A fungal spore", "A mineral nutrient"]],
      ["Root-knot nematode symptom", "Galls or swellings on affected roots", ["Improved root growth in every case", "Larger fruit always", "Blue flower petals"]],
      ["Economic injury level", "The pest population at which economic losses justify control", ["The number of farm workers", "The amount of fertilizer", "The lowest market price"]],
      ["Economic threshold", "The pest level at which action is needed to prevent reaching the injury level", ["The highest pesticide dose", "The total crop yield", "The number of weeds after harvest"]],
      ["Contact pesticide", "A pesticide that affects its target through contact with treated surfaces or organisms", ["A fertilizer only", "A seed variety", "A nitrogen fixation method"]],
      ["Systemic pesticide", "A pesticide absorbed and moved within a plant", ["A product that always stays outside plants", "A product used only against weeds", "A product with no biological activity"]],
      ["Personal protective equipment", "Equipment that reduces exposure to hazardous substances during pesticide handling", ["A way to increase pest reproduction", "A substitute for label directions", "A guarantee of zero exposure"]],
      ["Pesticide label", "The source of product directions, restrictions, and safety instructions", ["A random social media post", "A market advertisement", "An unrelated crop calendar"]],
      ["Pollinator protection", "Following label restrictions and avoiding harmful exposure of pollinators", ["Spraying indiscriminately during bee activity", "Destroying all flowering plants", "Ignoring pesticide risks"]],
      ["Crop scouting", "Regular field observation to detect pests, diseases, and crop problems", ["Measuring national population", "Calculating inflation", "Determining livestock gestation"]],
      ["Mechanical weed control", "Removing weeds by hand, hoeing, or suitable machinery", ["Applying a fungicide", "Vaccinating livestock", "Using an insect attractant"]],
      ["Cultural pest control", "Changing crop practices to make conditions less favorable for pests", ["Using chemicals exclusively", "Ignoring field sanitation", "Planting infested seed intentionally"]],
      ["Crop sanitation", "Managing infected residues and other sources of pests and pathogens", ["Keeping all infected residues without management", "Planting diseased seedlings", "Leaving contaminated tools uncleaned"]],
      ["Fungicide mode of action", "The biological target or process through which a fungicide affects fungi", ["The packaging color", "The seed rate", "The selling price"]],
      ["Leaf wetness", "A condition that can favor infection by many fungal and oomycete pathogens", ["A guarantee of disease absence", "A substitute for a host", "A type of fertilizer"]],
      ["Damping-off", "Decay of seeds or young seedlings before or shortly after emergence", ["Fruit ripening", "A cattle nutrient deficiency", "A grading system"]],
      ["Host plant resistance", "A plant variety's ability to limit pest development or damage", ["A guarantee that pests never occur", "A fertilizer application", "A storage container"]],
      ["Preharvest interval", "The required time between the last pesticide application and harvest", ["The time needed to plant a seed", "The length of crop rotation", "The time between rain events"]],
      ["Pesticide misuse", "Can harm people, beneficial organisms, and the environment", ["Always improves biodiversity", "Eliminates every residue", "Prevents resistance in every case"]],
      ["Pheromone trap", "A device using chemical signals to monitor or trap certain insect pests", ["A soil nitrogen meter", "An irrigation system", "A grain dryer"]],
      ["Rust disease", "A group of plant diseases commonly caused by rust fungi", ["A livestock disease", "A fertilizer deficiency in all cases", "A soil classification"]],
      ["Pesticide disposal", "Following label directions and applicable hazardous-waste requirements", ["Pouring leftovers into streams", "Reusing containers for food", "Discarding waste beside wells"]],
      ["Resistant crop variety", "A variety that reduces damage or pest development under relevant conditions", ["A variety that needs no management ever", "A variety that always yields maximum output", "A variety immune to every stress"]],
      ["Pest monitoring", "Systematic observation or sampling used to estimate pest presence and levels", ["Applying chemicals at random", "Ignoring field conditions", "Measuring market prices"]],
      ["Weed seed bank", "The reserve of viable weed seeds present in the soil", ["The farmer's savings account", "A fertilizer store", "A livestock record"]],
      ["Disease triangle", "The interaction among a susceptible host, a pathogen, and a favorable environment", ["Soil, tractor, and market", "Seed, fertilizer, and price", "Rain, livestock, and storage"]],
      ["Crop protection record", "A record of observations and treatments that supports management decisions", ["A guarantee of zero pests", "A replacement for scouting", "A farm boundary map"]]
    ]
  },
  {
    id: 5,
    name: "Crop Science",
    icon: "🌱",
    concepts: [
      ["Crop science", "The study of crop production, management, and improvement", ["Ocean currents", "Livestock anatomy only", "Mineral extraction"]],
      ["Plant roots", "Primarily absorb water and mineral nutrients and anchor the plant", ["Produce grain directly", "Absorb sunlight as their main function", "Pollinate flowers"]],
      ["Photosynthesis", "The process using light energy to produce organic compounds from carbon dioxide and water", ["The breakdown of rocks", "The absorption of water only", "The harvesting of grain"]],
      ["Carbon dioxide", "The gas absorbed by plants for photosynthesis", ["Oxygen", "Helium", "Neon"]],
      ["Chlorophyll", "A pigment that absorbs light energy for photosynthesis", ["Hemoglobin", "Keratin", "Melanin"]],
      ["Transpiration", "The loss of water vapor from plant surfaces, especially leaves", ["The formation of seeds", "The harvesting of grain", "The movement of pollen"]],
      ["Germination", "The resumption of embryo growth to produce a seedling", ["The ripening of fruit", "The loss of leaves", "The harvesting of grain"]],
      ["Seed germination requirement", "Adequate moisture, oxygen, and suitable temperature for many crop seeds", ["Permanent absence of water", "Destruction of the embryo", "Continuous exposure to toxic chemicals"]],
      ["Seed dormancy", "A condition in which a viable seed fails to germinate under otherwise favorable conditions", ["Maximum fruit production", "A fertilizer application", "A harvesting method"]],
      ["Monocotyledon", "A flowering plant whose embryo typically has one cotyledon", ["A plant with no roots", "A plant without seeds", "A plant lacking vascular tissue"]],
      ["Rice", "A common monocot crop", ["Bean", "Peanut", "Tomato"]],
      ["Soybean", "A common dicot crop", ["Rice", "Maize", "Sugarcane"]],
      ["Pollination", "The transfer of pollen to a receptive stigma", ["Fertilizer absorption", "Root growth", "Grain storage"]],
      ["Self-pollination", "Pollination involving the same flower or plant in self-compatible species", ["Pollination between unrelated species", "Pollination by wind only in every case", "The absence of pollen"]],
      ["Cross-pollination", "Transfer of pollen between different plants of the same species", ["Root formation", "Chlorophyll production", "Water transport"]],
      ["Crop rotation", "Growing different crops in sequence on the same land", ["Growing one crop indefinitely", "Harvesting all crops on the same day", "Changing farm boundaries"]],
      ["Legume nitrogen contribution", "Legumes can obtain nitrogen through symbiosis with nitrogen-fixing bacteria", ["Legumes remove all nutrients", "Legumes need no water", "Legumes prevent every pest"]],
      ["Rhizobium", "A group of bacteria associated with nitrogen-fixing nodules on many legumes", ["A livestock pathogen", "A weed", "A fungicide"]],
      ["Plant breeding", "Developing crop varieties with desirable traits", ["Marketing grain only", "Removing all genetic variation", "Measuring rainfall"]],
      ["Hybrid vigor", "Improved performance of hybrid offspring relative to a selected parental benchmark", ["Seed dormancy", "Transpiration", "Etiolation"]],
      ["Cultivar", "A cultivated plant variety selected for particular traits", ["An agricultural tax", "A soil horizon", "An irrigation tool"]],
      ["Seed certification", "A process that provides assurance of seed identity and specified quality standards", ["A guarantee of highest market price", "A guarantee of genetic identity for every seed", "A substitute for seed testing"]],
      ["Seed viability", "The ability of a seed to remain alive and potentially germinate", ["The weight of a seed bag", "The color of the seed coat", "The number of seedling leaves"]],
      ["Plant spacing", "The distance between plants or planting rows", ["The depth of a river", "The weight of grain", "The acidity of fertilizer"]],
      ["Proper plant spacing", "Helps manage competition for light, water, and nutrients", ["Guarantees identical yields", "Prevents every disease", "Eliminates irrigation needs"]],
      ["Thinning", "Removing excess seedlings to achieve the desired plant population", ["Adding more seeds to every hole", "Harvesting mature grain", "Applying insecticide to weeds"]],
      ["Irrigation", "Supplying water to crops when natural rainfall is insufficient", ["Increasing soil erosion intentionally", "Removing all soil nutrients", "Preventing photosynthesis"]],
      ["Mulching", "Covering the soil surface with suitable materials", ["Removing every root", "Mixing grain with water after harvest", "Planting without spacing"]],
      ["Organic mulch", "Can conserve soil moisture and suppress weeds", ["Always raises soil salinity", "Replaces all mineral nutrients", "Stops all nutrient cycling"]],
      ["Harvest index", "The ratio of economic yield to total aboveground biological yield", ["The amount of rainfall", "The number of plants per hectare", "The weight of seed before planting"]],
      ["Lodging", "The bending or falling of crop stems, often before harvest", ["New root formation", "Seed dormancy", "Flower opening"]],
      ["Photoperiodism", "A plant response to the relative lengths of day and night", ["Water movement through soil", "Root nodule formation", "Grain breakdown"]],
      ["Vernalization", "Induction or acceleration of flowering by prolonged low temperatures in responsive plants", ["Seed drying", "Hand weeding", "Phosphorus application"]],
      ["C4 plant", "A plant using a photosynthetic pathway that initially fixes carbon into a four-carbon compound", ["A plant without photosynthesis", "A plant without chloroplasts", "A plant that only grows underwater"]],
      ["Maize", "A common C4 crop", ["Rice", "Wheat", "Barley"]],
      ["Wheat", "A common C3 crop", ["Maize", "Sugarcane", "Sorghum"]],
      ["Xylem", "Plant tissue that transports water and mineral nutrients", ["Tissue that transports sugars only", "Pollen-producing tissue", "A seed coat"]],
      ["Phloem", "Plant tissue that transports sugars and other organic substances", ["Water-absorbing root hairs only", "A flower part", "A fruit wall"]],
      ["Chlorosis", "Yellowing of plant tissue associated with reduced chlorophyll", ["A seed stage", "Fruit formation", "Crop rotation"]],
      ["Magnesium", "A nutrient that is part of the chlorophyll molecule", ["Gold", "Mercury", "Helium"]],
      ["Nitrogen", "A major nutrient involved in protein synthesis and vegetative growth", ["Neon", "Argon", "Helium"]],
      ["Phosphorus", "A nutrient important for energy transfer and root development", ["Gold", "Mercury", "Neon"]],
      ["Potassium", "A nutrient involved in enzyme activation and stomatal regulation", ["Silver", "Tin", "Gold"]],
      ["Cover crop", "A crop grown to protect soil and support soil health between or alongside main crops", ["An ornamental crop only", "A seed that cannot germinate", "An underwater-only crop"]],
      ["Green manuring", "Growing and incorporating plant material into soil to improve it", ["Applying plastic sheets", "Burning every residue", "Removing organic matter"]],
      ["Intercropping", "Growing two or more crops together in the same field for part or all of their growth periods", ["Growing one crop alone every year", "Planting only after harvest", "Storing seeds in a warehouse"]],
      ["Crop diversification", "Can improve resource use and spread production risks", ["Guarantees identical yields every year", "Eliminates all labor", "Removes the need for soil management"]],
      ["Seed rate", "The quantity of seed used per unit area", ["The price of one seed", "The clay percentage", "The irrigation depth"]],
      ["Seedling hardening", "Gradually acclimating seedlings to field conditions before transplanting", ["Stopping root growth permanently", "Eliminating sunlight", "Preventing water uptake"]],
      ["Postharvest handling", "Managing harvested produce to preserve quality and reduce losses", ["Planting seed before rainfall", "Pollinating flowers", "Applying fertilizer to growing roots"]]
    ]
  },
  {
    id: 6,
    name: "Soil Science",
    icon: "🪴",
    concepts: [
      ["Soil science", "The study of soil formation, properties, classification, and management", ["The study of stars", "Livestock reproduction", "Ocean waves"]],
      ["Soil texture", "The relative proportions of sand, silt, and clay", ["Soil color only", "Groundwater depth", "Earthworm number"]],
      ["Sand", "The largest mineral particle size among sand, silt, and clay", ["The smallest particle", "A type of organic matter", "A dissolved nutrient"]],
      ["Clay", "The smallest mineral particle size among sand, silt, and clay", ["The largest particle", "A gravel fragment", "A type of crop"]],
      ["Soil structure", "The arrangement of soil particles into aggregates", ["The market value of soil", "The formula of water", "The number of farm workers"]],
      ["Humus", "Relatively stable organic matter formed through decomposition", ["A mineral fertilizer", "A type of sand", "A pesticide"]],
      ["Soil pH", "A measure of soil acidity or alkalinity", ["Soil depth only", "Sand percentage only", "Crop price"]],
      ["Acidic soil", "Soil with a pH below 7 under the usual pH scale", ["Neutral soil", "Alkaline soil", "Soil without minerals"]],
      ["Neutral soil pH", "Approximately pH 7", ["pH 2", "pH 5", "pH 12"]],
      ["Water-holding capacity", "Is strongly influenced by soil texture and structure", ["Depends only on fence color", "Depends only on seed price", "Depends only on tree height"]],
      ["Soil porosity", "The proportion of soil volume occupied by pores", ["The quantity of grain produced", "Leaf nitrogen percentage", "Fertilizer price"]],
      ["Bulk density", "Dry soil mass per unit of bulk soil volume", ["The total mass of a farm", "Daily rainfall", "The number of pores alone"]],
      ["Clay-rich soil", "Often holds more water per unit volume than coarse sand, depending on structure", ["Always holds no water", "Always drains instantly", "Is identical to bedrock"]],
      ["Soil erosion", "The detachment and transport of soil by water, wind, or other forces", ["Mineral formation only", "An increase in soil depth everywhere", "Organic matter addition"]],
      ["Contour farming", "A practice that can reduce water erosion on sloping land", ["Plowing directly downhill", "Removing all vegetation", "Leaving soil bare"]],
      ["Conservation tillage", "Tillage that retains substantial crop residues and limits soil disturbance", ["Removing all residues", "Burning every field", "Preventing crop rotation"]],
      ["Soil organic matter", "Can improve structure, nutrient cycling, and water retention", ["Always increases salinity", "Replaces every mineral nutrient", "Prevents every form of erosion"]],
      ["Soil microorganisms", "Participate in decomposition and many soil nutrient transformations", ["Only cause harm", "Have no effect on soil", "Are all plant roots"]],
      ["Nitrogen fixation", "Conversion of atmospheric nitrogen into biologically usable nitrogen compounds", ["Loss of all soil nitrogen", "Removal of phosphorus from rock", "Evaporation of soil water"]],
      ["Atmospheric nitrogen", "Makes up most of Earth's atmosphere", ["Oxygen", "Carbon dioxide", "Hydrogen"]],
      ["Phosphorus in plants", "Is important in energy transfer and root development", ["A soil animal", "A pesticide", "A type of irrigation"]],
      ["Nitrogen in plants", "Is important in proteins and many compounds needed for growth", ["Gold", "Mercury", "Silver"]],
      ["Cation exchange capacity", "Describes a soil's capacity to retain and exchange positively charged ions", ["Crop emergence coefficient", "Carbon evaporation cycle", "Clay erosion category"]],
      ["High CEC", "Generally indicates greater capacity to retain and exchange cations", ["No charged particles", "No possibility of acidity", "No nutrient-holding ability"]],
      ["Leaching", "The downward movement of dissolved substances through soil with water", ["Aggregate formation", "Root movement toward light", "Seed storage"]],
      ["Soil salinity", "The accumulation of soluble salts to levels that may harm plants", ["Excess organic matter only", "The absence of all minerals", "Normal humus formation"]],
      ["Soil compaction", "Compression that reduces pore space and can restrict roots and water movement", ["An increase in porosity in all cases", "Compost addition", "Crop canopy formation"]],
      ["Compaction prevention", "Avoiding unnecessary machinery traffic, especially on wet soil", ["Driving heavy machinery over wet soil repeatedly", "Removing all organic matter", "Flooding fields continuously"]],
      ["O horizon", "The surface organic layer in soil profiles where present", ["Unweathered bedrock", "The deepest groundwater layer", "A crop canopy"]],
      ["A horizon", "The mineral topsoil horizon, often enriched with organic matter", ["Bedrock", "Atmosphere", "Unweathered rock only"]],
      ["B horizon", "A subsoil horizon where materials such as clay or iron may accumulate", ["Freshly fallen leaves only", "The atmosphere", "Unweathered bedrock in every soil"]],
      ["Parent material", "The material from which soil develops", ["A crop canopy", "A fertilizer bag", "A soil organism"]],
      ["Weathering", "The breakdown and alteration of rocks and minerals", ["Product marketing", "Animal breeding", "Crop harvesting"]],
      ["Physical weathering", "Breakdown of rock through processes such as freeze-thaw action", ["Oxidation only", "Hydrolysis only", "Chemical dissolution only"]],
      ["Field capacity", "The soil-water condition after excess gravitational water has drained", ["Maximum fertilizer purchasing capacity", "The volume of bedrock", "The percentage of clay alone"]],
      ["Permanent wilting point", "The soil-water condition at which plants cannot recover from wilting under specified conditions", ["Soil saturation", "A fertilizer limit", "The water content of manure"]],
      ["Available water capacity", "The difference between water content at field capacity and permanent wilting point", ["Annual rainfall", "Water in large pores only", "Dry soil mass"]],
      ["Infiltration", "The entry of water into the soil surface", ["Fertilizer loss from a warehouse", "Seed movement upward", "Leaf evaporation"]],
      ["Percolation", "The downward movement of water through soil", ["Pollen transfer", "Residue decomposition only", "Grain harvesting"]],
      ["Irrigation scheduling", "Determining when and how much water crops should receive", ["Applying water at random", "Preventing all rainfall", "Watering only after harvest"]],
      ["Soil acidification", "Can occur through leaching of basic cations and processes such as nitrification", ["Earthworms alone", "Clean water in every case", "Sand particles alone"]],
      ["Agricultural lime", "A common amendment used to raise the pH of acidic soil", ["Elemental sulfur", "Strong acid", "Ammonium sulfate in every situation"]],
      ["Soil fertility", "The soil's ability to supply essential nutrients in suitable amounts and balance", ["Market value only", "Sand content alone", "River depth"]],
      ["Soil productivity", "The ability of soil to produce crops under given management and environmental conditions", ["The number of soil particles", "The amount of gravel alone", "Rainfall acidity only"]],
      ["Soil testing", "Assessing nutrient status to help guide fertilizer recommendations", ["Determining a farmer's age", "Measuring livestock gestation", "Directly determining rice prices"]],
      ["Composting", "Decomposing organic materials into a more stable soil amendment", ["Increasing waste indefinitely", "Sterilizing soil permanently", "Removing every nutrient"]],
      ["Green manure", "Plant material grown and incorporated into soil to improve its condition", ["A synthetic pesticide", "An irrigation pipe", "A mineral without organic material"]],
      ["Maintaining soil organic matter", "Returning suitable residues and adding compost or manure", ["Burning all residues", "Leaving soil exposed to erosion", "Removing all biomass"]],
      ["Soil classification", "Systematically grouping soils according to their properties", ["Grading farm produce", "Selecting animal breeds", "Pricing fertilizer"]]
    ]
  }
];

// Build 50 multiple-choice questions for every subject.
// Each concept creates one definition question and one application question.
// The bank contains exactly 50 questions per subject.

function makeQuestions(concepts, subjectId) {
  const questions = [];

  for (let i = 0; i < 50; i++) {
    const concept = concepts[i];
    const distractors = [
      concept[2][0],
      concept[2][1],
      concept[2][2]
    ];

    // Rotate answer position so the correct answer is not always A.
    const correctPosition = (i * 3 + subjectId) % 4;
    const options = [];
    let distractorIndex = 0;

    for (let position = 0; position < 4; position++) {
      if (position === correctPosition) {
        options.push(concept[1]);
      } else {
        options.push(distractors[distractorIndex++]);
      }
    }

    const questionText = i % 2 === 0
      ? `What is the primary meaning or function of ${concept[0]}?`
      : `Which statement best describes ${concept[0]}?`;

    questions.push({
      id: i + 1,
      question: questionText,
      options,
      answer: correctPosition,
      explanation: concept[1]
    });
  }

  return questions;
}

const quizData = subjectDefinitions.map((subject) => ({
  id: subject.id,
  name: subject.name,
  icon: subject.icon,
  questions: makeQuestions(subject.concepts, subject.id)
}));

// Short subject reviewers.
const reviewerData = [
  {
    title: "Agricultural Extension and Communication",
    notes: [
      "Extension connects agricultural research and practical knowledge with farmers' needs.",
      "Common methods include farm visits, demonstrations, field days, group discussions, and mass media.",
      "Good communication requires a clear message, suitable channel, active listening, and feedback.",
      "Program planning begins with identifying needs, setting objectives, selecting activities, and evaluating results."
    ]
  },
  {
    title: "Agricultural Economics and Marketing",
    notes: [
      "Opportunity cost is the value of the next-best alternative forgone.",
      "Profit equals total revenue minus total cost. Gross margin commonly equals revenue minus variable costs.",
      "Supply, demand, market equilibrium, elasticity, and production costs influence farm decisions.",
      "Grading, storage, transport, processing, and market information are important marketing functions."
    ]
  },
  {
    title: "Animal Science",
    notes: [
      "Animal production involves nutrition, breeding, reproduction, housing, health, and welfare.",
      "Ruminants such as cattle have four stomach compartments: rumen, reticulum, omasum, and abomasum.",
      "A balanced ration supplies nutrients in appropriate amounts. Clean water is essential.",
      "Biosecurity, vaccination programs, sanitation, and suitable housing help protect livestock health."
    ]
  },
  {
    title: "Crop Protection",
    notes: [
      "Crop protection manages weeds, insect pests, plant diseases, and other harmful organisms.",
      "Integrated pest management combines monitoring, cultural, biological, physical, and appropriate chemical methods.",
      "Accurate identification and regular scouting help determine whether control is needed.",
      "Always follow pesticide labels, protective-equipment requirements, and local safety regulations."
    ]
  },
  {
    title: "Crop Science",
    notes: [
      "Photosynthesis converts light energy into chemical energy using carbon dioxide and water.",
      "Roots absorb water and nutrients; xylem transports water, while phloem transports sugars and other organic substances.",
      "Crop rotation, proper spacing, seed quality, irrigation, and suitable varieties support production.",
      "Nitrogen, phosphorus, and potassium are primary plant macronutrients."
    ]
  },
  {
    title: "Soil Science",
    notes: [
      "Soil texture describes the relative proportions of sand, silt, and clay; structure describes their arrangement.",
      "Soil organic matter supports aggregation, nutrient cycling, and water retention.",
      "Soil pH influences nutrient availability. Agricultural lime is commonly used to raise acidic soil pH.",
      "Contour farming, residue cover, cover crops, and suitable tillage can help reduce erosion."
    ]
  }
];

// Local storage helpers.
const STORAGE_KEY = "bsaReviewApp_v2";

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.warn("Could not load saved progress.", error);
    return {};
  }
}

const savedState = loadState();

const state = {
  page: "home",
  subjectId: null,
  questionIndex: 0,
  selectedAnswer: null,
  checked: false,
  answers: {},
  answeredQuestions: savedState.answeredQuestions || {},
  history: Array.isArray(savedState.history) ? savedState.history : [],
  notes: savedState.notes || ""
};

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      answeredQuestions: state.answeredQuestions,
      history: state.history,
      notes: state.notes
    }));
  } catch (error) {
    console.warn("Could not save progress.", error);
  }
}

function $(id) {
  return document.getElementById(id);
}

// Render subject cards.
function renderSubjects() {
  const container = $("subjects");

  container.innerHTML = quizData.map((subject) => `
    <button class="subject" type="button"
      data-subject-id="${subject.id}">
      <div class="subject-content">
        <strong>${subject.name}</strong>
        <small>${subject.questions.length} practice questions</small>
      </div>
      <span class="subject-icon" aria-hidden="true">${subject.icon}</span>
    </button>
  `).join("");

  container.querySelectorAll("[data-subject-id]").forEach((button) => {
    button.addEventListener("click", () => {
      startQuiz(Number(button.dataset.subjectId));
    });
  });
}

// Navigation.
function showPage(pageName) {
  const allowedPages = ["home", "quiz", "notes", "scores"];
  if (!allowedPages.includes(pageName)) return;

  state.page = pageName;

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("hidden", page.id !== pageName);
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    const active = tab.dataset.page === pageName;
    tab.classList.toggle("active", active);

    if (active) {
      tab.setAttribute("aria-current", "page");
    } else {
      tab.removeAttribute("aria-current");
    }
  });

  if (pageName === "scores") renderScores();
  if (pageName === "notes") renderReviewers();
  updateStats();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    showPage(tab.dataset.page);
  });
});

// Quiz state.
function startQuiz(subjectId) {
  const subject = quizData.find((item) => item.id === subjectId);
  if (!subject) return;

  state.subjectId = subjectId;
  state.questionIndex = 0;
  state.selectedAnswer = null;
  state.checked = false;
  state.answers = {};

  $("quizSubject").textContent = subject.name.toUpperCase();
  $("quizTitle").textContent = subject.name;

  showPage("quiz");
  renderQuestion();
}

function currentSubject() {
  return quizData.find((item) => item.id === state.subjectId);
}

function renderQuestion() {
  const subject = currentSubject();
  if (!subject) return;

  const question = subject.questions[state.questionIndex];
  if (!question) return;

  state.selectedAnswer = null;
  state.checked = false;

  $("questionText").textContent = question.question;
  $("questionProgress").textContent =
    `Question ${state.questionIndex + 1} of ${subject.questions.length}`;

  $("progressBar").style.width =
    `${(state.questionIndex / subject.questions.length) * 100}%`;

  $("feedback").textContent = "";

  $("choices").innerHTML = question.options.map((option, index) => `
    <button class="choice" type="button" data-choice="${index}">
      <strong>${String.fromCharCode(65 + index)}.</strong>
      ${option}
    </button>
  `).join("");

  $("choices").querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.checked) return;

      state.selectedAnswer = Number(button.dataset.choice);

      $("choices").querySelectorAll(".choice").forEach((choice) => {
        choice.classList.toggle(
          "selected",
          Number(choice.dataset.choice) === state.selectedAnswer
        );
      });

      $("nextQuestion").disabled = false;
      $("nextQuestion").textContent = "Check answer";
    });
  });

  $("nextQuestion").disabled = true;
  $("nextQuestion").textContent = "Select an answer";
}

function checkCurrentAnswer() {
  const subject = currentSubject();
  if (!subject) return;

  const question = subject.questions[state.questionIndex];
  const correct = state.selectedAnswer === question.answer;

  state.checked = true;
  state.answers[question.id] = {
    selected: state.selectedAnswer,
    correct
  };

  // Store each answered question once for overall statistics.
  const answerKey = `${subject.id}_${question.id}`;

  state.answeredQuestions[answerKey] = {
    subjectId: subject.id,
    questionId: question.id,
    correct
  };

  $("choices").querySelectorAll(".choice").forEach((button) => {
    const index = Number(button.dataset.choice);
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    } else if (index === state.selectedAnswer && !correct) {
      button.classList.add("wrong");
    }
  });

  $("feedback").textContent = correct
    ? `Correct! ${question.explanation}`
    : `Not quite. Correct answer: ${question.options[question.answer]}. ${question.explanation}`;

  $("progressBar").style.width =
    `${((state.questionIndex + 1) / subject.questions.length) * 100}%`;

  $("nextQuestion").textContent =
    state.questionIndex === subject.questions.length - 1
      ? "Finish quiz"
      : "Next question";

  saveState();
  updateStats();
}

function finishQuiz() {
  const subject = currentSubject();
  if (!subject) return;

  const results = Object.values(state.answers);
  const correct = results.filter((answer) => answer.correct).length;
  const total = results.length;

  state.history.unshift({
    subjectId: subject.id,
    subjectName: subject.name,
    score: correct,
    total,
    accuracy: total ? Math.round((correct / total) * 100) : 0,
    date: new Date().toISOString()
  });

  state.history = state.history.slice(0, 50);
  saveState();

  $("quizSubject").textContent = "QUIZ COMPLETED";
  $("quizTitle").textContent = "Well done!";
  $("questionProgress").textContent =
    `${subject.name} · ${correct} of ${total} correct`;

  $("questionText").textContent =
    `Your score is ${correct}/${total} (${total ? Math.round(correct / total * 100) : 0}%).`;

  $("choices").innerHTML = "";
  $("feedback").textContent =
    "Your results have been saved on this device.";

  $("progressBar").style.width = "100%";
  $("nextQuestion").disabled = false;
  $("nextQuestion").textContent = "Back to subjects";

  $("nextQuestion").onclick = () => {
    $("nextQuestion").onclick = null;
    state.subjectId = null;
    showPage("home");
  };

  updateStats();
}

$("nextQuestion").addEventListener("click", () => {
  if (!state.subjectId) {
    showPage("home");
    return;
  }

  if (!state.checked) {
    if (state.selectedAnswer === null) return;
    checkCurrentAnswer();
    return;
  }

  const subject = currentSubject();

  if (state.questionIndex < subject.questions.length - 1) {
    state.questionIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

$("backSubjects").addEventListener("click", () => {
  state.subjectId = null;
  $("nextQuestion").onclick = null;
  showPage("home");
});

// Statistics count each question once across the six subjects.
function updateStats() {
  const records = Object.values(state.answeredQuestions);
  const answered = records.length;
  const correct = records.filter((item) => item.correct).length;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;

  $("answered").textContent = answered;
  $("correct").textContent = correct;
  $("accuracy").textContent = `${accuracy}%`;

  $("scoreAnswered").textContent = answered;
  $("scoreCorrect").textContent = correct;
  $("scoreAccuracy").textContent = `${accuracy}%`;
}

// Reviewers.
function renderReviewers() {
  $("reviewers").innerHTML = reviewerData.map((reviewer) => `
    <article class="reviewer">
      <h3>${reviewer.title}</h3>
      ${reviewer.notes.map((note) => `<p>${note}</p>`).join("<br>")}
    </article>
  `).join("");

  $("personalNotes").value = state.notes;
}

$("saveNotes").addEventListener("click", () => {
  state.notes = $("personalNotes").value;
  saveState();

  $("notesMessage").textContent = "Your notes have been saved.";
  window.setTimeout(() => {
    $("notesMessage").textContent = "";
  }, 2500);
});

// Score history.
function renderScores() {
  updateStats();

  if (!state.history.length) {
    $("history").innerHTML =
      '<p class="empty-message">No completed quizzes yet. Choose a subject and start practicing!</p>';
    return;
  }

  $("history").innerHTML = state.history.map((attempt) => {
    const subject = quizData.find(
      (item) => item.id === attempt.subjectId
    );

    const date = new Date(attempt.date);
    const dateLabel = Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleDateString();

    return `
      <div class="history-item">
        <strong>${subject ? subject.name : attempt.subjectName}</strong>
        <span>${attempt.score}/${attempt.total} correct · ${attempt.accuracy}%</span>
        <div class="muted">${dateLabel}</div>
      </div>
    `;
  }).join("");
}

$("resetScores").addEventListener("click", () => {
  const confirmed = window.confirm(
    "Reset all saved quiz progress and score history? This cannot be undone."
  );

  if (!confirmed) return;

  state.answeredQuestions = {};
  state.history = {};
  state.history = [];
  state.answers = {};

  saveState();
  updateStats();
  renderScores();
});

// Start the application.
function initApp() {
  // The Telegram Web App integration is optional.
  try {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  } catch (error) {
    console.warn("Telegram integration unavailable.", error);
  }

  renderSubjects();
  renderReviewers();
  updateStats();
  showPage("home");
}

initApp();

// Expose the question bank for debugging and future integration.
window.BSAReview = {
  subjects: quizData,
  reviewers: reviewerData
};
