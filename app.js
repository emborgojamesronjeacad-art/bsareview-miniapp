
const questionBank = {
  "Soil Science": [
    ["Soil texture", "The relative proportions of sand, silt, and clay"],
    ["Soil structure", "The arrangement of soil particles into aggregates or peds"],
    ["Soil porosity", "The fraction of soil volume occupied by pores"],
    ["Bulk density", "The oven-dry mass of soil per unit of its total volume"],
    ["Particle density", "The mass of soil solids per unit volume of the solids"],
    ["Field capacity", "The water content remaining after rapid gravitational drainage"],
    ["Permanent wilting point", "The water content at which plants cannot recover turgidity"],
    ["Available water capacity", "The soil water held between field capacity and permanent wilting point"],
    ["Infiltration", "The entry of water through the soil surface"],
    ["Percolation", "The downward movement of water through soil"],
    ["Cation exchange capacity", "The capacity of soil to retain and exchange positively charged ions"],
    ["Base saturation", "The percentage of exchange sites occupied by basic cations"],
    ["Soil pH", "A measure related to hydrogen-ion activity in soil solution"],
    ["Acid soil", "Soil with a pH below 7, commonly associated with greater hydrogen-ion activity"],
    ["Liming", "The application of materials that neutralize soil acidity"],
    ["Saline soil", "Soil with excessive soluble salts that restrict plant water uptake"],
    ["Sodic soil", "Soil with excessive exchangeable sodium that can disperse clay"],
    ["Soil organic matter", "Decomposed and partly decomposed plant, animal, and microbial residues"],
    ["Humus", "The relatively stable, dark fraction of soil organic matter"],
    ["Mineralization", "The conversion of organic nutrients into inorganic forms"],
    ["Immobilization", "The incorporation of inorganic nutrients into microbial organic compounds"],
    ["Nitrification", "The microbial oxidation of ammonium to nitrite and then nitrate"],
    ["Denitrification", "The microbial reduction of nitrate to gaseous nitrogen forms under low oxygen"],
    ["Ammonification", "The conversion of organic nitrogen into ammonium"],
    ["Leaching", "The removal of soluble substances downward with percolating water"],
    ["Erosion", "The detachment and transport of soil by water, wind, or other agents"],
    ["Soil conservation", "The management of land to limit soil loss and maintain productivity"],
    ["Contour farming", "Cultivation along elevation contours to slow runoff"],
    ["Terracing", "The construction of level or graded steps on sloping land to control runoff"],
    ["Cover crop", "A crop grown primarily to protect and improve soil rather than for harvest"],
    ["Green manure", "Plant material incorporated into soil to add organic matter and nutrients"],
    ["Soil compaction", "The reduction of pore space caused by pressure on soil"],
    ["Soil tilth", "The physical condition of soil in relation to tillage and seedling growth"],
    ["Soil horizon", "A distinct layer in a soil profile with characteristic properties"],
    ["Eluviation", "The removal of clay, iron, or other materials from a soil horizon"],
    ["Illuviation", "The accumulation of materials transported from overlying horizons"],
    ["Parent material", "The geological material from which soil develops"],
    ["Residual soil", "Soil formed in place from the underlying weathered material"],
    ["Alluvial soil", "Soil developed from sediment deposited by flowing water"],
    ["Laterization", "Intense weathering and leaching that leaves iron and aluminum oxides"],
    ["Soil water tension", "The force with which soil holds water against extraction"],
    ["Matric potential", "The component of water potential caused by attraction to soil surfaces"],
    ["Capillary rise", "The upward movement of water through small pores due to capillary forces"],
    ["Hydraulic conductivity", "The ability of soil to transmit water under a hydraulic gradient"],
    ["Drainage", "The removal of excess water from soil"],
    ["Redoximorphic features", "Soil colors and patterns formed by alternating reduction and oxidation"],
    ["Soil colloids", "Very small clay and organic particles with large reactive surface areas"],
    ["Isomorphic substitution", "Replacement of one ion by another in a clay mineral lattice without major structural change"],
    ["Phosphate fixation", "The conversion of soluble phosphorus into less available forms in soil"],
    ["Rhizosphere", "The soil region directly influenced by root activity and exudates"]
  ],

  "Animal Science": [
    ["Ruminant", "An animal with a fore-stomach system that includes a rumen for microbial fermentation"],
    ["Rumen", "The major fermentation chamber of cattle, sheep, goats, and other ruminants"],
    ["Reticulum", "The ruminant stomach compartment that works with the rumen in mixing and sorting feed"],
    ["Omasum", "The ruminant stomach compartment that absorbs water and some nutrients"],
    ["Abomasum", "The glandular stomach compartment of ruminants that secretes acid and enzymes"],
    ["Monogastric", "An animal with a single main stomach chamber"],
    ["Roughage", "Feed with relatively high fiber content and generally lower digestible energy"],
    ["Concentrate", "Feed relatively rich in energy or protein and low in crude fiber"],
    ["Crude protein", "An estimate of feed protein based on its nitrogen content"],
    ["Digestible energy", "Gross energy consumed minus energy lost in feces"],
    ["Metabolizable energy", "Digestible energy minus energy lost mainly in urine and combustible gases"],
    ["Maintenance requirement", "Nutrients needed to sustain vital functions without production or growth"],
    ["Feed conversion ratio", "Feed consumed divided by weight gain or product output, depending on the measure"],
    ["Balanced ration", "A daily feed mixture supplying required nutrients in suitable amounts and proportions"],
    ["Silage", "Moist forage preserved by anaerobic fermentation"],
    ["Hay", "Forage preserved by drying to a safe moisture level"],
    ["Colostrum", "The first mammary secretion after birth, rich in antibodies and nutrients"],
    ["Passive immunity", "Protection received through transferred antibodies rather than produced by the animal"],
    ["Estrus", "The period when a female is sexually receptive and may accept mating"],
    ["Ovulation", "The release of an oocyte from an ovarian follicle"],
    ["Gestation length", "The period from conception to parturition"],
    ["Parturition", "The process of giving birth"],
    ["Artificial insemination", "The placement of collected semen into the female reproductive tract without natural mating"],
    ["Estrous synchronization", "Management that coordinates estrus or ovulation among females"],
    ["Crossbreeding", "Mating animals from different breeds within the same species"],
    ["Heterosis", "The superiority of crossbred offspring over the average of the parental breeds for a trait"],
    ["Inbreeding", "Mating of related animals that increases homozygosity"],
    ["Heritability", "The proportion of observed phenotypic variance attributable to additive genetic variance in a defined population"],
    ["Selection differential", "The difference between the mean of selected parents and the population mean"],
    ["Biosecurity", "Practices that prevent introduction and spread of infectious agents"],
    ["Quarantine", "Separation of new or exposed animals to observe for disease and reduce transmission"],
    ["Vaccination", "Administration of an antigenic preparation to stimulate specific immunity"],
    ["Mastitis", "Inflammation of the mammary gland, often caused by infection"],
    ["Brucellosis", "A bacterial disease that can cause reproductive losses and may infect humans"],
    ["Foot-and-mouth disease", "A highly contagious viral disease of cloven-hoofed animals"],
    ["Newcastle disease", "A contagious viral disease affecting poultry, with respiratory, digestive, or nervous signs"],
    ["Coccidiosis", "Disease caused by protozoan parasites that damage the intestinal tract"],
    ["Deworming", "Treatment intended to control internal parasitic worms"],
    ["Carcass dressing percentage", "Carcass weight expressed as a percentage of live weight"],
    ["Body condition score", "A visual or palpation-based estimate of an animal's fat and energy reserves"],
    ["Lactation", "The production and secretion of milk by the mammary gland"],
    ["Dry period", "The interval before calving when a dairy cow is not milked"],
    ["Brooding", "Providing suitable warmth and care to young chicks"],
    ["Stocking density", "The number of animals housed or kept per unit of area"],
    ["Thermoneutral zone", "The range of environmental temperatures in which an animal maintains body temperature with minimal extra energy"],
    ["Rigor mortis", "Postmortem muscle stiffening caused by depletion of ATP"],
    ["Meat marbling", "Intramuscular fat distributed within muscle tissue"],
    ["Egg candling", "Inspection of eggs using transmitted light to assess contents and development"],
    ["Feed additive", "An ingredient included in small amounts to improve feed use, animal health, or product quality"],
    ["Animal welfare", "The animal's physical and mental state in relation to the conditions in which it lives and dies"]
  ],

  "Crop Science": [
    ["Photosynthesis", "The conversion of light energy into chemical energy using carbon dioxide and water"],
    ["Respiration", "The metabolic release of energy from organic compounds for cellular processes"],
    ["Transpiration", "The loss of water vapor from plant surfaces, mainly through stomata"],
    ["Stomata", "Epidermal pores regulated by guard cells that control gas exchange and water loss"],
    ["Photoperiodism", "Plant responses to the relative lengths of day and night"],
    ["Vernalization", "The promotion of flowering by exposure to a period of low temperature"],
    ["Apical dominance", "Suppression of lateral bud growth by signals associated with the shoot apex"],
    ["Auxin", "A plant hormone important in cell elongation, tropic responses, and apical dominance"],
    ["Gibberellin", "A plant hormone involved in stem elongation, germination, and some flowering responses"],
    ["Cytokinin", "A plant hormone that promotes cell division and can delay leaf senescence"],
    ["Abscisic acid", "A plant hormone involved in stomatal closure and responses to water stress"],
    ["Ethylene", "A gaseous plant hormone involved in fruit ripening and several stress responses"],
    ["Nitrogen deficiency", "A condition often causing older leaves to become uniformly pale or yellow"],
    ["Phosphorus deficiency", "A condition often associated with stunted growth and sometimes purpling of older leaves"],
    ["Potassium deficiency", "A condition commonly causing marginal chlorosis or scorching on older leaves"],
    ["Seed dormancy", "A condition in which viable seeds fail to germinate under otherwise favorable conditions"],
    ["Seed viability", "The capacity of a seed to remain alive and potentially germinate"],
    ["Seed vigor", "The ability of seeds to germinate rapidly and establish normal seedlings across conditions"],
    ["Scarification", "Treatment that weakens or breaks a hard seed coat to improve water entry"],
    ["Stratification", "Moist temperature treatment used to overcome dormancy in certain seeds"],
    ["Germination", "The resumption of embryo growth leading to emergence of the radicle"],
    ["Transplanting shock", "Temporary growth stress after seedlings are moved to a new growing environment"],
    ["Tillering", "The production of lateral shoots from the base of grasses and cereal crops"],
    ["Heading", "The emergence of the inflorescence from the flag-leaf sheath in cereals"],
    ["Anthesis", "The period when a flower opens and reproductive structures become exposed"],
    ["Pollination", "The transfer of pollen to the receptive stigma of a flower"],
    ["Fertilization", "The fusion of male and female gametes to form a zygote"],
    ["Double fertilization", "The angiosperm process producing a zygote and endosperm through two sperm-cell fusions"],
    ["Source-sink relationship", "The movement of assimilates from producing organs to organs that use or store them"],
    ["Harvest index", "The ratio of economic yield to total aboveground biological yield"],
    ["Lodging", "The bending or falling of crop stems before harvest"],
    ["Crop rotation", "The planned sequence of different crops on the same land over seasons"],
    ["Intercropping", "Growing two or more crops together on the same field during part of their life cycles"],
    ["Relay cropping", "Planting a second crop before the first crop is harvested"],
    ["Plant population", "The number of plants established per unit of land area"],
    ["Row spacing", "The distance between adjacent crop rows"],
    ["Thinning", "Removal of excess seedlings to achieve the desired plant population"],
    ["Roguing", "Removal of off-type, diseased, or undesirable plants from a crop or seed field"],
    ["Hybrid seed", "Seed produced by crossing selected parental lines to obtain first-generation offspring"],
    ["Open-pollinated variety", "A variety maintained through pollination within a population that can reproduce relatively true to type"],
    ["Heterozygosity", "The presence of different alleles at a genetic locus in an individual"],
    ["Genotype", "The genetic constitution of an organism"],
    ["Phenotype", "The observable characteristics produced by genotype and environment"],
    ["Quantitative trait", "A trait showing continuous variation and commonly influenced by many genes and environment"],
    ["Mutation breeding", "The use of induced or spontaneous mutations to develop useful crop variation"],
    ["Tissue culture", "The aseptic growth of plant cells, tissues, or organs on a nutrient medium"],
    ["Hardening off", "Gradual acclimatization of seedlings to field conditions before transplanting"],
    ["Mulching", "Covering the soil surface to conserve moisture, moderate temperature, or suppress weeds"],
    ["Allelopathy", "The influence of chemicals released by one plant on the growth of another"],
    ["Critical period of weed control", "The crop growth interval when weeds must be controlled to prevent unacceptable yield loss"]
  ],

  "Crop Protection": [
    ["Pathogen", "An organism or agent capable of causing disease in a host"],
    ["Inoculum", "The pathogen material that can initiate infection"],
    ["Infection", "The establishment and growth of a pathogen in a host"],
    ["Incubation period", "The time between infection and appearance of disease symptoms"],
    ["Disease triangle", "The interaction of a susceptible host, a virulent pathogen, and a favorable environment"],
    ["Systemic fungicide", "A fungicide absorbed and moved within plant tissues to act beyond the application site"],
    ["Contact fungicide", "A fungicide that protects treated surfaces and generally is not transported extensively inside the plant"],
    ["Insect vector", "An insect that transmits a pathogen between plants or animals"],
    ["Mechanical transmission", "Spread of a pathogen through physical contact, tools, or handling"],
    ["Integrated pest management", "A decision-based approach combining compatible tactics to keep pests below damaging levels"],
    ["Economic injury level", "The pest density at which the cost of damage equals the cost of control"],
    ["Economic threshold", "The pest level at which action should be taken to prevent reaching the economic injury level"],
    ["Biological control", "The use of natural enemies or biological agents to suppress a pest"],
    ["Predator", "An organism that consumes multiple prey individuals during its life"],
    ["Parasitoid", "An insect whose immature stage develops on or in a host and ultimately kills it"],
    ["Entomopathogen", "A microorganism that causes disease in insects or other arthropods"],
    ["Host resistance", "Inherited plant characteristics that reduce pest establishment, development, or damage"],
    ["Tolerance", "The ability of a plant to withstand or recover from pest injury with relatively limited yield loss"],
    ["Escape", "Avoidance of damage because crop timing or location does not overlap with peak pest pressure"],
    ["Pesticide mode of action", "The biological process or site in the pest that a pesticide disrupts"],
    ["Resistance management", "Practices that delay the evolution of heritable pest resistance to control measures"],
    ["LD50", "The dose of a substance expected to kill 50 percent of a test population under specified conditions"],
    ["Preharvest interval", "The minimum time required between the last pesticide application and harvest"],
    ["Re-entry interval", "The period after pesticide application before workers may safely enter the treated area under label directions"],
    ["Phytotoxicity", "Plant injury caused by a chemical, treatment, or environmental factor"],
    ["Spray drift", "Movement of pesticide droplets or vapor away from the intended target"],
    ["Calibration", "Adjustment and checking of application equipment to deliver the intended rate"],
    ["Protective equipment", "Clothing and devices used to reduce exposure to occupational hazards"],
    ["Quarantine pest", "A pest subject to official controls because of its potential economic or environmental impact"],
    ["Sanitation", "Removal or destruction of infested plant material and other sources of pests or pathogens"],
    ["Crop scouting", "Systematic field inspection to identify pests, beneficial organisms, and crop injury"],
    ["Fungal spore", "A reproductive or dispersal unit produced by many fungi"],
    ["Bacterial wilt", "A disease syndrome involving bacterial infection and loss of water transport or plant turgor"],
    ["Powdery mildew", "A fungal disease often appearing as white powdery growth on plant surfaces"],
    ["Downy mildew", "A disease caused by oomycetes, often with downy growth on leaf undersides in humid conditions"],
    ["Rust disease", "A plant disease commonly producing rust-colored pustules containing spores"],
    ["Viral mosaic", "A symptom pattern of irregular light and dark green areas on leaves"],
    ["Root-knot nematode", "A plant-parasitic nematode that induces characteristic galls on roots"],
    ["Mycotoxin", "A toxic secondary metabolite produced by certain fungi"],
    ["Aflatoxin", "A potent mycotoxin produced by some Aspergillus species, including certain strains of A. flavus"],
    ["Weed seed bank", "The viable weed seeds present in the soil and on its surface"],
    ["Herbicide selectivity", "The ability of a herbicide to injure target weeds more than the crop when properly used"],
    ["Pre-emergence herbicide", "A herbicide applied before target weeds emerge, according to the product label"],
    ["Post-emergence herbicide", "A herbicide applied after target weeds have emerged"],
    ["Resistance gene pyramid", "Combining multiple resistance genes in a crop to improve durability against a pathogen"],
    ["Disease incidence", "The proportion or percentage of plants or units showing disease"],
    ["Disease severity", "The amount of plant tissue or plant area affected by disease"],
    ["Vector competence", "The ability of a vector to acquire, maintain, and transmit a pathogen"],
    ["Pheromone trap", "A monitoring or control device that uses chemical signals to attract a target pest"],
    ["Threshold-based spraying", "Applying a pesticide when monitoring indicates pest levels justify intervention"]
  ],

  "Agricultural Extension and Management": [
    ["Agricultural extension", "a process that facilitates learning and change among farmers and rural communities"],
    ["Technology transfer", "the movement of knowledge, practices, or technologies from developers or institutions to users"],
    ["Participatory rural appraisal", "a set of methods that enables local people to analyze their conditions and priorities"],
    ["Needs assessment", "a systematic process for identifying gaps between current and desired conditions"],
    ["Baseline survey", "data collection before an intervention to establish starting conditions"],
    ["Monitoring", "the routine tracking of activities, outputs, and progress during implementation"],
    ["Evaluation", "the systematic assessment of an intervention's relevance, effectiveness, efficiency, impact, or sustainability"],
    ["Logic model", "a framework linking resources, activities, outputs, outcomes, and impacts"],
    ["Input", "a resource invested in a project, such as staff, funds, equipment, or time"],
    ["Output", "a direct product or service delivered by project activities"],
    ["Outcome", "a change in behavior, capacity, practice, or condition associated with a program"],
    ["Impact", "a broader, longer-term change to which an intervention contributes"],
    ["SMART objective", "an objective that is specific, measurable, achievable, relevant, and time-bound"],
    ["Diffusion of innovations", "the process by which an innovation spreads through a social system over time"],
    ["Early adopter", "a person who adopts an innovation relatively early and may influence others"],
    ["Trialability", "the extent to which an innovation can be experimented with on a limited basis"],
    ["Observability", "the extent to which results of an innovation are visible to others"],
    ["Compatibility", "the degree to which an innovation fits existing values, needs, and experience"],
    ["Complexity", "the perceived difficulty of understanding and using an innovation"],
    ["Demonstration farm", "a farm used to show and evaluate recommended practices under practical conditions"],
    ["Farmer field school", "a group-based, season-long learning approach using observation and field experimentation"],
    ["Extension method", "a planned way of communicating and facilitating learning, such as a farm visit or group meeting"],
    ["Individual contact method", "extension communication directed to one client, such as a farm visit"],
    ["Group extension method", "a learning activity involving several participants, such as a field day or group discussion"],
    ["Mass communication method", "a method that reaches large audiences through channels such as radio or print"],
    ["Feedback", "information from participants or stakeholders used to improve communication or program delivery"],
    ["Communication barrier", "a factor that interferes with accurate exchange or understanding of information"],
    ["Adult learning", "an approach that recognizes adults' experience, practical goals, and role in directing their learning"],
    ["Facilitation", "guiding a group process so participants can contribute, analyze, and make decisions"],
    ["Leadership", "the process of influencing and supporting people toward shared goals"],
    ["Delegation", "assigning authority and responsibility for a task while retaining appropriate accountability"],
    ["Organizational structure", "the formal arrangement of roles, responsibilities, and reporting relationships"],
    ["Span of control", "the number of people who report directly to a manager"],
    ["Planning", "setting objectives and deciding in advance the actions and resources needed"],
    ["Organizing", "arranging people, tasks, and resources to implement a plan"],
    ["Staffing", "recruiting, selecting, developing, and assigning personnel"],
    ["Directing", "guiding and motivating people as they carry out work"],
    ["Controlling", "comparing actual performance with standards and correcting important deviations"],
    ["SWOT analysis", "assessment of internal strengths and weaknesses and external opportunities and threats"],
    ["Gantt chart", "a schedule showing activities against time, often using horizontal bars"],
    ["Critical path", "the sequence of dependent activities that determines the shortest possible project duration"],
    ["Risk management", "identifying, assessing, and responding to uncertainties that may affect objectives"],
    ["Stakeholder analysis", "identifying affected or influential groups and examining their interests and influence"],
    ["Conflict resolution", "a process for addressing disagreement and seeking an acceptable solution"],
    ["Cooperative", "an enterprise jointly owned and democratically controlled by members for their mutual benefit"],
    ["Value chain", "the linked activities and actors involved in producing, processing, and delivering a product"],
    ["Entrepreneurship", "organizing resources and taking calculated risks to create and operate an enterprise"],
    ["Record keeping", "systematic documentation of transactions, activities, inputs, outputs, and results"],
    ["Cash flow", "the movement of money into and out of an enterprise over a period"],
    ["Gross margin", "gross revenue minus variable costs for an enterprise or production activity"],
    ["Break-even point", "the output or sales level at which total revenue equals total cost"]
  ],

  "Agricultural Economics and Marketing": [
    ["Opportunity cost", "the value of the best alternative forgone when a choice is made"],
    ["Marginal cost", "the additional total cost of producing one more unit of output"],
    ["Marginal revenue", "the additional revenue obtained from selling one more unit of output"],
    ["Fixed cost", "a cost that does not change with output over the relevant short-run range"],
    ["Variable cost", "a cost that changes with the level of production"],
    ["Total cost", "the sum of fixed and variable costs"],
    ["Average cost", "total cost divided by the quantity produced"],
    ["Gross revenue", "the total value of sales before deducting production costs"],
    ["Net farm income", "farm revenue remaining after specified production expenses are deducted"],
    ["Profit maximization", "choosing output or inputs to obtain the greatest possible profit under given conditions"],
    ["Law of demand", "the inverse relationship between price and quantity demanded, other factors held constant"],
    ["Law of supply", "the direct relationship between price and quantity supplied, other factors held constant"],
    ["Demand elasticity", "the responsiveness of quantity demanded to a change in a determinant such as price"],
    ["Price elasticity of demand", "the percentage change in quantity demanded divided by the percentage change in price"],
    ["Substitute goods", "goods that can be used in place of one another"],
    ["Complementary goods", "goods commonly consumed or used together"],
    ["Market equilibrium", "the price and quantity at which quantity supplied equals quantity demanded"],
    ["Price ceiling", "a legal maximum price, which can create a shortage if set below equilibrium"],
    ["Price floor", "a legal minimum price, which can create a surplus if set above equilibrium"],
    ["Perfect competition", "a market structure with many buyers and sellers, homogeneous products, and easy entry and exit"],
    ["Monopoly", "a market structure in which one seller supplies a product with no close substitutes"],
    ["Monopsony", "a market structure with a single buyer for a good or service"],
    ["Oligopoly", "a market structure dominated by a small number of interdependent firms"],
    ["Comparative advantage", "the ability to produce a good at a lower opportunity cost than another producer"],
    ["Economies of scale", "reductions in average cost as production scale increases over a relevant range"],
    ["Diseconomies of scale", "increases in average cost when an operation becomes too large or complex"],
    ["Production function", "the relationship between quantities of inputs used and output produced"],
    ["Diminishing marginal returns", "the decline in additional output from successive units of a variable input when other inputs are fixed"],
    ["Technical efficiency", "producing the maximum feasible output from given inputs or using minimum inputs for a given output"],
    ["Allocative efficiency", "using resources in proportions that best reflect costs and the value of outputs"],
    ["Farm budgeting", "estimating expected revenues, costs, and returns for a farm activity or plan"],
    ["Partial budget", "an analysis of the costs and benefits caused by a proposed change in a farm operation"],
    ["Enterprise budget", "a plan of expected costs and returns for one farm enterprise"],
    ["Benefit-cost ratio", "the present value of benefits divided by the present value of costs, under a stated method"],
    ["Net present value", "the present value of benefits minus the present value of costs"],
    ["Inflation", "a sustained increase in the general price level that reduces purchasing power"],
    ["Real price", "a price adjusted for changes in the general price level"],
    ["Agricultural marketing", "activities that move agricultural products from producers toward consumers"],
    ["Marketing margin", "the difference between prices at two stages of a marketing channel"],
    ["Farmgate price", "the price received by a producer at the farm or point of first sale"],
    ["Marketable surplus", "the quantity of output available for sale after on-farm use and other needs"],
    ["Postharvest loss", "a reduction in quantity or quality of produce after harvest"],
    ["Value addition", "increasing a product's economic value through processing, grading, packaging, or related services"],
    ["Grading", "sorting products into groups based on defined quality or size standards"],
    ["Standardization", "establishing and applying consistent specifications for product quality, size, or other attributes"],
    ["Market information system", "a system that collects and shares information on prices, supply, demand, and market conditions"],
    ["Price spread", "the difference between the price paid by consumers and the price received by producers"],
    ["Contract farming", "an arrangement in which producers and buyers agree in advance on production or marketing terms"],
    ["Commodity exchange", "an organized market where standardized commodity contracts may be traded"],
    ["Risk diversification", "spreading activities or investments to reduce exposure to a single source of risk"],
    ["Agricultural insurance", "a risk-transfer arrangement that compensates eligible losses under a defined policy"]
  ],

};

// Subject information
const subjectInfo = {
  "Soil Science": {
    icon: "🌱",
    description: "Soil properties, fertility, classification, and conservation."
  },
  "Animal Science": {
    icon: "🐄",
    description: "Animal nutrition, breeding, physiology, and production."
  },
  "Crop Science": {
    icon: "🌾",
    description: "Crop production, plant growth, and field management."
  },
  "Crop Protection": {
    icon: "🛡️",
    description: "Plant diseases, insect pests, weeds, and integrated control."
  },
  "Agricultural Extension and Management": {
    icon: "👨‍🌾",
    description: "Extension methods, communication, leadership, and farm management."
  },
  "Agricultural Economics and Marketing": {
    icon: "📈",
    description: "Farm economics, budgeting, market structures, and agricultural marketing."
  }
};

// Utility functions
const $ = (id) => document.getElementById(id);

function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// Build the six subjects and their 300 multiple-choice questions
console.log("Question bank loaded:", typeof questionBank);
console.log("Subject names:", Object.keys(questionBank));
console.log(
  "Question counts:",
  Object.fromEntries(
    Object.entries(questionBank).map(([name, questions]) => [
      name,
      questions.length
    ])
  )
);
const subjects = Object.entries(questionBank).map(([name, concepts]) => {
  const questions = concepts.map(([term, definition], index) => {
    const distractors = shuffle(
      concepts
        .filter((_, i) => i !== index)
        .map((item) => item[1])
    ).slice(0, 3);

    const choices = shuffle([definition, ...distractors]);

    return {
      q: `Which statement best defines "${term}"?`,
      choices,
      answer: choices.indexOf(definition),
      explain: `${term}: ${definition}.`
    };
  });

  return {
    name,
    description: subjectInfo[name].description,
    icon: subjectInfo[name].icon,
    questions
  };
});

// Reviewer notes
const reviewers = [
  {
    title: "Soil Science",
    text: "Review soil texture, structure, pH, cation exchange capacity, nutrient availability, soil horizons, and erosion control. Remember that soil texture depends on the relative proportions of sand, silt, and clay."
  },
  {
    title: "Animal Science",
    text: "Focus on digestion, feed nutrients, breeding systems, reproductive physiology, animal health, and production management. Distinguish energy, protein, minerals, and vitamins by their primary functions."
  },
  {
    title: "Crop Science",
    text: "Study seed quality, germination, plant growth, crop rotation, irrigation, nutrient management, and harvesting. Understand the difference between vegetative growth and reproductive development."
  },
  {
    title: "Crop Protection",
    text: "Review pest identification, disease symptoms, pathogen transmission, weed competition, pesticide safety, biological control, and integrated pest management. Correct identification should come before selecting a control method."
  },
  {
    title: "Agricultural Extension and Management",
    text: "Review extension communication, adoption of innovations, participatory methods, project planning, monitoring, evaluation, leadership, and farm records. Separate project inputs, outputs, outcomes, and impacts."
  },
  {
    title: "Agricultural Economics and Marketing",
    text: "Study supply and demand, opportunity cost, production costs, farm budgeting, elasticity, market structures, marketing margins, and value addition. Practice distinguishing fixed costs from variable costs."
  }
];

// Local storage
const STORAGE_KEY = "bsareview_app_data_v1";

function loadData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      answered: 0,
      correct: 0,
      history: [],
      notes: ""
    };
  } catch {
    return {
      answered: 0,
      correct: 0,
      history: [],
      notes: ""
    };
  }
}

let appData = loadData();

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function accuracy() {
  return appData.answered
    ? Math.round((appData.correct / appData.answered) * 100)
    : 0;
}

// Current quiz state
let currentSubject = null;
let currentQuestions = [];
let questionIndex = 0;
let quizCorrect = 0;
let selectedAnswer = null;
let questionChecked = false;

// Page navigation
function showPage(pageName) {
  ["home", "quiz", "notes", "scores"].forEach((page) => {
    const element = $(page);
    if (element) {
      element.style.display = page === pageName ? "" : "none";
    }
  });

  document.querySelectorAll("[data-page]").forEach((tab) => {
    const active = tab.dataset.page === pageName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-current", active ? "page" : "false");
  });

  if (pageName === "scores") renderScores();
  if (pageName === "notes") loadNotes();
  if (pageName === "home") renderSubjects();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render subject cards
function renderSubjects() {
  const container = $("subjects");
  if (!container) return;

  container.innerHTML = subjects.map((subject, index) => `
    <button class="subject-card" type="button" data-subject="${index}">
      <span class="subject-icon">${subject.icon}</span>
      <span class="subject-name">${escapeHTML(subject.name)}</span>
      <span class="subject-description">${escapeHTML(subject.description)}</span>
      <span class="subject-count">${subject.questions.length} practice questions</span>
    </button>
  `).join("");

  container.querySelectorAll("[data-subject]").forEach((button) => {
    button.addEventListener("click", () => {
      startQuiz(Number(button.dataset.subject));
    });
  });
}

// Start a quiz for a chosen subject
function startQuiz(subjectIndex) {
  currentSubject = subjects[subjectIndex];
  currentQuestions = shuffle(currentSubject.questions);
  questionIndex = 0;
  quizCorrect = 0;
  selectedAnswer = null;
  questionChecked = false;

  const subjectTitle = $("quizSubject");
  const quizTitle = $("quizTitle");

  if (subjectTitle) subjectTitle.textContent = currentSubject.name;
  if (quizTitle) quizTitle.textContent = "Practice Quiz";

  showPage("quiz");
  renderQuestion();
}

// Display the current question
function renderQuestion() {
  if (!currentSubject || !currentQuestions.length) return;

  const question = currentQuestions[questionIndex];

  selectedAnswer = null;
  questionChecked = false;

  if ($("questionProgress")) {
    $("questionProgress").textContent =
      `Question ${questionIndex + 1} of ${currentQuestions.length}`;
  }

  if ($("progressBar")) {
    $("progressBar").style.width =
      `${((questionIndex + 1) / currentQuestions.length) * 100}%`;
  }

  if ($("questionText")) {
    $("questionText").textContent = question.q;
  }

  const choicesContainer = $("choices");

  if (choicesContainer) {
    choicesContainer.innerHTML = question.choices.map((choice, index) => `
      <button class="choice" type="button" data-choice="${index}">
        <span class="choice-letter">${String.fromCharCode(65 + index)}.</span>
        <span>${escapeHTML(choice)}</span>
      </button>
    `).join("");

    choicesContainer.querySelectorAll("[data-choice]").forEach((button) => {
      button.addEventListener("click", () => selectChoice(Number(button.dataset.choice)));
    });
  }

  const feedback = $("feedback");
  if (feedback) {
    feedback.textContent = "";
    feedback.style.display = "none";
    feedback.className = "";
  }

  const nextButton = $("nextQuestion");
  if (nextButton) {
    nextButton.disabled = true;
    nextButton.textContent =
      questionIndex === currentQuestions.length - 1 ? "Finish Quiz" : "Next Question";
  }
}

// Select an answer
function selectChoice(index) {
  if (questionChecked) return;

  selectedAnswer = index;

  document.querySelectorAll("#choices [data-choice]").forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.choice) === index);
  });

  // Check the selected answer immediately
  checkAnswer();
}

// Check and explain the answer
function checkAnswer() {
  if (questionChecked || selectedAnswer === null) return;

  questionChecked = true;

  const question = currentQuestions[questionIndex];
  const isCorrect = selectedAnswer === question.answer;

  appData.answered += 1;

  if (isCorrect) {
    quizCorrect += 1;
    appData.correct += 1;
  }

  saveData();

  document.querySelectorAll("#choices [data-choice]").forEach((button) => {
    const index = Number(button.dataset.choice);
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    } else if (index === selectedAnswer && !isCorrect) {
      button.classList.add("incorrect");
    }
  });

  const feedback = $("feedback");

  if (feedback) {
    feedback.style.display = "block";
    feedback.className = isCorrect ? "feedback correct" : "feedback incorrect";
    feedback.textContent =
      `${isCorrect ? "Correct!" : "Not quite."} ${question.explain}`;
  }

  const nextButton = $("nextQuestion");
  if (nextButton) nextButton.disabled = false;

  updateDashboard();
}

// Move to the next question or finish
function nextQuestion() {
  if (!questionChecked) return;

  if (questionIndex < currentQuestions.length - 1) {
    questionIndex += 1;
    renderQuestion();
    return;
  }

  const percentage = Math.round(
    (quizCorrect / currentQuestions.length) * 100
  );

  appData.history.unshift({
    subject: currentSubject.name,
    date: new Date().toLocaleString(),
    correct: quizCorrect,
    total: currentQuestions.length,
    percentage
  });

  // Keep the latest 50 quiz results
  appData.history = appData.history.slice(0, 50);
  saveData();

  const questionText = $("questionText");
  if (questionText) {
    questionText.textContent =
      `Quiz complete! You scored ${quizCorrect} out of ${currentQuestions.length} (${percentage}%).`;
  }

  if ($("choices")) $("choices").innerHTML = "";

  if ($("feedback")) {
    $("feedback").style.display = "block";
    $("feedback").className = "feedback";
    $("feedback").textContent =
      percentage >= 80
        ? "Great work! Keep reviewing to maintain your performance."
        : "Keep practicing. Review the explanations and try again.";
  }

  if ($("questionProgress")) {
    $("questionProgress").textContent = "Quiz completed";
  }

  if ($("progressBar")) $("progressBar").style.width = "100%";

  const nextButton = $("nextQuestion");
  if (nextButton) {
    nextButton.disabled = false;
    nextButton.textContent = "Back to Subjects";
    nextButton.onclick = () => showPage("home");
  }

  updateDashboard();
}

// Render reviewer cards
function renderReviewers() {
  const container = $("reviewers");
  if (!container) return;

  container.innerHTML = reviewers.map((reviewer) => `
    <details class="reviewer-card">
      <summary>${escapeHTML(reviewer.title)}</summary>
      <p>${escapeHTML(reviewer.text)}</p>
    </details>
  `).join("");
}

// Personal notes
function loadNotes() {
  const notesField = $("personalNotes");
  if (notesField && notesField.value === "") {
    notesField.value = appData.notes || "";
  }
}

function saveNotes() {
  const notesField = $("personalNotes");
  if (!notesField) return;

  appData.notes = notesField.value;
  saveData();

  if ($("notesMessage")) {
    $("notesMessage").textContent = "Notes saved on this device.";
  }
}

// Score dashboard
function updateDashboard() {
  if ($("answered")) $("answered").textContent = appData.answered;
  if ($("correct")) $("correct").textContent = appData.correct;
  if ($("accuracy")) $("accuracy").textContent = `${accuracy()}%`;

  if ($("scoreAnswered")) $("scoreAnswered").textContent = appData.answered;
  if ($("scoreCorrect")) $("scoreCorrect").textContent = appData.correct;
  if ($("scoreAccuracy")) $("scoreAccuracy").textContent = `${accuracy()}%`;
}

function renderScores() {
  updateDashboard();

  const historyContainer = $("history");
  if (!historyContainer) return;

  if (!appData.history.length) {
    historyContainer.innerHTML = "<p>No completed quizzes yet. Choose a subject and start practicing.</p>";
    return;
  }

  historyContainer.innerHTML = appData.history.map((result) => `
    <div class="history-item">
      <strong>${escapeHTML(result.subject)}</strong>
      <span>${result.correct}/${result.total} correct (${result.percentage}%)</span>
      <small>${escapeHTML(result.date)}</small>
    </div>
  `).join("");
}

function resetScores() {
  const confirmed = window.confirm(
    "Reset your quiz scores and history? Your personal notes will be kept."
  );

  if (!confirmed) return;

  appData.answered = 0;
  appData.correct = 0;
  appData.history = [];

  saveData();
  updateDashboard();
  renderScores();
}

// Connect the interface
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-page]").forEach((tab) => {
    tab.addEventListener("click", () => showPage(tab.dataset.page));
  });

  if ($("nextQuestion")) {
    $("nextQuestion").addEventListener("click", () => {
      if ($("nextQuestion").textContent === "Back to Subjects") {
        showPage("home");
      } else {
        nextQuestion();
      }
    });
  }

  if ($("saveNotes")) {
    $("saveNotes").addEventListener("click", saveNotes);
  }

  if ($("resetScores")) {
    $("resetScores").addEventListener("click", resetScores);
  }

  if ($("backSubjects")) {
    $("backSubjects").addEventListener("click", () => showPage("home"));
  }

  renderSubjects();
  renderReviewers();
  updateDashboard();

  showPage("home");
});