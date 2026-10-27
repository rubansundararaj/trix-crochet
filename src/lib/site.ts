export const siteName = "Open Loop";

export const siteDescription =
  "A small catalog of crochet designs. Watch the makes on YouTube and follow the day-to-day on Instagram.";

export const youtubeUrl = "https://www.youtube.com/@Crochetbytrish";
export const instagramUrl = "https://www.instagram.com/trishcrochet1111/";

export const designs = [
  {
    id: "granny",
    name: "Meadow Granny",
    kind: "Blanket",
    stitch: "Granny square",
    yarn: "Worsted wool",
    level: "Beginner",
    blurb: "A floral square sized for a picnic blanket.",
    swatch: "bg-sage",
    ink: "text-cream",
    onDark: true,
  },
  {
    id: "ripple",
    name: "Tide Ripple",
    kind: "Blanket",
    stitch: "Ripple stitch",
    yarn: "Bulky wool",
    level: "Intermediate",
    blurb: "Soft chevrons, planned in three colors.",
    swatch: "bg-clay",
    ink: "text-cream",
    onDark: true,
  },
  {
    id: "beanie",
    name: "Cloud Bobble",
    kind: "Hat",
    stitch: "Bobble stitch",
    yarn: "Worsted wool",
    level: "Beginner",
    blurb: "A rounded beanie with a dense bobble texture.",
    swatch: "bg-butter",
    ink: "text-ink",
    onDark: false,
  },
  {
    id: "market",
    name: "Market Mesh",
    kind: "Bag",
    stitch: "Mesh stitch",
    yarn: "Cotton DK",
    level: "Beginner",
    blurb: "An open net bag for the farmers’ market.",
    swatch: "bg-sand",
    ink: "text-ink",
    onDark: false,
  },
  {
    id: "tote",
    name: "Shell Edge",
    kind: "Bag",
    stitch: "Shell stitch",
    yarn: "Cotton worsted",
    level: "Intermediate",
    blurb: "A sturdy tote finished with a shell border.",
    swatch: "bg-sea",
    ink: "text-cream",
    onDark: true,
  },
  {
    id: "shawl",
    name: "Fern Lace",
    kind: "Shawl",
    stitch: "Lace",
    yarn: "Fingering wool",
    level: "Intermediate",
    blurb: "A triangle shawl with a fern-like lace repeat.",
    swatch: "bg-plum",
    ink: "text-cream",
    onDark: true,
  },
  {
    id: "doily",
    name: "Sunday Doily",
    kind: "Home",
    stitch: "Thread lace",
    yarn: "Crochet thread",
    level: "Advanced",
    blurb: "A round lace doily for a side table.",
    swatch: "bg-blush",
    ink: "text-ink",
    onDark: false,
  },
  {
    id: "cardigan",
    name: "Pocket Cardigan",
    kind: "Wearable",
    stitch: "Moss stitch",
    yarn: "DK wool",
    level: "Intermediate",
    blurb: "A cropped cardigan with patch pockets.",
    swatch: "bg-ink",
    ink: "text-cream",
    onDark: true,
  },
] as const;

export type Design = (typeof designs)[number];
export type DesignId = Design["id"];
