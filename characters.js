 const characters = [
    {
      id: 1,
      name: "Osiris",
      img: "",
      body: "God of the afterlife, underworld, and the dead. Usually depicted with green or black skin.",
      attributes: {
        domain: "Afterlife and Death",
        symbol: "Crook and Flail",
        associations: ["Judgment", "Resurrection"],
      },
      relationships: {
        spouse: "Isis",
        children: ["Horus", "Anubis"],
        siblings: ["Set", "Isis", "Nephthys"],
      },
      mythology:
        "Osiris, born to the sky goddess Nut and the earth god Geb, became the ruler of Egypt. His brother Seth, consumed by jealousy, plotted against him. Seth tricked Osiris into a coffin, sealed it, and threw it into the Nile. Osiris drowned but became the ruler of the afterlife. His wife and sister, Isis, searched for his body, eventually reassembling it. Osiris became the judge of the deceased, emphasizing justice and resurrection.",
    },
    {
      id: 2,
      name: "Anubis",
      img: "",
      body: "God of mummification and the afterlife, often represented with the head of a jackal.",
      attributes: {
        domain: "Funeral rites and Death",
        symbol: "Ankh and Was Scepter",
        associations: ["Mummification", "Judgment of the Dead"],
      },
      relationships: {
        parentage: ["Osiris", "Nephthys"],
        siblings: ["Horus"],
      },
      mythology:
        "Anubis, born from the union of Osiris and Nephthys, played a crucial role in the funerary process. He guided souls through the afterlife, ensuring a safe journey. Anubis was responsible for mummification, overseeing the weighing of the heart during judgment. Despite his association with death, Anubis was a protector of the deceased, emphasizing the importance of proper funeral rites.",
    },
    {
      id: 3,
      name: "Isis",
      img: "",
      body: "Goddess of magic, motherhood, and fertility. Associated with protection and healing.",
      attributes: {
        domain: "Magic and Fertility",
        symbol: "Throne and Ankh",
        associations: ["Motherhood", "Healing"],
      },
      relationships: {
        spouse: "Osiris",
        children: ["Horus"],
      },
      mythology:
        "Isis, a central figure in the Osiris myth, played a pivotal role in his resurrection. After reassembling Osiris's body, Isis conceived their son Horus. Isis was revered for her magical abilities, protective nature, and nurturing qualities. She symbolized the power of resurrection and the importance of maternal care in Egyptian society.",
    },
    {
      id: 4,
      name: "Ra",
      img: "",
      body: "Sun god and a major deity in ancient Egyptian religion. Often depicted with a sun disk on his head.",
      attributes: {
        domain: "Sun and Sky",
        symbol: "Sun Disk and Falcon",
        associations: ["Solar Power", "Creation"],
      },
      relationships: {
        consort: "Hathor",
      },
      mythology:
        "Ra, a principal deity associated with the sun and the creation of the world, held a prominent position in Egyptian religion. Often depicted with a sun disk on his head, Ra represented the solar power that sustained life. Ra created the world and ruled over the heavens. Associated with creation and cosmic order, Ra's consort was Hathor, the goddess of love. Ra embarked on a daily journey across the sky, symbolizing the cycle of life, death, and rebirth.",
    },
    {
      id: 5,
      name: "Horus",
      img: "",
      body: "Sky god and son of Osiris and Isis. Often depicted with the head of a falcon.",
      attributes: {
        domain: "Sky and Kingship",
        symbol: "Eye of Horus",
        associations: ["Protection", "Kingship"],
      },
      relationships: {
        parents: ["Osiris", "Isis"],
        rival: "Set",
      },
      mythology:
        "Horus, with the head of a falcon, played a crucial role in Egyptian kingship. His rivalry with his uncle Seth, who usurped Osiris, led to a series of conflicts. Horus eventually avenged his father's death and became the rightful king. Pharaohs identified with Horus, emphasizing the divine nature of their rule. The Eye of Horus symbolized royal power and protection.",
    },
    {
      id: 6,
      name: "Thoth",
      img: "",
      body: "God of wisdom, writing, and magic. Often depicted with the head of an ibis.",
      attributes: {
        domain: "Wisdom and Knowledge",
        symbol: "Ibis and Moon",
        associations: ["Writing", "Science"],
      },
      relationships: {
        consort: "Ma'at",
      },
      mythology:
        "Associated with writing, magic, and the arbitration of disputes.",
    },
    {
      id: 7,
      name: "Bastet",
      img: "",
      body: "Goddess of home, fertility, and protection. Often depicted as a lioness or with the head of a lioness.",
      attributes: {
        domain: "Home and Protection",
        symbol: "Lioness",
        associations: ["Fertility", "Joy"],
      },
      relationships: {
        consort: "Ptah",
      },
      mythology:
        "Lioness-headed goddess associated with home, protection, and joy.",
    },
    {
      id: 8,
      name: "Seth",
      img: "",
      body: "God of chaos, storms, and violence. Often depicted with the head of an unknown animal, possibly an aardvark or anteater.",
      attributes: {
        domain: "Chaos and Storms",
        symbol: "Was Scepter",
        associations: ["Disorder", "Desert"],
      },
      relationships: {
        spouse: "Nephthys",
        rival: "Horus",
      },
      mythology:
        "Associated with chaos, storms, and conflict, often in rivalry with Horus.",
    },
    {
      id: 9,
      name: "Ma'at",
      img: "",
      body: "Goddess of truth, justice, and cosmic order. Often depicted with an ostrich feather on her head.",
      attributes: {
        domain: "Truth and Justice",
        symbol: "Ostrich Feather",
        associations: ["Balance", "Harmony"],
      },
      relationships: {},
      mythology:
        "Personification of cosmic order, truth, and justice in Egyptian mythology.",
    },
    {
      id: 10,
      name: "Ptah",
      img: "",
      body: "Creator god and patron of craftsmen. Often depicted mummiform, holding a staff and ankh.",
      attributes: {
        domain: "Creation and Craftsmanship",
        symbol: "Ankh and Djed Pillar",
        associations: ["Craftsmanship", "Architecture"],
      },
      relationships: {
        consort: "Bastet",
      },
      mythology: "Associated with creation, craftsmanship, and the arts.",
    },
    {
      id: 11,
      name: "Nephthys",
      img: "",
      body: "Goddess of mourning, death, and protection. Sister and wife of Seth, sister of Osiris and Isis.",
      attributes: {
        domain: "Mourning and Protection",
        symbol: "Hawk",
        associations: ["Funeral Rites", "Support"],
      },
      relationships: {
        spouse: "Seth",
        siblings: ["Osiris", "Isis", "Horus"],
      },
      mythology:
        "Associated with mourning and protection, often invoked during funeral rites.",
    },
    {
      id: 12,
      name: "Khnum",
      img: "",
      body: "Ram-headed god of fertility, creation, and water. Often depicted with a potter's wheel.",
      attributes: {
        domain: "Fertility and Creation",
        symbol: "Potter's Wheel",
        associations: ["Craftsmanship", "Water"],
      },
      relationships: {},
      mythology:
        "Believed to shape humans from clay on a potter's wheel, associated with the source of the Nile.",
    },
    {
      id: 13,
      name: "Hathor",
      img: "",
      body: "Goddess of love, music, and motherhood. Often depicted with the head of a cow and a sun disk.",
      attributes: {
        domain: "Love and Motherhood",
        symbol: "Cow and Sistrum",
        associations: ["Music", "Joy"],
      },
      relationships: {
        consort: "Ra",
      },
      mythology:
        "Considered a nurturing goddess associated with love, music, and motherhood.",
    },
    {
      id: 14,
      name: "Anhur",
      img: "",
      body: "God of war and hunting, often depicted with a spear and wearing a feathered crown.",
      attributes: {
        domain: "War and Hunting",
        symbol: "Spear",
        associations: ["Valor", "Victory"],
      },
      relationships: {},
      mythology:
        "Associated with war and hunting, often invoked for protection in battles.",
    },
    {
      id: 15,
      name: "Sekhmet",
      img: "",
      body: "Goddess of war and destruction, often depicted with the head of a lioness.",
      attributes: {
        domain: "War and Healing",
        symbol: "Lioness",
        associations: ["Power", "Protection"],
      },
      relationships: {},
      mythology:
        "Feared for her destructive power in war but also seen as a healer and protector.",
    },
    {
      id: 16,
      name: "Nut",
      img: "",
      body: "Goddess of the sky and heavens, often depicted arched over the earth.",
      attributes: {
        domain: "Sky and Heavens",
        symbol: "Star-covered body",
        associations: ["Cosmic Order", "Protection"],
      },
      relationships: {
        spouse: "Geb",
        children: ["Osiris", "Isis", "Seth", "Nephthys"],
        siblings: ["Shu"],
      },
      mythology:
        "Essential in the creation myth, representing the sky that arches over the earth.",
    },
    {
      id: 17,
      name: "Geb",
      img: "",
      body: "God of the earth and Nut's brother. Often depicted lying under the arch of Nut.",
      attributes: {
        domain: "Earth and Agriculture",
        symbol: "Goose",
        associations: ["Fertility", "Stability"],
      },
      relationships: {
        spouse: "Nut",
        children: ["Osiris", "Isis", "Seth", "Nephthys"],
        siblings: ["Shu"],
      },
      mythology:
        "Personification of the earth, associated with fertility and stability.",
    },
    {
      id: 18,
      name: "Shu",
      img: "",
      body: "God of air and sunlight, often depicted separating Nut and Geb.",
      attributes: {
        domain: "Air and Light",
        symbol: "Feather",
        associations: ["Sunlight", "Circulation"],
      },
      relationships: {
        parents: ["Nut", "Geb"],
        siblings: ["Nut"],
      },
      mythology:
        "Associated with air and sunlight, depicted as a figure lifting the sky from the earth.",
    },
    {
      id: 19,
      name: "Hapi",
      img: "",
      body: "God of the Nile and fertility. Often depicted as a man with female breasts, symbolizing abundance.",
      attributes: {
        domain: "Nile and Fertility",
        symbol: "Water Jars",
        associations: ["Abundance", "Flood"],
      },
      relationships: {},
      mythology:
        "Worshipped for bringing fertility to the land through the annual flooding of the Nile.",
    },
    {
      id: 20,
      name: "Khonsu",
      img: "",
      body: "God of the moon, time, and healing. Often depicted with a lunar disk on his head.",
      attributes: {
        domain: "Moon and Healing",
      },
    },
    {
      id: 20,
      name: "Khonsu",
      img: "",
      body: "God of the moon, time, and healing. Often depicted with a lunar disk on his head.",
      attributes: {
        domain: "Moon and Healing",
        symbol: "Crook and Flail",
        associations: ["Timekeeping", "Renewal"],
      },
      relationships: {
        parentage: ["Amun", "Mut"],
        siblings: ["Montu"],
      },
      mythology:
        "Associated with the moon's cycles, timekeeping, and healing. Worshiped for renewal and rejuvenation.",
    },

    {
      id: 21,
      name: "Selket",
      img: "",
      body: "Goddess of scorpions, magic, and protection. Often depicted with the head of a scorpion.",
      attributes: {
        domain: "Scorpions and Magic",
        symbol: "Scorpion",
        associations: ["Protection", "Healing"],
      },
      relationships: {},
      mythology:
        "Guardian goddess invoked for protection against venomous creatures and magical threats.",
    },
    {
      id: 22,
      name: "Wadjet",
      img: "",
      body: "Cobra goddess of protection. Often depicted as a cobra or as a woman with a cobra on her head.",
      attributes: {
        domain: "Protection and Royalty",
        symbol: "Cobra",
        associations: ["Royalty", "Guardianship"],
      },
      relationships: {
        consort: "Ptah",
      },
      mythology:
        "Symbol of protection, associated with the royal crowns of Egypt and the uraeus worn by pharaohs.",
    },
    {
      id: 23,
      name: "Tefnut",
      img: "",
      body: "Goddess of moisture, dew, and rain. Often depicted as a lioness or with the head of a lioness.",
      attributes: {
        domain: "Moisture and Rain",
        symbol: "Lioness",
        associations: ["Fertility", "Nourishment"],
      },
      relationships: {
        spouse: "Shu",
        children: ["Nut", "Geb"],
      },
      mythology:
        "Represents the primordial forces of moisture and rain, essential for fertility and life.",
    },
    {
      id: 24,
      name: "Khepri",
      img: "",
      body: "Scarab beetle god associated with the rising sun and transformation.",
      attributes: {
        domain: "Sunrise and Renewal",
        symbol: "Scarab Beetle",
        associations: ["Creation", "Rebirth"],
      },
      relationships: {},
      mythology:
        "Symbolizes the rising sun, transformation, and the cycle of rebirth in Egyptian cosmology.",
    },
    {
      id: 25,
      name: "Ammit",
      img: "",
      body: "Demoness and devourer of the dead. Part lion, hippopotamus, and crocodile.",
      attributes: {
        domain: "Judgment of the Dead",
        symbol: "Composite Creature",
        associations: ["Justice", "Afterlife"],
      },
      relationships: {},
      mythology:
        "Stands beside the scales of judgment in the afterlife, devouring the hearts of the unworthy.",
    },
    {
      id: 26,
      name: "Atum",
      img: "",
      body: "Creator god and solar deity. Often depicted as a man wearing a double crown.",
      attributes: {
        domain: "Creation and Solar Power",
        symbol: "Ankh and Was Scepter",
        associations: ["Eternity", "Life"],
      },
      relationships: {
        children: ["Shu", "Tefnut"],
      },
      mythology:
        "Associated with the creation of the world and the solar aspect of the sun god.",
    },
    {
      id: 27,
      name: "Khnumet",
      img: "",
      body: "Female counterpart of Khnum. Goddess of fertility, water, and childbirth.",
      attributes: {
        domain: "Fertility and Childbirth",
        symbol: "Potter's Wheel",
        associations: ["Creation", "Nurturing"],
      },
      relationships: {},
      mythology:
        "Associated with the creative forces of water and fertility, especially in the context of childbirth.",
    },
    {
      id: 28,
      name: "Min",
      img: "",
      body: "God of fertility, vegetation, and sexual prowess. Often depicted as an ithyphallic deity.",
      attributes: {
        domain: "Fertility and Harvest",
        symbol: "Flail",
        associations: ["Abundance", "Virility"],
      },
      relationships: {},
      mythology:
        "Worshiped for his role in fertility, agriculture, and his association with male sexuality.",
    },
    {
      id: 29,
      name: "Seshat",
      img: "",
      body: "Goddess of wisdom, knowledge, and writing. Often depicted with a seven-pointed emblem above her head.",
      attributes: {
        domain: "Wisdom and Writing",
        symbol: "Seven-Pointed Emblem",
        associations: ["Records", "Inventiveness"],
      },
      relationships: {},
      mythology:
        "Patroness of writing and record-keeping, associated with wisdom and the measurement of time.",
    },
    {
      id: 30,
      name: "Neith",
      img: "",
      body: "Goddess of war, hunting, and wisdom. Often depicted with a bow and crossed arrows.",
      attributes: {
        domain: "War and Wisdom",
        symbol: " ",
      },
    },
  ];


module.exports = characters;
