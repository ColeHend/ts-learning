import person from "../models/person";
import spell from "../models/spell";
export default class exampleData {
    public largePeopleArray: person[] = [
        {
            name: "John",
            age: 30,
            height: 6.5,
            weight: 200,
        },
        {
            name: "Jane",
            age: 25,
            height: 5.5,
            weight: 150,
        },
        {
            name: "Jim",
            age: 40,
            height: 6.0,
            weight: 180,
        },
        {
            name: "Jill",
            age: 35,
            height: 5.8,
            weight: 160,
        },
        {
            name: "Jack",
            age: 20,
            height: 5.2,
            weight: 120,
        },
        {
            name: "Jen",
            age: 45,
            height: 5.9,
            weight: 170,
        },
        {
            name: "Jenny",
            age: 50,
            height: 5.7,
            weight: 165,
        },
        {
            name: "Jesse",
            age: 55,
            height: 6.1,
            weight: 185,
        },
        {
            name: "Jared",
            age: 60,
            height: 6.2,
            weight: 190,
        },
        {
            name: "Jasper",
            age: 65,
            height: 6.3,
            weight: 195,
        },
        {
            name: "Jillian",
            age: 70,
            height: 6.4,
            weight: 199,
        },
        {
            name: "Jillie",
            age: 75,
            height: 6.6,
            weight: 201,
        },
        {
            name: "Jillie",
            age: 80,
            height: 6.7,
            weight: 202,
        },
        {
            name: "Jillie",
            age: 85,
            height: 6.8,
            weight: 203,
        },
        {
            name: "Jillie",
            age: 90,
            height: 6.9,
            weight: 204,
        },
        {
            name: "Jillie",
            age: 95,
            height: 7.0,
            weight: 205,
        },
        {
            name: "Jillie",
            age: 100,
            height: 7.1,
            weight: 206,
        }];
    public largeSpellsArray: spell[] = [
        {
            name: "Fireball",
            level: 1,
            school: "Evocation",
            casting_time: "1 action",
            range: "120 feet",
            components: "V, S, M",
            duration: "Instantaneous",
            description: "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
            higher_level: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
        },
        {
            name: "Magic Missile",
            level: 1,
            school: "Evocation",
            casting_time: "1 action",
            range: "120 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several.",
            higher_level: "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
        },
        {
            name: "Thunderwave",
            level: 1,
            school: "Evocation",
            casting_time: "1 action",
            range: "Self (15-foot cube)",
            components: "V, S",
            duration: "Instantaneous",
            description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, it takes half as much damage and isn't pushed. A creature must be at least 1 foot tall and weigh at least 10 pounds to be pushed.",
            higher_level: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
        },
        {
            name: "Charm Person",
            level: 1,
            school: "Enchantment",
            casting_time: "1 action",
            range: "30 feet",
            components: "V, S, M (a small, straight piece of iron)",
            duration: "1 hour",
            description: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
            higher_level: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional humanoid for each slot level above 1st."
        },
        {
            name: "Sleep",
            level: 1,
            school: "Enchantment",
            casting_time: "1 action",
            range: "90 feet",
            components: "V, S, M (a pinch of fine sand, rose petals, or a cricket)",
            duration: "1 minute",
            description: "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).",
            higher_level: "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
        },
        {
            name: "Tasha's Hideous Laughter",
            level: 1,
            school: "Enchantment",
            casting_time: "1 action",
            range: "30 feet",
            components: "V, S",
            duration: "1 minute",
            description: "A creature of your choice that you can see within range begins to giggle hysterically. The creature must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or lower isn't affected.",
            higher_level: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
        },
        {
            name: "Burning Hands",
            level: 1,
            school: "Evocation",
            casting_time: "1 action",
            range: "Self (15-foot cone)",
            components: "V, S",
            duration: "Instantaneous",
            description: "Your outstretched hand bursts into flame at a point you choose within range. Each creature in a 15-foot cone must make a Dexterity saving throw. A target takes 3d6 fire damage on a failed save, or half as much damage on a successful one.",
            higher_level: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
        },
        {
            name: "Chill Touch",
            level: 0,
            school: "Necromancy",
            casting_time: "1 action",
            range: "120 feet",
            components: "V, S",
            duration: "1 round",
            description: "You create a ghostly, skeletal hand in the space of a creature within range. Make a melee spell attack against the creature you choose. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If the target drops to 0 hit points before this happens, you can use a bonus action on a subsequent turn of yours to cause the hand to leap to a creature within 5 feet of it. The hand then clings to the new target. The hand lasts for 1 round, after which it disappears.",
            higher_level: "When you cast this spell using a spell slot of 1st level or higher, the damage increases by 1d8 for each slot level above 0."
        },
        {
            name: "Eldritch Blast",
            level: 0,
            school: "Evocation",
            casting_time: "1 action",
            range: "120 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "You create a beam of crackling energy. Make a ranged spell attack against one creature within range. On a hit, the target takes 1d10 force damage.",
            higher_level: "When you cast this spell using a spell slot of 1st level or higher, the damage increases by 1d10 for each slot level above 0."
        },
        {
            name: "Mage Hand",
            level: 0,
            school: "Conjuration",
            casting_time: "1 action",
            range: "30 feet",
            components: "V, S",
            duration: "1 minute",
            description: "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.",
            higher_level: "When you cast this spell using a spell slot of 1st level or higher, the hand lasts for 1 minute per level of the slot."
        },
        {
            name: "Minor Illusion",
            level: 0,
            school: "Illusion",
            casting_time: "1 action",
            range: "30 feet",
            components: "V, S, M (a bit of fleece)",
            duration: "1 minute",
            description: "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.",
            higher_level: "When you cast this spell using a spell slot of 1st level or higher, the spell lasts for 1 minute per level of the slot."
        },
        {
            name: "Poison Spray",
            level: 0,
            school: "Conjuration",
            casting_time: "1 action",
            range: "10 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm into the creature's face. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.",
            higher_level: "When you cast this spell using a spell slot of 1st level or higher, the damage increases by 1d12 for each slot level above 0."
        },
        {
            name: "Prestidigitation",
            level: 0,
            school: "Transmutation",
            casting_time: "1 action",
            range: "10 feet",
            components: "V, S",
            duration: "1 minute",
            description: "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:",
            higher_level: "When you cast this spell using a spell slot of 1st level or higher, you can create one additional effect for each slot level above 0."
        },
        {
            name: "Ray of Frost",
            level: 0,
            school: "Evocation",
            casting_time: "1 action",
            range: "60 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 cold damage, and it must succeed on a Constitution saving throw or have its speed halved until the start of your next turn.",
            higher_level: "When you cast this spell using a spell slot of 1st level or higher, the damage increases by 1d8 for each slot level above 0."
        },
        {
            name: "Shocking Grasp",
            level: 0,
            school: "Evocation",
            casting_time: "1 action",
            range: "Touch",
            components: "V, S",
            duration: "Instantaneous",
            description: "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.",
            higher_level: "When you cast this spell using a spell slot of 1st level or higher, the damage increases by 1d8 for each slot level above 0."
        },
        {
            name: "True Strike",
            level: 0,
            school: "Divination",
            casting_time: "1 action",
            range: "30 feet",
            components: "V, S",
            duration: "1 round",
            description: "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.",
            higher_level: "When you cast this spell using a spell slot of 1st level or higher, you can target one additional creature for each slot level above 0."
        }
    ];
}

