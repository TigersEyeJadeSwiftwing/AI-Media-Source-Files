/*:
 * @target MZ
 * @plugindesc Main Plugin for TJS code.
 * @author Tiger's Eye Jade Swiftwing / David A. Reeves
 *
 * @help TJS.js
 *
 * This plugin has all sorts of stuff applicable to the RPG Maker MZ game
 *     made by TJS.
 *
 * @command Get Cost to Heal
 * @desc Gets the cost of healing, such as at an Inn, etc.
 *
 * @arg Price_Factor
 * @type number
 * @min 1
 * @max 500000
 * @desc Price scaling factor, in percent
 * @default 10
 *
 * @arg Variable
 * @type variable
 * @desc Variable index that stores the calculated cost
 * @default 10
 *
 * @command Clear Chests
 * @desc Clears and resets all random-item treasure chests
 *
 * @command Loot Chest One Item
 * @desc Picks one or more random items from a treasure chest and adds it to the party's inventory
 *
 * @arg ChestIndexMin
 * @type number
 * @min 0
 * @max 31
 * @desc The index of the lowest chest to loot.
 * @default 0
 *
 * @arg ChestIndexMax
 * @type number
 * @min 0
 * @max 31
 * @desc The index of the highest chest to loot.
 * @default 0
 *
 * @arg ChestName
 * @type string
 * @desc The name of the chest.
 *
 * @arg PickCount
 * @type number
 * @min 1
 * @max 100
 * @desc The number of random items to pick.
 * @default 1
 *
 * @arg SilentIfEmpty
 * @type boolean
 * @desc Whether of not to omit an on-screen text box if no items are looted.
 * @default false
 *
 * @command Loot Chest
 * @desc Picks a random-item treasure chest and adds it's contents to the party's inventory
 *
 * @arg ChestIndexMax
 * @type number
 * @min 0
 * @max 31
 * @desc The maximum index of the chest to loot.
 * @default 0
 *
 * @arg ChestName
 * @type string
 * @desc The name of the chest.
 *
 * @arg SilentIfEmpty
 * @type boolean
 * @desc Whether of not to omit an on-screen text box if no items are looted.
 * @default false
 *
 * @arg ChanceMultiplier
 * @type number
 * @min 0
 * @max 10000
 * @desc Multiplies all chances of finding all items, in percent.
 * @default 100
 *
 * @command Stock Chest Items
 * @desc Picks a random-item treasure chest and adds it's contents to the party's inventory
 *
 * @arg ChestIndex
 * @type number
 * @min 0
 * @max 31
 * @desc The index of the chest to stock.
 * @default 0
 *
 * @arg ItemId
 * @type item[]
 * @min 1
 * @max 9999
 * @desc The indicies of the item IDs to stock.
 * @default []
 *
 * @arg ItemCount
 * @type number[]
 * @min 1
 * @max 9999
 * @desc The quantities of the items to be found in the chest.
 * @default []
 *
 * @arg ItemChance
 * @type number[]
 * @min 1
 * @max 100
 * @desc The percent chances of the items to be found in the chest.
 * @default []
 *
 * @arg ItemLevel
 * @type number
 * @min 1
 * @max 20
 * @desc The variable index for the level offset of Leveled Items to include.
 * @default 1
 *
 * @command Stock Chest Weapons
 * @desc Picks a random-item treasure chest and adds it's contents to the party's inventory
 *
 * @arg ChestIndex
 * @type number
 * @min 0
 * @max 31
 * @desc The index of the chest to stock.
 * @default 0
 *
 * @arg ItemId
 * @type weapon[]
 * @min 1
 * @max 9999
 * @desc The indicies of the item IDs to stock.
 * @default []
 *
 * @arg ItemCount
 * @type number[]
 * @min 1
 * @max 9999
 * @desc The quantities of the items to be found in the chest.
 * @default []
 *
 * @arg ItemChance
 * @type number[]
 * @min 1
 * @max 100
 * @desc The percent chances of the items to be found in the chest.
 * @default []
 *
 * @arg ItemLevel
 * @type number
 * @min 1
 * @max 20
 * @desc The variable index for the level offset of Leveled Items to include.
 * @default 1
 *
 * @command Stock Chest Armors
 * @desc Picks a random-item treasure chest and adds it's contents to the party's inventory
 *
 * @arg ChestIndex
 * @type number
 * @min 0
 * @max 31
 * @desc The index of the chest to stock.
 * @default 0
 *
 * @arg ItemId
 * @type armor[]
 * @min 1
 * @max 9999
 * @desc The indicies of the item IDs to stock.
 * @default []
 *
 * @arg ItemCount
 * @type number[]
 * @min 1
 * @max 9999
 * @desc The quantities of the items to be found in the chest.
 * @default []
 *
 * @arg ItemChance
 * @type number[]
 * @min 1
 * @max 100
 * @desc The percent chances of the items to be found in the chest.
 * @default []
 *
 * @arg ItemLevel
 * @type number
 * @min 1
 * @max 20
 * @desc The variable index for the level offset of Leveled Items to include.
 * @default 1
 *
 * @command Stock Chest Cash
 * @desc Fills a chest with a randomized amount of cash (GP).
 *
 * @arg ChestIndex
 * @type number
 * @min 0
 * @max 31
 * @desc The index of the chest to stock.
 * @default 0
 *
 * @arg CashChance
 * @type number
 * @min 0
 * @max 100
 * @desc The percent chances of cash to be found in the chest.
 * @default 100
 *
 * @arg CashMin
 * @type number
 * @min 0
 * @max 1000000000
 * @desc The minimum amount of cash to be found in the chest.
 * @default 0
 *
 * @arg CashMax
 * @type number
 * @min 0
 * @max 1000000000
 * @desc The maximum amount of cash to be found in the chest.
 * @default 0
 *
 * @arg ItemLevel
 * @type number
 * @min 1
 * @max 20
 * @desc The variable index for the level offset of determining how much cash to include.
 * @default 1
 *
 * @command Place Vehicle
 * @desc Teleports a vehicle to a map and location.
 *
 * @arg Vehicle_Name
 * @type string
 * @desc The name of the vehicle.
 * @default ""
 *
 * @arg Vehicle_Type
 * @type string
 * @desc The type of the vehicle.
 * @default ""
 *
 * @arg Map
 * @type number
 * @min 0
 * @max 9999
 * @desc The map ID to place the vehicle at.
 * @default 0
 *
 * @arg X
 * @type number
 * @min 0
 * @max 511
 * @desc The X coordinate to place the vehicle at.
 * @default 0
 *
 * @arg Y
 * @type number
 * @min 0
 * @max 511
 * @desc The Y coordinate to place the vehicle at.
 * @default 0
 *
 * @command Go To Vehicle Interior
 * @desc Leaves the overworld map while driving a vehicle, changing maps to the interior of the vehicle.
 *
 * @command Return To Vehicle
 * @desc Returns to driving a vehicle, shown from an exterior view, typically on an overworld map.
 */

(() => {
var TJS_auto = {};
var TJS_map = {};

/*
const tjs_item_level_names = [
        "Steel",
        "Copper",
        "Bronze",
        "Silver",
        "Gold",

        "Ruby",
        "Sapphire",
        "Emerald",
        "Diamond",
        "Quartz"
    ];
*/
const tjs_item_level_names_20 = [
    "Iron",
    "Steel",
    "Cobalt",
    "Copper",
    "Silver",

    "Gold",
    "Platinum",
    "Granite",
    "Stone",
    "Marble",

    "Glass",
    "Quartz",
    "Amethyst",
    "Obsidian",
    "Topaz",

    "Garnet",
    "Ruby",
    "Sapphire",
    "Emerald",
    "Diamond",
];
const tjs_item_level_names_50 = [
    "Aluminum",
    "Iron",
    "Steel",
    "Bronze",
    "Titanium",

    "Magi-Brass",
    "Holy Oak",
    "Mahogany",
    "Swamp Ash",
    "Yew",

    "Pine",
    "Cobalt",
    "Copper",
    "Silver",
    "Gold",

    "Platinum",
    "Hydrogen",
    "Neon",
    "Halon",
    "Iodine",

    "Mercury",
    "Sulfur",
    "Magi-Clay",
    "Sandstone",
    "Granite",

    "Shale",
    "Stone",
    "Limestone",
    "Jade",
    "Pearl",

    "Marble",
    "Cougar Fur",
    "Raven Beak",
    "Snake Fang",
    "Wolf Blood",

    "Tiger Claw",
    "Glass",
    "Quartz",
    "Amethyst",
    "Obsidian",

    "Topaz",
    "Garnet",
    "Ruby",
    "Sapphire",
    "Emerald",

    "Jet",
    "Diamond",
    "Prism",
    "Rage Spirit",
    "Fury Spirit",
];
const tjs_item_level_names = tjs_item_level_names_50;
const tjs_chapter_names = [
    "Prologue",
    "Acrydia",
    "White Sky",
];
const tjs_level_scaling_factor = 2;
const tjs_chapter_level_caps = [
    Math.round( 5 * tjs_level_scaling_factor ), // 0 - Prologue
    Math.round( 14.5 * tjs_level_scaling_factor ), // 1 - Acrydia
    Math.round( 24 * tjs_level_scaling_factor ), // 2
    Math.round( 33.5 * tjs_level_scaling_factor ), // 3
    Math.round( 43 * tjs_level_scaling_factor ), // 4
    Math.round( 52.5 * tjs_level_scaling_factor ), // 5
    Math.round( 62 * tjs_level_scaling_factor ), // 6
    Math.round( 71.5 * tjs_level_scaling_factor ), // 7
    Math.round( 81 * tjs_level_scaling_factor ), // 8
    Math.round( 90.5 * tjs_level_scaling_factor ), // 9
    Math.round( 100 * tjs_level_scaling_factor ), // 10
];
const tjs_max_item_levels = tjs_item_level_names.length;
const tjs_item_parameter_effect_skew = -0.625;
const tjs_item_trait_element_rate_skew = 0.500;
const tjs_item_trait_debuff_rate_skew = 0.500;
const tjs_item_trait_state_rate_skew = 0;
const tjs_item_trait_param_rate_skew = 0;
const tjs_item_trait_general_skew = 0;
const tjs_number_of_random_chests = 32;
const tjs_variable_game_chapter = 21;
const tjs_variable_max_game_chapter = 22;
const tjs_max_chapters = 10;
const tjs_max_character_level = Math.round( 100 * tjs_level_scaling_factor );
const tjs_max_monster_level = Math.round( 100 * tjs_level_scaling_factor );
const tjs_max_enemies_per_battle = 26;
const tjs_monsters_per_exp_level = 250;
const tjs_enemy_gold_multiplier = 325.0;
const tjs_max_party_size = 32;
const tjs_max_battlemember_size = 32;
const tjs_combat_variance_physical_attack = 0.32500;
const tjs_combat_variance_magical_attack = 0.32500;
const tjs_combat_variance_physical_defense = 0.25000;
const tjs_combat_variance_magical_defense = 0.25000;

const tjs_master_damage_adjust = 0.08000;
const tjs_master_hp_adjust = 0.08000;

const tjs_max_hp_multiplier = 160.0;
const tjs_max_stat_multiplier = 50.00;
const tjs_enemy_hp_adjust = 0.67250;
const tjs_enemy_mp_adjust = 1.00000;
const tjs_enemy_strength_adjust = 2.82500;
const tjs_enemy_defense_adjust = 2.50000;
const tjs_enemy_mana_adjust = 2.82500;
const tjs_enemy_magic_defense_adjust = 2.50000;
const tjs_enemy_agility_adjust = 1.00000;
const tjs_enemy_magic_focus_adjust = 0.6250;
const tjs_enemy_luck_adjust = 1.40000;

const tjs_attack_adjust_static = 0.80000;
const tjs_attack_adjust_physical = 0.72000;
const tjs_attack_adjust_magical = 0.72000;
const tjs_attack_adjust_combo = 0.72000;
const tjs_defense_adjust_static = 1.86250;
const tjs_defense_adjust_physical = 1.86250;
const tjs_defense_adjust_magical = 1.86250;
const tjs_defense_adjust_combo = 1.86250;

const tjs_combat_hp_dampening = 0.81250;  // bad guys attacking good guys
const tjs_combat_hp_dampening_inverse = 0.12500;  // good guys attacking bad guys
const tjs_battle_rewards_variance = 0.32500;
const tjs_max_items = 999;
const tjs_max_items_digits = 3;
const tjs_item_selling_divisor = 2;
const tjs_max_mp_cost_multiplier = 25.00000;
const tjs_max_tp_cost_multiplier = 2.00000;
const tjs_highest_item_priority = 9;

const tjs_multiplier_weapon_break_counts = 1.00000;
const tjs_weaponID_broken_weapon = 1;
const tjs_armorID_broken_backup_weapon = 1;
const tjs_armorID_broken_book = 2;
const tjs_armorID_broken_shield = 3;
const tjs_armorID_broken_belt = 4;
const tjs_armorID_broken_wristband = 5;
const tjs_armorID_broken_glove = 6;
const tjs_armorID_broken_socks = 7;
const tjs_armorID_broken_shoes = 8;
const tjs_armorID_broken_necklace = 9;
const tjs_armorID_broken_bracelet = 10;
const tjs_armorID_broken_earring = 11;
const tjs_armorID_broken_ring = 12;
const tjs_armorID_broken_accessory = 13;
const tjs_state_broken_weapon = 32;
const tjs_state_broken_equipment = 38;

const tjs_max_number_discovered_actors = 101;
const tjs_max_number_discovered_enemies = 1001;

const tjs_skill_DNA_condition_1 = 1951;
const tjs_skill_DNA_condition_2 = 1952;
const tjs_skill_DNA_condition_3 = 1953;
const tjs_skill_class_swordmaster = 1954;
const tjs_skill_class_axemaster = 1955;
const tjs_skill_class_samurai = 1956;
const tjs_skill_class_ninja = 1957;
const tjs_skill_class_rifleman = 1958;
const tjs_skill_class_cleric = 1959;
const tjs_skill_class_mage = 1960;
const tjs_skill_class_wizard = 1961;
const tjs_skill_class_martial_artist = 1962;
const tjs_skill_class_kensei = 1963;

const tjs_string_line_width_face = 180;
const tjs_string_line_width_noFace = 198;

const TJS_SKILL_MESSAGE_CUSTOM = 1;
const TJS_SKILL_MESSAGE_USES = 2;
const TJS_SKILL_MESSAGE_ATTACKS = 3;
const TJS_SKILL_MESSAGE_ATTACKS_WITH = 4;
const TJS_SKILL_MESSAGE_CASTS = 5;

const TJS_PARAM_MAGIC_FOCUS = 8;

const TJS_CUSTOM_XPARAM_PHYSICAL_HIT_BONUS = 10;
const TJS_CUSTOM_XPARAM_MAGICAL_HIT_BONUS = 11;
const TJS_CUSTOM_XPARAM_PHYSICAL_CRITICAL_HIT_RATE = 12;
const TJS_CUSTOM_XPARAM_MAGICAL_CRITICAL_HIT_RATE = 13;
const TJS_CUSTOM_XPARAM_PHYSICAL_CRITICAL_EVADE_RATE = 14;
const TJS_CUSTOM_XPARAM_MAGICAL_CRITICAL_EVADE_RATE = 15;

const TJS_CUSTOM_PARAM_MAX_TACTICAL_POINTS = 0;
const TJS_CUSTOM_PARAM_PHYSICAL_HIT_BONUS = 1;
const TJS_CUSTOM_PARAM_MAGICAL_HIT_BONUS = 2;

const TJS_ENEMY_SKILL_RULE_ENEMY_GRADE = 1;
const TJS_ENEMY_SKILL_RULE_PARTY_LEVEL = 2;
const TJS_ENEMY_SKILL_RULE_TP_LEVEL = 3;

const TJS_GEAR_WEAPON = 1;
const TJS_GEAR_BACKUP_WEAPON = 3;
const TJS_GEAR_BOOK = 4;
const TJS_GEAR_SHIELD = 5;
const TJS_GEAR_BELT = 6;
const TJS_GEAR_WRISTBAND = 7;
const TJS_GEAR_GLOVE = 8;
const TJS_GEAR_SOCKS = 9;
const TJS_GEAR_SHOES = 10;
const TJS_GEAR_NECKLACE = 11;
const TJS_GEAR_BRACELET = 12;
const TJS_GEAR_EARRING = 13;
const TJS_GEAR_RING = 14;
const TJS_GEAR_ACCESSORY = 15;

const TJS_WEAPON_BROKEN = 1;
const TJS_WEAPON_LONGSWORD = 2;
const TJS_WEAPON_GREATSWORD = 3;
const TJS_WEAPON_DUAL_SWORDS = 4;
const TJS_WEAPON_KATANA = 5;
const TJS_WEAPON_DUAL_KATANAS = 6;
const TJS_WEAPON_NINJATO = 7;
const TJS_WEAPON_DUAL_NINJATOS = 8;
const TJS_WEAPON_AXE = 9;
const TJS_WEAPON_BATTLEAXE = 10;
const TJS_WEAPON_DUAL_AXES = 11;
const TJS_WEAPON_RIFLE = 12;
const TJS_WEAPON_GRENADES = 13;
const TJS_WEAPON_SMG = 14;
const TJS_WEAPON_SHOTGUN = 15;
const TJS_WEAPON_STAFF = 16;

const TJS_ARMOR_BROKEN = 1;
const TJS_ARMOR_LIGHT = 2;
const TJS_ARMOR_MEDIUM = 3;
const TJS_ARMOR_HEAVY = 4;
const TJS_ARMOR_SHIELD_LIGHT = 5;
const TJS_ARMOR_SHIELD_MEDIUM = 6;
const TJS_ARMOR_SHIELD_HEAVY = 7;
const TJS_ARMOR_ACCESSORY = 8;
const TJS_ARMOR_BOOK_SWORDMASTER = 9;
const TJS_ARMOR_BOOK_AXEMASTER = 10;
const TJS_ARMOR_BOOK_SAMURAI = 11;
const TJS_ARMOR_BOOK_NINJA = 12;
const TJS_ARMOR_BOOK_MARTIAL_ARTIST = 13;
const TJS_ARMOR_BOOK_RIFLEMAN = 14;
const TJS_ARMOR_BOOK_CLERIC = 15;
const TJS_ARMOR_BOOK_MAGE = 16;
const TJS_ARMOR_BOOK_WIZARD = 17;
const TJS_ARMOR_PISTOL_LIGHT = 18;
const TJS_ARMOR_PISTOL_HEAVY = 19;
const TJS_ARMOR_MINOR_SPELLBOOK = 20;
const TJS_ARMOR_MAGIC_WAND = 21;
const TJS_ARMOR_KAIKEN = 22;
const TJS_ARMOR_WHIP = 23;
const TJS_ARMOR_BOOK_KENSEI = 24;

const TJS_TREASURE_PRIMARY_NONE = 2;
const TJS_TREASURE_PRIMARY_COMMON = 3;
const TJS_TREASURE_PRIMARY_UNCOMMON = 4;
const TJS_TREASURE_PRIMARY_RARE = 5;
const TJS_TREASURE_SECONDARY_COMMON = 6;
const TJS_TREASURE_SECONDARY_UNCOMMON = 7;
const TJS_TREASURE_SECONDARY_RARE = 8;

const TJS_SPECIAL_BLANK = 1;
const TJS_SPECIAL_DEBUG = 2;
const TJS_SPECIAL_NOTE = 3;
const TJS_SPECIAL_BROKEN = 4;
const TJS_SPECIAL_NORMAL = 5;
const TJS_SPECIAL_KEY_ITEM = 6;
const TJS_SPECIAL_ENCHANTED = 8;
const TJS_SPECIAL_FIRE = 10;
const TJS_SPECIAL_ICE = 11;
const TJS_SPECIAL_LIGHTNING = 12;
const TJS_SPECIAL_METAL = 13;
const TJS_SPECIAL_ACID = 14;
const TJS_SPECIAL_WATER = 30;
const TJS_SPECIAL_EARTH = 31;
const TJS_SPECIAL_WIND = 32;
const TJS_SPECIAL_DARKNESS = 35;
const TJS_SPECIAL_IMMORTALITY = 36;
const TJS_SPECIAL_MULTI_ELEMENTAL = 40;
const TJS_SPECIAL_NATURE = 43;
const TJS_SPECIAL_RAINBOW = 47;
const TJS_SPECIAL_HASTED = 50;
const TJS_SPECIAL_WEAPON_RUNE = 55;
const TJS_SPECIAL_ARMOR_RUNE = 56;
const TJS_SPECIAL_BLEEDING = 100;
const TJS_SPECIAL_STUNNING = 110;
const TJS_SPECIAL_ANTIMAGICAL = 120;
const TJS_SPECIAL_WEAPON_REFLEX = 155;
const TJS_SPECIAL_ARMOR_REFLEX = 156;
const TJS_SPECIAL_POWER = 250;
const TJS_SPECIAL_MAGIC_WAND = 300;
const TJS_SPECIAL_HEALING_HP = 1000;
const TJS_SPECIAL_HEALING_MP = 1010;
const TJS_SPECIAL_HEALING_TP = 1020;
const TJS_SPECIAL_HEALING_DEATH = 1100;
const TJS_SPECIAL_HEALING_OTHER = 1200;
const TJS_SPECIAL_CURATIVE_SPECIFIC = 1500;
const TJS_SPECIAL_CURATIVE_OMNI = 1550;
const TJS_SPECIAL_ABILITY_BOOST = 1600;
const TJS_SPECIAL_ABILITY_GROW = 1700;
const TJS_SPECIAL_POWER_UP_GENERIC = 1800;
const TJS_SPECIAL_SPECIAL_PURPOSE = 1900;
const TJS_SPECIAL_FOOD = 1950;
const TJS_SPECIAL_MONSTER_DROP = 2000;
const TJS_SPECIAL_TREASURE = 2500;
const TJS_SPECIAL_ORB = 3000;
const TJS_SPECIAL_ORB_SHARDS = 3100;
const TJS_SPECIAL_CLASS_BOOK = 20000;
const TJS_SPECIAL_RUNE = 22000;
const TJS_SPECIAL_GEAR_MAGICAL_RING_MINOR = 60000;
const TJS_SPECIAL_GEAR_MAGICAL_RING_MAJOR = 60010;
const TJS_SPECIAL_GEAR_MAGICAL_RING_ULTRA = 60020;
const TJS_SPECIAL_GEAR_MAGICAL_RING_LEVELED = 60050;

var tjs_color_tp = "rgba(64, 255, 64, 1)";
var tjs_color_mp = "rgba(96, 96, 255, 1)";
var tjs_color_lvl = "rgba(255, 160, 64, 1)";

var tjs_color_hp_max = "rgba(255, 255, 255, 1)";
var tjs_color_hp_slight = "rgba(255, 255, 127, 1)";
var tjs_color_hp_medium = "rgba(255, 255, 0, 1)";
var tjs_color_hp_medium_low = "rgba(255, 192, 0, 1)";
var tjs_color_hp_low = "rgba(255, 128, 0, 1)";
var tjs_color_hp_very_low = "rgba(255, 64, 0, 1)";
var tjs_color_hp_near_zero = "rgba(255, 0, 0, 1)";
var tjs_color_hp_zero = "rgba(160, 0, 0, 1)";

const tjs_vehicles_boat = [
    {
        name: "generic",
        type: "boat",
        characterName: "Vehicle",
        characterIndex: 7,
        move_speed: 4,
        encounter_percent: 100,
        escape_chance: 100,
        interior_map: -1,
        driver_seat_x: 0,
        driver_seat_y: 0,
        driver_seat_direction: 8,
        startMapId: 2,
        startX: 4,
        startY: 60,
        bgm: { name: "Ship1", pan: 0, pitch: 100, volume: 50 }
    },
    {
        name: "Minnow",
        type: "boat",
        characterName: "Vehicle",
        characterIndex: 0,
        move_speed: 4,
        encounter_percent: 80,
        escape_chance: 100,
        interior_map: -1,
        driver_seat_x: 0,
        driver_seat_y: 0,
        driver_seat_direction: 8,
        startMapId: 2,
        startX: 5,
        startY: 61,
        bgm: { name: "Ship1", pan: 0, pitch: 100, volume: 50 }
    }
];
const tjs_vehicles_ship = [
    {
        name: "generic",
        type: "ship",
        characterName: "Vehicle",
        characterIndex: 1,
        move_speed: 5,
        encounter_percent: 100,
        escape_chance: 100,
        interior_map: -1,
        driver_seat_x: 0,
        driver_seat_y: 0,
        driver_seat_direction: 8,
        startMapId: 0,
        startX: 0,
        startY: 0,
        bgm: { name: "Ship2", pan: 0, pitch: 100, volume: 50 }
    }
];
const tjs_vehicles_skycraft = [
    {
        name: "generic",
        type: "airship",
        characterName: "Vehicle",
        characterIndex: 3,
        move_speed: 5,
        encounter_percent: 100,
        escape_chance: 100,
        interior_map: -1,
        driver_seat_x: 0,
        driver_seat_y: 0,
        driver_seat_direction: 8,
        startMapId: 2,
        startX: 21,
        startY: 68,
        bgm: { name: "Ship3", pan: 0, pitch: 100, volume: 50 }
    },
    {
        name: "Mosquito",
        type: "airship",
        characterName: "SF_Vehicle",
        characterIndex: 3,
        move_speed: 7,
        encounter_percent: 80,
        escape_chance: 400,
        interior_map: 17,
        driver_seat_x: 33,
        driver_seat_y: 11,
        driver_seat_direction: 8,
        startMapId: 2,
        startX: 22,
        startY: 68,
        bgm: { name: "Ship3", pan: 0, pitch: 100, volume: 50 }
    },
    {
        name: "Cloud Wolf",
        type: "airship",
        characterName: "SF_Vehicle",
        characterIndex: 7,
        move_speed: 6,
        encounter_percent: 60,
        escape_chance: 250,
        interior_map: -1,
        driver_seat_x: 0,
        driver_seat_y: 0,
        driver_seat_direction: 8,
        startMapId: 2,
        startX: 23,
        startY: 68,
        bgm: { name: "Ship3", pan: 0, pitch: 100, volume: 50 }
    }
];
const tjs_vehicles_landcraft = [
    {
        name: "generic",
        type: "landcraft",
        characterName: "SF_Vehicle",
        characterIndex: 0,
        move_speed: 4,
        encounter_percent: 80,
        escape_chance: 125,
        interior_map: -1,
        driver_seat_x: 0,
        driver_seat_y: 0,
        driver_seat_direction: 8,
        startMapId: 2,
        startX: 21,
        startY: 71,
        bgm: { name: "tjs/Adventure Tune", pan: 0, pitch: 100, volume: 95 }
    }
];

// Bleck
/**
 * Performs waveshaping distortion on a floating point value, so that the input can be any real number, positive or negative, and the
 * output value is always within -1.0 and 1.0, but exclusive of exact -1.0 and exact 1.0, and instead never quite reaching either cap.
 * The input can also be a zero value, which outputs zero.
 *
 * @return {number} The output value, which is either zero or a floating point value between -1.0 and 1.0.
 */
Number.prototype.Distortion = function() {
    return this / ( Math.abs(this) + 1.00000 );
};
Object.defineProperty(Number.prototype, "Distortion", {
    enumerable: false
});

/**
 * Capitalizes the first letter of each word in a string.  Has a couple of safety catches of sorts for contractions and apostrophes that precede letters, etc.
 *
 * @return {string} The new text, with capitalized words.
 */
String.prototype.Capitalize = function() {
    let text_temp = this.replace(/\b\w/g, function(l){ return l.toUpperCase() });
    text_temp = text_temp.replaceAll( "'S", "'s" );
    text_temp = text_temp.replaceAll( "'T", "'t" );
    return text_temp;
};
Object.defineProperty(String.prototype, "Capitalize", {
    enumerable: false
});

/**
 * Reformats a string with auto-computed word-wrapping.  Note that this removes any existing carriage returns and line breaks in favor of the replacement computed ones.
 *
 * @return {string} The re-formatted text.
 */
Object.defineProperty(String.prototype, "AutoFormat", {
    value: function(number_chars=-1) {
        if ( number_chars == -1 )
            return TJS_auto.ReparseTextAuto( this );
        if ( number_chars == 0 )
            return "\n" + TJS_auto.ReparseTextAuto( this, 41 ) + "\n";

        return TJS_auto.ReparseTextAuto( this, number_chars );
    },
    enumerable: false
});

/**
 * Makes a deep copy of any object.  Doesn't copy functions, just data.
 *
 * @return {object} A deep copy of the input object.
 */
Object.defineProperty(Object.prototype, 'Deep', {
    value: function() { return JSON.parse(JSON.stringify( this )); },
    enumerable: false
});

class tjsChest {
    constructor() {
        this.count = [];
        this.id = [];
        this.chance = [];
        this.count_w = [];
        this.id_w = [];
        this.chance_w = [];
        this.count_a = [];
        this.id_a = [];
        this.chance_a = [];
        this.cash_chance = 0;
        this.cash_min = 0;
        this.cash_max = 0;
        this.cash_level = 0;

        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];
        this.cash = 0;
    }
    Clear() {
        this.count = [];
        this.id = [];
        this.chance = [];
        this.count_w = [];
        this.id_w = [];
        this.chance_w = [];
        this.count_a = [];
        this.id_a = [];
        this.chance_a = [];
        this.cash_chance = 0;
        this.cash_min = 0;
        this.cash_max = 0;
        this.cash_level = 0;

        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];
        this.cash = 0;
    }
    Size() {
        const iCount = Math.min( this.count.length, this.id.length, this.chance.length );
        const wCount = Math.min( this.count_w.length, this.id_w.length, this.chance_w.length );
        const aCount = Math.min( this.count_a.length, this.id_a.length, this.chance_a.length );
        return iCount + wCount + aCount;
    }
    SizeItems() {
        return Math.min( this.count.length, this.id.length, this.chance.length );
    }
    SizeWeapons() {
        return Math.min( this.count_w.length, this.id_w.length, this.chance_w.length );
    }
    SizeArmors() {
        return Math.min( this.count_a.length, this.id_a.length, this.chance_a.length );
    }
    LootSize() {
        return Math.min( this.loot_id.length, this.loot_count.length) + Math.min( this.loot_id_w.length, this.loot_count_w.length) + Math.min( this.loot_id_a.length, this.loot_count_a.length );
    }
    LootSizeItems() {
        return Math.min( this.loot_id.length, this.loot_count.length );
    }
    LootSizeWeapons() {
        return Math.min( this.loot_id_w.length, this.loot_count_w.length );
    }
    LootSizeArmors() {
        return Math.min( this.loot_id_a.length, this.loot_count_a.length );
    }
    AddItem(item_count, item_chance, item_id, level=1) {
        const i_count = Number(item_count);
        if ( item_id < 1 ) return;
        if ( item_id >= $dataItems.length ) return;
        const i_id = ( $dataItems[Number(item_id)].has_levels == true ) ? Number(item_id) + level - 1 : Number(item_id);
        var i_chance = Number(item_chance) * 0.01;
        if (i_count < 1) return;
        if (i_id < 1) return;
        if (i_chance < 0.01) i_chance = 0.01;
        if (i_chance > 1.00) i_chance = 1.00;

        this.count.push( i_count );
        this.id.push( i_id );
        this.chance.push( i_chance );
    }
    AddWeapon(item_count, item_chance, item_id, level=1) {
        const i_count = Number(item_count);
        if ( item_id < 1 ) return;
        if ( item_id >= $dataWeapons.length ) return;
        const i_id = ( $dataWeapons[Number(item_id)].has_levels == true ) ? Number(item_id) + level - 1 : Number(item_id);
        var i_chance = Number(item_chance) * 0.01;
        if (i_count < 1) return;
        if (i_id < 1) return;
        if (i_chance < 0.01) i_chance = 0.01;
        if (i_chance > 1.00) i_chance = 1.00;

        this.count_w.push( i_count );
        this.id_w.push( i_id );
        this.chance_w.push( i_chance );
    }
    AddArmor(item_count, item_chance, item_id, level=1) {
        const i_count = Number(item_count);
        if ( item_id < 1 ) return;
        if ( item_id >= $dataArmors.length ) return;
        const i_id = ( $dataArmors[Number(item_id)].has_levels == true ) ? Number(item_id) + level - 1 : Number(item_id);
        const i_id_add = ( $dataArmors[Number(item_id)].equip_type == TJS_auto.GetIndexForEquipmentType( "ring" ) )
            ? Math.round(2.0 * (level - 1) / (tjs_max_item_levels))
            : 0;
        var i_chance = Number(item_chance) * 0.01;
        if (i_count < 1) return;
        if (i_id < 1) return;
        if (i_chance < 0.01) i_chance = 0.01;
        if (i_chance > 1.00) i_chance = 1.00;

        this.count_a.push( i_count );
        this.id_a.push( i_id + i_id_add );
        this.chance_a.push( i_chance );
    }
    AddCash(c_chance, c_min, c_max, c_level=1) {
        this.cash_chance = (c_chance * 0.01).clamp( 0, 1 );
        this.cash_min = Math.max( c_min, 0 );
        this.cash_max = Math.max( c_max, 0 );
        this.cash_level = c_level.clamp( 1, tjs_max_item_levels );
    }
    Loot(chance_multiplier=100) {
        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];
        this.cash = 0;

        // Cash
        if ( Math.random() < this.cash_chance ) {
            const cash_base = TJS_auto.Lerp( this.cash_min, this.cash_max, Math.random() );

            this.cash = Math.round(TJS_auto.CalcLevelByChapterPrice( cash_base, this.cash_level ));
        }

        if ( this.Size() < 0 ) return;

        // Items
        for (let i = 0; i < this.SizeItems(); i++)
        {
            const itm_id = this.id[i];
            const itm_count = this.count[i];

            if ( (Math.random() * 0.999) < (this.chance[i] * chance_multiplier) ) {
                var mtch = -4;
                for (let m = 0; m < this.loot_id.length; m++) {
                    if ( this.loot_id[m] == itm_id ) mtch = m;
                }

                if ( mtch > -1 ) {
                    this.loot_count[mtch] += itm_count;
                } else {
                    this.loot_id.push( itm_id );
                    this.loot_count.push( itm_count );
                }
            }
        }

        // Weapons
        for (let i = 0; i < this.SizeWeapons(); i++)
        {
            const itm_id = this.id_w[i];
            const itm_count = this.count_w[i];

            if ( (Math.random() * 0.999) < (this.chance_w[i] * chance_multiplier) ) {
                var mtch = -4;
                for (let m = 0; m < this.loot_id_w.length; m++) {
                    if ( this.loot_id_w[m] == itm_id ) mtch = m;
                }

                if ( mtch > -1 ) {
                    this.loot_count_w[mtch] += itm_count;
                } else {
                    this.loot_id_w.push( itm_id );
                    this.loot_count_w.push( itm_count );
                }
            }
        }

        // Armors
        for (let i = 0; i < this.SizeArmors(); i++)
        {
            const itm_id = this.id_a[i];
            const itm_count = this.count_a[i];

            if ( (Math.random() * 0.999) < (this.chance_a[i] * chance_multiplier) ) {
                var mtch = -4;
                for (let m = 0; m < this.loot_id_a.length; m++) {
                    if ( this.loot_id_a[m] == itm_id ) mtch = m;
                }

                if ( mtch > -1 ) {
                    this.loot_count_a[mtch] += itm_count;
                } else {
                    this.loot_id_a.push( itm_id );
                    this.loot_count_a.push( itm_count );
                }
            }
        }
    }
    Loot_OneRandomItem() {
        if ( this.Size() < 0 ) return;

        const pick = Math.random() * this.Size();

        if ( pick < this.SizeItems() ) {
            const pick_item = Math.round( Math.random() * (this.SizeItems() - 1) );
            if ( this.id[pick_item] < 1 ) return;

            if ( this.loot_id.includes( this.id[pick_item] ) == true ) {
                const index = this.loot_id.indexOf( this.id[pick_item] );
                this.loot_count[index]++;
            }
            else {
                this.loot_id.push( this.id[pick_item] );
                this.loot_count.push( 1 );
            }
        }
        else if ( (pick >= this.SizeItems()) && (pick < (this.SizeItems() + this.SizeWeapons())) ) {
            const pick_weapon = Math.round( Math.random() * (this.SizeWeapons() - 1) );
            if ( this.id_w[pick_weapon] < 1 ) return;

            if ( this.loot_id_w.includes( this.id_w[pick_weapon] ) == true ) {
                const index = this.loot_id_w.indexOf( this.id_w[pick_weapon] );
                this.loot_count_w[index]++;
            }
            else {
                this.loot_id_w.push( this.id_w[pick_weapon] );
                this.loot_count_w.push( 1 );
            }
        }
        else {
            const pick_armor = Math.round( Math.random() * (this.SizeArmors() - 1) );
            if ( this.id_a[pick_armor] < 1 ) return;

            if ( this.loot_id_a.includes( this.id_a[pick_armor] ) == true ) {
                const index = this.loot_id_a.indexOf( this.id_a[pick_armor] );
                this.loot_count_a[index]++;
            }
            else {
                this.loot_id_a.push( this.id_a[pick_armor] );
                this.loot_count_a.push( 1 );
            }
        }
    }
    Empty() {
        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];
        this.cash = 0;
    }
    CopyLootFromOther(other) {
        if ( !other ) return;

        for ( const i of other.loot_id ) {
            if ( this.loot_id.includes(other.loot_id) == true ) {
                const index = this.loot_id.indexOf(other.loot_id);

                this.loot_count[index]++;
            }
            else {
                this.loot_id.push( i );
                this.loot_count.push( 1 );
            }
        }
        for ( const i of other.loot_id_w ) {
            if ( this.loot_id_w.includes(other.loot_id_w) == true ) {
                const index = this.loot_id_w.indexOf(other.loot_id_w);

                this.loot_count_w[index]++;
            }
            else {
                this.loot_id_w.push( i );
                this.loot_count_w.push( 1 );
            }
        }
        for ( const i of other.loot_id_a ) {
            if ( this.loot_id_a.includes(other.loot_id_a) == true ) {
                const index = this.loot_id_a.indexOf(other.loot_id_a);

                this.loot_count_a[index]++;
            }
            else {
                this.loot_id_a.push( i );
                this.loot_count_a.push( 1 );
            }
        }

        this.cash += other.cash;

        /*
        for ( const i of other.loot_id ) this.loot_id.push( i );
        for ( const i of other.loot_count ) this.loot_count.push( i );

        for ( const i of other.loot_id_w ) this.loot_id_w.push( i );
        for ( const i of other.loot_count_w ) this.loot_count_w.push( i );

        for ( const i of other.loot_id_a ) this.loot_id_a.push( i );
        for ( const i of other.loot_count_a ) this.loot_count_a.push( i );
        */
    }
};

var tjs_Chest = [];
var tjs_TotalChest = new tjsChest();
for (let i = 0; i < tjs_number_of_random_chests; i++) {
    tjs_Chest.push( new tjsChest() );
    tjs_Chest[i].Clear();
}
tjs_TotalChest.Clear();

var TJS_GS = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    TJS_GS.call(this);

    this.average_actor_level = 1;
    this.soft_level_cap = 12;
    this.min_enemy_level = 1;
    this.max_enemy_level = 5;
    this.enemy_level_offset = 0;
    // this.highest_enemy_category = 1;
    this.encounter_exp_limit = [725];
    this.treasure_chest_level = 1;
	this.max_random_enemies = [1];
	this.enemy_grade = 0;
	this.sky_region = -1;

	this.vehicle_data = {};
	this.vehicle_data.name = "";
	this.vehicle_data.x = 0;
	this.vehicle_data.y = 0;
	this.vehicle_data.map_id = 0;
	this.vehicle_data.vehicle_id = 0;
	this.vehicle_data.direction = 0;
	this.vehicle_data.party_leader_index = 0;
	this.vehicle_data.encounter_possible = false;

	this.vehicle_interior = {};
	this.vehicle_interior.x = 0;
	this.vehicle_interior.y = 0;
	this.vehicle_interior.map_id = 0;
	this.vehicle_interior.direction = 0;

	this.inside_vehicle = false;

    this.actorDiscovered = [];
    this.enemyDiscovered = [];

    this.time_started = {};
    this.CheckGameStartDateTime();

    this.cheats_enabled = false;
};
Game_System.prototype.FixMissingData = function() {
    if ( !this.average_actor_level ) this.average_actor_level = 1;
    if ( !this.soft_level_cap ) this.soft_level_cap = 12;
    if ( !this.min_enemy_level ) this.min_enemy_level = 1;
    if ( !this.max_enemy_level ) this.max_enemy_level = 5;
    if ( !this.enemy_level_offset ) this.enemy_level_offset = 0;
    if ( !this.encounter_exp_limit ) this.encounter_exp_limit = [725];
    if ( !this.treasure_chest_level ) this.treasure_chest_level = 1;
	if ( !this.max_random_enemies ) this.max_random_enemies = [1];
	if ( !this.enemy_grade ) this.enemy_grade = 0;
	if ( !this.sky_region ) this.sky_region = -1;

	if ( !this.vehicle_data ) {
        this.vehicle_data = {};
        this.vehicle_data.name = "";
        this.vehicle_data.x = 0;
        this.vehicle_data.y = 0;
        this.vehicle_data.map_id = 0;
        this.vehicle_data.vehicle_id = 0;
        this.vehicle_data.direction = 0;
        this.vehicle_data.party_leader_index = 0;
        this.vehicle_data.encounter_possible = false;

        this.vehicle_interior = {};
        this.vehicle_interior.x = 0;
        this.vehicle_interior.y = 0;
        this.vehicle_interior.map_id = 0;
        this.vehicle_interior.direction = 0;
	}

	if ( !this.actorDiscovered || !this.enemyDiscovered ) {
        this.actorDiscovered = [];
        this.enemyDiscovered = [];

        this.InitDiscoveredArrays();
	}

    if ( !this.inside_vehicle ) this.inside_vehicle = false;

    this.CheckGameStartDateTime();

    if ( !this.cheats_enabled ) this.cheats_enabled = false;

    for( var actor of $gameActors._data ) {
        if ( !actor ) continue;

        if ( !actor.state_icons ) actor.state_icons = [];
        if ( !actor.buff_icons ) actor.buff_icons = [];
        if ( !actor.current_state_icons ) actor.current_state_icons = [];
        if ( !actor.current_buff_icons ) actor.current_buff_icons = [];
        if ( !actor.buffered_hp ) actor.buffered_hp = 0;
        if ( !actor.buffered_mp ) actor.buffered_mp = 0;
        if ( !actor.buffered_tp ) actor.buffered_tp = 0;
    }
};
Game_System.prototype.UpdateEncounterGroups = function() {
    if ( $dataMap.encounterList.length < 1 ) return;

    var encounter_groups = [];
    const list = $dataMap.encounterList;

    for ( let i = 0; i < list.length; i++ ) {
        if ( !list[i] ) {
            var item = {};
            item.troopId = 1;
            item.weight = 0;
            item.regionSet = [ 1, 1, 1 ];

            encounter_groups.push( item );

            continue;
        }

        var item = {};
        item.troopId = Number( list[i].troopId );
        item.weight = Number( list[i].weight );
        item.regionSet = [];

        if ( list[i].regionSet.length < 1 ) {
            item.regionSet = [ 1, 1, 1 ];
        }
        else if ( list[i].regionSet.length == 1 ) {
            item.regionSet = [ Number(list[i].regionSet[0]), 1, 1 ];
        }
        else if ( list[i].regionSet.length == 2 ) {
            item.regionSet = [ Number(list[i].regionSet[0]), Number(list[i].regionSet[1]), 1 ];
        }
        else if ( list[i].regionSet.length == 3 ) {
            item.regionSet = [ Number(list[i].regionSet[0]), Number(list[i].regionSet[1]), Number(list[i].regionSet[2]) ];
        }

        encounter_groups.push( item );
    }

    encounter_groups.sort( (a, b) => a.regionSet[1] - b.regionSet[1] );
    var accum = 1;
    var group_id = Number( encounter_groups[0].regionSet[1] );

    for ( let i = 0; i < encounter_groups.length; i++ ) {
        if ( group_id != encounter_groups[i].regionSet[1] ) {
            accum++;
            group_id = Number( encounter_groups[i].regionSet[1] );
        }

        encounter_groups[i].regionSet[1] = Number( accum );
    }

    $dataMap.encounterList = encounter_groups.Deep();
};
Game_System.prototype.CheckGameStartDateTime = function() {
    if ( this.time_started ) {
        if ( (this.time_started.date) && (this.time_started.time) )
            return;
    }

    this.time_started = TJS_auto.GetCurrentDateTimeStringObject();
};
Game_System.prototype.InitDiscoveredArrays = function() {
    this.actorDiscovered = [];
    for ( let i = 0; i < $dataActors.length; i++ )
        this.actorDiscovered.push( false );

    this.enemyDiscovered = [];
    for ( let i = 0; i < $dataEnemies.length; i++ )
        this.enemyDiscovered.push( false );
};
Game_System.prototype.UpdateDiscoveredArrays = function() { // Blenn
    const actors_to_add = $dataActors.length - this.actorDiscovered.length;
    const enemies_to_add = $dataEnemies.length - this.enemyDiscovered.length;

    for ( let i = 0; i < actors_to_add; i++ )
        this.actorDiscovered.push( false );

    for ( let i = 0; i < enemies_to_add; i++ )
        this.enemyDiscovered.push( false );
};
Game_System.prototype.playtimeText = function() {
    const sec = Math.floor(this.playtime() % 60);
    const min = Math.floor(this.playtime() / 60) % 60;
    const hour = Math.floor(this.playtime() / (60 * 60)) % 24;
    const day = Math.min( Math.floor(this.playtime() / (60 * 60 * 24)), 999 );
    // return day.padZero(4) + ":" + hour.padZero(2) + ":" + min.padZero(2) + ":" + sec.padZero(2);
    return day.padZero(3) + "d " + hour.padZero(2) + ":" + min.padZero(2) + ":" + sec.padZero(2);
};
Game_System.prototype.windowPadding = function() {
    return 10;
};
Game_System.prototype.ToggleCheats = function() {
    this.cheats_enabled = !this.cheats_enabled;
};

///-----------------------------------------------------------------------------
/// Game_BattlerBase
///
/// The superclass of Game_Battler. It mainly contains parameters calculation.
Object.defineProperties(Game_BattlerBase.prototype, {
    // Combined Defense of regular Defense and Magical Defense
    cdef: {
        get: function() {
            return (this.param(3) + this.param(5)) * 0.5;
        },
        configurable: true
    },
    // Combined Attack of regular Attack and Magical Attack
    catk: {
        get: function() {
            return (this.param(2) + this.param(4)) * 0.5;
        },
        configurable: true
    },
    // ATtacK power
    patk: {
        get: function() {
            return this.param(2);
        },
        configurable: true
    },
    // DEFense power
    pdef: {
        get: function() {
            return this.param(3);
        },
        configurable: true
    },
    // Magic ATtack power
    matk: {
        get: function() {
            return this.param(4);
        },
        configurable: true
    },
    // Magic DeFense power
    mdef: {
        get: function() {
            return this.param(5);
        },
        configurable: true
    },
    // Physical Attack Variance
    patkv: {
        get: function() {
            return (1.0 - tjs_combat_variance_physical_attack) + (Math.random() * 2.0 * tjs_combat_variance_physical_attack);
        },
        configurable: true
    },
    // Physical Attack Variance
    matkv: {
        get: function() {
            return (1.0 - tjs_combat_variance_magical_attack) + (Math.random() * 2.0 * tjs_combat_variance_magical_attack);
        },
        configurable: true
    },
    // Physical Defense Variance
    pdefv: {
        get: function() {
            return (1.0 - tjs_combat_variance_physical_defense) + (Math.random() * 2.0 * tjs_combat_variance_physical_defense);
        },
        configurable: true
    },
    // Magical Defense Variance
    mdefv: {
        get: function() {
            return (1.0 - tjs_combat_variance_magical_defense) + (Math.random() * 2.0 * tjs_combat_variance_magical_defense);
        },
        configurable: true
    },
    // Static Physical Damage Attack, with variance
    sa1: {
        get: function() {
            return 1.00000 * ((1.0 - tjs_combat_variance_physical_attack) + (Math.random() * 2.00000 * tjs_combat_variance_physical_attack));
        },
        configurable: true
    },
    // Physical Attack, with variance
    pa1: {
        get: function() {
            return this.param(2) * ((1.0 - tjs_combat_variance_physical_attack) + (Math.random() * 2.00000 * tjs_combat_variance_physical_attack));
        },
        configurable: true
    },
    // Magical Attack, with variance
    ma1: {
        get: function() {
            return this.param(4) * ((1.0 - tjs_combat_variance_magical_attack) + (Math.random() * 2.00000 * tjs_combat_variance_magical_attack));
        },
        configurable: true
    },
    // Combined Attack, with variance
    ca1: {
        get: function() {
            var p = this.param(2) * ((1.0 - tjs_combat_variance_physical_attack) + (Math.random() * 2.00000 * tjs_combat_variance_physical_attack));
            var m = this.param(4) * ((1.0 - tjs_combat_variance_magical_attack) + (Math.random() * 2.00000 * tjs_combat_variance_magical_attack));
            return (p + m) * 0.50000;
        },
        configurable: true
    },
    // Physical Defense, with variance
    pd1: {
        get: function() {
            return this.param(3) * ((1.0 - tjs_combat_variance_physical_defense) + (Math.random() * 2.0 * tjs_combat_variance_physical_defense));
        },
        configurable: true
    },
    // Magical Defense, with variance
    md1: {
        get: function() {
            return this.param(5) * ((1.0 - tjs_combat_variance_magical_defense) + (Math.random() * 2.0 * tjs_combat_variance_magical_defense));
        },
        configurable: true
    },
    // Combined Defense, with variance
    cd1: {
        get: function() {
            var p = this.param(3) * ((1.0 - tjs_combat_variance_physical_defense) + (Math.random() * 2.0 * tjs_combat_variance_physical_defense));
            var m = this.param(5) * ((1.0 - tjs_combat_variance_magical_defense) + (Math.random() * 2.0 * tjs_combat_variance_magical_defense));
            return (p + m) * 0.5;
        },
        configurable: true
    },
    // Hit point percentage damage dampening factor, less end-result with fewer HP
    dmpn: {
        get: function() {
            var pct = this._hp / this.param(0);
            pct = Math.pow(pct, 2.00000);
            pct = 1.00000 - pct;
            pct *= tjs_combat_hp_dampening;
            pct = 1.00000 - pct;
            return pct;
        },
        configurable: true
    },
    // Hit point percentage damage dampening factor, inverted, less end-result with higher and max HP
    dmpi: {
        get: function() {
            var pct = this._hp / this.param(0);
            // pct = 1.00000 - pct;
            // pct = Math.pow(pct, 2.00000);
            // pct = 1.00000 - pct;
            pct *= tjs_combat_hp_dampening_inverse;
            pct = 1.00000 - pct;
            return pct;
        },
        configurable: true
    },
    // Hit point percentage damage dampening factor, inverted, less end-result with higher and max HP
    dp: {
        get: function() {
            return this.GetDp();
        },
        configurable: true
    },
    eq0: {
        get: function() {
            return this.e0(800);
        },
        configurable: true
    },
    eq2: {
        get: function() {
            return this.e2(800);
        },
        configurable: true
    },
    eq3: {
        get: function() {
            return this.e3(800);
        },
        configurable: true
    },
    // Normalized Level
    nrmLvl: {
        get: function() {
            return this.GetNormalizedLevel();
        },
        configurable: true
    },
    hit_rate_physical: {
        get: function() {
            return this.GetAtr_HitRatePhysical();
        },
        configurable: true
    },
    hit_rate_magical: {
        get: function() {
            return this.GetAtr_HitRateMagical();
        },
        configurable: true
    },
    // Hit Points
    health_points: {
        get: function() {
            return this._hp;
        },
        configurable: true
    },
    // Magic Points
    magic_points: {
        get: function() {
            return this._mp;
        },
        configurable: true
    },
    // Tactical Points
    tactical_points: {
        get: function() {
            return this._tp;
        },
        configurable: true
    },
    // Maximum Tactical Points
    max_tp: {
        get: function() {
            return this.GetAtr_MaxTacticalPoints();
        },
        configurable: true
    },
    // Maximum Tactical Points
    max_tactical_points: {
        get: function() {
            return this.GetAtr_MaxTacticalPoints();
        },
        configurable: true
    },
    // Maximum Hit Points
    max_health_points: {
        get: function() {
            return this.param(0);
        },
        configurable: true
    },
    // Original Maximum Hit Points
    orig_mhp: {
        get: function() {
            return this.MaximumOriginalHp();
        },
        configurable: true
    },
    // Maximum Magic Points
    max_magic_points: {
        get: function() {
            return this.param(1);
        },
        configurable: true
    },
    // ATtacK power
    attack: {
        get: function() {
            return this.param(2);
        },
        configurable: true
    },
    // ATtacK power
    strength: {
        get: function() {
            return this.param(2);
        },
        configurable: true
    },
    // DEFense power
    defense: {
        get: function() {
            return this.param(3);
        },
        configurable: true
    },
    // Magic ATtack power
    magic_strength: {
        get: function() {
            return this.param(4);
        },
        configurable: true
    },
    // Magic DeFense power
    magic_defense: {
        get: function() {
            return this.param(5);
        },
        configurable: true
    },
    // AGIlity
    agility: {
        get: function() {
            return this.param(6);
        },
        configurable: true
    },
    // LUcK
    luck: {
        get: function() {
            return this.param(7);
        },
        configurable: true
    },
    // Magic Focus
    magic_focus: {
        get: function() {
            return this.GetAtr_MagicFocus();
        },
        configurable: true
    },
    physical_critical_hit_rate: {
        get: function() {
            return this.GetAtr_PhysicalCriticalHitRate();
        },
        configurable: true
    },
    magical_critical_hit_rate: {
        get: function() {
            return this.GetAtr_MagicalCriticalHitRate();
        },
        configurable: true
    },
    physical_critical_evade_rate: {
        get: function() {
            return this.GetAtr_PhysicalCriticalEvadeRate();
        },
        configurable: true
    },
    magical_critical_evade_rate: {
        get: function() {
            return this.GetAtr_MagicalCriticalEvadeRate();
        },
        configurable: true
    }
    /*
    // HIT rate
    hit: {
        get: function() {
            return this.xparam(0);
        },
        configurable: true
    },
    // EVAsion rate
    eva: {
        get: function() {
            return this.xparam(1);
        },
        configurable: true
    },
    // CRItical rate
    cri: {
        get: function() {
            return this.xparam(2);
        },
        configurable: true
    },
    // Critical EVasion rate
    cev: {
        get: function() {
            return this.xparam(3);
        },
        configurable: true
    },
    // Magic EVasion rate
    mev: {
        get: function() {
            return this.xparam(4);
        },
        configurable: true
    },
    // Magic ReFlection rate
    mrf: {
        get: function() {
            return this.xparam(5);
        },
        configurable: true
    },
    // CouNTer attack rate
    cnt: {
        get: function() {
            return this.xparam(6);
        },
        configurable: true
    },
    // Hp ReGeneration rate
    hrg: {
        get: function() {
            return this.xparam(7);
        },
        configurable: true
    },
    // Mp ReGeneration rate
    mrg: {
        get: function() {
            return this.xparam(8);
        },
        configurable: true
    },
    // Tp ReGeneration rate
    trg: {
        get: function() {
            return this.xparam(9);
        },
        configurable: true
    },
    // TarGet Rate
    tgr: {
        get: function() {
            return this.sparam(0);
        },
        configurable: true
    },
    // GuaRD effect rate
    grd: {
        get: function() {
            return this.sparam(1);
        },
        configurable: true
    },
    // RECovery effect rate
    rec: {
        get: function() {
            return this.sparam(2);
        },
        configurable: true
    },
    // PHArmacology
    pha: {
        get: function() {
            return this.sparam(3);
        },
        configurable: true
    },
    // Mp Cost Rate
    mcr: {
        get: function() {
            return this.sparam(4);
        },
        configurable: true
    },
    // Tp Charge Rate
    tcr: {
        get: function() {
            return this.sparam(5);
        },
        configurable: true
    },
    // Physical Damage Rate
    pdr: {
        get: function() {
            return this.sparam(6);
        },
        configurable: true
    },
    // Magic Damage Rate
    mdr: {
        get: function() {
            return this.sparam(7);
        },
        configurable: true
    },
    // Floor Damage Rate
    fdr: {
        get: function() {
            return this.sparam(8);
        },
        configurable: true
    },
    // EXperience Rate
    exr: {
        get: function() {
            return this.sparam(9);
        },
        configurable: true
    }
    */
});
Game_BattlerBase.prototype.initialize = function() {
    this.initMembers();
};
Game_BattlerBase.prototype.initMembers = function() {
    this._hp = 1;
    this._mp = 0;
    this._tp = 0;
    this._hidden = false;
    this.clearParamPlus();
    this.clearStates();
    this.clearBuffs();

    // Currently active skill ID
    this._active_skill_id = 0;
    // Buffs and Debuffs
    this._buffAmounts1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._buffAmounts2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._debuffAmounts1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._debuffAmounts2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // Custom parameters and ability scores
    this._targetedRateMod = 1.00000;
    this._tacticalPointsMod = 1.00000;
    this._magicFocusMod = 0;

    this.state_icons = [];
    this.buff_icons = [];
    this.current_state_icons = [];
    this.current_buff_icons = [];
    this.buffered_hp = 0;
    this.buffered_tp = 0;
    this.buffered_mp = 0;
};
Game_BattlerBase.prototype.MaximumOriginalHp = function() {
    return this.param(0) / tjs_master_hp_adjust;
};
Game_BattlerBase.prototype.attackStates = function() {
    const state_ids = this.traitsSet(Game_BattlerBase.TRAIT_ATTACK_STATE);
    var result = [];

    for ( const state_id of state_ids ) {
        if ( result.includes( state_id ) == false )
            result.push( state_id );
    }

    return result;
};
Game_BattlerBase.prototype.attackStatesRate = function(stateId) {
    // return this.traitsSum(Game_BattlerBase.TRAIT_ATTACK_STATE, stateId);

    const traits = this.traitsWithId( Game_BattlerBase.TRAIT_ATTACK_STATE, stateId );
    if ( traits.length < 1 ) return 0;

    var chance = 1.00000;
    for ( const trait of traits ) chance *= 1.00000 - trait.value;

    return (1.00000 - chance).clamp( 0.00, 1.00 );
};
Game_BattlerBase.prototype.GetTpBase = function() {
    return 1.00000;
};
Game_BattlerBase.prototype.CalculateTpModifier = function() {
    this._tacticalPointsMod = 1.00000;
};
Game_BattlerBase.prototype.recoverAll = function() {
    this.clearStates();
    this._hp = this.mhp;
    this._mp = this.mmp;
    this._tp = this.maxTp();
};
Game_BattlerBase.prototype.SetTargetRateMod = function(rate) {
    this._targetedRateMod = rate;
};
Game_BattlerBase.prototype.SetMagicFocusMod = function(amount) {
    this._magicFocusMod = amount.clamp( 1, 5000 );
};
Game_BattlerBase.prototype.IncreaseMagicFocusMod = function(amount) {
    this._magicFocusMod = (this._magicFocusMod + amount).clamp( 1, 5000 );
};
Game_BattlerBase.prototype.debuffRate = function(paramId) {
    if ( paramId == 8 ) return this.GetAtr_MagicFocusDebuffRate();

    return this.traitsPi(Game_BattlerBase.TRAIT_DEBUFF_RATE, paramId);
};
Game_BattlerBase.prototype.GetAtr_MaxTacticalPoints = function() {
    return 100;
};
Game_BattlerBase.prototype.GetAtr_HitRatePhysical = function() {
    return 0;
};
Game_BattlerBase.prototype.GetAtr_HitRateMagical = function() {
    return 0;
};
Game_BattlerBase.prototype.GetAtr_MagicFocus = function() {
    return 1;
};
Game_BattlerBase.prototype.GetAtr_PhysicalCriticalHitRate = function() {
    return 0;
};
Game_BattlerBase.prototype.GetAtr_MagicalCriticalHitRate = function() {
    return 0;
};
Game_BattlerBase.prototype.GetAtr_PhysicalCriticalEvadeRate = function() {
    return 0;
};
Game_BattlerBase.prototype.GetAtr_MagicalCriticalEvadeRate = function() {
    return 0;
};
Game_BattlerBase.prototype.GetAtr_MagicFocusDebuffRate = function() {
    return 1;
};
Game_BattlerBase.prototype.sparam = function(sparamId) {
    if ( sparamId == 0 ) {
        return this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId) * this._targetedRateMod;
    }

    return this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);
};
Game_BattlerBase.prototype.buffIconIndex = function(buffLevel, paramId) {
    if ( paramId == TJS_PARAM_MAGIC_FOCUS ) {
        if ( buffLevel == 1 ) return 252;
        else if ( buffLevel == 2 ) return 253;
        else if ( buffLevel == -1 ) return 254;
        else if ( buffLevel == -2 ) return 255;
        else return 0;
    }

    if (buffLevel > 0) {
        return Game_BattlerBase.ICON_BUFF_START + (buffLevel - 1) * 8 + paramId;
    } else if (buffLevel < 0) {
        return (
            Game_BattlerBase.ICON_DEBUFF_START + (-buffLevel - 1) * 8 + paramId
        );
    } else {
        return 0;
    }
};
Game_BattlerBase.prototype.stateIcons = function() {
    this.state_icons = this.states()
        .map(state => state.iconIndex)
        .filter(iconIndex => iconIndex > 0);

    if ( this.state_icons.includes( $dataStates[1].iconIndex ) ) {
        if ( !(this.current_state_icons.includes( $dataStates[1].iconIndex )) )
            this.current_state_icons.push( $dataStates[1].iconIndex );
    }

    if ( $gameParty.inBattle() )
        return this.current_state_icons;
    else
        return this.state_icons;
};
Game_BattlerBase.prototype.buffIcons = function() {
    this.buff_icons = [];
    for (let i = 0; i < this._buffs.length; i++) {
        if (this._buffs[i] !== 0) {
            this.buff_icons.push(this.buffIconIndex(this._buffs[i], i));
        }
    }

    if ( $gameParty.inBattle() )
        return this.current_buff_icons;
    else
        return this.buff_icons;
};
Game_BattlerBase.prototype.ClearBufferedData = function() {
    this.stateIcons();
    this.buffIcons();
    this.current_state_icons = TJS_auto.DeepCopy( this.state_icons );
    this.current_buff_icons = TJS_auto.DeepCopy( this.buff_icons );

    this.buffered_hp = 0;
    this.buffered_mp = 0;
    this.buffered_tp = 0;
};
Game_BattlerBase.prototype.ApplyBufferedData = function() {
    this.current_state_icons = TJS_auto.DeepCopy( this.state_icons );
    this.current_buff_icons = TJS_auto.DeepCopy( this.buff_icons );

    this._hp = (this._hp + this.buffered_hp).clamp( 0, this.mhp );
    this._mp = (this._mp + this.buffered_mp).clamp( 0, this.mmp );
    this._tp = (this._tp + this.buffered_tp).clamp( 0, this.maxTp() );

    this.buffered_hp = 0;
    this.buffered_mp = 0;
    this.buffered_tp = 0;

    this.refresh();
};
Game_BattlerBase.prototype.GetBuffAmount = function() {
    return TJS_auto.GetBuffAmount();
};
Game_BattlerBase.prototype.GetDebuffAmount = function() {
    return TJS_auto.GetDebuffAmount();
};
Game_BattlerBase.prototype.clearBuffs = function() {
    this._buffs = [0,0,0,0,0, 0,0,0,0];
    this._buffTurns = [0,0,0,0,0, 0,0,0,0];
};
Game_BattlerBase.prototype.increaseBuff = function(paramId) {
    if (!this.isMaxBuffAffected(paramId)) {
        this._buffs[paramId]++;
    }

    if ( this._buffs[paramId] == -1 ) this._debuffAmounts1[paramId] = TJS_auto.GetDebuffAmount();
    if ( this._buffs[paramId] == -2 ) this._debuffAmounts2[paramId] = TJS_auto.GetDebuffAmount();
    if ( this._buffs[paramId] == 1 ) this._buffAmounts1[paramId] = TJS_auto.GetBuffAmount();
    if ( this._buffs[paramId] == 2 ) this._buffAmounts2[paramId] = TJS_auto.GetBuffAmount();
};
Game_BattlerBase.prototype.decreaseBuff = function(paramId) {
    if (!this.isMaxDebuffAffected(paramId)) {
        this._buffs[paramId]--;
    }

    if ( this._buffs[paramId] == -1 ) this._debuffAmounts1[paramId] = TJS_auto.GetDebuffAmount();
    if ( this._buffs[paramId] == -2 ) this._debuffAmounts2[paramId] = TJS_auto.GetDebuffAmount();
    if ( this._buffs[paramId] == 1 ) this._buffAmounts1[paramId] = TJS_auto.GetBuffAmount();
    if ( this._buffs[paramId] == 2 ) this._buffAmounts2[paramId] = TJS_auto.GetBuffAmount();
};
Game_BattlerBase.prototype.paramBuffRate = function(paramId) {
    if ( this._buffs[paramId] == -1 ) return 1.00000 - this._debuffAmounts1[paramId];
    if ( this._buffs[paramId] == -2 ) return 1.00000 - (this._debuffAmounts1[paramId] + this._debuffAmounts2[paramId]);
    if ( this._buffs[paramId] == 1 ) return 1.00000 + this._buffAmounts1[paramId];
    if ( this._buffs[paramId] == 2 ) return 1.00000 + this._buffAmounts1[paramId] + this._buffAmounts2[paramId];

    return 1.00000;
};
Game_BattlerBase.prototype.param = function(paramId) {
    if ( paramId == TJS_PARAM_MAGIC_FOCUS ) return this.GetAtr_MagicFocus();

    var value =
        this.paramBasePlus(paramId) *
        this.paramRate(paramId) *
        this.paramBuffRate(paramId);

    const maxValue = this.paramMax(paramId);
    const minValue = this.paramMin(paramId);
    return Math.round(value.clamp(minValue, maxValue));
};
Game_BattlerBase.prototype.xparam = function(xparamId) {
    if ( xparamId == TJS_CUSTOM_XPARAM_PHYSICAL_HIT_BONUS ) return this.GetAtr_HitRatePhysical();
    else if ( xparamId == TJS_CUSTOM_XPARAM_MAGICAL_HIT_BONUS ) return this.GetAtr_HitRateMagical();
    else if ( xparamId == TJS_CUSTOM_XPARAM_PHYSICAL_CRITICAL_HIT_RATE ) return this.GetAtr_PhysicalCriticalHitRate();
    else if ( xparamId == TJS_CUSTOM_XPARAM_MAGICAL_CRITICAL_HIT_RATE ) return this.GetAtr_MagicalCriticalHitRate();
    else if ( xparamId == TJS_CUSTOM_XPARAM_PHYSICAL_CRITICAL_EVADE_RATE ) return this.GetAtr_PhysicalCriticalEvadeRate();
    else if ( xparamId == TJS_CUSTOM_XPARAM_MAGICAL_CRITICAL_EVADE_RATE ) return this.GetAtr_MagicalCriticalEvadeRate();

    return this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);
};
Game_BattlerBase.prototype.sparam = function(sparamId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);
};
Game_BattlerBase.prototype.GetNormalizedLevel = function() {
    return 0;
};
Game_BattlerBase.prototype.GetDp = function() {
    var pct = this._hp / this.param(0);
    // pct = 1.00000 - pct;
    // pct = Math.pow(pct, 2.00000);
    // pct = 1.00000 - pct;
    pct *= tjs_combat_hp_dampening_inverse;
    pct = 1.00000 - pct;

    return pct;
};
Game_BattlerBase.prototype.GetLevelMultiplierForEquip = function(slot_index) {
    return 0.00000;
};
Game_BattlerBase.prototype.GetModifiedMagicPointCost = function(equip_slot_index, mp_base_cost) {
    return mp_base_cost;
};
Game_BattlerBase.prototype.lerp = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, 0.00000 );
};
Game_BattlerBase.prototype.LerpEquipIndex = function(f0, f1, lerp_index) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip( lerp_index ) );
};
Game_BattlerBase.prototype.lerpBook = function(f0, f1) {
    const equip_index = TJS_auto.GetIndexForEquipmentType("book");

    return this.LerpEquipIndex(f0, f1, equip_index - 1);
};
Game_BattlerBase.prototype.lerpRing = function(f0, f1) {
    const equip_index = TJS_auto.GetIndexForEquipmentType("ring");

    return this.LerpEquipIndex(f0, f1, equip_index - 1);
};
Game_BattlerBase.prototype.lerpBackup = function(f0, f1) {
    const equip_index = TJS_auto.GetIndexForEquipmentType("backup weapon");

    return this.LerpEquipIndex(f0, f1, equip_index - 1);
};
Game_BattlerBase.prototype.lerpAccessory = function(f0, f1) {
    const equip_index = TJS_auto.GetIndexForEquipmentType("accessory");

    return this.LerpEquipIndex(f0, f1, equip_index - 1);
};
Game_BattlerBase.prototype.lerp0 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(0) );
};
Game_BattlerBase.prototype.lerp1 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(1) );
};
Game_BattlerBase.prototype.lerp2 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(2) );
};
Game_BattlerBase.prototype.lerp3 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(3) );
};
Game_BattlerBase.prototype.lerp4 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(4) );
};
Game_BattlerBase.prototype.lerp5 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(5) );
};
Game_BattlerBase.prototype.lerp6 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(6) );
};
Game_BattlerBase.prototype.lerp7 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(7) );
};
Game_BattlerBase.prototype.lerp8 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(8) );
};
Game_BattlerBase.prototype.lerp9 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(9) );
};
Game_BattlerBase.prototype.lerp10 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(10) );
};
Game_BattlerBase.prototype.lerp11 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(11) );
};
Game_BattlerBase.prototype.lerp12 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(12) );
};
Game_BattlerBase.prototype.lerp13 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(13) );
};
Game_BattlerBase.prototype.lerp14 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(14) );
};
Game_BattlerBase.prototype.lerp15 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(15) );
};
Game_BattlerBase.prototype.e0 = function(multiplier) {
    return this.GetLevelMultiplierForEquip(0) * multiplier;
};
Game_BattlerBase.prototype.e2 = function(multiplier) {
    return this.GetLevelMultiplierForEquip(2) * multiplier;
};
Game_BattlerBase.prototype.e3 = function(multiplier) {
    return this.GetLevelMultiplierForEquip(3) * multiplier;
};
Game_BattlerBase.prototype.pa = function(multiplier, equip_index=-1, level_multiplier=800) {
    // return (this.pa1 * multiplier * 0.01) + (this.GetLevelMultiplierForEquip(equip_index) * level_multiplier * 0.01);
    return this.pa1 * ((multiplier * 0.01000) + (this.GetLevelMultiplierForEquip(equip_index) * multiplier * 0.03000));
};
Game_BattlerBase.prototype.ma = function(multiplier, equip_index=-1, level_multiplier=800) {
    // return (this.ma1 * multiplier * 0.01) + (this.GetLevelMultiplierForEquip(equip_index) * level_multiplier * 0.01);
    return this.ma1 * ((multiplier * 0.01000) + (this.GetLevelMultiplierForEquip(equip_index) * multiplier * 0.03000));
};
Game_BattlerBase.prototype.ca = function(multiplier, equip_index=-1, level_multiplier=800) {
    // return (this.ca1 * multiplier * 0.01) + (this.GetLevelMultiplierForEquip(equip_index) * level_multiplier * 0.01);
    return this.ca1 * ((multiplier * 0.01000) + (this.GetLevelMultiplierForEquip(equip_index) * multiplier * 0.03000));
};
Game_BattlerBase.prototype.GetLevelValueForSkill = function(skill_id) {
    return 0.00000;
};
Game_BattlerBase.prototype.GetEquipSlotForSkill = function(skill_id) {
    return -1;
};
Game_BattlerBase.prototype.SetActiveSkill = function(skill_id) {
    this._active_skill_id = skill_id;
};
Game_BattlerBase.prototype.static = function(multiplier_low, multiplier_high, skew=0) {
    return this.sa1 * TJS_auto.LerpSkew(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id), skew);
};
Game_BattlerBase.prototype.physical = function(multiplier_low, multiplier_high, skew=0) {
    return this.pa1 * TJS_auto.LerpSkew(multiplier_low * 0.01000, multiplier_high * 0.01000, this.GetLevelValueForSkill(this._active_skill_id), skew);
};
Game_BattlerBase.prototype.magical = function(multiplier_low, multiplier_high, skew=0) {
    return this.ma1 * TJS_auto.LerpSkew(multiplier_low * 0.01000, multiplier_high * 0.01000, this.GetLevelValueForSkill(this._active_skill_id), skew);
};
Game_BattlerBase.prototype.combo = function(multiplier_low, multiplier_high, skew=0) {
    return this.ca1 * TJS_auto.LerpSkew(multiplier_low * 0.01000, multiplier_high * 0.01000, this.GetLevelValueForSkill(this._active_skill_id), skew);
};
Game_BattlerBase.prototype.a_static = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.sa1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id));
    const defense_value = opponent_defense * opponent_def_multiplier;
    return attack_value - defense_value;
};
Game_BattlerBase.prototype.a_physical = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.pa1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id));
    const defense_value = opponent_defense * opponent_def_multiplier;
    return attack_value - defense_value;
};
Game_BattlerBase.prototype.a_magical = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.ma1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id));
    const defense_value = opponent_defense * opponent_def_multiplier;
    return attack_value - defense_value;
};
Game_BattlerBase.prototype.a_combo = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.ca1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id));
    const defense_value = opponent_defense * opponent_def_multiplier;
    return attack_value - defense_value;
};
Game_BattlerBase.prototype.a_agility = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.sa1 * this.agi * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id));
    const defense_value = opponent_defense * opponent_def_multiplier;
    return attack_value - defense_value;
};
Game_BattlerBase.prototype.pd = function(multiplier) {
    return this.pd1 * multiplier * 0.01000;
};
Game_BattlerBase.prototype.md = function(multiplier) {
    return this.md1 * multiplier * 0.01000;
};
Game_BattlerBase.prototype.cd = function(multiplier) {
    return this.cd1 * multiplier * 0.01000;
};
Game_BattlerBase.prototype.ratio = function(attacker_value, defender_value) {
    var total = attacker_value + defender_value;
    var d = defender_value;
    if ( total > 1 ) {
        d /= total;
    } else {
        d = 1;
    }

    return 1.0 - d;
};
Game_BattlerBase.prototype.hasSkill = function(skillId) {
    // return this.skills().includes($dataSkills[skillId]);
    return false;
};
Game_BattlerBase.prototype.ValueByLevel = function(vMin, vMax, skew) {
    var lvl = (this.level - 1) / (tjs_max_character_level - 1.00000);
    if (skew < 0) {
        var lvl2 = lvl * lvl;
        lvl = (lvl * (1 + skew)) + (lvl2 * -skew);
    }
    else if (skew > 0) {
        var lvl2 = 1.00000 - lvl;
        lvl2 = lvl2 * lvl2 * lvl2;
        lvl2 = 1.00000 - lvl2;
        lvl = (lvl * (1 - skew)) + (lvl2 * skew);
    }

    return (vMin * (1.00000 - lvl)) + (vMax * lvl);
};
Game_BattlerBase.prototype.actionPlusSet = function() {
    var ar = this.traits(Game_BattlerBase.TRAIT_ACTION_PLUS).map(
        trait => trait.value
    );

    // Race
    if ( this.hasSkill(tjs_skill_DNA_condition_1) ) {
        const v1 = this.ValueByLevel(0.0100, 0.2500,  0.0000);
        ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_DNA_condition_2) ) {
        const v1 = this.ValueByLevel(0.2000, 0.7500,  0.5000);
        ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_DNA_condition_3) ) {
        const v1 = this.ValueByLevel(0.2500, 0.9000,  0.8000);
        ar.push(v1);
    }

    // Class
    if ( this.hasSkill(tjs_skill_class_swordmaster) ) {
        const v1 = this.ValueByLevel(0.1250, 0.8250,  0.8000);
        const c = Math.round(this.ValueByLevel(0, 1, 1.0));
        if (c > 0.1) ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_class_axemaster) ) {
        const v1 = this.ValueByLevel(0.1250, 0.8250,  0.8000);
        const c = Math.round(this.ValueByLevel(0, 1, 1.0));
        if (c > 0.1) ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_class_samurai) ) {
        const v1 = this.ValueByLevel(0.1250, 0.8250,  0.8000);
        const c = Math.round(this.ValueByLevel(0, 1, 1.0));
        if (c > 0.1) ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_class_ninja) ) {
        const v1 = this.ValueByLevel(0.1000, 0.7250,  0.6500);
        const c = Math.round(this.ValueByLevel(0, 1, 1.0));
        if (c > 0.1) ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_class_rifleman) ) {
        const v1 = this.ValueByLevel(0.1250, 0.8250,  0.8000);
        const c = Math.round(this.ValueByLevel(0, 1, 1.0));
        if (c > 0.1) ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_class_cleric) ) {
        const v1 = this.ValueByLevel(0.1000, 0.7250,  0.6500);
        const c = Math.round(this.ValueByLevel(0, 1, 1.0));
        if (c > 0.1) ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_class_mage) ) {
        const v1 = this.ValueByLevel(0.0250, 0.8000,  0.2500);
        const c = Math.round(this.ValueByLevel(0, 1, 1.0));
        if (c > 0.1) ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_class_wizard) ) {
        const v1 = this.ValueByLevel(0.0250, 0.8000,  0.2500);
        const c = Math.round(this.ValueByLevel(0, 1, 1.0));
        if (c > 0.1) ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_class_martial_artist) ) {
        const v1 = this.ValueByLevel(0.1250, 0.8250,  0.8000);
        const c = Math.round(this.ValueByLevel(0, 1, 1.0));
        if (c > 0.1) ar.push(v1);
    }
    else if ( this.hasSkill(tjs_skill_class_kensei) ) {
        const v1 = this.ValueByLevel(0.1250, 0.8250,  0.8000);
        const v2 = this.ValueByLevel(0.0250, 0.6250,  0.6000);
        const v3 = this.ValueByLevel(0.0012, 0.4000,  0.2000);
        const c = Math.round(this.ValueByLevel(0, 3, 1.0));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
    }

    return ar;
};

///-----------------------------------------------------------------------------
/// Game_Battler
///
/// The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
/// and actions.
Game_Battler.prototype.initMembers = function() {
    Game_BattlerBase.prototype.initMembers.call(this);
    this._actions = [];
    this._speed = 0;
    this._result = new Game_ActionResult();
    this._actionState = "";
    this._lastTargetIndex = 0;
    this._damagePopup = false;
    this._effectType = null;
    this._motionType = null;
    this._weaponImageId = 0;
    this._motionRefresh = false;
    this._selected = false;
    this._tpbState = "";
    this._tpbChargeTime = 0;
    this._tpbCastTime = 0;
    this._tpbIdleTime = 0;
    this._tpbTurnCount = 0;
    this._tpbTurnEnd = false;

    this._state_scaling = [];
};
Game_Battler.prototype.StateCurrentEffectScale = function(state) {
    var scale = this._state_scaling.filter( data => data.id == state.id ).length > 0 ? this._state_scaling.filter( data => data.id == state.id )[0].scale : 1.0;
    // scale *= this.stateRate( state.id );
    return scale.clamp( 0.00000, 1.00000 );
};
Game_Battler.prototype.states = function() { // Blenn
    var states = TJS_auto.DeepCopy( this._states.map( id => $dataStates[id] ) );

    /*
    var traits_sum = [];

    if ( this.isActor() ) {
        for ( const trait of this.actor().traits ) {
            if ( trait.code == Game_BattlerBase.TRAIT_STATE_RATE )
                traits_sum.push( trait );
        }
    }
    if ( this.isEnemy() ) {
        for ( const trait of this.actor().traits ) {
            if ( trait.code == Game_BattlerBase.TRAIT_STATE_RATE )
                traits_sum.push( trait );
        }
    }
    for ( const state of states ) {
        for ( const trait of state.traits ) {
            if ( trait.code == Game_BattlerBase.TRAIT_STATE_RATE )
                traits_sum.push( trait );
        }
    }
    */

    for ( var state of states ) {
        var scale = this._state_scaling.filter( data => data.id == state.id ).length > 0 ? this._state_scaling.filter( data => data.id == state.id )[0].scale : 1.0;
        // scale *= this.stateRate( state.id );
        scale = scale.clamp( 0.00000, 1.00000 );

        /*
        if ( state.multi_level_state_averaged > 0 ) {
            const new_state_id = Math.round(TJS_auto.Lerp( 0.00000, 9.00000, scale.clamp(0.0, 1.0) )) + state.multi_level_state_averaged;
            state = TJS_auto.DeepCopy( $dataStates[ new_state_id ] );

            continue;
        }
        */

        for ( var trait of state.traits ) {
            if ( trait.code == Game_BattlerBase.TRAIT_ELEMENT_RATE ) trait.value = TJS_auto.Lerp( 1.00000, trait.value, scale );
            else if ( trait.code == Game_BattlerBase.TRAIT_DEBUFF_RATE ) trait.value = TJS_auto.Lerp( 1.00000, trait.value, scale );
            else if ( trait.code == Game_BattlerBase.TRAIT_STATE_RATE ) trait.value = TJS_auto.Lerp( 1.00000, trait.value, scale );
            else if ( trait.code == Game_BattlerBase.TRAIT_PARAM ) trait.value = TJS_auto.Lerp( 1.00000, trait.value, scale );
            else if ( trait.code == Game_BattlerBase.TRAIT_XPARAM ) trait.value = TJS_auto.Lerp( 0.00000, trait.value, scale );
            else if ( trait.code == Game_BattlerBase.TRAIT_SPARAM ) trait.value = TJS_auto.Lerp( 1.00000, trait.value, scale );
            else if ( trait.code == Game_BattlerBase.TRAIT_ATTACK_SPEED ) trait.value = TJS_auto.Lerp( 0.00000, trait.value, scale );
            else if ( trait.code == Game_BattlerBase.TRAIT_ACTION_PLUS ) trait.value = TJS_auto.Lerp( 0.00000, trait.value, 1.00000 - Math.pow( 1.00000 - scale, 3.25 ) );
        }

        var custom_t = state.custom_traits;
        custom_t.to_hit_physical_add = TJS_auto.Lerp( 0.00000, custom_t.to_hit_physical_add, scale );
        custom_t.to_hit_physical_multiply = TJS_auto.Lerp( 1.00000, custom_t.to_hit_physical_multiply, scale );
        custom_t.to_hit_magical_add = TJS_auto.Lerp( 0.00000, custom_t.to_hit_magical_add, scale );
        custom_t.to_hit_magical_multiply = TJS_auto.Lerp( 1.00000, custom_t.to_hit_magical_multiply, scale );
        custom_t.magic_focus_add = TJS_auto.Lerp( 0.00000, custom_t.magic_focus_add, scale );
        custom_t.magic_focus_multiply = TJS_auto.Lerp( 1.00000, custom_t.magic_focus_multiply, scale );
        custom_t.magic_focus_debuff_rate = TJS_auto.Lerp( 1.00000, custom_t.magic_focus_debuff_rate, scale );
        custom_t.max_tactical_points_add = TJS_auto.Lerp( 0.00000, custom_t.max_tactical_points_add, scale );
        custom_t.max_tactical_points_multiply = TJS_auto.Lerp( 1.00000, custom_t.max_tactical_points_multiply, scale );
    }

    return states;
};
Game_Battler.prototype.addState = function(stateId) {
    if (this.isStateAddable(stateId)) {
        if (!this.isStateAffected(stateId)) {
            this.addNewState(stateId);
            this.refresh();
        }
        this.resetStateCounts(stateId);
        this._result.pushAddedState(stateId);
    }

    const new_level = (TJS_auto.GetStateScalingFactor() * this.stateRate( stateId )).clamp( 0.00000, 1.00000 );

    if ( this._state_scaling.filter( state => state.id == stateId ).length > 0 ) {
        for ( var state of this._state_scaling ) {
            if ( state.id == stateId ) {
                if ( state.scale < new_level ) state.scale = new_level;
            }
        }
    }
    else {
        this._state_scaling.push( { id: stateId, scale: new_level } );
    }

    // TJS_auto.SetStateScalingFactor( 1.00000, this );
};
Game_Battler.prototype.removeState = function(stateId) {
    if (this.isStateAffected(stateId)) {
        if (stateId === this.deathStateId()) {
            this.revive();
        }
        this.eraseState(stateId);
        this.refresh();
        this._result.pushRemovedState(stateId);
    }

    const scales_length = this._state_scaling.filter( data => data.id == stateId ).length;

    for ( let i = 0; i < scales_length; i++ ) {
        for ( let v = 0; v < this._state_scaling.length; v++ ) {
            if ( this._state_scaling[v].id == stateId ) {
                this._state_scaling.splice( v, 1 );

                break;
            }
        }
    }
};

///-----------------------------------------------------------------------------
/// TjsMapData
///-----------------------------------------------------------------------------
/// Example metadata:
/// <tjsVehicle>
/// <tjsActorBig>
/// <tjsActorSmall>
///
/// <tjsChapter>
///
/// <tjsMinEnemyLevel>
/// <tjsMaxEnemyLevel>
/// <tjsEnemyOffset>
/// <tjsEnemyLevels>
/// <tjsRegMaxEnemies>
///
/// <tjsRegionExp>
///
/// <tjsTreasureLevel>
/// <tjsEnemyGrade>
///
///
/// <tMap>
/// <tSkyRegion>
///-----------------------------------------------------------------------------
function TjsMapData() { // Blenn
	this.Initialize.apply(this, arguments);
};
TjsMapData.prototype.Initialize = function() {
    this.SetDefaults();
};
TjsMapData.prototype.SetDefaults = function() {
	this._actorBig = true;

	if ( $gameSystem ) {
        $gameSystem.encounter_exp_limit = [725];
        $gameSystem.max_random_enemies = [1];
        $gameSystem.sky_region = -1;
    }
};
TjsMapData.prototype.CopyFrom = function(other) {
    if (!other) return;

	this._actorBig = other._actorBig;
};
TjsMapData.prototype.ReadFromMeta = function() {
    this.SetDefaults();

    if ( !$dataMap.meta ) return;

	if ( $dataMap.meta.tjsActorBig ) this._actorBig = true;
	if ( $dataMap.meta.tjsActorSmall ) this._actorBig = false;

	if ( $dataMap.meta.tjsVehicle ) {
        $gameSystem.inside_vehicle = true;
        $gamePlayer.setTransparent(false);
	}
	else {
        $gameSystem.inside_vehicle = false;
	}

	if ( $dataMap.meta.tjsChapter ) $gameVariables.setValue( tjs_variable_game_chapter, Number( $dataMap.meta.tjsChapter ) );

	if ( $dataMap.meta.tjsMinEnemyLevel ) $gameSystem.min_enemy_level = Math.round( Number( $dataMap.meta.tjsMinEnemyLevel ) * tjs_level_scaling_factor );
	if ( $dataMap.meta.tjsMaxEnemyLevel ) $gameSystem.max_enemy_level = Math.round( Number( $dataMap.meta.tjsMaxEnemyLevel ) * tjs_level_scaling_factor );
	if ( $dataMap.meta.tjsEnemyOffset ) $gameSystem.enemy_level_offset = Math.round( Number( $dataMap.meta.tjsEnemyOffset ) * tjs_level_scaling_factor );
    if ( $dataMap.meta.tjsEnemyLevels ) {
        const enemy_levels = JSON.parse( $dataMap.meta.tjsEnemyLevels );

        $gameSystem.min_enemy_level = enemy_levels[0];
        $gameSystem.max_enemy_level = enemy_levels[1];
        $gameSystem.enemy_level_offset = enemy_levels[2];
    }
	if ( $dataMap.meta.tjsRegMaxEnemies ) $gameSystem.max_random_enemies = JSON.parse( $dataMap.meta.tjsRegMaxEnemies );
	if ( $dataMap.meta.tjsRegionExp ) $gameSystem.encounter_exp_limit = JSON.parse( $dataMap.meta.tjsRegionExp );
	if ( $dataMap.meta.tjsTreasureLevel ) $gameSystem.treasure_chest_level = Number( $dataMap.meta.tjsTreasureLevel );
	if ( $dataMap.meta.tjsEnemyGrade ) $gameSystem.enemy_grade = Number( $dataMap.meta.tjsEnemyGrade );

	if ( $dataMap.meta.tMap ) {
        const t_map = JSON.parse( $dataMap.meta.tMap );
        if ( t_map[0] == 1 )
            this._actorBig = true;
        else
            this._actorBig = false;

        if ( t_map.length > 1 ) $gameVariables.setValue( tjs_variable_game_chapter, t_map[1] );
        if ( t_map.length > 2 ) $gameSystem.treasure_chest_level = t_map[2];
        if ( t_map.length > 3 ) $gameSystem.enemy_grade = t_map[3];
	}

	if ( $dataMap.meta.tSkyRegion ) $gameSystem.sky_region = Number( $dataMap.meta.tSkyRegion ).clamp( 0, 255 );
};
TjsMapData.prototype.UpdateGameVars = function() {
    if ( this._actorBig == true ) {
        $gameActors.actor(1).setCharacterImage('+PC MainChars 0-7', 0);
        $gameActors.actor(2).setCharacterImage('+PC MainChars 0-7', 1);
        $gameActors.actor(3).setCharacterImage('+PC MainChars 0-7', 4);
        $gameActors.actor(4).setCharacterImage('+PC MainChars 0-7', 5);
        $gameActors.actor(5).setCharacterImage('+PC MainChars 0-7', 7);
        $gameActors.actor(6).setCharacterImage('+PC MainChars 0-7', 6);
        $gameActors.actor(7).setCharacterImage('+PC MainChars 0-7', 3);
        $gameActors.actor(8).setCharacterImage('+PC MainChars 0-7', 2);

        $gameActors.actor(10).setCharacterImage('96x96/m tigerstone arctic orange', 2);
        $gameActors.actor(11).setCharacterImage('96x96/m tigerstone arctic red', 0);
        $gameActors.actor(12).setCharacterImage('96x96/m tigerstone arctic violet', 7);
        $gameActors.actor(13).setCharacterImage('96x96/m tigerstone arctic blue', 5);
        $gameActors.actor(14).setCharacterImage('96x96/m tigerstone arctic blond', 3);
        $gameActors.actor(15).setCharacterImage('96x96/m tigerstone arctic violet', 1);
        $gameActors.actor(16).setCharacterImage('96x96/m tigerstone hispanic', 6);
        $gameActors.actor(17).setCharacterImage('96x96/m tigerstone cauc orange', 4);
    } else {
        $gameActors.actor(1).setCharacterImage('PC MainChars 0-7', 0);
        $gameActors.actor(2).setCharacterImage('PC MainChars 0-7', 1);
        $gameActors.actor(3).setCharacterImage('PC MainChars 0-7', 4);
        $gameActors.actor(4).setCharacterImage('PC MainChars 0-7', 5);
        $gameActors.actor(5).setCharacterImage('PC MainChars 0-7', 7);
        $gameActors.actor(6).setCharacterImage('PC MainChars 0-7', 6);
        $gameActors.actor(7).setCharacterImage('PC MainChars 0-7', 3);
        $gameActors.actor(8).setCharacterImage('PC MainChars 0-7', 2);

        $gameActors.actor(10).setCharacterImage('48x48/m tigerstone arctic orange', 2);
        $gameActors.actor(11).setCharacterImage('48x48/m tigerstone arctic red', 0);
        $gameActors.actor(12).setCharacterImage('48x48/m tigerstone arctic violet', 7);
        $gameActors.actor(13).setCharacterImage('48x48/m tigerstone arctic blue', 5);
        $gameActors.actor(14).setCharacterImage('48x48/m tigerstone arctic blond', 3);
        $gameActors.actor(15).setCharacterImage('48x48/m tigerstone arctic violet', 1);
        $gameActors.actor(16).setCharacterImage('48x48/m tigerstone hispanic', 6);
        $gameActors.actor(17).setCharacterImage('48x48/m tigerstone cauc orange', 4);
    }

    $gamePlayer.refresh();

    TJS_auto.SetSoftLevelCap();
};

///-----------------------------------------------------------------------------
/// Game_Map
///
/// The game object class for a map. It contains scrolling and passage
/// determination functions.
/*
Game_Map.prototype.initialize = function() {
    this._interpreter = new Game_Interpreter();
    this._mapId = 0;
    this._tilesetId = 0;
    this._events = [];
    this._commonEvents = [];
    this._vehicles = [];
    this._displayX = 0;
    this._displayY = 0;
    this._nameDisplay = true;
    this._scrollDirection = 2;
    this._scrollRest = 0;
    this._scrollSpeed = 4;
    this._parallaxName = "";
    this._parallaxZero = false;
    this._parallaxLoopX = false;
    this._parallaxLoopY = false;
    this._parallaxSx = 0;
    this._parallaxSy = 0;
    this._parallaxX = 0;
    this._parallaxY = 0;
    this._battleback1Name = null;
    this._battleback2Name = null;
    this.createVehicles();
};
*/
Game_Map.prototype.setup = function(mapId) {
    if (!$dataMap) {
        throw new Error("The map data is not available");
    }
    this._mapId = mapId;
    this._tilesetId = $dataMap.tilesetId;
    this._displayX = 0;
    this._displayY = 0;
    this.refereshVehicles();
    this.setupEvents();
    this.setupScroll();
    this.setupParallax();
    this.setupBattleback();
    this._needsRefresh = false;

    TJS_map.ReadFromMeta();
    TJS_map.UpdateGameVars();

    TJS_auto.UpdateGlobalData();

    $gameSystem.UpdateEncounterGroups();
};
Game_Map.prototype.createVehicles = function() {
    this._vehicles = [];
    /*
    this._vehicles[0] = new Game_Vehicle("boat");
    this._vehicles[1] = new Game_Vehicle("ship");
    this._vehicles[2] = new Game_Vehicle("airship");
    this._vehicles[3] = new Game_Vehicle("landcraft");
    */

    if ( tjs_vehicles_boat.length > 1 ) {
        for ( let i = 0; i < tjs_vehicles_boat.length; i++ )
            this._vehicles.push( new Game_Vehicle( tjs_vehicles_boat[i].type, tjs_vehicles_boat[i].name ) );
    }
    if ( tjs_vehicles_ship.length > 1 ) {
        for ( let i = 0; i < tjs_vehicles_ship.length; i++ )
            this._vehicles.push( new Game_Vehicle( tjs_vehicles_ship[i].type, tjs_vehicles_ship[i].name ) );
    }
    if ( tjs_vehicles_skycraft.length > 1 ) {
        for ( let i = 0; i < tjs_vehicles_skycraft.length; i++ )
            this._vehicles.push( new Game_Vehicle( tjs_vehicles_skycraft[i].type, tjs_vehicles_skycraft[i].name ) );
    }
    if ( tjs_vehicles_landcraft.length > 1 ) {
        for ( let i = 0; i < tjs_vehicles_landcraft.length; i++ )
            this._vehicles.push( new Game_Vehicle( tjs_vehicles_landcraft[i].type, tjs_vehicles_landcraft[i].name ) );
    }
};
Game_Map.prototype.vehicle = function(type) {
    if (type === 0 || type === "boat") {
        return this.boat();
    } else if (type === 1 || type === "ship") {
        return this.ship();
    } else if (type === 2 || type === "airship") {
        return this.airship();
    } else if ( type < this._vehicles.length ) {
        return this._vehicles[type];
    } else {
        return null;
    }
};
Game_Map.prototype.vehicles = function() {
    return this._vehicles;
};

///-----------------------------------------------------------------------------
/// TJS
///-----------------------------------------------------------------------------
/**
 * The big kahuna of this plugin.  Contains all sorts of utility and helper functions for custom TJS-related programming.
 * Used quite extensively by custom classes and overriding functions throughout the plugin.
 *
 * @class
 */
function TJS() {
	this.initialize.apply(this, arguments);
	this.registerPluginCommands();
}
TJS.prototype.initialize = function() {
    this._currentTargetedActor = -1;
    this._itemLevel = 0.50000;
    this._state_scale = 0;
    this.highest_enemy_category = 1;

    this.tjsWeapon = this.GetIndexForEquipmentType( "weapon" );
    this.tjsMinor = this.GetIndexForEquipmentType( "backup weapon" );
    this.tjsSpell = this.GetIndexForEquipmentType( "book" );
    this.tjsBook = this.GetIndexForEquipmentType( "book" );
    this.tjsShield = this.GetIndexForEquipmentType( "shield" );
    this.tjsRing = this.GetIndexForEquipmentType( "ring" );
    this.tjsAccessory = this.GetIndexForEquipmentType( "accessory" );
};
// Utility
TJS.prototype.DeepCopy = function(inp) {
    return JSON.parse(JSON.stringify( inp ));
};
TJS.prototype.IsEven = function(inp) {
    return ( inp % 2 == 0 );
};
TJS.prototype.Avg = function(a, b) {
    return (a + b) * 0.5;
};
TJS.prototype.Lerp = function(a, b, towards_b) {
    return (a * (1.00000 - towards_b)) + (b * towards_b);
};
TJS.prototype.LerpSkew = function(a, b, towards_b, skew_factor) {
    // const towardsB = Math.max(Math.min(towards_b, 1.00000), 0.00000);
    const towardsB = towards_b;

    if ( skew_factor > 0 ) {
        const skewed = 1.00000 - ((1.00000 - towardsB) * (1.00000 - towardsB) * (1.00000 - towardsB));
        const lerpA = (a * (1.00000 - towardsB)) + (b * towardsB);
        const lerpB = (a * (1.00000 - skewed)) + (b * skewed);
        return (lerpA * (1.00000 - skew_factor)) + (lerpB * skew_factor);
    }
    else if ( skew_factor < 0 ) {
        const skewed = towardsB * towardsB * towardsB;
        const lerpA = (a * (1.00000 - towardsB)) + (b * towardsB);
        const lerpB = (a * (1.00000 - skewed)) + (b * skewed);
        return (lerpA * (1.00000 + skew_factor)) + (lerpB * -skew_factor);
    }
    return (a * (1.00000 - towardsB)) + (b * towardsB);
};
TJS.prototype.GetNumberOfDigits = function(value) {
    return Math.max(Math.floor(Math.log10(Math.abs(Math.round(Number( value ))))), 0) + 1;
};
TJS.prototype.GetCurrentDateTimeStringObject = function() {
    let timestamp = new Date( 0 );
    let result = {};
    timestamp.setMilliseconds( Date.now() );

    const time_day = timestamp.getDay();
    let text_day_of_week = "";
    if ( time_day == 0 ) text_day_of_week = "Sun";
    else if ( time_day == 1 ) text_day_of_week = "Mon";
    else if ( time_day == 2 ) text_day_of_week = "Tue";
    else if ( time_day == 3 ) text_day_of_week = "Wed";
    else if ( time_day == 4 ) text_day_of_week = "Thu";
    else if ( time_day == 5 ) text_day_of_week = "Fri";
    else if ( time_day == 6 ) text_day_of_week = "Sat";

    result.date = text_day_of_week + " " + timestamp.toLocaleDateString();
    result.time = timestamp.toLocaleTimeString();

    return result;
};
TJS.prototype.WaitUntilButtonPressed = function() {
    var readyToContinue = 0;

    while ( readyToContinue == 0 ) {
        if ( (Input.isPressed('ok')) || (TouchInput.isPressed()) ) readyToContinue = 0;
        else readyToContinue = 1;
    }

    while ( readyToContinue == 0 ) {
        if ( (!Input.isPressed('ok')) && (!TouchInput.isPressed()) ) readyToContinue = 0;
        else readyToContinue = 1;
    }
};
TJS.prototype.GetParameterNameFromNumber = function(inp) {
    if ( inp == 0 ) return "Max Health Points";
    if ( inp == 1 ) return "Max Magic Points";
    if ( inp == 2 ) return "Strength";
    if ( inp == 3 ) return "Defense";
    if ( inp == 4 ) return "Mana";
    if ( inp == 5 ) return "Magical Defense";
    if ( inp == 6 ) return "Agility";
    if ( inp == 7 ) return "Luck";

    // TJS Custom
    if ( inp == 8 ) return "Magic Focus";

    return "";
};
TJS.prototype.GetXParameterNameFromNumber = function(inp) { // Bligg
    if ( inp == 0 ) return "Hit Rate";
    if ( inp == 1 ) return "Evasion Rate";
    if ( inp == 2 ) return "Critical Rate";
    if ( inp == 3 ) return "Critical Evasion";
    if ( inp == 4 ) return "Magical Evasion";
    if ( inp == 5 ) return "Magical Reflection";
    if ( inp == 6 ) return "Counterattack";
    if ( inp == 7 ) return "HP Regeneration";
    if ( inp == 8 ) return "MP Regeneration";
    if ( inp == 9 ) return "TP Regeneration";

    // TJS Custom
    if ( inp == 10 ) return "Physical Hit Bonus";
    if ( inp == 11 ) return "Magical Hit Bonus";
    if ( inp == 12 ) return "Phys. Crit. Hit Rate";
    if ( inp == 13 ) return "Mag. Crit. Hit Rate";
    if ( inp == 14 ) return "Phys. Critical Evade";
    if ( inp == 15 ) return "Mag. Critical Evade";

    return "";
};
TJS.prototype.GetSParameterNameFromNumber = function(inp) {
    if ( inp == 0 ) return "Targeted Rate";
    if ( inp == 1 ) return "Guard Effect";
    if ( inp == 2 ) return "Healing Rate, Spells";
    if ( inp == 3 ) return "Healing Rate, Potions";
    if ( inp == 4 ) return "MP Cost Rate";
    if ( inp == 5 ) return "TP Gain Rate";
    if ( inp == 6 ) return "Physical Damage Rate";
    if ( inp == 7 ) return "Magical Damage Rate";
    if ( inp == 8 ) return "Floor Damage Rate";
    if ( inp == 9 ) return "Experience Gain Rate";

    return "";
};
TJS.prototype.GetCustomParameterNameFromNumber = function(inp) {
    if ( inp == 0 ) return "Max Tactical Points";
    if ( inp == 1 ) return "Physical Hit Bonus";
    if ( inp == 2 ) return "Magical Hit Bonus";

    return "";
};
/**
 * Gets the index of an attack element, as an integer, from a string.
 *
 * @param {String} The name of the attack element to retrieve the index of.
 * @return {Number} The index of the attack element.
 */
TJS.prototype.GetElementIdFromText = function(txt) {
    if ( txt === 'physical' ) return 1;
    else if ( txt === 'fire' ) return 2;
    else if ( txt === 'ice' ) return 3;
    else if ( txt === 'lightning' ) return 4;
    else if ( txt === 'water' ) return 5;
    else if ( txt === 'earth' ) return 6;
    else if ( txt === 'wind' ) return 7;
    else if ( txt === 'light' ) return 8;
    else if ( txt === 'dark' ) return 9;
    else if ( txt === 'acid' ) return 10;

    else if ( txt === 'flame' ) return 2;
    else if ( txt === 'cold' ) return 3;
    else if ( txt === 'snow' ) return 3;
    else if ( txt === 'thunder' ) return 4;
    else if ( txt === 'hydro' ) return 5;
    else if ( txt === 'air' ) return 7;
    else if ( txt === 'lightness' ) return 8;
    else if ( txt === 'darkness' ) return 9;

    return -1;
};
/**
 * Gets the name of an attack element, as a string, from the numerical index of the attack element, in lower-case.
 *
 * @param {Number} The index of the attack element requested.
 * @return {String} The name of the attack element.
 */
TJS.prototype.GetElementTextFromId = function(int_value) {
    if ( int_value == 1 ) return "physical";
    if ( int_value == 2 ) return "fire";
    if ( int_value == 3 ) return "ice";
    if ( int_value == 4 ) return "lightning";
    if ( int_value == 5 ) return "water";
    if ( int_value == 6 ) return "earth";
    if ( int_value == 7 ) return "wind";
    if ( int_value == 8 ) return "metal";
    if ( int_value == 9 ) return "darkness";
    if ( int_value == 10 ) return "acid";

    return "?????";
};
/**
 * Gets the name of an attack element, as a string, from the numerical index of the attack element, capitalized.
 *
 * @param {Number} The index of the attack element requested.
 * @return {String} The name of the attack element.
 */
TJS.prototype.GetElementTextFromIdCaps = function(int_value) {
    if ( int_value == 1 ) return "Physical";
    if ( int_value == 2 ) return "Fire";
    if ( int_value == 3 ) return "Ice";
    if ( int_value == 4 ) return "Lightning";
    if ( int_value == 5 ) return "Water";
    if ( int_value == 6 ) return "Earth";
    if ( int_value == 7 ) return "Wind";
    if ( int_value == 8 ) return "Metal";
    if ( int_value == 9 ) return "Darkness";
    if ( int_value == 10 ) return "Acid";

    return "?????";
};
TJS.prototype.GetTextForElement = function(element_index) {
    if (element_index >= 0) {
        if ( element_index < $dataSystem.elements.length ) return $dataSystem.elements[element_index];
    }

    return element_index;
};
TJS.prototype.GetAttackElementFromTraits = function(traits) {
    var element = -1;

    for (let i = 0; i < traits.length; i++) {
        if ( traits[i].code == 31 ) element = Number(traits[i].dataId);
    }

    return element;
};
TJS.prototype.RemoveLevelName = function(text, level) {
    if ( level >= tjs_item_level_names.length ) return text;

    const removal_text = tjs_item_level_names[level] + " ";

    if ( text.slice( 0, removal_text.length + 1 ).includes( removal_text ) )
        return text.slice( removal_text.length );

    return text;
};
TJS.prototype.GetInfo1 = function(item) {
    let text = "";

    if ( item.wtypeId ) {
        if ( item.weapon_type == 1 ) {
            text = "\
(Broken Primary Weapon) Your weapon is broken.  Broken weapons cannot be fixed, and need to be de-equipped and replaced.  Did you get extras from the local town's merchants before you went off adventuring?  Nearly all weapons break after being used a \
certain number of times.  The number of times before this happens is randomized, so it isn't the same every time, although some weapons will tend to last longer than others.  Using a weapon with an attack that strikes multiple enemies or all enemies \
many times will wear down a weapon VERY fast compared to a single attack against just one opponent, so be careful with using super-attack moves that strike all enemies, as those types of attacks make a weapon last a very short time.";
        }
        else if ( item.weapon_type == 2 ) {
            text = "\
(Longsword) A good sharp, strong longsword, designed to be used with one or two hands.  Good for basic hack-and-slash.  Single longswords like these allow one to also equip a shield. Most common longswords do plain physical damage, although some are \
enchanted to do a combination of physical and magical elemental damage, with the element typically being elemental fire, ice, lightning, metal, or acid.  Note that enchanted longswords that do elemental acid damage don't create lasting acid burns \
into following turns in combat, but instead do all of their damage right away, like most other swords, and mundane weaponry.  Longswords can be equipped by Swordmaster and Cleric class characters, as well as the Kensei of any of the ten worlds.";
        }
        else if ( item.weapon_type == 3 ) {
            text = "\
(Greatsword) A long, heavy two-handed sword with a very sharp blade.  Just holding it, one who isn't familiar with it to begin with would think that they could chop a tree in half right through the trunk, and straight out of the other side, with one \
hard swing.  A Greatsword such as this one is certainly capable of doing just that sort of thing, though to people and monsters instead of trees.  Compared to a longsword, Greatswords cut harder and deeper, getting more easily past armor and doing \
more damage.  When equipped, both hands are used, so equipping a shield isn't possible.  Most Greatswords do plain physical damage, although some are enchanted to also do elemental damage.  Like other primary weapons, Greatswords will break after \
being used for long enough.";
        }
        else if ( item.weapon_type == 4 ) {
            text = "\
(Dual Longswords) A matched pair of longswords that go together, weighted and designed for dual-wielding, which is one sword in each hand.  When equipped, they disallow use of a shield, as both hands are being used.  Most common longswords do plain \
physical damage, although some are enchanted to do a combination of physical and magical elemental damage, with the magical damage being one of fire, ice, lightning, or acid.  Wielding a pair of longswords simultaneously as one primary weapon takes \
skill and expertise that only Swordmaster class characters have, therefore only Swordmasters may equip them.  Like other primary and backup weapons, dual longswords eventually break and need replacement.  When these break, both have to go in the \
trash.";
        }
        else if ( item.weapon_type == 5 ) {
            text = "\
(Katana) An Asian sword that can be wielded with both one-handed and two-handed fighting styles, the katana is a very sharp weapon with a blade that is slightly curved, and has a sharp cutting side, which is the side the blade curves away from.  The \
blade is thin, and is good at making people a head shorter with a good swing, among other uses.  A lot of hard work and meticulous craftsmanship goes into making a katana.  It is a Samurai's weapon, and can be equipped and used by a Samurai class \
character, as well as The Kensei of a world.  It can be used with special attacks that use the Samurai's Spirit Focus (Magic Points) and/or Tactical Points.  Some katanas are enchanted to do elemental damage as well as physical.  They break after \
enough uses, like other weapons.";
        }
        else if ( item.weapon_type == 6 ) {
            text = "\
(Dual Katanas) A matched pair of Asian swords that are meant to go together, wielded with one in each hand.  Like a single katana, Dual Katanas can be used with special attacks that use Spirit Focus (MP) and/or Tactical Points.  Dual Katanas can be \
wielded as a primary weapon by Samurai and Kensei class characters.  Some Dual Katanas are enchanted so that they do elemental damage as well as physical damage to targets in combat.  After being used a certain number of times in battle, they will \
break and need to be thrown out and replaced.";
        }
        else if ( item.weapon_type == 7 ) {
            text = "\
(Ninjato) A ninja's sword, the ninjato is much like a katana, but straight instead of curved.  A ninjato is simpler and easier to craft in some ways than a katana, making it less expensive.  Ninjatos won't do as much damage in combat as a katana will, \
but they can be used by a ninja wielding it to perform special attacks that cripple and weaken enemies in combat.  Ninjatos are meant mostly for ninja class characters, with few exceptions.  They normally do only physical damage, although some \
ninjatos are enchanted to magically do elemental damage as well, namely elemental fire, ice, lightning, or acid.  After being used a certain number of times, a ninjato will have a chance of breaking and needing to be replaced, just like any other \
primary weapon.";
        }
        else if ( item.weapon_type == 8 ) {
            text = "\
(Dual Ninjatos) A pair of ninja swords, Dual ninjatos have different special attacks compared to a single ninjato, but are otherwise two of the same weapon, in a matched pair that go together, taking up only one primary weapon slot.  Like a single \
ninjato, Dual ninjatos do physical damage, although some are enchanted to also do elemental damage of some type.  After being used a certain number of times, Dual ninjatos break, and need to be thrown out and replaced.";
        }
        else if ( item.weapon_type == 9 ) {
            text = "\
(Hand Axe) A small, sharp, one-handed axe that has a blade on one side.  It is designed for combat, not chopping wood, and is usually wielded in only one hand, which allows a shield to also be equipped.  Compared to swords, axes are heavy and much \
slower, which means that when used in combat a person wielding them might not attack as quickly and can end up attacking later in a turn instead of earlier.  They are also less accurate, and hitting a target with them isn't as easy as it is with a \
sword.  On the other hand, when they do strike a target they cut deeper than a sword, getting past armor a little better, and doing a little more damage than a sword would.  Like swords, most do physical damage, and there are also enchanted ones that \
do elemental damage as well.";
        }
        else if ( item.weapon_type == 10 ) {
            text = "\
(Battleaxe) A long, heavy, razor-sharp two-handed axe with blades on both sides of one end, forming a classic \"bat wings\" shape.  This weapon takes up both hands, not allowing a shield to be equipped.  Compared to swords, axes are heavy and much \
slower, which means that when used in combat a person wielding them might not attack as quickly and can end up attacking later in a turn instead of earlier.  They are also less accurate, and hitting a target with them isn't as easy as it is with a \
sword.  Although when they do strike a target they cut deeper than a sword, getting past armor a little better, and doing more damage than a sword would.  Like swords, most do physical damage, and there are also enchanted ones that also do elemental \
damage.";
        }
        else if ( item.weapon_type == 11 ) {
            text = "\
(Dual Hand Axes) A matched set of two hand axes, each one being a single-handed axe with a blade on one side of one end, designed for combat and cutting off body parts of people and monsters, not for chopping wood.  Compared to swords, axes are heavy \
and much slower, which means that when used in combat a person wielding them might not attack as quickly and can end up attacking later in a turn instead of earlier.  They are also less accurate, and hitting a target with them isn't as easy as it is \
with a sword.  On the other hand, when they do strike a target they cut deeper than a sword, getting past armor a little better, and doing a little more damage than a sword would.  Like swords, most do physical damage, and there are also enchanted \
ones that also do elemental damage.";
        }
        else if ( item.weapon_type == 12 ) {
            text = "\
(Assault Rifle) Assault rifles fire in single shots, bursts, and barrages, and do heavy damage to their targets.  They can attack multiple targets at once.  Equipping an assault rifle takes two hands to do, and as such a character wielding an assault \
rifle cannot equip a shield of any sort.  Assault rifles are the most damaging weapons of all standard firearms a Rifleman can equip and use.  They don't spread out their fire to attack multiple targets as easily as SMGs, but they do more \
damage.  Other characters of non-Rifleman class cannot use Assault rifles.  Common Assault rifles do plain physical damage, although some variants shoot enchanted rounds that do elemental wind or elemental earth damage.  Assault rifles can only be \
used so many times before they break.";
        }
        else if ( item.weapon_type == 13 ) {
            text = "\
(Grenades) Magical grenades are created as they are needed, using Magic Points to make them and send them flying at targets.  Grenades are usable by characters of the Rifleman, Martial Artist, and Ninja classes.  While being equip-able \
as primary weapons, they tend to wear out quickly before they break and no longer work, at which point they need to be replaced.  Very few weapons come close to lasting such a short amount of uses.";
            text = "\
(Grenades) Magical grenades are created as they are needed, using Magic Points to make them and send them flying at targets.  Fragmentation Grenades explode into shards of metal and other solid material, doing physical damage to enemies \
from these shards, physically ripping and shredding enemies, and actually not too much heat or thermal damage at all - They are not very fiery.  Magical Fragmentation Grenades are usable by characters of the Rifleman class.  While being equip-able \
as primary weapons, they tend to wear out quickly before they break and no longer work, at which point they need to be replaced.  Very few weapons come close to lasting such a short amount of uses.";
        }
        else if ( item.weapon_type == 14 ) {
            text = "\
(SMG) A quick-and-fast machine pistol that can fire many shots rapidly, in bursts as well as a classic \"lead hose\" type of attack.  Can attack multiple targets at once.  SMGs can easily be held and used with only one hand, allowing the \
individual wielding it to also equip a shield, or in some other way have their other hand free.  SMGs are not the most powerful firearms, but fare better in combat than backup weapons, such as pistols.  They are good at shooting many enemies at \
once.  SMGs can be used by Rifleman and Ninja character classes.  Regular SMGs do plain physical damage, although there are versions that are enchanted, which shoot bullets that do elemental wind or elemental earth damage.  Like many weapons, SMGS \
can only be used so many times before they break.";
        }
        else if ( item.weapon_type == 15 ) {
            text = "\
(Shotgun) A basic, run-of-the-mill \"boom stick\", pump-action shotguns are simplistic two-handed firearms that all characters can use.  While being considered a primary weapon, and thusly taking up a single primary weapon \
equipment slot, they are something of a fallback weapon that one can use if a preferred weapon specific to one's character class is broken or unavailable.  As such, they don't do as much damage to opponents as better weapons will, although they tend \
to be low-cost and commonly found in weapon stores.  Like all firearms, the damage they do doesn't vary depending on ability scores of the character wielding them. Like all weapons, they will wear out and break after being used a certain number of \
times, and then need to be thrown out and replaced.";
        }
        else if ( item.weapon_type == 16 ) {
            text = "\
(Magic Staff) A spellcaster's weapon, magic staves magically fire energy bolts of various types, and don't require any MP (Magic Points) to work.  A magic staff can fire bolts that do various types of damage, all from the same staff.  Plain damage \
concussion bolts build up TP (Tactical Points), while bolts that do elemental damage will use up small amounts of TP over time.  Like other weapons, a magic staff will eventually wear out and break after being used enough times, at which time it is \
then useless and needs to be thrown out and replaced.  A magic staff can be held and used with one hand, allowing the other hand to be free for some other purpose.  Note that a staff's pont-and-blast concussion bolts have a chance to stun targets.";
        }
    }
    else if ( item.atypeId ) {
        if ( item.armor_type == 1 ) {
            text = "\
(Broken Equipment Item) Your gear is broken.  Broken items cannot be fixed, and need to be de-equipped and replaced.  Did you get extras from the local town's merchants before you went off adventuring?  Nearly all items break after being used a \
certain number of times.  The number of times before this happens is randomized, so it isn't the same every time, although some items will tend to last longer than others.  Each use of a skill or special power that comes from equipping a piece of \
gear will generally bring that item closer to breaking, whether it means using up a magic wand, or a shield's protective aura to protect the adventuring party.  Shields will go quicker if the party has additional members, as each member uses up \
one use.";

            return text;
        }
        else if ( item.equip_type == 3 ) {
            if ( item.armor_type == 18 ) {
                text = "\
(Light Pistol) Light pistols are quick and easy to handle and use as a backup weapon, when something better isn't available.  They don't do much damage, and typically hit only one target at a time, although they are normally better than bare \
fists.  Most pistols do only plain physical damage, nothing more, nothing less.";
            }
            else if ( item.armor_type == 19 ) {
                text = "\
(Heavy Pistol) Heavy Pistols are heavy-duty backup weapons that can inflict more damage than light ones, and can fire bursts as well as single shots.  They penetrate a bit more than light pistols, though they cannot shoot magical elemental rounds \
like standard weapons sometimes can.";
            }
            else if ( item.armor_type == 20 ) {
                text = "\
(Minor Spellbook) A minor spellbook is a backup spellbook that is secondary to a spellcaster's primary book.  While it is not a proper replacement for one's main book, it does complement one's spells and magical skills by adding spells that use \
small amounts of Magic Points and moderate amounts of Tactical Points to cast, giving a spellcaster a good backup if they have Tactical Points left yet few Magic Points.  Spells from a minor spellbook are not the most powerful, but can be better than \
alternatives.  An equipped minor spellbook uses the backup weapon equipment slot.  Like other backup weapons, and primary weapons, minor spellbooks will wear out and break after being used enough times, so it is a good idea to have spares.";
            }
            else if ( item.armor_type == 21 ) {
                text = "\
(Magic Wand) Magic wands are backup weapons that can be used by many, including those who don't normally cast spells or use magic.  They have their own built-in magical power that they draw from when they are used, and their effectiveness and any \
damage they may do in combat has nothing to do with their user's Magic Points or magical ability scores or skill.  As such, they don't drain Magic Points when used, although they do require Tactical Points to work.  Magic wands only last a while, and \
then they break and need to be replaced.  While they are equipped and functional, they increase one's ability scores very slightly, with their own magic power.";
            }
            else if ( item.armor_type == 22 ) {
                text = "\
(Kaiken) The Kaiken, in short, is an Asian dagger, in this case with a chisel tip and a blade that is sharp on one side.  Useful as a backup weapon, kaikens are low-cost weapons that can be useful when primary weapons break or when usual combat skills \
and attacks aren't available for whatever reason.  Like primary and other weapons, after being used a certain number of times, a kaiken will break and need to be discarded.";
            }
            else if ( item.armor_type == 23 ) {
                text = "\
(Whip) A whip doesn't do as much damage as most primary weapons do in combat, but they can be used not only for a weaker standard attack, but also a debilitating attack that weakens an enemy, and an entangling attack that coils up and restrains an \
opponent so that they can't move or act for a short amount of time.  All whips will only do physical damage, even though some are more expensive than others and are sometimes built out of enchanted materials.  Whips will break after being used enough \
times.";
            }

            return text;
        }
        else if ( item.equip_type == 4 ) {
            if ( item.armor_type == 9 ) {
                text = "\
(Swordmaster's Book) A swordsman's book is his or her combat and training manual for fighting with a number of various western-style swords with the best efficiency and making the most of his or her abilities with such blades.  It is a handy reference \
to related skills, including sharpening and honing such weapons, using them against a variety of opponents including people and monsters, and other things he or she will encounter as a traveling swordsman, including how to heal, recover, and survive \
wounds, how to make a campfire in different types of terrain, where to find food and water, and more.  It is a complete adventuring manual, and every time a swordsman gets their hands on an updated version, they have new material to practice and \
train themselves with.";
            }
            else if ( item.armor_type == 10 ) {
                text = "\
(Axemaster's Book) A axemaster's book is his or her combat and training manual for fighting with a number of various axes and battleaxes with the best efficiency and making the most of his or her abilities with such blades.  It is a handy reference to \
related skills, including sharpening and honing such weapons, using them against a variety of opponents including people and monsters, and other things he or she will encounter as a traveling axemaster, including how to heal, recover, and survive \
wounds, how to make a campfire in different types of terrain, where to find food and water, and more.  It is a complete adventuring manual, and every time an axemaster gets their hands on an updated version, they have new material to practice and \
train themselves with.";
            }
            else if ( item.armor_type == 11 ) {
                text = "\
(Samurai's Book) A samurai's book is his or her combat and training manual for fighting with a number of various swords and spirit focus abilities with the best efficiency and making the most of his or her abilities with such powers.  It is a handy \
reference to related skills, including sharpening and honing such weapons, using them against a variety of opponents including people and monsters, and other things he or she will encounter as a traveling samurai, including how to heal, recover, and \
survive wounds, how to make a campfire in different types of terrain, where to find food and water, and more.  It is a complete adventuring manual, and every time an samurai gets their hands on an updated version, they have new material to practice \
and train themselves with.";
            }
            else if ( item.armor_type == 12 ) {
                text = "\
(Ninja's Handbook) A ninja's handbook contains many secrets, namely that of a ninja's ways and skills, and ninja magic that a ninja uses for various purposes. This book is a handy training and reference manual, as well as more than a list of spells a \
ninja can cast.  Ninja handbooks are not all the same, and when a ninja equips a more powerful book, they have more improved abilities, skills, and spells available.";
            }
            else if ( item.armor_type == 13 ) {
                text = "\
(Martial Artist's Book) A martial artist's book is a handy training and reference manual filled with all kinds of attacks, blocks, and other techniques for a wide variety of martial art fighting styles, as well as kata, fitness exercises, and \
more.  Also included are pages on diet and nutrition, general fitness, and health and well-being, as well as meditation and focusing one's spirit magic.  Pages on ethics and even philosophy are included.  Not all books of this type are the same, and \
when a martial artist gets their hands on a new book that is better than their old one, their skills and abilities improve.";
            }
            else if ( item.armor_type == 14 ) {
                text = "\
(Rifleman's Book) A rifleman's book is an encyclopedia and manual on guns and grenades of all kinds, as well as a handbook that contains chapters on how to make use of such weapons in the wilderness, how to use them against all of the many monsters \
that roam the countryside, bushcraft, survival and hunting methods, knowledge on what does and doesn't work in what situations as a traveling rifleman, how to survive and heal from injuries from different types of weapons, monsters, magics, and \
more, and how to clean, store, and maintain a rifleman's weapons and other gear safely and properly so that it lasts and has few issues, if any.  Also included is a bunch of diagrams on how to take apart and put back together various guns and \
grenades, etc.";
            }
            else if ( item.armor_type == 15 ) {
                text = "\
(Cleric's Holy Book) A cleric's holy book is a holy book for their religion, as well as a reference and guide for prayer and holy spells for them to cast.  A cleric's spells draw upon Magic Points, much like a mage or wizard, but unlike mages and \
wizards a cleric also draws upon the gods and goddesses of their religion, granting them their magical abilities and Magic Points along with the cleric's trust and authority invested in them to represent the values, ethics, and more of their gods, \
goddesses, and any other divine beings that they worship and pray to.  A cleric's divine being or beings expects them to read and study their holy book, and not lose it. Without their holy book, a cleric has few powers.";
            }
            else if ( item.armor_type == 16 ) {
                text = "\
(Combat Mages's Spellbook) A combat mage's spellbook is not only his or her spellbook filled with magic spells and how to cast them, as well as the many ins and outs of all the spells and what they are good for, and how to use them most effectively, \
but also a reference to how magic works in general and making the most of one's magical skills and natural ability for magic, along with what does and doesn't work with magic in life and why, and also ethics and what is proper versus taboo or outright \
forbidden in magic, as well as why.  A bit of philosophy is also included, as well as cultural and world histories, real and in folklore, on magic and all things arcane.  Picking up a new spellbook can give a mage equipping the spellbook better \
skills and spells.";
            }
            else if ( item.armor_type == 17 ) {
                text = "\
(Wizard's Spellbook) A wizard's spellbook is not only his or her spellbook filled with magic spells and how to cast them, as well as the many ins and outs of all the spells and what they are good for, and how to use them most effectively, but also a \
reference to how magic works in general and making the most of one's magical skills and natural ability for magic, along with what does and doesn't work with magic in life and why, and also ethics and what is proper versus taboo or outright forbidden \
in magic, as well as why.  A bit of philosophy is also included, as well as cultural and world histories, real and in folklore, on magic and all things arcane.  Picking up a new spellbook can give a wizard equipping the spellbook better skills and \
spells.";
            }
            else if ( item.armor_type == 24 ) {
                text = "\
(Kensei's Book) The Kensei is a legendary Asian swordfighter and warrior, one who is a master with any blade, one who can fight with any sword, with superhuman strength, speed, and endurance, if they are of Acrydia or one of the other nine worlds that \
make up the magical ten worlds that people and other life of Earth immigrated to thousands of years ago.  This book is of course not for sale in any store or from any merchant, who would never dare offer it for sale to the public, for just anyone to \
buy.  Needless to say, it is sacred, and what is in it's pages is also sacred, and private to it's rightful owner, the Kensei.";
            }

            return text;
        }
        else if ( item.equip_type == 5 ) {
            if ( item.armor_type == 5 ) {
                text = "\
(Light Shield) Light Shields boost all sorts of various stats by small amounts and percentages when equipped, most of which are related to health, guarding, and defense.  They cannot be equipped when either primary weapon carried is a matched pair, \
or a two-handed weapon.  In addition to passive protections, shields give one equipping them a special ability to magically create a protective force field that surrounds them and their companions in combat.  Using this ability enough times will \
eventually make the shield break, rendering it useless.  For this reason it is a good idea to have additional shields that one can re-equip with while away from any merchant and out on an adventure somewhere.";
            }
            else if ( item.armor_type == 6 ) {
                text = "\
(Medium Shield) Medium Shields boost all sorts of various stats by moderate amounts and percentages when equipped, most of which are related to health, guarding, and defense.  They cannot be equipped when either primary weapon carried is a matched pair, \
or a two-handed weapon.  In addition to passive protections, shields give one equipping them a special ability to magically create a protective force field that surrounds them and their companions in combat.  Using this ability enough times will \
eventually make the shield break, rendering it useless.  For this reason it is a good idea to have additional shields that one can re-equip with while away from any merchant and out on an adventure somewhere.";
            }
            else if ( item.armor_type == 7 ) {
                text = "\
(Heavy Shield) Heavy Shields boost all sorts of various stats by moderate amounts and percentages when equipped, most of which are related to health, guarding, and defense.  They cannot be equipped when either primary weapon carried is a matched pair, \
or a two-handed weapon.  In addition to passive protections, shields give one equipping them a special ability to magically create a protective force field that surrounds them and their companions in combat.  Using this ability enough times will \
eventually make the shield break, rendering it useless.  For this reason it is a good idea to have additional shields that one can re-equip with while away from any merchant and out on an adventure somewhere.";
            }
        }
        else if ( item.equip_type == 6 ) {
            if ( item.armor_type == 2 ) {
                text = "\
(Light Magic Armor Clothing) This enchanted belt is made with a magical cloth that has strips of interwoven material.  It is lightweight and flexible.  It increases defense, magical defense, luck, and HP, by tiny amounts.";
            }
            else if ( item.armor_type == 3 ) {
                text = "\
(Medium Magic Armor Clothing) This enchanted belt is made with magical fibers that have cords of interwoven material.  It is lightweight and somewhat flexible.  It increases defense, magical defense, luck, and HP, by small amounts.";
            }
            else if ( item.armor_type == 4 ) {
                text = "\
(Heavy Magic Armor Clothing) This enchanted belt is made with magical armored plates on top of leather, that have cords of interwoven material.  It is heavy and somewhat inflexible.  It increases defense, magical defense, luck, and HP, by moderate \
amounts.";
            }
        }
        else if ( item.equip_type == 7 ) {
            if ( item.armor_type == 2 ) {
                text = "\
(Light Magic Armor Clothing) This stylish wristband is made of cloth, yet not quite the athletic kind meant for tennis.  It magically adds to one's defense and Health Points.";
            }
            else if ( item.armor_type == 3 ) {
                text = "\
(Medium Magic Armor Clothing) This stylish wristband is made of magical fibers, yet not quite the athletic kind meant for tennis.  It magically adds to one's defense and Health Points.";
            }
            else if ( item.armor_type == 4 ) {
                text = "\
(Heavy Magic Armor Clothing) This stylish wristband covers a good amount of the forearm, and is made of magical leather and padded armor plates, and definitely not the athletic kind meant for tennis.  It magically adds to one's defense and Health \
Points, and allows one to evade attack a little more easily.";
            }
        }
        else if ( item.equip_type == 8 ) {
            if ( item.armor_type == 2 ) {
                text = "\
(Light Magic Armor Clothing) This fingerless glove is made out of thin magical cloth.  By a slight amount, it magically increases defense and magical defense scores, as well as boosting the Health Points of one who wears it.";
            }
            else if ( item.armor_type == 3 ) {
                text = "\
(Medium Magic Armor Clothing) This fingerless glove is made out of thin magical leather.  By a moderate amount, it magically increases defense and magical defense scores, as well as boosting the Health Points of one who wears it.";
            }
            else if ( item.armor_type == 4 ) {
                text = "\
(Heavy Magic Armor Clothing) This fingerless glove is made out of thick magical leather, with padding and armor plates.  By a substantial amount, it magically increases defense and magical defense scores, as well as boosting the Health Points of one \
who wears it.";
            }
        }
        else if ( item.equip_type == 9 ) {
            if ( item.armor_type == 2 ) {
                text = "\
(Light Magic Armor Clothing) Magic Armor socks provide a little extra protection from physical damage.  Being magical, they allow one wearing them to take more damage before being defeated in combat, which translates into a boost to maximum Health \
Points.";
            }
            else if ( item.armor_type == 3 ) {
                text = "\
(Medium Magic Armor Clothing) Magic Armor socks provide a little extra protection from physical damage.  Being magical, they allow one wearing them to take more damage before being defeated in combat, which translates into a boost to maximum Health \
Points.";
            }
            else if ( item.armor_type == 4 ) {
                text = "\
(Heavy Magic Armor Clothing) Magic Armor socks provide a little extra protection from physical damage.  Being magical, they allow one wearing them to take more damage before being defeated in combat, which translates into a boost to maximum Health \
Points.";
            }
        }
        else if ( item.equip_type == 10 ) {
            if ( item.armor_type == 2 ) {
                text = "\
(Light Magic Armor Clothing) Armored Combat Sneakers protect the wearer by increasing their overall physical defense score, as well as increasing the amount of overall injury and abuse they can tolerate before being defeated, which is reflected in a \
gain to the maximum number of Health Points they can have.  Other than that, there isn't much else to these sneakers.  Armored Combat Sneakers are generally mil-spec, yet sold to the general public for those who go traveling or hunting and potentially \
run into wandering monsters and more.  Most vendors who sell magic armor clothing offer them, and don't typically require any background check for those who wish to purchase them.";
            }
            else if ( item.armor_type == 3 ) {
                text = "\
(Medium Magic Armor Clothing) Armored Combat Sneakers protect the wearer by increasing their overall physical defense score, as well as increasing the amount of overall injury and abuse they can tolerate before being defeated, which is reflected in a \
gain to the maximum number of Health Points they can have.  Other than that, there isn't much else to these sneakers.  Armored Combat Sneakers are generally mil-spec, yet sold to the general public for those who go traveling or hunting and potentially \
run into wandering monsters and more.  Most vendors who sell magic armor clothing offer them, and don't typically require any background check for those who wish to purchase them.";
            }
            else if ( item.armor_type == 4 ) {
                text = "\
(Heavy Magic Armor Clothing) Armored Combat Sneakers protect the wearer by increasing their overall physical defense score, as well as increasing the amount of overall injury and abuse they can tolerate before being defeated, which is reflected in a \
gain to the maximum number of Health Points they can have.  Other than that, there isn't much else to these sneakers.  Armored Combat Sneakers are generally mil-spec, yet sold to the general public for those who go traveling or hunting and potentially \
run into wandering monsters and more.  Most vendors who sell magic armor clothing offer them, and don't typically require any background check for those who wish to purchase them.";
            }
        }
        else if ( item.equip_type == 11 ) {
            if ( item.armor_type == 2 ) {
                text = "\
(Light Magic Armor Clothing) This necklace doesn't appear to be much more than a coiled cord of cloth, but is magically enchanted to enhance and increase Health Points and defense-related ability scores, protecting one who wears it.  Among magical \
armor clothing, it is classified as light armor, which allows characters of many classes to wear it.  It won't protect as well as more heavy-duty magical armor clothing items will, however, such as medium or heavy armor jewelry, but it will protect \
a person or being who wears it more than what they would have with nothing.";
            }
            else if ( item.armor_type == 3 ) {
                text = "\
(Medium Magic Armor Clothing) This necklace is a cord made of enchanted fibers, woven together to be long and durable, with magic beads along all of it.  It will increase Health Points and defense-related attributes of anyone who wears it.  It is \
categorized as medium magical armor clothing, and protects better than light-grade but not as much as heavy.  It can be worn by characters of various classes that can equip medium magic armor, though not those restricted to light or no armor, such as \
some spellcasters.  Warrior classes however are better off investing in heavy magic armor clothing, if they can wear such.  Results vary.  Like most magic armor clothing items, it also comes in different levels, independent of being light, medium, or \
heavy armor.";
            }
            else if ( item.armor_type == 4 ) {
                text = "\
(Heavy Magic Armor Clothing) This necklace is made up of enchanted heavy-duty chain links, interlocking, flexible, and ornamental as much jewelry is, while at the same time being tough and rugged to the point where it would be just fine after driving \
a heavy battletank over it.  Being enchanted, it doesn't weigh too much, it isn't noisy, and it isn't uncomfortable to wear for long periods of time at all.  When worn, it increases one's maximum Health Points and defense-related ability scores in \
ways that protect the wearer from mundane and non-mundane damage and harm of sorts.  Being categorized as heavy magic armor clothing, it cannot be worn by characters of just any class, as only certain classes may equip it, primarily certain \
Warrior classes.";
            }
        }
        else if ( item.equip_type == 12 ) {
            if ( item.name.includes("Attacker's Bracelet") == true ) {
                if ( item.name.includes("Poison") == true ) {
                    text = "\
(Enchanted Bracelet) This magical bracelet enhances strength and agility scores, makes targets easier to hit, and increases chances of critical hits.  In addition, enemies hurt in combat have a chance to suffer bleeding and-or be stunned for one or \
more turns, a small random chance determined with every successful hit from a normal attack from any weapon or melee attack.  Also, enemies hurt from an attack by someone wearing this version of the magical bracelet risk a chance to be poisoned, with \
every attack that hits.";
                }
                else if ( item.name.includes("Acid") == true ) {
                    text = "\
(Enchanted Bracelet) This magical bracelet enhances strength and agility scores, makes targets easier to hit, and increases chances of critical hits.  In addition, enemies hurt in combat have a chance to suffer bleeding and-or be stunned for one or \
more turns, a small random chance determined with every successful hit from a normal attack from any weapon or melee attack.  Also, enemies hurt from an attack by someone wearing this version of the magical bracelet risk a chance to suffer acid \
burns, with every attack that hits.";
                }
                else
                    text = "\
(Enchanted Bracelet) This magical bracelet enhances strength and agility scores, makes targets easier to hit, and increases chances of critical hits.  In addition, enemies hurt in combat have a chance to suffer bleeding and-or be stunned for one or \
more turns, a small random chance determined with every successful hit from a normal attack from any weapon or melee attack.";
            }
            else if ( item.name.includes("Defender's Bracelet") == true ) {
                text = "\
(Enchanted Bracelet) A magic bracelet that increases one's defenses a bit, mostly against physical attack, and also somewhat prevents curses and debuffs of various sorts from lowering the wearer's defenses.";
            }
            else if ( item.name.includes("Spellcaster's Bracelet") == true ) {
                text = "\
(Enchanted Bracelet) A magical bracelet designed for spellcasters of many kinds, including Wizards and Combat Mages, as well as Clerics.  It increases the wearer's magical attack score of course, and also grants a few additional maximum Health Points \
to help out with the fact that many spellcasters can't wear very good armor and can be easy targets.  It has a few additional abilities as well, including a camouflage effect so that the wearer isn't targeted as often.";
            }
            else if ( item.name.includes("Ninja Bracelet") == true ) {
                text = "\
(Enchanted Bracelet) Originally designed for ninjas who infiltrate places and have to resist and otherwise deal with tricks and traps, as well as being captured and so on, a Ninja Bracelet boosts agility and one's defenses a bit, including defenses \
against magic and various effects from poisons and curses, as well as being stunned or debilitated.  Ninjas benefit from this bracelet by getting a boost to their ninja magic when equipping it.  Also, when making normal melee attacks, there is a \
small chance of the target getting cursed with Enfeeblement.";
            }
            else if ( item.name.includes("Constitution Bracelet") == true ) {
                text = "\
(Enchanted Bracelet) This bracelet boosts one's health and resistance against poison, but especially boosts one's maximum Health Points, and by a good number of them.";
            }
            else if ( item.name.includes("Sound Mind Bracelet") == true ) {
                text = "\
(Enchanted Bracelet) A magic bracelet that protects one's mind and sanity, and also promotes lucid, clear thinking to the point where it increases intelligence a little, along with one's learning rate.  It provides resistance to all sorts of mental \
attack, mind and brain-related curses, and anything that can hurt one's thinking ability, mental clarity, intelligence, or sanity.  Experience point gain rate is increased a little to reflect the increased learning rate.  Magic Points and magical \
attack and defense scores are also a little bit improved, as this bracelet allows one's magical gifts to work a little more easily.";
            }
        }
        else if ( item.equip_type == 13 ) {
            text = "\
(Magical Accessory)  This is a single, small and discrete earring, nothing large or too flashy, but a small shiny dot, without any part that hangs when worn.  It won't fall off or come loose very easily, rip out, cause scarring or injury, get knocked \
off or pull out by accident very easily, or get in the way.  One can be athletic, run, jump, and swordfight nasty monsters without fear of it coming off or coming loose, thanks to it's enhanced magical design and high-tech enchantments.  This \
specific magic earring in fact appears to be one of the better and more sophisticated premier models, with some of the latest in enchantments that magic earrings can have.  Nothing cheap about it, so take care of it or sell it for a good amount of \
money.";
        }
        else if ( item.equip_type == 14 ) {
            if ( item.name.includes("Fire") == true ) {
                text = "\
(Ring) Fire-proofing Rings make those who wear them partially or completely immune to fire and magical fire of any type.  They also grant the user an ability to shoot a bolt of fire in combat.";
            }
            else if ( item.name.includes("Ice") == true ) {
                text = "\
(Ring) Ice Rings make those who wear them partially or completely immune to ice attacks and magical ice of any type.  They also grant the user an ability to shoot a bolt of ice in combat.";
            }
            else if ( item.name.includes("Lightning") == true ) {
                text = "\
(Ring) Lightning Rings make those who wear them partially or completely immune to electrical attacks and magical lightning of any type.  They also grant the user an ability to shoot a bolt of lightning in combat.";
            }
            else if ( item.name.includes("Metal") == true ) {
                text = "\
(Ring) Metal Rings make those who wear them partially or completely immune to metal attacks and magical metal of any type.  They also grant the user an ability to shoot a bolt of metal in combat.";
            }
            else if ( item.name.includes("Acid") == true ) {
                text = "\
(Ring) Acid Rings make those who wear them partially or completely immune to ice attacks and magical ice of any type.  They also grant the user an ability to shoot a bolt of acid in combat.";
            }
            else if ( item.name.includes("Health") == true ) {
                text = "\
(Ring) A Health Ring increases the maximum HP (Health Points) a character can have.  It also grants an ability to heal HP by spending TP.";
            }
            else if ( item.name.includes("Magic Deflection") == true ) {
                text = "\
(Ring) Magic Deflection Rings add or increase chances to evade an enemy's magical attack, and also provide a chance to reflect magic attacks back at the caster.";
            }
            else if ( item.name.includes("Tactician's") == true ) {
                text = "\
(Ring) A Tactician's Ring increases the rate at which TP (Tactical Points) and EXP (Experience Points) are gained, allowing the person wearing it to prepare for using special skills in combat faster and level up more rapidly.";
            }
            else if ( item.name.includes("Magic Affinity") == true ) {
                text = "\
(Ring) Magic Affinity Rings reduce the MP (Magic Point) cost of all of a character's skills by a certain percentage, and also increase the maximum number of MP a character can have available at any time.";
            }
            else if ( item.name.includes("Warrior's") == true ) {
                text = "\
(Ring) A Warrior's Ring increases physical attack and defense scores when worn.  It also grants an ability that fires a bolt of energy, spending TP, that does damage based upon one's attack instead of magical attack score.";
            }
            else if ( item.name.includes("Spellcaster's") == true ) {
                text = "\
(Ring) A Spellcaster's Ring increases magical attack and magical defense scores, physical defense to protect spellcasters, and maximum Magic Points.  It also grants a special ability that uses Tactical Points to shoot a mana bolt at a single target, \
no MP required.";
            }
            else if ( item.name.includes("Multi-Elemental") == true ) {
                text = "\
(Ring) Multi-Elemental Rings provide resistances to magical elements, fire, ice, lightning, and to some degree acid.  They also boost HP, luck, and magical defense scores a little.";
            }
            else if ( item.name.includes("Nature") == true ) {
                text = "\
(Ring) Nature Rings provide reduced damage from holy and unholy water, earth, wind, and darkness attacks, as well as some resistance to acid.";
            }
        }
        else if ( item.equip_type == 15 ) {
            if ( item.name.includes("Rune") == true ) {
                if ( item.name.includes("Adamantine") == true ) {
                    text = "\
(Arcane Rune) When equipped, this rune makes a character tougher and less breakable, less easily injured, able to take more damage while suffering less than usual from various types of mundane and magical damage and attacks, and less prone to being \
weakened or debilitated by a number of different things.  It also makes incoming attacks do fewer critical hits.  Incoming attacks that stun, poison, and debuff certain ability scores will be less likely to successfully work.";
                }
                else if ( item.name.includes("Vigor") == true ) {
                    text = "\
(Arcane Rune) When equipped, this rune bestows physical energy and might upon a character, making most physical and melee attacks do much more damage than they would do otherwise.  It also makes the character attack faster, but with the same accuracy \
and without being reckless, which results in the character sometimes getting more actions in a combat turn.  This rune also grants and/or increases the chance of making a counterattack when attacked by an opponent's attack.";
                }
                else if ( item.name.includes("Exactitude") == true ) {
                    text = "\
(Arcane Rune) When equipped, this rune makes physical attacks more likely to successfully score a hit instead of missing.  Other than also making the character equipping it completely immune to being infected with poison that induces clumsiness, \
this rune doesn't do much else.";
                }
                else if ( item.name.includes("Prudence") == true ) {
                    text = "\
(Arcane Rune) When equipped, an arcane magic rune of Prudence enhances a character's abilities related to Tactical Points.  The rune's powers increase the rate at which Tactical Points are gained, and also increases the maximum number of Tactical \
Points a character can have.  It also increases the character's learning rate by increasing their Experience Point gain rate.";
                }
                else if ( item.name.includes("Cognizance") == true ) {
                    text = "\
(Arcane Rune) When equipped, this magic rune will enhance a character's mind and innate natural magic gifts that they and all who are of the ten magical worlds were born with, from plants and animals of all sorts to people who are distant relatives \
to ancestors who came from the world of planet Earth.  All magical abilities are enhanced, as well as the character's Experience Point gain rate, thanks to an increased learning rate and a more clear-thinking mind.";
                }
            }
        }
    }
    else if ( item.itypeId ) {
        return item.description;
    }

    return text;
};
TJS.prototype.GetInfo2 = function(item) {
    let text = "";

    if ( item.wtypeId ) {
        if ( item.weapon_type == 1 ) {
            text = "";
        }
        else if ( item.weapon_type == 2 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "\
    Longswords don't typically require or use any Magic Points from a character's spirit to operate.  Basic attacks don't cost any Tactical Points either, and do damage based upon one's strength score and the level of the sword.\\LB\
    Longswords are very fast compared to other melee weapons, and do a decent amount of damage by comparison.  They increase a character's maximum Tactical Points by a really good amount when equipped.  They add more to Tactical Points than dual \
longswords, and also substantially increase the rate at which Tactical Points are gained and recovered.  The only melee weapons that do these things better would be two-handed swords, although longswords allow for a shield to be equipped while \
two-handed swords do not.\\LB\
    Melee weapons and other types of items have levels, and versions of an item with a higher level are more expensive when purchased from a merchant but do more damage when wielded by a character with the same starting strength score.  Different \
level versions of a weapon or other item have associated materials that are in the name of the item, such as \"iron\" or \"glass\" or \"marble\" for example, which refer to reagents used and consumed during the artificing process to enchant and create \
such items, which are typically magical.  As an example, a \"glass sword\" doesn't actually have a blade made of glass, but instead a metal blade, and glass was prepared and used during the enchantment process to make the magic sword and give the \
sword it's qualities.\\LB\
    Many items, especially weapons, grant skills that a character can use when they equip the item.  Some skills can be used only during combat, some only outside of combat, and either one can apply for other skills.  Almost all items that grant \
skills will eventually break after skills it grants are used enough times, so using a special sword attack that equipping a longsword grants will eventually wear out the sword.  Helpful hint: Keep spares.\\LB\
    In the event that two items grant the same skill, using that skill wears down the item that first appears closest to the top of all of the equipment slots for the character.\\LB\
    Note that some items will last a long time, while other items will break after their skills are used only a few times.  (Magic wands, for example, are notorious for being very perishable and breaking rather quickly.)";
        }
        else if ( item.weapon_type == 3 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            text = "";
        }
        else if ( item.weapon_type == 4 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            text = "";
        }
        else if ( item.weapon_type == 5 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            text = "";
        }
        else if ( item.weapon_type == 6 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            text = "";
        }
        else if ( item.weapon_type == 7 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            text = "";
        }
        else if ( item.weapon_type == 8 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            text = "";
        }
        else if ( item.weapon_type == 9 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            text = "";
        }
        else if ( item.weapon_type == 10 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            text = "";
        }
        else if ( item.weapon_type == 11 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            text = "";
        }
        else if ( item.weapon_type == 12 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            if ( item.special == TJS_SPECIAL_WIND ) text = "";
            if ( item.special == TJS_SPECIAL_EARTH ) text = "";
            if ( item.special == TJS_SPECIAL_ANTIMAGICAL ) text = "";
            if ( item.special == TJS_SPECIAL_POWER ) text = "";
        }
        else if ( item.weapon_type == 13 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "\
Fragmentation Grenades explode into shards of metal and other solid material, doing physical damage to enemies from these shards, physically ripping and shredding enemies, and actually not too much heat or thermal damage at all - They are not \
very fiery.";
            else if ( item.special == TJS_SPECIAL_FIRE ) text = "\
Fire Grenades explode into shards of material combined with heat and flames that shred, melt, and burn enemy targets. They do a combination of physical and fire damage.";
            else if ( item.special == TJS_SPECIAL_ICE ) text = "";
            else if ( item.special == TJS_SPECIAL_LIGHTNING ) text = "";
            else if ( item.special == TJS_SPECIAL_ACID ) text = "\
Acid Gas Grenades, upon hitting their target, explode into gas of elemental acid nature that is very caustic, creating lasting acid burns which continue to do more damage to their targets in following turns.  They are deadly.  After a certain number \
of turns, any induced acid burns will stop harming their target.  Although they do lasting damage for a few turns, Acid Gas grenades do less initial damage compared to other direct-damage grenades, such as Fragmentation grenades.  By comparison, they \
do about the same comparable total damage spread out over time, give or take.";
            else if ( item.special == TJS_SPECIAL_STUNNING ) text = "\
Stun grenades debilitate enemies by lowering certain ability scores for a couple of turns, and can stun targets for about 1 to 3 turns so they cannot act.  They do no damage.";
            else if ( item.special == TJS_SPECIAL_ANTIMAGICAL ) text = "";
        }
        else if ( item.weapon_type == 14 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            if ( item.special == TJS_SPECIAL_WIND ) text = "";
            if ( item.special == TJS_SPECIAL_EARTH ) text = "";
            if ( item.special == TJS_SPECIAL_ANTIMAGICAL ) text = "";
            if ( item.special == TJS_SPECIAL_POWER ) text = "";
        }
        else if ( item.weapon_type == 15 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            if ( item.special == TJS_SPECIAL_WIND ) text = "";
            if ( item.special == TJS_SPECIAL_EARTH ) text = "";
            if ( item.special == TJS_SPECIAL_ANTIMAGICAL ) text = "";
            if ( item.special == TJS_SPECIAL_POWER ) text = "";
        }
        else if ( item.weapon_type == 16 ) {
            if ( item.special == TJS_SPECIAL_NORMAL ) text = "";
            text = "";
        }
    }
    else if ( item.atypeId ) {
        if ( item.equip_type == 13 ) {
            if ( item.name.includes("Magic Constitution") == true ) {
                text = "";
            }
            else if ( item.name.includes("Defended Spirit") == true ) {
                text = "";
            }
            else if ( item.name.includes("Fighting Spirit") == true ) {
                text = "";
            }
            else if ( item.name.includes("Earring of the Wise") == true ) {
                text = "";
            }
            else if ( item.name.includes("Earring of the Elements") == true ) {
                text = "";
            }
            else if ( item.name.includes("Earring of the Warrior") == true ) {
                text = "";
            }
        }
        else if ( (item.equip_type == 15) && (item.name.includes("Rune") == true) ) {
            text = "\
    Arcane runes are very special magic accessories that provide various protections and/or enhancements to a character that has the rune equipped.  Only one rune or accessory can be equipped at a time.\LB\
    Runes can be overcharged.  When a rune is overcharged in the midst of combat, the effects will last until the battle is over.  If a rune is overcharged outside of combat on the Skills screen, this places an effect on one or more characters ahead \
of a battle, which then expire at the end of the next battle.  There are two ways a rune can be overcharged, one which affects only the owner of the rune if it is equipped, and the other method which affects the entire party.  Using the rune on only \
themself creates a more potent effect.  Note that using the rune on the whole party counts as multiple uses towards the limit of however many times the rune may be used before it breaks.\LB\
    Runes are worth a good amount of money, and most merchants will pay a decent amount for an unwanted rune.  Most merchants will however not offer runes for sale in their shops, as arcane runes are rather rare and hard to come by.\LB\
    Runes are designed and crafted by the natives of the ten magical worlds, known as The Architects, who made such artifacts before the coming of humans and other Earth-origin life from planet Earth thousands of years ago before your adventure \
started.  Runes were around before the ten worlds became terraformed to accept people and other life of Earth, and after such Earth-origin life moved in and settled in the ten worlds, and became enchanted by the natives to have magic generated by \
their living spirits, such life of the world of planet Earth found that their new magical natures were compatible with the magic of arcane runes, among other things, while still retaining the mundane sides of themselves which flourished and thrived \
in the ten worlds thanks to the skills and accomplishments of The Architects that welcomed this life from Earth.";
        }
    }
    else if ( item.itypeId ) {
        text = item.description2;
    }

    return text;
};
// Plugin commands
TJS.prototype.registerPluginCommands = function() {
	PluginManager.registerCommand("TJS", "Get Cost to Heal", this.pluginCommand_GetCostToHeal);

	PluginManager.registerCommand("TJS", "Clear Chests", this.pluginCommand_ClearContentsOfTreasureChests);
	PluginManager.registerCommand("TJS", "Loot Chest", this.pluginCommand_LootChest);
	PluginManager.registerCommand("TJS", "Loot Chest One Item", this.pluginCommand_LootChestOneItem);
	PluginManager.registerCommand("TJS", "Stock Chest Items", this.pluginCommand_AddItemsToTreasureChest);
	PluginManager.registerCommand("TJS", "Stock Chest Weapons", this.pluginCommand_AddWeaponsToTreasureChest);
	PluginManager.registerCommand("TJS", "Stock Chest Armors", this.pluginCommand_AddArmorsToTreasureChest);
	PluginManager.registerCommand("TJS", "Stock Chest Cash", this.pluginCommand_AddCashToTreasureChest);

	PluginManager.registerCommand("TJS", "Place Vehicle", this.pluginCommand_SetVehicleLocation);
	PluginManager.registerCommand("TJS", "Return To Vehicle", this.pluginCommand_ReturnToVehicle);
	PluginManager.registerCommand("TJS", "Go To Vehicle Interior", this.pluginCommand_GoToVehicleInterior);
};
TJS.prototype.pluginCommand_ClearContentsOfTreasureChests = function(args) {
    for (let i = 0; i < tjs_number_of_random_chests; i++) {
        tjs_Chest[i].Clear();
    }

    tjs_TotalChest.Clear();
};
TJS.prototype.pluginCommand_AddItemsToTreasureChest = function(args) {
    const chestIndex = Number(args.ChestIndex);
    const itmCounts = JSON.parse( args.ItemCount );
    const itmChances = JSON.parse( args.ItemChance );
    const itmIds = JSON.parse( args.ItemId );
    const item_level_base = (Number(args.ItemLevel)).clamp( 1, 20 ); // 20 is number of temporary variables, should be 20 regardless of value of tjs_max_item_levels.
    const item_level = ($gameSystem.treasure_chest_level + $gameVariables.value(item_level_base)).clamp( 1, tjs_max_item_levels );
    const numberItems = Math.min( itmCounts.length, itmChances.length, itmIds.length );
    if ( numberItems < 1 ) return;
    if ( chestIndex < 0 ) return;
    if ( chestIndex >= tjs_number_of_random_chests ) return;

    for (let i = 0; i < numberItems; i++) {
        tjs_Chest[chestIndex].AddItem( Number(itmCounts[i]), Number(itmChances[i]), Number(itmIds[i]), item_level );
    }
};
TJS.prototype.pluginCommand_AddWeaponsToTreasureChest = function(args) {
    const chestIndex = Number(args.ChestIndex);
    const itmCounts = JSON.parse( args.ItemCount );
    const itmChances = JSON.parse( args.ItemChance );
    const itmIds = JSON.parse( args.ItemId );
    const item_level_base = (Number(args.ItemLevel)).clamp( 1, 20 ); // 20 is number of temporary variables, should be 20 regardless of value of tjs_max_item_levels.
    const item_level = ($gameSystem.treasure_chest_level + $gameVariables.value(item_level_base)).clamp( 1, tjs_max_item_levels );
    const numberItems = Math.min( itmCounts.length, itmChances.length, itmIds.length );
    if ( numberItems < 1 ) return;
    if ( chestIndex < 0 ) return;
    if ( chestIndex >= tjs_number_of_random_chests ) return;

    for (let i = 0; i < numberItems; i++) {
        tjs_Chest[chestIndex].AddWeapon( Number(itmCounts[i]), Number(itmChances[i]), Number(itmIds[i]), item_level );
    }
};
TJS.prototype.pluginCommand_AddArmorsToTreasureChest = function(args) {
    const chestIndex = Number(args.ChestIndex);
    const itmCounts = JSON.parse( args.ItemCount );
    const itmChances = JSON.parse( args.ItemChance );
    const itmIds = JSON.parse( args.ItemId );
    const item_level_base = (Number(args.ItemLevel)).clamp( 1, 20 ); // 20 is number of temporary variables, should be 20 regardless of value of tjs_max_item_levels.
    const item_level = ($gameSystem.treasure_chest_level + $gameVariables.value(item_level_base)).clamp( 1, tjs_max_item_levels );
    const numberItems = Math.min( itmCounts.length, itmChances.length, itmIds.length );
    if ( numberItems < 1 ) return;
    if ( chestIndex < 0 ) return;
    if ( chestIndex >= tjs_number_of_random_chests ) return;

    for (let i = 0; i < numberItems; i++) {
        tjs_Chest[chestIndex].AddArmor( Number(itmCounts[i]), Number(itmChances[i]), Number(itmIds[i]), item_level );
    }
};
TJS.prototype.pluginCommand_AddCashToTreasureChest = function(args) {
    const chestIndex = Number(args.ChestIndex);
    const cash_chance = Number(args.CashChance);
    const cash_min = Number(args.CashMin);
    const cash_max = Number(args.CashMax);
    const item_level_base = (Number(args.ItemLevel)).clamp( 1, 20 ); // 20 is number of temporary variables, should be 20 regardless of value of tjs_max_item_levels.
    const item_level = ($gameSystem.treasure_chest_level + $gameVariables.value(item_level_base)).clamp( 1, tjs_max_item_levels );

    tjs_Chest[chestIndex].AddCash( cash_chance, cash_min, cash_max, item_level );
};
TJS.prototype.pluginCommand_LootChest = function(args) {
    const chestIndex = Math.round(Math.random() * Number(args.ChestIndexMax));
    const chestName = args.ChestName;
    const silent_if_empty = JSON.parse( args.SilentIfEmpty );
    const chance_multiplier = (Number( args.ChanceMultiplier ) * 0.01).clamp( 0, 100 );

    tjs_Chest[chestIndex].Loot(chance_multiplier);
    const totalItems = tjs_Chest[chestIndex].LootSizeItems();
    const totalWeapons = tjs_Chest[chestIndex].LootSizeWeapons();
    const totalArmors = tjs_Chest[chestIndex].LootSizeArmors();
    const totalLoot = tjs_Chest[chestIndex].LootSize();
    const cash = tjs_Chest[chestIndex].cash;
    var msgItems = "";

    if ( totalItems > 0 ) {
        msgItems += "You find: ";
        for (let i = 0; i < totalItems; i++ ) {
            const item = $dataItems[tjs_Chest[chestIndex].loot_id[i]] ? $dataItems[tjs_Chest[chestIndex].loot_id[i]] : 0;
            if ( item == 0 ) continue;

            $gameParty.gainItem( item, tjs_Chest[chestIndex].loot_count[i] );
            const i_reduced = i / 6;
            const msg_line = Math.floor( i_reduced );
            if ( (i_reduced == msg_line) && (msg_line > 0) ) msgItems += "\\LB          ";
            msgItems += ( String(tjs_Chest[chestIndex].loot_count[i]) + "x " + String( item.name ) );
            if ( i < (totalItems - 1) ) msgItems += ", ";
        }
        msgItems += ".";
        if ( (totalWeapons > 0) || (totalArmors > 0) || (cash > 0) ) msgItems += "\\LB";
    }
    if ( totalWeapons > 0 ) {
        msgItems += "You find: ";
        for (let i = 0; i < totalWeapons; i++ ) {
            const item = $dataWeapons[tjs_Chest[chestIndex].loot_id_w[i]] ? $dataWeapons[tjs_Chest[chestIndex].loot_id_w[i]] : 0;
            if ( item == 0 ) continue;

            $gameParty.gainItem( item, tjs_Chest[chestIndex].loot_count_w[i] );
            const i_reduced = i / 6;
            const msg_line = Math.floor( i_reduced );
            if ( (i_reduced == msg_line) && (msg_line > 0) ) msgItems += "\\LB          ";
            msgItems += ( String(tjs_Chest[chestIndex].loot_count_w[i]) + 'x ' + String( item.name ) );
            if ( i < (totalWeapons - 1) ) msgItems += ", ";
        }
        msgItems += ".";
        if ( (totalArmors > 0) || (cash > 0) ) msgItems += "\\LB";
    }
    if ( totalArmors > 0 ) {
        msgItems += "You find: ";
        for (let i = 0; i < totalArmors; i++ ) {
            const item = $dataArmors[tjs_Chest[chestIndex].loot_id_a[i]] ? $dataArmors[tjs_Chest[chestIndex].loot_id_a[i]] : 0;
            if ( item == 0 ) continue;

            $gameParty.gainItem( item, tjs_Chest[chestIndex].loot_count_a[i] );
            const i_reduced = i / 6;
            const msg_line = Math.floor( i_reduced );
            if ( (i_reduced == msg_line) && (msg_line > 0) ) msgItems += "\\LB          ";
            msgItems += ( String(tjs_Chest[chestIndex].loot_count_a[i]) + 'x ' + String( item.name ) );
            if ( i < (totalArmors - 1) ) msgItems += ", ";
        }
        msgItems += ".";
        if ( cash > 0 ) msgItems += "\\LB";
    }
    if ( cash > 0 ) {
        msgItems += "You find: " + cash.toLocaleString() + " GP.";

        $gameParty.gainGold( cash );
    }

    $gameMessage.setBackground(0);
    $gameMessage.setPositionType(2);
    if ( chestName ) $gameMessage.setSpeakerName( chestName );

    if ( totalLoot > 0 ) {
        $gameMessage.add( msgItems );

        Game_Interpreter.prototype.setWaitMode.call(this, 'message');
    }
    else if ( silent_if_empty == false ) {
        $gameMessage.add( "Empty!" );

        Game_Interpreter.prototype.setWaitMode.call(this, 'message');
    }

    tjs_Chest[chestIndex].Empty();
};
TJS.prototype.pluginCommand_LootChestOneItem = function(args) {
    const chestIndexMin = Number( args.ChestIndexMin );
    const chestIndexMax = Number( args.ChestIndexMax );
    const chest_name = args.ChestName;
    const pick_count = Number( args.PickCount );
    const silent_if_empty = JSON.parse( args.SilentIfEmpty );

    for ( let i = chestIndexMin; i <= chestIndexMax; i++ )
        tjs_Chest[i].Empty();

    tjs_TotalChest.Empty();

    for ( let i = 0; i < pick_count; i++ ) {
        const chestIndex = Math.round(Math.random() * (chestIndexMax - chestIndexMin)) + chestIndexMin;

        tjs_Chest[chestIndex].Loot_OneRandomItem();
        tjs_TotalChest.CopyLootFromOther( tjs_Chest[chestIndex] );
        tjs_Chest[chestIndex].Empty();
    }

    const totalItems = tjs_TotalChest.LootSizeItems();
    const totalWeapons = tjs_TotalChest.LootSizeWeapons();
    const totalArmors = tjs_TotalChest.LootSizeArmors();
    const totalLoot = tjs_TotalChest.LootSize();
    var msgItems = "";

    if ( totalItems > 0 ) {
        msgItems += "You find: ";
        for (let i = 0; i < totalItems; i++ ) {
            const item = $dataItems[tjs_TotalChest.loot_id[i]] ? $dataItems[tjs_TotalChest.loot_id[i]] : 0;
            if ( item == 0 ) continue;

            $gameParty.gainItem( item, tjs_TotalChest.loot_count[i] );
            const i_reduced = i / 6;
            const msg_line = Math.floor( i_reduced );
            if ( (i_reduced == msg_line) && (msg_line > 0) ) msgItems += "\\LB          ";
            msgItems += ( String(tjs_TotalChest.loot_count[i]) + "x " + String( item.name ) );
            if ( i < (totalItems - 1) ) msgItems += ", ";
        }
        msgItems += ".";
        if ( (totalWeapons > 0) || (totalArmors > 0) ) msgItems += "\\LB";
    }
    if ( totalWeapons > 0 ) {
        msgItems += "You find: ";
        for (let i = 0; i < totalWeapons; i++ ) {
            const item = $dataWeapons[tjs_TotalChest.loot_id_w[i]] ? $dataWeapons[tjs_TotalChest.loot_id_w[i]] : 0;
            if ( item == 0 ) continue;

            $gameParty.gainItem( item, tjs_TotalChest.loot_count_w[i] );
            const i_reduced = i / 6;
            const msg_line = Math.floor( i_reduced );
            if ( (i_reduced == msg_line) && (msg_line > 0) ) msgItems += "\\LB          ";
            msgItems += ( String(tjs_TotalChest.loot_count_w[i]) + 'x ' + String( item.name ) );
            if ( i < (totalWeapons - 1) ) msgItems += ", ";
        }
        msgItems += ".";
        if ( totalArmors > 0 ) msgItems += "\\LB";
    }
    if ( totalArmors > 0 ) {
        msgItems += "You find: ";
        for (let i = 0; i < totalArmors; i++ ) {
            const item = $dataArmors[tjs_TotalChest.loot_id_a[i]] ? $dataArmors[tjs_TotalChest.loot_id_a[i]] : 0;
            if ( item == 0 ) continue;

            $gameParty.gainItem( item, tjs_TotalChest.loot_count_a[i] );
            const i_reduced = i / 6;
            const msg_line = Math.floor( i_reduced );
            if ( (i_reduced == msg_line) && (msg_line > 0) ) msgItems += "\\LB          ";
            msgItems += ( String(tjs_TotalChest.loot_count_a[i]) + 'x ' + String( item.name ) );
            if ( i < (totalArmors - 1) ) msgItems += ", ";
        }
        msgItems += ".";
    }

    $gameMessage.setBackground(0);
    $gameMessage.setPositionType(2);
    if ( chest_name ) $gameMessage.setSpeakerName( chest_name );

    if ( totalLoot > 0 ) {
        $gameMessage.add( msgItems );

        Game_Interpreter.prototype.setWaitMode.call(this, 'message');
    }
    else if ( silent_if_empty == false ) {
        $gameMessage.add( "Empty!" );

        Game_Interpreter.prototype.setWaitMode.call(this, 'message');
    }

    tjs_TotalChest.Empty();
};
TJS.prototype.CalculateCostOfStayingAtInn = function(price_factor) {
    var priceFactor = Number(price_factor);
    const partySize = $gameParty.size();

    var costMax = 0;
    for (let i = 0; i < partySize; i++) {
        costMax += Number($gameParty.members()[i].mhp);
        costMax += Number($gameParty.members()[i].mmp);
    }

    var costInverted = 0;
    for (let i = 0; i < partySize; i++) {
        costInverted += Number($gameParty.members()[i].hp);
        costInverted += Number($gameParty.members()[i].mp);
    }

    var totalLevels = 0;
    for (let i = 0; i < partySize; i++) {
        totalLevels += Number($gameParty.members()[i].level);
    }

    var cost = costMax - costInverted;
    cost *= priceFactor;
    cost /= 100;
    cost = Math.round(cost);
    cost += totalLevels;

    return cost;
};
TJS.prototype.pluginCommand_GetCostToHeal = function(args) {
    var priceFactor = Number(args.Price_Factor);
    var variableId = Number(args.Variable);

    var cost = TJS_auto.CalculateCostOfStayingAtInn(priceFactor);
    $gameVariables.setValue(variableId, cost);
};
TJS.prototype.pluginCommand_SetVehicleLocation = function(args) {
    const vehicle_name = String(args.Vehicle_Name);
    const vehicle_type = String(args.Vehicle_Type);
    const map_id = Number(args.Map);
    const x = Number(args.X);
    const y = Number(args.Y);

    const vehicles = $gameMap.vehicles().filter( vehicle => (vehicle.vehicle().name === vehicle_name) && (vehicle.vehicle().type === vehicle_type) );
    if ( vehicles.length > 0 ) {
        vehicles[0].setLocation( map_id, x, y );
    }
};
TJS.prototype.pluginCommand_ReturnToVehicle = function(args) {
    $gamePlayer.ReturnToVehicle();
};
TJS.prototype.pluginCommand_GoToVehicleInterior = function(args) {
    $gamePlayer.GoToVehicleInterior();
};
TJS.prototype.UpdateGlobalData = function() {
    if ( $gameVariables.value(tjs_variable_max_game_chapter) < $gameVariables.value(tjs_variable_game_chapter) )
        $gameVariables.setValue( tjs_variable_max_game_chapter, $gameVariables.value(tjs_variable_game_chapter) );
};
TJS.prototype.GetChapterTextForVariable = function(chapter_number) {
    if ( chapter_number < 0 ) return "?????";

    if ( chapter_number < tjs_chapter_names.length )
        return tjs_chapter_names[ chapter_number ];

    // Default
    const txt = "Chapter " + String(chapter_number);

    return txt;
};
TJS.prototype.GetEquipSlotOfThing = function(thing, actor) {
    if ( thing.isWeapon() ) {
        if ( actor.equips()[0] ) {
            if ( thing.itemId() == actor.equips()[0].id ) return 0;
        }
        if ( actor.equips()[1] ) {
            if ( thing.itemId() == actor.equips()[1].id ) return 1;
        }

        return -1;
    }

    else if ( thing.isArmor() ) {
        for ( let i = 2; i < $dataSystem.equipTypes.length; i++ ) {
            if ( actor.equips()[i] ) {
                if ( thing.itemId() == actor.equips()[i].id ) return i;
            }
        }

        return -1;
    }

    else if ( thing.isSkill() ) {
        return this.GetEquipSlotOfSkill( $dataSkills[thing.itemId()], actor );
    }

    return -1;
};
TJS.prototype.GetEquipSlotOfSkill = function(skill, actor) {
    if ( actor.equips()[0] ) {
        const traits_size = $dataWeapons[actor.equips()[0].id].traits.length;
        for ( let i = 0; i < traits_size; i++ ) {
            if ( $dataWeapons[actor.equips()[0].id].traits[i].code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
                if ( $dataWeapons[actor.equips()[0].id].traits[i].dataId == skill.id ) return 0;
            }
        }
    }
    if ( actor.equips()[1] ) {
        const traits_size = $dataWeapons[actor.equips()[1].id].traits.length;
        for ( let i = 0; i < traits_size; i++ ) {
            if ( $dataWeapons[actor.equips()[1].id].traits[i].code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
                if ( $dataWeapons[actor.equips()[1].id].traits[i].dataId == skill.id ) return 1;
            }
        }
    }
    for ( let es = 2; es < $dataSystem.equipTypes.length; es++ ) {
        if ( actor.equips()[es] ) {
            const traits_size = $dataArmors[actor.equips()[es].id].traits.length;
            for ( let i = 0; i < traits_size; i++ ) {
                if ( $dataArmors[actor.equips()[es].id].traits[i].code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
                    if ( $dataArmors[actor.equips()[es].id].traits[i].dataId == skill.id ) return es;
                }
            }
        }
    }

    return -1;
};
TJS.prototype.CheckWeaponBreakForThing = function(thing, party_member_index) {
    if ( party_member_index < 0 ) return;
    const actor = $gameParty.members()[party_member_index];
    const slot_number = this.GetEquipSlotOfThing(thing, actor);
    const durability_use_count = thing.isSkill() ? $dataSkills[thing.itemId()].durability_uses : 1;

    if ( slot_number >= 0 ) return actor.CheckEquipmentBreak( slot_number, durability_use_count );

    return false;
};
TJS.prototype.SetItemLevel = function(new_level) {
    this._itemLevel = Math.min( Math.max( Number(new_level), 0.00000 ), 1.00000 );
};
TJS.prototype.GetItemLevel = function(new_level) {
    return this._itemLevel;
};
TJS.prototype.GetBuffAmount = function() {
    const v_min = TJS_auto.Lerp( 8.00000, 20.00000, this._itemLevel );
    const v_max = TJS_auto.Lerp( 16.00000, 40.00000, this._itemLevel );
    return TJS_auto.Lerp( v_min, v_max, Math.random() ) * 0.01;
};
TJS.prototype.GetDebuffAmount = function() {
    const v_min = TJS_auto.Lerp( 5.00000, 10.00000, this._itemLevel );
    const v_max = TJS_auto.Lerp( 12.50000, 25.00000, this._itemLevel );
    return TJS_auto.Lerp( v_min, v_max, Math.random() ) * 0.01;
};
TJS.prototype.SetStateScalingFactor = function(factor, battler) {
    if ( battler.isActor() == true )
        this._state_scale = factor / tjs_max_item_levels;
    else
        this._state_scale = TJS_auto.Lerp( 0.05000, 1.00000, factor );
};
TJS.prototype.ResetStateScalingFactor = function(factor, battler) {
    this._state_scale = 1;
};
TJS.prototype.GetStateScalingFactor = function() {
    return this._state_scale;
};
TJS.prototype.SetPartyTargetRateMods = function() {
    const party_size = $gameParty.size();

    for ( let i = 0; i < party_size; i++ ) {
        const mod_amt = Math.round(this.Lerp( 150.00000, 22.50000, i / (party_size - 1.00000) )) * 0.01;

        $gameParty.members()[i].SetTargetRateMod( mod_amt );
    }
};
TJS.prototype.ReparseTextAuto = function(input_text, line_max_chars=tjs_string_line_width_noFace) {
    if ( !input_text ) return "";
    const oldText = input_text;
    const oldText_length = oldText.length;
    if ( oldText_length < 1 ) return "";
    var nText = "";
    var lastChar = "";

    // Remove all carriage returns
    for ( let i = 0; i < oldText_length; i++ ) {
        const currentChar = oldText[i];
        if ( currentChar === "\n" ) {
            if ( (lastChar === ".") || (lastChar === "!") || (lastChar === "?") ) {
                nText += "  ";

                lastChar = currentChar;
                continue;
            }

            var will_add_space = true;

            if ( lastChar === "\n" ) will_add_space = false;
            if ( i > 2 ) {
                if ( (oldText[i - 1] == "B") && (oldText[i - 2] == "L") && (oldText[i - 3] == "\\") ) will_add_space = false;
            }
            if ( !lastChar ) will_add_space = false;
            if ( i == 0 ) will_add_space = false;
            if ( lastChar === " " ) will_add_space = false;

            if ( will_add_space == true ) nText += " ";

            lastChar = currentChar;
            continue;
        }

        nText += currentChar;
        lastChar = currentChar;
    }

    var nText2 = "";
    var char_x_count = 0;
    var letter_count = 0;
    var ignore_count = 0;
    const nText_length = nText.length;
    if ( nText_length < 1 ) return "";

    // Put in new line breaks
    for ( let i = 0; i < nText_length; i++ ) {
        const currentChar = nText[i];

        if ( ignore_count > 0 ) {
            ignore_count--;

            continue;
        }

        if ( currentChar === "\\" ) {
            const readAheadLimit = nText_length - (i + 1);
            if ( readAheadLimit < 2 ) break;

            if ( (nText[i + 1] == "L") && (nText[i + 2] == "B") ) {
                // Valid Line Break being inserted, and backslash isn't copied to new string
                nText2 += "\n";
                char_x_count = 0;
                ignore_count = 2;

                continue;
            }
        }

        if ( currentChar === " " ) {
            if ( i >= nText_length - 1 ) {
                nText2 += currentChar;
                char_x_count++;

                continue;
            } else {
                if ( nText[i + 1] !== " " ) {
                    var new_word_started = false;
                    const readAheadLimit = nText_length - (i + 1);
                    if ( readAheadLimit < 1 ) break;
                    var letter_count = 0;

                    for ( readAhead = 1; readAhead < readAheadLimit + 1; readAhead++ ) {
                        if (nText[i + readAhead] === " ") {
                            break;
                        }
                        if (nText[i + readAhead] === "\\") {
                            if ( (readAhead + 1) < readAheadLimit ) {
                                if ( (nText[i + readAhead + 1] === "L") && (nText[i + readAhead + 2] === "B") ) break;
                            }
                        }

                        letter_count++;
                    }

                    if ( letter_count == 0 ) {
                        nText2 += currentChar;
                        char_x_count++;

                        continue;
                    }
                    if ( (letter_count + char_x_count) > line_max_chars ) {
                        nText2 += currentChar;
                        nText2 += "\n";
                        char_x_count = 0;

                        continue;
                    } else {
                        nText2 += currentChar;
                        char_x_count++;

                        continue;
                    }

                } else {
                    nText2 += currentChar;
                    char_x_count++;

                    continue;
                }
            }
        } else {
            nText2 += currentChar;
            char_x_count++;

            continue;
        }
    }

    return nText2;
};
TJS.prototype.CalcItemPrice = function(item) {
    if ( !item ) return 0;

    var price = item.price;

    if ( item.food_price )
        price = TJS_auto.CalcFoodPrice( item.food_price );
    else if ( item.leveled_by_chapter_price == true )
        price = TJS_auto.CalcLevelByChapterPrice( price, item.level );

    return Math.ceil( price );
};
TJS.prototype.CalcLevelByChapterPrice = function(base_price, item_level) {
    const chapter = Number($gameVariables.value(tjs_variable_game_chapter));

    const item_level_factor = TJS_auto.Lerp( 1.0, 20.0, (item_level.clamp( 1, tjs_max_item_levels ) - 1) / (tjs_max_item_levels - 1) );
    const factor1 = Math.pow( item_level_factor, 3.2 );
    const factor2 = TJS_auto.LerpSkew( 1.0, 16.0, chapter.clamp( 0, tjs_max_chapters ) / tjs_max_chapters, -0.625 );
    const price = base_price * factor1 * factor2;

    return price;
};
TJS.prototype.CalcFoodPrice = function(base_price) {
    const chapter = Number($gameVariables.value(tjs_variable_game_chapter));

    const item_level = TJS_auto.Lerp( 1.0, tjs_max_item_levels, chapter / tjs_max_chapters );
    const item_level_factor = TJS_auto.Lerp( 1.0, 20.0, (item_level.clamp( 1, tjs_max_item_levels ) - 1) / (tjs_max_item_levels - 1) );
    const factor1 = Math.pow( item_level_factor, 3.2 );
    const factor2 = TJS_auto.LerpSkew( 1.0, 16.0, chapter.clamp( 0, tjs_max_chapters ) / tjs_max_chapters, -0.625 );
    const price = base_price * factor1 * factor2;

    return price;
};
/*
1  Weapon
2  Weapon
3  Backup Weapon
4  Book
5  Shield
6  Belt
7  Wristband
8  Glove
9  Socks
10 Shoes
11 Necklace
12 Bracelet
13 Earring
14 Ring
15 Accessory
*/
TJS.prototype.GetIndexForEquipmentType = function(inputText) {
    if ( inputText === "N/A" ) return 0;
    else if ( inputText === "weapon" ) return 1;
    else if ( inputText === "2nd weapon" ) return 2;
    else if ( inputText === "backup weapon" ) return 3;
    else if ( inputText === "book" ) return 4;
    else if ( inputText === "shield" ) return 5;
    else if ( inputText === "belt" ) return 6;
    else if ( inputText === "wristband" ) return 7;
    else if ( inputText === "glove" ) return 8;
    else if ( inputText === "socks" ) return 9;
    else if ( inputText === "shoes" ) return 10;
    else if ( inputText === "necklace" ) return 11;
    else if ( inputText === "bracelet" ) return 12;
    else if ( inputText === "earring" ) return 13;
    else if ( inputText === "ring" ) return 14;
    else if ( inputText === "accessory" ) return 15;

    return 0;
};
TJS.prototype.GetNameForEquipmentType = function(input_number) {
    if ( input_number == 0 ) return "N/A";
    else if ( input_number == 1 ) return "weapon";
    else if ( input_number == 2 ) return "2nd weapon";
    else if ( input_number == 3 ) return "backup weapon";
    else if ( input_number == 4 ) return "book";
    else if ( input_number == 5 ) return "shield";
    else if ( input_number == 6 ) return "belt";
    else if ( input_number == 7 ) return "wristband";
    else if ( input_number == 8 ) return "glove";
    else if ( input_number == 9 ) return "socks";
    else if ( input_number == 10 ) return "shoes";
    else if ( input_number == 11 ) return "necklace";
    else if ( input_number == 12 ) return "bracelet";
    else if ( input_number == 13 ) return "earring";
    else if ( input_number == 14 ) return "ring";
    else if ( input_number == 15 ) return "accessory";

    return "N/A";
};
/*
1  Broken
2  Longsword
3  Greatsword
4  Dual Swords
5  Katana
6  Dual Katanas
7  Ninjato
8  Dual Ninjatos
9  Hand Axe
10 Battleaxe
11 Dual Axes
12 Assault Rifle
13 Grenades
14 SMG
15 Shotgun
16 Magic Staff
*/
TJS.prototype.GetIndexForWeaponType = function(inputText) {
    if ( inputText === "N/A" ) return 0;
    else if ( inputText === "broken" ) return 1;
    else if ( inputText === "longsword" ) return 2;
    else if ( inputText === "greatsword" ) return 3;
    else if ( inputText === "dual swords" ) return 4;
    else if ( inputText === "katana" ) return 5;
    else if ( inputText === "dual katanas" ) return 6;
    else if ( inputText === "ninjato" ) return 7;
    else if ( inputText === "dual ninjatos" ) return 8;
    else if ( inputText === "hand axe" ) return 9;
    else if ( inputText === "battleaxe" ) return 10;
    else if ( inputText === "dual axes" ) return 11;
    else if ( inputText === "rifle" ) return 12;
    else if ( inputText === "grenades" ) return 13;
    else if ( inputText === "smg" ) return 14;
    else if ( inputText === "shotgun" ) return 15;
    else if ( inputText === "staff" ) return 16;

    return 0;
};
TJS.prototype.GetNameForWeaponType = function(input_number) {
    if ( input_number == 0 ) return "N/A";
    else if ( input_number == 1 ) return "broken";
    else if ( input_number == 2 ) return "longsword";
    else if ( input_number == 3 ) return "greatsword";
    else if ( input_number == 4 ) return "dual swords";
    else if ( input_number == 5 ) return "katana";
    else if ( input_number == 6 ) return "dual katanas";
    else if ( input_number == 7 ) return "ninjato";
    else if ( input_number == 8 ) return "dual ninjatos";
    else if ( input_number == 9 ) return "hand axe";
    else if ( input_number == 10 ) return "battleaxe";
    else if ( input_number == 11 ) return "dual axes";
    else if ( input_number == 12 ) return "rifle";
    else if ( input_number == 13 ) return "grenades";
    else if ( input_number == 14 ) return "smg";
    else if ( input_number == 15 ) return "shotgun";
    else if ( input_number == 16 ) return "staff";

    return "N/A";
};
/*
1  Broken
2  Light Armor
3  Medium Armor
4  Heavy Armor
5  Light Shield
6  Medium Shield
7  Heavy Shield
8  Accessory
9  Swordmaster's Book
10 Axemaster's Book
11 Samurai's Book
12 Ninja's Handbook
13 Martial Artist's Book
14 Rifleman's Manual
15 Cleric's Holy Book
16 Mage's Spellbook
17 Wizard's Book
18 Light Pistol			// Backup weapon, any class
19 Heavy Pistol			// Backup weapon, Rifleman class only
20 Minor Spellbook		// Backup weapon, magic spells that use MP
21 Magic Wands			// Backup weapon, static magic damage that uses MP
22 Kaiken			    // Backup weapon, Japanese dagger
23 Whip				    // Backup weapon
24 Kensei's Book
*/
TJS.prototype.GetIndexForArmorType = function(inputText) {
    if ( inputText === "N/A" ) return 0;
    else if ( inputText === "broken" ) return 1;
    else if ( inputText === "light armor" ) return 2;
    else if ( inputText === "medium armor" ) return 3;
    else if ( inputText === "heavy armor" ) return 4;
    else if ( inputText === "light shield" ) return 5;
    else if ( inputText === "medium shield" ) return 6;
    else if ( inputText === "heavy shield" ) return 7;
    else if ( inputText === "accessory" ) return 8;
    else if ( inputText === "swordmaster's book" ) return 9;
    else if ( inputText === "axemaster's book" ) return 10;
    else if ( inputText === "samurai's book" ) return 11;
    else if ( inputText === "ninja's book" ) return 12;
    else if ( inputText === "martial artist's book" ) return 13;
    else if ( inputText === "rifleman's book" ) return 14;
    else if ( inputText === "cleric's book" ) return 15;
    else if ( inputText === "mage's book" ) return 16;
    else if ( inputText === "wizard's book" ) return 17;
    else if ( inputText === "light pistol" ) return 18;
    else if ( inputText === "heavy pistol" ) return 19;
    else if ( inputText === "minor spellbook" ) return 20;
    else if ( inputText === "magic wand" ) return 21;
    else if ( inputText === "kaiken" ) return 22;
    else if ( inputText === "whip" ) return 23;
    else if ( inputText === "kensei's book" ) return 24;

    return 0;
};
TJS.prototype.GetNameForArmorType = function(input_number) {
    if ( input_number == 0 ) return "N/A";
    else if ( input_number == 1 ) return "broken";
    else if ( input_number == 2 ) return "light armor";
    else if ( input_number == 3 ) return "medium armor";
    else if ( input_number == 4 ) return "heavy armor";
    else if ( input_number == 5 ) return "light shield";
    else if ( input_number == 6 ) return "medium shield";
    else if ( input_number == 7 ) return "heavy shield";
    else if ( input_number == 8 ) return "accessory";
    else if ( input_number == 9 ) return "swordmaster's book";
    else if ( input_number == 10 ) return "axemaster's book";
    else if ( input_number == 11 ) return "samurai's book";
    else if ( input_number == 12 ) return "ninja's book";
    else if ( input_number == 13 ) return "martial artist's book";
    else if ( input_number == 14 ) return "rifleman's book";
    else if ( input_number == 15 ) return "cleric's book";
    else if ( input_number == 16 ) return "mage's book";
    else if ( input_number == 17 ) return "wizard's book";
    else if ( input_number == 18 ) return "light pistol";
    else if ( input_number == 19 ) return "heavy pistol";
    else if ( input_number == 20 ) return "minor spellbook";
    else if ( input_number == 21 ) return "magic wand";
    else if ( input_number == 22 ) return "kaiken";
    else if ( input_number == 23 ) return "whip";
    else if ( input_number == 24 ) return "kensei's book";

    return "N/A";
};
TJS.prototype.GetTpAdjustedMaximumForWeaponAuto = function(inputText) {
    if ( inputText === "broken" )           return 1.00000;
    else if ( inputText === "longsword" )        return 1.06250;
    else if ( inputText === "greatsword" )       return 1.13250;
    else if ( inputText === "dual swords" )      return 1.12500;
    else if ( inputText === "katana" )           return 1.06250;
    else if ( inputText === "dual katanas" )     return 1.12500;
    else if ( inputText === "ninjato" )          return 1.06250;
    else if ( inputText === "dual ninjatos" )    return 1.12500;
    else if ( inputText === "hand axe" )         return 1.06250;
    else if ( inputText === "battleaxe" )        return 1.13250;
    else if ( inputText === "dual axes" )        return 1.12500;
    else if ( inputText === "rifle" )            return 1.13250;
    else if ( inputText === "grenades" )         return 1.06750;
    else if ( inputText === "smg" )              return 1.09250;
    else if ( inputText === "shotgun" )          return 1.04250;
    else if ( inputText === "staff" )            return 1.13250;

    return 1.00000;
};
TJS.prototype.GetTpAdjustedMaximumForGearAuto = function(equipType, armorType) {
    if ( equipType === "backup weapon" ) {
        if ( armorType === "light pistol" )     return 1.04250;
        else if ( armorType === "heavy pistol" )     return 1.05250;
        else if ( armorType === "minor spellbook" )  return 1.06500;
        else if ( armorType === "magic wand" )       return 1.04575;
        else if ( armorType === "kaiken" )           return 1.03250;
        else if ( armorType === "whip" )             return 1.02500;
    }
    if ( equipType === "shield" ) {
        if ( armorType === "light shield" ) return 1.07500;
        else if ( armorType === "medium shield" ) return 1.15000;
        else if ( armorType === "heavy shield" ) return 1.22500;
    }

    return 1.00000;
};
TJS.prototype.GetNumberOfUsesForWeaponAuto = function(inputText) {
    if ( inputText === "broken" )           return -5000;
    else if ( inputText === "longsword" )        return 200;
    else if ( inputText === "greatsword" )       return 150;
    else if ( inputText === "dual swords" )      return 400;
    else if ( inputText === "katana" )           return 160;
    else if ( inputText === "dual katanas" )     return 320;
    else if ( inputText === "ninjato" )          return 160;
    else if ( inputText === "dual ninjatos" )    return 320;
    else if ( inputText === "hand axe" )         return 200;
    else if ( inputText === "battleaxe" )        return 160;
    else if ( inputText === "dual axes" )        return 400;
    else if ( inputText === "rifle" )            return 250;
    else if ( inputText === "grenades" )         return 150;
    else if ( inputText === "smg" )              return 525;
    else if ( inputText === "shotgun" )          return 65;
    else if ( inputText === "staff" )            return 65;

    return -5000;
};
TJS.prototype.GetNumberOfUsesForArmorAuto = function(armor_type, equipment_type) {
    if ( armor_type === "broken" )           return -5000;
    else if ( armor_type === "light pistol" )     return 120;
    else if ( armor_type === "heavy pistol" )     return 150;
    else if ( armor_type === "minor spellbook" )  return 30;
    else if ( armor_type === "magic wand" )       return 25;
    else if ( armor_type === "kaiken" )           return 150;
    else if ( armor_type === "whip" )             return 30;

    if ( armor_type === "light shield" ) return 65;
    else if ( armor_type === "medium shield" ) return 65;
    else if ( armor_type === "heavy shield" ) return 65;

    if ( equipment_type === "backup weapon" ) return -5000;
    else if ( equipment_type === "book" ) return -5000;
    else if ( equipment_type === "shield" ) return 65;
    else if ( equipment_type === "belt" ) return 32;
    else if ( equipment_type === "wristband" ) return 32;
    else if ( equipment_type === "glove" ) return 32;
    else if ( equipment_type === "socks" ) return 32;
    else if ( equipment_type === "shoes" ) return 32;
    else if ( equipment_type === "necklace" ) return 32;
    else if ( equipment_type === "bracelet" ) return 32;
    else if ( equipment_type === "earring" ) return 32;
    else if ( equipment_type === "ring" ) return 32;
    else if ( equipment_type === "accessory" ) return 32;

    return -5000;
};
TJS.prototype.GetSkillTypeNameAuto = function(weapon_type, armor_type, equipment_type) {
    if ( (weapon_type > 0) || (equipment_type == 1) ) {
        if ( weapon_type == 2 ) return "Longsword";
        else if ( weapon_type == 3 ) return "Greatsword";
        else if ( weapon_type == 4 ) return "Dual Swords";
        else if ( weapon_type == 5 ) return "Katana";
        else if ( weapon_type == 6 ) return "Dual Katanas";
        else if ( weapon_type == 7 ) return "Ninjato";
        else if ( weapon_type == 8 ) return "Dual Ninjatos";
        else if ( weapon_type == 9 ) return "Hand Axe";
        else if ( weapon_type == 10 ) return "Battleaxe";
        else if ( weapon_type == 11 ) return "Dual Axes";
        else if ( weapon_type == 12 ) return "Assault Rifle";
        else if ( weapon_type == 13 ) return "Grenade";
        else if ( weapon_type == 14 ) return "SMG";
        else if ( weapon_type == 15 ) return "Shotgun";
        else if ( weapon_type == 16 ) return "Magic Staff";
    }
    else if ( equipment_type == 3 ) {
        if ( armor_type == 18 ) return "Light Pistol";
        else if ( armor_type == 19 ) return "Heavy Pistol";
        else if ( armor_type == 20 ) return "Minor Spellbook";
        else if ( armor_type == 21 ) return "Magic Wand";
        else if ( armor_type == 22 ) return "Kaiken";
        else if ( armor_type == 23 ) return "Whip";
    }
    else if ( equipment_type == 4 ) {
        if ( armor_type == 9 ) return "Swordmaster Ability";
        else if ( armor_type == 10 ) return "Axemaster Ability";
        else if ( armor_type == 11 ) return "Samurai Ability";
        else if ( armor_type == 12 ) return "Ninja Spell";
        else if ( armor_type == 13 ) return "Martial Arts Ability";
        else if ( armor_type == 14 ) return "Rifleman Ability";
        else if ( armor_type == 15 ) return "Holy Cleric Spell";
        else if ( armor_type == 16 ) return "Mage Spell";
        else if ( armor_type == 17 ) return "Wizard Spell";
        else if ( armor_type == 24 ) return "Kensei Ability";
    }
    else if ( equipment_type == 5 ) {
        if ( armor_type == 5 ) return "Light Shield";
        else if ( armor_type == 6 ) return "Medium Shield";
        else if ( armor_type == 7 ) return "Heavy Shield";
    }
    else if ( equipment_type == 6 )
        return "Magic Belt Power";
    else if ( equipment_type == 7 )
        return "Magic Wristband Power";
    else if ( equipment_type == 8 )
        return "Magic Glove Power";
    else if ( equipment_type == 9 )
        return "Magic Sock Power";
    else if ( equipment_type == 10 )
        return "Magic Shoe Power";
    else if ( equipment_type == 11 )
        return "Magic Necklace Power";
    else if ( equipment_type == 12 )
        return "Magic Bracelet Power";
    else if ( equipment_type == 13 )
        return "Magic Earring Power";
    else if ( equipment_type == 14 )
        return "Magic Ring Power";
    else if ( equipment_type == 15 )
        return "Magic Accessory Power";

    return "";
};
TJS.prototype.GetHalfPhysicalValueForSkill = function(equipTypeText, weaponTypeText, armorTypeText) {
    if ( (equipTypeText === "primary weapon") || (equipTypeText === "weapon") ) {
        if ( weaponTypeText === "staff" ) return 1.72500;
        else if ( weaponTypeText === "grenades" ) return 1;

        else return 1.42500;
    }
    else if ( (equipTypeText === "backup") || (equipTypeText === "backup weapon") ) {
        if ( armorTypeText === "light pistol" ) return 1.42500;
        else if ( armorTypeText === "heavy pistol" ) return 1.42500;
        else if ( armorTypeText === "minor spellbook" ) return 1;
        else if ( armorTypeText === "magic wand" ) return 1;
        else if ( armorTypeText === "kaiken" ) return 1.42500;
        else if ( armorTypeText === "whip" ) return 1.42500;

        else return 1;
    }
    else if ( equipTypeText === "book" ) {
        if ( armorTypeText === "martial artist's book" ) return 1.62500;
    }

    return 1;
};
TJS.prototype.GetAimAdjustForSkill = function(equipTypeText, weaponTypeText, armorTypeText) {
    if ( (equipTypeText === "primary weapon") || (equipTypeText === "weapon") ) {
        if ( weaponTypeText === "longsword" ) return 1.625;
        if ( weaponTypeText === "greatsword" ) return 0.925;
        if ( weaponTypeText === "dual swords" ) return 0.125;
        if ( weaponTypeText === "katana" ) return 1.6425;
        if ( weaponTypeText === "dual katanas" ) return 0.1425;
        if ( weaponTypeText === "ninjato" ) return 1.6425;
        if ( weaponTypeText === "dual ninjatos" ) return 0.1425;
        if ( weaponTypeText === "hand axe" ) return -0.2;
        if ( weaponTypeText === "battleaxe" ) return -1.0;
        if ( weaponTypeText === "dual axes" ) return -1.25;
        if ( weaponTypeText === "rifle" ) return 3;
        if ( weaponTypeText === "grenades" ) return 0.5;
        if ( weaponTypeText === "smg" ) return 1.25;
        if ( weaponTypeText === "shotgun" ) return 3.25;
        if ( weaponTypeText === "staff" ) return 4.25;

        return 0;
    }
    else if ( (equipTypeText === "backup") || (equipTypeText === "backup weapon") ) {
        if ( armorTypeText === "light pistol" ) return 0.625;
        if ( armorTypeText === "heavy pistol" ) return 1.425;
        if ( armorTypeText === "minor spellbook" ) return 0.925;
        if ( armorTypeText === "magic wand" ) return 1.825;
        if ( armorTypeText === "kaiken" ) return 0.625;
        if ( armorTypeText === "whip" ) return -0.125;

        return 0;
    }
    else if ( equipTypeText === "book" ) {
        if ( armorTypeText === "cleric's book" ) return 0.825;
        if ( armorTypeText === "mage's book" ) return 1.125;
        if ( armorTypeText === "wizard's book" ) return 0.625;
        if ( armorTypeText === "ninja's book" ) return 0.9625;
        if ( armorTypeText === "martial artist's book" ) return 1.325;

        return 0;
    }
    else if ( equipTypeText === "ring" ) {
        return 3.25;
    }

    return 0;
};
TJS.prototype.GetInfoItemRaw = function(item, text_width) {
    var txt = "?????";
    if ( !item ) return txt;
    if ( !text_width ) return txt;

    /*
    if ( item.wtypeId ) txt = item.description;
    else if ( item.atypeId ) txt = item.description;
    else if ( item.etypeId ) txt = item.description;
    else if ( item.stypeId ) txt = item.description;
    */

    // if ( item.description ) txt = item.description;
    txt = TJS_auto.GetInfo1( item );

    /*
    if ( item.meta ) {
        if ( item.meta.tjsInfo ) txt = item.meta.tjsInfo;
    }
    */

    return TJS_auto.ReparseTextAuto( txt, text_width );
};
TJS.prototype.GetInfoItemExpanded = function(item, actor, text_width, text_command, text_columns=2, text_column_width=64) {
    var txt = "No further data available.";
    if ( !item ) return txt;
    if ( !actor ) return txt;
    if ( !text_width ) return txt;

    /*
    if ( item.description ) txt = "    " + item.description;
    if ( item.description2 ) txt += "\\LB" + item.description2;
    */
    if ( (item.wtypeId) || (item.atypeId) || (item.itypeId) ) txt = "    " + TJS_auto.GetInfo1( item );
    if ( (item.wtypeId) || (item.atypeId) || (item.itypeId) ) txt += "\\LB" + TJS_auto.GetInfo2( item );

    var data_text = ""; // Blurg

    // Actor
    if ( text_command === "actor" ) {
        txt = "    " + actor.profile;
        if ( actor.description2.length > 0 ) txt += "\\LB" + actor.description2;

        data_text += actor.name + "\\LB\\LB";

        data_text += "Natural ability tendencies regardless of class, level, or equipped gear:\\LB";
        data_text += "Initial maximum Tactical Points: " + Math.round(actor.custom_traits.max_tactical_points_add * actor.custom_traits.max_tactical_points_multiply).toLocaleString() + ".\\LB";

        data_text += this.DisplayTextActorInfo( actor, text_column_width );

        data_text += this.GetTextInfoActorTraitsSelected( $dataActors[actor.id].traits, "attack", text_column_width, text_columns );
        data_text += this.GetTextInfoActorTraitsSelected( $dataActors[actor.id].traits, "debuff", text_column_width, text_columns );
        data_text += this.GetTextInfoActorTraitsSelected( $dataActors[actor.id].traits, "state immune", text_column_width, text_columns );
        data_text += this.GetTextInfoActorTraitsSelected( $dataActors[actor.id].traits, "state resist", text_column_width, text_columns );
        data_text += this.GetTextInfoActorTraitsSelected( $dataActors[actor.id].traits, "element", text_column_width, text_columns );
        data_text += "\\LB";

        return TJS_auto.ReparseTextAuto( data_text + txt, text_width - 1 );
    }

        // Enemy
    if ( text_command === "enemy" ) {
        txt = "    " + actor.profile;
        if ( actor.description2.length > 0 ) txt += "\\LB" + actor.description2;

        data_text += actor.name + "\\LB";
        data_text += "\\LB";
        data_text += "Relative Experience Points for defeat: " + (actor.exp).toLocaleString() + " EXP.\\LB";
        data_text += "Relative " + TextManager.currencyUnit + " gained for defeat: " + (actor.gold).toLocaleString() + " " + TextManager.currencyUnit + ".\\LB";
        data_text += "Initial / Maximum Tactical Points: " + Math.round(actor.initial_tp).toLocaleString() + " / " +
            Math.round(actor.custom_traits.max_tactical_points_add * actor.custom_traits.max_tactical_points_multiply).toLocaleString() + ".\\LB";

        data_text += this.DisplayTextEnemyInfo( actor, text_column_width );

        data_text += this.GetTextInfoActorTraitsSelected( $dataEnemies[actor.id].traits, "debuff", text_column_width, text_columns );
        data_text += this.GetTextInfoActorTraitsSelected( $dataEnemies[actor.id].traits, "state immune", text_column_width, text_columns );
        data_text += this.GetTextInfoActorTraitsSelected( $dataEnemies[actor.id].traits, "state resist", text_column_width, text_columns );
        data_text += this.GetTextInfoActorTraitsSelected( $dataEnemies[actor.id].traits, "element", text_column_width, text_columns );

        data_text += "\\LB";
        data_text += this.GetTextInfoEnemySkills( actor, text_column_width, text_columns );

        return TJS_auto.ReparseTextAuto( data_text + txt, text_width - 1 );
    }

    // Weapon.
    if ( item.wtypeId ) {
        data_text += "     " + item.name + "\\LB\\LB";
        data_text += this.GetTextInfoItemLevel( item );
        data_text += this.GetTextInfoItemCashValue( item );
        data_text += "\\LB";

        data_text += this.GetTextInfoAddSkills( item.traits, text_column_width, text_columns );
        data_text += this.GetTextInfoParameterChanges( item, text_column_width, text_columns );
        data_text += this.GetTextInfoItemTraits( item, text_column_width, text_columns );
        // data_text += this.GetTextInfoTraits( item.traits, text_column_width, text_columns );
        data_text += "\\LB";
    }

    // Armor.
    else if ( item.atypeId ) {
        data_text += "     " + item.name + "\\LB\\LB";
        data_text += this.GetTextInfoItemLevel( item );
        data_text += this.GetTextInfoItemCashValue( item );
        data_text += "\\LB";

        data_text += this.GetTextInfoAddSkills( item.traits, text_column_width, text_columns );
        data_text += this.GetTextInfoParameterChanges( item, text_column_width, text_columns );
        data_text += this.GetTextInfoItemTraits( item, text_column_width, text_columns );
        // data_text += this.GetTextInfoTraits( item.traits, text_column_width, text_columns );
        data_text += "\\LB";
    }

    // Inventory Item.
    else if ( item.itypeId ) {
        data_text += "     " + item.name + "\\LB\\LB";
        data_text += this.GetTextInfoItemLevel( item );
        data_text += this.GetTextInfoItemCashValue( item );
        data_text += "\\LB";

        data_text += this.GetTextInfoEffects( item, text_column_width, text_columns );
    }

    // Skill.
    else if ( item.stypeId ) {
        if ( text_command === "skill" ) {
            if ( item.description ) txt = "    " + item.description;

            const skill_level = actor.GetLevelOfSkill( item );
            const skill_Mp_cost = (Math.round(actor.skillMpCostBase( item ))).toLocaleString();
            const skill_Mp_cost_adjusted = (Math.round(actor.skillMpCost( item ))).toLocaleString();
            // const skill_Tp_cost = item.tpCost.toLocaleString();
            const skill_Tp_cost_adjusted = Math.round(actor.skillTpCost( item )).toLocaleString();
            const skill_Tp_gain = item.tpGain.toLocaleString();
            const skill_aim_adjust = (Math.round(item.aim_adjust * 10000.00000) / 100).toLocaleString();

            if ( item.show_level ) {
                data_text += item.name + ", Level " + skill_level + " skill." + "\\LB";
            }
            else {
                data_text += item.name + "\\LB";
            }
            data_text += "Magic Point Cost:  Base: " + skill_Mp_cost + ", Actual: " + skill_Mp_cost_adjusted + "\\LB";
            data_text += "Tactical Point Gain: " + skill_Tp_gain + " / Hit, Cost:  " + skill_Tp_cost_adjusted + "\\LB";

            if ( item.hitType !== Game_Action.HITTYPE_CERTAIN )
                data_text += "Targeting To-Hit Bonus: " + skill_aim_adjust + "\\LB";
            else
                data_text += "\\LB";

            data_text += "Speed Bonus, in Combat: " + (item.speed).toLocaleString() + "\\LB";

            if ( item.ranged == true ) data_text += "Ranged, target can't counterattack.\\LB";

            return TJS_auto.ReparseTextAuto( data_text, text_width - 1 );
        }
    }

    // State
    else {
        if ( item.description ) txt = "    " + item.description;
        if ( item.description2 ) txt += "\\LB" + item.description2;

        data_text += "     " + item.name + "\\LB\\LB";

        var state_scale = 1;
        if ( text_command === "state partial resist" ) state_scale = actor.stateRate( item.id );
        else if ( text_command === "state affected" ) state_scale = actor.StateCurrentEffectScale( item );

        if ( item.name !== "None" ) {
            if ( text_command === "state partial resist" )
                data_text += actor.name() + "'s partial resistance to this effect: " + (actor.GetStatePartialResistancePercent(item.id)).toLocaleString() + "%.\\LB" +
                            "The following data show's this effect's maximum potential characteristics if " + actor.name() + " is affected by it:\\LB\\LB";
            else if ( (text_command === "state immune") && (actor.stateResistSet().includes(item.id)) )
                data_text += actor.name() + " is currently immune to this effect.\\LB" +
                            "The following data show's this effect's maximum potential characteristics:\\LB\\LB";
            else if ( (text_command === "state affected") && (actor.isStateAffected(item.id)) )
                data_text += actor.name() + " is currently affected, at: " + (Math.round(state_scale * 10000.00000) / 100).toLocaleString() + "% strength.\\LB" +
                            "The following data shows the current effects characteristics at this intensity:\\LB\\LB";
        }

        if ( text_command === "state affected" ) {
            data_text += this.GetTextInfoStateTraits( $dataStates[item.id], state_scale, text_column_width, text_columns );
        }
        if ( text_command === "state immune" ) {
            data_text += this.GetTextInfoStateTraits( $dataStates[item.id], 1, text_column_width, text_columns );
        }
        if ( text_command === "state partial resist" ) {
            data_text += this.GetTextInfoStateTraits( $dataStates[item.id], state_scale, text_column_width, text_columns );
        }
    }

    return TJS_auto.ReparseTextAuto( data_text + txt, text_width );
};
TJS.prototype.DisplayTextInfo_PadSpaces = function(text, char_count_width) {
    if ( text.length < char_count_width ) {
        const padding = char_count_width - text.length;
        for ( let i = 0; i < padding; i++ )
            text += " ";

        return text;
    }

    return text.slice( 0, char_count_width );
};
TJS.prototype.DisplayTextActorInfo = function(actor_in, char_count_width) {
    if ( !actor_in ) return "";
    const actor = $dataActors[actor_in.id]
    if ( !actor ) return "";
    var txt = "";
    const traits = actor.traits;
    if ( !traits ) return "";
    const custom_traits = actor.custom_traits;
    if ( !custom_traits ) return "";

    // Params
    const traits_param_max_hp = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 0) );
    const traits_param_max_mp = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 1) );
    const traits_param_strength = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 2) );
    const traits_param_defense = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 3) );
    const traits_param_mana = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 4) );
    const traits_param_magic_defense = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 5) );
    const traits_param_agility = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 6) );
    const traits_param_luck = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 7) );
    const traits_param_magic_focus = (100 + custom_traits.magic_focus_add) * custom_traits.magic_focus_multiply;
    const param_max_hp = traits_param_max_hp.length > 0 ? Math.round(100 * traits_param_max_hp[0].value) : 100;
    const param_max_mp = traits_param_max_mp.length > 0 ? Math.round(100 * traits_param_max_mp[0].value) : 100;
    const param_strength = traits_param_strength.length > 0 ? Math.round(100 * traits_param_strength[0].value) : 100;
    const param_defense = traits_param_defense.length > 0 ? Math.round(100 * traits_param_defense[0].value) : 100;
    const param_mana = traits_param_mana.length > 0 ? Math.round(100 * traits_param_mana[0].value) : 100;
    const param_magic_defense = traits_param_magic_defense.length > 0 ? Math.round(100 * traits_param_magic_defense[0].value) : 100;
    const param_agility = traits_param_agility.length > 0 ? Math.round(100 * traits_param_agility[0].value) : 100;
    const param_luck = traits_param_luck.length > 0 ? Math.round(100 * traits_param_luck[0].value) : 100;
    const param_magic_focus = Math.round( traits_param_magic_focus );
    txt += this.DisplayTextInfo_PadSpaces( "Maximum Health Points: " + String(param_max_hp.toLocaleString()) + "%", char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Maximum Magic Points: " + String(param_max_mp.toLocaleString()) + "%", char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Strength: " + String(param_strength.toLocaleString()) + "%", char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Defense: " + String(param_defense.toLocaleString()) + "%", char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Mana: " + String(param_mana.toLocaleString()) + "%", char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magic Defense: " + String(param_magic_defense.toLocaleString()) + "%", char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Agility: " + String(param_agility.toLocaleString()) + "%", char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magic Focus: " + String(param_magic_focus.toLocaleString()) + "%", char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Luck: " + String(param_luck.toLocaleString()) + "%", char_count_width );
    txt += "\\LB";

    // XParams
    const xparam_hit_rate_physical = Math.round(custom_traits.to_hit_physical_add * custom_traits.to_hit_physical_multiply * 100).toLocaleString();
    const xparam_hit_rate_magical = Math.round(custom_traits.to_hit_magical_add * custom_traits.to_hit_magical_multiply * 100).toLocaleString();
    const xparam_critical_rate_physical = Math.round(custom_traits.physical_critical_hit_rate * 100).toLocaleString();
    const xparam_critical_rate_magical = Math.round(custom_traits.magical_critical_hit_rate * 100).toLocaleString();
    const xparam_critical_evade_physical = Math.round(custom_traits.physical_critical_evade_rate * 100).toLocaleString();
    const xparam_critical_evade_magical = Math.round(custom_traits.magical_critical_evade_rate * 100).toLocaleString();
    const traits_evasion_physical = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 1) );
    const traits_evasion_magical = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 4) );
    const xparam_evasion_physical = traits_evasion_physical.length > 0 ? Math.round(100 * traits_evasion_physical[0].value).toLocaleString() : 0;
    const xparam_evasion_magical = traits_evasion_magical.length > 0 ? Math.round(100 * traits_evasion_magical[0].value).toLocaleString() : 0;
    txt += this.DisplayTextInfo_PadSpaces( "Physical Hit Rate Bonus: " + String(xparam_hit_rate_physical), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magical Hit Rate Bonus: " + String(xparam_hit_rate_magical), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Physical Evasion/Dodging Rate: " + String(xparam_evasion_physical), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magical Evasion/Dodging Rate: " + String(xparam_evasion_magical), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Physical Critical Hit Rate: " + String(xparam_critical_rate_physical), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magical Critical Hit Rate: " + String(xparam_critical_rate_magical), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Physical Critical Evade Rate: " + String(xparam_critical_evade_physical), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magical Critical Evade Rate: " + String(xparam_critical_evade_magical), char_count_width );
    txt += "\\LB";

    // SParams
    const traits_guard_effect = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 1) );
    const traits_healing_spells = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 2) );
    const traits_healing_potions = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 3) );
    const traits_mp_cost_rate = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 4) );
    const traits_tp_gain_rate = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 5) );
    const traits_physical_damage = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 6) );
    const traits_magical_damage = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 7) );
    const traits_exp_rate = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 9) );
    const sparam_guard_effect = traits_guard_effect.length > 0 ? Math.round(100 * traits_guard_effect[0].value).toLocaleString() : 100;
    const sparam_healing_spells = traits_healing_spells.length > 0 ? Math.round(100 * traits_healing_spells[0].value).toLocaleString() : 100;
    const sparam_healing_potions = traits_healing_potions.length > 0 ? Math.round(100 * traits_healing_potions[0].value).toLocaleString() : 100;
    const sparam_mp_cost_rate = traits_mp_cost_rate.length > 0 ? Math.round(100 * traits_mp_cost_rate[0].value).toLocaleString() : 100;
    const sparam_tp_gain_rate = traits_tp_gain_rate.length > 0 ? Math.round(100 * traits_tp_gain_rate[0].value).toLocaleString() : 100;
    const sparam_physical_damage = traits_physical_damage.length > 0 ? Math.round(100 * traits_physical_damage[0].value).toLocaleString() : 100;
    const sparam_magical_damage = traits_magical_damage.length > 0 ? Math.round(100 * traits_magical_damage[0].value).toLocaleString() : 100;
    const sparam_exp_rate = traits_exp_rate.length > 0 ? Math.round(100 * traits_exp_rate[0].value).toLocaleString() : 100;
    txt += this.DisplayTextInfo_PadSpaces( "Physical Damage Rate: " + String(sparam_physical_damage), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magical Damage Rate: " + String(sparam_magical_damage), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Healing Rate, Spells: " + String(sparam_healing_spells), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Healing Rate, Potions: " + String(sparam_healing_potions), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Magic Point Cost Rate: " + String(sparam_mp_cost_rate), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Tactical Point Gain Rate: " + String(sparam_tp_gain_rate), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Guard Effect: " + String(sparam_guard_effect), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "EXP Learning Rate: " + String(sparam_exp_rate), char_count_width );
    txt += "\\LB";

    return txt;
};
TJS.prototype.DisplayTextEnemyInfo = function(actor_in, char_count_width) {
    if ( !actor_in ) return "";
    const actor = $dataEnemies[actor_in.id];
    if ( !actor ) return "";
    var txt = "";
    const traits = actor.traits;
    if ( !traits ) return "";
    const custom_traits = actor.custom_traits;
    if ( !custom_traits ) return "";

    const level = TJS_auto.Lerp( 1.0, tjs_max_monster_level, ($gameSystem.average_actor_level - 1).clamp( 0, tjs_max_character_level - 1 ) / (tjs_max_character_level - 1) );
    const level_factor_base = (level - 1).clamp( 0, tjs_max_monster_level * 2.5 ) / (tjs_max_monster_level - 1);
    const action_level_multiplier = 1.0 - Math.pow(1.0 - level_factor_base.clamp( 0.0, 1.0 ), 3.25);
    const level_factor = TJS_auto.Lerp( 1.00000, tjs_max_stat_multiplier, level_factor_base );
    const level_factor_hp = TJS_auto.Lerp( 1.00000, tjs_max_hp_multiplier, level_factor_base );

    console.log( {
                a0_level: level,
                a1_level_factor_base: level_factor_base,
                a2_level_factor: level_factor,
                a3_level_factor_hp: level_factor_hp
                } )

    // Params
    const traits_param_max_hp = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 0) );
    const traits_param_max_mp = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 1) );
    const traits_param_strength = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 2) );
    const traits_param_defense = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 3) );
    const traits_param_mana = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 4) );
    const traits_param_magic_defense = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 5) );
    const traits_param_agility = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 6) );
    const traits_param_luck = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_PARAM) && (trait.dataId == 7) );
    const traits_param_magic_focus = (custom_traits.magic_focus_add * level_factor * 0.1) * custom_traits.magic_focus_multiply;
    const param_max_hp = Math.round((traits_param_max_hp.length > 0 ? Math.round(actor.params[0] * traits_param_max_hp[0].value) : actor.params[0]) * level_factor_hp);
    const param_max_mp = Math.round((traits_param_max_mp.length > 0 ? Math.round(actor.params[1] * traits_param_max_mp[0].value) : actor.params[1]) * level_factor);
    const param_strength = Math.round((traits_param_strength.length > 0 ? Math.round(actor.params[2] * traits_param_strength[0].value) : actor.params[2]) * level_factor * 0.1);
    const param_defense = Math.round((traits_param_defense.length > 0 ? Math.round(actor.params[3] * traits_param_defense[0].value) : actor.params[3]) * level_factor * 0.1);
    const param_mana = Math.round((traits_param_mana.length > 0 ? Math.round(actor.params[4] * traits_param_mana[0].value) : actor.params[4]) * level_factor * 0.1);
    const param_magic_defense = Math.round((traits_param_magic_defense.length > 0 ? Math.round(actor.params[5] * traits_param_magic_defense[0].value) : actor.params[5]) * level_factor * 0.1);
    const param_agility = Math.round((traits_param_agility.length > 0 ? Math.round(actor.params[6] * traits_param_agility[0].value) : actor.params[6]) * level_factor * 0.1);
    const param_luck = Math.round((traits_param_luck.length > 0 ? Math.round(actor.params[7] * traits_param_luck[0].value) : actor.params[7]) * level_factor * 0.1);
    const param_magic_focus = Math.round( traits_param_magic_focus );
    txt += this.DisplayTextInfo_PadSpaces( "Maximum Health Points: " + (param_max_hp).toLocaleString(), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Maximum Magic Points: " + (param_max_mp).toLocaleString(), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Strength: " + (param_strength).toLocaleString(), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Defense: " + (param_defense).toLocaleString(), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Mana: " + (param_mana).toLocaleString(), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magic Defense: " + (param_magic_defense).toLocaleString(), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Agility: " + (param_agility).toLocaleString(), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magic Focus: " + (param_magic_focus).toLocaleString(), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Luck: " + (param_luck).toLocaleString(), char_count_width );
    txt += "\\LB";

    // XParams
    const xparam_hit_rate_physical = Math.round(custom_traits.to_hit_physical_add * custom_traits.to_hit_physical_multiply * 100).toLocaleString();
    const xparam_hit_rate_magical = Math.round(custom_traits.to_hit_magical_add * custom_traits.to_hit_magical_multiply * 100).toLocaleString();
    const xparam_critical_rate_physical = Math.round(custom_traits.physical_critical_hit_rate * 100).toLocaleString();
    const xparam_critical_rate_magical = Math.round(custom_traits.magical_critical_hit_rate * 100).toLocaleString();
    const xparam_critical_evade_physical = Math.round(custom_traits.physical_critical_evade_rate * 100).toLocaleString();
    const xparam_critical_evade_magical = Math.round(custom_traits.magical_critical_evade_rate * 100).toLocaleString();
    const traits_evasion_physical = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 1) );
    const traits_evasion_magical = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 4) );
    const xparam_evasion_physical = traits_evasion_physical.length > 0 ? Math.round(100 * traits_evasion_physical[0].value).toLocaleString() : 0;
    const xparam_evasion_magical = traits_evasion_magical.length > 0 ? Math.round(100 * traits_evasion_magical[0].value).toLocaleString() : 0;
    txt += this.DisplayTextInfo_PadSpaces( "Physical Hit Rate Bonus: " + String(xparam_hit_rate_physical), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magical Hit Rate Bonus: " + String(xparam_hit_rate_magical), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Physical Evasion/Dodging Rate: " + String(xparam_evasion_physical), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magical Evasion/Dodging Rate: " + String(xparam_evasion_magical), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Physical Critical Hit Rate: " + String(xparam_critical_rate_physical), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magical Critical Hit Rate: " + String(xparam_critical_rate_magical), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Physical Critical Evade Rate: " + String(xparam_critical_evade_physical), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magical Critical Evade Rate: " + String(xparam_critical_evade_magical), char_count_width );
    txt += "\\LB";

    // SParams
    const traits_guard_effect = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 1) );
    const traits_healing_spells = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 2) );
    const traits_healing_potions = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 3) );
    const traits_mp_cost_rate = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 4) );
    const traits_tp_gain_rate = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 5) );
    const traits_physical_damage = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 6) );
    const traits_magical_damage = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_SPARAM) && (trait.dataId == 7) );
    const sparam_guard_effect = traits_guard_effect.length > 0 ? Math.round(100 * traits_guard_effect[0].value).toLocaleString() : 100;
    const sparam_healing_spells = traits_healing_spells.length > 0 ? Math.round(100 * traits_healing_spells[0].value).toLocaleString() : 100;
    const sparam_healing_potions = traits_healing_potions.length > 0 ? Math.round(100 * traits_healing_potions[0].value).toLocaleString() : 100;
    const sparam_mp_cost_rate = traits_mp_cost_rate.length > 0 ? Math.round(100 * traits_mp_cost_rate[0].value).toLocaleString() : 100;
    const sparam_tp_gain_rate = traits_tp_gain_rate.length > 0 ? Math.round(100 * traits_tp_gain_rate[0].value).toLocaleString() : 100;
    const sparam_physical_damage = traits_physical_damage.length > 0 ? Math.round(100 * traits_physical_damage[0].value).toLocaleString() : 100;
    const sparam_magical_damage = traits_magical_damage.length > 0 ? Math.round(100 * traits_magical_damage[0].value).toLocaleString() : 100;
    txt += this.DisplayTextInfo_PadSpaces( "Physical Damage Rate: " + String(sparam_physical_damage), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Magical Damage Rate: " + String(sparam_magical_damage), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Healing Rate, Spells: " + String(sparam_healing_spells), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Healing Rate, Potions: " + String(sparam_healing_potions), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Magic Point Cost Rate: " + String(sparam_mp_cost_rate), char_count_width );
    txt += this.DisplayTextInfo_PadSpaces( "Tactical Point Gain Rate: " + String(sparam_tp_gain_rate), char_count_width );
    txt += "\\LB";
    txt += this.DisplayTextInfo_PadSpaces( "Guard Effect: " + String(sparam_guard_effect), char_count_width );
    txt += "\\LB";

    // Actions
    const traits_action_chances = traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_ACTION_PLUS );
    var action_chances_base = traits_action_chances.length > 0 ? traits_action_chances.map( trait => Math.round(trait.value * action_level_multiplier * 10000.00000) / 100 ) : [];
    action_chances_base.push( 100 );
    const action_chances = TJS_auto.DeepCopy( action_chances_base ).sort( (a, b) => (b - a) );
    txt += "Maximum actions per combat turn: " + action_chances.length + "\\LB";
    txt += "Chances of actions every turn: ";
    const chances_size = action_chances.length.clamp( 1, 10 );
    for ( let i = 0; i < chances_size; i++ ) {
        txt += String( action_chances[i] ) + "%";
        if ( i < chances_size - 1 ) txt += ", ";
        if ( (i == chances_size - 1) && (action_chances.length > 10) ) txt += "...";
    }
    txt += "\\LB";

    return txt;
};
TJS.prototype.GetTextInfoItemCashValue = function(item) {
    if ( !item ) return "";
    var cash_value = 0;

    cash_value = TJS_auto.CalcItemPrice( item );

    if ( cash_value == 0 ) return "This item normally can't be sold to any merchant.\\LB";

    else if ( (item.price == 0) && (cash_value > 0) )
        return "This item normally can't be sold to any merchant.\\LB" + "However it is worth " + (cash_value).toLocaleString() + " " + TextManager.currencyUnit + ".\\LB";

    return "Value: " + (cash_value).toLocaleString() + " " + TextManager.currencyUnit + ".\\LB";
};
TJS.prototype.GetTextInfoItemLevel = function(item) {
    if ( !item ) return "";

    return "Level " + Number( item.level ) + " item.\\LB";
};
TJS.prototype.GetTextInfoEffects = function(item, col_width_chars=64, cols=1) {
    var text = "";
    if ( !item ) return text;
    if ( !item.effects ) return text;
    const effects_ordered = TJS_auto.DeepCopy(item.effects).sort( (a, b) => (a.code - b.code) );
    const effects_size = item.effects.length;
    var effects_counter = 0;

    var data_text = "";
    if ( item.consumable ) data_text += "This item is consumed when used.\\LB";
    if ( item.occasion ) {
        if ( item.occasion == 1 ) data_text += "This item may only be used during battle.\\LB";
        if ( item.occasion == 2 ) data_text += "This item may only be used on the inventory screen outside of battle.\\LB";
        if ( item.occasion == 3 ) data_text += "This item is not usable during battle or on the inventory screen, at least not by normal means.\\LB";
    }
    else {
        data_text += "This item may be used both during and outside of battle.\\LB";
    }

    if ( data_text.length > 0 ) data_text += "\\LB";
    text += data_text;

    for ( let i = 0; i < effects_size; i++ ) {
        const effect = effects_ordered[i];
        var txt = "";

        const value1_percent = (Math.round(effect.value1 * 10000.00000) / 100).toLocaleString() + "%";
        const value1_percent_neg = (Math.round(-effect.value1 * 10000.00000) / 100).toLocaleString() + "%";
        const value2_integer = (Math.round(effect.value2)).toLocaleString();
        const value2_integer_neg = (Math.round(-effect.value2)).toLocaleString();

        if ( effect.code == Game_Action.EFFECT_RECOVER_HP ) {
            if ( effect.value1 == 0 ) {
                if ( effect.value2 > 0 ) txt = "Increases Health Points by " + value2_integer + ".  ";
                else if ( effect.value2 < 0 ) txt = "Decreases Health Points by " + value2_integer_neg + ".  ";
            }
            else {
                if ( effect.value2 == 0 ) {
                    if ( effect.value1 > 0 ) txt = "Increases Health Points by " + value1_percent + ".  ";
                    else if ( effect.value1 < 0 ) txt = "Decreases Health Points by " + value1_percent_neg + ".  ";
                }
                else {
                    txt = "Changes Health Points by " + value1_percent + " of maximum, and also " + value2_integer + " points.  ";
                }
            }
        }
        else if ( effect.code == Game_Action.EFFECT_RECOVER_MP ) {
            if ( effect.value1 == 0 ) {
                if ( effect.value2 > 0 ) txt = "Increases Magic Points by " + value2_integer + ".  ";
                else if ( effect.value2 < 0 ) txt = "Decreases Magic Points by " + value2_integer_neg + ".  ";
            }
            else {
                if ( effect.value2 == 0 ) {
                    if ( effect.value1 > 0 ) txt = "Increases Magic Points by " + value1_percent + ".  ";
                    else if ( effect.value1 < 0 ) txt = "Decreases Magic Points by " + value1_percent_neg + ".  ";
                }
                else {
                    txt = "Changes Magic Points by " + value1_percent + " of maximum, and also " + value2_integer + " points.  ";
                }
            }
        }
        if ( effect.code == Game_Action.EFFECT_GAIN_TP ) {
            txt = "Increases Tactical Points by " + (effect.value1).toLocaleString() + " points.  ";
        }
        if ( effect.code == Game_Action.EFFECT_ADD_STATE ) {
            txt = "Adds effect: " + $dataStates[effect.dataId].name + ", " + value1_percent + " success rate.  ";
        }
        if ( effect.code == Game_Action.EFFECT_REMOVE_STATE ) {
            const state_id = this.GetSingleStateAndDropIfPastFirst( effect.dataId );

            if ( state_id > 0 )
                txt = "Removes effect: " + $dataStates[effect.dataId].name + ", " + value1_percent + " success rate.  ";
        }
        if ( effect.code == Game_Action.EFFECT_ADD_BUFF ) {
            txt = "Adds ability buff: " + this.GetParameterNameFromNumber( effect.dataId ) + ", " + (effect.value1).toLocaleString() + " turns.  ";
        }
        if ( effect.code == Game_Action.EFFECT_ADD_DEBUFF ) {
            txt = "Adds ability debuff: " + this.GetParameterNameFromNumber( effect.dataId ) + ", " + (effect.value1).toLocaleString() + " turns.  ";
        }
        if ( effect.code == Game_Action.EFFECT_REMOVE_BUFF ) {
            txt = "Removes ability score buff (if present): " + this.GetParameterNameFromNumber( effect.dataId ) + ".  ";
        }
        if ( effect.code == Game_Action.EFFECT_REMOVE_DEBUFF ) {
            txt = "Removes ability score debuff (if present): " + this.GetParameterNameFromNumber( effect.dataId ) + ".  ";
        }
        if ( effect.code == Game_Action.EFFECT_GROW ) {
            txt = "Permanently increases " + this.GetParameterNameFromNumber( effect.dataId ) + " by " + (effect.value1).toLocaleString() + " points.  ";
        }
        if ( effect.code == Game_Action.EFFECT_LEARN_SKILL ) {
            txt = "Permanently adds skill: " + $dataSkills[effect.dataId].name + ".  ";
        }

        if ( txt.length > 0 ) {
            if ( cols == 2 ) {
                if ( this.IsEven(effects_counter) == true ) {
                    const padding = col_width_chars - txt.length;

                    for ( let p = 0; p < padding; p++ ) txt += " ";
                }
                else {
                    txt += "\\LB";
                }
            }
            else {
                txt += "\\LB";
            }

            text += txt;

            effects_counter++;
        }
    }

    if ( this.IsEven(effects_counter) == false ) text += "\\LB";
    if ( effects_counter > 0 ) text += "\\LB";

    return text;
};
TJS.prototype.GetTextInfoParameterChanges = function(item, col_width_chars=64, cols=1) {
    var text = "";
    if ( !item ) return text;
    if ( !item.params ) return text;
    if ( !item.custom_traits ) return text;
    const params_size = item.params.length;
    var param_counter = 0;

    for ( let i = 0; i < params_size; i++ ) {
        const param = item.params[i];
        var txt = "";

        if ( param > 0 ) {
            txt = "Increases " + TJS_auto.GetParameterNameFromNumber(i) + " by " + Math.round(param).toLocaleString() + ".  ";
        }
        else if ( param < 0 ) {
            txt = "Decreases " + TJS_auto.GetParameterNameFromNumber(i) + " by " + Math.round(-param).toLocaleString() + ".  ";
        }

        if ( txt.length > 0 ) {
            if ( cols == 2 ) {
                if ( this.IsEven(param_counter) == true ) {
                    const padding = col_width_chars - txt.length;

                    for ( let p = 0; p < padding; p++ ) txt += " ";
                }
                else {
                    txt += "\\LB";
                }
            }
            else {
                txt += "\\LB";
            }

            text += txt;

            param_counter++;
        }
    }

    if ( item.custom_traits.magic_focus_add != 0 ) {
        var txt = "";

        if ( item.custom_traits.magic_focus_add > 0 )
            txt = "Increases " + TJS_auto.GetParameterNameFromNumber(8) + " by " + Math.round(item.custom_traits.magic_focus_add).toLocaleString() + ".  ";
        else if ( item.custom_traits.magic_focus_add < 0 )
            txt = "Decreases " + TJS_auto.GetParameterNameFromNumber(8) + " by " + Math.round(-item.custom_traits.magic_focus_add).toLocaleString() + ".  ";

        if ( txt.length > 0 ) {
            if ( cols == 2 ) {
                if ( this.IsEven(param_counter) == true ) {
                    const padding = col_width_chars - txt.length;

                    for ( let p = 0; p < padding; p++ ) txt += " ";
                }
                else {
                    txt += "\\LB";
                }
            }
            else {
                txt += "\\LB";
            }

            text += txt;

            param_counter++;
        }
    }

    if ( this.IsEven(param_counter) == false ) text += "\\LB";
    if ( param_counter > 0 ) text += "\\LB";

    return text;
};
TJS.prototype.GetTextInfoParameters = function(item, col_width_chars=64, cols=1) {
    var text = "";
    if ( !item ) return text;
    if ( !item.params ) return text;
    const params_size = item.params.length;
    var param_counter = 0;

    for ( let i = 0; i < params_size; i++ ) {
        const param = item.params[i];
        var txt = "";

        txt = this.GetParameterNameFromNumber(i) + ": " + Math.round(param).toLocaleString() + ".  ";

        if ( txt.length > 0 ) {
            if ( cols == 2 ) {
                if ( this.IsEven(param_counter) == true ) {
                    const padding = col_width_chars - txt.length;

                    for ( let p = 0; p < padding; p++ ) txt += " ";
                }
                else {
                    txt += "\\LB";
                }
            }
            else {
                txt += "\\LB";
            }

            text += txt;

            param_counter++;
        }
    }

    text += this.GetParameterNameFromNumber(8) + ": " + Math.round(item.custom_traits.magic_focus_add * item.custom_traits.magic_focus_multiply).toLocaleString() + ".  ";
    param_counter++;

    if ( this.IsEven(param_counter) == false ) text += "\\LB";
    if ( param_counter > 0 ) text += "\\LB";

    return text;
};
TJS.prototype.GetTextInfoAddSkills = function(traits, col_width_chars=64, cols=1) {
    var text = "";
    if ( !traits ) return text;
    const traits_size = traits.length;
    var trait_counter = 0;

    for ( let i = 0; i < traits_size; i++ ) {
        const trait = traits[i];
        var txt = "";

        if ( trait.code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
            txt = "Adds Skill: " + $dataSkills[trait.dataId].name + ".  ";
        }

        if ( txt.length > 0 ) {
            if ( cols == 2 ) {
                if ( this.IsEven(trait_counter) == true ) {
                    const padding = col_width_chars - txt.length;

                    for ( let p = 0; p < padding; p++ ) txt += " ";
                }
                else {
                    txt += "\\LB";
                }
            }
            else {
                txt += "\\LB";
            }

            text += txt;

            trait_counter++;
        }
    }

    if ( this.IsEven(trait_counter) == false ) text += "\\LB";
    if ( trait_counter > 0 ) text += "\\LB";

    return text;
};
TJS.prototype.GetTextInfoActorSkills = function(traits, col_width_chars=64, cols=1) {
    var text = "";
    if ( !traits ) return text;
    const traits_size = traits.length;
    if ( traits_size < 1 ) return;
    var trait_counter = 0;

    text = "Skills:\\LB";

    for ( let i = 0; i < traits_size; i++ ) {
        const trait = traits[i];
        var txt = "";

        if ( trait.code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
            txt = $dataSkills[trait.dataId].name;
        }

        if ( txt.length > 0 ) {
            if ( cols == 2 ) {
                if ( this.IsEven(trait_counter) == true ) {
                    const padding = col_width_chars - txt.length;

                    for ( let p = 0; p < padding; p++ ) txt += " ";
                }
                else {
                    txt += "\\LB";
                }
            }
            else {
                txt += "\\LB";
            }

            text += txt;

            trait_counter++;
        }
    }

    if ( this.IsEven(trait_counter) == false ) text += "\\LB";
    if ( trait_counter > 0 ) text += "\\LB";

    return text;
};
TJS.prototype.GetTextInfoEnemySkills = function(enemy, col_width_chars=64, cols=1) {
    var text = "";
    if ( !enemy ) return text;
    const actions_size = enemy.actions.length;
    if ( actions_size < 1 ) return;
    var action_counter = 0;

    text = "Skills:\\LB";

    for ( let i = 0; i < actions_size; i++ ) {
        const action = enemy.actions[i];
        var txt = $dataSkills[action.skillId].name;
        if ( i < enemy.attack_levels.length )
            txt += ", power: " + String( enemy.attack_levels[i] );

        if ( txt.length > 0 ) {
            if ( cols == 2 ) {
                if ( this.IsEven(action_counter) == true ) {
                    const padding = col_width_chars - txt.length;

                    for ( let p = 0; p < padding; p++ ) txt += " ";
                }
                else {
                    txt += "\\LB";
                }
            }
            else {
                txt += "\\LB";
            }

            text += txt;

            action_counter++;
        }
    }

    if ( this.IsEven(action_counter) == false ) text += "\\LB";
    if ( action_counter > 0 ) text += "\\LB";

    return text;
};
TJS.prototype.GetTextInfoItemTraits = function(item, col_width_chars=64, cols=1) {
    var text = "";
    if ( !item ) return text;
    if ( !item.traits ) return text;
    if ( !item.custom_traits ) return text;
    var traits = item.traits;
    var traits_copy = this.DeepCopy( item.traits );
    const custom_traits = item.custom_traits;
    var txt = [];

    if ( custom_traits.magic_focus_multiply != 1 ) traits_copy.push( { code:Game_BattlerBase.TRAIT_PARAM, dataId:6.5, value:custom_traits.magic_focus_multiply } );

    if ( custom_traits.max_tactical_points_add > 0 ) txt.push( "Tactical Point Bonus: " + Math.round(custom_traits.max_tactical_points_add).toLocaleString() + "." );
    if ( custom_traits.max_tactical_points_add < 0 ) txt.push( "Tactical Point Penalty: " + Math.round(custom_traits.max_tactical_points_add).toLocaleString() + "." );
    if ( custom_traits.max_tactical_points_multiply != 1 ) txt.push( "Tactical Point Multiplier: " + (Math.round(custom_traits.max_tactical_points_multiply * 10000.00000) / 100).toLocaleString() + "%." );
    if ( (cols == 2) && (this.IsEven(txt.length) == false) ) txt.push( " " );

    if ( custom_traits.to_hit_physical_add > 0 ) txt.push( "Physical Hit Rate Bonus: " + Math.round(custom_traits.to_hit_physical_add * 100.00000).toLocaleString() + "." );
    if ( custom_traits.to_hit_physical_add < 0 ) txt.push( "Physical Hit Rate Penalty: " + Math.round(custom_traits.to_hit_physical_add * 100.00000).toLocaleString() + "." );
    if ( custom_traits.to_hit_physical_multiply != 1 ) txt.push( "Physical Hit Rate Multiplier: " + (Math.round(custom_traits.to_hit_physical_multiply * 10000.00000) / 100).toLocaleString() + "%." );
    if ( custom_traits.to_hit_magical_add > 0 ) txt.push( "Magical Hit Rate Bonus: " + Math.round(custom_traits.to_hit_magical_add * 100.00000).toLocaleString() + "." );
    if ( custom_traits.to_hit_magical_add < 0 ) txt.push( "Magical Hit Rate Penalty: " + Math.round(custom_traits.to_hit_magical_add * 100.00000).toLocaleString() + "." );
    if ( custom_traits.to_hit_magical_multiply != 1 ) txt.push( "Magical Hit Rate Multiplier: " + (Math.round(custom_traits.to_hit_magical_multiply * 10000.00000) / 100).toLocaleString() + "%." );
    if ( (cols == 2) && (this.IsEven(txt.length) == false) ) txt.push( " " );

    if ( custom_traits.physical_critical_hit_rate > 0 ) txt.push( "Physical Critical Hit Rate Bonus: " + (Math.round(custom_traits.physical_critical_hit_rate * 10000) / 100).toLocaleString() + "." );
    if ( custom_traits.physical_critical_hit_rate < 0 ) txt.push( "Physical Critical Hit Rate Penalty: " + (Math.round(custom_traits.physical_critical_hit_rate * 10000) / 100).toLocaleString() + "." );
    if ( custom_traits.magical_critical_hit_rate > 0 ) txt.push( "Magical Critical Hit Rate Bonus: " + (Math.round(custom_traits.magical_critical_hit_rate * 10000) / 100).toLocaleString() + "." );
    if ( custom_traits.magical_critical_hit_rate < 0 ) txt.push( "Magical Critical Hit Rate Penalty: " + (Math.round(custom_traits.magical_critical_hit_rate * 10000) / 100).toLocaleString() + "." );
    if ( custom_traits.physical_critical_evade_rate > 0 ) txt.push( "Physical Critical Evasion Bonus: " + (Math.round(custom_traits.physical_critical_evade_rate * 10000) / 100).toLocaleString() + "." );
    if ( custom_traits.physical_critical_evade_rate < 0 ) txt.push( "Physical Critical Evasion Penalty: " + (Math.round(custom_traits.physical_critical_evade_rate * 10000) / 100).toLocaleString() + "." );
    if ( custom_traits.magical_critical_evade_rate > 0 ) txt.push( "Magical Critical Evasion Bonus: " + (Math.round(custom_traits.magical_critical_evade_rate * 10000) / 100).toLocaleString() + "." );
    if ( custom_traits.magical_critical_evade_rate < 0 ) txt.push( "Magical Critical Evasion Penalty: " + (Math.round(custom_traits.magical_critical_evade_rate * 10000) / 100).toLocaleString() + "." );
    if ( (cols == 2) && (this.IsEven(txt.length) == false) ) txt.push( " " );

    const traits_param_multiply = traits_copy.filter( trait => trait.code == Game_BattlerBase.TRAIT_PARAM ).sort( (a, b) => (a.dataId - b.dataId) );
    if ( traits_param_multiply.length > 0 ) {
        for ( const trait of traits_param_multiply ) {
            var text_trait_name = "";
            if ( (trait.dataId <= 6) || (trait.dataId == 7) ) text_trait_name = this.GetParameterNameFromNumber( trait.dataId );
            else if ( (trait.dataId > 6) && (trait.dataId < 7) ) text_trait_name = "Magic Focus";

            txt.push( text_trait_name + " multiplied by: " + (Math.round( trait.value * 10000.00000 ) / 100).toLocaleString() + "%." );
        }
    }

    const traits_xparam_mod = this.DeepCopy(traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_XPARAM )).sort( (a, b) => (a.dataId - b.dataId) );
    if ( traits_xparam_mod.length > 0 ) {
        for ( const trait of traits_xparam_mod ) {
            var text_trait = "";

            if ( trait.value < 0.00000 ) {
                if ( trait.dataId == 7 ) text_trait = "HP loss per turn: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.";
                else if ( trait.dataId == 8 ) text_trait = "MP loss per turn: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.";
                else if ( trait.dataId == 9 ) text_trait = "TP loss per turn: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.";
                else text_trait = this.GetXParameterNameFromNumber( trait.dataId ) + " reduction: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.";
            } else {
                if ( trait.dataId == 7 ) text_trait = "HP regeneration per turn: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.";
                else if ( trait.dataId == 8 ) text_trait = "MP regeneration per turn: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.";
                else if ( trait.dataId == 9 ) text_trait = "TP regeneration per turn: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.";
                else text_trait = this.GetXParameterNameFromNumber( trait.dataId ) + " bonus: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.";
            }

            txt.push( text_trait );
        }
    }

    const traits_sparam_mod = this.DeepCopy(traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_SPARAM )).sort( (a, b) => (a.dataId - b.dataId) );
    if ( traits_sparam_mod.length > 0 ) {
        for ( const trait of traits_sparam_mod )
            txt.push( this.GetSParameterNameFromNumber( trait.dataId ) + " is multiplied by: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%." );
    }

    if ( (cols == 2) && (this.IsEven(txt.length) == false) ) txt.push( " " );

    for ( element = 1; element < $dataSystem.elements.length; element++ ) {
        const trait_element_rate = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_ELEMENT_RATE) && (trait.dataId == element) );
        if ( trait_element_rate.length > 0 )
            txt.push( this.GetElementTextFromIdCaps( element ) + " does " + (Math.round( trait_element_rate[0].value * 10000.00000 ) / 100).toLocaleString() + "% damage." );
    }
    if ( (cols == 2) && (this.IsEven(txt.length) == false) ) txt.push( " " );

    const trait_debuff_rate_mhp = traits.filter( trait => trait.code == (Game_BattlerBase.TRAIT_DEBUFF_RATE) && (trait.dataId == 0) );
    const trait_debuff_rate_mmp = traits.filter( trait => trait.code == (Game_BattlerBase.TRAIT_DEBUFF_RATE) && (trait.dataId == 1) );
    const trait_debuff_rate_strength = traits.filter( trait => trait.code == (Game_BattlerBase.TRAIT_DEBUFF_RATE) && (trait.dataId == 2) );
    const trait_debuff_rate_defense = traits.filter( trait => trait.code == (Game_BattlerBase.TRAIT_DEBUFF_RATE) && (trait.dataId == 3) );
    const trait_debuff_rate_mana = traits.filter( trait => trait.code == (Game_BattlerBase.TRAIT_DEBUFF_RATE) && (trait.dataId == 4) );
    const trait_debuff_rate_magic_defense = traits.filter( trait => trait.code == (Game_BattlerBase.TRAIT_DEBUFF_RATE) && (trait.dataId == 5) );
    const trait_debuff_rate_agility = traits.filter( trait => trait.code == (Game_BattlerBase.TRAIT_DEBUFF_RATE) && (trait.dataId == 6) );
    const trait_debuff_rate_magic_focus = custom_traits.magic_focus_debuff_rate;
    const trait_debuff_rate_luck = traits.filter( trait => trait.code == (Game_BattlerBase.TRAIT_DEBUFF_RATE) && (trait.dataId == 7) );
    if ( trait_debuff_rate_mhp.length > 0 ) txt.push( "Resistance to " + this.GetParameterNameFromNumber(0) + " being debuffed is " + (Math.round((1.00000 - trait_debuff_rate_mhp[0].value) * 10000.00000) / 100).toLocaleString() + "%." );
    if ( trait_debuff_rate_mmp.length > 0 ) txt.push( "Resistance to " + this.GetParameterNameFromNumber(1) + " being debuffed is " + (Math.round((1.00000 - trait_debuff_rate_mmp[0].value) * 10000.00000) / 100).toLocaleString() + "%." );
    if ( trait_debuff_rate_strength.length > 0 ) txt.push( "Resistance to " + this.GetParameterNameFromNumber(2) + " being debuffed is " + (Math.round((1.00000 - trait_debuff_rate_strength[0].value) * 10000.00000) / 100).toLocaleString() + "%." );
    if ( trait_debuff_rate_defense.length > 0 ) txt.push( "Resistance to " + this.GetParameterNameFromNumber(3) + " being debuffed is " + (Math.round((1.00000 - trait_debuff_rate_defense[0].value) * 10000.00000) / 100).toLocaleString() + "%." );
    if ( trait_debuff_rate_mana.length > 0 ) txt.push( "Resistance to " + this.GetParameterNameFromNumber(4) + " being debuffed is " + (Math.round((1.00000 - trait_debuff_rate_mana[0].value) * 10000.00000) / 100).toLocaleString() + "%." );
    if ( trait_debuff_rate_magic_defense.length > 0 ) txt.push( "Resistance to " + this.GetParameterNameFromNumber(5) + " being debuffed is " + (Math.round((1.00000 - trait_debuff_rate_magic_defense[0].value) * 10000.00000) / 100).toLocaleString() + "%." );
    if ( trait_debuff_rate_agility.length > 0 ) txt.push( "Resistance to " + this.GetParameterNameFromNumber(6) + " being debuffed is " + (Math.round((1.00000 - trait_debuff_rate_agility[0].value) * 10000.00000) / 100).toLocaleString() + "%." );
    if ( trait_debuff_rate_magic_focus != 1 ) txt.push( "Resistance to " + this.GetParameterNameFromNumber(8) + " being debuffed is " + (Math.round((1.00000 - trait_debuff_rate_magic_focus) * 10000.00000) / 100).toLocaleString() + "%." );
    if ( trait_debuff_rate_luck.length > 0 ) txt.push( "Resistance to " + this.GetParameterNameFromNumber(7) + " being debuffed is " + (Math.round((1.00000 - trait_debuff_rate_luck[0].value) * 10000.00000) / 100).toLocaleString() + "%." );
    if ( (cols == 2) && (this.IsEven(txt.length) == false) ) txt.push( " " );

    const traits_immunity = this.DeepCopy(traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_STATE_RESIST )).sort( (a, b) => (a.dataId - b.dataId) );
    if ( traits_immunity.length > 0 ) {
        for ( const trait of traits_immunity )
            txt.push( "Immunity to " + $dataStates[ this.GetSingleStateAndDropIfPastFirst(trait.dataId) ].name + "." );
    }

    const traits_partial_resistance = this.DeepCopy(traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_STATE_RATE )).sort( (a, b) => (a.dataId - b.dataId) );
    if ( traits_partial_resistance.length > 0 ) {
        for ( const trait of traits_partial_resistance ) {
            const s_id = this.GetSingleStateAndDropIfPastFirst( trait.dataId );

            txt.push( "Resistance to " + $dataStates[s_id].name + ": " + (Math.round((1.00000 - trait.value) * 10000.00000) / 100).toLocaleString() + "%." );
        }
    }
    if ( (cols == 2) && (this.IsEven(txt.length) == false) ) txt.push( " " );

    const traits_attack_speed = traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_ATTACK_SPEED );
    if ( traits_attack_speed.length > 0 ) {
        txt.push( "Attack speed altered by: " + (traits_attack_speed[0].value).toLocaleString() + "." );
    }
    const traits_attack_times = traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_ATTACK_TIMES );
    if ( traits_attack_times.length > 0 ) {
        txt.push( "Attack Times per combat action: " + (traits_attack_times[0].value).toLocaleString() + "." );
    }
    if ( (cols == 2) && (this.IsEven(txt.length) == false) ) txt.push( " " );
    const traits_action_plus = this.DeepCopy(traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_ACTION_PLUS )).sort( (a, b) => (b.value - a.value) );
    if ( traits_action_plus.length > 0 ) {
        var text_actions = "";
        txt.push( "Chances of additional actions: " );
        if ( cols == 2 ) txt.push( " " );

        for ( let trait = 0; trait < traits_action_plus.length; trait++ ) {
            if ( (trait + 1) < traits_action_plus.length ) text_actions += String(Math.round(traits_action_plus[trait].value * 10000.00000) / 100) + "%, ";
            else text_actions += String(Math.round(traits_action_plus[trait].value * 10000.00000) / 100) + "%.";
        }

        txt.push( text_actions );
    }
    if ( (cols == 2) && (this.IsEven(txt.length) == false) ) txt.push( " " );

    const traits_attack_induce_effect = this.DeepCopy(traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_ATTACK_STATE )).sort( (a, b) => (a.dataId - b.dataId) );
    if ( traits_attack_induce_effect.length > 0 ) {
        txt.push( "Enemies attacked by a normal attack have a chance of:" );
        for ( const trait of traits_attack_induce_effect ) {
            const state_id = trait.dataId;
            if ( state_id < 1 ) continue;
            if ( state_id >= $dataStates.length ) continue;
            const text_state = $dataStates[state_id].name;
            const text_chance = String(Math.round(trait.value * 10000.00000) /100) + "%";

            txt.push( text_chance + " to get: " + text_state );

            console.log( trait );
        }
    }
    if ( (cols == 2) && (this.IsEven(txt.length) == false) ) txt.push( " " );

    const traits_equip_seal = traits.filter( trait => (trait.code == Game_BattlerBase.TRAIT_EQUIP_SEAL) && (this.GetIndexForEquipmentType("shield") == trait.dataId) );
    if ( traits_equip_seal.length > 0 ) {
        txt.push( "A shield can't be equipped." );
    }

    const traits_party_ability = traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_PARTY_ABILITY );
    if ( traits_party_ability.length > 0 ) {
        for ( const trait of traits_party_ability ) {
            if ( trait.dataId == 0 ) txt.push( "Random encounters occur half as often." );
            else if ( trait.dataId == 1 ) txt.push( "Random encounters do not occur." );
            else if ( trait.dataId == 2 ) txt.push( "Party isn't subject to being ambushed by surprise." );
            else if ( trait.dataId == 3 ) txt.push( "Party more easily takes enemies by surprise." );
            else if ( trait.dataId == 4 ) txt.push( "Enemies defeated in combat drop twice as many GP." );
            else if ( trait.dataId == 5 ) txt.push( "Enemies defeated in combat drop twice as many items." );
        }
    }

    const traits_skill_type_seal = traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_STYPE_SEAL );
    if ( traits_skill_type_seal.length > 0 ) {
        for ( const trait of traits_skill_type_seal ) {
            if ( trait.dataId == 1 ) txt.push( "Melee skills can't be used." );
            else if ( trait.dataId == 2 ) txt.push( "Gun and Grenade skills can't be used." );
            else if ( trait.dataId == 3 ) txt.push( "Magic skills can't be used." );
            else if ( trait.dataId == 4 ) txt.push( "Special skills can't be used." );
        }
    }
    const traits_skill_seal = traits.filter( trait => trait.code == Game_BattlerBase.TRAIT_SKILL_SEAL );
    if ( traits_skill_seal.length > 0 ) {
        for ( const trait of traits_skill_seal ) {
            const skill_id = trait.dataId;
            if ( skill_id < 1 ) continue;
            if ( skill_id >= $dataSkills.length ) continue;

            txt.push( $dataSkills[skill_id].name + " won't work." );
        }
    }

    if ( cols == 1 ) {
        for ( const text_line of txt ) {
            text += this.DisplayTextInfo_PadSpaces( text_line, col_width_chars ) + "\\LB";
        }
    }
    else if ( cols == 2 ) {
        for ( let i = 0; i < txt.length; i += 2 ) {
            text += this.DisplayTextInfo_PadSpaces( txt[i], col_width_chars );
            if ( (i + 1) < txt.length ) text += this.DisplayTextInfo_PadSpaces( txt[i+1], col_width_chars ) + "\\LB";
        }
        if ( this.IsEven(txt.length) == false ) text += "\\LB";
    }

    return text;
};
TJS.prototype.GetTextInfoStateTraits = function(item_base, state_scale, col_width_chars=64, cols=1) {
    if ( !item_base ) return "";
    if ( !item_base.custom_traits ) return "";
    if ( !item_base.traits ) return "This effect has no specific technical characteristics to display data for.\\LB\\LB";
    var item = this.DeepCopy( item_base );

    for ( var trait of item.traits ) {
        if ( trait.code == Game_BattlerBase.TRAIT_ATTACK_STATE ) continue;
        if ( trait.code == Game_BattlerBase.TRAIT_ATTACK_TIMES ) continue;

        if ( (trait.code == Game_BattlerBase.TRAIT_PARAM) ||
            (trait.code == Game_BattlerBase.TRAIT_SPARAM) ||
            (trait.code == Game_BattlerBase.TRAIT_ELEMENT_RATE) ||
            (trait.code == Game_BattlerBase.TRAIT_DEBUFF_RATE) ||
            (trait.code == Game_BattlerBase.TRAIT_STATE_RATE) ) {
            trait.value = this.Lerp( 1.00000, trait.value, state_scale );

            continue;
        }

        if ( trait.code == Game_BattlerBase.TRAIT_ACTION_PLUS )
            trait.value *= 1.00000 - Math.pow( 1.00000 - state_scale, 3.25 );
        else
            trait.value *= state_scale;
    }

    item.custom_traits.magic_focus_multiply = this.Lerp( 1.00000, item.custom_traits.magic_focus_multiply, state_scale );
    item.custom_traits.magic_focus_debuff_rate = this.Lerp( 1.00000, item.custom_traits.magic_focus_debuff_rate, state_scale );
    item.custom_traits.max_tactical_points_multiply = this.Lerp( 1.00000, item.custom_traits.max_tactical_points_multiply, state_scale );
    item.custom_traits.to_hit_physical_multiply = this.Lerp( 1.00000, item.custom_traits.to_hit_physical_multiply, state_scale );
    item.custom_traits.to_hit_magical_multiply = this.Lerp( 1.00000, item.custom_traits.to_hit_magical_multiply, state_scale );

    item.custom_traits.physical_critical_hit_rate *= state_scale;
    item.custom_traits.magical_critical_hit_rate *= state_scale;
    item.custom_traits.physical_critical_evade_rate *= state_scale;
    item.custom_traits.magical_critical_evade_rate *= state_scale;
    item.custom_traits.max_tactical_points_add *= state_scale;
    item.custom_traits.to_hit_physical_add *= state_scale;
    item.custom_traits.to_hit_magical_add *= state_scale;

    return this.GetTextInfoItemTraits( item, col_width_chars, cols ) + "\\LB";
};
TJS.prototype.GetTextInfoTraits = function(traits, col_width_chars=64, cols=1) {
    var text = "";
    if ( !traits ) return text;
    const traits_size = traits.length;
    const traits_ordered = TJS_auto.DeepCopy(traits).sort( (a, b) => (a.code - b.code) );
    var trait_counter = 0;

    for ( let i = 0; i < traits_size; i++ ) {
        const trait = traits_ordered[i];
        var txt = "";

        if ( trait.code == Game_BattlerBase.TRAIT_ELEMENT_RATE ) {
            txt = this.GetElementTextFromIdCaps( trait.dataId ) + " does " + (Math.round( trait.value * 1000.00000 ) / 10).toLocaleString() + "% damage.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_DEBUFF_RATE ) {
            txt = "Resistance to " + this.GetParameterNameFromNumber( trait.dataId ) + " being debuffed is " + (Math.round((1.00000 - trait.value) * 1000.00000) / 10).toLocaleString() + "%.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_STATE_RATE ) {
            const s_id = this.GetSingleStateAndDropIfPastFirst( trait.dataId );

            if ( s_id > 0 )
                txt = "Resistance to " + $dataStates[s_id].name + " is " + (Math.round((1.00000 - trait.value) * 1000.00000) / 10).toLocaleString() + "%.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_STATE_RESIST ) {
            const s_id = this.GetSingleStateAndDropIfPastFirst( trait.dataId );

            if ( s_id > 0 )
                txt = "Immunity to " + $dataStates[s_id].name + ".  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_PARAM ) {
            txt = this.GetParameterNameFromNumber( trait.dataId ) + " is set to " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "% of original.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_XPARAM ) {
            if ( trait.value < 0.00000 ) {
                if ( trait.dataId == 7 ) txt = "HP loss per combat turn: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else if ( trait.dataId == 8 ) txt = "MP loss per combat turn: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else if ( trait.dataId == 9 ) txt = "TP loss per combat turn: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else txt = this.GetXParameterNameFromNumber( trait.dataId ) + " reduction: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
            } else {
                if ( trait.dataId == 7 ) txt = "HP regeneration per combat turn: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else if ( trait.dataId == 8 ) txt = "MP regeneration per combat turn: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else if ( trait.dataId == 9 ) txt = "TP regeneration per combat turn: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else txt = this.GetXParameterNameFromNumber( trait.dataId ) + " bonus: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
            }
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_SPARAM ) {
            txt = this.GetSParameterNameFromNumber( trait.dataId ) + " is set to " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "% of original.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_ATTACK_SPEED ) {
            txt = "Attack Speed Bonus: " + (trait.value).toLocaleString() + ".  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_ATTACK_TIMES ) {
            txt = "Attack Times per combat action: " + (trait.value).toLocaleString() + ".  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_EQUIP_SEAL ) {
            if ( this.GetIndexForEquipmentType("shield") == trait.dataId ) txt = "A shield cannot be equipped.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_STYPE_SEAL ) {
            if ( trait.dataId == 1 ) txt = "Melee skills cannot be used when affected.  ";
            else if ( trait.dataId == 2 ) txt = "Gun and Grenade skills cannot be used when affected.  ";
            else if ( trait.dataId == 3 ) txt = "Magic skills cannot be used when affected.  ";
            else if ( trait.dataId == 4 ) txt = "Special skills cannot be used when affected.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_ACTION_PLUS ) {
            txt = (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "% chance of an additional action in a combat turn.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_PARTY_ABILITY ) {
            if ( trait.dataId == 0 ) txt = "Random encounters occur half as often.  ";
            else if ( trait.dataId == 1 ) txt = "Random encounters do not occur.  ";
            else if ( trait.dataId == 2 ) txt = "Party is not subject to being ambushed by surprise anymore.  ";
            else if ( trait.dataId == 3 ) txt = "Party has an increased chance of taking enemies by surprise.  ";
            else if ( trait.dataId == 4 ) txt = "Enemies defeated in combat drop twice as many GP.  ";
            else if ( trait.dataId == 5 ) txt = "Enemies defeated in combat drop twice as many items.  ";
        }

        if ( txt.length > 0 ) {
            if ( cols == 2 ) {
                if ( this.IsEven(trait_counter) == true ) {
                    const padding = col_width_chars - txt.length;

                    for ( let p = 0; p < padding; p++ ) txt += " ";
                }
                else {
                    txt += "\\LB";
                }
            }
            else {
                txt += "\\LB";
            }

            text += txt;

            trait_counter++;
        }
    }

    if ( this.IsEven(trait_counter) == false ) text += "\\LB";
    if ( trait_counter > 0 ) text += "\\LB";

    return text;
};
TJS.prototype.GetTextInfoActorTraitsSelected = function(traits, custom_traits, trait_filter="all", col_width_chars=64, cols=1) {
    var text = "";
    if ( !traits ) return text;
    const traits_size = traits.length;
    const traits_ordered = TJS_auto.DeepCopy(traits).sort( (a, b) => (a.code - b.code) );
    var trait_counter = 0;

    for ( let i = 0; i < traits_size; i++ ) {
        const trait = traits_ordered[i];
        var txt = "";

        if ( trait.code == Game_BattlerBase.TRAIT_ELEMENT_RATE ) {
            txt = this.GetElementTextFromIdCaps( trait.dataId ) + " does " + (Math.round( trait.value * 10000.00000 ) / 100).toLocaleString() + "% damage.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_DEBUFF_RATE ) {
            txt = "Resistance to " + this.GetParameterNameFromNumber( trait.dataId ) + " being debuffed is " + (Math.round((1.00000 - trait.value) * 1000.00000) / 10).toLocaleString() + "%.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_STATE_RATE ) {
            const s_id = this.GetSingleStateAndDropIfPastFirst( trait.dataId );

            if ( s_id > 0 )
                txt = "Resistance to " + $dataStates[s_id].name + " is " + (Math.round((1.00000 - trait.value) * 1000.00000) / 10).toLocaleString() + "%.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_STATE_RESIST ) {
            const s_id = this.GetSingleStateAndDropIfPastFirst( trait.dataId );

            if ( s_id > 0 )
                txt = "Immunity to " + $dataStates[s_id].name + ".  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_PARAM ) {
            txt = this.GetParameterNameFromNumber( trait.dataId ) + " is " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "% of typical.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_XPARAM ) {
            if ( trait.value < 0.00000 ) {
                if ( trait.dataId == 7 ) txt = "HP loss per combat turn: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else if ( trait.dataId == 8 ) txt = "MP loss per combat turn: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else if ( trait.dataId == 9 ) txt = "TP loss per combat turn: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else txt = this.GetXParameterNameFromNumber( trait.dataId ) + " penalty: " + (Math.round(-trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
            } else {
                if ( trait.dataId == 7 ) txt = "HP regeneration per combat turn: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else if ( trait.dataId == 8 ) txt = "MP regeneration per combat turn: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else if ( trait.dataId == 9 ) txt = "TP regeneration per combat turn: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
                else txt = this.GetXParameterNameFromNumber( trait.dataId ) + " bonus: " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "%.  ";
            }
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_SPARAM ) {
            txt = this.GetSParameterNameFromNumber( trait.dataId ) + " is " + (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "% of typical.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_ATTACK_SPEED ) {
            txt = "Attack Speed Bonus: " + (trait.value).toLocaleString() + ".  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_ATTACK_TIMES ) {
            txt = "Attack Times per combat action: " + (trait.value).toLocaleString() + ".  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_EQUIP_SEAL ) {
            if ( this.GetIndexForEquipmentType("shield") == trait.dataId ) txt = "This character can't use a shield.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_STYPE_SEAL ) {
            if ( trait.dataId == 1 ) txt = "Melee skills cannot be used when affected.  ";
            else if ( trait.dataId == 2 ) txt = "Gun and Grenade skills cannot be used when affected.  ";
            else if ( trait.dataId == 3 ) txt = "Magic skills cannot be used when affected.  ";
            else if ( trait.dataId == 4 ) txt = "Special skills cannot be used when affected.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_ACTION_PLUS ) {
            txt = (Math.round(trait.value * 10000.00000) / 100).toLocaleString() + "% chance of an additional action in a combat turn.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_PARTY_ABILITY ) {
            if ( trait.dataId == 0 ) txt = "Random encounters occur half as often.  ";
            else if ( trait.dataId == 1 ) txt = "Random encounters do not occur.  ";
            else if ( trait.dataId == 2 ) txt = "Party is not subject to being ambushed by surprise anymore.  ";
            else if ( trait.dataId == 3 ) txt = "Party has an increased chance of taking enemies by surprise.  ";
            else if ( trait.dataId == 4 ) txt = "Enemies defeated in combat drop twice as many GP.  ";
            else if ( trait.dataId == 5 ) txt = "Enemies defeated in combat drop twice as many items.  ";
        }

        if ( trait_filter !== "all" ) {
            var will_omit = true;

            if ( trait_filter === "param" ) {
                if ( trait.code == Game_BattlerBase.TRAIT_PARAM ) will_omit = false;
            }
            else if ( trait_filter === "sparam" ) {
                if ( trait.code == Game_BattlerBase.TRAIT_SPARAM ) will_omit = false;
            }
            else if ( trait_filter === "xparam" ) {
                if ( trait.code == Game_BattlerBase.TRAIT_XPARAM ) will_omit = false;
            }
            else if ( trait_filter === "state resist" ) {
                if ( trait.code == Game_BattlerBase.TRAIT_STATE_RATE ) will_omit = false;
            }
            else if ( trait_filter === "state immune" ) {
                if ( trait.code == Game_BattlerBase.TRAIT_STATE_RESIST ) will_omit = false;
            }
            else if ( trait_filter === "debuff" ) {
                if ( trait.code == Game_BattlerBase.TRAIT_DEBUFF_RATE ) will_omit = false;
            }
            else if ( trait_filter === "attack" ) {
                if ( (trait.code == Game_BattlerBase.TRAIT_ATTACK_SPEED) || (trait.code == Game_BattlerBase.TRAIT_ACTION_PLUS) ) will_omit = false;
            }
            else if ( trait_filter === "element" ) {
                if ( trait.code == Game_BattlerBase.TRAIT_ELEMENT_RATE ) will_omit = false;
            }

            if ( will_omit == true ) txt = "";
        }

        if ( txt.length > 0 ) {
            if ( cols == 2 ) {
                if ( this.IsEven(trait_counter) == true ) {
                    const padding = col_width_chars - txt.length;

                    for ( let p = 0; p < padding; p++ ) txt += " ";
                }
                else {
                    txt += "\\LB";
                }
            }
            else {
                txt += "\\LB";
            }

            text += txt;

            trait_counter++;
        }
    }

    if ( this.IsEven(trait_counter) == false ) text += "\\LB";
    // if ( trait_counter > 0 ) text += "\\LB";

    return text;
};
TJS.prototype.GetTextInfoTraitsGeneral = function(traits, col_width_chars=64, cols=1) {
    var text = "";
    if ( !traits ) return text;
    const traits_size = traits.length;
    const traits_ordered = TJS_auto.DeepCopy(traits).sort( (a, b) => (a.code - b.code) );
    var trait_counter = 0;

    for ( let i = 0; i < traits_size; i++ ) {
        const trait = traits_ordered[i];
        var txt = "";

        if ( trait.code == Game_BattlerBase.TRAIT_ELEMENT_RATE ) {
            if ( trait.value > 1.00000 ) txt = this.GetElementTextFromIdCaps( trait.dataId ) + " does increased damage.  ";
            else if ( trait.value < 1.00000 ) txt = this.GetElementTextFromIdCaps( trait.dataId ) + " does decreased damage.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_DEBUFF_RATE ) {
            if ( trait.value > 1.00000 ) txt = "Resistance to " + this.GetParameterNameFromNumber( trait.dataId ) + " being debuffed is decreased.  ";
            else if ( trait.value < 1.00000 ) txt = "Resistance to " + this.GetParameterNameFromNumber( trait.dataId ) + " being debuffed is increased.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_STATE_RATE ) {
            const s_id = this.GetSingleStateAndDropIfPastFirst( trait.dataId );

            if ( s_id > 0 ) {
                if ( trait.value > 1.00000 ) txt = "Weakness to " + $dataStates[s_id].name + ".  ";
                else if ( trait.value < 1.00000 ) txt = "Resistance to " + $dataStates[s_id].name + ".  ";
            }
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_STATE_RESIST ) {
            const s_id = this.GetSingleStateAndDropIfPastFirst( trait.dataId );

            if ( s_id > 0 )
                txt = "Immunity to " + $dataStates[s_id].name + ".  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_PARAM ) {
            if ( trait.value > 1.00000 ) txt = this.GetParameterNameFromNumber( trait.dataId ) + " increased.  ";
            else if ( trait.value < 1.00000 ) txt = this.GetParameterNameFromNumber( trait.dataId ) + " decreased.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_XPARAM ) {
            if ( trait.value < 0.00000 ) {
                if ( trait.dataId == 7 ) txt = "HP loss per combat turn: (varies).  ";
                else if ( trait.dataId == 8 ) txt = "MP loss per combat turn: (varies).  ";
                else if ( trait.dataId == 9 ) txt = "TP loss per combat turn: (varies).  ";
                else txt = this.GetXParameterNameFromNumber( trait.dataId ) + " decreased.  ";
            } else {
                if ( trait.dataId == 7 ) txt = "HP regeneration per combat turn: (varies).  ";
                else if ( trait.dataId == 8 ) txt = "MP regeneration per combat turn: (varies).  ";
                else if ( trait.dataId == 9 ) txt = "TP regeneration per combat turn: (varies).  ";
                else txt = this.GetXParameterNameFromNumber( trait.dataId ) + " increased.  ";
            }
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_SPARAM ) {
            if ( trait.value > 1.00000 ) txt = this.GetSParameterNameFromNumber( trait.dataId ) + " is increased.  ";
            else if ( trait.value < 1.00000 ) txt = this.GetSParameterNameFromNumber( trait.dataId ) + " is decreased.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_ATTACK_SPEED ) {
            txt = "Attack Speed Bonus.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_ATTACK_TIMES ) {
            txt = "Potential Attack Times per combat action increased.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_EQUIP_SEAL ) {
            if ( this.GetIndexForEquipmentType("shield") == trait.dataId ) txt = "A shield cannot be equipped.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_STYPE_SEAL ) {
            if ( trait.dataId == 1 ) txt = "Melee skills cannot be used when affected.  ";
            else if ( trait.dataId == 2 ) txt = "Gun and Grenade skills cannot be used when affected.  ";
            else if ( trait.dataId == 3 ) txt = "Magic skills cannot be used when affected.  ";
            else if ( trait.dataId == 4 ) txt = "Special skills cannot be used when affected.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_ACTION_PLUS ) {
            txt = "Chance of an additional action in a combat turn.  ";
        }
        else if ( trait.code == Game_BattlerBase.TRAIT_PARTY_ABILITY ) {
            if ( trait.dataId == 0 ) txt = "Random encounters occur half as often.  ";
            else if ( trait.dataId == 1 ) txt = "Random encounters do not occur.  ";
            else if ( trait.dataId == 2 ) txt = "Party is not subject to being ambushed by surprise anymore.  ";
            else if ( trait.dataId == 3 ) txt = "Party has an increased chance of taking enemies by surprise.  ";
            else if ( trait.dataId == 4 ) txt = "Enemies defeated in combat drop twice as many GP.  ";
            else if ( trait.dataId == 5 ) txt = "Enemies defeated in combat drop twice as many items.  ";
        }

        if ( txt.length > 0 ) {
            if ( cols == 2 ) {
                if ( this.IsEven(trait_counter) == true ) {
                    const padding = col_width_chars - txt.length;

                    for ( let p = 0; p < padding; p++ ) txt += " ";
                }
                else {
                    txt += "\\LB";
                }
            }
            else {
                txt += "\\LB";
            }

            text += txt;

            trait_counter++;
        }
    }

    if ( this.IsEven(trait_counter) == false ) text += "\\LB";
    if ( trait_counter > 0 ) text += "\\LB";

    return text;
};
TJS.prototype.IsStateIdSingle = function(state_id) {
    return true;
};
TJS.prototype.GetSingleStateAndDropIfPastFirst = function(state_id) {
    return state_id;
};
TJS.prototype.GetStateAndResistance = function(actor, state_id) {
    var output = [];

    const resistance = Math.round((1.00000 - actor.stateRate( state_id )) * 10000.00000) / 100;

    output.push( state_id );
    output.push( resistance );

    return output;
};
TJS.prototype.GetStateImmunityId = function(actor, state_id) {
    return state_id;
};
TJS.prototype.FilterItem_Has_Meta_WeaponType = function(item) {
    if ( item.weapon_type > 0 ) return true;
    return false;
};
TJS.prototype.FilterItem_Has_Meta_ArmorType_EquipType = function(item) {
    if ( (item.armor_type > 0) && (item.equip_type > 0) ) return true;
    return false;
};
TJS.prototype.FilterItem_Has_Meta_SlotId = function(item, slot_id) {
    if ( item.equip_type == slot_id ) return true;

    return false;
};
TJS.prototype.FilterItem_Has_Meta_Priority = function(item) {
    if ( (!item.priority) || (!item.itypeId) ) return false;
    if ( item.itypeId != 1 ) return false;

    return true;
};
TJS.prototype.FilterKeyItem_Has_Meta_Priority = function(item) {
    if ( (!item.priority) || (!item.itypeId) ) return false;
    if ( item.itypeId != 2 ) return false;

    return true;
};
TJS.prototype.GetPartyWeapons = function() {
    var items = [];
    const all_weapons = $gameParty.weapons().filter( item => this.FilterItem_Has_Meta_WeaponType(item) );

    for ( let i = 1; i < $dataSystem.weaponTypes.length; i++ ) {
        const item_weapons_type = all_weapons.filter( item => i == item.weapon_type );

        if (item_weapons_type.length > 0) items = this.DeepCopy( items.concat(item_weapons_type) );
    }

    return items;
};
TJS.prototype.GetPartyArmors = function() {
    var items = [];
    const all_armors = $gameParty.armors().filter( item => this.FilterItem_Has_Meta_ArmorType_EquipType(item) );

    for ( let e_type = 1; e_type < $dataSystem.equipTypes.length; e_type++ ) {
        for ( let a_type = 1; a_type < $dataSystem.armorTypes.length; a_type++ ) {
            const items_specific_type = all_armors.filter( item => ((a_type == item.armor_type) && (e_type == item.equip_type)) );

            if (items_specific_type.length > 0) items = this.DeepCopy( items.concat(items_specific_type) );
        }
    }

    return items;
};
TJS.prototype.GetPartyWeaponsAndArmorsBySlotId = function(slot) {
    var items = [];

    if ( slot <= 1) {
        const all_items_of_slot = $gameParty.weapons().filter( item => this.FilterItem_Has_Meta_SlotId(item, slot) );

        for ( let i = 1; i < $dataSystem.weaponTypes.length; i++ ) {
            const item_weapons_type = all_items_of_slot.filter( item => i == item.weapon_type );

            if (item_weapons_type.length > 0) items = this.DeepCopy( items.concat(item_weapons_type) );
        }
    }
    else {
        const all_items_of_slot = $gameParty.armors().filter( item => this.FilterItem_Has_Meta_SlotId(item, slot) );

        for ( let e_type = 1; e_type < $dataSystem.equipTypes.length; e_type++ ) {
            for ( let a_type = 1; a_type < $dataSystem.armorTypes.length; a_type++ ) {
                const items_specific_type = all_items_of_slot.filter( item => ((a_type == item.armor_type) && (e_type == item.equip_type)) );

                if (items_specific_type.length > 0) items = this.DeepCopy( items.concat(items_specific_type) );
            }
        }
    }

    return items;
};
TJS.prototype.GetPartyItems = function() {
    var items = [];
    const all_items = $gameParty.items().filter( item => this.FilterItem_Has_Meta_Priority(item) );

    for ( let p = 1; p <= tjs_highest_item_priority; p++ ) {
        const items_specific_priority = all_items.filter( item => p == item.priority );

        if (items_specific_priority.length > 0) items = this.DeepCopy( items.concat(items_specific_priority) );
    }

    return items;
};
TJS.prototype.GetPartyKeyItems = function() {
    var items = [];
    const all_items = $gameParty.items().filter( item => this.FilterKeyItem_Has_Meta_Priority(item) );

    for ( let p = 1; p <= tjs_highest_item_priority; p++ ) {
        const items_specific_priority = all_items.filter( item => p == item.priority );

        if (items_specific_priority.length > 0) items = this.DeepCopy( items.concat(items_specific_priority) );
    }

    return items;
};
TJS.prototype.GetDiscoveredActors = function() {
    return $dataActors.filter( actor => (this.IsActorDiscovered(actor)) );
};
TJS.prototype.GetDiscoveredEnemies = function() {
    const discovered_enemies = $dataEnemies.filter( enemy => (this.IsEnemyDiscovered(enemy)) );

    return TJS_auto.DeepCopy(discovered_enemies).sort( (a, b) => ((a.params[0] != b.params[0]) ? (a.params[0] - b.params[0]) : (a.exp - b.exp)) );
};
TJS.prototype.SetActorDiscovered = function(actor_id) {
    $gameSystem.actorDiscovered[actor_id] = true;
};
TJS.prototype.SetEnemyDiscovered = function(enemy_id) {
    $gameSystem.enemyDiscovered[enemy_id] = true;
};
TJS.prototype.IsActorDiscovered = function(actor) {
    if ( !actor ) return false;
    if ( actor.actorId ) {
        if ( actor.actorId > 0 ) {
            if ( $gameSystem.actorDiscovered[actor.actorId] == true ) return true;
        }
    }
    if ( actor.id ) {
        if ( actor.id > 0 ) {
            if ( $gameSystem.actorDiscovered[actor.id] == true ) return true;
        }
    }

    return false;
};
TJS.prototype.IsEnemyDiscovered = function(enemy) {
    if ( !enemy ) return false;
    if ( enemy.name.length < 2 ) return false;
    if ( enemy.enemyId ) {
        if ( enemy.enemyId > 0 ) {
            if ( $gameSystem.enemyDiscovered[enemy.enemyId] == true ) return true;
        }
    }
    if ( enemy.id ) {
        if ( enemy.id > 0 ) {
            if ( $gameSystem.enemyDiscovered[enemy.id] == true ) return true;
        }
    }

    return false;
};
TJS.prototype.Sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
TJS.prototype.PlayItemSoundEffect = async function(item) {
    if ( !item ) return;
    if ( item.animationId < 1 ) {
        if ( item.itypeId ) {
            SoundManager.playUseItem();

            return;
        }
        else if ( item.stypeId ) {
            SoundManager.playUseSkill();

            return;
        }
    }

    const animation = $dataAnimations[item.animationId];
    const wait_size = Math.round( 1000.00000 / (animation.speed * 0.01000 * 60.00000) );

    if ( animation.soundTimings.length < 1 ) {
        if ( item.itypeId ) {
            SoundManager.playUseItem();

            return;
        }
        else if ( item.stypeId ) {
            SoundManager.playUseSkill();

            return;
        }
    }

    var delay_count_frame = 0;
    for ( i = 0; i < animation.soundTimings.length; i++ ) {
        const sound = animation.soundTimings[i];
        const delay = sound.frame - delay_count_frame;
        if ( delay > 0 ) {
            await this.Sleep( delay * wait_size );
        }

        AudioManager.playSe( sound.se );

        delay_count_frame = sound.frame;
    }
};
TJS.prototype.RGBA2Hex = function(rgba, forceRemoveAlpha = false) {
  return "#" + rgba.replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
    .split(',') // splits them at ","
    .filter((string, index) => !forceRemoveAlpha || index !== 3)
    .map(string => parseFloat(string)) // Converts them to numbers
    .map((number, index) => index === 3 ? Math.round(number * 255) : number) // Converts alpha to 255 number
    .map(number => number.toString(16)) // Converts numbers to hex
    .map(string => string.length === 1 ? "0" + string : string) // Adds 0 when length of one number is 1
    .join("") // Puts the array to togehter to a string
};
TJS.prototype.CalculateAverageActorLevel = function() {
    var highest_level = 0;

    for ( let i = 1; i <= 8; i++ )
        highest_level += $gameActors.actor(i).level;
    highest_level /= 8;

    $gameSystem.average_actor_level = Math.floor( highest_level );
};
TJS.prototype.SetSoftLevelCap = function() {
    const index = Number( $gameVariables.value(tjs_variable_game_chapter) ).clamp( 0, tjs_chapter_level_caps.length - 1 );

    $gameSystem.soft_level_cap = tjs_chapter_level_caps[index];
};
TJS.prototype.CalcExpValue = function( level_factor ) {
    const level_fac = level_factor.clamp( 0, 1 );
    const base_multiplier = 1000.0;
    const powers = [ 2.5, 5.25 ];

    let base_min = 0;
    base_min += Math.pow( base_multiplier / tjs_max_character_level, powers[0] );
    base_min += Math.pow( base_multiplier / tjs_max_character_level, powers[1] );
    let base_max = 0;
    base_max += Math.pow( base_multiplier, powers[0] );
    base_max += Math.pow( base_multiplier, powers[1] );
    base_max -= base_min;

    let sum = 0;
    sum += Math.pow( level_fac * base_multiplier, powers[0] );
    sum += Math.pow( level_fac * base_multiplier, powers[1] );
    sum -= base_min;

    const fac = Math.pow( 10.0, 11.5 ) / base_max;
    const result = sum * fac;

    return result;
};
TJS.prototype.GetCategoryNumberFromText = function(text) { // Blagg
    if ( text === "Uncategorized" ) return 1;

    if ( text === "Common Grassland Animals" ) return 2;
    if ( text === "Common Desert Animals" ) return 3;
    if ( text === "Common Forest Animals" ) return 4;
    if ( text === "Common Jungle Animals" ) return 5;
    if ( text === "Common Tundra Animals" ) return 6;
    if ( text === "Common Mountain Animals" ) return 7;
    if ( text === "Common Cave Animals" ) return 8;
    if ( text === "Common Volcanic Animals" ) return 9;
    if ( text === "Common Swamp Animals" ) return 10;
    if ( text === "Common Tropical Animals" ) return 11;
    if ( text === "Common Household Animals" ) return 12; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Common Roadside Animals" ) return 13; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Common Sewer Animals" ) return 14; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Common Riverside Animals" ) return 15;
    if ( text === "Common Lakeshore Animals" ) return 16;
    if ( text === "Common Oceanshore Animals" ) return 17;
    if ( text === "Common Freshwater Animals" ) return 20;
    if ( text === "Common Ocean Animals" ) return 21;
    if ( text === "Common Deep Ocean Animals" ) return 22;

    if ( text === "Common Land Animals" ) return 25;
    if ( text === "Common Water Animals" ) return 26;
    if ( text === "Common Underground Animals" ) return 27;
    if ( text === "Common Cloud Animals" ) return 28;

    if ( text === "Cm Grassland Animals" ) return 2;
    if ( text === "Cm Desert Animals" ) return 3;
    if ( text === "Cm Forest Animals" ) return 4;
    if ( text === "Cm Jungle Animals" ) return 5;
    if ( text === "Cm Tundra Animals" ) return 6;
    if ( text === "Cm Mountain Animals" ) return 7;
    if ( text === "Cm Cave Animals" ) return 8;
    if ( text === "Cm Volcanic Animals" ) return 9;
    if ( text === "Cm Swamp Animals" ) return 10;
    if ( text === "Cm Tropical Animals" ) return 11;
    if ( text === "Cm Household Animals" ) return 12; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Cm Roadside Animals" ) return 13; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Cm Sewer Animals" ) return 14; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Cm Riverside Animals" ) return 15;
    if ( text === "Cm Lakeshore Animals" ) return 16;
    if ( text === "Cm Oceanshore Animals" ) return 17;
    if ( text === "Cm Freshwater Animals" ) return 20;
    if ( text === "Cm Ocean Animals" ) return 21;
    if ( text === "Cm Deep Ocean Animals" ) return 22;

    if ( text === "Cm Land Animals" ) return 25;
    if ( text === "Cm Water Animals" ) return 26;
    if ( text === "Cm Underground Animals" ) return 27;
    if ( text === "Cm Cloud Animals" ) return 28;
    if ( text === "Cm Sky Animals" ) return 29;

    if ( text === "Magical Grassland Animals" ) return 32;
    if ( text === "Magical Desert Animals" ) return 33;
    if ( text === "Magical Forest Animals" ) return 34;
    if ( text === "Magical Jungle Animals" ) return 35;
    if ( text === "Magical Tundra Animals" ) return 36;
    if ( text === "Magical Mountain Animals" ) return 37;
    if ( text === "Magical Cave Animals" ) return 38;
    if ( text === "Magical Volcanic Animals" ) return 39;
    if ( text === "Magical Swamp Animals" ) return 40;
    if ( text === "Magical Tropical Animals" ) return 41;
    if ( text === "Magical Household Animals" ) return 42; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Magical Roadside Animals" ) return 43; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Magical Sewer Animals" ) return 44; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Magical Riverside Animals" ) return 45;
    if ( text === "Magical Lakeshore Animals" ) return 46;
    if ( text === "Magical Oceanshore Animals" ) return 47;
    if ( text === "Magical Freshwater Animals" ) return 50;
    if ( text === "Magical Ocean Animals" ) return 51;
    if ( text === "Magical Deep Ocean Animals" ) return 52;

    if ( text === "Magical Land Animals" ) return 55;
    if ( text === "Magical Water Animals" ) return 56;
    if ( text === "Magical Underground Animals" ) return 57;
    if ( text === "Magical Cloud Animals" ) return 58;

    if ( text === "Mg Grassland Animals" ) return 32;
    if ( text === "Mg Desert Animals" ) return 33;
    if ( text === "Mg Forest Animals" ) return 34;
    if ( text === "Mg Jungle Animals" ) return 35;
    if ( text === "Mg Tundra Animals" ) return 36;
    if ( text === "Mg Mountain Animals" ) return 37;
    if ( text === "Mg Cave Animals" ) return 38;
    if ( text === "Mg Volcanic Animals" ) return 39;
    if ( text === "Mg Swamp Animals" ) return 40;
    if ( text === "Mg Tropical Animals" ) return 41;
    if ( text === "Mg Household Animals" ) return 42; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Mg Roadside Animals" ) return 43; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Mg Sewer Animals" ) return 44; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Mg Riverside Animals" ) return 45;
    if ( text === "Mg Lakeshore Animals" ) return 46;
    if ( text === "Mg Oceanshore Animals" ) return 47;
    if ( text === "Mg Freshwater Animals" ) return 50;
    if ( text === "Mg Ocean Animals" ) return 51;
    if ( text === "Mg Deep Ocean Animals" ) return 52;

    if ( text === "Mg Land Animals" ) return 55;
    if ( text === "Mg Water Animals" ) return 56;
    if ( text === "Mg Underground Animals" ) return 57;
    if ( text === "Mg Cloud Animals" ) return 58;
    if ( text === "Mg Sky Animals" ) return 59;

    if ( text === "Mages" ) return 61;
    if ( text === "Wizards" ) return 62;
    if ( text === "Clerics" ) return 63;
    if ( text === "Swordsmen" ) return 64;
    if ( text === "Axemen" ) return 65;
    if ( text === "Ninjas" ) return 66;
    if ( text === "Samurai" ) return 67;
    if ( text === "Martial Artists" ) return 68;
    if ( text === "Riflemen" ) return 69;
    if ( text === "Kensei" ) return 70;
    if ( text === "Daggermen" ) return 71;

    if ( text === "Bandit Mages" ) return 81;
    if ( text === "Bandit Wizards" ) return 82;
    if ( text === "Bandit Clerics" ) return 83;
    if ( text === "Bandit Swordsmen" ) return 84;
    if ( text === "Bandit Axemen" ) return 85;
    if ( text === "Bandit Ninjas" ) return 86;
    if ( text === "Bandit Martial Artists" ) return 88;
    if ( text === "Bandit Riflemen" ) return 89;
    if ( text === "Bandit Daggermen" ) return 91;

    if ( text === "Security Mages" ) return 101;
    if ( text === "Security Wizards" ) return 102;
    if ( text === "Security Clerics" ) return 103;
    if ( text === "Security Swordsmen" ) return 104;
    if ( text === "Security Axemen" ) return 105;
    if ( text === "Security Samurai" ) return 107;
    if ( text === "Security Martial Artists" ) return 108;
    if ( text === "Security Riflemen" ) return 109;
    if ( text === "Security Daggermen" ) return 111;

    if ( text === "Military Mages" ) return 121;
    if ( text === "Military Wizards" ) return 122;
    if ( text === "Military Clerics" ) return 123;
    if ( text === "Military Swordsmen" ) return 124;
    if ( text === "Military Axemen" ) return 125;
    if ( text === "Military Samurai" ) return 127;
    if ( text === "Military Martial Artists" ) return 128;
    if ( text === "Military Riflemen" ) return 129;
    if ( text === "Military Kensei" ) return 130;
    if ( text === "Military Daggermen" ) return 131;

    if ( text === "Uncommon Grassland Animals" ) return 162;
    if ( text === "Uncommon Desert Animals" ) return 163;
    if ( text === "Uncommon Forest Animals" ) return 164;
    if ( text === "Uncommon Jungle Animals" ) return 165;
    if ( text === "Uncommon Tundra Animals" ) return 166;
    if ( text === "Uncommon Mountain Animals" ) return 167;
    if ( text === "Uncommon Cave Animals" ) return 168;
    if ( text === "Uncommon Volcanic Animals" ) return 169;
    if ( text === "Uncommon Swamp Animals" ) return 170;
    if ( text === "Uncommon Tropical Animals" ) return 171;
    if ( text === "Uncommon Household Animals" ) return 172; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Uncommon Roadside Animals" ) return 173; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Uncommon Sewer Animals" ) return 174; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Uncommon Riverside Animals" ) return 175;
    if ( text === "Uncommon Lakeshore Animals" ) return 176;
    if ( text === "Uncommon Oceanshore Animals" ) return 177;
    if ( text === "Uncommon Freshwater Animals" ) return 180;
    if ( text === "Uncommon Ocean Animals" ) return 181;
    if ( text === "Uncommon Deep Ocean Animals" ) return 182;

    if ( text === "Uncommon Land Animals" ) return 185;
    if ( text === "Uncommon Water Animals" ) return 186;
    if ( text === "Uncommon Underground Animals" ) return 187;
    if ( text === "Uncommon Cloud Animals" ) return 188;

    if ( text === "Unc Grassland Animals" ) return 162;
    if ( text === "Unc Desert Animals" ) return 163;
    if ( text === "Unc Forest Animals" ) return 164;
    if ( text === "Unc Jungle Animals" ) return 165;
    if ( text === "Unc Tundra Animals" ) return 166;
    if ( text === "Unc Mountain Animals" ) return 167;
    if ( text === "Unc Cave Animals" ) return 168;
    if ( text === "Unc Volcanic Animals" ) return 169;
    if ( text === "Unc Swamp Animals" ) return 170;
    if ( text === "Unc Tropical Animals" ) return 171;
    if ( text === "Unc Household Animals" ) return 172; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Unc Roadside Animals" ) return 173; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Unc Sewer Animals" ) return 174; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Unc Riverside Animals" ) return 175;
    if ( text === "Unc Lakeshore Animals" ) return 176;
    if ( text === "Unc Oceanshore Animals" ) return 177;
    if ( text === "Unc Freshwater Animals" ) return 180;
    if ( text === "Unc Ocean Animals" ) return 181;
    if ( text === "Unc Deep Ocean Animals" ) return 182;

    if ( text === "Unc Land Animals" ) return 185;
    if ( text === "Unc Water Animals" ) return 186;
    if ( text === "Unc Underground Animals" ) return 187;
    if ( text === "Unc Cloud Animals" ) return 188;
    if ( text === "Unc Sky Animals" ) return 189;

    if ( text === "Rare Grassland Animals" ) return 192;
    if ( text === "Rare Desert Animals" ) return 193;
    if ( text === "Rare Forest Animals" ) return 194;
    if ( text === "Rare Jungle Animals" ) return 195;
    if ( text === "Rare Tundra Animals" ) return 196;
    if ( text === "Rare Mountain Animals" ) return 197;
    if ( text === "Rare Cave Animals" ) return 198;
    if ( text === "Rare Volcanic Animals" ) return 199;
    if ( text === "Rare Swamp Animals" ) return 200;
    if ( text === "Rare Tropical Animals" ) return 201;
    if ( text === "Rare Household Animals" ) return 202; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Rare Roadside Animals" ) return 203; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Rare Sewer Animals" ) return 204; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Rare Riverside Animals" ) return 205;
    if ( text === "Rare Lakeshore Animals" ) return 206;
    if ( text === "Rare Oceanshore Animals" ) return 207;
    if ( text === "Rare Freshwater Animals" ) return 210;
    if ( text === "Rare Ocean Animals" ) return 211;
    if ( text === "Rare Deep Ocean Animals" ) return 212;

    if ( text === "Rare Land Animals" ) return 215;
    if ( text === "Rare Water Animals" ) return 216;
    if ( text === "Rare Underground Animals" ) return 217;
    if ( text === "Rare Cloud Animals" ) return 218;
    if ( text === "Rare Sky Animals" ) return 219;

    if ( text === "Uncommon Magical Grassland Animals" ) return 222;
    if ( text === "Uncommon Magical Desert Animals" ) return 223;
    if ( text === "Uncommon Magical Forest Animals" ) return 224;
    if ( text === "Uncommon Magical Jungle Animals" ) return 225;
    if ( text === "Uncommon Magical Tundra Animals" ) return 226;
    if ( text === "Uncommon Magical Mountain Animals" ) return 227;
    if ( text === "Uncommon Magical Cave Animals" ) return 228;
    if ( text === "Uncommon Magical Volcanic Animals" ) return 229;
    if ( text === "Uncommon Magical Swamp Animals" ) return 230;
    if ( text === "Uncommon Magical Tropical Animals" ) return 231;
    if ( text === "Uncommon Magical Household Animals" ) return 232; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Uncommon Magical Roadside Animals" ) return 233; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Uncommon Magical Sewer Animals" ) return 234; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Uncommon Magical Riverside Animals" ) return 235;
    if ( text === "Uncommon Magical Lakeshore Animals" ) return 236;
    if ( text === "Uncommon Magical Oceanshore Animals" ) return 237;
    if ( text === "Uncommon Magical Freshwater Animals" ) return 240;
    if ( text === "Uncommon Magical Ocean Animals" ) return 241;
    if ( text === "Uncommon Magical Deep Ocean Animals" ) return 242;

    if ( text === "Uncommon Magical Land Animals" ) return 245;
    if ( text === "Uncommon Magical Water Animals" ) return 246;
    if ( text === "Uncommon Magical Underground Animals" ) return 247;
    if ( text === "Uncommon Magical Cloud Animals" ) return 248;

    if ( text === "Unc Mg Grassland Animals" ) return 222;
    if ( text === "Unc Mg Desert Animals" ) return 223;
    if ( text === "Unc Mg Forest Animals" ) return 224;
    if ( text === "Unc Mg Jungle Animals" ) return 225;
    if ( text === "Unc Mg Tundra Animals" ) return 226;
    if ( text === "Unc Mg Mountain Animals" ) return 227;
    if ( text === "Unc Mg Cave Animals" ) return 228;
    if ( text === "Unc Mg Volcanic Animals" ) return 229;
    if ( text === "Unc Mg Swamp Animals" ) return 230;
    if ( text === "Unc Mg Tropical Animals" ) return 231;
    if ( text === "Unc Mg Household Animals" ) return 232; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Unc Mg Roadside Animals" ) return 233; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Unc Mg Sewer Animals" ) return 234; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Unc Mg Riverside Animals" ) return 235;
    if ( text === "Unc Mg Lakeshore Animals" ) return 236;
    if ( text === "Unc Mg Oceanshore Animals" ) return 237;
    if ( text === "Unc Mg Freshwater Animals" ) return 240;
    if ( text === "Unc Mg Ocean Animals" ) return 241;
    if ( text === "Unc Mg Deep Ocean Animals" ) return 242;

    if ( text === "Unc Mg Land Animals" ) return 245;
    if ( text === "Unc Mg Water Animals" ) return 246;
    if ( text === "Unc Mg Underground Animals" ) return 247;
    if ( text === "Unc Mg Cloud Animals" ) return 248;
    if ( text === "Unc Mg Sky Animals" ) return 249;

    if ( text === "Rare Magical Grassland Animals" ) return 252;
    if ( text === "Rare Magical Desert Animals" ) return 253;
    if ( text === "Rare Magical Forest Animals" ) return 254;
    if ( text === "Rare Magical Jungle Animals" ) return 255;
    if ( text === "Rare Magical Tundra Animals" ) return 256;
    if ( text === "Rare Magical Mountain Animals" ) return 257;
    if ( text === "Rare Magical Cave Animals" ) return 258;
    if ( text === "Rare Magical Volcanic Animals" ) return 259;
    if ( text === "Rare Magical Swamp Animals" ) return 260;
    if ( text === "Rare Magical Tropical Animals" ) return 261;
    if ( text === "Rare Magical Household Animals" ) return 262; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Rare Magical Roadside Animals" ) return 263; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Rare Magical Sewer Animals" ) return 264; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Rare Magical Riverside Animals" ) return 265;
    if ( text === "Rare Magical Lakeshore Animals" ) return 266;
    if ( text === "Rare Magical Oceanshore Animals" ) return 267;
    if ( text === "Rare Magical Freshwater Animals" ) return 270;
    if ( text === "Rare Magical Ocean Animals" ) return 271;
    if ( text === "Rare Magical Deep Ocean Animals" ) return 272;

    if ( text === "Rare Magical Land Animals" ) return 275;
    if ( text === "Rare Magical Water Animals" ) return 276;
    if ( text === "Rare Magical Underground Animals" ) return 277;
    if ( text === "Rare Magical Cloud Animals" ) return 278;

    if ( text === "Rare Mg Grassland Animals" ) return 252;
    if ( text === "Rare Mg Desert Animals" ) return 253;
    if ( text === "Rare Mg Forest Animals" ) return 254;
    if ( text === "Rare Mg Jungle Animals" ) return 255;
    if ( text === "Rare Mg Tundra Animals" ) return 256;
    if ( text === "Rare Mg Mountain Animals" ) return 257;
    if ( text === "Rare Mg Cave Animals" ) return 258;
    if ( text === "Rare Mg Volcanic Animals" ) return 259;
    if ( text === "Rare Mg Swamp Animals" ) return 260;
    if ( text === "Rare Mg Tropical Animals" ) return 261;
    if ( text === "Rare Mg Household Animals" ) return 262; // Indoor, FERAL, vermin, monster-infested attics and cellars, etc, but not guard dogs or attack pets, castle towers, etc.
    if ( text === "Rare Mg Roadside Animals" ) return 263; // Also front lawn, back yard of house, etc., FERAL, non-domesticated, does NOT include attack dogs or guard pets, includes alleys between buildings, parking lots, dumpsters, etc.
    if ( text === "Rare Mg Sewer Animals" ) return 264; // Also urban, run-down areas, ruins, condemned buildings, rubble and demolished areas, etc.
    if ( text === "Rare Mg Riverside Animals" ) return 265;
    if ( text === "Rare Mg Lakeshore Animals" ) return 266;
    if ( text === "Rare Mg Oceanshore Animals" ) return 267;
    if ( text === "Rare Mg Freshwater Animals" ) return 270;
    if ( text === "Rare Mg Ocean Animals" ) return 271;
    if ( text === "Rare Mg Deep Ocean Animals" ) return 272;

    if ( text === "Rare Mg Land Animals" ) return 275;
    if ( text === "Rare Mg Water Animals" ) return 276;
    if ( text === "Rare Mg Underground Animals" ) return 277;
    if ( text === "Rare Mg Cloud Animals" ) return 278;
    if ( text === "Rare Mg Sky Animals" ) return 279;

    if ( text === "Uncommon Mages" ) return 281;
    if ( text === "Uncommon Wizards" ) return 282;
    if ( text === "Uncommon Clerics" ) return 283;
    if ( text === "Uncommon Swordsmen" ) return 284;
    if ( text === "Uncommon Axemen" ) return 285;
    if ( text === "Uncommon Ninjas" ) return 286;
    if ( text === "Uncommon Samurai" ) return 287;
    if ( text === "Uncommon Martial Artists" ) return 288;
    if ( text === "Uncommon Riflemen" ) return 289;
    if ( text === "Uncommon Kensei" ) return 290;
    if ( text === "Uncommon Daggermen" ) return 291;

    if ( text === "Uncommon Bandit Mages" ) return 301;
    if ( text === "Uncommon Bandit Wizards" ) return 302;
    if ( text === "Uncommon Bandit Clerics" ) return 303;
    if ( text === "Uncommon Bandit Swordsmen" ) return 304;
    if ( text === "Uncommon Bandit Axemen" ) return 305;
    if ( text === "Uncommon Bandit Ninjas" ) return 306;
    if ( text === "Uncommon Bandit Martial Artists" ) return 308;
    if ( text === "Uncommon Bandit Riflemen" ) return 309;
    if ( text === "Uncommon Bandit Daggermen" ) return 311;

    if ( text === "Uncommon Security Mages" ) return 321;
    if ( text === "Uncommon Security Wizards" ) return 322;
    if ( text === "Uncommon Security Clerics" ) return 323;
    if ( text === "Uncommon Security Swordsmen" ) return 324;
    if ( text === "Uncommon Security Axemen" ) return 325;
    if ( text === "Uncommon Security Samurai" ) return 327;
    if ( text === "Uncommon Security Martial Artists" ) return 328;
    if ( text === "Uncommon Security Riflemen" ) return 329;
    if ( text === "Uncommon Security Daggermen" ) return 331;

    if ( text === "Uncommon Military Mages" ) return 341;
    if ( text === "Uncommon Military Wizards" ) return 342;
    if ( text === "Uncommon Military Clerics" ) return 343;
    if ( text === "Uncommon Military Swordsmen" ) return 344;
    if ( text === "Uncommon Military Axemen" ) return 345;
    if ( text === "Uncommon Military Samurai" ) return 347;
    if ( text === "Uncommon Military Martial Artists" ) return 348;
    if ( text === "Uncommon Military Riflemen" ) return 349;
    if ( text === "Uncommon Military Kensei" ) return 350;
    if ( text === "Uncommon Military Daggermen" ) return 351;

    if ( text === "Unc Mages" ) return 281;
    if ( text === "Unc Wizards" ) return 282;
    if ( text === "Unc Clerics" ) return 283;
    if ( text === "Unc Swordsmen" ) return 284;
    if ( text === "Unc Axemen" ) return 285;
    if ( text === "Unc Ninjas" ) return 286;
    if ( text === "Unc Samurai" ) return 287;
    if ( text === "Unc Martial Artists" ) return 288;
    if ( text === "Unc Riflemen" ) return 289;
    if ( text === "Unc Kensei" ) return 290;
    if ( text === "Unc Daggermen" ) return 291;

    if ( text === "Unc Bandit Mages" ) return 301;
    if ( text === "Unc Bandit Wizards" ) return 302;
    if ( text === "Unc Bandit Clerics" ) return 303;
    if ( text === "Unc Bandit Swordsmen" ) return 304;
    if ( text === "Unc Bandit Axemen" ) return 305;
    if ( text === "Unc Bandit Ninjas" ) return 306;
    if ( text === "Unc Bandit Martial Artists" ) return 308;
    if ( text === "Unc Bandit Riflemen" ) return 309;
    if ( text === "Unc Bandit Daggermen" ) return 311;

    if ( text === "Unc Security Mages" ) return 321;
    if ( text === "Unc Security Wizards" ) return 322;
    if ( text === "Unc Security Clerics" ) return 323;
    if ( text === "Unc Security Swordsmen" ) return 324;
    if ( text === "Unc Security Axemen" ) return 325;
    if ( text === "Unc Security Samurai" ) return 327;
    if ( text === "Unc Security Martial Artists" ) return 328;
    if ( text === "Unc Security Riflemen" ) return 329;
    if ( text === "Unc Security Daggermen" ) return 331;

    if ( text === "Unc Military Mages" ) return 341;
    if ( text === "Unc Military Wizards" ) return 342;
    if ( text === "Unc Military Clerics" ) return 343;
    if ( text === "Unc Military Swordsmen" ) return 344;
    if ( text === "Unc Military Axemen" ) return 345;
    if ( text === "Unc Military Samurai" ) return 347;
    if ( text === "Unc Military Martial Artists" ) return 348;
    if ( text === "Unc Military Riflemen" ) return 349;
    if ( text === "Unc Military Kensei" ) return 350;
    if ( text === "Unc Military Daggermen" ) return 351;

    if ( text === "Rare Mages" ) return 361;
    if ( text === "Rare Wizards" ) return 362;
    if ( text === "Rare Clerics" ) return 363;
    if ( text === "Rare Swordsmen" ) return 364;
    if ( text === "Rare Axemen" ) return 365;
    if ( text === "Rare Ninjas" ) return 366;
    if ( text === "Rare Samurai" ) return 367;
    if ( text === "Rare Martial Artists" ) return 368;
    if ( text === "Rare Riflemen" ) return 369;
    if ( text === "Rare Kensei" ) return 370;
    if ( text === "Rare Daggermen" ) return 371;

    if ( text === "Rare Bandit Mages" ) return 381;
    if ( text === "Rare Bandit Wizards" ) return 382;
    if ( text === "Rare Bandit Clerics" ) return 383;
    if ( text === "Rare Bandit Swordsmen" ) return 384;
    if ( text === "Rare Bandit Axemen" ) return 385;
    if ( text === "Rare Bandit Ninjas" ) return 386;
    if ( text === "Rare Bandit Martial Artists" ) return 388;
    if ( text === "Rare Bandit Riflemen" ) return 389;
    if ( text === "Rare Bandit Daggermen" ) return 391;

    if ( text === "Rare Security Mages" ) return 401;
    if ( text === "Rare Security Wizards" ) return 402;
    if ( text === "Rare Security Clerics" ) return 403;
    if ( text === "Rare Security Swordsmen" ) return 404;
    if ( text === "Rare Security Axemen" ) return 405;
    if ( text === "Rare Security Samurai" ) return 407;
    if ( text === "Rare Security Martial Artists" ) return 408;
    if ( text === "Rare Security Riflemen" ) return 409;
    if ( text === "Rare Security Daggermen" ) return 411;

    if ( text === "Rare Military Mages" ) return 421;
    if ( text === "Rare Military Wizards" ) return 422;
    if ( text === "Rare Military Clerics" ) return 423;
    if ( text === "Rare Military Swordsmen" ) return 424;
    if ( text === "Rare Military Axemen" ) return 425;
    if ( text === "Rare Military Samurai" ) return 427;
    if ( text === "Rare Military Martial Artists" ) return 428;
    if ( text === "Rare Military Riflemen" ) return 429;
    if ( text === "Rare Military Kensei" ) return 430;
    if ( text === "Rare Military Daggermen" ) return 431;

    if ( text === "Cm People" ) return 441;
    if ( text === "Unc People" ) return 442;
    if ( text === "Rare People" ) return 443;

    if ( text === "MAX" ) return 500;

    return 1;
};
TJS.prototype.CustomHpColor = function( value, value_max ) {
    const percent = Math.round(100.0 * value / value_max);

    if ( percent <= 0 ) return ( tjs_color_hp_zero );
    else if ( percent <= 8 ) return ( tjs_color_hp_near_zero );
    else if ( percent <= 15 ) return ( tjs_color_hp_very_low );
    else if ( percent <= 25 ) return ( tjs_color_hp_low );
    else if ( percent <= 50 ) return ( tjs_color_hp_medium_low );
    else if ( percent <= 75 ) return ( tjs_color_hp_medium );
    else if ( percent <= 99 ) return ( tjs_color_hp_slight );
    else return ( tjs_color_hp_max );

    return ( tjs_color_hp_max );
};

TJS_auto = new TJS();
TJS_map = new TjsMapData();

tjs_color_tp = TJS_auto.RGBA2Hex( tjs_color_tp );
tjs_color_mp = TJS_auto.RGBA2Hex( tjs_color_mp );
tjs_color_lvl = TJS_auto.RGBA2Hex( tjs_color_lvl );
tjs_color_hp_max = TJS_auto.RGBA2Hex( tjs_color_hp_max );
tjs_color_hp_slight = TJS_auto.RGBA2Hex( tjs_color_hp_slight );
tjs_color_hp_medium = TJS_auto.RGBA2Hex( tjs_color_hp_medium );
tjs_color_hp_medium_low = TJS_auto.RGBA2Hex( tjs_color_hp_medium_low );
tjs_color_hp_low = TJS_auto.RGBA2Hex( tjs_color_hp_low );
tjs_color_hp_very_low = TJS_auto.RGBA2Hex( tjs_color_hp_very_low );
tjs_color_hp_near_zero = TJS_auto.RGBA2Hex( tjs_color_hp_near_zero );
tjs_color_hp_zero = TJS_auto.RGBA2Hex( tjs_color_hp_zero );

///-----------------------------------------------------------------------------
/// TextManager
///
/// The static class that handles terms and messages.
TextManager.param = function(paramId) {
    if ( paramId >= 8 ) return TJS_auto.GetParameterNameFromNumber( paramId );

    return $dataSystem.terms.params[paramId] || "";
};

///-----------------------------------------------------------------------------
/// Game_Message
///
/// The game object class for the state of the message window that displays text
/// or selections, etc.
Game_Message.prototype.DisplayText_NoFace_Basic = function(game_interpreter, display_txt) {
    this.setBackground( 0 );
    this.setPositionType( 2 );
    this.add( display_txt );
    game_interpreter.setWaitMode('message');
};
Game_Message.prototype.DisplayText_NoFace_Name = function(game_interpreter, display_txt, chr_name) {
    this.setBackground( 0 );
    this.setPositionType( 2 );
    this.add( display_txt );
    game_interpreter.setWaitMode('message');
};
Game_Message.prototype.ReparseTextWithFace = function() {
    const reparsed_text = TJS_auto.ReparseTextAuto( this.allText(), tjs_string_line_width_face );
    this._texts = [];
    if ( reparsed_text ) this._texts.push( reparsed_text );
};
Game_Message.prototype.ReparseTextWithNoFace = function() {
    const reparsed_text = TJS_auto.ReparseTextAuto( this.allText(), tjs_string_line_width_noFace );
    this._texts = [];
    if ( reparsed_text ) this._texts.push( reparsed_text );
};

///-----------------------------------------------------------------------------
/// Window_Message
///
/// The window for displaying text messages.
Window_Message.prototype.createTextState = function(text, x, y, width) {
    const rtl = Utils.containsArabic(text);
    const textState = {};
    textState.text = this.convertEscapeCharacters(text);
    textState.index = 0;
    textState.x = rtl ? x + width : x;
    textState.y = y;
    textState.width = width;
    textState.height = this.calcTextHeight(textState);
    textState.startX = textState.x;
    textState.startY = textState.y;
    textState.rtl = rtl;
    textState.buffer = this.createTextBuffer(rtl);
    textState.drawing = true;
    textState.outputWidth = 0;
    textState.outputHeight = 0;
    return textState;
};
Window_Message.prototype.calcTextHeight = function(textState) {
    const lineSpacing = this.lineHeight() - $gameSystem.mainFontSize();
    const lastFontSize = this.contents.fontSize;
    const lines = textState.text.slice(textState.index).split("\n");
    const textHeight = this.maxFontSizeInLine(lines[0]) + lineSpacing;
    this.contents.fontSize = lastFontSize;
    // return textHeight;
    return 20;
};
Window_Message.prototype.itemPadding = function() {
    return 2; // 8
};
Window_Message.prototype.lineHeight = function() {
    // return 20; // 36
    return this.lineHeightB();
};
Window_Message.prototype.updatePadding = function() {
    // this.padding = $gameSystem.windowPadding();
    this.padding = 4;
};
Window_Message.prototype.startMessage = function() {
    if ( $gameMessage.faceName() ) $gameMessage.ReparseTextWithFace();
    else $gameMessage.ReparseTextWithNoFace();

    const text = $gameMessage.allText();
    const textState = this.createTextState(text, 0, 0, 0);
    textState.x = this.newLineX(textState);
    textState.startX = textState.x;
    this._textState = textState;
    this.newPage(this._textState);
    this.updatePlacement();
    this.updateBackground();
    this.open();
    this._nameBoxWindow.start();
};

///-----------------------------------------------------------------------------
/// Game_Player
///
/// The game object class for the player. It contains event starting
/// determinants and map scrolling functions.
Game_Player.prototype.initMembers = function() {
    Game_Character.prototype.initMembers.call(this);
    this._vehicleType = "walk";
    this._vehicleIndex = -1;
    this._vehicleGettingOn = false;
    this._vehicleGettingOff = false;
    this._dashing = false;
    this._needsMapReload = false;
    this._transferring = false;
    this._newMapId = 0;
    this._newX = 0;
    this._newY = 0;
    this._newDirection = 0;
    this._fadeType = 0;
    this._followers = new Game_Followers();
    this._encounterCount = 0;

    this.enemy_encounter = {};
    this.enemy_encounter.enemy_count = 0;
    this.enemy_encounter.enemies = [];
};
Game_Player.prototype.refresh = function() {
    const actor = $gameParty.leader();
    const characterName = actor ? actor.characterName() : "";
    const characterIndex = actor ? actor.characterIndex() : 0;
    this.setImage(characterName, characterIndex);
    this._followers.refresh();

    TJS_auto.CalculateAverageActorLevel();
    TJS_auto.SetPartyTargetRateMods();

    $gameParty.UpdateDiscovered();
};
Game_Player.prototype.canStartLocalEvents = function() {
    if ( this.isInAirship() || this.IsInLandCraft() )
        return false;

    return true;
};
Game_Player.prototype.updateVehicleGetOff = function() {
    if (!this.areFollowersGathering() && this.vehicle().isLowest()) {
        this._vehicleGettingOff = false;
        this._vehicleType = "walk";
        this._vehicleIndex = -1;
        this.setTransparent(false);
    }
};
Game_Player.prototype.UpdateVehicleInteriorData = function() {
    if ( !this.isInVehicle() ) return;
    if ( this._vehicleIndex < 0 ) return;
    if ( $gameSystem.inside_vehicle == true ) return;

    const vehicle_data = this.vehicle().vehicle();

    $gameSystem.vehicle_data.name = vehicle_data.name;
	$gameSystem.vehicle_data.x = this.x;
	$gameSystem.vehicle_data.y = this.y;
	$gameSystem.vehicle_data.map_id = $gameMap.mapId();
	$gameSystem.vehicle_data.vehicle_id = this._vehicleIndex;
	$gameSystem.vehicle_data.direction = this.direction();
	const party_members = $gameParty.members();
    $gameSystem.vehicle_data.party_leader_index = party_members.indexOf( $gameActors.actor(1) );
    $gameSystem.vehicle_data.encounter_possible = this.IsRandomEncounterPossible();

	$gameSystem.vehicle_interior.x = vehicle_data.driver_seat_x;
	$gameSystem.vehicle_interior.y = vehicle_data.driver_seat_y;
	$gameSystem.vehicle_interior.map_id = vehicle_data.interior_map;
	$gameSystem.vehicle_interior.direction = vehicle_data.driver_seat_direction;
};
Game_Player.prototype.GetRandomEncounterPossible = function(variable_id=1) {
    if ( $gameSystem.vehicle_data.encounter_possible )
        $gameVariables.setValue( variable_id, 1 );
    else
        $gameVariables.setValue( variable_id, 0 );
};
Game_Player.prototype.GoToVehicleInterior = function() {
    this.UpdateVehicleInteriorData();

    if ( $gameSystem.vehicle_interior.map_id < 1 ) return;

    // this.setTransparent(false);
    this.setMoveSpeed(4);
    this.setThrough(false);
    this.gatherFollowers();

    if ( this.isInAirship() ) TJS_auto.vehicle_transition_count = 60;

    if ( this.vehicle() ) {
        this.vehicle()._driving = false;
        this.vehicle().setWalkAnime( false );
        this.vehicle().setStepAnime( false );
    }
    this._vehicleGettingOff = false;
    this._vehicleType = "walk";
    this._vehicleIndex = -1;

    this.reserveTransfer( $gameSystem.vehicle_interior.map_id, $gameSystem.vehicle_interior.x, $gameSystem.vehicle_interior.y, $gameSystem.vehicle_interior.direction, 0 );

    if ( $gameSystem.vehicle_data.party_leader_index != 0 ) $gameParty.swapOrder( 0, $gameSystem.vehicle_data.party_leader_index );

    // this.setTransparent(false);
};
Game_Player.prototype.ReturnToVehicle = function() {
    if ( $gameSystem.inside_vehicle == false ) return;

    this.gatherFollowers();
    this._vehicleIndex = $gameSystem.vehicle_data.vehicle_id;
    const vehicle_data = this.vehicle().vehicle();
    this._vehicleType = vehicle_data.type;
    this.setDirection(this.vehicle().direction());
    this.setMoveSpeed(this.vehicle().moveSpeed());
    this.setTransparent( true );
    if ( this.isInAirship() ) this.setThrough(true);
    if ( this.vehicle() ) {
        this.vehicle()._driving = true;
        this.vehicle().setWalkAnime( true );
        this.vehicle().setStepAnime( true );
    }
    this.reserveTransfer( $gameSystem.vehicle_data.map_id, $gameSystem.vehicle_data.x, $gameSystem.vehicle_data.y, $gameSystem.vehicle_data.direction, 0 );

    if ( $gameSystem.vehicle_data.party_leader_index != 0 ) $gameParty.swapOrder( 0, $gameSystem.vehicle_data.party_leader_index );

    if ( this.isInAirship() ) TJS_auto.vehicle_transition_count = 60;
};
Game_Player.prototype.getOnVehicle = function() {
    const direction = this.direction();
    const x1 = this.x;
    const y1 = this.y;
    const x2 = $gameMap.roundXWithDirection(x1, direction);
    const y2 = $gameMap.roundYWithDirection(y1, direction);

    const vehicles = $gameMap.vehicles();
    if ( vehicles.length > 0 ) {
        for ( let i = 0; i < vehicles.length; i++ ) {
            const vehicle = vehicles[i];
            const vehicle_data = vehicle.vehicle();

            if ( ((vehicle_data.type === "airship") && vehicle.pos( x1, y1 )) ||
                 ((vehicle_data.type === "landcraft") && vehicle.pos( x1, y1 )) ||
                 ((vehicle_data.type === "ship") && vehicle.pos( x2, y2 )) ||
                 ((vehicle_data.type === "boat") && vehicle.pos( x2, y2 )) )
            {
                if ( vehicle._mapId !== $gameMap.mapId() ) continue;

                this._vehicleType = vehicle_data.type;
                this._vehicleIndex = i;

                break;
            }
        }
    }

    if (this.isInVehicle()) {
        this._vehicleGettingOn = true;
        if ( (!this.isInAirship()) && (!this.IsInLandCraft()) ) {
            this.forceMoveForward();
        }
        this.gatherFollowers();
    }
    return this._vehicleGettingOn;
};
Game_Player.prototype.getOffVehicle = function() {
    if ( this.vehicle().isLandOk(this.x, this.y, this.direction()) ) {
        if ( this.isInAirship() ) {
            this.setDirection( 2 );
        }

        this._followers.synchronize( this.x, this.y, this.direction() );
        this.vehicle().getOff();

        if ( this.isInBoat() || this.isInShip() ) {
            this.forceMoveForward();
            this.setTransparent(false);
        }
        if ( this.IsInLandCraft() ) {
            this.setTransparent(false);
        }

        this._vehicleGettingOff = true;
        this.setMoveSpeed(4);
        this.setThrough(false);
        this.makeEncounterCount();
        this.gatherFollowers();
    }

    return this._vehicleGettingOff;
};
Game_Player.prototype.vehicle = function() {
    if ( this._vehicleIndex == -1 ) return null;

    return $gameMap.vehicles()[this._vehicleIndex];
};
Game_Player.prototype.isInBoat = function() {
    if ( this._vehicleIndex == -1 ) return false;

    if ( !$gameMap.vehicles()[this._vehicleIndex] ) return false;
    if ( $gameMap.vehicles()[this._vehicleIndex].vehicle().type === "boat" ) return true;

    return false;
};
Game_Player.prototype.isInShip = function() {
    if ( this._vehicleIndex == -1 ) return false;

    if ( !$gameMap.vehicles()[this._vehicleIndex] ) return false;
    if ( $gameMap.vehicles()[this._vehicleIndex].vehicle().type === "ship" ) return true;

    return false;
};
Game_Player.prototype.isInAirship = function() {
    if ( this._vehicleIndex == -1 ) return false;

    if ( !$gameMap.vehicles()[this._vehicleIndex] ) return false;
    if ( $gameMap.vehicles()[this._vehicleIndex].vehicle().type === "airship" ) return true;

    return false;
};
Game_Player.prototype.IsInLandCraft = function() {
    if ( this._vehicleIndex == -1 ) return false;

    if ( !$gameMap.vehicles()[this._vehicleIndex] ) return false;
    if ( $gameMap.vehicles()[this._vehicleIndex].vehicle().type === "landcraft" ) return true;

    return false;
};
Game_Player.prototype.isInVehicle = function() {
    if ( !this._vehicleIndex ) this._vehicleIndex = -1;

    return this.isInBoat() || this.isInShip() || this.isInAirship() || this.IsInLandCraft();
};
Game_Player.prototype.isInNonLandVehicle = function() {
    return this.isInBoat() || this.isInShip() || this.isInAirship();
};
Game_Player.prototype.isNormal = function() {
    return (this._vehicleIndex < 0) && !this.isMoveRouteForcing();
};
Game_Player.prototype.triggerTouchActionD1 = function(x1, y1) {
    if ( !this.isInBoat() && !this.isInShip() ) {
        if (TouchInput.isTriggered() && this.getOnOffVehicle()) {
            return true;
        }
    }
    this.checkEventTriggerHere([0]);
    return $gameMap.setupStartingEvent();
};
Game_Player.prototype.triggerTouchActionD2 = function(x2, y2) {
    if ( !this.isInBoat() && !this.isInShip() ) {
        if (TouchInput.isTriggered() && this.getOnVehicle()) {
            return true;
        }
    }
    else if ( this.isInBoat() || this.isInShip() ) {
        if (TouchInput.isTriggered() && this.getOffVehicle()) {
            return true;
        }
    }
    this.checkEventTriggerThere([0, 1, 2]);
    return $gameMap.setupStartingEvent();
};
Game_Player.prototype.encounterProgressValue = function() {
    let value = $gameMap.isBush(this.x, this.y) ? 2 : 1;

    if ( $gameParty.hasEncounterHalf() ) {
        value *= 0.5;
    }
    if ( this.isInVehicle() ) {
        const vehicle = this.vehicle();
        if ( vehicle )
            value *= vehicle.vehicle().encounter_percent * 0.01;
    }

    return value;
};
Game_Player.prototype.DoesEnemyHaveCategory = function(enemy, category) {
    if ( !enemy ) return false;
    if ( !enemy.encounter_categories ) return false;
    if ( enemy.encounter_categories.length < 1 ) return false;

    for ( const index of enemy.encounter_categories ) {
        if ( index == category )
            return true;
    }

    return false;
};
Game_Player.prototype.meetsEncounterConditions = function(encounter) {
    const region = ( this.isInAirship() && ($gameSystem.sky_region > -1) ) ? $gameSystem.sky_region : this.regionId();

    return (encounter.regionSet[0] == region) && (encounter.weight > 0) && (encounter.troopId > 1);

    /*
    return (
        encounter.regionSet.length === 0 ||
        encounter.regionSet.includes( region )
    );
    */
};
Game_Player.prototype.meetsEncounterConditions_Extended = function(encounter, group_index) {
    const region = ( this.isInAirship() && ($gameSystem.sky_region > -1) ) ? $gameSystem.sky_region : this.regionId();

    return (encounter.regionSet[0] == region) && (encounter.weight > 0) && (encounter.troopId > 1) && (encounter.regionSet[1] == group_index);

    /*
    return (
        encounter.regionSet.length === 0 ||
        encounter.regionSet.includes( region )
    );
    */
};
Game_Player.prototype.canEncounter = function() {
    return (
        !$gameParty.hasEncounterNone() &&
        $gameSystem.isEncounterEnabled() &&
        !this.isMoveRouteForcing() &&
        !this.isDebugThrough()
    );
};
Game_Player.prototype.IsRandomEncounterPossible = function() {
    const region = ( this.isInAirship() && ($gameSystem.sky_region > -1) ) ? $gameSystem.sky_region : this.regionId();

    if ( !this.canEncounter() ) return false;
    if ( $gameMap.encounterList().filter( encounter => this.meetsEncounterConditions(encounter) ).length < 1 ) return false;
    if ( !$gameSystem.encounter_exp_limit ) return false;;
    if ( $gameSystem.max_random_enemies ) {
        const region_max_enemies = Math.min( region, $gameSystem.max_random_enemies.length - 1 );
        const max_enemies = $gameSystem.max_random_enemies[ region_max_enemies ];

        if ( max_enemies < 1 ) return false;
    }

    return true;
};
Game_Player.prototype.makeEncounterTroopId = function() { // Blagg
    const region = ( this.isInAirship() && ($gameSystem.sky_region > -1) ) ? $gameSystem.sky_region : this.regionId();
    var group_index = 0;

    var pre_list = [];
    for ( const encounter of $gameMap.encounterList() ) {
        if ( !encounter.regionSet[1] ) continue;

        if ( pre_list.includes(encounter.regionSet[1]) == false )
            pre_list.push( encounter.regionSet[1] );
    }
    if ( pre_list.length < 1 ) return 0;
    group_index = pre_list[ Math.round(Math.random() * (pre_list.length - 1)) ];
    if ( group_index < 1 ) return 0;

    const encounterList = [];
    let weightSum = 0;
    for (const encounter of $gameMap.encounterList()) {
        if (this.meetsEncounterConditions_Extended(encounter, group_index)) {
            encounterList.push(encounter);
            weightSum += encounter.weight;
        }
    }

    this.enemy_encounter = {};
    this.enemy_encounter.enemy_count = 0;
    this.enemy_encounter.enemies = [];

    if ( weightSum < 1 ) return 0;

    if ( !$gameSystem.encounter_exp_limit ) $gameSystem.encounter_exp_limit = [5];
    if ( !$gameSystem.max_random_enemies ) $gameSystem.max_random_enemies = [1];
    const region_budget = Math.min( region, $gameSystem.encounter_exp_limit.length - 1 );
    const region_max_enemies = Math.min( region, $gameSystem.max_random_enemies.length - 1 );
    var exp_budget = Math.ceil( $gameSystem.encounter_exp_limit[ region_budget ] * Math.random() );
    const max_enemies = Math.min( $gameSystem.max_random_enemies[ region_max_enemies ], tjs_max_enemies_per_battle );

    for ( let i = 0; i < 10; i++ ) {
        var category = 0;
        let value = Math.randomInt(weightSum);
        for (const encounter of encounterList) {
            value -= encounter.weight;
            if (value < 0) {
                category = encounter.troopId;

                break;
            }
        }
        if ( category < 2 ) continue;

        const enemy_list_first = $dataEnemies.filter( enemy => this.DoesEnemyHaveCategory(enemy, category) );
        if ( enemy_list_first.length < 1 ) continue;

        const index_first = Math.randomInt( enemy_list_first.length );
        const first_enemy = enemy_list_first[index_first];
        exp_budget -= first_enemy.exp;
        this.enemy_encounter.enemy_count = 1;
        this.enemy_encounter.enemies.push( first_enemy );

        break;
    }

    if ( this.enemy_encounter.enemy_count < 1 ) return 0;

    if ( exp_budget < 0 ) return 1;

    while ( (this.enemy_encounter.enemy_count < max_enemies) && (exp_budget > 0) ) {
        var category_next = 0;
        let value_next = Math.randomInt(weightSum);
        for (const encounter of encounterList) {
            value_next -= encounter.weight;
            if (value_next < 0) {
                category_next = encounter.troopId;

                break;
            }
        }
        if ( category_next < 2 ) continue;

        const enemy_list = $dataEnemies.filter( enemy => this.DoesEnemyHaveCategory(enemy, category_next) );
        if ( enemy_list.length < 1 ) continue;

        const index_next = Math.randomInt( enemy_list.length );
        const next_enemy = enemy_list[index_next];

        exp_budget -= next_enemy.exp;
        this.enemy_encounter.enemy_count++;
        this.enemy_encounter.enemies.push( next_enemy );
    }

    return this.enemy_encounter.enemy_count;
};
Game_Player.prototype.executeEncounter = function() {
    if (!$gameMap.isEventRunning() && this._encounterCount <= 0) {
        this.makeEncounterCount();
        const troopId = this.makeEncounterTroopId();

        if ( troopId > 0 ) {
            BattleManager.setup(troopId, true, false);
            BattleManager.onEncounter();

            this.enemy_encounter.enemy_count = 0;
            this.enemy_encounter.enemies = [];

            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
Game_Player.prototype.GetPartyLevel = function(level_var) {
    $gameVariables.setValue( level_var, $gameSystem.average_actor_level.Deep() );
};
Game_Player.prototype.GetCappedPartyLevel = function(level_var) {
    $gameVariables.setValue( level_var, $gameSystem.average_actor_level.Deep().clamp( $gameSystem.min_enemy_level, $gameSystem.max_enemy_level ) );
};
Game_Player.prototype.GetItemLevels = function(level_var) {
    $gameVariables.setValue( level_var, tjs_max_item_levels );
};
Game_Player.prototype.GetMaxCharacterLevel = function(level_var) {
    $gameVariables.setValue( level_var, tjs_max_character_level );
};
Game_Player.prototype.DisplayItemLevelList = function() {
    const entry_length = 24;
    const entry_count = Math.floor( tjs_string_line_width_noFace / entry_length );
    const padding = "                        ";
    let text = "";

    for ( let i = 0; i < tjs_max_item_levels; i++ ) {
        const level_number = i + 1;
        const level_text = level_number < 10 ? String(level_number) + " " : String(level_number);
        const txt = (level_text + ": " + String(tjs_item_level_names[i]) + padding).slice( 0, entry_length );
        if ( (i > 0) && ((i % entry_count) == 0) )
            text += "\\LB";

        text += txt;
    }

    $gameMessage.setBackground( 0 );
    $gameMessage.setPositionType( 2 );
    $gameMessage.setSpeakerName( "Item Level List" );
    $gameMessage.add( text );
    Game_Interpreter.prototype.setWaitMode.call(this, 'message');
};
Game_Player.prototype.ShopWeapons = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const weapons = $dataWeapons.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var weapons_normal = weapons.filter( item => item.special == TJS_SPECIAL_NORMAL ).Deep();
    var armors_backup_weapons_normal = armors.filter( item => (item.special == TJS_SPECIAL_NORMAL) && (item.equip_type == 3) ).Deep();

    weapons_normal.sort( (a, b) => a.weapon_type - b.weapon_type );
    armors_backup_weapons_normal.sort( (a, b) => (a.weapon_type - b.weapon_type) || (a.equip_type - b.equip_type) || (a.armor_type - b.armor_type) || (a.special - b.special) );

    for ( const weapon of weapons_normal ) {
        const item = [ 1, weapon.id, 0 ];
        items.push( item );
    }
    for ( const armor of armors_backup_weapons_normal ) {
        const item = [ 2, armor.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    // Array for each item:
    // itemType: 0 (Item), 1 (Weapon), or 2 (Armor).
    // itemId: ID of the item.
    // priceType: 0 (Standard) or 1 (Specific).
    // price: item price; ignored if priceType = 0.
    //
    // Boolean purchaseOnly
    // Example: SceneManager.prepareNextScene( [[2, 1, 0], [2, 2, 0], [2, 3, 0]], false );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopMagicWeapons = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const weapons = $dataWeapons.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var weapons_filtered = weapons.filter( item =>
        (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) && (
        (item.special == TJS_SPECIAL_NORMAL) ||
        (item.special == TJS_SPECIAL_FIRE) ||
        (item.special == TJS_SPECIAL_ICE) ||
        (item.special == TJS_SPECIAL_LIGHTNING) ||
        (item.special == TJS_SPECIAL_METAL) ||
        (item.special == TJS_SPECIAL_ACID) ||
        (item.special == TJS_SPECIAL_WATER) ||
        (item.special == TJS_SPECIAL_EARTH) ||
        (item.special == TJS_SPECIAL_WIND)
        )).Deep();
    var armors_backup_weapons = armors.filter( item =>
        (item.equip_type == 3) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) && (
        (item.special == TJS_SPECIAL_NORMAL) ||
        (item.special == TJS_SPECIAL_FIRE) ||
        (item.special == TJS_SPECIAL_ICE) ||
        (item.special == TJS_SPECIAL_LIGHTNING) ||
        (item.special == TJS_SPECIAL_METAL) ||
        (item.special == TJS_SPECIAL_ACID) ||
        (item.special == TJS_SPECIAL_WATER) ||
        (item.special == TJS_SPECIAL_EARTH) ||
        (item.special == TJS_SPECIAL_WIND)
        )).Deep();

    weapons_filtered.sort( (a, b) => (a.weapon_type - b.weapon_type) || (a.special - b.special) );
    armors_backup_weapons.sort( (a, b) => (a.weapon_type - b.weapon_type) || (a.equip_type - b.equip_type) || (a.armor_type - b.armor_type) || (a.special - b.special) );

    for ( const weapon of weapons_filtered ) {
        const item = [ 1, weapon.id, 0 ];
        items.push( item );
    }
    for ( const armor of armors_backup_weapons ) {
        const item = [ 2, armor.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopAllWeapons = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const weapons = $dataWeapons.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var weapons_filtered = weapons.filter( item =>
        (item.weapon_type > 0) &&
        (item.equip_type == 1) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK)
        ).Deep();
    var armors_backup_weapons = armors.filter( item =>
        (item.equip_type == 3) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK)
        ).Deep();

    weapons_filtered.sort( (a, b) => (a.weapon_type - b.weapon_type) || (a.special - b.special) );
    armors_backup_weapons.sort( (a, b) => (a.weapon_type - b.weapon_type) || (a.equip_type - b.equip_type) || (a.armor_type - b.armor_type) || (a.special - b.special) );

    for ( const weapon of weapons_filtered ) {
        const item = [ 1, weapon.id, 0 ];
        items.push( item );
    }
    for ( const armor of armors_backup_weapons ) {
        const item = [ 2, armor.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopArmors = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var armors_normal = armors.filter( item =>
        (item.special == TJS_SPECIAL_NORMAL) && (item.equip_type > 4) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) &&
        (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) ).Deep(); // (item.equip_type > 4), No backup weapons or books included, please.

    armors_normal.sort( (a, b) => (a.equip_type - b.equip_type) || (a.armor_type - b.armor_type) || (a.special - b.special) );

    for ( const armor of armors_normal ) {
        const item = [ 2, armor.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopMagicArmors = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var armors_filtered = armors.filter( item =>
        (item.equip_type > 4) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) && (
        (item.special == TJS_SPECIAL_NORMAL) ||
        (item.special == TJS_SPECIAL_FIRE) ||
        (item.special == TJS_SPECIAL_ICE) ||
        (item.special == TJS_SPECIAL_LIGHTNING) ||
        (item.special == TJS_SPECIAL_METAL) ||
        (item.special == TJS_SPECIAL_ACID) ||
        (item.special == TJS_SPECIAL_WATER) ||
        (item.special == TJS_SPECIAL_EARTH) ||
        (item.special == TJS_SPECIAL_WIND) )
        ).Deep();

    armors_filtered.sort( (a, b) => (a.equip_type - b.equip_type) || (a.armor_type - b.armor_type) || (a.special - b.special) );

    for ( const armor of armors_filtered ) {
        const item = [ 2, armor.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopAllArmors = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var armors_filtered = armors.filter( item =>
        (item.equip_type > 4) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) ).Deep();

    armors_filtered.sort( (a, b) => (a.equip_type - b.equip_type) || (a.armor_type - b.armor_type) || (a.special - b.special) );

    for ( const armor of armors_filtered ) {
        const item = [ 2, armor.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopItems = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const shared_items = $dataItems.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return (item.name.length > 0); } );
    var filtered_items = shared_items.filter( item =>
        (item.itypeId == 1) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) && (
        (item.special == TJS_SPECIAL_HEALING_HP) ||
        (item.special == TJS_SPECIAL_HEALING_MP) ||
        (item.special == TJS_SPECIAL_HEALING_DEATH) ||
        (item.special == TJS_SPECIAL_HEALING_OTHER) ||
        (item.special == TJS_SPECIAL_CURATIVE_SPECIFIC) ||
        (item.special == TJS_SPECIAL_CURATIVE_OMNI) )
        ).Deep();

    filtered_items.sort( (a, b) => (a.special - b.special) || (a.id - b.id) );

    for ( const filtered_item of filtered_items ) {
        const item = [ 0, filtered_item.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopAllItems = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const shared_items = $dataItems.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return (item.name.length > 0); } );
    var filtered_items = shared_items.filter( item =>
        (item.itypeId == 1) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) && (
        (item.special == TJS_SPECIAL_HEALING_HP) ||
        (item.special == TJS_SPECIAL_HEALING_MP) ||
        (item.special == TJS_SPECIAL_HEALING_TP) ||
        (item.special == TJS_SPECIAL_HEALING_DEATH) ||
        (item.special == TJS_SPECIAL_HEALING_OTHER) ||
        (item.special == TJS_SPECIAL_CURATIVE_SPECIFIC) ||
        (item.special == TJS_SPECIAL_ABILITY_BOOST) ||
        (item.special == TJS_SPECIAL_ABILITY_GROW) ||
        (item.special == TJS_SPECIAL_POWER_UP_GENERIC) ||
        (item.special == TJS_SPECIAL_SPECIAL_PURPOSE) ||
        (item.special == TJS_SPECIAL_FOOD) ||
        (item.special == TJS_SPECIAL_MONSTER_DROP) ||
        (item.special == TJS_SPECIAL_TREASURE) ||
        (item.special == TJS_SPECIAL_ORB) ||
        (item.special == TJS_SPECIAL_ORB_SHARDS)
        )).Deep();

    filtered_items.sort( (a, b) => (a.special - b.special) || (a.id - b.id) );

    for ( const filtered_item of filtered_items ) {
        const item = [ 0, filtered_item.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopBooks = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var books = armors.filter( item =>
        (item.etypeId == 4) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) &&
        ( (item.atypeId >= 9) && (item.atypeId <= 17) )
        ).Deep();

    books.sort( (a, b) => (a.special - b.special) || (a.id - b.id) );

    for ( const book of books ) {
        const item = [ 2, book.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopBracelets = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var bracelets = armors.filter( item =>
        (item.etypeId == 12) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK)
        ).Deep();

    bracelets.sort( (a, b) => (a.special - b.special) || (a.id - b.id) );

    for ( const bracelet of bracelets ) {
        const item = [ 2, bracelet.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopEarrings = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var earrings = armors.filter( item =>
        (item.etypeId == 13) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) ).Deep();

    earrings.sort( (a, b) => (a.special - b.special) || (a.id - b.id) );

    for ( const earring of earrings ) {
        const item = [ 2, earring.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopRings = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var rings = armors.filter( item =>
        (item.etypeId == 14) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) ).Deep();

    rings.sort( (a, b) => (a.special - b.special) || (a.id - b.id) );

    for ( const ring of rings ) {
        const item = [ 2, ring.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};
Game_Player.prototype.ShopRunes = function(level_var, buy_only=false) {
    const level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ($gameVariables.value( level_var ) - 1) / (tjs_max_character_level - 1) )).clamp( 1, tjs_max_item_levels );
    var items = [];

    const armors = $dataArmors.filter( item => { if (!item) return false; if ( item.name[0] === "-" ) return false; return ((item.level == level) && (item.name.length > 0)); } );
    var runes = armors.filter( item =>
        (item.etypeId == 15) && (item.special == TJS_SPECIAL_RUNE) && (item.special != TJS_SPECIAL_BROKEN) && (item.special != TJS_SPECIAL_DEBUG) && (item.special != TJS_SPECIAL_NOTE) && (item.special != TJS_SPECIAL_BLANK) ).Deep();

    runes.sort( (a, b) => (a.special - b.special) || (a.id - b.id) );

    for ( const rune of runes ) {
        const item = [ 2, rune.id, 0 ];
        items.push( item );
    }

    items.push( buy_only );

    SceneManager.push( Scene_Shop );
    SceneManager.prepareNextScene( items );
};

///-----------------------------------------------------------------------------
/// Spriteset_Map
///
/// The set of sprites on the map screen.
Spriteset_Map.prototype.updateShadow = function() {
    const vehicle = $gamePlayer.vehicle();
    if ( vehicle ) {
        this._shadowSprite.x = vehicle.shadowX();
        this._shadowSprite.y = vehicle.shadowY();
        this._shadowSprite.opacity = vehicle.shadowOpacity();
    }
    else {
        this._shadowSprite.opacity = 0;

        if ( TJS_auto.vehicle_transition_count ) {
            if ( (TJS_auto.vehicle_transition_count > 0) && ($gameSystem.vehicle_data.map_id == $gameMap.mapId()) ) this._shadowSprite.opacity = 255;
        }
    }
};

///-----------------------------------------------------------------------------
/// Window_ItemList
///
/// The window for selecting an item on the item screen.
Window_ItemList.prototype.maxCols = function() {
    return 4;
};
Window_ItemList.prototype.colSpacing = function() {
    return 4;
};
Window_ItemList.prototype.itemAt = function(index) {
    if ( !this._data ) return null;
    if ( index >= 0 ) {
        const item = this._data[index];
        if ( item == null ) return null;

        if ( item.wtypeId ) return $dataWeapons[item.id];
        else if ( item.atypeId ) return $dataArmors[item.id];
        else if ( item.itypeId ) return $dataItems[item.id];
        else if ( item.stypeId ) return $dataSkills[item.id];
    }

    return null;
};
Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (this.needsNumber()) {
        this.drawText(":", x, y, width - this.textWidth(tjs_max_items), "right");

        var num_items = 0;
        if ( item.wtypeId ) num_items = $gameParty.numItems( $dataWeapons[item.id] );
        else if ( item.atypeId ) num_items = $gameParty.numItems( $dataArmors[item.id] );
        else if ( item.stypeId ) num_items = $gameParty.numItems( $dataSkills[item.id] );
        else if ( item.itypeId ) num_items = $gameParty.numItems( $dataItems[item.id] );

        this.drawText(num_items, x, y, width, "right");
    }
};
Window_ItemList.prototype.makeItemList = function() {
    this._data = [];
    switch (this._category) {
        case "item":
            this._data = TJS_auto.GetPartyItems();
            break;
        case "weapon":
            this._data = TJS_auto.GetPartyWeapons();
            break;
        case "armor":
            this._data = TJS_auto.GetPartyArmors();
            break;
        case "keyItem":
            this._data = TJS_auto.GetPartyKeyItems();
            break;
        default:
            this._data = $gameParty.allItems().filter(item => this.includes(item));
            break;
    }

    if ( this.includes(null) ) {
        this._data.push(null);
    }
};

///-----------------------------------------------------------------------------
/// Window_EquipItem
///
/// The window for selecting an equipment item on the equipment screen.
Window_EquipItem.prototype.makeItemList = function() {
    this._data = [];
    switch (this._category) {
        case "item":
            this._data = TJS_auto.GetPartyItems();
            break;
        case "weapon":
            this._data = TJS_auto.GetPartyWeapons();
            break;
        case "armor":
            this._data = TJS_auto.GetPartyArmors();
            break;
        case "keyItem":
            this._data = TJS_auto.GetPartyKeyItems();
            break;
        default:
            this._data = TJS_auto.GetPartyWeaponsAndArmorsBySlotId( this.etypeId() ).filter(item => this.includes(item));
            break;
    }

    if ( this.includes(null) ) {
        this._data.push(null);
    }
};
Window_EquipItem.prototype.includes = function(item_input) {
    if (item_input === null) {
        return true;
    }

    var item = {};
    if ( item_input.wtypeId ) item = $dataWeapons[item_input.id];
    else if ( item_input.atypeId ) item = $dataArmors[item_input.id];
    else return false;

    return (
        this._actor && this._actor.canEquip(item) /* && item.etypeId === this.etypeId() */
    );
};

///-----------------------------------------------------------------------------
/// Window_Selectable
///
/// The window class with cursor movement functions.
Window_Selectable.prototype.colSpacing = function() {
    return 4;
};
Window_Selectable.prototype.rowSpacing = function() {
    return 2;
};

///-----------------------------------------------------------------------------
/// Window_SkillList
///
/// The window for selecting a skill on the skill screen.
Window_SkillList.prototype.itemAt = function(index) {
    if ( !this._data ) return null;
    if ( index >= 0 ) {
        const item = this._data[index];
        if ( item == null ) return null;

        if ( item.wtypeId ) return $dataWeapons[item.id];
        else if ( item.atypeId ) return $dataArmors[item.id];
        else if ( item.stypeId ) return $dataSkills[item.id];
        else if ( item.itypeId ) return $dataItems[item.id];
    }

    return null;
};
Window_SkillList.prototype.isCurrentItemEnabled = function() {
    // return this.isEnabled(this._data[this.index()]);
    return this.isEnabled( this.itemAt( this.index() ) );
};
Window_SkillList.prototype.selectLast = function() {
    // const index = this._data.indexOf(this._actor.lastSkill());
    // this.forceSelect(index >= 0 ? index : 0);
    const last_skill_id = (this._actor.lastSkill()) ? (this._actor.lastSkill()).id : 0;

    if ( (!this._data) || (last_skill_id < 1) ) {
        this.forceSelect( 0 );

        return;
    }

    const last_skill_in_data = (this._data.filter( item => (item.id == last_skill_id) ))[0];
    const index = this._data.indexOf( last_skill_in_data );

    this.forceSelect(index >= 0 ? index : 0);
};
Window_SkillList.prototype.makeItemList = function() {
    if ( !this._actor ) {
        this._data = [];

        return;
    }

    const all_skills = this._actor.skills().filter( item => this.includes(item) );
    this._data = [];

    if ( all_skills.length < 1 ) return;

    for ( let i = 1; i <= tjs_highest_item_priority; i++ ) {
        const items_specific_priority = all_skills.filter( item => item.priority == i );

        if ( items_specific_priority.length > 0 ) this._data = TJS_auto.DeepCopy( this._data.concat(items_specific_priority) );
    }
};
Window_SkillList.prototype.maxCols = function() {
    return 3;
};
Window_SkillList.prototype.colSpacing = function() {
    return 4;
};
Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    const cost_tp = this._actor.skillTpCost( skill );
    const cost_mp = this._actor.skillMpCost( skill );

    if ( skill.show_level == true ) {
        const skill_level = this._actor.GetLevelOfSkill( skill );
        const level_text_width = this.textWidth( " Level: " + skill_level );

        if ( (cost_tp > 0) && (cost_mp > 0) ) {
            const mp_text_width = this.textWidth( " " + cost_mp.toLocaleString() + " MP,");

            this.changeTextColor( tjs_color_tp );
            this.drawText( cost_tp.toLocaleString() + " TP,", x, y, width - (mp_text_width + level_text_width), "right" );
            this.changeTextColor( tjs_color_mp );
            this.drawText( cost_mp.toLocaleString() + " MP,", x, y, width - level_text_width, "right" );
            this.changeTextColor( tjs_color_lvl );
            this.drawText( " Level: " + skill_level, x, y, width, "right" );
        }
        else if ( cost_tp > 0 ) {
            this.changeTextColor( tjs_color_tp );
            this.drawText( cost_tp.toLocaleString() + " TP,", x, y, width - level_text_width, "right" );
            this.changeTextColor( tjs_color_lvl );
            this.drawText( " Level: " + skill_level, x, y, width, "right" );
        }
        else if ( cost_mp > 0 ) {
            this.changeTextColor( tjs_color_mp );
            this.drawText( cost_mp.toLocaleString() + " MP,", x, y, width - level_text_width, "right" );
            this.changeTextColor( tjs_color_lvl );
            this.drawText( " Level: " + skill_level, x, y, width, "right" );
        }
        else {
            this.changeTextColor( tjs_color_lvl );
            this.drawText( " Level: " + skill_level, x, y, width, "right" );
        }

        return;
    }

    if ( (cost_tp > 0) && (cost_mp > 0) ) {
        const mp_text_width = this.textWidth( " " + cost_mp.toLocaleString() + " MP,");

        this.changeTextColor( tjs_color_tp );
        this.drawText( cost_tp.toLocaleString() + " TP,", x, y, width - mp_text_width, "right" );
        this.changeTextColor( tjs_color_mp );
        this.drawText( cost_mp.toLocaleString() + " MP", x, y, width, "right" );
    }
    else if ( cost_tp > 0 ) {
        this.changeTextColor( tjs_color_tp );
        this.drawText( cost_tp.toLocaleString() + " TP", x, y, width, "right" );
    }
    else if ( cost_mp > 0 ) {
        this.changeTextColor( tjs_color_mp );
        this.drawText( cost_mp.toLocaleString() + " MP", x, y, width, "right" );
    }
};
Window_SkillList.prototype.drawItem = function(index) {
    const skill = this.itemAt(index);

    if (skill) {
        const costWidth = this.costWidth();
        const rect = this.itemLineRect(index);
        this.changePaintOpacity(this.isEnabled(skill));
        this.drawItemName(skill, rect.x, rect.y, rect.width - costWidth);
        this.changePaintOpacity(1);
        this.drawSkillCost(skill, rect.x, rect.y, rect.width);
    }
};

///-----------------------------------------------------------------------------
/// Game_Party
///
/// The game object class for the party. Information such as gold and items is
/// included.
Game_Party.prototype.maxItems = function(/*item*/item) {
    var count = tjs_max_items;

    if ( !item ) return count;
    if ( !item.id ) return count;

    return item.max_count;
};
Game_Party.prototype.UpdateDiscovered = function() {
    for (const actor of $gameParty.members()) {
        actor.SetDiscovered();
    }
};
Game_Party.prototype.setupStartingMembers = function() {
    this._actors = [];
    for (const actorId of $dataSystem.partyMembers) {
        if ($gameActors.actor(actorId)) {
            this._actors.push(actorId);
        }
    }

    this.UpdateDiscovered();
};
Game_Party.prototype.addActor = function(actorId) {
    if (!this._actors.includes(actorId)) {
        this._actors.push(actorId);
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
        $gameTemp.requestBattleRefresh();
        if (this.inBattle()) {
            const actor = $gameActors.actor(actorId);
            if (this.battleMembers().includes(actor)) {
                actor.onBattleStart();
            }
        }
    }

    this.UpdateDiscovered();
};
Game_Party.prototype.maxBattleMembers = function() {
    return tjs_max_battlemember_size;
};
Game_Party.prototype.maxGold = function() {
    return 999999999999; // 999,999,999,999 - Just under one trillion.
};

///-----------------------------------------------------------------------------
/// Window_ShopNumber
///
/// The window for inputting quantity of items to buy or sell on the shop
/// screen.
Window_ShopNumber.prototype.maxDigits = function() {
    return tjs_max_items_digits;
};
Window_ShopNumber.prototype.drawTotalPrice = function() {
    const padding = this.itemPadding();
    const total = this._price * this._number;
    const width = this.innerWidth - padding * 2;
    const y = this.totalPriceY();
    this.drawCurrencyValue(total, " " + this._currencyUnit, 0, y, width);
};

///-----------------------------------------------------------------------------
/// Game_Actor
///
/// The game object class for an actor.
Game_Actor.prototype.setup = function(actorId) {
    const actor = $dataActors[actorId];
    this._actorId = actorId;
    this._name = actor.name;
    this._nickname = actor.nickname;
    this._profile = actor.profile;
    this._classId = actor.classId;
    this._level = actor.initialLevel;

    this.InitWeaponBreakCounts();
    this._equipsLevels = [];

    this.initImages();
    this.initExp();
    this.initSkills();
    this.initEquips(actor.equips);
    this.clearParamPlus();
    this.recoverAll();
};
Game_Actor.prototype.changeExp = function(exp, show) {
    if ( !this._exp[this._classId] ) this._exp[this._classId] = 0;
    var exp_change = exp - this._exp[this._classId];

    if ( exp_change > 0 ) {
        if ( ($gameSystem.average_actor_level >= $gameSystem.soft_level_cap) && (this._level >= ($gameSystem.average_actor_level * 0.75)) )
            exp_change *= 0.001;
    }

    this._exp[this._classId] = Math.max( this._exp[this._classId] + exp_change, 0 );

    const lastLevel = this._level;
    const lastSkills = this.skills();
    while (!this.isMaxLevel() && this.currentExp() >= this.nextLevelExp()) {
        this.levelUp();
    }
    while (this.currentExp() < this.currentLevelExp()) {
        this.levelDown();
    }
    if (show && this._level > lastLevel) {
        this.displayLevelUp(this.findNewSkills(lastSkills));
    }
    this.refresh();
};
Game_Actor.prototype.levelUp = function() {
    this._level++;
    for (const learning of this.currentClass().learnings) {
        if (learning.level === this._level) {
            this.learnSkill(learning.skillId);
        }
    }

    TJS_auto.CalculateAverageActorLevel();
};
Game_Actor.prototype.GetAtr_MaxTacticalPoints = function() {
    const actor = $dataActors[this._actorId];
    if ( !actor.custom_traits ) return 100;
    var value = actor.custom_traits.max_tactical_points_add;
    const states = this.states();
    const equips = this.equips();

    value += this.currentClass().custom_traits.max_tactical_points_add;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value += equips[i].custom_traits.max_tactical_points_add;
    }
    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.max_tactical_points_add;

    value *= actor.custom_traits.max_tactical_points_multiply;
    value *= this.currentClass().custom_traits.max_tactical_points_multiply;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value *= equips[i].custom_traits.max_tactical_points_multiply;
    }
    for ( let i = 0; i < states.length; i++ )
        value *= states[i].custom_traits.max_tactical_points_multiply;

    return Math.ceil(value).clamp( 100, 50000 );
};
Game_Actor.prototype.GetAtr_HitRatePhysical = function() {
    const actor = $dataActors[this._actorId];
    var value = actor.custom_traits.to_hit_physical_add;
    const states = this.states();
    const equips = this.equips();

    value += this.currentClass().custom_traits.to_hit_physical_add;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value += equips[i].custom_traits.to_hit_physical_add;
    }
    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.to_hit_physical_add;

    value *= actor.custom_traits.to_hit_physical_multiply;
    value *= this.currentClass().custom_traits.to_hit_physical_multiply;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value *= equips[i].custom_traits.to_hit_physical_multiply;
    }
    for ( let i = 0; i < states.length; i++ )
        value *= states[i].custom_traits.to_hit_physical_multiply;

    return Math.round(value * 100).clamp( -5000, 5000 ) / 100;
};
Game_Actor.prototype.GetAtr_HitRateMagical = function() {
    const actor = $dataActors[this._actorId];
    var value = actor.custom_traits.to_hit_magical_add;
    const states = this.states();
    const equips = this.equips();

    value += this.currentClass().custom_traits.to_hit_magical_add;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value += equips[i].custom_traits.to_hit_magical_add;
    }
    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.to_hit_magical_add;

    value *= actor.custom_traits.to_hit_magical_multiply;
    value *= this.currentClass().custom_traits.to_hit_magical_multiply;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value *= equips[i].custom_traits.to_hit_magical_multiply;
    }
    for ( let i = 0; i < states.length; i++ )
        value *= states[i].custom_traits.to_hit_magical_multiply;

    return Math.round(value * 100).clamp( -5000, 5000 ) / 100;
};
Game_Actor.prototype.GetAtr_MagicFocus = function() {
    const actor = this.actor();
    var value = this.ParamBaseForLevel( 8, this.level );
    const states = this.states();
    const equips = this.equips();

    value += this._magicFocusMod;
    value += actor.custom_traits.magic_focus_add;
    value += this.currentClass().custom_traits.magic_focus_add;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value += equips[i].custom_traits.magic_focus_add;
    }
    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.magic_focus_add;

    value *= actor.custom_traits.magic_focus_multiply;
    value *= this.currentClass().custom_traits.magic_focus_multiply;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value *= equips[i].custom_traits.magic_focus_multiply;
    }
    for ( let i = 0; i < states.length; i++ )
        value *= states[i].custom_traits.magic_focus_multiply;

    return Math.ceil(value).clamp( 1, 5000 );
};
Game_Actor.prototype.GetAtr_PhysicalCriticalHitRate = function() {
    const actor = this.actor();
    if ( !actor.custom_traits ) return 0;
    var value = actor.custom_traits.physical_critical_hit_rate;
    const states = this.states();
    const equips = this.equips();

    value += this.currentClass().custom_traits.physical_critical_hit_rate;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value += equips[i].custom_traits.physical_critical_hit_rate;
    }
    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.physical_critical_hit_rate;

    return Math.round(value * 100).clamp( -99999, 99999 ) / 100;
};
Game_Actor.prototype.GetAtr_MagicalCriticalHitRate = function() {
    const actor = this.actor();
    if ( !actor.custom_traits ) return 0;
    var value = actor.custom_traits.magical_critical_hit_rate;
    const states = this.states();
    const equips = this.equips();

    value += this.currentClass().custom_traits.magical_critical_hit_rate;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value += equips[i].custom_traits.magical_critical_hit_rate;
    }
    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.magical_critical_hit_rate;

    return Math.round(value * 100).clamp( -99999, 99999 ) / 100;
};
Game_Actor.prototype.GetAtr_PhysicalCriticalEvadeRate = function() {
    const actor = this.actor();
    if ( !actor.custom_traits ) return 0;
    var value = actor.custom_traits.physical_critical_evade_rate;
    const states = this.states();
    const equips = this.equips();

    value += this.currentClass().custom_traits.physical_critical_evade_rate;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value += equips[i].custom_traits.physical_critical_evade_rate;
    }
    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.physical_critical_evade_rate;

    return Math.round(value * 100).clamp( -99999, 99999 ) / 100;
};
Game_Actor.prototype.GetAtr_MagicalCriticalEvadeRate = function() {
    const actor = this.actor();
    if ( !actor.custom_traits ) return 0;
    var value = actor.custom_traits.magical_critical_evade_rate;
    const states = this.states();
    const equips = this.equips();

    value += this.currentClass().custom_traits.magical_critical_evade_rate;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value += equips[i].custom_traits.magical_critical_evade_rate;
    }
    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.magical_critical_evade_rate;

    return Math.round(value * 100).clamp( -99999, 99999 ) / 100;
};
Game_Actor.prototype.GetAtr_MagicFocusDebuffRate = function() {
    const actor = this.actor();
    if ( !actor.custom_traits ) return 1;
    var value = actor.custom_traits.magic_focus_debuff_rate;
    const states = this.states();
    const equips = this.equips();

    value *= this.currentClass().custom_traits.magic_focus_debuff_rate;
    for ( let i = 0; i < equips.length; i++ ) {
        if ( equips[i] )
            value *= equips[i].custom_traits.magic_focus_debuff_rate;
    }
    for ( let i = 0; i < states.length; i++ )
        value *= states[i].custom_traits.magic_focus_debuff_rate;

    return Math.round(value * 10000).clamp( 0, 51000000 ) / 10000;
};
Game_Actor.prototype.GetUsableFreeSkills = function() {
    const usable_skills = this.skills().filter(skill => this.canUse(skill));
    const skills = usable_skills.filter( skill => (skill.mpCost == 0) && (skill.tpCost == 0) );

    if ( skills.length < 1 ) return [$dataSkills[this.attackSkillId()]];

    return skills;
};
Game_Actor.prototype.GetFreeAttackSkillId = function() {
    const skills = this.GetUsableFreeSkills().filter( skill => ((skill.scope >= 1) && (skill.scope <= 6)) || (skill.scope == 14) );

    if ( skills.length < 1 )
        return this.attackSkillId();
    else {
        const index = Math.round(Math.random() * (skills.length - 1));

        return skills[index].id;
    }
};
Game_Actor.prototype.MakeFreeActionList = function() {
    const list = [];
    for (const skill of this.GetUsableFreeSkills()) {
        const skillAction = new Game_Action(this);
        skillAction.setSkill(skill.id);
        list.push(skillAction);
    }
    return list;
};
Game_Actor.prototype.makeConfusionActions = function() {
    for (let i = 0; i < this.numActions(); i++) {
        const list = this.MakeFreeActionList();
        let maxValue = -Number.MAX_VALUE;
        for (const action of list) {
            const value = action.evaluate();
            if (value > maxValue) {
                maxValue = value;
                this.setAction(i, action);
            }
        }
    }
    this.setActionState("waiting");
};
Game_Actor.prototype.InitWeaponBreakCounts = function() {
    this._breakingCountWeapon = [];
    for ( let i = 0; i < $dataSystem.equipTypes.length; i++ )
        this._breakingCountWeapon.push( 0 );
};
Game_Actor.prototype.ResetEquipment = function() {
    this.initEquips( $dataActors[this._actorId].equips );
};
Game_Actor.prototype.initEquips = function(equips) {
    const slots = this.equipSlots();
    const maxSlots = slots.length;
    this._equips = [];
    for (let i = 0; i < maxSlots; i++) {
        this._equips[i] = new Game_Item();
    }
    for (let j = 0; j < equips.length; j++) {
        if (j < maxSlots) {
            this._equips[j].setEquip(slots[j] === 1, equips[j]);
        }
    }

    this.releaseUnequippableItems(true);

    this.refresh();
};
Game_Actor.prototype.CheckEquipmentBreak = function(equip_index, durability_use_count) {
    if ( !this.equips()[equip_index] ) return false;
    const item = this.equips()[equip_index];
    if ( item.durability < 1 ) return false;
    if ( this._breakingCountWeapon[equip_index] >= 0 ) this._breakingCountWeapon[equip_index] += durability_use_count;

    const item_durability = item.durability * tjs_multiplier_weapon_break_counts;
    const chance = Math.max(2.00000 * ((this._breakingCountWeapon[equip_index] / item_durability) - 0.50000), 0.00000);

    if ( Math.random() < chance ) {
        this._breakingCountWeapon[equip_index] = 0;
        AudioManager.playSe( {name: 'tjs/gunshot 3', volume: 98, pitch: 100, pan: 0} );

        if ( equip_index <= 1 ) {
            this.forceChangeEquip(equip_index, $dataWeapons[tjs_weaponID_broken_weapon]);
            this.addState(tjs_state_broken_weapon);
        }
        else if ( equip_index == 2 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_backup_weapon]);
            this.addState(tjs_state_broken_weapon);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("book") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_book]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("shield") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_shield]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("belt") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_belt]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("wristband") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_wristband]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("glove") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_glove]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("socks") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_socks]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("shoes") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_shoes]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("necklace") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_necklace]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("bracelet") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_bracelet]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("earring") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_earring]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("ring") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_ring]);
            this.addState(tjs_state_broken_equipment);
        }
        else if ( equip_index == TJS_auto.GetIndexForEquipmentType("accessory") - 1 ) {
            this.forceChangeEquip(equip_index, $dataArmors[tjs_armorID_broken_accessory]);
            this.addState(tjs_state_broken_equipment);
        }

        return true;
    }

    return false;
};
Game_Actor.prototype.sparam = function(sparamId) {
    if ( sparamId == 0 ) {
        return this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId) * this._targetedRateMod;
    }

    return this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);
};
Game_Actor.prototype.maxLevel = function() {
    return tjs_max_character_level;
};
Game_Actor.prototype.GetNormalizedLevel = function() {
    return (this.level - 1) / (tjs_max_character_level - 1);
};
Game_Actor.prototype.gainExp = function(exp) {
    const newExp = this.currentExp() + (exp * this.finalExpRate());
    this.changeExp(newExp, this.shouldDisplayLevelUp());
};
Game_Actor.prototype.GainExpSilent = function(exp) {
    const newExp = this.currentExp() + Math.round(exp * this.finalExpRate());
    this.changeExp(newExp, false);
};
Game_Actor.prototype.nextRequiredExpUnrounded = function() {
    return this.expForLevelUnrounded(this._level + 1) - this._exp[this._classId];
};
Game_Actor.prototype.expForLevel = function(level) {
    const cls = this.currentClass();
    const level_fac = level / tjs_max_character_level;
    const above_zero = level > 1 ? 1 : 0;
    const xp_base = TJS_auto.CalcExpValue( level_fac ) * above_zero;
    const xp_variation_pow = TJS_auto.Lerp( 0.925, 7.5, level_fac ); // 5.35

    if (cls.id == 1) {
        return Math.round(xp_base * 1.000);
    }
    else if (cls.id == 2) return Math.round(xp_base * Math.pow( 1.000, xp_variation_pow ));
    else if (cls.id == 3) return Math.round(xp_base * Math.pow( 0.980, xp_variation_pow ));
    else if (cls.id == 4) return Math.round(xp_base * Math.pow( 1.025, xp_variation_pow ));
    else if (cls.id == 5) return Math.round(xp_base * Math.pow( 0.895, xp_variation_pow ));
    else if (cls.id == 6) return Math.round(xp_base * Math.pow( 0.956, xp_variation_pow ));
    else if (cls.id == 7) return Math.round(xp_base * Math.pow( 0.912, xp_variation_pow ));
    else if (cls.id == 8) return Math.round(xp_base * Math.pow( 1.085, xp_variation_pow ));
    else if (cls.id == 9) return Math.round(xp_base * Math.pow( 1.092, xp_variation_pow ));
    else if (cls.id == 10) return Math.round(xp_base * Math.pow( 1.045, xp_variation_pow ));
    else if (cls.id == 11) return Math.round(xp_base * Math.pow( 1.165, xp_variation_pow ));

    return Math.round(xp_base * 1.000);
};
Game_Actor.prototype.expForLevelUnrounded = function(level) {
    const cls = this.currentClass();
    const level_fac = level / tjs_max_character_level;
    const above_zero = level > 1 ? 1 : 0;
    const xp_base = TJS_auto.CalcExpValue( level_fac ) * above_zero;
    const xp_variation_pow = TJS_auto.Lerp( 0.925, 7.5, level_fac ); // 5.35

    if (cls.id == 1) {
        return (xp_base * 1.000);
    }
    else if (cls.id == 2) return (xp_base * Math.pow( 1.000, xp_variation_pow ));
    else if (cls.id == 3) return (xp_base * Math.pow( 0.980, xp_variation_pow ));
    else if (cls.id == 4) return (xp_base * Math.pow( 1.025, xp_variation_pow ));
    else if (cls.id == 5) return (xp_base * Math.pow( 0.895, xp_variation_pow ));
    else if (cls.id == 6) return (xp_base * Math.pow( 0.956, xp_variation_pow ));
    else if (cls.id == 7) return (xp_base * Math.pow( 0.912, xp_variation_pow ));
    else if (cls.id == 8) return (xp_base * Math.pow( 1.085, xp_variation_pow ));
    else if (cls.id == 9) return (xp_base * Math.pow( 1.092, xp_variation_pow ));
    else if (cls.id == 10) return (xp_base * Math.pow( 1.045, xp_variation_pow ));
    else if (cls.id == 11) return (xp_base * Math.pow( 1.165, xp_variation_pow ));

    return (xp_base * 1.000);
};
Game_Actor.prototype.ParamBaseForLevel = function(paramId, level) {
    const lvl = level;
    const cls = this.currentClass();
    const levelFactor = (lvl - 1) / (tjs_max_character_level - 1.00000);
    // Parameters:
    // 0 = Max HP
    // 1 = Max MP
    // 2 = Attack
    // 3 = Defense
    // 4 = Magic Attack
    // 5 = Magic Defense
    // 6 = Agility
    // 7 = Luck
    // 8 = Magic Focus

    // Classes:
    // 1 = Undetermined
    // 2 = Swordmaster
    // 3 = Axemaster
    // 4 = Samurai
    // 5 = Ninja
    // 6 = Rifleman
    // 7 = Cleric
    // 8 = Mage
    // 9 = Wizard
    // 10 = Martial Artist
    // 11 = Kensei

    // 1 = Undetermined
    if (cls.id == 1) {
        return 100;
    }
    // 2 = Swordmaster
    else if (cls.id == 2) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 400, 20000, levelFactor, 0 )) * tjs_master_hp_adjust; // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 20, 1000, levelFactor, 0 )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 3, 150, levelFactor, 0 )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 8, 400, levelFactor, 0 )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Luck
        if (paramId == 8) return Math.round(TJS_auto.LerpSkew( 4, 200, levelFactor, 0 )); // Magic Focus
    }
    // 3 = Axemaster
    else if (cls.id == 3) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 400, 20000, levelFactor, 0 )) * tjs_master_hp_adjust; // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 20, 1000, levelFactor, 0 )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 3, 150, levelFactor, 0 )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 8, 400, levelFactor, 0 )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Luck
        if (paramId == 8) return Math.round(TJS_auto.LerpSkew( 4, 200, levelFactor, 0 )); // Magic Focus
    }
    // 4 = Samurai
    else if (cls.id == 4) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 400, 20000, levelFactor, 0 )) * tjs_master_hp_adjust; // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 100, 5000, levelFactor, 0 )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 3, 150, levelFactor, 0 )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 8, 400, levelFactor, 0 )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Luck
        if (paramId == 8) return Math.round(TJS_auto.LerpSkew( 4, 200, levelFactor, 0 )); // Magic Focus
    }
    // 5 = Ninja
    else if (cls.id == 5) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 300, 15000, levelFactor, 0 )) * tjs_master_hp_adjust; // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 100, 5000, levelFactor, 0 )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 20, 1000, levelFactor, 0 )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 3, 150, levelFactor, 0 )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 30, 1500, levelFactor, 0 )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 6, 300, levelFactor, 0 )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 8, 400, levelFactor, 0 )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Luck
        if (paramId == 8) return Math.round(TJS_auto.LerpSkew( 9, 450, levelFactor, 0 )); // Magic Focus
    }
    // 6 = Rifleman
    else if (cls.id == 6) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 400, 20000, levelFactor, 0 )) * tjs_master_hp_adjust; // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 100, 5000, levelFactor, 0 )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 20, 1000, levelFactor, 0 )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 4, 200, levelFactor, 0 )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 3, 150, levelFactor, 0 )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 8, 400, levelFactor, 0 )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Luck
        if (paramId == 8) return Math.round(TJS_auto.LerpSkew( 4, 200, levelFactor, 0 )); // Magic Focus
    }
    // 7 = Cleric
    else if (cls.id == 7) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 300, 15000, levelFactor, 0 )) * tjs_master_hp_adjust; // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 150, 7500, levelFactor, 0 )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 20, 1000, levelFactor, 0 )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 4, 200, levelFactor, 0 )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 32, 1600, levelFactor, 0 )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 6, 300, levelFactor, 0 )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 6, 300, levelFactor, 0 )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Luck
        if (paramId == 8) return Math.round(TJS_auto.LerpSkew( 12, 600, levelFactor, 0 )); // Magic Focus
    }
    // 8 = Mage
    else if (cls.id == 8) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 275, 13750, levelFactor, 0 )) * tjs_master_hp_adjust; // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 150, 7500, levelFactor, 0 )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 4, 200, levelFactor, 0 )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 2, 100, levelFactor, 0 )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 32, 1600, levelFactor, 0 )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 9, 450, levelFactor, 0 )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 6, 300, levelFactor, 0 )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 20, 1000, levelFactor, 0 )); // Luck
        if (paramId == 8) return Math.round(TJS_auto.LerpSkew( 15, 750, levelFactor, 0 )); // Magic Focus
    }
    // 9 = Wizard
    else if (cls.id == 9) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 265, 13250, levelFactor, 0 )) * tjs_master_hp_adjust; // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 150, 7500, levelFactor, 0 )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 4, 200, levelFactor, 0 )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 2, 100, levelFactor, 0 )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 9, 450, levelFactor, 0 )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 6, 300, levelFactor, 0 )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 20, 1000, levelFactor, 0 )); // Luck
        if (paramId == 8) return Math.round(TJS_auto.LerpSkew( 13, 650, levelFactor, 0 )); // Magic Focus
    }
    // 10 = Martial Artist
    else if (cls.id == 10) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 400, 20000, levelFactor, 0 )) * tjs_master_hp_adjust; // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 100, 5000, levelFactor, 0 )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 3, 150, levelFactor, 0 )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 8, 400, levelFactor, 0 )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Luck
        if (paramId == 8) return Math.round(TJS_auto.LerpSkew( 4, 200, levelFactor, 0 )); // Magic Focus
    }
    // 11 = Kensei
    else if (cls.id == 10) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 400, 20000, levelFactor, 0 )) * tjs_master_hp_adjust; // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 100, 5000, levelFactor, 0 )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 5, 250, levelFactor, 0 )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 3, 150, levelFactor, 0 )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 8, 400, levelFactor, 0 )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 25, 1250, levelFactor, 0 )); // Luck
        if (paramId == 8) return Math.round(TJS_auto.LerpSkew( 4, 200, levelFactor, 0 )); // Magic Focus
    }

    // Default
    return 100;
};
Game_Actor.prototype.paramBase = function(paramId) {
    return this.ParamBaseForLevel( paramId, this._level );
};
Game_Actor.prototype.setLastMenuSkill = function(skill) {
    this._lastMenuSkill.setObject( $dataSkills[skill.id] );
};
Game_Actor.prototype.setLastBattleSkill = function(skill) {
    this._lastBattleSkill.setObject( $dataSkills[skill.id] );
};
Game_Actor.prototype.GetDp = function() {
    var pct = this._hp / this.param(0);
    pct = Math.pow(pct, 2.00000);
    pct = 1.00000 - pct;
    pct *= tjs_combat_hp_dampening;
    pct = 1.00000 - pct;

    return pct;
};
Game_Actor.prototype.lerp = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, (this.level - 1) / (tjs_max_character_level - 1.00000) );
};
Game_Actor.prototype.GetLevelMultiplierForEquip = function(slot_index) {
    var levelFactor = 1;
    if ( this.equips()[slot_index] ) var levelFactor = this.equips()[slot_index].level;

    levelFactor -= 1;
    levelFactor = Math.max(levelFactor, 0);
    levelFactor /= tjs_max_item_levels - 1.00000;

    if ( slot_index < 0 ) {
        levelFactor = (this.level - 1) / (tjs_max_character_level - 1.00000);
    }

    return levelFactor;
};
Game_Actor.prototype.GetModifiedMagicPointCost = function(equip_slot_index, mp_base_cost) {
    if ( equip_slot_index < 0 ) return mp_base_cost;

    var cost = mp_base_cost;
    var cLevel = 1;
    if ( this.equips()[equip_slot_index] ) var cLevel = this.equips()[equip_slot_index].level;

    const lerpValue = (cLevel - 1) / (tjs_max_item_levels - 1);
    const mult = TJS_auto.Lerp( 1.00000, tjs_max_mp_cost_multiplier, lerpValue );

    return cost * mult;
};
Game_Actor.prototype.GetModifiedWeaponMagicPointCost = function(skill, mp_base_cost) {
    const equip_slot_index = TJS_auto.GetEquipSlotOfSkill( skill, this );
    if ( equip_slot_index < 0 ) return mp_base_cost;

    var cost = mp_base_cost;
    var cLevel = 1;
    if ( this.equips()[equip_slot_index] ) var cLevel = this.equips()[equip_slot_index].level;

    const lerpValue = (cLevel - 1) / (tjs_max_item_levels - 1);
    const mult = TJS_auto.Lerp( 1.00000, tjs_max_mp_cost_multiplier, lerpValue );

    return cost * mult;
};
Game_Actor.prototype.GetModifiedTpCost = function(equip_slot_index, tp_base_cost) {
    if ( equip_slot_index < 0 ) return tp_base_cost;

    var cost = tp_base_cost;
    var cLevel = 1;
    if ( this.equips()[equip_slot_index] ) var cLevel = this.equips()[equip_slot_index].level;

    const lerpValue = (cLevel - 1) / (tjs_max_item_levels - 1);
    const mult = TJS_auto.Lerp( 1.00000, tjs_max_tp_cost_multiplier, lerpValue );

    return cost * mult;
};
Game_Actor.prototype.GetModifiedWeaponTpCost = function(skill, tp_base_cost) {
    const equip_slot_index = TJS_auto.GetEquipSlotOfSkill( skill, this );
    if ( equip_slot_index < 0 ) return tp_base_cost;

    var cost = tp_base_cost;
    var cLevel = 1;
    if ( this.equips()[equip_slot_index] ) var cLevel = this.equips()[equip_slot_index].level;

    const lerpValue = (cLevel - 1) / (tjs_max_item_levels - 1);
    const mult = TJS_auto.Lerp( 1.00000, tjs_max_tp_cost_multiplier, lerpValue );

    return cost * mult;
};
Game_Actor.prototype.skillMpCost = function(skill) {
    var cost = skill.mpCost * this.mcr;

    if ( skill.equip_type < 1 )
        cost = this.GetModifiedWeaponMagicPointCost( skill, cost );
    else
        cost = this.GetModifiedMagicPointCost( skill.equip_type - 1, cost );

    return Math.floor(cost);
};
Game_Actor.prototype.skillMpCostBase = function(skill) {
    var cost = skill.mpCost;

    if ( skill.equip_type < 1 )
        cost = this.GetModifiedWeaponMagicPointCost( skill, cost );
    else
        cost = this.GetModifiedMagicPointCost( skill.equip_type - 1, cost );

    return Math.floor(cost);
};
Game_Actor.prototype.skillTpCost = function(skill) {
    var cost = skill.tpCost;

    if ( skill.equip_type < 1 )
        cost = this.GetModifiedWeaponTpCost( skill, cost );
    else
        cost = this.GetModifiedTpCost( skill.equip_type - 1, cost );

    return Math.floor(cost);
};
Game_Actor.prototype.GetSlotOfSkill = function(skill) {
    return TJS_auto.GetEquipSlotOfSkill( skill, this );
};
Game_Actor.prototype.GetLevelOfEquippedItemOfSlot = function(slot_index) {
    var levelFactor = 1;
    if ( slot_index < 0 ) return levelFactor;
    if ( this.equips()[slot_index] ) return this.equips()[slot_index].level;

    return levelFactor;
};
Game_Actor.prototype.GetLevelOfSkill = function(skill) {
    var skill_level = 1;

    const skill_slot = this.GetSlotOfSkill( skill );
    if ( skill_slot < 0 ) return skill_level;

    skill_level = this.GetLevelOfEquippedItemOfSlot( skill_slot );

    return skill_level;
};
Game_Actor.prototype.maxTp = function() {
    const factor = TJS_auto.Lerp( 1.00000, 5.00000, this.GetNormalizedLevel() );

    return Math.round(this.GetAtr_MaxTacticalPoints() * factor);
};
Game_Actor.prototype.gainHp = function(value) {
    this._result.hpDamage = -value;
    this._result.hpAffected = true;

    if ( $gameParty.inBattle() )
        this.buffered_hp += value;
    else
        this.setHp(this.hp + value);
};
Game_Actor.prototype.gainMp = function(value) {
    this._result.mpDamage = -value;

    if ( $gameParty.inBattle() )
        this.buffered_mp += value;
    else
        this.setMp(this.mp + value);
};
Game_Actor.prototype.gainTp = function(value) {
    this._result.tpDamage = -value;

    if ( $gameParty.inBattle() )
        this.buffered_tp += value;
    else
        this.setTp(this.tp + value);
};
Game_Actor.prototype.UpdateBrokenGear = function() {
    var status_weapon_broken = false;
    var status_equipment_broken = false;

    if ( this.weapons()[0] ) {
        if ( this.weapons()[0].id == tjs_weaponID_broken_weapon ) status_weapon_broken = true;
    }
    if ( this.weapons()[1] ) {
        if ( this.weapons()[1].id == tjs_weaponID_broken_weapon ) status_weapon_broken = true;
    }
    if ( this.equips()[2] ) {
        if ( this.equips()[2].id == tjs_armorID_broken_backup_weapon ) status_weapon_broken = true;
    }

    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("book") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("book") - 1 ].id == tjs_armorID_broken_book ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("shield") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("shield") - 1 ].id == tjs_armorID_broken_shield ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("belt") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("belt") - 1 ].id == tjs_armorID_broken_belt ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("wristband") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("wristband") - 1 ].id == tjs_armorID_broken_wristband ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("glove") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("glove") - 1 ].id == tjs_armorID_broken_glove ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("socks") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("socks") - 1 ].id == tjs_armorID_broken_socks ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("shoes") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("shoes") - 1 ].id == tjs_armorID_broken_shoes ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("necklace") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("necklace") - 1 ].id == tjs_armorID_broken_necklace ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("bracelet") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("bracelet") - 1 ].id == tjs_armorID_broken_bracelet ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("earring") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("earring") - 1 ].id == tjs_armorID_broken_earring ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("ring") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("ring") - 1 ].id == tjs_armorID_broken_ring ) status_equipment_broken = true;
    }
    if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("accessory") - 1 ] ) {
        if ( this.equips()[ TJS_auto.GetIndexForEquipmentType("accessory") - 1 ].id == tjs_armorID_broken_accessory ) status_equipment_broken = true;
    }

    if ( this.isStateAffected(tjs_state_broken_weapon) ) {
        if ( status_weapon_broken == false ) this.removeState(tjs_state_broken_weapon);
    } else {
        if ( status_weapon_broken == true ) this.addState(tjs_state_broken_weapon);
    }

    if ( this.isStateAffected(tjs_state_broken_equipment) ) {
        if ( status_equipment_broken == false ) this.removeState(tjs_state_broken_equipment);
    } else {
        if ( status_equipment_broken == true ) this.addState(tjs_state_broken_equipment);
    }
};
Game_Actor.prototype.onBattleEnd = function() {
    this.clearResult();
    this.removeBattleStates();
    this.removeAllBuffs();
    this.clearActions();
    if (!this.isPreserveTp()) {
        this.clearTp();
    }

    this.UpdateBrokenGear();

    this.appear();
};
Game_Actor.prototype.refresh = function() {
    this.releaseUnequippableItems(false);
    this.UpdateBrokenGear();
    this.RefreshEquipmentLevels();
    Game_Battler.prototype.refresh.call(this);
};
Game_Actor.prototype.RefreshEquipmentLevels = function() {
    this._equipsLevels = [];

    for ( let i = 0; i < $dataSystem.equipTypes.length - 1; i++ ) this._equipsLevels.push( this.GetLevelOfEquippedItemOfSlot( i ) );
};
Game_Actor.prototype.GetEquipSlotForSkill = function(skill_id) {
    const actor = this;

    if ( actor.equips()[0] ) {
        const traits_size = $dataWeapons[actor.equips()[0].id].traits.length;
        for ( let i = 0; i < traits_size; i++ ) {
            if ( $dataWeapons[actor.equips()[0].id].traits[i].code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
                if ( $dataWeapons[actor.equips()[0].id].traits[i].dataId == skill_id ) return 0;
            }
        }
    }
    if ( actor.equips()[1] ) {
        const traits_size = $dataWeapons[actor.equips()[1].id].traits.length;
        for ( let i = 0; i < traits_size; i++ ) {
            if ( $dataWeapons[actor.equips()[1].id].traits[i].code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
                if ( $dataWeapons[actor.equips()[1].id].traits[i].dataId == skill_id ) return 1;
            }
        }
    }

    const equipment_size = actor.equips().length;
    for( let es = 2; es < equipment_size; es++ ) {
        if ( actor.equips()[es] ) {
            const traits_size = $dataArmors[actor.equips()[es].id].traits.length;
            for ( let i = 0; i < traits_size; i++ ) {
                if ( $dataArmors[actor.equips()[es].id].traits[i].code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
                    if ( $dataArmors[actor.equips()[es].id].traits[i].dataId == skill_id ) return es;
                }
            }
        }
    }

    return -1;
};
Game_Actor.prototype.GetLevelValueForSkill = function(skill_id) {
    if ( !this._active_skill_id ) this._active_skill_id = 0;
    if ( skill_id <= 0 ) return 0;

    const slot = this.GetEquipSlotForSkill(skill_id);
    if (slot < 0) return 0;

    if ( this.equips()[slot] ) return this.equips()[slot].level / (tjs_max_item_levels - 1.00000);

    return 0;
};
Game_Actor.prototype.SetActiveSkill = function(skill_id) {
    this._active_skill_id = skill_id;
};
Game_Actor.prototype.static = function(multiplier_low, multiplier_high, skew=0) {
    return this.sa1 * TJS_auto.LerpSkew(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id), skew);
};
Game_Actor.prototype.physical = function(multiplier_low, multiplier_high, skew=0) {
    return this.pa1 * TJS_auto.LerpSkew(multiplier_low * 0.01000, multiplier_high * 0.01000, this.GetLevelValueForSkill(this._active_skill_id), skew);
};
Game_Actor.prototype.magical = function(multiplier_low, multiplier_high, skew=0) {
    return this.ma1 * TJS_auto.LerpSkew(multiplier_low * 0.01000, multiplier_high * 0.01000, this.GetLevelValueForSkill(this._active_skill_id), skew);
};
Game_Actor.prototype.combo = function(multiplier_low, multiplier_high, skew=0) {
    return this.ca1 * TJS_auto.LerpSkew(multiplier_low * 0.01000, multiplier_high * 0.01000, this.GetLevelValueForSkill(this._active_skill_id), skew);
};
Game_Actor.prototype.a_shotgun = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    var pct = opponent.hp / opponent.mhp;
    pct *= tjs_combat_hp_dampening_inverse;
    pct = 1.00000 - pct;

    const attack_value = this.sa1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id)) * tjs_attack_adjust_static * pct;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_static;
    const total = attack_value + defense_value;
    return attack_value * attack_value / total;
};
Game_Actor.prototype.a_static = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    var pct = opponent.hp / opponent.mhp;
    pct *= tjs_combat_hp_dampening_inverse;
    pct = 1.00000 - pct;

    const attack_value = this.sa1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id)) * tjs_attack_adjust_static;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_static;
    return (attack_value * pct) - defense_value;
};
Game_Actor.prototype.a_physical = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    var pct = opponent.hp / opponent.mhp;
    pct *= tjs_combat_hp_dampening_inverse;
    pct = 1.00000 - pct;

    const attack_value = this.pa1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id)) * tjs_attack_adjust_physical;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_physical;
    return (attack_value * pct) - defense_value;
};
Game_Actor.prototype.a_magical = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    var pct = opponent.hp / opponent.mhp;
    pct *= tjs_combat_hp_dampening_inverse;
    pct = 1.00000 - pct;

    const attack_value = this.ma1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id)) * tjs_attack_adjust_magical;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_magical;
    return (attack_value * pct) - defense_value;
};
Game_Actor.prototype.a_combo = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    var pct = opponent.hp / opponent.mhp;
    pct *= tjs_combat_hp_dampening_inverse;
    pct = 1.00000 - pct;

    const attack_value = this.ca1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id)) * tjs_attack_adjust_combo;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_combo;
    return (attack_value * pct) - defense_value;
};
Game_Actor.prototype.a_agility = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    var pct = opponent.hp / opponent.mhp;
    pct *= tjs_combat_hp_dampening_inverse;
    pct = 1.00000 - pct;

    const attack_value = this.sa1 * this.agi * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkill(this._active_skill_id)) * tjs_attack_adjust_physical;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_physical;
    return (attack_value * pct) - defense_value;
};
Game_Actor.prototype.profile = function() {
    return TJS_auto.ReparseTextAuto( this._profile, tjs_string_line_width_noFace );
};
Game_Actor.prototype.addState = function(stateId) {
    if (this.isStateAddable(stateId)) {
        if (!this.isStateAffected(stateId)) {
            this.addNewState(stateId);
            this.refresh();
        }
        this.resetStateCounts(stateId);
        this._result.pushAddedState(stateId);
    }

    const new_level = TJS_auto.GetStateScalingFactor();

    if ( this._state_scaling.filter( state => state.id == stateId ).length > 0 ) {
        for ( var state of this._state_scaling ) {
            if ( state.id == stateId ) {
                if ( state.scale < new_level ) state.scale = new_level;
            }
        }
    }
    else {
        this._state_scaling.push( { id: stateId, scale: new_level } );
    }
};
Game_Actor.prototype.StatesImmune = function() {
    const all_trait_objects = this.traitObjects();
    var states_immune = [];

    if ( !all_trait_objects ) return states_immune;

    for ( let i = 0; i < all_trait_objects.length; i++ ) {
        const trait_object = all_trait_objects[i];
        if ( !trait_object.traits ) continue;
        const traits_size = trait_object.traits.length;

        for ( let t = 0; t < traits_size; t++ ) {
            const trt = trait_object.traits[t];

            if ( trt.code == Game_BattlerBase.TRAIT_STATE_RESIST ) {
                var state_id = trt.dataId;
                if ( !$dataStates[state_id] ) continue;

                if ( !states_immune.includes(state_id) ) states_immune.push( state_id );
            }
        }
    }

    return states_immune;
};
Game_Actor.prototype.TraitsEffectsPartiallyResistantTo = function() {
    const all_trait_objects = this.allTraits();
    var states_partially_resistant = [];

    if ( !all_trait_objects ) return states_partially_resistant;

    const traits_resistances = TJS_auto.DeepCopy( all_trait_objects.filter( trait => trait.code === Game_BattlerBase.TRAIT_STATE_RATE ) );
    const traits_immunities_ids = all_trait_objects.filter( trait => trait.code === Game_BattlerBase.TRAIT_STATE_RESIST ).map( trait => trait.dataId );

    if ( traits_resistances.length < 1 ) return states_partially_resistant;

    var trait_list = [];
    for ( let i = 0; i < traits_resistances.length; i++ ) {
        const trait = traits_resistances[i];
        if ( traits_immunities_ids.includes( trait.dataId ) ) continue;

        var existing_trait = trait_list.filter( t => t.dataId == trait.dataId );
        if ( existing_trait.length > 0 ) {
            existing_trait[0].value *= trait.value;
        }
        else {
            trait_list.push( trait );
        }
    }

    if ( trait_list.length < 1 ) return trait_list;

    states_partially_resistant = TJS_auto.DeepCopy( trait_list ).sort( (a, b) => (a.value - b.value) );

    return states_partially_resistant;
};
Game_Actor.prototype.StatesPartiallyResistant = function() {
    const all_trait_objects = this.allTraits();
    var states_partially_resistant = [];

    if ( !all_trait_objects ) return states_partially_resistant;

    const traits_resistances = TJS_auto.DeepCopy( all_trait_objects.filter( trait => trait.code === Game_BattlerBase.TRAIT_STATE_RATE ) );
    const traits_immunities_ids = all_trait_objects.filter( trait => trait.code === Game_BattlerBase.TRAIT_STATE_RESIST ).map( trait => trait.dataId );

    if ( traits_resistances.length < 1 ) return states_partially_resistant;

    var trait_list = [];
    for ( let i = 0; i < traits_resistances.length; i++ ) {
        const trait = traits_resistances[i];
        if ( traits_immunities_ids.includes( trait.dataId ) ) continue;

        var existing_trait = trait_list.filter( t => t.dataId == trait.dataId );
        if ( existing_trait.length > 0 ) {
            existing_trait[0].value *= trait.value;
        }
        else {
            trait_list.push( trait );
        }
    }

    if ( trait_list.length < 1 ) return trait_list;

    states_partially_resistant = TJS_auto.DeepCopy( trait_list ).sort( (a, b) => (a.value - b.value) );

    return states_partially_resistant.map( trait => trait.dataId );
};
Game_Actor.prototype.GetStatePartialResistancePercent = function(state_id) {
    const state_data = TJS_auto.GetStateAndResistance( this, state_id );

    if ( state_data ) return state_data[1];
    else return 0.00000;
};
Game_Actor.prototype.SetDiscovered = function() {
    $gameSystem.actorDiscovered[this.actorId()] = true;
};

///-----------------------------------------------------------------------------
/// Game_Enemy
///
/// The game object class for an enemy.
Game_Enemy.prototype.initMembers = function() {
    Game_Battler.prototype.initMembers.call(this);
    this._enemyId = 0;
    this._letter = "";
    this._plural = false;
    this._screenX = 0;
    this._screenY = 0;

    // Custom TJS stuff
    this.level = 1;
    this.initial_tp = 50;
    this.attack_levels = [1];
    this.level_factor = 0.01;

    this._active_skill_id = -1;
    this._active_skill_index = -1;
};
Game_Enemy.prototype.setup = function(enemyId, x, y) {
    this._enemyId = enemyId;
    this._screenX = x;
    this._screenY = y;

    // Custom TJS stuff
    this.TjsSetupCustom();
    this._active_skill_id = -1;
    this._active_skill_index = -1;

    this.recoverAll();
};
Game_Enemy.prototype.TjsSetupCustom = function() {
    const enemy = $dataEnemies[this._enemyId];
    this.CalculateLevel();
    this.initial_tp = enemy.initial_tp;
    this.attack_levels = enemy.attack_levels;
};
Game_Enemy.prototype.CalculateLevel = function() {
    const level_base = TJS_auto.Lerp( 1.0, tjs_max_monster_level, ($gameSystem.average_actor_level - 1).clamp( 0, tjs_max_character_level - 1 ) / (tjs_max_character_level - 1) );
    var lev = ( level_base * (0.875 + (Math.random() * 0.25)) ) + $gameSystem.enemy_level_offset;
    lev = lev.clamp( $gameSystem.min_enemy_level, $gameSystem.max_enemy_level );

    this.level = lev.clamp( 1, 1000 );
    this.level_factor = TJS_auto.Lerp( 1.00000, 50.00000, (this.level - 1).clamp( 0, tjs_max_monster_level * 2.5 ) / (tjs_max_monster_level - 1) );
};
Game_Enemy.prototype.actionPlusSet = function() {
    var multiplier = ( (this.level - 1).clamp( 0, tjs_max_monster_level * 2.5 ) / (tjs_max_monster_level - 1) ).clamp( 0.00000, 1.00000 );
    multiplier = 1.00000 - Math.pow( 1.00000 - multiplier, 3.25 );

    return this.traits(Game_BattlerBase.TRAIT_ACTION_PLUS).map( trait => trait.value * multiplier );
};
Game_Enemy.prototype.param = function(paramId) {
    const stat_multiplier = ( paramId == 0 ) ? tjs_max_hp_multiplier : tjs_max_stat_multiplier;
    const stat_factor = TJS_auto.Lerp( 1.00000, stat_multiplier, (this.level - 1).clamp( 0, tjs_max_monster_level * 2.5 ) / (tjs_max_monster_level - 1) );
    const level_multiplier = stat_factor * ( ((paramId == 0) || (paramId == 1)) ? 1.00000 : 0.10000 );

    if ( paramId == TJS_PARAM_MAGIC_FOCUS ) return (this.GetAtr_MagicFocus() * level_multiplier).clamp( 1, 500000 );

    var value =
        this.paramBasePlus(paramId) *
        this.paramRate(paramId) *
        this.paramBuffRate(paramId);

    value = (value * level_multiplier).clamp( 1, 500000 );

    const maxValue = this.paramMax(paramId);
    const minValue = this.paramMin(paramId);
    return Math.round(value.clamp(minValue, maxValue));
};
Game_Enemy.prototype.GetAtr_MaxTacticalPoints = function() {
    const enemy = this.enemy();
    if ( !enemy.custom_traits ) return 100;
    var value = enemy.custom_traits.max_tactical_points_add;
    const states = this.states();

    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.max_tactical_points_add;

    for ( let i = 0; i < states.length; i++ )
        value *= states[i].custom_traits.max_tactical_points_multiply;

    value *= TJS_auto.Lerp( 1.0, 5.0, (this.level - 1).clamp( 0.0, tjs_max_monster_level * 1.5 ) / (tjs_max_monster_level - 1) );

    return Math.ceil(value).clamp( 100, 50000 );
};
Game_Enemy.prototype.GetAtr_HitRatePhysical = function() {
    const enemy = this.enemy();
    const states = this.states();
    var value = enemy.custom_traits.to_hit_physical_add;

    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.to_hit_physical_add;

    for ( let i = 0; i < states.length; i++ )
        value *= states[i].custom_traits.to_hit_physical_multiply;

    return Math.round(value * 100).clamp( -5000, 5000 ) / 100;
};
Game_Enemy.prototype.GetAtr_HitRateMagical = function() {
    const enemy = this.enemy();
    const states = this.states();
    var value = enemy.custom_traits.to_hit_magical_add;

    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.to_hit_magical_add;

    for ( let i = 0; i < states.length; i++ )
        value *= states[i].custom_traits.to_hit_magical_multiply;

    return Math.round(value * 100).clamp( -5000, 5000 ) / 100;
};
Game_Enemy.prototype.GetAtr_MagicFocus = function() {
    const enemy = this.enemy();
    const states = this.states();
    var value = enemy.custom_traits.magic_focus_add;

    value += this._magicFocusMod;
    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.magic_focus_add;

    value *= enemy.custom_traits.magic_focus_multiply;
    for ( let i = 0; i < states.length; i++ )
        value *= states[i].custom_traits.magic_focus_multiply;

    return Math.ceil(value).clamp( 1, 5000 );
};
Game_Enemy.prototype.GetAtr_PhysicalCriticalHitRate = function() {
    const actor = this.enemy();
    if ( !actor.custom_traits ) return 0;
    var value = actor.custom_traits.physical_critical_hit_rate;
    const states = this.states();

    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.physical_critical_hit_rate;

    return Math.round(value * 100).clamp( -99999, 99999 ) / 100;
};
Game_Enemy.prototype.GetAtr_MagicalCriticalHitRate = function() {
    const actor = this.enemy();
    if ( !actor.custom_traits ) return 0;
    var value = actor.custom_traits.magical_critical_hit_rate;
    const states = this.states();

    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.magical_critical_hit_rate;

    return Math.round(value * 100).clamp( -99999, 99999 ) / 100;
};
Game_Enemy.prototype.GetAtr_PhysicalCriticalEvadeRate = function() {
    const actor = this.enemy();
    if ( !actor.custom_traits ) return 0;
    var value = actor.custom_traits.physical_critical_evade_rate;
    const states = this.states();

    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.physical_critical_evade_rate;

    return Math.round(value * 100).clamp( -99999, 99999 ) / 100;
};
Game_Enemy.prototype.GetAtr_MagicalCriticalEvadeRate = function() {
    const actor = this.enemy();
    if ( !actor.custom_traits ) return 0;
    var value = actor.custom_traits.magical_critical_evade_rate;
    const states = this.states();

    for ( let i = 0; i < states.length; i++ )
        value += states[i].custom_traits.magical_critical_evade_rate;

    return Math.round(value * 100).clamp( -99999, 99999 ) / 100;
};
Game_Enemy.prototype.GetAtr_MagicFocusDebuffRate = function() {
    const enemy = this.enemy();
    if ( !enemy.custom_traits ) return 1;
    const states = this.states();
    var value = enemy.custom_traits.magic_focus_debuff_rate;

    for ( let i = 0; i < states.length; i++ )
        value *= states[i].custom_traits.magic_focus_debuff_rate;

    return Math.round(value * 10000).clamp( 0, 51000000 ) / 10000;
};
Game_Enemy.prototype.GetUsableFreeSkills = function() {
    const all_skills = this.enemy().actions.filter( (action, idx) => this.IsActionIndexAllowedBySkillRule( idx ) );
    const usable_skills = (all_skills.map( action => $dataSkills[action.skillId] )).filter( skill => this.canUse(skill) );
    const skills = usable_skills.filter( skill => (skill.mpCost == 0) && (skill.tpCost == 0) );

    if ( skills.length < 1 ) return [ $dataSkills[this.attackSkillId()] ];

    return skills;
};
Game_Enemy.prototype.GetFreeAttackSkillId = function() {
    const skills = this.GetUsableFreeSkills().filter( skill => ((skill.scope >= 1) && (skill.scope <= 6)) || (skill.scope == 14) );

    if ( skills.length < 1 )
        return this.attackSkillId();
    else {
        const index = Math.round(Math.random() * (skills.length - 1));

        return skills[index].id;
    }
};
Game_Enemy.prototype.MakeFreeActionList = function() {
    const list = [];
    for (const skill of this.GetUsableFreeSkills()) {
        const skillAction = new Game_Action(this);
        skillAction.setSkill(skill.id);
        list.push(skillAction);
    }
    return list;
};
Game_Enemy.prototype.makeConfusionActions = function() {
    for (let i = 0; i < this.numActions(); i++) {
        const list = this.MakeFreeActionList();
        let maxValue = -Number.MAX_VALUE;
        for (const action of list) {
            const value = action.evaluate();
            if (value > maxValue) {
                maxValue = value;
                this.setAction(i, action);
            }
        }
    }
    this.setActionState("waiting");
};
Game_Enemy.prototype.lerp = function(f0, f1) {
    const lvl = (this.level - 1) / (tjs_max_monster_level - 1.00000);

    return TJS_auto.Lerp( f0, f1, lvl );
};
Game_Enemy.prototype.lerp0 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp1 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp2 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp3 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp4 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp5 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp6 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp7 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp8 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp9 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp10 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp11 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp12 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp13 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp14 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.lerp15 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.GetLevelMultiplierForEquip = function(slot_index) {
    return this.GetLevelValueForSkillIndex();
};
Game_Enemy.prototype.LerpEquipIndex = function(f0, f1, lerp_index) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelValueForSkillIndex() );
};
Game_Enemy.prototype.GetEquipSlotForSkill = function(skill_id) {
    return -1;
};
Game_Enemy.prototype.GetLevelValueForSkill = function(skill_id) {
    return this.GetLevelMultiplierForEquip(0);
};
Game_Enemy.prototype.SetActiveSkill = function(skill_id) {
    this._active_skill_id = skill_id;
};
Game_Enemy.prototype.SetActiveSkillIndex = function(skill_index) {
    this._active_skill_index = skill_index;
};
Game_Enemy.prototype.SetActiveSkillIndexFromSkillId = function(skill_id) {
    this._active_skill_index = -1;

    for (let i = 0; i < $dataEnemies[this._enemyId].actions.length; i++) {
        const skill_id_number = $dataEnemies[this._enemyId].actions[i].skillId;
        if ( skill_id_number == skill_id ) {
            this._active_skill_index = i;
            break;
        }
    }
};
Game_Enemy.prototype.GetLevelValueForSkillIndex = function() {
    if ( this._active_skill_index < 0 ) return 0;

    var lvl = this.level;
    var pct = 100;

    if ( this._active_skill_index < this.attack_levels.length ) pct = this.attack_levels[ this._active_skill_index ];

    lvl = Math.max( lvl * pct * 0.01000, 1 );
    lvl = (lvl - 1) / (tjs_max_monster_level - 1.00000);

    return lvl;
};
Game_Enemy.prototype.static = function(multiplier_low, multiplier_high, skew=0) {
    return this.sa1 * TJS_auto.LerpSkew(multiplier_low, multiplier_high, this.GetLevelValueForSkillIndex(), skew);
};
Game_Enemy.prototype.physical = function(multiplier_low, multiplier_high, skew=0) {
    return this.pa1 * TJS_auto.LerpSkew(multiplier_low * 0.01000, multiplier_high * 0.01000, this.GetLevelValueForSkillIndex(), skew);
};
Game_Enemy.prototype.magical = function(multiplier_low, multiplier_high, skew=0) {
    return this.ma1 * TJS_auto.LerpSkew(multiplier_low * 0.01000, multiplier_high * 0.01000, this.GetLevelValueForSkillIndex(), skew);
};
Game_Enemy.prototype.combo = function(multiplier_low, multiplier_high, skew=0) {
    return this.ca1 * TJS_auto.LerpSkew(multiplier_low * 0.01000, multiplier_high * 0.01000, this.GetLevelValueForSkillIndex(), skew);
};
Game_Enemy.prototype.a_shotgun = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.sa1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkillIndex()) * tjs_attack_adjust_static;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_static;
    const total = attack_value + defense_value;
    const result = attack_value * attack_value / total;

    var pct = Math.max(opponent.hp - (result * tjs_master_hp_adjust), 0) / opponent.mhp;
    pct = 1.00000 - pct;
    pct *= tjs_combat_hp_dampening;
    pct = 1.00000 - pct;

    return result * pct;
};
Game_Enemy.prototype.a_static = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.sa1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkillIndex()) * tjs_attack_adjust_static;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_static;
    const result = attack_value - defense_value;

    var pct = Math.max(opponent.hp - (result * tjs_master_hp_adjust), 0) / opponent.mhp;
    pct = 1.00000 - pct;
    pct *= tjs_combat_hp_dampening;
    pct = 1.00000 - pct;

    return result * pct;
};
Game_Enemy.prototype.a_physical = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.pa1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkillIndex()) * tjs_attack_adjust_physical;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_physical;
    const result = attack_value - defense_value;

    var pct = Math.max(opponent.hp - (result * tjs_master_hp_adjust), 0) / opponent.mhp;
    pct = 1.00000 - pct;
    pct *= tjs_combat_hp_dampening;
    pct = 1.00000 - pct;

    return result * pct;
};
Game_Enemy.prototype.a_magical = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.ma1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkillIndex()) * tjs_attack_adjust_magical;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_magical;
    const result = attack_value - defense_value;

    var pct = Math.max(opponent.hp - (result * tjs_master_hp_adjust), 0) / opponent.mhp;
    pct = 1.00000 - pct;
    pct *= tjs_combat_hp_dampening;
    pct = 1.00000 - pct;

    return result * pct;
};
Game_Enemy.prototype.a_combo = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.ca1 * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkillIndex()) * tjs_attack_adjust_combo;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_combo;
    const result = attack_value - defense_value;

    var pct = Math.max(opponent.hp - (result * tjs_master_hp_adjust), 0) / opponent.mhp;
    pct = 1.00000 - pct;
    pct *= tjs_combat_hp_dampening;
    pct = 1.00000 - pct;

    return result * pct;
};
Game_Enemy.prototype.a_agility = function(multiplier_low, multiplier_high, opponent, opponent_defense, opponent_def_multiplier) {
    const attack_value = this.sa1 * this.agi * TJS_auto.Lerp(multiplier_low, multiplier_high, this.GetLevelValueForSkillIndex()) * tjs_attack_adjust_physical;
    const defense_value = opponent_defense * opponent_def_multiplier * tjs_defense_adjust_physical;
    const result = attack_value - defense_value;

    var pct = Math.max(opponent.hp - (result * tjs_master_hp_adjust), 0) / opponent.mhp;
    pct = 1.00000 - pct;
    pct *= tjs_combat_hp_dampening;
    pct = 1.00000 - pct;

    return result * pct;
};
Game_Enemy.prototype.skillMpCost = function(skill) {
    var cost = skill.mpCost * this.mcr;

    cost *= TJS_auto.Lerp( 1.00000, tjs_max_mp_cost_multiplier, this.GetLevelValueForSkillIndex() );

    return Math.floor(cost);
};
Game_Enemy.prototype.skillTpCost = function(skill) {
    var cost = skill.tpCost;

    cost *= TJS_auto.Lerp( 1.00000, tjs_max_tp_cost_multiplier, this.GetLevelValueForSkillIndex() );

    return Math.floor(cost);
};
Game_Enemy.prototype.maxTp = function() {
    return this.GetAtr_MaxTacticalPoints();
};
Game_Enemy.prototype.InitialTp = function() {
    return this.initial_tp;
};
Game_Enemy.prototype.initTp = function() {
    const tp_amount = Math.round( (Math.random() + 0.5) * this.InitialTp() ).clamp( 0, this.maxTp() );

    this.setTp( tp_amount );
};
Game_Enemy.prototype.IsActionIndexAllowedBySkillRule = function(action_index) {
    const skill_rules = this.enemy().skill_rules;
    if ( skill_rules.length < 1 ) return true;

    var allowed = true;

    const rules = skill_rules.filter( rule => (rule.skill_index == action_index) );
    if ( rules.length < 1 ) return true;

    for ( const rule of rules ) {
        if ( rule.type == TJS_ENEMY_SKILL_RULE_ENEMY_GRADE ) {
            if ( ($gameSystem.enemy_grade >= rule.grade_min) && ($gameSystem.enemy_grade <= rule.grade_max) )
                allowed = true;
            else
                allowed = false;
        }
        else if ( rule.type == TJS_ENEMY_SKILL_RULE_PARTY_LEVEL ) {
            if ( ($gameSystem.average_actor_level >= rule.level_min) && ($gameSystem.average_actor_level <= rule.level_max) )
                allowed = true;
            else
                allowed = false;
        }
        else if ( rule.type == TJS_ENEMY_SKILL_RULE_TP_LEVEL ) {
            const tp_max = this.maxTp() * 0.01;

            if ( (this._tp >= (rule.tp_min * tp_max)) && (this._tp <= (rule.tp_max * tp_max)) )
                allowed = true;
            else
                allowed = false;
        }
        else
            allowed = true;
    }

    return allowed;
};
Game_Enemy.prototype.isActionValid = function(action) {
    if ( this._tp < this.skillTpCost($dataSkills[action.skillId]) ) return false;

    return (
        this.meetsCondition(action) && this.canUse($dataSkills[action.skillId])
    );
};
Game_Enemy.prototype.makeActions = function() {
    Game_Battler.prototype.makeActions.call(this);

    if (this.numActions() > 0) {
        const actionList = this.enemy().actions.filter( (a, idx) => (this.isActionValid(a)) && (this.IsActionIndexAllowedBySkillRule( idx )) );

        if (actionList.length > 0) {
            this.selectAllActions(actionList);
        }
    }
    this.setActionState("waiting");
};
Game_Enemy.prototype.selectAllActions = function(actionList) {
    actionList = actionList.filter(a => a.rating > 0);

    for (let i = 0; i < this.numActions(); i++) {
        this.action(i).setEnemyAction(
            this.selectAction(actionList, 0)
        );
    }
};
Game_Enemy.prototype.selectAction = function(actionList, ratingZero) {
    var sum = 0;
    if ( actionList.length > 0 ) {
        for (const action of actionList) sum += action.rating;
    }

    if (sum > 0) {
        let value = Math.randomInt(sum);

        for (const action of actionList) {
            value -= action.rating;

            if (value < 0) {
                return action;
            }
        }
    } else {
        return null;
    }
};
Game_Enemy.prototype.setTp = function(tp) {
    this._tp = tp;

    this.refresh();
};
Game_Enemy.prototype.addState = function(stateId) {
    if (this.isStateAddable(stateId)) {
        if (!this.isStateAffected(stateId)) {
            this.addNewState(stateId);
            this.refresh();
        }
        this.resetStateCounts(stateId);
        this._result.pushAddedState(stateId);
    }

    const new_level = TJS_auto.GetStateScalingFactor();

    if ( this._state_scaling.filter( state => state.id == stateId ).length > 0 ) {
        for ( var state of this._state_scaling ) {
            if ( state.id == stateId ) {
                if ( state.scale < new_level ) state.scale = new_level;
            }
        }
    }
    else {
        this._state_scaling.push( { id: stateId, scale: new_level } );
    }
};
Game_Enemy.prototype.StatesImmune = function() {
    const all_trait_objects = this.traitObjects();
    var states_immune = [];

    if ( !all_trait_objects ) return states_immune;

    for ( let i = 0; i < all_trait_objects.length; i++ ) {
        const trait_object = all_trait_objects[i];
        if ( !trait_object.traits ) continue;
        const traits_size = trait_object.traits.length;

        for ( let t = 0; t < traits_size; t++ ) {
            const trt = trait_object.traits[t];

            if ( trt.code == Game_BattlerBase.TRAIT_STATE_RESIST ) {
                const state_id = trt.dataId;

                if ( !states_immune.includes(state_id) ) states_immune.push( state_id );
            }
        }
    }

    return states_immune;
};
Game_Enemy.prototype.SetDiscovered = function() {
    $gameSystem.enemyDiscovered[this.enemyId()] = true;
};
Game_Enemy.prototype.GetExpForLevel = function(level) {
    const level_fac = level / tjs_max_monster_level;
    const above_zero = level > 1 ? 1 : 0;
    const xp_base = TJS_auto.CalcExpValue( level_fac ) * above_zero;

    return xp_base;
};
Game_Enemy.prototype.exp = function() {
    const lev = $gameSystem.average_actor_level.clamp( $gameSystem.min_enemy_level, $gameSystem.max_enemy_level );
    const level_low = lev.clamp( 1, tjs_max_character_level - 1 );
    const level_high = (lev + 1).clamp( 2, tjs_max_character_level );
    const exp_diff = this.GetExpForLevel( level_high ) - this.GetExpForLevel( level_low );

    return ( this.enemy().exp * 0.01000 * exp_diff / tjs_monsters_per_exp_level );
};
Game_Enemy.prototype.gold = function() {
    const lev = $gameSystem.average_actor_level.clamp( $gameSystem.min_enemy_level, $gameSystem.max_enemy_level );
    const level_base = lev.clamp( 1, tjs_max_character_level ) / tjs_max_character_level;
    const level = level_base * tjs_max_item_levels;
    const gold_base = this.enemy().gold * 0.01 * tjs_enemy_gold_multiplier;
    const gold = TJS_auto.CalcLevelByChapterPrice( gold_base, level );

    return gold;
};
Game_Enemy.prototype.itemObject = function(kind, dataId) { // Blagg
    if (kind === 1) {
        const item = $dataItems[dataId];
        if ( item.has_levels == true ) {
            const item_level = Math.round( TJS_auto.Lerp( 1, tjs_max_item_levels, ((this.level - 1) / (tjs_max_monster_level - 1)).clamp( 0.00000, 1.00000 ) ) );

            return $dataItems[dataId + item_level - 1];
        }

        if ( item.level_count < 2 ) {
            return item;
        }

        const item_level = Math.round(TJS_auto.LerpSkew( 1.00000, item.level_count, Math.random(), -0.72500 ));

        return $dataItems[dataId + item_level - 1];
    } else if (kind === 2) {
        const item = $dataWeapons[dataId];
        if ( item.has_levels == false )
            return item;

        const item_level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ((this.level - 1) / (tjs_max_monster_level - 1)).clamp( 0.00000, 1.00000 ) ));

        return $dataWeapons[dataId + item_level - 1];
    } else if (kind === 3) {
        const item = $dataArmors[dataId];
        if ( item.has_levels == false )
            return item;

        const item_level = Math.round(TJS_auto.Lerp( 1, tjs_max_item_levels, ((this.level - 1) / (tjs_max_monster_level - 1)).clamp( 0.00000, 1.00000 ) ));

        return $dataArmors[dataId + item_level - 1];
    } else {
        return null;
    }
};

///-----------------------------------------------------------------------------
/// Window_ShopBuy
///
/// The window for selecting an item to buy on the shop screen.
Window_ShopBuy.prototype.price = function(item) {
    return this._price[this._data.indexOf(item)] || 0;
};
Window_ShopBuy.prototype.makeItemList = function() {
    this._data = [];
    this._price = [];
    for (const goods of this._shopGoods) {
        const item = this.goodsToItem(goods);
        if (item) {
            this._data.push(item);
            this._price.push(goods[2] === 0 ? this.GetPrice(item) : goods[3]);
        }
    }
};
Window_ShopBuy.prototype.GetPrice = function(item) {
    var price = item.price;

    if ( item.food_price )
        price = TJS_auto.CalcFoodPrice( item.food_price );
    else if ( item.leveled_by_chapter_price == true )
        price = TJS_auto.CalcLevelByChapterPrice( price, item.level );

    return Math.ceil(price);
};
Window_ShopBuy.prototype.drawItem = function(index) {
    const item = this.itemAt(index);
    const price = this.price(item);
    const rect = this.itemLineRect(index);
    const priceWidth = this.priceWidth();
    const priceX = rect.x + rect.width - priceWidth;
    const nameWidth = rect.width - priceWidth;
    this.changePaintOpacity(this.isEnabled(item));
    this.drawItemName(item, rect.x, rect.y, nameWidth);
    this.drawText(price.toLocaleString(), priceX, rect.y, priceWidth, "right");
    this.changePaintOpacity(true);
};
Window_ShopBuy.prototype.priceWidth = function() {
    return this.CharWidth() * 18;
};

///-----------------------------------------------------------------------------
/// Window_ShopSell
///
/// The window for selecting an item to sell on the shop screen.
Window_ShopSell.prototype.isEnabled = function(item) {
    return item && item.price > 0;
};

///-----------------------------------------------------------------------------
/// Scene_Shop
///
/// The scene class of the shop screen.
Scene_Shop.prototype.sellingPrice = function() {
    var price = this._item.price;

    if ( this._item.food_price )
        price = TJS_auto.CalcFoodPrice( this._item.food_price );
    else if ( this._item.leveled_by_chapter_price == true )
        price = TJS_auto.CalcLevelByChapterPrice( price, this._item.level );

    return Math.ceil( price / tjs_item_selling_divisor );
};

///-----------------------------------------------------------------------------
/// Game_Action
///
/// The game object class for a battle action.
Game_Action.prototype.initialize = function(subject, forcing) {
    this._partyMember = -1;
    this._enemyId = -1;

    this._subjectActorId = 0;
    this._subjectEnemyIndex = -1;
    this._forcing = forcing || false;
    this.setSubject(subject);
    this.clear();
};
Game_Action.prototype.clear = function() {
    this._item = new Game_Item();
    this._targetIndex = -1;
};
Game_Action.prototype.setSubject = function(subject) {
    if (subject.isActor()) {
        this._subjectActorId = subject.actorId();
        this._subjectEnemyIndex = -1;
    } else {
        this._subjectEnemyIndex = subject.index();
        this._subjectActorId = 0;
    }

    this._partyMember = -1;
    this._enemyId = -1;

    if (subject.isActor()) {
        for (let i = 0; i < $gameParty.members().length; i++) {
            if ( this._subjectActorId == $gameParty.members()[i].actorId() ) this._partyMember = i;
        }
    } else {
        this._enemyId = subject.enemyId();
    }
};
Game_Action.prototype.setSkill = function(skillId) {
    this._item.setObject($dataSkills[skillId]);

    if ( this._enemyId > -1 )
        this.subject().SetActiveSkillIndexFromSkillId( skillId );
};
Game_Action.prototype.setItem = function(itemId) {
    this._item.setObject($dataItems[itemId]);
};
Game_Action.prototype.SetFreeAttack = function() {
    this.setSkill( this.subject().GetFreeAttackSkillId() );
};
Game_Action.prototype.lukEffectRate = function(target) {
    return 1.0 + (( (this.subject().luk - target.luk) / (1 + this.subject().luk + target.luk) ).Distortion() * 0.625);
};
Game_Action.prototype.itemCnt = function(target) {
    if ( this.isPhysical() && target.canMove() ) {
        if ( this.item().ranged )
            return 0;

        return target.cnt;
    } else {
        return 0;
    }
};
Game_Action.prototype.isValid = function() {
    if ( this._forcing && this.item() ) return true;

    if ( this.subject().canUse(this.item()) != true ) return false;

    if ( this.subject().isActor() == true ) {
        if ( this._item.isSkill() ) {
            if ( this.subject().skills().includes( this.item() ) == false ) return false;
        }
    }

    return true;
};
Game_Action.prototype.IsNotBroken = function() {
    if ( this._forcing && this.item() ) return true;

    if ( this.subject().isActor() == true ) {
        if ( this._item.isSkill() ) {
            if ( this.subject().skills().includes( this.item() ) == false ) return false;
        }
    }

    return true;
};
Game_Action.prototype.evalDamageFormula = function(target) {
    try {
        const item = this.item();
        const a = this.subject(); // eslint-disable-line no-unused-vars
        const b = target; // eslint-disable-line no-unused-vars
        const v = $gameVariables._data; // eslint-disable-line no-unused-vars
        const sign = [3, 4].includes(item.damage.type) ? -1 : 1;
        const tjs = TJS_auto;

        if ( this._partyMember > -1 ) {
            if ( this._item.isSkill() ) {
                a.SetActiveSkill( item.id );
            } else {
                a.SetActiveSkill( 0 );
            }
        }
        if ( this._enemyId > -1 ) {
            if ( this._item.isSkill() ) {
                a.SetActiveSkillIndexFromSkillId( item.id );
            }
            else {
                a.SetActiveSkillIndexFromSkillId( -1 );
            }
        }

        const damage_adjust = (tjs.IsEven(item.damage.type) == true) ? 1.00000 : tjs_master_damage_adjust;

        const value = Math.max(eval(item.damage.formula), 0) * sign * damage_adjust;
        return isNaN(value) ? 0 : value;
    } catch (e) {
        return 0;
    }
};
Game_Action.prototype.apply = function(target) {
    if ( this.IsNotBroken() == false ) {
        this.updateLastTarget(target);

        return;
    }

    if ( target.isActor() ) {
        for (let i = 0; i < $gameParty.battleMembers().length; i++) {
            if ( target.actorId() == $gameParty.battleMembers()[i].actorId() ) TJS_auto._currentTargetedActor = i;
        }
    } else if ( this._partyMember > -1 ) {
        TJS_auto._currentTargetedActor = this._partyMember;
    } else {
        TJS_auto._currentTargetedActor = 9999;
    }

    const result = target.result();
    this.subject().clearResult();
    result.clear();
    result.used = this.testApply(target);
    result.missed = result.used && Math.random() >= this.itemHit(target);
    // result.evaded = !result.missed && Math.random() < this.itemEva(target);
    result.physical = this.isPhysical();
    result.drain = this.isDrain();

    if (result.isHit()) {
        if ( this._partyMember > -1 ) {
            if ( TJS_auto.CheckWeaponBreakForThing(this._item, this._partyMember) == true ) {
                this.updateLastTarget(target);
                return;
            }
        }

        if (this.item().damage.type > 0) {
            result.critical = Math.random() < this.itemCri(target);
            const value = this.makeDamageValue(target, result.critical);
            this.executeDamage(target, value);
        }

        if ( this._partyMember > -1 ) {
            if ( this._item.isSkill() )
                TJS_auto.SetStateScalingFactor( this.subject().GetLevelOfSkill( this.item() ), this.subject() );
            else
                TJS_auto.SetStateScalingFactor( this.item().level, this.subject() );
        }
        else if ( this._enemyId > -1 ) {
            TJS_auto.SetStateScalingFactor( this.subject().GetLevelValueForSkillIndex(), this.subject() );
        }

        for (const effect of this.item().effects) {
            this.applyItemEffect(target, effect);
        }

        this.ApplyCustomEffects( target );

        TJS_auto.ResetStateScalingFactor();

        this.applyItemUserEffect(target);
    }

    this.updateLastTarget(target);
};
Game_Action.prototype.executeHpDamage = function(target, value) {
    if (this.isDrain()) {
        value = Math.min(target.hp, value);
    }
    this.makeSuccess(target);

    target.gainHp(-value);

    if (value > 0) {
        target.onDamage(value);
    }
    this.gainDrainedHp(value);
};
Game_Action.prototype.executeMpDamage = function(target, value) {
    if (!this.isMpRecover()) {
        value = Math.min(target.mp, value);
    }
    if (value !== 0) {
        this.makeSuccess(target);
    }

    target.gainMp(-value);

    this.gainDrainedMp(value);
};
Game_Action.prototype.ApplyCustomEffects = function(target) {
    const item = this.item();
    if ( !item ) return;
    if ( !item.custom_effects ) return;
    const fx = item.custom_effects;
    var effect_level = 1.00000;

    if ( this._item.isSkill() ) {
        if ( this._partyMember > -1 )
            effect_level = this.subject().GetLevelOfSkill( this.item() ) / tjs_max_item_levels;
        else if ( this._enemyId > -1 )
            effect_level = TJS_auto.Lerp( 0.05000, 1.00000, this.subject().GetLevelValueForSkillIndex() );
    }

    if ( fx.apply_buff_magic_focus > 0 ) {
        this.SetBuffLevel();

        target.addBuff( 8, fx.apply_buff_magic_focus );
        this.makeSuccess(target);
    }
    if ( fx.apply_debuff_magic_focus > 0 ) {
        this.SetBuffLevel();

        let chance = target.debuffRate( 8 ) * this.lukEffectRate( target );
        if (Math.random() < chance) {
            target.addDebuff( 8, fx.apply_debuff_magic_focus );
            this.makeSuccess( target );
        }
    }
    if ( fx.remove_buff_magic_focus == true ) {
        if ( target.isBuffAffected( 8 ) ) {
            target.removeBuff( 8 );
            this.makeSuccess( target );
        }
    }
    if ( fx.remove_debuff_magic_focus == true ) {
        if ( target.isDebuffAffected( 8 ) ) {
            target.removeBuff( 8 );
            this.makeSuccess( target );
        }
    }
    if ( fx.alter_tactical_points != 0 ) {
        const tp_change = Math.round(fx.alter_tactical_points * effect_level);

        target.gainTp( tp_change );

        const result = target.result();
        result.tpDamage += tp_change;

        this.makeSuccess(target);
    }
    if ( fx.alter_magic_focus != 0 ) {
        target.IncreaseMagicFocusMod( fx.alter_magic_focus * effect_level );

        this.makeSuccess(target);
    }
};
Game_Action.prototype.hasItemAnyValidEffects = function(target) {
    const fx = this.item().custom_effects;
    var effect_level = 1.00000;

    if ( this._item.isSkill() ) {
        if ( this._partyMember > -1 )
            effect_level = this.subject().GetLevelOfSkill( this.item() ) / tjs_max_item_levels;
        else if ( this._enemyId > -1 )
            effect_level = TJS_auto.Lerp( 0.05000, 1.00000, this.subject().GetLevelValueForSkillIndex() );
    }

    if ( fx.alter_tactical_points != 0 ) {
        const tp = target.tactical_points;
        const max_tp = target.max_tactical_points;
        const tp_diff = (tp + (fx.alter_tactical_points * effect_level)).clamp( 0, max_tp );

        if ( tp != tp_diff ) return true;
    }
    if ( fx.alter_magic_focus != 0 ) {
        const mf = target.magic_focus;
        const mf_diff = (mf + (fx.alter_magic_focus * effect_level)).clamp( 1, 5000 );

        if ( mf != mf_diff ) return true;
    }

    return this.item().effects.some(effect =>
        this.testItemEffect(target, effect)
    );
};
Game_Action.prototype.makeDamageValue = function(target, critical) {
    const item = this.item();
    const baseValue = this.evalDamageFormula(target);
    let value = baseValue * this.calcElementRate(target);

    if ( item.half_physical > 0 ) {
        value *= 0.50000 * item.half_physical;
        value += 0.50000 * baseValue * target.elementRate(1);
    }

    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    if (critical) {
        value = this.applyCritical(value);
    }

    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};
Game_Action.prototype.SetBuffLevel = function() {
    TJS_auto.SetItemLevel( 0.50000 );

    if ( this._partyMember > -1 ) {
        if ( this._item.isSkill() ) {
            TJS_auto.SetItemLevel( this.subject().GetLevelValueForSkill(this.item().id) );
        } else {
            TJS_auto.SetItemLevel( this.item().level - 1.00000 / tjs_max_item_levels - 1.00000 );
        }
    }
    if ( this._enemyId > -1 ) {
        if ( this._item.isSkill() ) {
            this.subject().SetActiveSkillIndexFromSkillId( this.item().id );
            TJS_auto.SetItemLevel( this.subject().GetLevelValueForSkillIndex() );
        }
        else {
            TJS_auto.SetItemLevel( this.item().level - 1.00000 / tjs_max_item_levels - 1.00000 );
        }
    }
};
Game_Action.prototype.itemEffectAddBuff = function(target, effect) {
    this.SetBuffLevel();

    target.addBuff(effect.dataId, effect.value1);
    this.makeSuccess(target);
};
Game_Action.prototype.itemEffectAddDebuff = function(target, effect) {
    this.SetBuffLevel();

    let chance = target.debuffRate(effect.dataId) * this.lukEffectRate(target);
    if (Math.random() < chance) {
        target.addDebuff(effect.dataId, effect.value1);
        this.makeSuccess(target);
    }
};
Game_Action.prototype.itemCri = function(target) {
    var chance = 0;
    if ( !this.item().damage.critical ) return chance;
    if ( this.item().damage.critical == false ) return chance;

    if ( this.isPhysical() ) {
        chance = this.subject().physical_critical_hit_rate * (1 - target.physical_critical_evade_rate);
    }
    else if ( this.isMagical() ) {
        chance = this.subject().magical_critical_hit_rate * (1 - target.magical_critical_evade_rate);
    }
    else {
        const chance_p = this.subject().physical_critical_hit_rate * (1 - target.physical_critical_evade_rate);
        const chance_m = this.subject().magical_critical_hit_rate * (1 - target.magical_critical_evade_rate);
        chance = (chance_p + chance_m) * 0.5;
    }

    return chance;
};
Game_Action.prototype.itemHit = function(target) { // Blenn
    const item = this.item();

    if ( this.isCertainHit() ) return item.successRate * 0.01;

    const subject_aim = this.isPhysical() ? this.subject().agi : this.subject().magic_focus;
    const subject_to_hit = this.isPhysical() ? this.subject().hit_rate_physical : this.subject().hit_rate_magical;
    const target_evasion = this.isPhysical() ? target.eva : target.mev;
    const evasion_factor = Math.pow( 1.00000 + target_evasion.Distortion(), 3.25000 );

    const hit_bonus_base = ((subject_to_hit + item.aim_adjust) * 0.3625).Distortion();
    const hit_bonus = Math.pow( 1.00000 + hit_bonus_base, 2.50000 );

    const agility_modifier_scaling = 0.1 * ((subject_aim * hit_bonus) + (target.agi * evasion_factor) + 10.00000);
    const agility_modifier_base = ((subject_aim * hit_bonus) - (target.agi * evasion_factor)) / agility_modifier_scaling;
    const agility_modifier = (agility_modifier_base).Distortion() * 0.4;

    /*
    console.log(
        {
            _000_subject: this.subject().name(),
            _001_subject_aim: String(subject_aim) + ": this.isPhysical() ? this.subject().agi : this.subject().magic_focus",
            _002_subject_to_hit: String(subject_to_hit) + ": this.isPhysical() ? this.subject().hit_rate_physical : this.subject().hit_rate_magical",
            _010_target: target.name(),
            _011_target_agility: target.agi,
            _100_item: item,
            _200_aim_adjust: String(item.aim_adjust) + ": item.aim_adjust",
            _205_target_evasion: String(target_evasion) + ": this.isPhysical() ? target.eva : target.mev",
            _208_evasion_factor: String(evasion_factor) + ": Math.pow( 1.00000 + target_evasion.Distortion(), 3.25000 )",
            _210_hit_bonus_base: String(hit_bonus_base) + ": ((subject_to_hit + item.aim_adjust) * 0.3625).Distortion()",
            _215_hit_bonus: String(hit_bonus) + ": Math.pow( 1.00000 + hit_bonus_base, 2.50000 )",
            _220_agility_modifier_scaling: String(agility_modifier_scaling) + ": 0.1 * ((subject_aim * hit_bonus) + (target.agi * evasion_factor) + 10.00000)",
            _225_agility_modifier_base: String(agility_modifier_base) + ": ((subject_aim * hit_bonus) - (target.agi * evasion_factor)) / agility_modifier_scaling",
            _226_agility_modifier_distortion: String(agility_modifier_base.Distortion()) + ": agility_modifier_base.Distortion()",
            _230_agility_modifier: String(agility_modifier) + ": agility_modifier_base.Distortion() * 0.4",
            _900_final: "return (item.successRate * 0.01 * 0.6) + agility_modifier",
            _905_final_reduced: "return " + String( (item.successRate * 0.01 * 0.6) + agility_modifier )
        }
    );
    */

    return (item.successRate * 0.01 * 0.6) + agility_modifier;
};
Game_Action.prototype.itemEffectRecoverHp = function(target, effect) {
    let value = (target.mhp * effect.value1) + effect.value2;

    if ( value > 0 ) {
        if ( this.isItem() )
            value *= target.pha;
        else
            value *= target.rec;
    }
    value = Math.round( value * tjs_master_damage_adjust );

    if (value !== 0) {
        target.gainHp( value );
        this.makeSuccess( target );
    }
};
Game_Action.prototype.itemEffectRecoverMp = function(target, effect) {
    let value = (target.mmp * effect.value1) + effect.value2;

    if ( value > 0 ) {
        if ( this.isItem() )
            value *= target.pha;
        else
            value *= target.rec;
    }
    value = Math.round( value );

    if (value !== 0) {
        target.gainMp( value );
        this.makeSuccess( target );
    }
};

///-----------------------------------------------------------------------------
/// Window_ActorCommand
///
/// The window for selecting an actor's action on the battle screen.
Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addSkillCommands();
        this.addItemCommand();
    }
};

///-----------------------------------------------------------------------------
/// Window_Base
///
/// The superclass of all windows within the game.
/**
 * Gets the vertical size of a single text character in a line of text on the screen, using the default font and default font size, in pixels if the display is at the default size of 1920 x 1080 pixels.
 * Note that this isn't the height of a font charcter, but instead how tall a line of characters of the font display on the screen, including any vertical spacing above and below the characters.
 * The default font is from the file mplus-1m-regular.woff.
 * The current font size for this game is 19.
 *
 * @returns {Number} The vertical height, in pixels.
*/
Window_Base.prototype.lineHeightB = function() {
    return 20; // 36 * 0.5690125
};
/**
 * Gets the horizontal size of a single text character, using the default font and default font size, in pixels if the display is at the default size of 1920 x 1080 pixels.
 * Note:  This isn't the width of the font character as it is in the font, but how much horizontal space it takes up on-screen, including spacing between characters.
 * Note:  The font for this game is a monospace font.
 * Note:  The returned value assumed that the text being displayed on-screen isn't being horizontally compressed.
 * The default font is from the file mplus-1m-regular.woff.
 * The current font size for this game is 19.
 *
 * @returns {Number} The width of any character of the font on-screen.
*/
Window_Base.prototype.CharWidth = function() {
    return 9.5;
};
/**
 * Gets the horizontal width, in pixels, of text displayed on the screen, for the name of an item, skill, armor, key item, but not a state.  This assumes a display resolution of 1920 x 1080 pixels.
 * Note:  This assumes that the text being displayed isn't being horizontally compressed.
 *
 * @returns {Number} The width, in pixels, of the skill or item's name.
*/
Window_Base.prototype.ItemNameWidth = function() {
    return this.CharWidth() * 36;
};
/**
 * Gets the horizontal width, in pixels, of text displayed on the screen, for the name of a state.  This assumes a display resolution of 1920 x 1080 pixels.
 * Note:  This assumes that the text being displayed isn't being horizontally compressed.
 *
 * @returns {Number} The width, in pixels, of the state's name.
*/
Window_Base.prototype.StateNameWidth = function() {
    return this.CharWidth() * 25; // 237.5
};
/**
 * Gets the horizontal width, in pixels, of text displayed on the screen, for the name of an actor's equipment slot, typically before the icon is displayed right afterwards.  This assumes a display resolution of 1920 x 1080 pixels.
 * Note:  This assumes that the text being displayed isn't being horizontally compressed.
 *
 * @returns {Number} The width, in pixels, of the equipment slot's name.
*/
Window_Base.prototype.SlotNameWidth = function() {
    return this.CharWidth() * 14; // this.CharWidth() * 14
};
Window_Base.prototype.itemPadding = function() {
    return 5;
};
/**
 * Updated function that displays in-game player's currency and the currency unit, as text on the screen.
 * This function is updated in that it uses Javascript toLocaleString() to separate digits by commas into groups of three as needed.
 *
 * @param {Number} value - The amount of currency to display.
 * @param {String} unit - The String for the type of currency, such as a dollar sign, or the deutsche mark, or some fiction-fantasy symbol made up for the game, etc.
 * @param {Number} x - The x coordinate of where to display the text on-screen.
 * @param {Number} y - The y coordinate of where to display the text on-screen.
 * @param {Number} width - The maximum width, in pixels, of the currency and currency unit combined, to display on-screen.
*/
Window_Base.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
    const unitWidth = Math.min(96, this.textWidth(unit));

    // Draw currecy amount.
    this.resetTextColor();
    this.drawText( value.toLocaleString(), x, y, width - unitWidth, "right" );

    // Draw currency unit.
    this.changeTextColor(ColorManager.hpGaugeColor1());
    this.drawText( unit, x + width - unitWidth, y, unitWidth, "right" );
};

///-----------------------------------------------------------------------------
/// Scene_Base
///
/// The superclass of all scenes within the game.
Scene_Base.prototype.GetEquipStatsWindowWidth = function() { // GetEquipWindowWidth
    return 1380; // 1388
};
Scene_Base.prototype.lineHeightB = function() { // GetEquipWindowWidth
    return 20;
};

///-----------------------------------------------------------------------------
/// Window_MenuStatus
///
/// The window for displaying party member status on the menu screen.
Window_MenuStatus.prototype.numVisibleRows = function() {
    return 6;
};
Window_MenuStatus.prototype.maxCols = function() {
    return 2;
};
Window_MenuStatus.prototype.drawItemStatus = function(index) {
    const actor = this.actor(index);
    const rect = this.itemRect(index);
    const x = rect.x + 150;
    this.drawActorSimpleStatusX(actor, x, rect.y);
};
Window_MenuStatus.prototype.drawItem = function(index) {
    const rect = this.itemRect(index);
    const actor_number = index + 1;

    this.drawPendingItemBackground(index);
    this.drawText( actor_number, rect.x, rect.y, 30 );
    this.drawItemImage(index);
    this.drawItemStatus(index);
    this.DrawActiveStates(index);
};
Window_MenuStatus.prototype.DrawActiveStates = function(index) {
    const actor = this.actor(index);
    const rect = this.itemRect(index);
    const x = rect.x + 530;
    const y = rect.y; // + Math.floor(rect.height / 2 - this.lineHeight() * 1.5);
    const maxNumberItems = Math.floor( rect.height / (this.lineHeightB()) );
    this.DrawListOfStatesText(actor, x, y, maxNumberItems);
};

///-----------------------------------------------------------------------------
/// Window_MenuActor
///
/// The window for selecting a target actor on the item and skill screens.
Window_MenuActor.prototype.maxCols = function() {
    return 1;
};

///-----------------------------------------------------------------------------
/// Window_MapName
///
/// The window for displaying the map name on the map screen.
Window_MapName.prototype.open = function() {
    this.refresh();
    this._showCount = 480;
};

///-----------------------------------------------------------------------------
/// Window_BattleStatus
///
/// The window for displaying the status of party members on the battle screen.
Window_BattleStatus.prototype.initialize = function(rect) {
    Window_StatusBase.prototype.initialize.call(this, rect);

    this._activeActorId = -1;

    this.frameVisible = false;
    this.openness = 0;
    this._bitmapsReady = 0;
    this.preparePartyRefresh();
};
Window_BattleStatus.prototype.drawItem = function(index) {
    this._activeActorId = $gameParty.members()[index].actorId;

    this.drawItemImage(index);
    this.drawItemStatus(index);
};
Window_BattleStatus.prototype.extraHeight = function() {
    return 12;
};
Window_BattleStatus.prototype.maxCols = function() {
    return 8;
};
Window_BattleStatus.prototype.updatePadding = function() {
    this.padding = 1;
};
Window_BattleStatus.prototype.basicGaugesY = function(rect) {
    const bottom = rect.y + rect.height - 2;
    const numGauges = $dataSystem.optDisplayTp ? 3 : 2;
    return bottom - this.gaugeLineHeight() * numGauges;
};
Window_BattleStatus.prototype.nameY = function(rect) {
    return rect.y;
};
Window_BattleStatus.prototype.faceRect = function(index) {
    const rect = this.itemRect(index);
    rect.pad(1);
    rect.height = 144;

    return rect;
};
Window_BattleStatus.prototype.drawItemImage = function(index) {
    const actor = this.actor(index);
    const rect = this.faceRect(index);
    this.drawActorFace(actor, rect.x, rect.y, rect.width, rect.height);
};
Window_BattleStatus.prototype.update = function() {
    if ( TJS_auto._currentTargetedActor > -1 ) {
        for (let i = 0; i < $gameParty.battleMembers().length; i++) this.deselect(i);

        this.select( TJS_auto._currentTargetedActor );

        if ( TJS_auto._currentTargetedActor > 999 ) TJS_auto._currentTargetedActor = -1;

        if ( TJS_auto._currentTargetedActor > -1 ) {
            const actor_height = this.itemRect( 0 ).height * Math.floor( TJS_auto._currentTargetedActor * 0.1251 );
            this.smoothScrollTo( 0, actor_height );
        }
    }

    Window_StatusBase.prototype.update.call(this);
    if ($gameTemp.isBattleRefreshRequested()) {
        this.preparePartyRefresh();
    }
};
Window_BattleStatus.prototype.updateArrows = function() {
    this.downArrowVisible = false;
    this.upArrowVisible = false;
};

///-----------------------------------------------------------------------------
/// Window_BattleActor
///
/// The window for selecting a target actor on the battle screen.
Window_BattleActor.prototype.updateArrows = function() {
    this.downArrowVisible = this._scrollY < this.maxScrollY();
    this.upArrowVisible = this._scrollY > 0;
};

///-----------------------------------------------------------------------------
/// Scene_Battle
///
/// The scene class of the battle screen.
Scene_Battle.prototype.logWindowRect = function() {
    const wx = 0;
    const wy = 0;
    const ww = Graphics.boxWidth;
    const wh = 510;
    return new Rectangle(wx, wy, ww, wh);
};
Scene_Battle.prototype.createStatusWindow = function() {
    const rect = this.statusWindowRect();
    const statusWindow = new Window_BattleStatus(rect);
    this.addWindow(statusWindow);
    this._statusWindow = statusWindow;

    BattleManager._actor_window = statusWindow;
};

///-----------------------------------------------------------------------------
/// Sprite_Battleback
///
/// The sprite for displaying a background image in battle.
Sprite_Battleback.prototype.overworldBattleback1Name = function() {
    if ( $gamePlayer.isInAirship() ) return "cst sky";

    if ($gamePlayer.isInNonLandVehicle()) {
        return "cst ocean";
    } else {
        return this.normalBattleback1Name();
    }
};
Sprite_Battleback.prototype.overworldBattleback2Name = function() {
    if ( $gamePlayer.isInAirship() ) return "cst sky";

    if ($gamePlayer.isInNonLandVehicle()) {
        return "cst ocean";
    } else {
        return this.normalBattleback2Name();
    }
};
Sprite_Battleback.prototype.terrainBattleback1Name = function(type) {
    if ( $gamePlayer.isInAirship() ) return "cst sky";

    switch (type) {
        case 24:
        case 25:
            return "Wasteland";
        case 26:
        case 27:
            return "DirtField";
        case 32:
        case 33:
            return "Desert";
        case 34:
            return "Lava1";
        case 35:
            return "Lava2";
        case 40:
        case 41:
            return "Snowfield";
        case 42:
            return "Clouds";
        case 4:
        case 5:
            return "PoisonSwamp";
        default:
            return null;
    }
};
Sprite_Battleback.prototype.terrainBattleback2Name = function(type) {
    if ( $gamePlayer.isInAirship() ) return "cst sky";

    switch (type) {
        case 20:
        case 21:
            return "Forest";
        case 22:
        case 30:
        case 38:
            return "Cliff";
        case 24:
        case 25:
        case 26:
        case 27:
            return "Wasteland";
        case 32:
        case 33:
            return "Desert";
        case 34:
        case 35:
            return "Lava";
        case 40:
        case 41:
            return "Snowfield";
        case 42:
            return "Clouds";
        case 4:
        case 5:
            return "PoisonSwamp";
        case 36:
            return "cst_PalmTrees";
    }
};

///-----------------------------------------------------------------------------
/// Sprite_Gauge
///
/// The sprite for displaying a status gauge.
Sprite_Gauge.prototype.bitmapWidth = function() {
    return 200; // 192
};
Sprite_Gauge.prototype.bitmapHeight = function() {
    return 32;
};
Sprite_Gauge.prototype.textHeight = function() {
    return 24;
};
Sprite_Gauge.prototype.gaugeHeight = function() {
    return 10; // 12
};
Sprite_Gauge.prototype.valueFontSize = function() {
    return $gameSystem.mainFontSize() + 2; // - 6
};
Sprite_Gauge.prototype.drawValue = function() {
    const currentValue = Math.floor( this.currentValue() + 0.0002 ).toLocaleString();
    const currentMaxValue = Math.floor( this.currentMaxValue() + 0.0002 ).toLocaleString();
    const width = this.bitmapWidth() - 1;
    const height = this.textHeight();
    this.bitmap.fontSize = this.valueFontSize();
    this.bitmap.textColor = TJS_auto.CustomHpColor( this.currentValue(), this.currentMaxValue() );
    this.bitmap.drawText("   " + currentValue + " / " + currentMaxValue, 0, 0, width, height, "right");
};

///-----------------------------------------------------------------------------
/// Window_EquipStatus
///
/// The window for displaying parameter changes on the equipment screen.
Window_EquipStatus.prototype.initialize = function(rect) {
    Window_StatusBase.prototype.initialize.call(this, rect);
    this._actor = null;
    this._tempActor = null;
    this.refresh();
};
Window_EquipStatus.prototype.itemPadding = function() {
    return 5;
};
Window_EquipStatus.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};
Window_EquipStatus.prototype.colSpacing = function() {
    return 0;
};
Window_EquipStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        const nameRect = this.itemLineRect(0);
        this.drawActorName(this._actor, nameRect.x, 0, nameRect.width);
        this.drawAllParams();
    }
};
Window_EquipStatus.prototype.setTempActor = function(tempActor) {
    if (this._tempActor !== tempActor) {
        this._tempActor = tempActor;
        this.refresh();
    }
};
Window_EquipStatus.prototype.drawAllParams = function() {
    this.drawItem(this.itemPadding(), this.paramY(0), 0);
    this.drawItem(this.itemPadding(), this.paramY(1), 1);
    this.drawItemCustom(this.itemPadding(), this.paramY(2), 0);
    this.drawItem(this.itemPadding(), this.paramY(3), 2);
    this.drawItem(this.itemPadding(), this.paramY(4), 3);
    this.drawItem(this.itemPadding(), this.paramY(5), 4);
    this.drawItem(this.itemPadding(), this.paramY(6), 5);
    this.drawItem(this.itemPadding(), this.paramY(7), 6);
    this.drawItem(this.itemPadding(), this.paramY(8), 8);
    this.drawItem(this.itemPadding(), this.paramY(9), 7);

    this.drawItemCustom(this.itemPadding(), this.paramY(11), 1);
    this.drawItemCustom(this.itemPadding(), this.paramY(12), 2);

    this.drawItemX(this.itemPadding(), this.paramY(13), 6);
    this.drawItemX(this.itemPadding(), this.paramY(14), 1);
    this.drawItemX(this.itemPadding(), this.paramY(15), 4);
    this.drawItemX(this.itemPadding(), this.paramY(16), 5);
    this.drawItemX(this.itemPadding(), this.paramY(17), 12);
    this.drawItemX(this.itemPadding(), this.paramY(18), 13);
    this.drawItemX(this.itemPadding(), this.paramY(19), 14);
    this.drawItemX(this.itemPadding(), this.paramY(20), 15);

    this.drawItemS(this.itemPadding(), this.paramY(22), 0);
    this.drawItemS(this.itemPadding(), this.paramY(23), 1);
    this.drawItemS(this.itemPadding(), this.paramY(24), 2);
    this.drawItemS(this.itemPadding(), this.paramY(25), 3);
    this.drawItemS(this.itemPadding(), this.paramY(26), 4);
    this.drawItemS(this.itemPadding(), this.paramY(27), 5);
    this.drawItemS(this.itemPadding(), this.paramY(28), 6);
    this.drawItemS(this.itemPadding(), this.paramY(29), 7);
    this.drawItemS(this.itemPadding(), this.paramY(30), 9);

    this.DrawListOfElementRatesDiff( this.itemPadding(), this.paramY(32) );

    if ( this._actor ) this.DrawListOfStatesImmuneTo( this._actor, this.CharWidth() * 38, this.lineHeightB() * 0, 18 ); // this._actor, 408, this.lineHeightB() * 1, 16
    if ( this._actor ) this.DrawListOfStatesResistantTo( this._actor, this.CharWidth() * 38, this.lineHeightB() * 19, 25 ); // this._actor, 408, this.lineHeightB() * 19, 23
    this.drawRightArrow( this.CharWidth() * 71, this.lineHeightB() * 0 ); // 720, this.lineHeightB() * 1
    this.drawRightArrow( this.CharWidth() * 71, this.lineHeightB() * 19 ); // 720, this.lineHeightB() * 19
    this.DrawListOfStatesImmuneToCompare( this._tempActor, this.CharWidth() * 74, this.lineHeightB() * 0, 18, this._actor ); // this._tempActor, 750, this.lineHeightB() * 1, 16
    this.DrawListOfStatesResistantToCompare( this._actor, this.CharWidth() * 74, this.lineHeightB() * 19, 25, this._tempActor ); // this._actor, 750, this.lineHeightB() * 19, 23, this._tempActor

    this.DrawListOfDebuffResistancesCompare( this._actor, this.CharWidth() * 106, 0, this._tempActor );
};
Window_EquipStatus.prototype.DrawListOfDebuffResistancesCompare = function(actor, x, y, other_actor) {
    const width = this.CharWidth() * 26;
    const width2 = width + this.CharWidth() * 10;
    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Resistances to Debuffs:", x, y, width );

    for ( let i = 0; i <= 6; i++ )
        this.drawText( TJS_auto.GetParameterNameFromNumber(i), x, y + (this.lineHeightB() * (i + 1)), width );
    this.drawText( TJS_auto.GetParameterNameFromNumber(8), x, y + (this.lineHeightB() * 8), width );
    this.drawText( TJS_auto.GetParameterNameFromNumber(7), x, y + (this.lineHeightB() * 9), width );

    for ( let i = 0; i < 9; i++ )
        this.drawRightArrow( x + width, this.lineHeightB() * (i + 1) );

    if ( !actor ) return;

    this.resetTextColor();
    for ( let i = 0; i <= 6; i++ ) {
        const v = (Math.round((1.00000 - actor.debuffRate(i)) * 10000.00000) / 100).toLocaleString() + "%";
        this.drawText( v, x, y + (this.lineHeightB() * (i + 1)), width, "right" );
    }
    const v8 = (Math.round((1.00000 - actor.debuffRate(8)) * 10000.00000) / 100).toLocaleString() + "%";
    this.drawText( v8, x, y + (this.lineHeightB() * 8), width, "right" );
    const v7 = (Math.round((1.00000 - actor.debuffRate(7)) * 10000.00000) / 100).toLocaleString() + "%";
    this.drawText( v7, x, y + (this.lineHeightB() * 9), width, "right" );

    if ( !other_actor ) return;

    this.resetTextColor();
    for ( let i = 0; i <= 6; i++ ) {
        const v = (Math.round((1.00000 - other_actor.debuffRate(i)) * 10000.00000) / 100).toLocaleString() + "%";
        this.changeTextColor(ColorManager.paramchangeTextColor( actor.debuffRate(i) - other_actor.debuffRate(i) ));
        this.drawText( v, x, y + (this.lineHeightB() * (i + 1)), width2, "right" );
    }
    const v8c = (Math.round((1.00000 - other_actor.debuffRate(8)) * 10000.00000) / 100).toLocaleString() + "%";
    this.changeTextColor(ColorManager.paramchangeTextColor( actor.debuffRate(8) - other_actor.debuffRate(8) ));
    this.drawText( v8c, x, y + (this.lineHeightB() * 8), width2, "right" );
    const v7c = (Math.round((1.00000 - other_actor.debuffRate(7)) * 10000.00000) / 100).toLocaleString() + "%";
    this.changeTextColor(ColorManager.paramchangeTextColor( actor.debuffRate(7) - other_actor.debuffRate(7) ));
    this.drawText( v7c, x, y + (this.lineHeightB() * 9), width2, "right" );
};
Window_EquipStatus.prototype.DrawListOfElementRatesDiff = function(x, y) {
    const actor = this._actor;
    const actorT = this._tempActor;
    const lineHeight = this.lineHeightB();
    const width = 140;
    const x2 = width + 55;
    const width2 = 50;
    const count = $dataSystem.elements.length;

    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Effects of damage types:", x, y, x2 + width2 );
    this.resetTextColor();

    for (let i = 1; i < count; i++) {
        const y2 = y + (lineHeight * i);

        this.changeTextColor(ColorManager.systemColor());
        this.drawText( $dataSystem.elements[i], x, y2, width );
        this.resetTextColor();

        const value = Math.round(Number(actor.elementRate(i)) * 100);
        this.drawText( value + "%", x2, y2, width2, "right" );
        this.resetTextColor();

        this.drawRightArrow(x2 + width2, y2);
        this.resetTextColor();

        if (this._tempActor) {
            const value2 = Math.round(Number(actorT.elementRate(i)) * 100);
            this.changeTextColor(ColorManager.paramchangeTextColor(value-value2));
            this.drawText( value2 + "%", x2 + width2 + 34, y2, width2, "right" );
            this.resetTextColor();
        }
    }
};
Window_EquipStatus.prototype.drawItem = function(x, y, paramId) {
    const paramX = this.paramX();
    const paramWidth = this.paramWidth();
    const rightArrowWidth = this.rightArrowWidth();
    this.drawParamName(x, y, paramId);
    if (this._actor) {
        this.drawCurrentParam(paramX, y, paramId);
    }
    this.drawRightArrow(paramX + paramWidth, y);
    if (this._tempActor) {
        this.drawNewParam(paramX + paramWidth + rightArrowWidth, y, paramId);
    }
};
Window_EquipStatus.prototype.drawItemCustom = function(x, y, cparamId) {
    const paramX = this.paramX();
    const paramWidth = this.paramWidth();
    const rightArrowWidth = this.rightArrowWidth();
    this.drawParamNameCustom(x, y, cparamId);
    if (this._actor) {
        this.drawCurrentParamCustom(paramX, y, cparamId);
    }
    this.drawRightArrow(paramX + paramWidth, y);
    if (this._tempActor) {
        this.drawNewParamCustom(paramX + paramWidth + rightArrowWidth, y, cparamId);
    }
};
Window_EquipStatus.prototype.drawItemX = function(x, y, xparamId) {
    const paramX = this.paramX();
    const paramWidth = this.paramWidth();
    const rightArrowWidth = this.rightArrowWidth();
    this.drawParamNameX(x, y, xparamId);
    if (this._actor) {
        this.drawCurrentParamX(paramX, y, xparamId);
    }
    this.drawRightArrow(paramX + paramWidth, y);
    if (this._tempActor) {
        this.drawNewParamX(paramX + paramWidth + rightArrowWidth, y, xparamId);
    }
};
Window_EquipStatus.prototype.drawItemS = function(x, y, sparamId) {
    const paramX = this.paramX();
    const paramWidth = this.paramWidth();
    const rightArrowWidth = this.rightArrowWidth();
    this.drawParamNameS(x, y, sparamId);
    if (this._actor) {
        this.drawCurrentParamS(paramX, y, sparamId);
    }
    this.drawRightArrow(paramX + paramWidth, y);
    if (this._tempActor) {
        this.drawNewParamS(paramX + paramWidth + rightArrowWidth, y, sparamId);
    }
};
Window_EquipStatus.prototype.drawParamName = function(x, y, paramId) {
    const width = this.paramX() - this.itemPadding() * 2;

    this.changeTextColor(ColorManager.systemColor());
    if ( paramId <= 7 ) this.drawText(TextManager.param(paramId), x, y, width);
    else if ( paramId == TJS_PARAM_MAGIC_FOCUS ) this.drawText("Magic Focus", x, y, width);
    this.resetTextColor();
};
Window_EquipStatus.prototype.drawParamNameCustom = function(x, y, cparamId) {
    const width = this.paramX() - this.itemPadding() * 2;
    this.changeTextColor(ColorManager.systemColor());

    if (cparamId == 0) this.drawText("Max Tactical Points", x, y, width);
    else if (cparamId == 1) this.drawText("Physical Hit Bonus", x, y, width);
    else if (cparamId == 2) this.drawText("Magical Hit Bonus", x, y, width);

    this.resetTextColor();
};
Window_EquipStatus.prototype.drawParamNameX = function(x, y, xparamId) {
    const width = this.paramX() - this.itemPadding() * 2;
    this.changeTextColor(ColorManager.systemColor());
    if (xparamId == 0) {this.drawText("Hit Rate", x, y, width);}
    else if (xparamId == 1) {this.drawText("Physical Evade", x, y, width);}
    else if (xparamId == 2) {this.drawText("Crit. Hit Rate", x, y, width);}
    else if (xparamId == 3) {this.drawText("Critical Evade", x, y, width);}
    else if (xparamId == 4) {this.drawText("Magical Evade", x, y, width);}
    else if (xparamId == 5) {this.drawText("Magic Reflect", x, y, width);}
    else if (xparamId == 6) {this.drawText("Counter Attack", x, y, width);}
    else if (xparamId == 7) {this.drawText("HP Regen.", x, y, width);}
    else if (xparamId == 8) {this.drawText("MP Regen.", x, y, width);}
    else if (xparamId == 9) {this.drawText("TP Regen.", x, y, width);}
    else if ( xparamId == 12 ) this.drawText("Phys. Crit. Hit Rate", x, y, width);
    else if ( xparamId == 13 ) this.drawText("Mag. Crit. Hit Rate", x, y, width);
    else if ( xparamId == 14 ) this.drawText("Phys. Critical Evade", x, y, width);
    else if ( xparamId == 15 ) this.drawText("Mag. Critical Evade", x, y, width);

    this.resetTextColor();
};
Window_EquipStatus.prototype.drawParamNameS = function(x, y, sparamId) {
    const width = this.paramX() - this.itemPadding() * 2;
    this.changeTextColor(ColorManager.systemColor());
    if (sparamId == 0) {this.drawText("Targeted Rate", x, y, width);}
    else if (sparamId == 1) {this.drawText("Guard Effect", x, y, width);}
    else if (sparamId == 2) {this.drawText("Heal Rate, Spells", x, y, width);}
    else if (sparamId == 3) {this.drawText("Heal Rate, Potions", x, y, width);}
    else if (sparamId == 4) {this.drawText("MP Cost Rate", x, y, width);}
    else if (sparamId == 5) {this.drawText("TP Gain Rate", x, y, width);}
    else if (sparamId == 6) {this.drawText("Physical Damage", x, y, width);}
    else if (sparamId == 7) {this.drawText("Magical Damage", x, y, width);}
    else if (sparamId == 8) {this.drawText("Floor Damage", x, y, width);}
    else if (sparamId == 9) {this.drawText("EXP Gain Rate", x, y, width);}

    this.resetTextColor();
};
Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    const paramWidth = this.paramWidth();
    var v = 0;
    if ( paramId <= 7 ) v = Math.round( Math.max(Math.min(this._actor.param(paramId), 9999999), -999999) ).toLocaleString();
    else if ( paramId == TJS_PARAM_MAGIC_FOCUS ) v = Math.round( Math.max(Math.min(this._actor.magic_focus, 9999999), -999999) ).toLocaleString();

    this.resetTextColor();
    this.drawText( v, x, y, paramWidth, "right" );
};
Window_EquipStatus.prototype.drawCurrentParamCustom = function(x, y, cparamId) {
    const paramWidth = this.paramWidth();

    var value = 0;
    if ( cparamId == TJS_CUSTOM_PARAM_MAX_TACTICAL_POINTS ) var value = this._actor.maxTp();
    else if ( cparamId == TJS_CUSTOM_PARAM_PHYSICAL_HIT_BONUS ) var value = this._actor.hit_rate_physical * 100.00000;
    else if ( cparamId == TJS_CUSTOM_PARAM_MAGICAL_HIT_BONUS ) var value = this._actor.hit_rate_magical * 100.00000;

    const v = Math.round( Math.max(Math.min(value, 9999999), -999999) ).toLocaleString();
    this.resetTextColor();
    this.drawText(v, x, y, paramWidth, "right");
};
Window_EquipStatus.prototype.drawCurrentParamX = function(x, y, xparamId) {
    const paramWidth = this.paramWidth();
    const value = this._actor.xparam(xparamId);
    const v = Math.round( Math.max(Math.min(value * 100, 999999), -99999) ).toLocaleString();
    this.resetTextColor();
    this.drawText(v, x, y, paramWidth, "right");
};
Window_EquipStatus.prototype.drawCurrentParamS = function(x, y, sparamId) {
    const paramWidth = this.paramWidth();
    const value = this._actor.sparam(sparamId);
    const v = Math.round( Math.max(Math.min(value * 100, 999999), -99999) ).toLocaleString();
    this.resetTextColor();
    this.drawText(v + "%", x, y, paramWidth, "right");
};
Window_EquipStatus.prototype.drawRightArrow = function(x, y) {
    const rightArrowWidth = this.rightArrowWidth();
    this.changeTextColor(ColorManager.systemColor());
    this.drawText("\u2192", x, y, rightArrowWidth, "center");
};
Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    const paramWidth = this.paramWidth();
    var newValue = 0;
    var diffValue = 0;

    if ( paramId <= 7 ) {
        newValue = this._tempActor.param(paramId);
        diffValue = newValue - this._actor.param(paramId);
    }
    else if ( paramId == TJS_PARAM_MAGIC_FOCUS ) {
        newValue = this._tempActor.magic_focus;
        diffValue = newValue - this._actor.magic_focus;
    }

    const v = Math.round( Math.max(Math.min(newValue, 9999999), -999999) ).toLocaleString();
    this.changeTextColor(ColorManager.paramchangeTextColor(diffValue));
    this.drawText(v, x, y, paramWidth, "right");
};
Window_EquipStatus.prototype.drawNewParamCustom = function(x, y, cparamId) {
    const paramWidth = this.paramWidth();
    var newValue = 0;
    var diffValue = 0;

    if ( cparamId == TJS_CUSTOM_PARAM_MAX_TACTICAL_POINTS ) {
        newValue = this._tempActor.maxTp();
        diffValue = newValue - this._actor.maxTp();
    }
    else if ( cparamId == TJS_CUSTOM_PARAM_PHYSICAL_HIT_BONUS ) {
        newValue = this._tempActor.hit_rate_physical;
        diffValue = newValue - this._actor.hit_rate_physical;
        newValue *= 100.00000;
    }
    else if ( cparamId == TJS_CUSTOM_PARAM_MAGICAL_HIT_BONUS ) {
        newValue = this._tempActor.hit_rate_magical;
        diffValue = newValue - this._actor.hit_rate_magical;
        newValue *= 100.00000;
    }

    const v = Math.round( Math.max(Math.min(newValue, 999999), -99999) ).toLocaleString();
    this.changeTextColor(ColorManager.paramchangeTextColor(diffValue));
    this.drawText(v, x, y, paramWidth, "right");
};
Window_EquipStatus.prototype.drawNewParamX = function(x, y, xparamId) {
    const paramWidth = this.paramWidth();
    const newValue = this._tempActor.xparam(xparamId);
    const diffValue = newValue - this._actor.xparam(xparamId);
    const v = Math.round( Math.max(Math.min(newValue * 100, 999999), -99999) ).toLocaleString();
    this.changeTextColor(ColorManager.paramchangeTextColor(diffValue));
    this.drawText(v, x, y, paramWidth, "right");
};
Window_EquipStatus.prototype.drawNewParamS = function(x, y, sparamId) {
    const paramWidth = this.paramWidth();
    const newValue = this._tempActor.sparam(sparamId);
    const diffValue = newValue - this._actor.sparam(sparamId);
    const v = Math.round( Math.max(Math.min(newValue * 100, 999999), -99999) ).toLocaleString();

    if ( (sparamId == 0) || (sparamId == 4) || (sparamId == 6) || (sparamId == 7) ) {
        this.changeTextColor(ColorManager.paramchangeTextColor(-diffValue));
    } else {
        this.changeTextColor(ColorManager.paramchangeTextColor(diffValue));
    }

    this.drawText(v + "%", x, y, paramWidth, "right");
};
Window_EquipStatus.prototype.rightArrowWidth = function() {
    return 24;
};
Window_EquipStatus.prototype.paramWidth = function() {
    return 60;
};
Window_EquipStatus.prototype.paramX = function() {
    return 185;
};
Window_EquipStatus.prototype.paramY = function(index) {
    return Math.floor( this.lineHeightB() * (index + 1) );
};

///-----------------------------------------------------------------------------
/// Window_StatusBase
///
/// The superclass of windows for displaying actor status.
Window_StatusBase.prototype.initialize = function(rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
    this._additionalSprites = {};
    this.loadFaceImages();
};
Window_StatusBase.prototype.loadFaceImages = function() {
    for (const actor of $gameParty.members()) {
        ImageManager.loadFace(actor.faceName());
    }
};
Window_StatusBase.prototype.refresh = function() {
    this.hideAdditionalSprites();
    Window_Selectable.prototype.refresh.call(this);
};
Window_StatusBase.prototype.hideAdditionalSprites = function() {
    for (const sprite of Object.values(this._additionalSprites)) {
        sprite.hide();
    }
};
Window_StatusBase.prototype.placeActorName = function(actor, x, y) {
    const key = "actor%1-name".format(actor.actorId());
    const sprite = this.createInnerSprite(key, Sprite_Name);
    sprite.setup(actor);
    sprite.move(x, y);
    sprite.show();
};
Window_StatusBase.prototype.placeStateIcon = function(actor, x, y) {
    const key = "actor%1-stateIcon".format(actor.actorId());
    const sprite = this.createInnerSprite(key, Sprite_StateIcon);
    sprite.setup(actor);
    sprite.move(x, y);
    sprite.show();
};
Window_StatusBase.prototype.placeGauge = function(actor, type, x, y) {
    const key = "actor%1-gauge-%2".format(actor.actorId(), type);
    const sprite = this.createInnerSprite(key, Sprite_Gauge);
    sprite.setup(actor, type);
    sprite.move(x, y);
    sprite.show();
};

Window_StatusBase.prototype.createInnerSprite = function(key, spriteClass) {
    const dict = this._additionalSprites;
    if (dict[key]) {
        return dict[key];
    } else {
        const sprite = new spriteClass();
        dict[key] = sprite;
        this.addInnerChild(sprite);
        return sprite;
    }
};
Window_StatusBase.prototype.placeTimeGauge = function(actor, x, y) {
    if (BattleManager.isTpb()) {
        this.placeGauge(actor, "time", x, y);
    }
};
Window_StatusBase.prototype.placeBasicGauges = function(actor, x, y) {
    this.placeGauge(actor, "hp", x, y);
    this.placeGauge(actor, "mp", x, y + this.gaugeLineHeight());
    if ($dataSystem.optDisplayTp) {
        this.placeGauge(actor, "tp", x, y + this.gaugeLineHeight() * 2);
    }
};
Window_StatusBase.prototype.gaugeLineHeight = function() {
    return 24;
};
Window_StatusBase.prototype.drawActorCharacter = function(actor, x, y) {
    this.drawCharacter(actor.characterName(), actor.characterIndex(), x, y);
};
// prettier-ignore
Window_StatusBase.prototype.drawActorFace = function(
    actor, x, y, width, height
) {
    this.drawFace(actor.faceName(), actor.faceIndex(), x, y, width, height);
};
Window_StatusBase.prototype.drawActorName = function(actor, x, y, width) {
    width = width || 160;
    // this.changeTextColor(ColorManager.hpColor(actor));
    this.changeTextColor( TJS_auto.CustomHpColor( actor.hp, actor.mhp ) );
    this.drawText(actor.name(), x, y, width);
};
Window_StatusBase.prototype.drawActorClass = function(actor, x, y, width) {
    width = width || 200;
    this.resetTextColor();
    this.drawText(actor.currentClass().name, x, y, width);
};
Window_StatusBase.prototype.drawActorNickname = function(actor, x, y, width) {
    width = width || 200;
    this.resetTextColor();
    this.drawText(actor.nickname(), x, y, width);
};
Window_StatusBase.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(TextManager.levelA, x, y, 50);
    this.resetTextColor();
    this.drawText(actor.level, x + 72, y, 30, "right");
};
Window_StatusBase.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 170;
    const iconWidth = ImageManager.iconWidth;
    const icons = actor.allIcons().slice(0, Math.floor(width / iconWidth));
    let iconX = x;
    for (const icon of icons) {
        this.drawIcon(icon, iconX, y + 2);
        iconX += iconWidth;
    }
};
Window_StatusBase.prototype.drawActorSimpleStatus = function(actor, x, y) {
    const lineHeight = this.lineHeightB();
    const x2 = x + 170;
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + (lineHeight * 1));
    this.drawActorIcons(actor, x, y + (lineHeight * 2) + 5);
    this.drawActorClass(actor, x2, y);
    this.placeBasicGauges(actor, x2, y + (lineHeight) + 5);
};
Window_StatusBase.prototype.drawActorSimpleStatusX = function(actor, x, y) {
    const lineHeight = this.lineHeightB();
    const x2 = x + 170;
    this.drawActorName(actor, x, y);
    this.drawActorClass(actor, x2, y);
    this.drawActorNickname(actor, x, y + lineHeight);
    this.drawActorLevel(actor, x, y + (lineHeight * 2));
    this.drawActorIcons(actor, x, y + (lineHeight * 3) + 5);
    this.placeBasicGauges(actor, x2, y + (lineHeight * 2) + 5);
};
Window_StatusBase.prototype.actorSlotName = function(actor, index) {
    const slots = actor.equipSlots();
    return $dataSystem.equipTypes[slots[index]];
};
Window_StatusBase.prototype.DrawListOfStatesText = function(actor, x, y, itemCount) {
    const lineHeight = this.lineHeightB();
    const width = 240;
    var numItems = itemCount;
    if ( actor.states().length < 1 ) return;
    const actor_states = actor.states();
    const actor_states_length = actor_states.length;

    if ( actor_states_length < numItems ) { numItems = actor_states_length; }
    var index = 0;
    var count = 0;
    for (let i = 0; i < actor_states_length; i++) {
        if ( index >= actor_states_length ) { break; }
        if ( count >= itemCount ) { break; }

        if ( actor_states[index].iconIndex == 0 ) {
            index += 1;
        } else {
            this.drawText( actor_states[index].name, x, y + (lineHeight * count), width );
            index += 1;
            count += 1;
        }
    }
};
Window_StatusBase.prototype.DrawListOfStatesSingle = function(actor, x, y, max_width, itemCount) {
    const lineHeight = this.lineHeightB();
    const width = max_width;
    var numItems = itemCount;
    if ( actor.states().length < numItems ) { numItems = actor.states().length; }
    var index = 0;
    var count = 0;
    for (let i = 0; i < actor.states().length; i++) {
        if ( index >= actor.states().length ) { break; }
        if ( count >= itemCount ) { break; }

        if ( actor.states()[index].iconIndex == 0 ) {
            index += 1;
        } else {
            this.drawText(actor.states()[index].name, x, y + (lineHeight * count), width, "right");
            index += 1;
            count += 1;
        }
    }
};
Window_StatusBase.prototype.DrawListOfStatesImmuneToTextDouble = function(actor, x, y, maxLineCount) {
    if ( !actor ) return;
    const lineHeight = this.lineHeightB();
    const width = 650; // 310 + 30 + 310
    const entry_width = 310;
    const entry_width_offset = entry_width + 30;
    const states_immune = actor.StatesImmune();

    if ( (!states_immune) || (states_immune.length < 1) ) {
        this.resetTextColor();
        this.drawText( "None", x, y, entry_width );

        return;
    }

    var states_immune_size = states_immune.length;
    if ( states_immune_size > (maxLineCount * 2) ) states_immune_size = maxLineCount * 2;

    this.resetTextColor();

    for ( let i = 0; i < states_immune_size; i++ ) {
        if ( states_immune[i] >= $dataStates.length ) continue;
        const state_name = $dataStates[states_immune[i]].name;

        if ( i % 2 == 0 ) {
            this.drawText( state_name, x, y + (lineHeight * 0.5 * i), entry_width );
        } else {
            this.drawText( state_name, x + entry_width_offset, y + (lineHeight * 0.5 * (i - 1)), entry_width );
        }
    }
};
Window_StatusBase.prototype.DrawListOfStatesImmuneToTextSingle = function(actor, x, y, maxLineCount) {
    if ( !actor ) return;
    const lineHeight = this.lineHeightB();
    const width = 350; // 310 + 30 + 310
    const entry_width = this.StateNameWidth();
    const states_immune = actor.StatesImmune();

    if ( (!states_immune) || (states_immune.length < 1) ) {
        this.resetTextColor();
        this.drawText( "None", x, y, entry_width );

        return;
    }

    var states_immune_size = states_immune.length;
    if ( states_immune_size > maxLineCount ) states_immune_size = maxLineCount;

    this.resetTextColor();

    for ( let i = 0; i < states_immune_size; i++ ) {
        if ( states_immune[i] >= $dataStates.length ) continue;
        const state_name = $dataStates[states_immune[i]].name;

        this.drawText( state_name, x, y + (lineHeight * i), entry_width );
    }
};
Window_StatusBase.prototype.DrawListOfStatesImmuneToTextCompareSingle = function(actor, x, y, maxLineCount, other_actor) {
    if ( !actor ) return;
    if ( !other_actor ) return;
    const lineHeight = this.lineHeightB();
    const width = 350; // 310 + 30 + 310
    const entry_width = this.StateNameWidth();
    const states_immune = actor.StatesImmune();
    const other_states_immune = other_actor.StatesImmune();

    if ( (!states_immune) || (states_immune.length < 1) ) {
        this.resetTextColor();
        this.drawText( "None", x, y, entry_width );

        return;
    }

    var states_immune_size = states_immune.length;
    if ( states_immune_size > maxLineCount ) states_immune_size = maxLineCount;

    for ( let i = 0; i < states_immune_size; i++ ) {
        if ( states_immune[i] >= $dataStates.length ) continue;
        const state_name = $dataStates[states_immune[i]].name;

        if ( other_states_immune.includes( states_immune[i] ) == true )
            this.resetTextColor();
        else
            this.changeTextColor(ColorManager.paramchangeTextColor( 1 ));

        this.drawText( state_name, x, y + (lineHeight * i), entry_width );
    }
};
Window_StatusBase.prototype.DrawListOfStatesResistantToTextSingle = function(actor, x, y, maxLineCount) {
    if ( !actor ) return;
    const lineHeight = this.lineHeightB();
    const entry_width = this.StateNameWidth() + (this.CharWidth() * 7); // 350
    var states_resistant = actor.TraitsEffectsPartiallyResistantTo();
    if ( !states_resistant ) states_resistant = [];

    this.resetTextColor();

    if ( (!states_resistant) || (states_resistant.length < 1) ) {
        this.drawText( "None", x, y, entry_width );

        return;
    }

    var states_resistant_size = states_resistant.length;
    if ( states_resistant_size > maxLineCount ) states_resistant_size = maxLineCount;

    for ( let i = 0; i < states_resistant_size; i++ ) {
        if ( states_resistant[i].dataId >= $dataStates.length ) {
                continue;
        }

        this.drawText( $dataStates[states_resistant[i].dataId].name, x, y + (lineHeight * i), entry_width );
        this.drawText( (Math.round( 10000.0 * (1.0 - states_resistant[i].value) ) / 100).toLocaleString() + "%", x, y + (lineHeight * i), entry_width, "right" );
    }
};
Window_StatusBase.prototype.DrawListOfStatesResistantToTextCompareSingle = function(actor, x, y, maxLineCount, other_actor) {
    if ( !actor ) return;
    if ( !other_actor ) return;
    const lineHeight = this.lineHeightB();
    const entry_width = this.StateNameWidth() + (this.CharWidth() * 7);

    var states_resistant = actor.StatesPartiallyResistant();
    var other_states_resistant = other_actor.StatesPartiallyResistant();

    this.resetTextColor();

    if (other_states_resistant.length < 1) {
        this.changeTextColor( ColorManager.paramchangeTextColor( -states_resistant.length ) );
        this.drawText( "None", x, y, entry_width );

        return;
    }

    const combined_states = other_states_resistant.concat( TJS_auto.DeepCopy(states_resistant.filter( item => (!other_states_resistant.includes(item)) )) );
    other_states_resistant = TJS_auto.DeepCopy( combined_states );

    var other_states_resistant_size = other_states_resistant.length;
    if ( other_states_resistant_size > maxLineCount ) other_states_resistant_size = maxLineCount;

    for ( let i = 0; i < other_states_resistant_size; i++ ) {
        if ( other_states_resistant[i] >= $dataStates.length ) {
                continue;
        }

        if ( states_resistant.includes( other_states_resistant[i] ) )
            this.changeTextColor(ColorManager.paramchangeTextColor( other_actor.GetStatePartialResistancePercent(other_states_resistant[i]) - actor.GetStatePartialResistancePercent(other_states_resistant[i]) ));
        else
            this.changeTextColor(ColorManager.paramchangeTextColor( other_actor.GetStatePartialResistancePercent(other_states_resistant[i]) ));

        this.drawText( $dataStates[other_states_resistant[i]].name, x, y + (lineHeight * i), entry_width );
        this.drawText( ( other_actor.GetStatePartialResistancePercent(other_states_resistant[i]) ).toLocaleString() + "%", x, y + (lineHeight * i), entry_width, "right" );
    }
};
Window_StatusBase.prototype.DrawListOfStatesImmuneToDouble = function(actor, x, y, maxLines) {
    this.changeTextColor( ColorManager.systemColor() );
    this.drawText( "Effects Immune To:", x, y, 650 );

    if ( actor ) this.DrawListOfStatesImmuneToTextDouble( actor, x, y + this.lineHeightB(), maxLines );

    this.resetTextColor();
};
Window_StatusBase.prototype.DrawListOfStatesImmuneTo = function(actor, x, y, maxLines) {
    this.changeTextColor( ColorManager.systemColor() );
    this.drawText( "Effects Immune To:", x, y, 171 );

    if ( actor ) this.DrawListOfStatesImmuneToTextSingle( actor, x, y + this.lineHeightB(), maxLines );

    this.resetTextColor();
};
Window_StatusBase.prototype.DrawListOfStatesImmuneToCompare = function(actor, x, y, maxLines, other_actor) {
    this.changeTextColor( ColorManager.systemColor() );
    this.drawText( "Effects Immune To:", x, y, 171 );

    if ( actor && other_actor ) this.DrawListOfStatesImmuneToTextCompareSingle( actor, x, y + this.lineHeightB(), maxLines, other_actor );

    this.resetTextColor();
};
Window_StatusBase.prototype.DrawListOfStatesResistantTo = function(actor, x, y, maxLines) {
    this.changeTextColor( ColorManager.systemColor() );
    this.drawText( "Partial Resistances:", x, y, 190 );

    if ( actor ) this.DrawListOfStatesResistantToTextSingle( actor, x, y + this.lineHeightB(), maxLines );

    this.resetTextColor();
};
Window_StatusBase.prototype.DrawListOfStatesResistantToCompare = function(actor, x, y, maxLines, other_actor) {
    this.changeTextColor( ColorManager.systemColor() );
    this.drawText( "Partial Resistances:", x, y, 190 );

    if ( actor && other_actor ) this.DrawListOfStatesResistantToTextCompareSingle( actor, x, y + this.lineHeightB(), maxLines, other_actor );

    this.resetTextColor();
};
Window_StatusBase.prototype.DrawListOfElementRates = function(actor, x, y) {
    const lineHeight = this.lineHeightB();
    const width = 140;
    const x2 = width + 10;
    const width2 = 60;
    const label_width = this.textWidth("Effects of damage types:") - 10;
    const count = $dataSystem.elements.length;

    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Effects of damage types:", x, y, label_width );
    this.resetTextColor();

    for (let i = 1; i < count; i++) {
        this.changeTextColor(ColorManager.systemColor());
        this.drawText( $dataSystem.elements[i], x, y + (lineHeight * (i)), label_width - 10 );

        this.resetTextColor();
        const value = Math.round(Number(actor.elementRate(i)) * 100).toLocaleString();
        this.drawText( value + "%", x, y + (lineHeight * (i)), label_width - 10, "right" );
        this.resetTextColor();
    }
};
Window_StatusBase.prototype.Draw_Params = function(x, y) {
    const height = this.lineHeightB();

    this.Draw_Item(x, y, 0);
    this.Draw_Item(x, y + height, 1);
    this.Draw_ItemCustom(x, y + (2 * height), 0);
    this.Draw_Item(x, y + (3 * height), 2);
    this.Draw_Item(x, y + (4 * height), 3);
    this.Draw_Item(x, y + (5 * height), 4);
    this.Draw_Item(x, y + (6 * height), 5);
    this.Draw_Item(x, y + (7 * height), 6);
    this.Draw_Item(x, y + (8 * height), 8);
    this.Draw_Item(x, y + (9 * height), 7);
};
Window_StatusBase.prototype.Draw_ParamsX = function(x, y) {
    const height = this.lineHeightB();

    this.Draw_ItemCustom( x, y, 1 );
    this.Draw_ItemCustom( x, y + height, 2 );
    this.Draw_ItemX( x, y + (2 * height), 6 );
    this.Draw_ItemX( x, y + (3 * height), 1 );
    this.Draw_ItemX( x, y + (4 * height), 4 );
    this.Draw_ItemX( x, y + (5 * height), 5 );
    this.Draw_ItemX( x, y + (6 * height), 12 );
    this.Draw_ItemX( x, y + (7 * height), 13 );
    this.Draw_ItemX( x, y + (8 * height), 14 );
    this.Draw_ItemX( x, y + (9 * height), 15 );
};
Window_StatusBase.prototype.Draw_ParamsS = function(x, y) {
    const height = this.lineHeightB();

    this.Draw_ItemS(x, y, 0);
    this.Draw_ItemS(x, y + height, 1);
    this.Draw_ItemS(x, y + (2 * height), 2);
    this.Draw_ItemS(x, y + (3 * height), 3);
    this.Draw_ItemS(x, y + (4 * height), 4);
    this.Draw_ItemS(x, y + (5 * height), 5);
    this.Draw_ItemS(x, y + (6 * height), 6);
    this.Draw_ItemS(x, y + (7 * height), 7);
    this.Draw_ItemS(x, y + (8 * height), 9);
};
Window_StatusBase.prototype.Draw_Item = function(x, y, paramId) {
    const paramWidth = this.ParamNameWidth() + this.CharWidth();
    this.Draw_ParamName(x, y, paramId);
    if (this._actor) {
        this.Draw_CurrentParam(paramWidth + x, y, paramId);
    }
};
Window_StatusBase.prototype.Draw_ItemCustom = function(x, y, cparamId) {
    const paramWidth = this.ParamNameWidth() + this.CharWidth();
    this.Draw_ParamNameCustom(x, y, cparamId);
    if (this._actor) {
        this.Draw_CurrentParamCustom(paramWidth + x, y, cparamId);
    }
};
Window_StatusBase.prototype.Draw_ItemX = function(x, y, xparamId) {
    const paramWidth = this.ParamNameWidth() + this.CharWidth();
    this.Draw_ParamNameX(x, y, xparamId);
    if (this._actor) {
        this.Draw_CurrentParamX(paramWidth + x, y, xparamId);
    }
};
Window_StatusBase.prototype.Draw_ItemS = function(x, y, sparamId) {
    const paramWidth = this.ParamNameWidth() + this.CharWidth();
    this.Draw_ParamNameS(x, y, sparamId);
    if (this._actor) {
        this.Draw_CurrentParamS(paramWidth + x, y, sparamId);
    }
};
Window_StatusBase.prototype.Draw_ParamName = function(x, y, paramId) {
    const width = this.ParamNameWidth();

    this.changeTextColor(ColorManager.systemColor());
    if ( paramId <= 7 ) this.drawText(TextManager.param(paramId), x, y, width);
    else if ( paramId == TJS_PARAM_MAGIC_FOCUS ) this.drawText("Magic Focus", x, y, width);
    this.resetTextColor();
};
Window_StatusBase.prototype.Draw_ParamNameCustom = function(x, y, cparamId) {
    const width = this.ParamNameWidth();
    this.changeTextColor(ColorManager.systemColor());

    if (cparamId == 0) this.drawText("Max Tactical Points", x, y, width);
    else if (cparamId == 1) this.drawText("Physical Hit Bonus", x, y, width);
    else if (cparamId == 2) this.drawText("Magical Hit Bonus", x, y, width);

    this.resetTextColor();
};
Window_StatusBase.prototype.Draw_ParamNameX = function(x, y, xparamId) {
    const width = this.ParamNameWidth();
    this.changeTextColor(ColorManager.systemColor());
    if (xparamId == 0) {this.drawText("Hit Rate", x, y, width);}
    else if (xparamId == 1) {this.drawText("Physical Evade", x, y, width);}
    else if (xparamId == 2) {this.drawText("Crit. Hit Rate", x, y, width);}
    else if (xparamId == 3) {this.drawText("Critical Evade", x, y, width);}
    else if (xparamId == 4) {this.drawText("Magical Evade", x, y, width);}
    else if (xparamId == 5) {this.drawText("Magic Reflect", x, y, width);}
    else if (xparamId == 6) {this.drawText("Counter Attack", x, y, width);}
    else if (xparamId == 7) {this.drawText("HP Regen.", x, y, width);}
    else if (xparamId == 8) {this.drawText("MP Regen.", x, y, width);}
    else if (xparamId == 9) {this.drawText("TP Regen.", x, y, width);}
    else if ( xparamId == 12 ) this.drawText("Phys. Crit. Hit Rate", x, y, width);
    else if ( xparamId == 13 ) this.drawText("Mag. Crit. Hit Rate", x, y, width);
    else if ( xparamId == 14 ) this.drawText("Phys. Critical Evade", x, y, width);
    else if ( xparamId == 15 ) this.drawText("Mag. Critical Evade", x, y, width);

    this.resetTextColor();
};
Window_StatusBase.prototype.Draw_ParamNameS = function(x, y, sparamId) {
    const width = this.ParamNameWidth();
    this.changeTextColor(ColorManager.systemColor());
    if (sparamId == 0) {this.drawText("Targeted Rate", x, y, width);}
    else if (sparamId == 1) {this.drawText("Guard Effect", x, y, width);}
    else if (sparamId == 2) {this.drawText("Heal Rate, Spells", x, y, width);}
    else if (sparamId == 3) {this.drawText("Heal Rate, Potions", x, y, width);}
    else if (sparamId == 4) {this.drawText("MP Cost Rate", x, y, width);}
    else if (sparamId == 5) {this.drawText("TP Gain Rate", x, y, width);}
    else if (sparamId == 6) {this.drawText("Physical Damage", x, y, width);}
    else if (sparamId == 7) {this.drawText("Magical Damage", x, y, width);}
    else if (sparamId == 8) {this.drawText("Floor Damage", x, y, width);}
    else if (sparamId == 9) {this.drawText("EXP Gain Rate", x, y, width);}

    this.resetTextColor();
};
Window_StatusBase.prototype.Draw_CurrentParam = function(x, y, paramId) {
    const paramWidth = this.ParamWidth();
    var v = 0;
    if ( paramId <= 7 ) v = Math.round(Math.max(Math.min(this._actor.param(paramId), 99999), -9999)).toLocaleString();
    else if ( paramId == TJS_PARAM_MAGIC_FOCUS ) v = Math.round(Math.max(Math.min(this._actor.magic_focus, 99999), -9999)).toLocaleString();

    this.resetTextColor();
    this.drawText(v, x, y, paramWidth, "right");
};
Window_StatusBase.prototype.Draw_CurrentParamCustom = function(x, y, cparamId) {
    const paramWidth = this.ParamWidth();

    var param_value = 0;
    if ( cparamId == 0 ) param_value = this._actor.maxTp();
    if ( cparamId == 1 ) param_value = this._actor.hit_rate_physical * 100.00000;
    if ( cparamId == 2 ) param_value = this._actor.hit_rate_magical * 100.00000;

    const v = Math.round(Math.max(Math.min(param_value, 99999), -9999)).toLocaleString();
    this.resetTextColor();
    this.drawText(v, x, y, paramWidth, "right");
};
Window_StatusBase.prototype.Draw_CurrentParamX = function(x, y, xparamId) {
    const paramWidth = this.ParamWidth();
    const value = this._actor.xparam(xparamId);
    const v = Math.round(Math.max(Math.min(value * 100, 99999), -9999)).toLocaleString();
    this.resetTextColor();
    this.drawText(v, x, y, paramWidth, "right");
};
Window_StatusBase.prototype.Draw_CurrentParamS = function(x, y, sparamId) {
    const paramWidth = this.ParamWidth();
    const value = this._actor.sparam(sparamId);
    const v = Math.round(Math.max(Math.min(value * 100, 99999), -9999)).toLocaleString();
    const end_char = sparamId == 0 ? " " : "%";
    this.resetTextColor();
    this.drawText(v + end_char, x, y, paramWidth, "right");
};
Window_StatusBase.prototype.ParamWidth = function() {
    return this.CharWidth() * 6;
};
Window_StatusBase.prototype.ParamNameWidth = function() {
    return this.CharWidth() * 18;
};
Window_StatusBase.prototype.Draw_MaxNumberActionsPerTurn = function(actor, x, y) {
    const width = this.CharWidth() * 14;

    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Maximum number", x, y, width );
    this.drawText( "of actions per", x, y + this.lineHeightB(), width );
    this.drawText( "combat turn:", x, y + (this.lineHeightB() * 2), width );
    this.resetTextColor();
    this.drawText( (actor.actionPlusSet().length + 1) + " actions", x, y + (this.lineHeightB() * 3), width, "left" );
};
Window_StatusBase.prototype.Draw_ChancesActionsPerTurn = function(actor, x, y) {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Chances of actions", x, y, 180 );
    this.drawText( "per turn:", x, y + this.lineHeightB(), 180 );

    const values = actor.actionPlusSet().sort((a, b) => (b - a));
    const valuesSize = values.length;
    const x_width = this.CharWidth() * 8;

    this.resetTextColor();
    this.drawText( "1: ", x, y + (this.lineHeightB() * 2), x_width, );
    this.drawText( "100%", x, y + (this.lineHeightB() * 2), x_width, "right" );

    var x_offset = 0;
    var y_offset = 0;
    for (let i = 0; i < valuesSize; i++) {
        const v = Math.round(Number(values[i]) * 100);
        const y2 = y + (this.lineHeightB() * (i+3)) + y_offset;
        const x2 = x + x_offset;

        this.drawText( (i+2) + ":", x2, y2, x_width, );
        this.drawText( v + "%", x2, y2, x_width, "right" );

        if ( i == 15 ) {
            x_offset = x_width + (this.CharWidth() * 5);
            y_offset = -17 * this.lineHeightB();
        }
        if ( i == 32 ) {
            x_offset = x_width + x_width + (this.CharWidth() * 10);
            y_offset = -34 * this.lineHeightB();
        }
        else if ( i == 43 ) break;
    }
};
Window_StatusBase.prototype.Draw_DebuffResistances = function(actor, x, y) {
    const width = this.CharWidth() * 26;
    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Resistances to Debuffs:", x, y, width );

    for ( let i = 0; i <= 6; i++ )
        this.drawText( TJS_auto.GetParameterNameFromNumber(i), x, y + (this.lineHeightB() * (i + 1)), width );
    this.drawText( TJS_auto.GetParameterNameFromNumber(8), x, y + (this.lineHeightB() * 8), width );
    this.drawText( TJS_auto.GetParameterNameFromNumber(7), x, y + (this.lineHeightB() * 9), width );

    if ( !actor ) return;

    this.resetTextColor();
    for ( let i = 0; i <= 6; i++ ) {
        const v = (Math.round((1.00000 - actor.debuffRate(i)) * 10000.00000) / 100).toLocaleString() + "%";
        this.drawText( v, x, y + (this.lineHeightB() * (i + 1)), width, "right" );
    }
    const v8 = (Math.round((1.00000 - actor.debuffRate(8)) * 10000.00000) / 100).toLocaleString() + "%";
    this.drawText( v8, x, y + (this.lineHeightB() * 8), width, "right" );
    const v7 = (Math.round((1.00000 - actor.debuffRate(7)) * 10000.00000) / 100).toLocaleString() + "%";
    this.drawText( v7, x, y + (this.lineHeightB() * 9), width, "right" );
};
Window_StatusBase.prototype.Draw_DebuffResistances_2Cols = function(actor, x, y) {
    const width = this.CharWidth() * 26;
    const width_between_cols = this.CharWidth() * 5;

    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Resistances to Debuffs:", x, y, width );

    for ( let i = 0; i <= 4; i++ )
        this.drawText( TJS_auto.GetParameterNameFromNumber(i), x, y + (this.lineHeightB() * (i + 1)), width );
    for ( let i = 5; i <= 6; i++ )
        this.drawText( TJS_auto.GetParameterNameFromNumber(i), x + width + width_between_cols, y + (this.lineHeightB() * (i - 4)), width );
    this.drawText( TJS_auto.GetParameterNameFromNumber(8), x + width + width_between_cols, y + (this.lineHeightB() * 3), width );
    this.drawText( TJS_auto.GetParameterNameFromNumber(7), x + width + width_between_cols, y + (this.lineHeightB() * 4), width );

    if ( !actor ) return;

    this.resetTextColor();
    for ( let i = 0; i <= 4; i++ ) {
        const v = (Math.round((1.00000 - actor.debuffRate(i)) * 10000.00000) / 100).toLocaleString() + "%";
        this.drawText( v, x, y + (this.lineHeightB() * (i + 1)), width, "right" );
    }
    for ( let i = 5; i <= 6; i++ ) {
        const v = (Math.round((1.00000 - actor.debuffRate(i)) * 10000.00000) / 100).toLocaleString() + "%";
        this.drawText( v, x + width + width_between_cols, y + (this.lineHeightB() * (i - 4)), width, "right" );
    }
    const v8 = (Math.round((1.00000 - actor.debuffRate(8)) * 10000.00000) / 100).toLocaleString() + "%";
    this.drawText( v8, x + width + width_between_cols, y + (this.lineHeightB() * 3), width, "right" );
    const v7 = (Math.round((1.00000 - actor.debuffRate(7)) * 10000.00000) / 100).toLocaleString() + "%";
    this.drawText( v7, x + width + width_between_cols, y + (this.lineHeightB() * 4), width, "right" );
};

///-----------------------------------------------------------------------------
/// Window_Status
///
/// The window for displaying full status on the status screen.
Window_Status.prototype.drawBasicInfo = function(x, y) {
    const lineHeight = this.lineHeight() * 0.8;
    this.drawActorLevel(this._actor, x, y + lineHeight * 0);
    this.drawActorIcons(this._actor, x, y + lineHeight * 1);
    this.placeBasicGauges(this._actor, x, y + lineHeight * 2);
};
Window_Status.prototype.expTotalValue = function() {
    if (this._actor.isMaxLevel()) {
        return "- Max Level -";
    } else {
        return Math.round( this._actor.currentExp() ).toLocaleString() + " ";
    }
};
Window_Status.prototype.expNextValue = function() {
    if (this._actor.isMaxLevel()) {
        return "- Max Level -";
    } else {
        return Math.round( this._actor.nextRequiredExp() ).toLocaleString() + ",";
    }
};
Window_Status.prototype.expNextValuePercent = function() {
    if (this._actor.isMaxLevel()) {
        return "";
    } else {
        const percent_remaining = Math.round(10000.0 * this._actor.nextRequiredExpUnrounded() / ( this._actor.expForLevelUnrounded(this._actor.level + 1) - this._actor.expForLevelUnrounded(this._actor.level) )).clamp(0, 10000) / 100;
        return String( percent_remaining ) + "% Remaining";
    }
};
Window_Status.prototype.drawExpInfo = function(x, y) {
    const lineHeight = this.lineHeightB();
    const expTotal = TextManager.expTotal.format(TextManager.exp);
    const expNext = TextManager.expNext.format(TextManager.level);
    const value_exp_total = this.expTotalValue();
    const value_exp_next = this.expNextValue();
    const exp_display_width = this.CharWidth() * 33;
    const value_exp_next_percent = this.expNextValuePercent();
    const exp_percent_width = exp_display_width + this.CharWidth() * 18;

    this.changeTextColor(ColorManager.systemColor());
    this.drawText( expTotal, x, y, exp_display_width );
    this.drawText( expNext, x, y + lineHeight, exp_display_width );

    this.resetTextColor();
    this.drawText( value_exp_total, x, y, exp_display_width, "right" );
    this.drawText( value_exp_next, x, y + lineHeight, exp_display_width, "right" );
    this.drawText( value_exp_next_percent, x, y + lineHeight, exp_percent_width, "right" );
};
Window_Status.prototype.drawBlock1 = function() {
    const y = this.block1Y();
    this.drawActorName(this._actor, 2, y, 160);
    this.drawActorClass(this._actor, 200, y, 300);
    this.drawActorNickname(this._actor, this.CharWidth() * 60, y, 300);
};
Window_Status.prototype.drawBlock2 = function() {
    const y = this.block2Y() - 26;
    this.drawActorFace(this._actor, 2, y);
    this.drawBasicInfo(198, y);
    this.drawExpInfo(this.CharWidth() * 60, y);
};
Window_Status.prototype.refresh = function() {
    Window_StatusBase.prototype.refresh.call(this);
    if (this._actor) {
        this.drawBlock1();
        this.drawBlock2();

        this.DrawListOfElementRates( this._actor, 0, this.lineHeightB() * 8 ); // y = 164

        this.changeTextColor(ColorManager.systemColor());
        this.drawText( "Current Effects:", 240, this.lineHeightB() * 8, this.CharWidth() * 32 ); // y = 164, width = 310
        this.resetTextColor();
        this.DrawListOfStatesText( this._actor, 240, this.lineHeightB() * 9, 13 ); // y = 186

        this.Draw_Params( this.CharWidth() * 60, this.lineHeightB() * 4 ); // x = 500
        this.Draw_ParamsX( this.CharWidth() * 89, this.lineHeightB() * 4 ); // x = 760
        this.Draw_ParamsS( this.CharWidth() * 118, this.lineHeightB() * 4 ); // x = 1010

        this.Draw_MaxNumberActionsPerTurn( this._actor, 0, this.lineHeightB() * 23 ); // 600, 428
        this.Draw_ChancesActionsPerTurn( this._actor, this.CharWidth() * 17, this.lineHeightB() * 23 ); // this.CharWidth() * 17, this.lineHeightB() * 20

        this.DrawListOfStatesImmuneTo( this._actor, this.CharWidth() * 60, this.lineHeightB() * 15, 23 ); // x=390
        this.DrawListOfStatesResistantTo( this._actor, this.CharWidth() * 95, this.lineHeightB() * 15, 23 );

        this.Draw_DebuffResistances_2Cols( this._actor, this.CharWidth() * 131, this.lineHeightB() * 28 ); // this._actor, this.CharWidth() * 145, this.lineHeightB() * 28
    }
};

///-----------------------------------------------------------------------------
/// Window_EquipCommand
///
/// The window for selecting a command on the equipment screen.
Window_EquipCommand.prototype.maxCols = function() {
    return 2;
};
Window_EquipCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.equip2, "equip");
    // this.addCommand(TextManager.optimize, "optimize");
    this.addCommand(TextManager.clear, "clear");
};

///-----------------------------------------------------------------------------
/// Window_EquipSlot
///
/// The window for selecting an equipment slot on the equipment screen.
Window_EquipSlot.prototype.slotNameWidth = function() {
    return this.SlotNameWidth(); // return 138;
};

///-----------------------------------------------------------------------------
/// Scene_Equip
///
/// The scene class of the equipment screen.
Scene_Equip.prototype.statusWidth = function() {
    return this.GetEquipStatsWindowWidth();
};

///-----------------------------------------------------------------------------
/// Scene_Status
///
/// The scene class of the status screen.
Scene_Status.prototype.statusWindowRect = function() {
    const wx = 0;
    const wy = this.mainAreaTop();
    const ww = Graphics.boxWidth;
    const wh = this.profileWindowRect().y - wy;
    return new Rectangle(wx, wy, ww, wh);
};
Scene_Status.prototype.createStatusParamsWindow = function() {
};
Scene_Status.prototype.refreshActor = function() {
    const actor = this.actor();
    this._profileWindow.setText( actor.profile() );
    this._statusWindow.setActor( actor );
    this._statusEquipWindow.setActor( actor );
};
Scene_Status.prototype.statusEquipWindowRect = function() {
    const ww = Graphics.boxWidth - this.TjsGetStatsBoxWidth();
    const wx = this.TjsGetStatsBoxWidth();
    const wy = this.mainAreaTop();
    const wh = this.lineHeightB() * 28.5; // this.lineHeightB() * 32
    return new Rectangle(wx, wy, ww, wh);
};
Scene_Status.prototype.profileHeight = function() {
    return this.calcWindowHeight(5.3125, false);
};
Scene_Status.prototype.TjsGetStatsBoxWidth = function() {
    return this.GetEquipStatsWindowWidth();
};

///-----------------------------------------------------------------------------
/// Window_Help
///
/// The window for displaying the description of the selected item.
Window_Help.prototype.itemPadding = function() {
    return 4; // 8
};
Window_Help.prototype.lineHeight = function() {
    return 20; // 36
};
Window_Help.prototype.updatePadding = function() {
    this.padding = 6;
};
Window_Help.prototype.setItem = function(item) {
    if ( !item ) {
        this.setText( "" );

        return;
    }

    const info = item.stypeId ? item.description : TJS_auto.GetInfo1( item ) ;

    this.setText( TJS_auto.ReparseTextAuto( info ) );
    // this.setText(item ? TJS_auto.ReparseTextAuto( TJS_auto.GetInfo1( item ) ) : "");
};

///-----------------------------------------------------------------------------
/// Window_ShopCommand
///
/// The window for selecting buy/sell on the shop screen.
Window_ShopCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.buy, "buy");
    this.addCommand(TextManager.sell, "sell", !this._purchaseOnly);
    this.addCommand("Quit", "cancel");
};

///-----------------------------------------------------------------------------
/// Window_ShopStatus
///
/// The window for displaying number of items in possession and the actor's
/// equipment on the shop screen.
Window_ShopStatus.prototype.pageSize = function() {
    return 10;
};

///-----------------------------------------------------------------------------
/// Window_BattleEnemy
///
/// The window for selecting a target enemy on the battle screen.
Window_BattleEnemy.prototype.maxCols = function() {
    return 4;
};

///-----------------------------------------------------------------------------
/// Window_SavefileList
///
/// The window for selecting a save file on the save and load screens.
Window_SavefileList.prototype.numVisibleRows = function() {
    return 3;
};
Window_SavefileList.prototype.drawItem = function(index) {
    const savefileId = this.indexToSavefileId(index);
    const info = DataManager.savefileInfo(savefileId);
    const rect = this.itemRectWithPadding(index);
    this.resetTextColor();
    this.changePaintOpacity(this.isEnabled(savefileId));
    this.drawTitle(savefileId, rect.x, rect.y);
    if (info) {
        this.drawContents(info, rect);
    }
};
Window_SavefileList.prototype.drawTitle = function(savefileId, x, y) {
    if (savefileId === 0) {
        this.drawText(TextManager.autosave, x, y, this.CharWidth() * 13, "left");
    } else {
        this.drawText(TextManager.file + " " + savefileId, x, y, this.CharWidth() * 13, "left");
    }
};
Window_SavefileList.prototype.drawContents = function(info, rect) {
    const bottom = rect.y + rect.height;
    const right = rect.width;
    const lineHeight = this.lineHeightB();
    const left_block_width = this.CharWidth() * 13; // Left-Edge Stuff.
    const center_block_a_width = this.CharWidth() * 13; // Actor Name.
    const center_block_b_width = this.CharWidth() * 13; // Actor Class.
    const center_block_c_width = this.CharWidth() * 5; // Actor Level.
    const center_block_d_width = this.CharWidth() * 12; // Actor Health Points. // 8
    const center_block_e_width = this.CharWidth() * 2; // Actor Maximum Health Points. // 10
    const center_block_a_x = rect.x + left_block_width + (this.CharWidth() * 2);
    const center_block_b_x = center_block_a_x + center_block_a_width + this.CharWidth();
    const center_block_c_x = center_block_b_x + center_block_b_width + (this.CharWidth() * 2);
    const center_block_d_x = center_block_c_x + center_block_c_width + (this.CharWidth() * 2);
    const center_block_e_x = center_block_d_x + center_block_d_width + (this.CharWidth() * 1);
    const right_block_x = center_block_e_x + center_block_e_width + (this.CharWidth() * 2);
    // const right_block_width = right_block_x + (this.CharWidth() * 23); // Party Location.
    const right_block_width = this.CharWidth() * 23; // Party Location.
    const face_width = 144;
    const face_height = 144;
    const face_block_width = face_width * 7;
    const face_block_x = 4 + right - face_block_width;

    this.resetTextColor();

    if ( info.playtime ) {
        this.resetTextColor();
        this.drawText( "Time Elapsed:", rect.x, rect.y + (lineHeight * 1), left_block_width);
        this.changeTextColor( tjs_color_lvl );
        this.drawText( info.playtime, rect.x, rect.y + (lineHeight * 2), left_block_width, "right" );
    }

    if ( info.money != undefined ) {
        this.resetTextColor();
        this.drawText( "Cash:", rect.x, rect.y + (lineHeight*3), left_block_width, "left" );
        this.changeTextColor( tjs_color_lvl );
        this.drawText( (info.money).toLocaleString(), rect.x, rect.y + (lineHeight*4), left_block_width, "right" );
        this.drawText( "  Gold Pieces", rect.x, rect.y + (lineHeight*5), left_block_width, "left" );

        if ( info.actors ) {
            this.resetTextColor();
            this.drawText( "Party Size:", rect.x, rect.y + (lineHeight*6), left_block_width, "left" );
            this.changeTextColor( tjs_color_lvl );
            this.drawText( String(info.actors.length) + " members", rect.x, rect.y + (lineHeight*7), left_block_width, "right" );
        }
    }
    if ( info.actors ) {
        for (let i = 0; i < info.actors.length; i++) {
            this.resetTextColor();
            if ( (info.actors[i]._name) && (info.actors[i].hp) && (info.actors[i].mhp) ) {
                this.changeTextColor( TJS_auto.CustomHpColor( info.actors[i].hp, info.actors[i].mhp ) );
                this.drawText( info.actors[i]._name + ",", center_block_a_x, rect.y + (lineHeight*i), center_block_a_width );
            }
            // this.drawText( info.actors[i].currentClass().name, center_block_b_x, rect.y + (lineHeight*i), center_block_b_width );
            this.resetTextColor();
            if ( info.actors[i].class_name ) this.drawText( info.actors[i].class_name, center_block_b_x, rect.y + (lineHeight*i), center_block_b_width );

            this.changeTextColor( tjs_color_lvl );
            if ( info.actors[i].level ) this.drawText( "Lv " + String(info.actors[i].level), center_block_c_x, rect.y + (lineHeight*i), center_block_c_width, "left" );

            // this.changeTextColor( ColorManager.hpColor( info.actors[i] ) );
            if ( (info.actors[i].hp) && (info.actors[i].mhp) ) {
                this.changeTextColor( TJS_auto.CustomHpColor( info.actors[i].hp, info.actors[i].mhp ) );
                this.drawText( (info.actors[i].hp).toLocaleString() + " / " + (info.actors[i].mhp).toLocaleString(), center_block_d_x, rect.y + (lineHeight*i), center_block_d_width, "right" );
            }
            this.resetTextColor();
            this.drawText( "HP", center_block_e_x, rect.y + (lineHeight*i), center_block_e_width, "right" );

            if (i >= 14) break;
        }
    }
    if ( info.loc != undefined ) {
        this.resetTextColor();
        this.drawText( "Location:", right_block_x, rect.y, right_block_width );
        const text_location = TJS_auto.ReparseTextAuto(info.loc, 21);
        var text_loc1 = "  " + text_location;
        var text_loc2 = "";

        if ( text_location.includes("\n") ) {
            const text_line_break = text_location.indexOf("\n");
            text_loc1 = "  " + text_location.slice( 0, text_line_break );
            text_loc2 = "  " + text_location.slice( text_line_break + 1, text_location.length );
        }

        this.changeTextColor( tjs_color_tp );
        this.drawText( text_loc1, right_block_x, rect.y + (lineHeight * 1), right_block_width );
        this.drawText( text_loc2, right_block_x, rect.y + (lineHeight * 2), right_block_width );
    }
    if ( info.chapter != undefined ) {
        this.resetTextColor();
        this.drawText( "World:", right_block_x, rect.y + (lineHeight*3), right_block_width );
        this.changeTextColor( tjs_color_tp );
        this.drawText( "  " + TJS_auto.GetChapterTextForVariable(info.chapter), right_block_x, rect.y + (lineHeight*4), right_block_width );
    }
    if ( info.chapter_max != undefined ) {
        this.resetTextColor();
        this.drawText( "Farthest World Reached:", right_block_x, rect.y + (lineHeight*5), right_block_width );
        this.changeTextColor( tjs_color_tp );
        this.drawText( "  " + TJS_auto.GetChapterTextForVariable(info.chapter_max), right_block_x, rect.y + (lineHeight*6), right_block_width );
    }
    if ( info.start_date ) {
        this.resetTextColor();
        this.drawText( "Game Started:", right_block_x, rect.y + (lineHeight*7), right_block_width );
        this.changeTextColor( tjs_color_lvl );
        this.drawText( "  " + info.start_date.date, right_block_x, rect.y + (lineHeight*8), right_block_width );
        this.drawText( "  " + info.start_date.time, right_block_x, rect.y + (lineHeight*9), right_block_width );
    }
    if ( info.save_date ) {
        this.resetTextColor();
        this.drawText( "Game Saved:", right_block_x, rect.y + (lineHeight*10), right_block_width );
        this.changeTextColor( tjs_color_lvl );
        this.drawText( "  " + info.save_date.date, right_block_x, rect.y + (lineHeight*11), right_block_width );
        this.drawText( "  " + info.save_date.time, right_block_x, rect.y + (lineHeight*12), right_block_width );
    }
    if ( info.actors ) {
        const num_faces = Math.min( info.actors.length, 14 );
        const num_top = Math.ceil( num_faces * 0.5 );
        const num_bottom = num_faces - num_top;
        const offset = 7 - num_top;

        for ( let i = 0; i < num_top; i++ ) {
            this.drawFace( info.actors[i]._faceName, info.actors[i]._faceIndex, face_block_x + (face_width * (i + offset)), rect.y + 4, face_width, face_height );
        }
        for ( let i = num_top; i < (num_top + num_bottom); i++ ) {
            this.drawFace( info.actors[i]._faceName, info.actors[i]._faceIndex, face_block_x + (face_width * (offset + i - num_top)), rect.y + face_height + 6, face_width, face_height );
        }
    }

    this.resetTextColor();
};

///-----------------------------------------------------------------------------
/// DataManager
///
/// The static class that manages the database and game objects.
DataManager.maxSavefiles = function() {
    return 50;
};
DataManager.makeSavefileInfo = function() {
    TJS_auto.UpdateGlobalData();

    const info = {};
    info.title = $dataSystem.gameTitle;
    info.characters = $gameParty.charactersForSavefile();
    info.faces = $gameParty.facesForSavefile();
    info.playtime = $gameSystem.playtimeText();
    info.timestamp = Date.now();

    info.actors = [];
    for (let i = 0; i < $gameParty.size(); i++) {
        const member = $gameParty.members()[i];
        var actor = {};

        actor._name = member.name();
        actor.level = member.level;
        actor.class_name = member.currentClass().name;
        actor.hp = member.hp;
        actor.mhp = member.mhp;
        actor._faceName = member._faceName;
        actor._faceIndex = member._faceIndex;

        info.actors.push( actor );
    };
    info.chapter = TJS_auto.DeepCopy( $gameVariables.value(tjs_variable_game_chapter) );
    info.chapter_max = TJS_auto.DeepCopy( $gameVariables.value(tjs_variable_max_game_chapter) );
    info.money = TJS_auto.DeepCopy( $gameParty.gold() );
    info.loc = $gameMap.displayName();
    $gameSystem.CheckGameStartDateTime();
    info.start_date = TJS_auto.DeepCopy( $gameSystem.time_started );
    info.save_date = TJS_auto.GetCurrentDateTimeStringObject();

    return info;
};
DataManager.loadGame = function(savefileId) {
    const saveName = this.makeSavename(savefileId);
    return StorageManager.loadObject(saveName).then(contents => {
        this.createGameObjects();
        this.extractSaveContents(contents);
        this.correctDataErrors();

        $gameSystem.FixMissingData();
        $gameSystem.UpdateDiscoveredArrays();
        $gameMap.createVehicles();

        // $gameSystem.UpdateEncounterGroups();

        return 0;
    });
};
DataManager.PrepareTjsData_Special = function(item) {
    if ( !item ) return TJS_SPECIAL_NORMAL;
    if ( !item.special ) item.special = TJS_SPECIAL_NORMAL;
    if ( item.special != TJS_SPECIAL_NORMAL ) return item.special;
    const txt = TJS_auto.DeepCopy(item.name).toLowerCase();
    const equip_type = item.equip_type;
    const weapon_type = item.weapon_type;
    const armor_type = item.armor_type;
    var special = TJS_SPECIAL_NORMAL;

    // Shared Items
    if ( item.itypeId ) {
        // Blank entries
        if ( item.name.length < 1 ) {
            special = TJS_SPECIAL_BLANK;

            return special;
        }
        // Debug items
        else if ( item.name.includes("TEST") ) {
            special = TJS_SPECIAL_DEBUG;

            return special;
        }
        // Common / Regular shared items
        else if ( item.itypeId == 1 ) {
            special = TJS_SPECIAL_MONSTER_DROP;

            if ( txt.includes("healing potion") ) special = TJS_SPECIAL_HEALING_HP;
            else if ( txt.includes("magic syrup") ) special = TJS_SPECIAL_HEALING_MP;
            else if ( txt.includes("tactical endurance potion") ) special = TJS_SPECIAL_HEALING_TP;
            else if ( txt.includes("hyperlife injection") ) special = TJS_SPECIAL_HEALING_DEATH;
            else if ( item.description.includes("Permanantly increases ") ) special = TJS_SPECIAL_ABILITY_GROW;
            else if ( item.description.includes("Buffs one's ") ) special = TJS_SPECIAL_ABILITY_BOOST;
            else if ( txt.includes("magic flower") ) special = TJS_SPECIAL_POWER_UP_GENERIC;
        }
        // Key Items
        else if ( item.itypeId == 2 ) {
            special = TJS_SPECIAL_KEY_ITEM;

            if ( txt.includes("healing potion") ) special = TJS_SPECIAL_HEALING_HP;
            else if ( txt.includes("magic syrup") ) special = TJS_SPECIAL_HEALING_MP;
            else if ( txt.includes("tactical endurance potion") ) special = TJS_SPECIAL_HEALING_TP;
            else if ( txt.includes("hyperlife injection") ) special = TJS_SPECIAL_HEALING_DEATH;
            else if ( item.description.includes("Permanantly increases ") ) special = TJS_SPECIAL_ABILITY_GROW;
            else if ( item.description.includes("Buffs one's ") ) special = TJS_SPECIAL_ABILITY_BOOST;
            else if ( txt.includes("magic flower") ) special = TJS_SPECIAL_POWER_UP_GENERIC;

            if ( txt.includes("orb") ) special = TJS_SPECIAL_ORB;
            if ( txt.includes("orb shards") ) special = TJS_SPECIAL_ORB_SHARDS;
        }
        // Hidden Key Items
        else if ( item.itypeId > 2 ) {
            special = TJS_SPECIAL_KEY_ITEM;
        }

        return special;
    }

    // Blank entries
    if ( item.name.length < 1 ) {
        special = TJS_SPECIAL_BLANK;

        return special;
    }
    // Debug items
    else if ( item.name.includes("TEST") ) {
        special = TJS_SPECIAL_DEBUG;

        return special;
    }
    // Comment Entries / Note "Items"
    else if ( txt.slice( 0, 2 ).includes("- ") ) {
        special = TJS_SPECIAL_NOTE;

        return special;
    }
    // Broken Items
    else if ( (weapon_type == 1) || (armor_type == 1) ) {
        special = TJS_SPECIAL_BROKEN;

        return special;
    }
    // Weapons and Backup Weapons
    else if ( (equip_type == 1) || (equip_type == 3) ) {
        if ( txt.includes("fire") ) special = TJS_SPECIAL_FIRE;
        else if ( txt.includes("flaming") ) special = TJS_SPECIAL_FIRE;
        else if ( txt.includes("incendiary") ) special = TJS_SPECIAL_FIRE;
        else if ( txt.includes("ice") ) special = TJS_SPECIAL_ICE;
        else if ( txt.includes("freezing") ) special = TJS_SPECIAL_ICE;
        else if ( txt.includes("lightning") ) special = TJS_SPECIAL_LIGHTNING;
        else if ( txt.includes("thunder") ) special = TJS_SPECIAL_LIGHTNING;
        else if ( txt.includes("electric") ) special = TJS_SPECIAL_LIGHTNING;
        else if ( txt.includes("shocking") ) special = TJS_SPECIAL_LIGHTNING;
        else if ( txt.includes("metal") ) special = TJS_SPECIAL_METAL;
        else if ( txt.includes("acid") ) special = TJS_SPECIAL_ACID;
        else if ( txt.includes("water") ) special = TJS_SPECIAL_WATER;
        else if ( txt.includes("earth") ) special = TJS_SPECIAL_EARTH;
        else if ( txt.includes("wind") ) special = TJS_SPECIAL_WIND;
        else if ( txt.includes("hasted") ) special = TJS_SPECIAL_HASTED;
        else if ( txt.includes("bleeding") ) special = TJS_SPECIAL_BLEEDING;
        else if ( txt.includes("blood") ) special = TJS_SPECIAL_BLEEDING;
        else if ( txt.includes("stunning") ) special = TJS_SPECIAL_STUNNING;
        else if ( txt.includes("stun") ) special = TJS_SPECIAL_STUNNING;
        else if ( txt.includes("antimagical") ) special = TJS_SPECIAL_ANTIMAGICAL;
        else if ( txt.includes("anti-magical") ) special = TJS_SPECIAL_ANTIMAGICAL;
        else if ( txt.includes("antimagic") ) special = TJS_SPECIAL_ANTIMAGICAL;
        else if ( txt.includes("anti-magic") ) special = TJS_SPECIAL_ANTIMAGICAL;
        else if ( txt.includes("draining") ) special = TJS_SPECIAL_ANTIMAGICAL;
        else if ( txt.includes("power") ) special = TJS_SPECIAL_POWER;
        else if ( txt.includes("mega") ) special = TJS_SPECIAL_POWER;
        else if ( txt.includes("rune") ) special = TJS_SPECIAL_WEAPON_RUNE;
        else if ( txt.includes("reflex") ) special = TJS_SPECIAL_WEAPON_REFLEX;

        if ( armor_type == 21 ) special = TJS_SPECIAL_MAGIC_WAND;
    }
    // Character Class Books
    else if ( equip_type == 4 ) {
        special = TJS_SPECIAL_CLASS_BOOK;
    }
    // Shields
    else if ( equip_type == 5 ) {
        if ( txt.includes("fire") ) special = TJS_SPECIAL_FIRE;
        else if ( txt.includes("flaming") ) special = TJS_SPECIAL_FIRE;
        else if ( txt.includes("incendiary") ) special = TJS_SPECIAL_FIRE;
        else if ( txt.includes("ice") ) special = TJS_SPECIAL_ICE;
        else if ( txt.includes("freezing") ) special = TJS_SPECIAL_ICE;
        else if ( txt.includes("lightning") ) special = TJS_SPECIAL_LIGHTNING;
        else if ( txt.includes("thunder") ) special = TJS_SPECIAL_LIGHTNING;
        else if ( txt.includes("electric") ) special = TJS_SPECIAL_LIGHTNING;
        else if ( txt.includes("shocking") ) special = TJS_SPECIAL_LIGHTNING;
        else if ( txt.includes("metal") ) special = TJS_SPECIAL_METAL;
        else if ( txt.includes("acid") ) special = TJS_SPECIAL_ACID;
        else if ( txt.includes("water") ) special = TJS_SPECIAL_WATER;
        else if ( txt.includes("earth") ) special = TJS_SPECIAL_EARTH;
        else if ( txt.includes("wind") ) special = TJS_SPECIAL_WIND;
        else if ( txt.includes("darkness") ) special = TJS_SPECIAL_DARKNESS;
        else if ( txt.includes("immortality") ) special = TJS_SPECIAL_IMMORTALITY;
        else if ( txt.includes("rainbow") ) special = TJS_SPECIAL_RAINBOW;
        else if ( txt.includes("rune") ) special = TJS_SPECIAL_ARMOR_RUNE;
        else if ( txt.includes("reflex") ) special = TJS_SPECIAL_ARMOR_REFLEX;
    }
    // Armored Clothing
    else if ( (equip_type >= 6) && (equip_type <= 11) ) {
        special = TJS_SPECIAL_NORMAL;

        if ( txt.includes("rune") ) special = TJS_SPECIAL_ARMOR_RUNE;
    }
    // Magical Clothing and accessories
    else if ( (equip_type >= 12) && (equip_type <= 13) ) {
        special = TJS_SPECIAL_ENCHANTED;

        if ( txt.includes("rune") ) special = TJS_SPECIAL_ARMOR_RUNE;
    }
    // Rings
    else if ( equip_type == 14 ) {
        special = TJS_SPECIAL_GEAR_MAGICAL_RING_LEVELED;

        if ( item.has_levels == false ) {
            if ( txt.includes("minor") ) special = TJS_SPECIAL_GEAR_MAGICAL_RING_MINOR;
            else if ( txt.includes("major") ) special = TJS_SPECIAL_GEAR_MAGICAL_RING_MAJOR;
            else if ( txt.includes("ultra") ) special = TJS_SPECIAL_GEAR_MAGICAL_RING_ULTRA;
        }
    }
    // Accessories
    else if ( equip_type == 15 ) {
        special = TJS_SPECIAL_NORMAL;

        if ( txt.includes("rune") ) special = TJS_SPECIAL_RUNE;
    }

    return special;
};
DataManager.TjsDataFile_CompareNames = function(a, b) {
    const txt_a = TJS_auto.RemoveLevelName( a.name, a.level );
    const txt_b = TJS_auto.RemoveLevelName( b.name, b.level );

    return txt_a - txt_b;
};
DataManager.PrepareTjsDataFiles = function() {
    // Weapons
    for ( let i = 1; i < $dataWeapons.length; i++ ) {
        var item = $dataWeapons[i];
        if ( !item ) continue;

        item.special = this.PrepareTjsData_Special( item );
    }

    // Armors
    for ( let i = 1; i < $dataArmors.length; i++ ) {
        var item = $dataArmors[i];
        if ( !item ) continue;

        item.special = this.PrepareTjsData_Special( item );
    }

    // Items
    for ( let i = 1; i < $dataItems.length; i++ ) {
        var item = $dataItems[i];
        if ( !item ) continue;

        item.special = this.PrepareTjsData_Special( item );
    }
};
DataManager.CreateTjsDataFile_Actors = function() {
    var data_array = [];
    data_array.push( null );
    var data_actors = [];

    for ( let i = 1; i < $dataActors.length; i++ ) {
        const item = $dataActors[i];
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( !item.custom_traits) continue;

        const data = TJS_auto.DeepCopy( item );

        data_actors.push( data );
    }

    return TJS_auto.DeepCopy( data_array.concat(data_actors) );
};
DataManager.CreateTjsDataFile_Enemies = function() {
    var data_array = [];
    data_array.push( null );
    var data_enemies = [];

    for ( let i = 1; i < $dataEnemies.length; i++ ) {
        const item = $dataEnemies[i];
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( !item.custom_traits) continue;

        const data = TJS_auto.DeepCopy( item );

        data_enemies.push( data );
    }
    data_enemies.sort( (a, b) => {
        const name_diff = a.name - b.name;
        const hp_diff = a.params[0] - b.params[0];

        return hp_diff || name_diff;
    });

    return TJS_auto.DeepCopy( data_array.concat(data_enemies) );
};
DataManager.CreateTjsDataFile_Weapons = function() {
    var data_array = [];
    data_array.push( null );
    var data_init = [];
    var data_unleveled = [];
    var data_leveled = [];

    // Broken Item Listings
    for ( i = 1; i <= 20; i++ )
        data_init.push( TJS_auto.DeepCopy($dataWeapons[i]) );

    // Unleveled Items
    for ( i = 21; i < $dataWeapons.length; i++ ) {
        var item = $dataWeapons[i].Deep();
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( item.has_levels == true ) continue;
        if ( item.id <= 20 ) continue;
        if ( item.special == TJS_SPECIAL_BROKEN ) continue;

        item.description = "";
        item.note = "";
        if ( item.description2 ) delete item.description2;

        data_unleveled.push( item );
    }

    // Leveled Items
    for ( i = 21; i < $dataWeapons.length; i++ ) {
        var item = $dataWeapons[i].Deep();
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( item.has_levels == false ) continue;
        if ( item.id <= 20 ) continue;
        if ( item.special == TJS_SPECIAL_BROKEN ) continue;

        item.description = "";
        item.note = "";
        if ( item.description2 ) delete item.description2;

        data_leveled.push( item );
    }

    data_unleveled.sort( (a, b) => {
        const weapon_type_diff = a.weapon_type - b.weapon_type;
        const special_diff = a.special - b.special;
        const name_diff = this.TjsDataFile_CompareNames( a, b );

        return weapon_type_diff || special_diff || name_diff;
    });
    data_leveled.sort( (a, b) => {
        const weapon_type_diff = a.weapon_type - b.weapon_type;
        const special_diff = a.special - b.special;
        const level_diff = a.level - b.level;
        const name_diff = this.TjsDataFile_CompareNames( a, b );

        return weapon_type_diff || special_diff || name_diff || level_diff;
    });

    return TJS_auto.DeepCopy( data_array.concat(data_init, data_leveled, data_unleveled) );
};
DataManager.CreateTjsDataFile_Armors = function() {
    var data_array = [];
    data_array.push( null );
    var data_init = [];
    var data_unleveled = [];
    var data_leveled = [];

    // Broken Item Listings
    for ( i = 1; i <= 20; i++ )
        data_init.push( TJS_auto.DeepCopy($dataArmors[i]) );

    // Unleveled Items
    for ( i = 21; i < $dataArmors.length; i++ ) {
        var item = $dataArmors[i].Deep();
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( item.has_levels == true ) continue;
        if ( item.id <= 20 ) continue;
        if ( item.special == TJS_SPECIAL_BROKEN ) continue;
        if ( item.special == TJS_SPECIAL_GEAR_MAGICAL_RING_MINOR ) continue;
        if ( item.special == TJS_SPECIAL_GEAR_MAGICAL_RING_MAJOR ) continue;
        if ( item.special == TJS_SPECIAL_GEAR_MAGICAL_RING_ULTRA ) continue;

        item.description = "";
        item.note = "";
        if ( item.description2 ) delete item.description2;

        data_unleveled.push( item );
    }

    // Leveled Items
    for ( i = 21; i < $dataArmors.length; i++ ) {
        var item = $dataArmors[i].Deep();
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( item.has_levels == false ) continue;
        if ( item.id <= 20 ) continue;
        if ( item.special == TJS_SPECIAL_BROKEN ) continue;
        if ( item.special == TJS_SPECIAL_GEAR_MAGICAL_RING_MINOR ) continue;
        if ( item.special == TJS_SPECIAL_GEAR_MAGICAL_RING_MAJOR ) continue;
        if ( item.special == TJS_SPECIAL_GEAR_MAGICAL_RING_ULTRA ) continue;

        item.description = "";
        item.note = "";
        if ( item.description2 ) delete item.description2;

        data_leveled.push( item );
    }

    data_unleveled.sort( (a, b) => {
        const equip_type_diff = a.equip_type - b.equip_type;
        const armor_type_diff = a.armor_type - b.armor_type;
        const special_diff = a.special - b.special;
        const name_diff = this.TjsDataFile_CompareNames( a, b );

        return equip_type_diff || armor_type_diff || special_diff || name_diff;
    });
    data_leveled.sort( (a, b) => {
        const equip_type_diff = a.equip_type - b.equip_type;
        const armor_type_diff = a.armor_type - b.armor_type;
        const special_diff = a.special - b.special;
        const level_diff = a.level - b.level;
        const name_diff = this.TjsDataFile_CompareNames( a, b );

        return equip_type_diff || armor_type_diff || special_diff || name_diff || level_diff;
    });

    return TJS_auto.DeepCopy( data_array.concat(data_init, data_leveled, data_unleveled) );
};
DataManager.CreateTjsDataFile_Items = function() {
    var data_array = [];
    data_array.push( null );
    var data_unleveled = [];
    var data_leveled = [];

    // Unleveled Items
    for ( i = 1; i < $dataItems.length; i++ ) {
        const item = $dataItems[i].Deep();
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( item.has_levels == true ) continue;

        data_unleveled.push( item );
    }

    // Leveled Items
    for ( i = 1; i < $dataItems.length; i++ ) {
        const item = $dataItems[i].Deep();
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( item.has_levels == false ) continue;

        data_leveled.push( item );
    }

    data_unleveled.sort( (a, b) => {
        const special_diff = a.special - b.special;
        const id_diff = a.id - b.id;

        return special_diff || id_diff;
    });
    data_leveled.sort( (a, b) => {
        const special_diff = a.special - b.special;
        const id_diff = a.id - b.id;

        return special_diff || id_diff;
    });

    return TJS_auto.DeepCopy( data_array.concat(data_leveled, data_unleveled) );
};
DataManager.CreateTjsDataFile_Skills = function() {
    var data_array = [];
    data_array.push( null );
    var data_init = [];
    var data_with_types = [];
    var data_without_types = [];
    var data_enemy = [];
    var data_special = [];
    var data_unarmed = [];
    var data_miscellaneous = [];

    const blank_skill = TJS_auto.DeepCopy( $dataSkills[4] );

    // Initial Listings
    for ( i = 1; i <= 4; i++ )
        data_init.push( TJS_auto.DeepCopy($dataSkills[i]) );

    // Skills with types defined
    for ( i = 5; i < $dataSkills.length; i++ ) {
        const item = $dataSkills[i];
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( (item.equip_type == 0) && (item.weapon_type == 0) && (item.armor_type == 0) ) continue;
        if ( item.note.includes("<tjsEnemySkill>") == true ) continue;
        if ( item.note.includes("<tjsSpecialSkill>") == true ) continue;
        if ( item.note.includes("<tjsUnarmedCombat>") == true ) continue;
        if ( item.note.includes("<tjsMiscellaneous>") == true ) continue;

        data_with_types.push( TJS_auto.DeepCopy(item) );
    }

    // Skills without types defined
    for ( i = 5; i < $dataSkills.length; i++ ) {
        const item = $dataSkills[i];
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( (item.equip_type > 0) || (item.weapon_type > 0) || (item.armor_type > 0) ) continue;
        if ( item.note.includes("<tjsEnemySkill>") == true ) continue;
        if ( item.note.includes("<tjsSpecialSkill>") == true ) continue;
        if ( item.note.includes("<tjsUnarmedCombat>") == true ) continue;
        if ( item.note.includes("<tjsMiscellaneous>") == true ) continue;

        data_without_types.push( TJS_auto.DeepCopy(item) );
    }

    // Enemy Skills
    for ( i = 5; i < $dataSkills.length; i++ ) {
        const item = $dataSkills[i];
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( item.note.includes("<tjsEnemySkill>") == false ) continue;
        if ( item.note.includes("<tjsSpecialSkill>") == true ) continue;
        if ( item.note.includes("<tjsUnarmedCombat>") == true ) continue;
        if ( item.note.includes("<tjsMiscellaneous>") == true ) continue;

        data_enemy.push( TJS_auto.DeepCopy(item) );
    }

    // Special Skills
    for ( i = 5; i < $dataSkills.length; i++ ) {
        const item = $dataSkills[i];
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( item.note.includes("<tjsEnemySkill>") == true ) continue;
        if ( item.note.includes("<tjsSpecialSkill>") == false ) continue;
        if ( item.note.includes("<tjsUnarmedCombat>") == true ) continue;
        if ( item.note.includes("<tjsMiscellaneous>") == true ) continue;

        data_special.push( TJS_auto.DeepCopy(item) );
    }

    // Unarmed Combat Skills
    for ( i = 5; i < $dataSkills.length; i++ ) {
        const item = $dataSkills[i];
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( item.note.includes("<tjsEnemySkill>") == true ) continue;
        if ( item.note.includes("<tjsSpecialSkill>") == true ) continue;
        if ( item.note.includes("<tjsUnarmedCombat>") == false ) continue;
        if ( item.note.includes("<tjsMiscellaneous>") == true ) continue;

        data_unarmed.push( TJS_auto.DeepCopy(item) );
    }

    // Miscellaneous Skills
    for ( i = 5; i < $dataSkills.length; i++ ) {
        const item = $dataSkills[i];
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;
        if ( item.note.includes("<tjsEnemySkill>") == true ) continue;
        if ( item.note.includes("<tjsSpecialSkill>") == true ) continue;
        if ( item.note.includes("<tjsUnarmedCombat>") == true ) continue;
        if ( item.note.includes("<tjsMiscellaneous>") == false ) continue;

        data_miscellaneous.push( TJS_auto.DeepCopy(item) );
    }

    var note_unarmed = TJS_auto.DeepCopy( blank_skill );
    var note_special = TJS_auto.DeepCopy( blank_skill );
    var note_miscellaneous = TJS_auto.DeepCopy( blank_skill );
    var note_enemy = TJS_auto.DeepCopy( blank_skill );
    var note_gear = TJS_auto.DeepCopy( blank_skill );
    var note_other = TJS_auto.DeepCopy( blank_skill );

    note_unarmed.id = -1000; note_unarmed.name = "- Unarmed Combat";
    note_special.id = -1000; note_special.name = "- Special";
    note_miscellaneous.id = -1000; note_miscellaneous.name = "- Miscellaneous";
    note_enemy.id = -1000; note_enemy.name = "- Enemy Skills";
    note_gear.id = -1000; note_gear.name = "- Skills and Gear";
    note_other.id = -1000; note_other.name = "- Other Skills";

    data_unarmed.push( note_unarmed );
    data_special.push( note_special );
    data_miscellaneous.push( note_miscellaneous );
    data_enemy.push( note_enemy );
    data_with_types.push( note_gear );
    data_without_types.push( note_other );

    for ( let i = 1; i < $dataSystem.weaponTypes.length; i++ ) {
        var note = TJS_auto.DeepCopy( blank_skill );
        note.name = "--" + (TJS_auto.GetNameForWeaponType(i)).Capitalize();
        note.id = -1000;
        note.equip_type = 1;
        note.weapon_type = i;
        note.armor_type = 0;

        data_with_types.push( note );
    }
    for ( let i = 2; i < $dataSystem.equipTypes.length; i++ ) {
        var note = TJS_auto.DeepCopy( blank_skill );
        note.name = "--" + (TJS_auto.GetNameForEquipmentType(i)).Capitalize();
        note.id = -1000;
        note.equip_type = i;
        note.weapon_type = 0;
        note.armor_type = 0;

        data_with_types.push( note );
    }

    data_unarmed.sort( (a, b) => {
        const id_diff = a.id - b.id;

        return id_diff;
    });
    data_special.sort( (a, b) => {
        const id_diff = a.id - b.id;

        return id_diff;
    });
    data_miscellaneous.sort( (a, b) => {
        const id_diff = a.id - b.id;

        return id_diff;
    });
    data_with_types.sort( (a, b) => {
        const weapon_type_diff = a.weapon_type - b.weapon_type;
        const equip_type_diff = a.equip_type - b.equip_type;
        const armor_type_diff = a.armor_type - b.armor_type;
        const id_diff = a.id - b.id;

        return equip_type_diff || weapon_type_diff || armor_type_diff || id_diff;
    });
    data_without_types.sort( (a, b) => {
        const id_diff = a.id - b.id;

        return id_diff;
    });
    data_enemy.sort( (a, b) => {
        const a_uses_tp = a.tpCost > 0 ? 1 : 0;
        const b_uses_tp = b.tpCost > 0 ? 1 : 0;

        const id_diff = a.id - b.id;
        const tp_diff = a_uses_tp - b_uses_tp;

        return tp_diff || id_diff;
    });

    return TJS_auto.DeepCopy( data_array.concat(data_init, data_unarmed, data_special, data_miscellaneous, data_with_types, data_without_types, data_enemy) );
};
DataManager.CreateTjsDataFile_States = function() {
    var data_array = [];
    data_array.push( null );
    var data_states = [];

    // Classes
    for ( i = 1; i < $dataStates.length; i++ ) {
        var item = TJS_auto.DeepCopy( $dataStates[i] );
        if ( !item ) continue;
        if ( item.name.length < 1 ) continue;
        if ( item.name[0] === "-" ) continue;

        data_states.push( item );
    }

    return TJS_auto.DeepCopy( data_array.concat(data_states) );
};
DataManager.WriteOldFormatDataFile_Actors = function(data_array) {
    for ( var data of data_array ) {
        if ( !data ) continue;
        var custom_traits = data.custom_traits;

        data.note = "";

        data.note += "<tjsTraitsToHitPhysical:[" + Math.round(custom_traits.to_hit_physical_add * 100) + "," + (Math.round(custom_traits.to_hit_physical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsToHitMagical:[" + Math.round(custom_traits.to_hit_magical_add * 100) + "," + (Math.round(custom_traits.to_hit_magical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocus:[" + Math.round(custom_traits.magic_focus_add) + "," + (Math.round(custom_traits.magic_focus_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocusDebuff:" + (Math.round(custom_traits.magic_focus_debuff_rate * 100) / 100) + ">\n";
        data.note += "<tjsTraitsMaxTacticalPoints:[" + Math.round(custom_traits.max_tactical_points_add) + "," + (Math.round(custom_traits.max_tactical_points_multiply * 100000) / 1000) + "]>\n";
        data.note += "<tjsTraitsCriticalHitRate:[" + (Math.round(custom_traits.physical_critical_hit_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_hit_rate * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsCriticalEvadeRate:[" + (Math.round(custom_traits.physical_critical_evade_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_evade_rate * 10000) / 100) + "]>\n";

        data.note += "<tjsInfo:" + data.profile.AutoFormat(0) + ">\n";
        data.note += "<tjsInfo2:" + data.description2 + ">\n";

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                trait.value = 0;
            }
        }

        delete data.custom_traits;
        data.profile = "";
        delete data.description2;
    }

    StorageManager.SaveToJSON( "dev", "Actors.json", data_array );
};
DataManager.WriteOldFormatDataFile_Classes = function(data_array) {
    for ( var data of data_array ) {
        if ( !data ) continue;
        var custom_traits = data.custom_traits;

        data.note = "";

        data.note += "<tjsTraitsToHitPhysical:[" + Math.round(custom_traits.to_hit_physical_add * 100) + "," + (Math.round(custom_traits.to_hit_physical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsToHitMagical:[" + Math.round(custom_traits.to_hit_magical_add * 100) + "," + (Math.round(custom_traits.to_hit_magical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocus:[" + Math.round(custom_traits.magic_focus_add) + "," + (Math.round(custom_traits.magic_focus_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocusDebuff:" + (Math.round(custom_traits.magic_focus_debuff_rate * 100) / 100) + ">\n";
        data.note += "<tjsTraitsMaxTacticalPoints:[" + Math.round(custom_traits.max_tactical_points_add) + "," + (Math.round(custom_traits.max_tactical_points_multiply * 100000) / 1000) + "]>\n";
        data.note += "<tjsTraitsCriticalHitRate:[" + (Math.round(custom_traits.physical_critical_hit_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_hit_rate * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsCriticalEvadeRate:[" + (Math.round(custom_traits.physical_critical_evade_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_evade_rate * 10000) / 100) + "]>\n";

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                trait.value = 0;
            }
        }

        delete data.custom_traits;
    }

    StorageManager.SaveToJSON( "dev", "Classes.json", data_array );
};
DataManager.WriteOldFormatDataFile_Enemies = function(data_array) {
    for ( var data of data_array ) {
        if ( !data ) continue;
        var custom_traits = data.custom_traits;

        data.note = "";

        if ( data.encounter_categories.length > 0 ) {
            var txt_encounter_categories = "<tjsEncounterCategories:[\n";

            for ( let i = 0; i < data.encounter_categories.length; i++ ) {
                txt_encounter_categories += '\"' + String( $dataTroops[data.encounter_categories[i]].name ) + '\"';
                if ( i < (data.encounter_categories.length - 1) )
                    txt_encounter_categories += ",\n";
            }

            txt_encounter_categories += "]>\n";

            data.note += txt_encounter_categories;
        }

        data.params[0] /= tjs_enemy_hp_adjust * tjs_master_hp_adjust;
        data.params[1] /= tjs_enemy_mp_adjust;
        data.params[2] /= tjs_enemy_strength_adjust;
        data.params[3] /= tjs_enemy_defense_adjust;
        data.params[4] /= tjs_enemy_mana_adjust;
        data.params[5] /= tjs_enemy_magic_defense_adjust;
        data.params[6] /= tjs_enemy_agility_adjust;
        data.custom_traits.magic_focus_add /= tjs_enemy_magic_focus_adjust;
        data.params[7] /= tjs_enemy_luck_adjust;

        for ( var param of data.params )
            param = Math.round( param );

        data.note += "<tjsInitTp:" + data.initial_tp + ">\n";

        data.note += "<tjsTraitsToHitPhysical:[" + Math.round(custom_traits.to_hit_physical_add * 100) + "," + (Math.round(custom_traits.to_hit_physical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsToHitMagical:[" + Math.round(custom_traits.to_hit_magical_add * 100) + "," + (Math.round(custom_traits.to_hit_magical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocus:[" + Math.round(custom_traits.magic_focus_add) + "," + (Math.round(custom_traits.magic_focus_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocusDebuff:" + (Math.round(custom_traits.magic_focus_debuff_rate * 10000) / 100) + ">\n";
        data.note += "<tjsTraitsMaxTacticalPoints:[" + Math.round(custom_traits.max_tactical_points_add) + "," + (Math.round(custom_traits.max_tactical_points_multiply * 100000) / 1000) + "]>\n";
        data.note += "<tjsTraitsCriticalHitRate:[" + (Math.round(custom_traits.physical_critical_hit_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_hit_rate * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsCriticalEvadeRate:[" + (Math.round(custom_traits.physical_critical_evade_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_evade_rate * 10000) / 100) + "]>\n";

        if ( data.flying == true ) data.note += "<tjsFlying>\n";

        if ( data.attack_levels.length > 0 ) {
            var txt_attack_levels = "<tjsAttackLevels:[";
            if ( data.attack_levels.length > 5 ) txt_attack_levels += "\n";

            for ( let i = 0; i < data.attack_levels.length; i++ ) {
                txt_attack_levels += String( Math.round(data.attack_levels[i]) );
                if ( i < (data.attack_levels.length - 1) ) {
                    txt_attack_levels += ",";

                    if ( (i > 0) && ((data.attack_levels.length % 5) == 0) )
                        txt_attack_levels += "\n";
                }
            }

            if ( data.attack_levels.length > 5 ) txt_attack_levels += "\n";
            txt_attack_levels += "]>\n";

            data.note += txt_attack_levels;
        }

        if ( data.skill_rule_list_text ) {
            data.note += "<tjsSkillRules:" + data.skill_rule_list_text + ">\n";
        }

        data.note += "<tjsInfo:" + data.profile + ">\n";
        data.note += "<tjsInfo2:" + data.description2 + ">\n";

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                trait.value = 0;
            }
        }

        delete data.encounter_categories;
        delete data.flying;
        delete data.initial_tp;
        delete data.attack_levels;
        delete data.skill_rule_list_text;

        delete data.custom_traits;
        data.profile = "";
        delete data.description2;
    }

    StorageManager.SaveToJSON( "dev", "Enemies.json", data_array );
};
DataManager.WriteOldFormatDataFile_Weapons = function(data_array) {
    for ( var data of data_array ) {
        if ( !data ) continue;
        var custom_traits = data.custom_traits;

        data.note = "";

        data.note += "<tjsLevel:" + data.level + ">\n";
        if ( data.leveled_by_chapter_price == true ) data.note += "<tjsWeapon>\n";
        data.note += "<tjsEquipType:" + TJS_auto.GetNameForEquipmentType( data.equip_type ) + ">\n";
        data.note += "<tjsWeaponType:" + TJS_auto.GetNameForWeaponType( data.weapon_type ) + ">\n";
        data.note += "<tjsArmorType:" + TJS_auto.GetNameForArmorType( data.armor_type ) + ">\n";

        if ( data.durability == TJS_auto.GetNumberOfUsesForWeaponAuto( TJS_auto.GetNameForWeaponType(data.weapon_type) ) )
            data.note += "<tjsWeaponDurability:auto>\n";
        else
            data.note += "<tjsWeaponDurability:" + data.durability + ">\n";

        if ( data.max_count != tjs_max_items )
            data.note += "<tjsMaxCount:" + data.max_count + ">\n";

        if ( data.treasure_type == TJS_TREASURE_PRIMARY_NONE ) data.note += "<tjsTreasurePrimaryNone>\n";
        else if ( data.treasure_type == TJS_TREASURE_PRIMARY_COMMON ) data.note += "<tjsTreasurePrimaryCommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_PRIMARY_UNCOMMON ) data.note += "<tjsTreasurePrimaryUncommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_PRIMARY_RARE ) data.note += "<tjsTreasurePrimaryRare>\n";
        else if ( data.treasure_type == TJS_TREASURE_SECONDARY_COMMON ) data.note += "<tjsTreasureSecondaryCommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_SECONDARY_UNCOMMON ) data.note += "<tjsTreasureSecondaryUncommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_SECONDARY_RARE ) data.note += "<tjsTreasureSecondaryRare>\n";

        data.note += "<tjsTraitsToHitPhysical:[" + Math.round(custom_traits.to_hit_physical_add * 100) + "," + (Math.round(custom_traits.to_hit_physical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsToHitMagical:[" + Math.round(custom_traits.to_hit_magical_add * 100) + "," + (Math.round(custom_traits.to_hit_magical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocus:[" + Math.round(custom_traits.magic_focus_add) + "," + (Math.round(custom_traits.magic_focus_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocusDebuff:" + (Math.round(custom_traits.magic_focus_debuff_rate * 100) / 100) + ">\n";
        data.note += "<tjsTraitsMaxTacticalPoints:[" + Math.round(custom_traits.max_tactical_points_add) + "," + (Math.round(custom_traits.max_tactical_points_multiply * 100000) / 1000) + "]>\n";
        data.note += "<tjsTraitsCriticalHitRate:[" + (Math.round(custom_traits.physical_critical_hit_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_hit_rate * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsCriticalEvadeRate:[" + (Math.round(custom_traits.physical_critical_evade_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_evade_rate * 10000) / 100) + "]>\n";

        if ( data.has_levels == true )
            data.note += "<tjsHasLevels>\n";

        data.note += "<tjsSpecial:" + data.special + ">\n";

        data.description = "";
        // data.note += "<tjsInfo:" + data.description + ">\n";
        // data.note += "<tjsInfo2:" + data.description2 + ">\n";

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                trait.value = 0;
            }
        }

        delete data.level;
        delete data.has_levels;
        delete data.equip_type;
        delete data.weapon_type;
        delete data.armor_type;
        delete data.durability;
        delete data.max_count;
        delete data.leveled_by_chapter_price;
        delete data.treasure_type;
        delete data.special;

        delete data.custom_traits;
        data.description = "";
        delete data.description2;
    }

    StorageManager.SaveToJSON( "dev", "Weapons.json", data_array );
};
DataManager.WriteOldFormatDataFile_Armors = function(data_array) {
    for ( var data of data_array ) {
        if ( !data ) continue;
        var custom_traits = data.custom_traits;

        data.note = "";

        data.note += "<tjsLevel:" + data.level + ">\n";
        if ( data.leveled_by_chapter_price == true ) data.note += "<tjsGear>\n";
        data.note += "<tjsEquipType:" + TJS_auto.GetNameForEquipmentType( data.equip_type ) + ">\n";
        data.note += "<tjsWeaponType:" + TJS_auto.GetNameForWeaponType( data.weapon_type ) + ">\n";
        data.note += "<tjsArmorType:" + TJS_auto.GetNameForArmorType( data.armor_type ) + ">\n";

        if ( data.durability == TJS_auto.GetNumberOfUsesForArmorAuto( TJS_auto.GetNameForArmorType(data.armor_type), TJS_auto.GetNameForEquipmentType(data.equip_type) ) )
            data.note += "<tjsWeaponDurability:auto>\n";
        else
            data.note += "<tjsWeaponDurability:" + data.durability + ">\n";

        if ( data.max_count != tjs_max_items )
            data.note += "<tjsMaxCount:" + data.max_count + ">\n";

        if ( data.treasure_type == TJS_TREASURE_PRIMARY_NONE ) data.note += "<tjsTreasurePrimaryNone>\n";
        else if ( data.treasure_type == TJS_TREASURE_PRIMARY_COMMON ) data.note += "<tjsTreasurePrimaryCommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_PRIMARY_UNCOMMON ) data.note += "<tjsTreasurePrimaryUncommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_PRIMARY_RARE ) data.note += "<tjsTreasurePrimaryRare>\n";
        else if ( data.treasure_type == TJS_TREASURE_SECONDARY_COMMON ) data.note += "<tjsTreasureSecondaryCommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_SECONDARY_UNCOMMON ) data.note += "<tjsTreasureSecondaryUncommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_SECONDARY_RARE ) data.note += "<tjsTreasureSecondaryRare>\n";

        data.note += "<tjsTraitsToHitPhysical:[" + Math.round(custom_traits.to_hit_physical_add * 100) + "," + (Math.round(custom_traits.to_hit_physical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsToHitMagical:[" + Math.round(custom_traits.to_hit_magical_add * 100) + "," + (Math.round(custom_traits.to_hit_magical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocus:[" + Math.round(custom_traits.magic_focus_add) + "," + (Math.round(custom_traits.magic_focus_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocusDebuff:" + (Math.round(custom_traits.magic_focus_debuff_rate * 100) / 100) + ">\n";
        data.note += "<tjsTraitsMaxTacticalPoints:[" + Math.round(custom_traits.max_tactical_points_add) + "," + (Math.round(custom_traits.max_tactical_points_multiply * 100000) / 1000) + "]>\n";
        data.note += "<tjsTraitsCriticalHitRate:[" + (Math.round(custom_traits.physical_critical_hit_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_hit_rate * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsCriticalEvadeRate:[" + (Math.round(custom_traits.physical_critical_evade_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_evade_rate * 10000) / 100) + "]>\n";

        if ( data.has_levels == true )
            data.note += "<tjsHasLevels>\n";

        data.note += "<tjsSpecial:" + data.special + ">\n";

        data.description = "";
        // data.note += "<tjsInfo:" + data.description + ">\n";
        // data.note += "<tjsInfo2:" + data.description2 + ">\n";

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                trait.value = 0;
            }
        }

        delete data.level;
        delete data.has_levels;
        delete data.equip_type;
        delete data.weapon_type;
        delete data.armor_type;
        delete data.durability;
        delete data.max_count;
        delete data.leveled_by_chapter_price;
        delete data.treasure_type;
        delete data.special;

        delete data.custom_traits;
        data.description = "";
        delete data.description2;
    }

    StorageManager.SaveToJSON( "dev", "Armors.json", data_array );
};
DataManager.WriteOldFormatDataFile_Items = function(data_array) {
    for ( var data of data_array ) {
        if ( !data ) continue;
        var custom_effects = data.custom_effects;

        data.note = "";

        data.note += "<tjsLevel:" + data.level + ">\n";
        if ( data.leveled_by_chapter_price == true ) data.note += "<tjsLeveledByChapterPrice>\n";
        data.note += "<tjsEquipType:" + TJS_auto.GetNameForEquipmentType( data.equip_type ) + ">\n";
        data.note += "<tjsWeaponType:" + TJS_auto.GetNameForWeaponType( data.weapon_type ) + ">\n";
        data.note += "<tjsArmorType:" + TJS_auto.GetNameForArmorType( data.armor_type ) + ">\n";
        data.note += "<tjsAimAdjust:" + Math.round(data.aim_adjust) + ">\n";
        data.note += "<tjsSkillTypeName:" + data.skill_type_name + ">\n";
        if ( data.max_count != tjs_max_items )
            data.note += "<tjsMaxCount:" + data.max_count + ">\n";
        data.note += "<tjsLevelCount:" + Math.round(data.level_count) + ">\n";
        data.note += "<tjsFoodPrice:" + Math.round(data.food_price) + ">\n";
        data.note += "<tjsPriority:" + String(Math.round( data.priority * 100 ) / 100) + ">\n";
        if ( data.ranged ) data.note += "<tjsRanged>\n";
        var half_physical_auto = TJS_auto.GetHalfPhysicalValueForSkill( TJS_auto.GetNameForEquipmentType( data.equip_type ), TJS_auto.GetNameForWeaponType( data.weapon_type ), TJS_auto.GetNameForArmorType( data.armor_type ) );
        if ( data.damage.elementId == 1 ) half_physical_auto = 1;
        if ( data.half_physical == half_physical_auto )
            data.note += "<tjsHalfPhysical:auto>\n";
        else
            data.note += "<tjsHalfPhysical:" + String( Math.round(data.half_physical * 10000) / 10000 ) + ">\n";

        if ( data.treasure_type == TJS_TREASURE_PRIMARY_NONE ) data.note += "<tjsTreasurePrimaryNone>\n";
        else if ( data.treasure_type == TJS_TREASURE_PRIMARY_COMMON ) data.note += "<tjsTreasurePrimaryCommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_PRIMARY_UNCOMMON ) data.note += "<tjsTreasurePrimaryUncommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_PRIMARY_RARE ) data.note += "<tjsTreasurePrimaryRare>\n";
        else if ( data.treasure_type == TJS_TREASURE_SECONDARY_COMMON ) data.note += "<tjsTreasureSecondaryCommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_SECONDARY_UNCOMMON ) data.note += "<tjsTreasureSecondaryUncommon>\n";
        else if ( data.treasure_type == TJS_TREASURE_SECONDARY_RARE ) data.note += "<tjsTreasureSecondaryRare>\n";

        if ( data.auto_message == TJS_SKILL_MESSAGE_CUSTOM ) data.note += "<tjsMessageCustom>\n";
        if ( data.auto_message == TJS_SKILL_MESSAGE_USES ) data.note += "<tjsMessageUses>\n";
        if ( data.auto_message == TJS_SKILL_MESSAGE_ATTACKS ) data.note += "<tjsMessageAttacks>\n";
        if ( data.auto_message == TJS_SKILL_MESSAGE_ATTACKS_WITH ) data.note += "<tjsMessageAttacksWith>\n";
        if ( data.auto_message == TJS_SKILL_MESSAGE_CASTS ) data.note += "<tjsMessageCasts>\n";
        if ( data.message2.length > 0 ) data.note += "<tjsMessageOverride2:" + data.message2 + ">\n";

        if ( data.tpGain > 100 ) data.note += "<tjsTpGain:" + Math.round(data.tpGain) + ">\n";

        if ( custom_effects.apply_buff_magic_focus != 0 ) data.note += "<tjsEffectsBuffMagicFocus:" + Math.round(custom_effects.apply_buff_magic_focus) + ">\n";
        if ( custom_effects.apply_debuff_magic_focus != 0 ) data.note += "<tjsEffectsDebuffMagicFocus:" + Math.round(custom_effects.apply_debuff_magic_focus) + ">\n";
        if ( custom_effects.remove_buff_magic_focus == true ) data.note += "<tjsEffectsRemoveBuffMagicFocus>\n";
        if ( custom_effects.remove_debuff_magic_focus == true ) data.note += "<tjsEffectsRemoveDebuffMagicFocus>\n";
        if ( custom_effects.alter_tactical_points != 0 ) data.note += "<tjsEffectsAlterTacticalPoints:" + String(Math.round(custom_effects.alter_tactical_points * 100) / 100) + ">\n";
        if ( custom_effects.alter_magic_focus != 0 ) data.note += "<tjsEffectsAlterMagicFocus:" + Math.round(custom_effects.alter_magic_focus) + ">\n";

        if ( data.has_levels == true )
            data.note += "<tjsHasLevels>\n";

        data.note += "<tjsSpecial:" + data.special + ">\n";

        data.note += "<tjsInfo:" + data.description.AutoFormat(0) + ">\n";
        data.note += "<tjsInfo2:" + data.description2 + ">\n";

        delete data.level;
        delete data.has_levels;
        delete data.equip_type;
        delete data.weapon_type;
        delete data.armor_type;
        delete data.aim_adjust;
        delete data.skill_type_name;
        delete data.max_count;
        delete data.leveled_by_chapter_price;
        delete data.level_count;
        delete data.food_price;
        delete data.priority;
        delete data.ranged;
        delete data.half_physical;
        delete data.treasure_type;
        delete data.special;
        delete data.auto_message;

        delete data.custom_effects;
        data.description = "";
        delete data.description2;
    }

    StorageManager.SaveToJSON( "dev", "Items.json", data_array );
};
DataManager.WriteOldFormatDataFile_Skills = function(data_array) {
    for ( var data of data_array ) {
        if ( !data ) continue;
        var custom_effects = data.custom_effects;

        data.note += "<tjsEquipType:" + TJS_auto.GetNameForEquipmentType( data.equip_type ) + ">\n";
        data.note += "<tjsWeaponType:" + TJS_auto.GetNameForWeaponType( data.weapon_type ) + ">\n";
        data.note += "<tjsArmorType:" + TJS_auto.GetNameForArmorType( data.armor_type ) + ">\n";
        data.aim_adjust -= TJS_auto.GetAimAdjustForSkill( TJS_auto.GetNameForEquipmentType( data.equip_type ), TJS_auto.GetNameForWeaponType( data.weapon_type ), TJS_auto.GetNameForArmorType( data.armor_type ) );
        data.note += "<tjsAimAdjust:" + Math.round(data.aim_adjust) + ">\n";
        const auto_type_name = TJS_auto.GetSkillTypeNameAuto( TJS_auto.GetNameForWeaponType( data.weapon_type ), TJS_auto.GetNameForArmorType( data.armor_type ), TJS_auto.GetNameForEquipmentType( data.equip_type ) );
        if ( auto_type_name !== data.skill_type_name ) data.note += "<tjsSkillTypeName:" + data.skill_type_name + ">\n";
        data.note += "<tjsPriority:" + String(Math.round( data.priority * 100 ) / 100) + ">\n";
        if ( data.ranged ) data.note += "<tjsRanged>\n";
        var half_physical_auto = TJS_auto.GetHalfPhysicalValueForSkill( TJS_auto.GetNameForEquipmentType( data.equip_type ), TJS_auto.GetNameForWeaponType( data.weapon_type ), TJS_auto.GetNameForArmorType( data.armor_type ) );
        if ( data.damage.elementId == 1 ) half_physical_auto = 1;
        if ( data.half_physical == half_physical_auto )
            data.note += "<tjsHalfPhysical:auto>\n";
        else
            data.note += "<tjsHalfPhysical:" + String( Math.round(data.half_physical * 10000) / 10000 ) + ">\n";

        if ( data.durability_uses != 1 ) data.note += "<tjsDurabilityUses:" + String( Math.round(data.durability_uses * 10000) / 10000 ) + ">\n";
        if ( data.show_level ) data.note += "<tjsShowItemLevelInSkillCost>\n";

        if ( data.auto_message == TJS_SKILL_MESSAGE_CUSTOM ) data.note += "<tjsMessageCustom>\n";
        if ( data.auto_message == TJS_SKILL_MESSAGE_USES ) data.note += "<tjsMessageUses>\n";
        if ( data.auto_message == TJS_SKILL_MESSAGE_ATTACKS ) data.note += "<tjsMessageAttacks>\n";
        if ( data.auto_message == TJS_SKILL_MESSAGE_ATTACKS_WITH ) data.note += "<tjsMessageAttacksWith>\n";
        if ( data.auto_message == TJS_SKILL_MESSAGE_CASTS ) data.note += "<tjsMessageCasts>\n";
        if ( data.message2.length > 0 ) data.note += "<tjsMessageOverride2:" + data.message2 + ">\n";

        if ( data.tpGain > 100 ) data.note += "<tjsTpGain:" + Math.round(data.tpGain) + ">\n";
        if ( data.tpCost > 100 ) data.note += "<tjsTpCost:" + Math.round(data.tpCost) + ">\n";

        if ( custom_effects.apply_buff_magic_focus != 0 ) data.note += "<tjsEffectsBuffMagicFocus:" + Math.round(custom_effects.apply_buff_magic_focus) + ">\n";
        if ( custom_effects.apply_debuff_magic_focus != 0 ) data.note += "<tjsEffectsDebuffMagicFocus:" + Math.round(custom_effects.apply_debuff_magic_focus) + ">\n";
        if ( custom_effects.remove_buff_magic_focus == true ) data.note += "<tjsEffectsRemoveBuffMagicFocus>\n";
        if ( custom_effects.remove_debuff_magic_focus == true ) data.note += "<tjsEffectsRemoveDebuffMagicFocus>\n";
        if ( custom_effects.alter_tactical_points != 0 ) data.note += "<tjsEffectsAlterTacticalPoints:" + String(Math.round(custom_effects.alter_tactical_points * 100) / 100) + ">\n";
        if ( custom_effects.alter_magic_focus != 0 ) data.note += "<tjsEffectsAlterMagicFocus:" + Math.round(custom_effects.alter_magic_focus) + ">\n";

        data.note += "<tjsInfo:" + data.description.AutoFormat(0) + ">\n";

        delete data.equip_type;
        delete data.weapon_type;
        delete data.armor_type;
        delete data.aim_adjust;
        delete data.skill_type_name;
        delete data.priority;
        delete data.ranged;
        delete data.half_physical;
        delete data.durability_uses;
        delete data.show_level;
        delete data.auto_message;

        delete data.custom_effects;
        data.description = "";
    }

    StorageManager.SaveToJSON( "dev", "Skills.json", data_array );
};
DataManager.WriteOldFormatDataFile_States = function(data_array) {
    for ( var data of data_array ) {
        if ( !data ) continue;
        var custom_traits = data.custom_traits;

        data.note = "";

        data.note += "<tjsLevel:" + data.level + ">\n";

        data.note += "<tjstjsMessage1:" + data.message1 + ">\n";
        data.note += "<tjstjsMessage2:" + data.message2 + ">\n";
        data.note += "<tjstjsMessage3:" + data.message3 + ">\n";
        data.note += "<tjstjsMessage4:" + data.message4 + ">\n";

        data.note += "<tjsTraitsToHitPhysical:[" + Math.round(custom_traits.to_hit_physical_add * 100) + "," + (Math.round(custom_traits.to_hit_physical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsToHitMagical:[" + Math.round(custom_traits.to_hit_magical_add * 100) + "," + (Math.round(custom_traits.to_hit_magical_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocus:[" + Math.round(custom_traits.magic_focus_add) + "," + (Math.round(custom_traits.magic_focus_multiply * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsMagicFocusDebuff:" + (Math.round(custom_traits.magic_focus_debuff_rate * 100) / 100) + ">\n";
        data.note += "<tjsTraitsMaxTacticalPoints:[" + Math.round(custom_traits.max_tactical_points_add) + "," + (Math.round(custom_traits.max_tactical_points_multiply * 100000) / 1000) + "]>\n";
        data.note += "<tjsTraitsCriticalHitRate:[" + (Math.round(custom_traits.physical_critical_hit_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_hit_rate * 10000) / 100) + "]>\n";
        data.note += "<tjsTraitsCriticalEvadeRate:[" + (Math.round(custom_traits.physical_critical_evade_rate * 10000) / 100) + "," + (Math.round(custom_traits.magical_critical_evade_rate * 10000) / 100) + "]>\n";

        data.note += "<tjsInfo:" + data.description + ">\n";
        data.note += "<tjsInfo2:" + data.description2 + ">\n";

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                trait.value = 0;
            }
        }

        delete data.level;

        delete data.custom_traits;
        delete data.description;
        delete data.description2;
    }

    StorageManager.SaveToJSON( "dev", "States.json", data_array );
};
DataManager.WriteTjsDataFiles = function() { // Bleck
    // Compact and sort order of items.

    // Actors
    var tjs_actors = DataManager.CreateTjsDataFile_Actors();
    // Classes
    var tjs_classes = TJS_auto.DeepCopy( $dataClasses );
    // Enemies
    var tjs_enemies = DataManager.CreateTjsDataFile_Enemies();
    // Weapons
    var tjs_weapons = DataManager.CreateTjsDataFile_Weapons();
    // Armors
    var tjs_armors = DataManager.CreateTjsDataFile_Armors();
    // Items
    var tjs_items = DataManager.CreateTjsDataFile_Items();
    // Skills
    var tjs_skills = DataManager.CreateTjsDataFile_Skills();
    // States
    var tjs_states = DataManager.CreateTjsDataFile_States();

    AudioManager.playSe( {name: 'tjs/click', volume: 80, pitch: 100, pan: 0} );

    // Re-link all references in all entries to new database item IDs.
    const ids_actors = tjs_actors.map( (data, idx) => { if (idx < 1) return 0; return data.id; } );
    const ids_enemies = tjs_enemies.map( (data, idx) => { if (idx < 1) return 0; return data.id; } );
    const ids_weapons = tjs_weapons.map( (data, idx) => { if (idx < 1) return 0; return data.id; } );
    const ids_armors = tjs_armors.map( (data, idx) => { if (idx < 1) return 0; return data.id; } );
    const ids_items = tjs_items.map( (data, idx) => { if (idx < 1) return 0; return data.id; } );
    const ids_skills = tjs_skills.map( (data, idx) => { if (idx < 1) return 0; return data.id; } );
    const ids_states = tjs_states.map( (data, idx) => { if (idx < 1) return 0; return data.id; } );

    // Actors
    for ( let i = 1; i < tjs_actors.length; i++ ) {
        var data = tjs_actors[i];
        if ( !data ) continue;

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_STATE_RATE) ||
                 (trait.code == Game_BattlerBase.TRAIT_STATE_RESIST) ||
                 (trait.code == Game_BattlerBase.TRAIT_ATTACK_STATE) ) {
                trait.dataId = ids_states.indexOf( trait.dataId );
            }
            else if ( (trait.code == Game_BattlerBase.TRAIT_ATTACK_SKILL) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_ADD) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_SEAL) ) {
                trait.dataId = ids_skills.indexOf( trait.dataId );
            }
        }
        for ( let equip_index = 0; equip_index < data.equips.length; equip_index++ ) {
            if ( equip_index <= 1 )
                data.equips[equip_index] = ids_weapons.indexOf( data.equips[equip_index] );
            else
                data.equips[equip_index] = ids_armors.indexOf( data.equips[equip_index] );
        }
    }
    // Classes
    for ( let i = 1; i < tjs_classes.length; i++ ) {
        var data = tjs_classes[i];
        if ( !data ) continue;

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_STATE_RATE) ||
                 (trait.code == Game_BattlerBase.TRAIT_STATE_RESIST) ||
                 (trait.code == Game_BattlerBase.TRAIT_ATTACK_STATE) ) {
                trait.dataId = ids_states.indexOf( trait.dataId );
            }
            else if ( (trait.code == Game_BattlerBase.TRAIT_ATTACK_SKILL) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_ADD) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_SEAL) ) {
                trait.dataId = ids_skills.indexOf( trait.dataId );
            }
        }
        for ( var learning of data.learnings ) {
            learning.skillId = ids_skills.indexOf( learning.skillId );
        }
    }
    // Enemies
    for ( let i = 1; i < tjs_enemies.length; i++ ) {
        var data = tjs_enemies[i];
        if ( !data ) continue;

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_STATE_RATE) ||
                 (trait.code == Game_BattlerBase.TRAIT_STATE_RESIST) ||
                 (trait.code == Game_BattlerBase.TRAIT_ATTACK_STATE) ) {
                trait.dataId = ids_states.indexOf( trait.dataId );
            }
            else if ( (trait.code == Game_BattlerBase.TRAIT_ATTACK_SKILL) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_ADD) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_SEAL) ) {
                trait.dataId = ids_skills.indexOf( trait.dataId );
            }
        }
        for ( var action of data.actions ) {
            action.skillId = ids_skills.indexOf( action.skillId );
        }
        for ( var drop_item of data.dropItems ) {
            if ( drop_item.kind == 1 )
                drop_item.dataId = ids_items.indexOf( drop_item.dataId );
            else if ( drop_item.kind == 2 )
                drop_item.dataId = ids_weapons.indexOf( drop_item.dataId );
            else if ( drop_item.kind == 3 )
                drop_item.dataId = ids_armors.indexOf( drop_item.dataId );
        }
    }
    // Weapons
    for ( let i = 1; i < tjs_weapons.length; i++ ) {
        var data = tjs_weapons[i];
        if ( !data ) continue;

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_STATE_RATE) ||
                 (trait.code == Game_BattlerBase.TRAIT_STATE_RESIST) ||
                 (trait.code == Game_BattlerBase.TRAIT_ATTACK_STATE) ) {
                trait.dataId = ids_states.indexOf( trait.dataId );
            }
            else if ( (trait.code == Game_BattlerBase.TRAIT_ATTACK_SKILL) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_ADD) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_SEAL) ) {
                trait.dataId = ids_skills.indexOf( trait.dataId );
            }
        }

        data.etypeId = data.equip_type;
        data.wtypeId = data.weapon_type;
    }
    // Armors
    for ( let i = 1; i < tjs_armors.length; i++ ) {
        var data = tjs_armors[i];
        if ( !data ) continue;

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_STATE_RATE) ||
                 (trait.code == Game_BattlerBase.TRAIT_STATE_RESIST) ||
                 (trait.code == Game_BattlerBase.TRAIT_ATTACK_STATE) ) {
                trait.dataId = ids_states.indexOf( trait.dataId );
            }
            else if ( (trait.code == Game_BattlerBase.TRAIT_ATTACK_SKILL) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_ADD) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_SEAL) ) {
                trait.dataId = ids_skills.indexOf( trait.dataId );
            }
        }

        data.etypeId = data.equip_type;
        data.atypeId = data.armor_type;
    }
    // Items
    for ( let i = 1; i < tjs_items.length; i++ ) {
        var data = tjs_items[i];
        if ( !data ) continue;

        for ( var effect of data.effects ) {
            if ( (effect.code == Game_Action.EFFECT_ADD_STATE) ||
                 (effect.code == Game_Action.TRAIT_STATE_RESIST) ) {
                effect.dataId = ids_states.indexOf( effect.dataId );
            }
            else if ( (effect.code == Game_Action.EFFECT_LEARN_SKILL) ) {
                effect.dataId = ids_skills.indexOf( effect.dataId );
            }
        }
    }
    // Skills
    for ( let i = 1; i < tjs_skills.length; i++ ) {
        var data = tjs_skills[i];
        if ( !data ) continue;

        for ( var effect of data.effects ) {
            if ( (effect.code == Game_Action.EFFECT_ADD_STATE) ||
                 (effect.code == Game_Action.TRAIT_STATE_RESIST) ) {
                effect.dataId = ids_states.indexOf( effect.dataId );
            }
            else if ( (effect.code == Game_Action.EFFECT_LEARN_SKILL) ) {
                effect.dataId = ids_skills.indexOf( effect.dataId );
            }
        }
    }
    // States
    for ( let i = 1; i < tjs_states.length; i++ ) {
        var data = tjs_states[i];
        if ( !data ) continue;

        for ( var trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_STATE_RATE) ||
                 (trait.code == Game_BattlerBase.TRAIT_STATE_RESIST) ||
                 (trait.code == Game_BattlerBase.TRAIT_ATTACK_STATE) ) {
                trait.dataId = ids_states.indexOf( trait.dataId );
            }
            else if ( (trait.code == Game_BattlerBase.TRAIT_ATTACK_SKILL) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_ADD) ||
                 (trait.code == Game_BattlerBase.TRAIT_SKILL_SEAL) ) {
                trait.dataId = ids_skills.indexOf( trait.dataId );
            }
        }
    }

    // Update all database entry IDs.
    for ( let i = 1; i < tjs_actors.length; i++ ) tjs_actors[i].id = i;
    for ( let i = 1; i < tjs_enemies.length; i++ ) tjs_enemies[i].id = i;
    for ( let i = 1; i < tjs_weapons.length; i++ ) tjs_weapons[i].id = i;
    for ( let i = 1; i < tjs_armors.length; i++ ) tjs_armors[i].id = i;
    for ( let i = 1; i < tjs_items.length; i++ ) tjs_items[i].id = i;
    for ( let i = 1; i < tjs_skills.length; i++ ) tjs_skills[i].id = i;
    for ( let i = 1; i < tjs_states.length; i++ ) tjs_states[i].id = i;

    // Save new files.
    StorageManager.SaveToJSON( "dev", "TJS_Actors.json", tjs_actors );
    StorageManager.SaveToJSON( "dev", "TJS_Classes.json", tjs_classes );
    StorageManager.SaveToJSON( "dev", "TJS_Enemies.json", tjs_enemies );
    StorageManager.SaveToJSON( "dev", "TJS_Weapons.json", tjs_weapons );
    StorageManager.SaveToJSON( "dev", "TJS_Armors.json", tjs_armors );
    StorageManager.SaveToJSON( "dev", "TJS_Items.json", tjs_items );
    StorageManager.SaveToJSON( "dev", "TJS_Skills.json", tjs_skills );
    StorageManager.SaveToJSON( "dev", "TJS_States.json", tjs_states );

    AudioManager.playSe( {name: 'tjs/click', volume: 80, pitch: 100, pan: 0} );

    // Write old-format database files
    this.WriteOldFormatDataFile_Actors( TJS_auto.DeepCopy(tjs_actors) );
    this.WriteOldFormatDataFile_Classes( TJS_auto.DeepCopy(tjs_classes) );
    this.WriteOldFormatDataFile_Enemies( TJS_auto.DeepCopy(tjs_enemies) );
    this.WriteOldFormatDataFile_Weapons( TJS_auto.DeepCopy(tjs_weapons) );
    this.WriteOldFormatDataFile_Armors( TJS_auto.DeepCopy(tjs_armors) );
    this.WriteOldFormatDataFile_Items( TJS_auto.DeepCopy(tjs_items) );
    this.WriteOldFormatDataFile_Skills( TJS_auto.DeepCopy(tjs_skills) );
    this.WriteOldFormatDataFile_States( TJS_auto.DeepCopy(tjs_states) );

    AudioManager.playSe( {name: 'tjs/bong', volume: 95, pitch: 100, pan: 0} );
};
DataManager._tjs_databaseFiles = [
    { name: "$dataActors", src: "TJS_Actors.json" },
    { name: "$dataClasses", src: "TJS_Classes.json" },
    { name: "$dataSkills", src: "TJS_Skills.json" },
    { name: "$dataItems", src: "TJS_Items.json" },
    { name: "$dataWeapons", src: "TJS_Weapons.json" },
    { name: "$dataArmors", src: "TJS_Armors.json" },
    { name: "$dataEnemies", src: "TJS_Enemies.json" },
    { name: "$dataTroops", src: "Troops.json" },
    { name: "$dataStates", src: "TJS_States.json" },
    { name: "$dataAnimations", src: "Animations.json" },
    { name: "$dataTilesets", src: "Tilesets.json" },
    { name: "$dataCommonEvents", src: "CommonEvents.json" },
    { name: "$dataSystem", src: "System.json" },
    { name: "$dataMapInfos", src: "MapInfos.json" }
];
DataManager.CheckTjsDataFilesExist = function() {
    this.tjs_custom_data_files_exist = false;

    if ( !StorageManager.exists( "TJS_Actors.json" ) ) return false;
    if ( !StorageManager.exists( "TJS_Classes.json" ) ) return false;
    if ( !StorageManager.exists( "TJS_Skills.json" ) ) return false;
    if ( !StorageManager.exists( "TJS_Items.json" ) ) return false;
    if ( !StorageManager.exists( "TJS_Weapons.json" ) ) return false;
    if ( !StorageManager.exists( "TJS_Armors.json" ) ) return false;
    if ( !StorageManager.exists( "TJS_Enemies.json" ) ) return false;
    if ( !StorageManager.exists( "TJS_States.json" ) ) return false;

    this.tjs_custom_data_files_exist = true;
    return true;
};
DataManager.loadDatabase = function() {
    if ( this.CheckTjsDataFilesExist() == false )
        console.log( "TJS Custom database files non-existant." );

    const test = this.isBattleTest() || this.isEventTest();
    const prefix = test ? "Test_" : "";
    const db_files = this.tjs_custom_data_files_exist ? this._tjs_databaseFiles : this._databaseFiles;

    for (const databaseFile of db_files) {
        this.loadDataFile(databaseFile.name, prefix + databaseFile.src);
    }
    if (this.isEventTest()) {
        this.loadDataFile("$testEvent", prefix + "Event.json");
    }
};

///-----------------------------------------------------------------------------
/// StorageManager
///
/// The static class that manages storage for saving game data.
StorageManager.SaveToJSON = function(file_path, saveName, object) {
    const data = JSON.stringify( object );

    const path = require("path");
    const dirPath = path.dirname(process.mainModule.filename) + file_path + "/";
    const filePath = dirPath + saveName;
    const backupFilePath = filePath + "_";

    return new Promise((resolve, reject) => {
        this.fsMkdir(dirPath);
        this.fsUnlink(backupFilePath);
        this.fsRename(filePath, backupFilePath);
        try {
            this.fsWriteFile(filePath, data);
            this.fsUnlink(backupFilePath);
            resolve();
        } catch (e) {
            try {
                this.fsUnlink(filePath);
                this.fsRename(backupFilePath, filePath);
            } catch (e2) {
                //
            }
            reject(e);
        }
    });
};

///-----------------------------------------------------------------------------
/// Game_Troop
///
/// The game object class for a troop and the battle-related data.
Game_Troop.prototype.setup = function(troopId) { // Blagg
    this.clear();
    this._troopId = troopId;
    this._enemies = [];

    if ( $gamePlayer.enemy_encounter.enemy_count > 0 ) {
        for ( let i = 0; i < $gamePlayer.enemy_encounter.enemy_count; i++ ) {
            const enemy_base = $gamePlayer.enemy_encounter.enemies[i];
            const x = 50 + ((i + 0.5) * 1820 / $gamePlayer.enemy_encounter.enemy_count);
            const y = (enemy_base.flying == true) ? TJS_auto.Lerp( 525, 600, Math.random() ) : TJS_auto.Lerp( 825, 900, Math.random() ) ;
            const enemy = new Game_Enemy( enemy_base.id, x, y );

            this._enemies.push(enemy);
        }

        this.makeUniqueNames();

        return;
    }

    for (const member of this.troop().members) {
        if ($dataEnemies[member.enemyId]) {
            const enemyId = member.enemyId;
            const x = member.x;
            const y = member.y;
            const enemy = new Game_Enemy(enemyId, x, y);
            if (member.hidden) {
                enemy.hide();
            }
            this._enemies.push(enemy);
        }
    }
    this.makeUniqueNames();
};
Game_Troop.prototype.setupBattleEvent = function() {
    if (!this._interpreter.isRunning()) {
        if (this._interpreter.setupReservedCommonEvent()) {
            return;
        }

        if ( $gamePlayer.enemy_encounter.enemy_count > 0 ) return;

        const pages = this.troop().pages;
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            if (this.meetsConditions(page) && !this._eventFlags[i]) {
                this._interpreter.setup(page.list);
                if (page.span <= 1) {
                    this._eventFlags[i] = true;
                }
                break;
            }
        }
    }
};
Game_Troop.prototype.increaseTurn = function() {
    if ( $gamePlayer.enemy_encounter.enemy_count > 0 ) {
        this._turnCount++;

        return;
    }

    const pages = this.troop().pages;
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        if (page.span === 1) {
            this._eventFlags[i] = false;
        }
    }
    this._turnCount++;
};

///-----------------------------------------------------------------------------
/// BattleManager
///
/// The static class that manages battle progress.
BattleManager.initMembers = function() {
    this._phase = "";
    this._inputting = false;
    this._canEscape = false;
    this._canLose = false;
    this._battleTest = false;
    this._eventCallback = null;
    this._preemptive = false;
    this._surprise = false;
    this._currentActor = null;
    this._actionForcedBattler = null;
    this._mapBgm = null;
    this._mapBgs = null;
    this._actionBattlers = [];
    this._subject = null;
    this._action = null;
    this._targets = [];
    this._logWindow = null;
    this._spriteset = null;
    this._escapeRatio = 0;
    this._escaped = false;
    this._rewards = {};
    this._tpbNeedsPartyCommand = true;

    this._actor_window = null;
};
BattleManager.makeEscapeRatio = function() {
    const vehicle = $gamePlayer.vehicle();

    if ( vehicle )
        this._escapeRatio = vehicle.vehicle().escape_chance * 0.01 * (0.5 * $gameParty.agility()) / $gameTroop.agility();
    else
        this._escapeRatio = (0.5 * $gameParty.agility()) / $gameTroop.agility();
};
BattleManager.startAction = function() {
    TJS_auto._currentTargetedActor = -1;

    if ( this._subject.isActor() ) {
        // s_id = this._subject.actorId();
        for ( let i = 0; i < $gameParty.battleMembers().length; i++) {
            if ( $gameParty.battleMembers()[i].actorId() == this._subject.actorId() ) TJS_auto._currentTargetedActor = i;
        }
    }

    const subject = this._subject;
    const action = subject.currentAction();
    const targets = action.makeTargets();
    this._phase = "action";
    this._action = action;
    this._targets = targets;
    subject.cancelMotionRefresh();
    subject.useItem(action.item());
    this._action.applyGlobal();
    this._logWindow.startAction(subject, action, targets);
};
BattleManager.DisplayAllBattlersStatus = function() {
    for (const battler of this.allBattleMembers()) {
        this.displayBattlerStatus(battler, true);
    }

    this._logWindow.addText( " " );
};
BattleManager.startAction = function() {
    const subject = this._subject;
    const action = subject.currentAction();
    const targets = action.makeTargets();

    this._logWindow.startAction(subject, action, targets);
    this._phase = "action";
    this._action = action;
    this._targets = targets;
    subject.cancelMotionRefresh();
    subject.useItem(action.item());
    this._action.applyGlobal();
};
BattleManager.endAction = function() {
    this._logWindow.endAction(this._subject);
    this._phase = "turn";
    if (this._subject.numActions() === 0) {
        this.endBattlerActions(this._subject);
        this._subject = null;
    }

    TJS_auto._currentTargetedActor = 9999;
};
BattleManager.startTurn = function() {
    this._phase = "turn";
    $gameTroop.increaseTurn();
    $gameParty.requestMotionRefresh();
    if (!this.isTpb()) {
        this.makeActionOrders();
        this._logWindow.startTurn();
        this._inputting = false;
    }

    this.DisplayAllBattlersStatus();
};
BattleManager.endTurn = function() {
    this._phase = "turnEnd";
    this._preemptive = false;
    this._surprise = false;

    TJS_auto._currentTargetedActor = 9999;
};
BattleManager.endBattlerActions = function(battler) {
    battler.setActionState(this.isTpb() ? "undecided" : "done");
    battler.onAllActionsEnd();
    battler.clearTpbChargeTime();
    this.displayBattlerStatus(battler, false);
};
BattleManager.startBattle = function() {
    TJS_auto._currentTargetedActor = 9999;

    this._phase = "start";
    $gameSystem.onBattleStart();
    $gameParty.onBattleStart(this._preemptive);
    $gameTroop.onBattleStart(this._surprise);
    this.displayStartMessages();

    for ( const enemy of $gameTroop.members() ) {
        enemy.SetDiscovered();

        enemy.ClearBufferedData();
    }
    for ( const actor of $gameParty.members() ) {
        actor.ClearBufferedData();
    }
};
BattleManager.ApplyBufferedDataAllMembers = function() {
    for ( const enemy of $gameTroop.members() ) {
        enemy.ApplyBufferedData();
    }
    for ( const actor of $gameParty.members() ) {
        actor.ApplyBufferedData();
    }
};
BattleManager.changeCurrentActor = function(forward) {
    const members = $gameParty.battleMembers();
    let actor = this._currentActor;
    for (;;) {
        const currentIndex = members.indexOf(actor);
        actor = members[currentIndex + (forward ? 1 : -1)];
        if (!actor || actor.canInput()) {
            break;
        }
    }
    this._currentActor = actor ? actor : null;

    const actor_index = actor ? members.indexOf( actor ) : null;
    if ( this._actor_window ) {
        if ( actor_index == null ) {
            this._actor_window.smoothScrollTo( 0, 0 );
        }
        else if ( actor_index < 8 ) {
            this._actor_window.smoothScrollTo( 0, 0 );
        }
        else {
            const actor_height = this._actor_window.itemRect( 0 ).height * Math.floor( actor_index * 0.1251 );

            this._actor_window.smoothScrollTo( 0, actor_height );
        }
    }

    this.startActorInput();
};
BattleManager.invokeCounterAttack = function(subject, target) {
    const action = new Game_Action(target);
    action.SetFreeAttack();
    action.apply(subject);
    this._logWindow.displayCounter(target);
    this._logWindow.displayActionResults(target, subject);
};
BattleManager.checkBattleEnd = function() {
    if (this._phase) {
        if ($gameParty.isEscaped()) {
            this.processPartyEscape();
            this._actor_window = null;
            return true;
        } else if ($gameParty.isAllDead()) {
            this.processDefeat();
            this._actor_window = null;
            return true;
        } else if ($gameTroop.isAllDead()) {
            this.processVictory();
            this._actor_window = null;
            return true;
        }
    }
    return false;
};
BattleManager.makeRewards = function() {
    const mult = (1.00000 - (tjs_battle_rewards_variance * 0.50000)) + (Math.random() * tjs_battle_rewards_variance);
    const gold_base = $gameTroop.goldTotal() * mult;
    const exp_base = $gameTroop.expTotal() * mult;
    const adjusted_gold = Math.round( gold_base );
    const adjusted_exp = exp_base < 10 ? Math.ceil( exp_base * 100.0 ) / 100 : Math.round( exp_base );

    this._rewards = {
        gold: adjusted_gold,
        exp: adjusted_exp,
        items: $gameTroop.makeDropItems()
    };
};
BattleManager.displayExp = function() {
    const exp = this._rewards.exp;

    if (exp > 0)
        $gameMessage.add( "Your adventuring party gains " + exp.toLocaleString() + " Experience Points for each member.\\LB" );
};
BattleManager.displayVictoryMessage = function() {
    this._logWindow.addText( " " );
    this._logWindow.addText( "Victory!" );

    $gameMessage.add( TextManager.victory.format($gameParty.name()) + "\\LB" );
};
BattleManager.displayGold = function() {
    const gold = this._rewards.gold;

    if (gold > 0)
        $gameMessage.add( "You get " + gold.toLocaleString() + " GP.\\LB" );
};
BattleManager.displayDropItems = function() {
    const items = this._rewards.items;
    if (items.length > 0) {
        $gameMessage.newPage();
        for (const item of items) {
            $gameMessage.add( "You find: " + item.name + ".\\LB" );
        }
    }
};
BattleManager.displayEscapeFailureMessage = function() {
    this._logWindow.addText( " " );
    this._logWindow.addText( "Failed to run away!" );
    this._logWindow.addText( " " );

    $gameMessage.add(TextManager.escapeStart.format($gameParty.name()));
    $gameMessage.add( "\\LB" );
    $gameMessage.add("\\." + TextManager.escapeFailure);
};
BattleManager.displayStartMessages = function() {
    for (const name of $gameTroop.enemyNames()) {
        $gameMessage.add(TextManager.emerge.format(name));
    }

    $gameMessage.add( "\\LB" );

    if (this._preemptive) {
        $gameMessage.add(TextManager.preemptive.format($gameParty.name()));
    } else if (this._surprise) {
        $gameMessage.add(TextManager.surprise.format($gameParty.name()));
    }
};

///-----------------------------------------------------------------------------
/// Sprite_Damage
///
/// The sprite for displaying a popup damage.
Sprite_Damage.prototype.createDigits = function(value) {
    const string = Math.abs(value).toLocaleString();
    const h = this.fontSize();
    const w = Math.floor(h * 0.75);
    for (let i = 0; i < string.length; i++) {
        const sprite = this.createChildSprite(w, h);
        sprite.bitmap.drawText(string[i], 0, 0, w, h, "center");
        sprite.x = (i - (string.length - 1) / 2) * w;
        sprite.dy = -i;
    }
};

///-----------------------------------------------------------------------------
/// Window_BattleLog
///
/// The window for displaying battle progress. No frame is displayed, but it is
/// handled as a window for convenience.
Window_BattleLog.prototype.initialize = function(rect) {
    Window_Base.prototype.initialize.call(this, rect);
    this.opacity = 0;
    this._lines = [];
    this._methods = [];
    this._waitCount = 0;
    this._waitMode = "";
    this._baseLineStack = [];
    this._spriteset = null;

    this._animation_waiting = [];
    this._buffer = [];
    this._char_index = 0;
    this._char_timer = 0;
    this._line_index = 0;
    this._line_timer = 0;
    this._line_scroll_index = -(this.maxLines() - 1);
    this._pause_key_pressed = false;
    this._pause_enabled = false;
    this._animation_playing = false;
    this._sfx_noDamage_queued = 0;

    for ( let i = 0; i < this.maxLines(); i++ )
        this._lines.push( "" );

    this.refresh();
};
Window_BattleLog.prototype.lineHeight = function() {
    return 20;
};
Window_BattleLog.prototype.isFastForward = function() {
    return (
        Input.isPressed("ok") ||
        Input.isPressed("shift") ||
        Input.isPressed("down")
    );
};
Window_BattleLog.prototype.isSetToPause = function() {
    return (
        Input.isPressed("control") ||
        Input.isPressed("pageup") ||
        Input.isPressed("cancel") ||
        Input.isPressed("up")
    );
};
Window_BattleLog.prototype.isPauseToggled = function() {
    if ( (Input.isPressed("ok")) || (Input.isPressed("shift")) || (Input.isPressed("down")) ) {
        this._pause_enabled = false;

        return this._pause_enabled;
    }

    if ( this._pause_key_pressed == true ) {
        if ( (!Input.isPressed("escape")) && (!Input.isPressed("tab")) && (!Input.isPressed("menu")) ) {
            this._pause_key_pressed = false;
        }

        return this._pause_enabled;
    }

    if ( (Input.isPressed("escape")) || (Input.isPressed("tab")) || (Input.isPressed("menu")) ) {
        this._pause_key_pressed = true;

        this._pause_enabled = !this._pause_enabled;
    }

    return this._pause_enabled;
};
Window_BattleLog.prototype.ScrollLine = function() {
    this._line_index++;
    if ( this._line_index >= this.maxLines() )
        this._line_index = 0;

    this._line_scroll_index++;
    if ( this._line_scroll_index >= this.maxLines() )
        this._line_scroll_index = 0;

    this._char_index = 0;
};
Window_BattleLog.prototype.AddLine = function(text) {
    this._buffer.push( text );
};
Window_BattleLog.prototype.clear = function() {
    if ( this._line_scroll_index > -(this.maxLines() - 1) ) this.addText( " " );

    if ( this._lines.length != this.maxLines() ) {
        this._lines = [];

        for ( let i = 0; i < this.maxLines(); i++ )
            this._lines.push( "" );

        this._char_index = 0;
        this._line_index = 0;
        this._line_scroll_index = -(this.maxLines() - 1);
    }

    this._baseLineStack = [];
    this.refresh();
};
Window_BattleLog.prototype.WaitChar = function() {
    this._char_timer += 20;
};
Window_BattleLog.prototype.WaitLine = function() {
    this._line_timer += 60;
};
Window_BattleLog.prototype.maxLines = function() {
    return 22;
};
Window_BattleLog.prototype.addText = function(text) {
    this.AddLine( text );

    this.refresh();
    this.wait();
};
Window_BattleLog.prototype.popBaseLine = function() {
    const baseLine = this._baseLineStack.pop();
};
Window_BattleLog.prototype.waitForNewLine = function() {
    let baseLine = 0;
    if (this._baseLineStack.length > 0) {
        baseLine = this._baseLineStack[this._baseLineStack.length - 1];
    }

    this.wait();
};
Window_BattleLog.prototype.backPaintOpacity = function() {
    return 0;
};
Window_BattleLog.prototype.refresh = function() {
    this.drawBackground();
    this.contents.clear();
    for (let i = 0; i < this._lines.length; i++) {
        this.drawLineText(i);
    }
};
Window_BattleLog.prototype.drawLineText = function(index) {
    const rect = this.lineRect(index);
    this.drawTextEx(this._lines[index], rect.x, rect.y, rect.width);
};
Window_BattleLog.prototype.lineRect = function(index) {
    var index_scrolled = index - Math.max( this._line_scroll_index, 0 );
    if ( index_scrolled < 0 )
        index_scrolled += this.maxLines();

    const itemHeight = this.itemHeight();
    const padding = this.itemPadding();
    const x = padding;
    const y = index_scrolled * itemHeight;
    const width = this.innerWidth - padding * 5;
    const height = itemHeight + 2;
    return new Rectangle(x, y, width, height);
};
Window_BattleLog.prototype.messageSpeed = function() {
    return 24;
};
Window_BattleLog.prototype.isBusy = function() {
    return this._char_timer > 0 || this._line_timer > 0 || this._waitMode || this._methods.length > 0;
};
Window_BattleLog.prototype.updateWaitCount = function() {
    this.RunWaitTimers();
    this.RunWaitTimers();
    const busy = this.RunWaitTimers();
    this.refresh();

    return busy;
};
Window_BattleLog.prototype.PlaySfxPhysicalHitNoDamage = function() {
    AudioManager.playSe({
        name: "tjs/tink",
        volume: 95,
        pitch: 100,
        pan: 0
    });
};
Window_BattleLog.prototype.PlaySfxMagicalHitNoDamage = function() {
    AudioManager.playSe({
        name: "Darkness3",
        volume: 95,
        pitch: 100,
        pan: 0
    });
};
Window_BattleLog.prototype.DecrementAnimationTimers = function() {
    if ( this._animation_waiting.length < 1 ) return;

    for ( var anim of this._animation_waiting ) {
        anim.timing--;
    }
};
Window_BattleLog.prototype.IsAnimationPlaying = function() {
    if ( !this._spriteset ) return false;
    if ( !this._spriteset._animationSprites ) return false;

    for (const sprite of this._spriteset._animationSprites) {
        if ( sprite.isPlaying() )
            return true;
    }

    return false;
};
Window_BattleLog.prototype.CheckAnimationPlaying = function() {
    const result = this.IsAnimationPlaying();

    if ( result == true )
        this._animation_playing = true;
    else {
        if ( this._animation_playing == true ) {
            if ( this._sfx_noDamage_queued == 1 )
                this.PlaySfxPhysicalHitNoDamage();
            else if ( this._sfx_noDamage_queued == 2 )
                this.PlaySfxMagicalHitNoDamage();

            this._sfx_noDamage_queued = 0;
            this._animation_playing = false;
        }
    }

    return result;
};
Window_BattleLog.prototype.IsAnimationReady = function() {
    if ( this._animation_waiting.length < 1 ) return false;

    if ( this._animation_waiting[0].timing <= 0 ) return true;

    return false;
};
Window_BattleLog.prototype.CheckAnimation = function() {
    if ( this._animation_waiting.length < 1 ) return;

    if ( this._animation_waiting[0].timing <= 0 ) {
        this.showAnimation( this._animation_waiting[0].anim_subject, this._animation_waiting[0].anim_targets, this._animation_waiting[0].anim_id );

        this._animation_waiting.shift();
    }
};
Window_BattleLog.prototype.RunWaitTimers = function() {
    if ( this.CheckAnimationPlaying() == true ) return true;
    if ( this.IsAnimationReady() == true ) return true;
    if ( this.isPauseToggled() == true ) return true;
    if ( this.isSetToPause() == true ) return true;

    if ( this._char_timer > 0 ) {
        this._char_timer -= this.isFastForward() ? 20 : 1;

        if ( this._char_timer > 0 )
            return true;
    }
    this._char_timer = 0;

    if ( this._char_index > 0 ) {
        if ( this._buffer.length > 0 ) {
            this._lines[this._line_index] = this._buffer[0].substring( 0, this._char_index );
            this._char_index++;

            if ( this._char_index > this._buffer[0].length ) {
                this.ScrollLine();
                this._buffer.shift();
                this._lines[this._line_index] = "";
                BattleManager.ApplyBufferedDataAllMembers();
                this.WaitLine();
                this.DecrementAnimationTimers();
                this.CheckAnimation();

                return true;
            }

            this.WaitChar();

            return true;
        }

        this._char_index = 0;

        return true;
    }

    if ( this._line_timer > 0 ) {
        this._line_timer -= this.isFastForward() ? 20 : 1;

        if ( this._line_timer > 0 )
            return true;
    }
    this._line_timer = 0;

    if ( this._buffer.length > 0 ) {
        if ( this._buffer[0].length > 0 ) {
            this._char_index = 1;
            this.WaitChar();

            return true;
        }

        this.ScrollLine();
        this._buffer.shift();
        this._lines[this._line_index] = "";
        BattleManager.ApplyBufferedDataAllMembers();
        this.WaitLine();
        this.DecrementAnimationTimers();
        this.CheckAnimation();

        return true;
    }

    return false;
};
Window_BattleLog.prototype.startAction = function(subject, action, targets) {
    const item = action.item();
    const anim_timer = this._buffer.length + ( (item.message2.length > 0) ? 2 : 1 );

    this.push("performActionStart", subject, action);
    this.push("waitForMovement");
    this.push("performAction", subject, action);
    this.TjsDisplayAction(subject, item, targets);
    this._animation_waiting.push( {
                                    timing: anim_timer,
                                    anim_subject: subject,
                                    anim_targets: targets.clone(),
                                    anim_id: item.animationId
                                } );
};
Window_BattleLog.prototype.GetSkillTypeName = function(item) {
    if ( item.skill_type_name.length < 1 ) return "";

    return "(" + item.skill_type_name + ") ";
};
Window_BattleLog.prototype.TjsDisplayAction = function(subject, item, targets) { // Blagg
    const numMethods = this._methods.length;

    if ( item.auto_message == TJS_SKILL_MESSAGE_CUSTOM ) {
        this.displayItemMessage(item.message1, subject, item);
        this.displayItemMessage(item.message2, subject, item);
    }
    else if ( item.auto_message == TJS_SKILL_MESSAGE_USES ) this.TjsDisplayItemMessageUses(subject, item, targets);
    else if ( item.auto_message == TJS_SKILL_MESSAGE_ATTACKS ) this.TjsDisplayItemMessageAttacks(subject, item, targets);
    else if ( item.auto_message == TJS_SKILL_MESSAGE_ATTACKS_WITH ) this.TjsDisplayItemMessageAttacksWith(subject, item, targets);
    else if ( item.auto_message == TJS_SKILL_MESSAGE_CASTS ) this.TjsDisplayItemMessageCasts(subject, item, targets);

    if ( item.auto_message != TJS_SKILL_MESSAGE_CUSTOM ) this.displayItemMessage(item.message2, subject, item);

    if (this._methods.length === numMethods) {
        this.push("wait");
    }
};
Window_BattleLog.prototype.TjsDisplayItemMessageAttacks = function(subject, item, targets) {
    if ( targets.length < 1 ) {
        this.push( "addText", subject.name() + " attacks." );
        return;
    }
    else if ( targets.length == 1 ) {
        this.push( "addText", subject.name() + " attacks " + targets[0].name() + "." );
        return;
    }
    else if ( targets.length > 1 ) {
        var targetsSame = true;
        const target0Name = targets[0].name();
        for (let i = 1; i < targets.length; i++) {
            if ( targets[i].name() !== target0Name ) { targetsSame = false; break; }
        }

        if ( !targetsSame ) this.push( "addText", subject.name() + " attacks multiple targets." );
        else this.push( "addText", subject.name() + " attacks " + targets[0].name() + "." );
        return;
    }
};
Window_BattleLog.prototype.TjsDisplayItemMessageAttacksWith = function(subject, item, targets) {
    if ( targets.length < 1 ) {
        this.push( "addText", subject.name() + " attacks with " + this.GetSkillTypeName(item) + item.name + "." );
        return;
    }
    else if ( targets.length == 1 ) {
        this.push( "addText", subject.name() + " attacks " + targets[0].name() + " with " + this.GetSkillTypeName(item) + item.name + "." );
        return;
    }
    else if ( targets.length > 1 ) {
        var targetsSame = true;
        const target0Name = targets[0].name();
        for (let i = 1; i < targets.length; i++) {
            if ( targets[i].name() !== target0Name ) { targetsSame = false; break; }
        }

        if ( !targetsSame ) this.push( "addText", subject.name() + " attacks multiple targets with " + this.GetSkillTypeName(item) + item.name + "." );
        else this.push( "addText", subject.name() + " attacks " + targets[0].name() + " with " + this.GetSkillTypeName(item) + item.name + "." );
        return;
    }
};
Window_BattleLog.prototype.TjsDisplayItemMessageCasts = function(subject, item, targets) {
    if ( targets.length < 1 ) {
        this.push( "addText", subject.name() + " casts " + this.GetSkillTypeName(item) + item.name + "." );
        return;
    }
    else if ( targets.length == 1 ) {
        this.push( "addText", subject.name() + " casts " + this.GetSkillTypeName(item) + item.name + " at " + targets[0].name() + "." );
        return;
    }
    else if ( targets.length > 1 ) {
        var targetsSame = true;
        const target0Name = targets[0].name();
        for (let i = 1; i < targets.length; i++) {
            if ( targets[i].name() !== target0Name ) { targetsSame = false; break; }
        }

        if ( !targetsSame ) this.push( "addText", subject.name() + " casts " + this.GetSkillTypeName(item) + item.name + " at multiple targets." );
        else this.push( "addText", subject.name() + " casts " + this.GetSkillTypeName(item) + item.name + " at " + targets[0].name() + "." );
        return;
    }
};
Window_BattleLog.prototype.TjsDisplayItemMessageUses = function(subject, item, targets) {
    if ( targets.length < 1 ) {
        this.push( "addText", subject.name() + " uses " + this.GetSkillTypeName(item) + item.name + "." );
        return;
    }
    else if ( targets.length == 1 ) {
        this.push( "addText", subject.name() + " uses " + this.GetSkillTypeName(item) + item.name + " on " + targets[0].name() + "." );
        return;
    }
    else if ( targets.length > 1 ) {
        var targetsSame = true;
        const target0Name = targets[0].name();
        for (let i = 1; i < targets.length; i++) {
            if ( targets[i].name() !== target0Name ) { targetsSame = false; break; }
        }

        if ( !targetsSame ) this.push( "addText", subject.name() + " uses " + this.GetSkillTypeName(item) + item.name + " on multiple targets." );
        else this.push( "addText", subject.name() + " uses " + this.GetSkillTypeName(item) + item.name + " on " + targets[0].name() + "." );
        return;
    }
};
Window_BattleLog.prototype.displayItemMessage = function(fmt, subject, item) {
    if (fmt) {
        this.push("addText", fmt.format(subject.name(), this.GetSkillTypeName(item) + item.name));
    }
};
Window_BattleLog.prototype.makeHpDamageText = function(target) {
    const result = target.result();
    const damage = Math.round(result.hpDamage);
    const isActor = target.isActor();
    let fmt;
    if (damage > 0 && result.drain) {
        fmt = isActor ? TextManager.actorDrain : TextManager.enemyDrain;
        return target.name() + " is drained of " + damage.toLocaleString() + " Health Points.";
    } else if (damage > 0) {
        fmt = isActor ? TextManager.actorDamage : TextManager.enemyDamage;
        return target.name() + " takes " + damage.toLocaleString() + " Health Points of damage.";
    } else if (damage < 0) {
        fmt = isActor ? TextManager.actorRecovery : TextManager.enemyRecovery;
        return target.name() + " is healed by " + (-damage).toLocaleString() + " Health Points.";
    } else {
        if ( result.physical )
            this._sfx_noDamage_queued = 1;
        else
            this._sfx_noDamage_queued = 2;

        fmt = isActor ? TextManager.actorNoDamage : TextManager.enemyNoDamage;
        return fmt.format(target.name());
    }
};
Window_BattleLog.prototype.makeMpDamageText = function(target) {
    const result = target.result();
    const damage = Math.round(result.mpDamage);
    const isActor = target.isActor();
    let fmt;
    if (damage > 0 && result.drain) {
        fmt = isActor ? TextManager.actorDrain : TextManager.enemyDrain;
        return target.name() + " is drained of " + damage.toLocaleString() + " Magic Points.";
    } else if (damage > 0) {
        fmt = isActor ? TextManager.actorLoss : TextManager.enemyLoss;
        return target.name() + " looses " + damage.toLocaleString() + " Magic Points.";
    } else if (damage < 0) {
        fmt = isActor ? TextManager.actorRecovery : TextManager.enemyRecovery;
        return target.name() + " gains " + (-damage).toLocaleString() + " Magic Points.";
    } else {
        return "";
    }
};
Window_BattleLog.prototype.makeTpDamageText = function(target) {
    const result = target.result();
    const damage = Math.round(result.tpDamage);
    const isActor = target.isActor();
    let fmt;
    if (damage > 0) {
        fmt = isActor ? TextManager.actorLoss : TextManager.enemyLoss;
        return target.name() + " looses " + damage.toLocaleString() + " Tactical Points.";
    } else if (damage < 0) {
        fmt = isActor ? TextManager.actorGain : TextManager.enemyGain;
        return target.name() + " gains " + (-damage).toLocaleString() + " Tactical Points.";
    } else {
        return "";
    }
};

///-----------------------------------------------------------------------------
/// Window_Gold
///
/// The window for displaying the party's gold.
/**
 * Updates the on-screen display of how much money the adventuring party is carrying.
 */
Window_Gold.prototype.refresh = function() {
    const rect = this.itemLineRect(0);
    const x = rect.x;
    const y = rect.y;
    const width = rect.width;
    this.contents.clear();
    this.drawCurrencyValue( this.value(), " " + this.currencyUnit(), x, y, width );
};

///-----------------------------------------------------------------------------
/// Window_Tjs_BasicHelp
///
/// A window for displaying text about an object, and displaying that text with automatic formatting and carriage returns.
/**
 * Note:  Code based upon Window_EquipStatus to begin with.
*/
function Window_Tjs_BasicHelp() {
    this.initialize(...arguments);
}

Window_Tjs_BasicHelp.prototype = Object.create(Window_StatusBase.prototype);
Window_Tjs_BasicHelp.prototype.constructor = Window_Tjs_BasicHelp;

/**
*/
Window_Tjs_BasicHelp.prototype.initialize = function(rect) {
    Window_StatusBase.prototype.initialize.call(this, rect);

    this._text = "";
    this._textCommand = "none";
    this._generic = null;
    this._item = null;
    this._class = null;
    this._actor = null;
    this._enemy = null;
};
Window_Tjs_BasicHelp.prototype.setText = function(text) {
    const rect = this.baseTextRect();
    this._text = TJS_auto.ReparseTextAuto( text, Math.floor( rect.width / this.CharWidth() ) );
    this.refresh();
};
Window_Tjs_BasicHelp.prototype.clear = function() {
    this.setText("");
};
Window_Tjs_BasicHelp.prototype.setItem = function(item) {
    this.SetBasicItem( item );
};
Window_Tjs_BasicHelp.prototype.SetBasicItem = function(item) {
    if ( !item ) return;

    this._item = item;
};
Window_Tjs_BasicHelp.prototype.SetTextCommand = function(text_command) {
    if ( !text_command ) return;

    this._textCommand = text_command;
};
Window_Tjs_BasicHelp.prototype.SetActor = function(new_actor) {
    if ( !new_actor ) return;

    this._actor = new_actor;
};
Window_Tjs_BasicHelp.prototype.InitText = function() {
    this._text = "";
    if ( !this._item ) return;
    const rect = this.baseTextRect();
    const text_num_chars = Math.floor( rect.width / this.CharWidth() );

    if ( this._textCommand === "none" ) {
        this._text = "";
    }
    else if ( this._textCommand === "info raw" ) {
        this._text = TJS_auto.GetInfoItemRaw( this._item, text_num_chars );
    }
    else if ( this._textCommand === "skill" ) {
        this._text = TJS_auto.GetInfoItemExpanded( this._item, this._actor, text_num_chars, this._textCommand, 1, Math.floor(rect.width / this.CharWidth()) );
    }
    else {
        this._text = TJS_auto.GetInfoItemExpanded( this._item, this._actor, text_num_chars, this._textCommand, 2, Math.floor(rect.width * 0.5 / this.CharWidth()) );
    }
};
Window_Tjs_BasicHelp.prototype.lineHeight = function() {
    return this.lineHeightB();
};
Window_Tjs_BasicHelp.prototype.refresh = function() {
    const rect = this.baseTextRect();

    this.contents.clear();
    this.drawTextEx(this._text, rect.x, rect.y, rect.width);
    if ( (this._item) && (this._text.length > 0) && (this._textCommand !== "info raw") && (this._textCommand !== "actor") && (this._textCommand !== "enemy") && (this._textCommand !== "skill") )
        this.drawIcon( this._item.iconIndex, rect.x, rect.y );
};

///-----------------------------------------------------------------------------
/// Window_Tjs_CreaturepediaCommand
///
/// The window for selecting a command on the custom creaturepedia screen.
/**
 * The window for selecting a command on the custom creaturepedia screen.
 * Note:  Code based upon Window_EquipCommand to begin with.
 *
 * @class
*/
function Window_Tjs_CreaturepediaCommand() {
    this.initialize(...arguments);
}
Window_Tjs_CreaturepediaCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_Tjs_CreaturepediaCommand.prototype.constructor = Window_Tjs_CreaturepediaCommand;
/**
 * Initializes the Window.
 *
 * @param {Rectangle} rect - The area the window will be inside of on the screen.
*/
Window_Tjs_CreaturepediaCommand.prototype.initialize = function(rect) {
    Window_HorzCommand.prototype.initialize.call(this, rect);
};
/**
 * Sets the number of columns of commands.
 *
 * @return {Number} The number of columns of commands.
 */
Window_Tjs_CreaturepediaCommand.prototype.maxCols = function() {
    return 2;
};
/**
 * Adds the commands to the window.
 */
Window_Tjs_CreaturepediaCommand.prototype.makeCommandList = function() {
    this.addCommand( "Characters", "actor" );
    this.addCommand( "Enemies", "enemy" );
};

///-----------------------------------------------------------------------------
/// Window_Tjs_StatesCommand
///
/// The window for selecting a command on the custom character effects screen.
/**
 * The window for selecting a command on the custom character effects screen.
 * Note:  Code based upon Window_EquipCommand to begin with.
 *
 * @class
*/
function Window_Tjs_StatesCommand() {
    this.initialize(...arguments);
}
Window_Tjs_StatesCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_Tjs_StatesCommand.prototype.constructor = Window_Tjs_StatesCommand;
/**
 * Initializes the Window.
 *
 * @param {Rectangle} rect - The area the window will be inside of on the screen.
*/
Window_Tjs_StatesCommand.prototype.initialize = function(rect) {
    Window_HorzCommand.prototype.initialize.call(this, rect);
};
/**
 * Sets the number of columns of commands.
 *
 * @return {Number} The number of columns of commands.
 */
Window_Tjs_StatesCommand.prototype.maxCols = function() {
    return 3;
};
/**
 * Adds the commands to the window.
 */
Window_Tjs_StatesCommand.prototype.makeCommandList = function() {
    this.addCommand( "Current Effects", "current" );
    this.addCommand( "Partial Resistances", "partial" );
    this.addCommand( "Effect Immunities", "immune" );
};

///-----------------------------------------------------------------------------
/// Window_Tjs_ItemDataCommand
///
/// The window for selecting a command on the custom item data screen.
/**
 * The window for selecting a command on the custom item data screen.
 * Note:  Code based upon Window_EquipCommand to begin with.
 *
 * @class
*/
function Window_Tjs_ItemDataCommand() {
    this.initialize(...arguments);
}
Window_Tjs_ItemDataCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_Tjs_ItemDataCommand.prototype.constructor = Window_Tjs_ItemDataCommand;
/**
 * Initializes the Window.
 *
 * @param {Rectangle} rect - The area the window will be inside of on the screen.
*/
Window_Tjs_ItemDataCommand.prototype.initialize = function(rect) {
    Window_HorzCommand.prototype.initialize.call(this, rect);
};
/**
 * Sets the number of columns of commands.
 *
 * @return {Number} The number of columns of commands.
 */
Window_Tjs_ItemDataCommand.prototype.maxCols = function() {
    return 4;
};
/**
 * Adds the commands to the window.
 */
Window_Tjs_ItemDataCommand.prototype.makeCommandList = function() {
    this.addCommand( "Weapons", "weapon" );
    this.addCommand( "Gear", "armor" );
    this.addCommand( "Items", "item" );
    this.addCommand( "Key Items", "key item" );
};

///-----------------------------------------------------------------------------
/// Window_Tjs_States_ActorId
///
/// The window for displaying a party member's face and name, etc., on the screen that displays states that an actor is affected by, immune to, and partially resistant to.
/**
 * Note:  Code based upon Window_EquipStatus to begin with.
*/
function Window_Tjs_States_ActorId() {
    this.initialize(...arguments);
}

Window_Tjs_States_ActorId.prototype = Object.create(Window_StatusBase.prototype);
Window_Tjs_States_ActorId.prototype.constructor = Window_Tjs_States_ActorId;

/**
*/
Window_Tjs_States_ActorId.prototype.initialize = function(rect) {
    Window_StatusBase.prototype.initialize.call(this, rect);
    this._actor = null;
    this.refresh();
};
Window_Tjs_States_ActorId.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};
Window_Tjs_States_ActorId.prototype.refresh = function() {
    Window_StatusBase.prototype.refresh.call(this);

    this.contents.clear();

    if (this._actor) {
        const nameRect = this.itemLineRect(0);

        this.drawActorFace( this._actor, 0, 0, 154, 154 );

        const coor_x1 = 154 + (this.CharWidth() * 1);
        this.drawActorName( this._actor, coor_x1, 0, this.CharWidth() * 32 );
        this.placeBasicGauges( this._actor, coor_x1, this.lineHeightB() );

        const coor_x2 = coor_x1 + (this.CharWidth() * 35);
        this.drawActorNickname( this._actor, coor_x2, 0, Graphics.boxWidth * 0.5 );
        this.drawActorLevel( this._actor, coor_x2, this.lineHeightB() );
    }
};
Window_Tjs_States_ActorId.prototype.lineHeight = function() {
    return 20; // 36
};

///-----------------------------------------------------------------------------
/// Window_Tjs_States_Current
///
/// The window for displaying what states currently affect an actor.
/**
*/
function Window_Tjs_States_Current() {
    this.initialize(...arguments);
}

Window_Tjs_States_Current.prototype = Object.create(Window_ItemList.prototype);
Window_Tjs_States_Current.prototype.constructor = Window_Tjs_States_Current;

/**
*/
Window_Tjs_States_Current.prototype.initialize = function(rect) {
    Window_ItemList.prototype.initialize.call(this, rect);
    this._actor = null;
    this._data = [];
    this._tjsBasicHelpWindow = null;
    this.refresh();
};
Window_Tjs_States_Current.prototype.maxCols = function() {
    return 1;
};
Window_Tjs_States_Current.prototype.colSpacing = function() {
    return 5;
};
Window_Tjs_States_Current.prototype.hasItems = function() {
    return ( this._data.length > 0 );
};
Window_Tjs_States_Current.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};
Window_Tjs_States_Current.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;

        this.refresh();
        this.scrollTo(0, 0);
    }
};
Window_Tjs_States_Current.prototype.itemAt = function(index) {
    if ( !this._actor ) return null;
    if ( !this.hasItems() ) return null;

    return this._data[index];
};
Window_Tjs_States_Current.prototype.refresh = function() {
    this.makeItemList();
    Window_ItemList.prototype.refresh.call(this);
};
Window_Tjs_States_Current.prototype.lineHeight = function() {
    return 36;
};
Window_Tjs_States_Current.prototype.isEnabled = function(/*item*/) {
    return true;
};
Window_Tjs_States_Current.prototype.makeItemList = function() {
    this._data = [];
    if ( this._actor ) this._data = this._actor.StatesImmune();

    if ( this._data.length < 1 ) this._data.push( 14 );
};
Window_Tjs_States_Current.prototype.item = function() {
    return this.itemAt( this.index() );
};
Window_Tjs_States_Current.prototype.itemAt = function(index) {
    return this._data && index >= 0 ? this._data[index] : null;
};
Window_Tjs_States_Current.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled( this.item() );
};
Window_Tjs_States_Current.prototype.includes = function(item) {
    return true;
};
Window_Tjs_States_Current.prototype.needsNumber = function() {
    return false;
};
Window_Tjs_States_Current.prototype.selectLast = function() {
    this.forceSelect( this.index >= 0 ? this.index : 0 );
};
Window_Tjs_States_Current.prototype.drawItem = function(index) {
    const item = this.itemAt(index);

    if (item) {
        const rect = this.itemLineRect(index);

        this.drawStateNameAndIcon( item, rect.x, rect.y, rect.width );
    }
};
Window_Tjs_States_Current.prototype.drawStateNameAndIcon = function(item, x, y, width) {
    if (item) {
        if ( item < 1 ) return;
        const iconY = y + (this.lineHeight() - ImageManager.iconHeight) / 2;
        const textMargin = ImageManager.iconWidth + 4;
        const itemWidth = Math.max(0, width - textMargin);
        const state = $dataStates[item];

        this.resetTextColor();
        this.drawIcon( state.iconIndex, x, iconY );
        this.drawText( state.name, x + textMargin, y, itemWidth );
    }
};
Window_Tjs_States_Current.prototype.numberWidth = function() {
    return 0;
};
/**
 *
 *
 * @param {Window_Tjs_BasicHelp} The active help window in the scene.
 */
Window_Tjs_States_Current.prototype.setHelpWindow = function(tjsHelpWindow) {
    this._tjsBasicHelpWindow = tjsHelpWindow;
    this.callUpdateHelp();
};
Window_Tjs_States_Current.prototype.callUpdateHelp = function() {
    if (this.active && this._tjsBasicHelpWindow) {
        this.updateHelp();
    }
};
Window_Tjs_States_Current.prototype.updateHelp = function() {
    if ( !this._tjsBasicHelpWindow ) return;
    const item_id = this.item();

    if ( item_id > 0 )
    this._tjsBasicHelpWindow.SetBasicItem( $dataStates[item_id] );
    this._tjsBasicHelpWindow.SetTextCommand( "state info raw" );
    this._tjsBasicHelpWindow.InitText();
    this._tjsBasicHelpWindow.refresh();
};

///-----------------------------------------------------------------------------
/// Window_Tjs_ListWindow
///
/// The window for displaying what states currently affect an actor, or what states an actor is immune to, or what states an actor is partially resistant to.
/**
*/
function Window_Tjs_ListWindow() {
    this.initialize(...arguments);
}
Window_Tjs_ListWindow.prototype = Object.create(Window_ItemList.prototype);
Window_Tjs_ListWindow.prototype.constructor = Window_Tjs_ListWindow;
/**
*/
Window_Tjs_ListWindow.prototype.initialize = function(rect, window_type="affected") {
    Window_ItemList.prototype.initialize.call(this, rect);
    this._window_type = window_type;

    this.ValidateWindowType();

    this._actor = null;
    this._data = [];
    this._tjsBasicHelpWindow = null;
    this.refresh();
};
Window_Tjs_ListWindow.prototype.ValidateWindowType = function() {
    if ( (this._window_type === "affected") || (this._window_type === "immune") || (this._window_type === "resistant") ) return;
    if ( (this._window_type === "weapon") || (this._window_type === "armor") || (this._window_type === "item") || (this._window_type === "key item") ) return;
    if ( (this._window_type === "actor") || (this._window_type === "enemy") ) return;

    this._window_type = "affected";
};
Window_Tjs_ListWindow.prototype.maxCols = function() {
    return 1;
};
Window_Tjs_ListWindow.prototype.colSpacing = function() {
    return 5;
};
Window_Tjs_ListWindow.prototype.hasItems = function() {
    return ( this._data.length > 0 );
};
Window_Tjs_ListWindow.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};
Window_Tjs_ListWindow.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;

        this.refresh();
        this.scrollTo(0, 0);
    }
};
Window_Tjs_ListWindow.prototype.itemAt = function(index) {
    if ( !this._actor ) return null;
    if ( !this.hasItems() ) return null;

    return this._data[index];
};
Window_Tjs_ListWindow.prototype.refresh = function() {
    this.makeItemList();
    Window_ItemList.prototype.refresh.call(this);
};
Window_Tjs_ListWindow.prototype.lineHeight = function() {
    return 36;
};
Window_Tjs_ListWindow.prototype.isEnabled = function(/*item*/) {
    return true;
};
Window_Tjs_ListWindow.prototype.makeItemList = function() {
    this._data = [];

    if ( this._window_type === "affected" ) {
        if ( this._actor ) this._data = this._actor.states();
        if ( this._data.length < 1 ) this._data.push( $dataStates[14] );
    }
    else if ( this._window_type === "immune" ) {
        if ( this._actor ) this._data = this._actor.StatesImmune();
        if ( this._data.length < 1 ) this._data.push( 28 );
    }
    else if ( this._window_type === "resistant" ) {
        if ( this._actor ) this._data = this._actor.StatesPartiallyResistant();
        if ( this._data.length < 1 ) this._data.push( 31 );
    }
    else if ( this._window_type === "weapon" ) {
        this._data = TJS_auto.GetPartyWeapons();
        if ( this._data.length < 1 ) this._data.push( null );
    }
    else if ( this._window_type === "armor" ) {
        this._data = TJS_auto.GetPartyArmors();
        if ( this._data.length < 1 ) this._data.push( null );
    }
    else if ( this._window_type === "item" ) {
        this._data = TJS_auto.GetPartyItems();
        if ( this._data.length < 1 ) this._data.push( null );
    }
    else if ( this._window_type === "key item" ) {
        this._data = TJS_auto.GetPartyKeyItems();
        if ( this._data.length < 1 ) this._data.push( null );
    }
    else if ( this._window_type === "actor" ) {
        this._data = TJS_auto.GetDiscoveredActors();
        if ( this._data.length < 1 ) this._data.push( null );
    }
    else if ( this._window_type === "enemy" ) {
        this._data = TJS_auto.GetDiscoveredEnemies();
        if ( this._data.length < 1 ) this._data.push( null );
    }
};
Window_Tjs_ListWindow.prototype.item = function() {
    return this.itemAt( this.index() );
};
Window_Tjs_ListWindow.prototype.itemAt = function(index) {
    return this._data && index >= 0 ? this._data[index] : null;
};
Window_Tjs_ListWindow.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled( this.item() );
};
Window_Tjs_ListWindow.prototype.includes = function(item) {
    return true;
};
Window_Tjs_ListWindow.prototype.needsNumber = function() {
    return false;
};
Window_Tjs_ListWindow.prototype.selectLast = function() {
    this.forceSelect( this.index >= 0 ? this.index : 0 );
};
Window_Tjs_ListWindow.prototype.drawItem = function(index) {
    const item = this.itemAt(index);
    if ( !item ) return;

    if ( this._window_type === "actor" ) {
        const rect = this.itemLineRect(index);

        if (item) this.DrawActorName( item, rect.x, rect.y, rect.width );

        return;
    }
    else if ( this._window_type === "enemy" ) {
        const rect = this.itemLineRect(index);

        if (item) this.DrawEnemyName( item, rect.x, rect.y, rect.width );

        return;
    }

    if (item) {
        const rect = this.itemLineRect(index);

        this.drawItemNameAndIcon( item, rect.x, rect.y, rect.width );
        this.DrawItemValue( item, rect.x, rect.y, rect.width );
    }
};
Window_Tjs_ListWindow.prototype.DrawActorName = function(item, x, y, width) {
    const item_width = Math.max(0, width);
    this.drawText( item.name, x, y, item_width );
};
Window_Tjs_ListWindow.prototype.DrawEnemyName = function(item, x, y, width) {
    const item_width = Math.max(0, width);
    this.drawText( item.name, x, y, item_width );
};
Window_Tjs_ListWindow.prototype.drawItemNameAndIcon = function(item_input, x, y, width) {
    if (item_input) {
        if ( !item_input ) return;
        var item = {};

        if ( (this._window_type === "immune") || (this._window_type === "resistant") )
            item = $dataStates[item_input];
        else
            item = item_input;

        if ( !item ) return;

        const iconY = y + (this.lineHeight() - ImageManager.iconHeight) / 2;
        const textMargin = ImageManager.iconWidth + 4;
        const itemWidth = Math.max(0, width - textMargin);

        this.resetTextColor();
        this.drawIcon( item.iconIndex, x, iconY );
        this.drawText( item.name, x + textMargin, y, itemWidth );
    }
};
Window_Tjs_ListWindow.prototype.numberWidth = function() {
    return 0;
};
Window_Tjs_ListWindow.prototype.DrawItemValue = function(item_id, x, y, width) {
    if ( this._window_type !== "resistant" ) return;
    if ( !item_id ) return;
    if ( item_id < 1 ) return;
    if ( $dataStates[item_id].name === "None" ) return;
    if ( !this._actor ) return;

    const state_data = this._actor.GetStatePartialResistancePercent( item_id );
    const txt_state_resist = (state_data).toLocaleString() + "%";

    this.resetTextColor();
    this.drawText( txt_state_resist, x, y, width, "right" );
};
/**
 *
 *
 * @param {Window_Tjs_BasicHelp} The active help window in the scene.
 */
Window_Tjs_ListWindow.prototype.setHelpWindow = function(tjsHelpWindow) {
    this._tjsBasicHelpWindow = tjsHelpWindow;
    this.callUpdateHelp();
};
Window_Tjs_ListWindow.prototype.callUpdateHelp = function() {
    if (this.active && this._tjsBasicHelpWindow) {
        this.updateHelp();
    }
};
Window_Tjs_ListWindow.prototype.updateHelp = function() {
    if ( !this._tjsBasicHelpWindow ) return;
    const item = this.item();
    if ( item < 1 ) return;

    if ( (this._window_type === "immune") || (this._window_type === "resistant") )
        this._tjsBasicHelpWindow.SetBasicItem( $dataStates[item] );
    else
        this._tjsBasicHelpWindow.SetBasicItem( item );

    if ( this._window_type === "affected" ) this._tjsBasicHelpWindow.SetTextCommand( "state affected" );
    else if ( this._window_type === "immune" ) this._tjsBasicHelpWindow.SetTextCommand( "state immune" );
    else if ( this._window_type === "resistant" ) this._tjsBasicHelpWindow.SetTextCommand( "state partial resist" );
    else if ( this._window_type === "weapon" ) this._tjsBasicHelpWindow.SetTextCommand( "weapon" );
    else if ( this._window_type === "armor" ) this._tjsBasicHelpWindow.SetTextCommand( "armor" );
    else if ( this._window_type === "item" ) this._tjsBasicHelpWindow.SetTextCommand( "item" );
    else if ( this._window_type === "key item" ) this._tjsBasicHelpWindow.SetTextCommand( "key item" );
    else if ( this._window_type === "actor" ) this._tjsBasicHelpWindow.SetTextCommand( "actor" );
    else if ( this._window_type === "enemy" ) this._tjsBasicHelpWindow.SetTextCommand( "enemy" );
    else this._tjsBasicHelpWindow.SetTextCommand( "info raw" );

    if ( this._window_type === "actor" )
        this._tjsBasicHelpWindow.SetActor( item );
    else if ( this._window_type === "enemy" )
        this._tjsBasicHelpWindow.SetActor( item );
    else if ( this._actor )
        this._tjsBasicHelpWindow.SetActor( this._actor );

    this._tjsBasicHelpWindow.InitText();

    this._tjsBasicHelpWindow.refresh();
};

///-----------------------------------------------------------------------------
/// Scene_Tjs_Effects
///
/// The scene class of the custom plugin actor effects screen.
/**
 * The scene class of the custom plugin actor effects screen.
 * Note:  Code based upon Scene_Equip class to begin with.
 *
 * @class
*/
function Scene_Tjs_Effects() {
    this.initialize(...arguments);
}
Scene_Tjs_Effects.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Tjs_Effects.prototype.constructor = Scene_Tjs_Effects;
/**
*/
Scene_Tjs_Effects.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
    this._helpWindow = null;
    this._currentActorWindow = null;
    this._tjsBasicHelpWindow = null;
    this._statesAffectedWindow = null;
    this._statesImmuneWindow = null;
    this._statesPartialResistWindow = null;
};
Scene_Tjs_Effects.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);

    this.createHelpWindow();                    // Window with info on an individual state.
    this.createCurrentActorWindow();            // Window for displaying which actor's states are being displayed for.
    this.createCommandWindow();                 // Window with commands for which states-related window to display, of which only one may show at a time.

    this.createStatesAffectedByWindow();        // Window with list of states an actor is currently actively affected by.
    this.createStatesImmuneWindow();            // Window with list of states an actor is immune to.
    this.createStatesPartialResistanceWindow(); // Window with list of states an actor is partially resistant to.

    this.ShowWindowStatesAffected();

    this.refreshActor();
};
Scene_Tjs_Effects.prototype.onWindowExitAffected = function() {
    this._statesAffectedWindow.deselect();

    this._commandWindow.activate();
    this._commandWindow.select(0);
};
Scene_Tjs_Effects.prototype.onWindowExitImmune = function() {
    this._statesImmuneWindow.deselect();

    this._commandWindow.activate();
    this._commandWindow.select(2);
};
Scene_Tjs_Effects.prototype.onWindowExitResistant = function() {
    this._statesPartialResistWindow.deselect();

    this._commandWindow.activate();
    this._commandWindow.select(1);
};
Scene_Tjs_Effects.prototype.refreshActor = function() {
    const actor = this.actor();

    this._currentActorWindow.setActor(actor);

    this._statesAffectedWindow.setActor(actor);
    this._statesImmuneWindow.setActor(actor);
    this._statesPartialResistWindow.setActor(actor);
};
Scene_Tjs_Effects.prototype.createCurrentActorWindow = function() {
    const rect = this.statusCurrentActorWindowRect();

    this._currentActorWindow = new Window_Tjs_States_ActorId(rect);
    this.addWindow(this._currentActorWindow);
};
Scene_Tjs_Effects.prototype.statusCurrentActorWindowRect = function() {
    const wx = 0;
    const wy = 0;
    const ww = Graphics.boxWidth;
    const wh = 164;

    return new Rectangle( wx, wy, ww, wh );
};
Scene_Tjs_Effects.prototype.helpWindowRect = function() {
    const rectActor = this.statusCurrentActorWindowRect();
    const rectCMD = this.commandWindowRect();

    const wx = Graphics.boxWidth / 4;
    const wy = rectActor.height + rectCMD.height;
    const ww = Graphics.boxWidth - wx;
    const wh = Graphics.boxHeight - wy;

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Tjs_Effects.prototype.commandWindowRect = function() {
    const rectActor = this.statusCurrentActorWindowRect();
    const wx = 0;
    const wy = rectActor.height;
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(1, true);

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Tjs_Effects.prototype.createMultiPurposeWindowRect = function() {
    const rectActor = this.statusCurrentActorWindowRect();
    const rectCMD = this.commandWindowRect();
    const wx = 0;
    const wy = rectActor.height + rectCMD.height;
    const ww = Graphics.boxWidth / 4;
    const wh = Graphics.boxHeight - wy;

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Tjs_Effects.prototype.createHelpWindow = function() {
    const rectHelp = this.helpWindowRect();

    this._tjsBasicHelpWindow = new Window_Tjs_BasicHelp( rectHelp );
    this.addWindow(this._tjsBasicHelpWindow);
};
Scene_Tjs_Effects.prototype.createCommandWindow = function() {
    const rectCMD = this.commandWindowRect();

    this._commandWindow = new Window_Tjs_StatesCommand( rectCMD );
    this._commandWindow.setHelpWindow(this._tjsBasicHelpWindow);

    this._commandWindow.setHandler( "current", this.CommandStatesCurrent.bind(this) );
    this._commandWindow.setHandler( "partial", this.CommandStatesPartial.bind(this) );
    this._commandWindow.setHandler( "immune", this.CommandStatesImmune.bind(this) );
    this._commandWindow.setHandler( "cancel", this.popScene.bind(this) );
    this._commandWindow.setHandler( "pagedown", this.nextActor.bind(this) );
    this._commandWindow.setHandler( "pageup", this.previousActor.bind(this) );

    this.addWindow(this._commandWindow);
};
Scene_Tjs_Effects.prototype.createStatesAffectedByWindow = function() {
    const rect = this.createMultiPurposeWindowRect();

    this._statesAffectedWindow = new Window_Tjs_ListWindow( rect, "affected" );
    this._statesAffectedWindow.setHelpWindow( this._tjsBasicHelpWindow );
    this._statesAffectedWindow.setHandler("cancel", this.onWindowExitAffected.bind(this));

    this.addWindow(this._statesAffectedWindow);
};
Scene_Tjs_Effects.prototype.createStatesImmuneWindow = function() {
    const rect = this.createMultiPurposeWindowRect();

    this._statesImmuneWindow = new Window_Tjs_ListWindow( rect, "immune" );
    this._statesImmuneWindow.setHelpWindow( this._tjsBasicHelpWindow );
    this._statesImmuneWindow.setHandler("cancel", this.onWindowExitImmune.bind(this));

    this.addWindow(this._statesImmuneWindow);
};
Scene_Tjs_Effects.prototype.createStatesPartialResistanceWindow = function() {
    const rect = this.createMultiPurposeWindowRect();

    this._statesPartialResistWindow = new Window_Tjs_ListWindow( rect, "resistant" );
    this._statesPartialResistWindow.setHelpWindow( this._tjsBasicHelpWindow );
    this._statesPartialResistWindow.setHandler("cancel", this.onWindowExitResistant.bind(this));

    this.addWindow(this._statesPartialResistWindow);
};
Scene_Tjs_Effects.prototype.CommandStatesCurrent = function() {
    this.ShowWindowStatesAffected();
    this._statesAffectedWindow.activate();
    this._statesAffectedWindow.select(0);
};
Scene_Tjs_Effects.prototype.CommandStatesPartial = function() {
    this.ShowWindowStatesResistant();
    this._statesPartialResistWindow.activate();
    this._statesPartialResistWindow.select(0);
};
Scene_Tjs_Effects.prototype.CommandStatesImmune = function() {
    this.ShowWindowStatesImmune();
    this._statesImmuneWindow.activate();
    this._statesImmuneWindow.select(0);
};
Scene_Tjs_Effects.prototype.ShowWindowStatesAffected = function() {
    this._statesPartialResistWindow.hide();
    this._statesImmuneWindow.hide();
    this._statesAffectedWindow.show();
};
Scene_Tjs_Effects.prototype.ShowWindowStatesImmune = function() {
    this._statesPartialResistWindow.hide();
    this._statesAffectedWindow.hide();
    this._statesImmuneWindow.show();
};
Scene_Tjs_Effects.prototype.ShowWindowStatesResistant = function() {
    this._statesImmuneWindow.hide();
    this._statesAffectedWindow.hide();
    this._statesPartialResistWindow.show();
};
Scene_Tjs_Effects.prototype.needsPageButtons = function() {
    return true;
};
Scene_Tjs_Effects.prototype.arePageButtonsEnabled = function() {
    return ( this._statesAffectedWindow.active || this._statesImmuneWindow.active || this._statesPartialResistanceWindow.active );
};
Scene_Tjs_Effects.prototype.onActorChange = function() {
    Scene_MenuBase.prototype.onActorChange.call(this);

    this.refreshActor();

    this._commandWindow.activate();
};

///-----------------------------------------------------------------------------
/// Scene_Tjs_ItemData
///
/// The scene class of the custom inventory item data screen.
/**
 * The scene class of the custom inventory item data screen.
 * Note:  Code based upon Scene_Equip class to begin with.
 *
 * @class
*/
function Scene_Tjs_ItemData() {
    this.initialize(...arguments);
}
Scene_Tjs_ItemData.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Tjs_ItemData.prototype.constructor = Scene_Tjs_ItemData;
/**
*/
Scene_Tjs_ItemData.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
    this._helpWindow = null;
    this._tjsBasicHelpWindow = null;
    this._weaponListWindow = null;
    this._armorListWindow = null;
    this._itemListWindow = null;
    this._key_item_list_window = null;
};
Scene_Tjs_ItemData.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);

    this.createHelpWindow();                    // Window with info on an individual state.
    this.createCommandWindow();                 // Window with commands for which states-related window to display, of which only one may show at a time.

    this.createWeaponListWindow();              // Window with list of weapons.
    this.createArmorListWindow();               // Window with list of armors.
    this.createItemListWindow();                // Window with list of items.
    this.createKeyItemListWindow();             // Window with list of key items.

    this.ShowWindowWeapon();

    this.refreshActor();
};
Scene_Tjs_ItemData.prototype.onWindowExitWeapon = function() {
    this._weaponListWindow.deselect();

    this._commandWindow.activate();
    this._commandWindow.select(0);
};
Scene_Tjs_ItemData.prototype.onWindowExitArmor = function() {
    this._armorListWindow.deselect();

    this._commandWindow.activate();
    this._commandWindow.select(1);
};
Scene_Tjs_ItemData.prototype.onWindowExitItem = function() {
    this._itemListWindow.deselect();

    this._commandWindow.activate();
    this._commandWindow.select(2);
};
Scene_Tjs_ItemData.prototype.onWindowExitKeyItem = function() {
    this._key_item_list_window.deselect();

    this._commandWindow.activate();
    this._commandWindow.select(2);
};
Scene_Tjs_ItemData.prototype.refreshActor = function() {
    // const actor = this.actor();
    const actor = $gameParty.members()[0];

    this._weaponListWindow.setActor(actor);
    this._armorListWindow.setActor(actor);
    this._itemListWindow.setActor(actor);
    this._key_item_list_window.setActor(actor);
};
Scene_Tjs_ItemData.prototype.helpWindowRect = function() {
    const rectCMD = this.commandWindowRect();

    const wx = Graphics.boxWidth * 0.25;
    const wy = rectCMD.height;
    const ww = Graphics.boxWidth - wx;
    const wh = Graphics.boxHeight - wy;

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Tjs_ItemData.prototype.commandWindowRect = function() {
    const wx = 0;
    const wy = 0;
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(1, true);

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Tjs_ItemData.prototype.createMultiPurposeWindowRect = function() {
    const rectCMD = this.commandWindowRect();
    const wx = 0;
    const wy = rectCMD.height;
    const ww = Graphics.boxWidth * 0.25;
    const wh = Graphics.boxHeight - wy;

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Tjs_ItemData.prototype.createHelpWindow = function() {
    const rectHelp = this.helpWindowRect();

    this._tjsBasicHelpWindow = new Window_Tjs_BasicHelp( rectHelp );
    this.addWindow(this._tjsBasicHelpWindow);
};
Scene_Tjs_ItemData.prototype.createCommandWindow = function() {
    const rectCMD = this.commandWindowRect();

    this._commandWindow = new Window_Tjs_ItemDataCommand( rectCMD );
    this._commandWindow.setHelpWindow(this._tjsBasicHelpWindow);

    this._commandWindow.setHandler( "weapon", this.CommandWeapon.bind(this) );
    this._commandWindow.setHandler( "armor", this.CommandArmor.bind(this) );
    this._commandWindow.setHandler( "item", this.CommandItem.bind(this) );
    this._commandWindow.setHandler( "key item", this.CommandKeyItem.bind(this) );
    this._commandWindow.setHandler( "cancel", this.popScene.bind(this) );

    this.addWindow(this._commandWindow);
};
Scene_Tjs_ItemData.prototype.createWeaponListWindow = function() {
    const rect = this.createMultiPurposeWindowRect();

    this._weaponListWindow = new Window_Tjs_ListWindow( rect, "weapon" );
    this._weaponListWindow.setHelpWindow( this._tjsBasicHelpWindow );
    this._weaponListWindow.setHandler("cancel", this.onWindowExitWeapon.bind(this));

    this.addWindow(this._weaponListWindow);
};
Scene_Tjs_ItemData.prototype.createArmorListWindow = function() {
    const rect = this.createMultiPurposeWindowRect();

    this._armorListWindow = new Window_Tjs_ListWindow( rect, "armor" );
    this._armorListWindow.setHelpWindow( this._tjsBasicHelpWindow );
    this._armorListWindow.setHandler("cancel", this.onWindowExitArmor.bind(this));

    this.addWindow(this._armorListWindow);
};
Scene_Tjs_ItemData.prototype.createItemListWindow = function() {
    const rect = this.createMultiPurposeWindowRect();

    this._itemListWindow = new Window_Tjs_ListWindow( rect, "item" );
    this._itemListWindow.setHelpWindow( this._tjsBasicHelpWindow );
    this._itemListWindow.setHandler("cancel", this.onWindowExitItem.bind(this));

    this.addWindow(this._itemListWindow);
};
Scene_Tjs_ItemData.prototype.createKeyItemListWindow = function() {
    const rect = this.createMultiPurposeWindowRect();

    this._key_item_list_window = new Window_Tjs_ListWindow( rect, "key item" );
    this._key_item_list_window.setHelpWindow( this._tjsBasicHelpWindow );
    this._key_item_list_window.setHandler("cancel", this.onWindowExitKeyItem.bind(this));

    this.addWindow(this._key_item_list_window);
};
Scene_Tjs_ItemData.prototype.CommandWeapon = function() {
    this.ShowWindowWeapon();
    this._weaponListWindow.activate();
    this._weaponListWindow.select(0);
};
Scene_Tjs_ItemData.prototype.CommandArmor = function() {
    this.ShowWindowArmor();
    this._armorListWindow.activate();
    this._armorListWindow.select(0);
};
Scene_Tjs_ItemData.prototype.CommandItem = function() {
    this.ShowWindowItem();
    this._itemListWindow.activate();
    this._itemListWindow.select(0);
};
Scene_Tjs_ItemData.prototype.CommandKeyItem = function() {
    this.ShowWindowKeyItem();
    this._key_item_list_window.activate();
    this._key_item_list_window.select(0);
};
Scene_Tjs_ItemData.prototype.ShowWindowWeapon = function() {
    this._armorListWindow.hide();
    this._itemListWindow.hide();
    this._key_item_list_window.hide();
    this._weaponListWindow.show();
};
Scene_Tjs_ItemData.prototype.ShowWindowArmor = function() {
    this._weaponListWindow.hide();
    this._itemListWindow.hide();
    this._key_item_list_window.hide();
    this._armorListWindow.show();
};
Scene_Tjs_ItemData.prototype.ShowWindowItem = function() {
    this._weaponListWindow.hide();
    this._armorListWindow.hide();
    this._key_item_list_window.hide();
    this._itemListWindow.show();
};
Scene_Tjs_ItemData.prototype.ShowWindowKeyItem = function() {
    this._weaponListWindow.hide();
    this._armorListWindow.hide();
    this._itemListWindow.hide();
    this._key_item_list_window.show();
};
Scene_Tjs_ItemData.prototype.needsPageButtons = function() {
    return true;
};
Scene_Tjs_ItemData.prototype.arePageButtonsEnabled = function() {
    return ( this._weaponListWindow.active || this._armorListWindow.active || this._itemListWindow.active || this._key_item_list_window.active );
};
Scene_Tjs_ItemData.prototype.onActorChange = function() {
    Scene_MenuBase.prototype.onActorChange.call(this);

    this.refreshActor();

    this._commandWindow.activate();
};

///-----------------------------------------------------------------------------
/// Scene_Tjs_Creaturepedia
///
/// The scene class of the creaturepedia screen.
/**
 * The scene class of the creaturepedia screen.
 * Note:  Code based upon Scene_Equip class to begin with.
 *
 * @class
*/
function Scene_Tjs_Creaturepedia() {
    this.initialize(...arguments);
}
Scene_Tjs_Creaturepedia.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Tjs_Creaturepedia.prototype.constructor = Scene_Tjs_Creaturepedia;
/**
*/
Scene_Tjs_Creaturepedia.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
    this._helpWindow = null;
    this._tjsBasicHelpWindow = null;
    this._creatureActorWindow = null;
    this._creatureEnemyWindow = null;
};
Scene_Tjs_Creaturepedia.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);

    this.createHelpWindow();                    // Window with info on an individual state.
    this.createCommandWindow();                 // Window with commands for which states-related window to display, of which only one may show at a time.

    this.createCreatureActorWindow();           // Window with list of actors.
    this.createCreatureEnemyWindow();           // Window with list of enemies.

    this.ShowWindowActor();

    this.refreshActor();
};
Scene_Tjs_Creaturepedia.prototype.onWindowExitCreatureActor = function() {
    this._creatureActorWindow.deselect();

    this._commandWindow.activate();
    this._commandWindow.select(0);
};
Scene_Tjs_Creaturepedia.prototype.onWindowExitCreatureEnemy = function() {
    this._creatureEnemyWindow.deselect();

    this._commandWindow.activate();
    this._commandWindow.select(1);
};
Scene_Tjs_Creaturepedia.prototype.refreshActor = function() {
    const actor = $gameParty.members()[0];

    this._creatureActorWindow.setActor(actor);
    this._creatureEnemyWindow.setActor(actor);
};
Scene_Tjs_Creaturepedia.prototype.helpWindowRect = function() {
    const rectCMD = this.commandWindowRect();

    const wx = Graphics.boxWidth * 0.25;
    const wy = rectCMD.height;
    const ww = Graphics.boxWidth - wx;
    const wh = Graphics.boxHeight - wy;

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Tjs_Creaturepedia.prototype.commandWindowRect = function() {
    const wx = 0;
    const wy = 0;
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(1, true);

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Tjs_Creaturepedia.prototype.createMultiPurposeWindowRect = function() {
    const rectCMD = this.commandWindowRect();
    const wx = 0;
    const wy = rectCMD.height;
    const ww = Graphics.boxWidth * 0.25;
    const wh = Graphics.boxHeight - wy;

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Tjs_Creaturepedia.prototype.createHelpWindow = function() {
    const rectHelp = this.helpWindowRect();

    this._tjsBasicHelpWindow = new Window_Tjs_BasicHelp( rectHelp );
    this.addWindow(this._tjsBasicHelpWindow);
};
Scene_Tjs_Creaturepedia.prototype.createCommandWindow = function() {
    const rectCMD = this.commandWindowRect();

    this._commandWindow = new Window_Tjs_CreaturepediaCommand( rectCMD );
    this._commandWindow.setHelpWindow(this._tjsBasicHelpWindow);

    this._commandWindow.setHandler( "actor", this.CommandActor.bind(this) );
    this._commandWindow.setHandler( "enemy", this.CommandEnemy.bind(this) );
    this._commandWindow.setHandler( "cancel", this.popScene.bind(this) );

    this.addWindow(this._commandWindow);
};
Scene_Tjs_Creaturepedia.prototype.createCreatureActorWindow = function() {
    const rect = this.createMultiPurposeWindowRect();

    this._creatureActorWindow = new Window_Tjs_ListWindow( rect, "actor" );
    this._creatureActorWindow.setHelpWindow( this._tjsBasicHelpWindow );
    this._creatureActorWindow.setHandler("cancel", this.onWindowExitCreatureActor.bind(this));

    this.addWindow(this._creatureActorWindow);
};
Scene_Tjs_Creaturepedia.prototype.createCreatureEnemyWindow = function() {
    const rect = this.createMultiPurposeWindowRect();

    this._creatureEnemyWindow = new Window_Tjs_ListWindow( rect, "enemy" );
    this._creatureEnemyWindow.setHelpWindow( this._tjsBasicHelpWindow );
    this._creatureEnemyWindow.setHandler("cancel", this.onWindowExitCreatureEnemy.bind(this));

    this.addWindow(this._creatureEnemyWindow);
};
Scene_Tjs_Creaturepedia.prototype.CommandActor = function() {
    this.ShowWindowActor();
    this._creatureActorWindow.activate();
    this._creatureActorWindow.select(0);
};
Scene_Tjs_Creaturepedia.prototype.CommandEnemy = function() {
    this.ShowWindowEnemy();
    this._creatureEnemyWindow.activate();
    this._creatureEnemyWindow.select(0);
};
Scene_Tjs_Creaturepedia.prototype.ShowWindowActor = function() {
    this._creatureEnemyWindow.hide();
    this._creatureActorWindow.show();
};
Scene_Tjs_Creaturepedia.prototype.ShowWindowEnemy = function() {
    this._creatureActorWindow.hide();
    this._creatureEnemyWindow.show();
};
Scene_Tjs_Creaturepedia.prototype.needsPageButtons = function() {
    return true;
};
Scene_Tjs_Creaturepedia.prototype.arePageButtonsEnabled = function() {
    return ( this._creatureActorWindow.active || this._creatureEnemyWindow.active );
};
Scene_Tjs_Creaturepedia.prototype.onActorChange = function() {
    Scene_MenuBase.prototype.onActorChange.call(this);

    this.refreshActor();

    this._commandWindow.activate();
};

///-----------------------------------------------------------------------------
/// Window_SkillType
///
/// The window for selecting a skill type on the skill screen.
Window_SkillType.prototype.maxCols = function() {
    return 2;
};

///-----------------------------------------------------------------------------
/// Window_Tjs_CustomSkillList
///
/// Special custom window that displays a list of an actor's skills on the screen, and sends data to two different help windows, one with a summary and the other with a description.
/// Note: Sub-Class of Window_SkillList
/**
 * Special custom window that displays a list of an actor's skills on the screen, and sends data to two different help windows, one with a summary and the other with a description.
 *
 * @class
 * @extends Window_SkillList
 */
function Window_Tjs_CustomSkillList() {
    this.initialize(...arguments);
}
Window_Tjs_CustomSkillList.prototype = Object.create(Window_SkillList.prototype);
Window_Tjs_CustomSkillList.prototype.constructor = Window_Tjs_CustomSkillList;
/**
 *
 */
Window_Tjs_CustomSkillList.prototype.initialize = function(rect) {
    Window_SkillList.prototype.initialize.call(this, rect);

    this._summary_window = null;
};
Window_Tjs_CustomSkillList.prototype.SetSummaryWindow = function(summary_window) {
    this._summary_window = summary_window;

    if ( !this._summary_window ) return;

    this._summary_window.SetTextCommand( "skill" );
};
Window_Tjs_CustomSkillList.prototype.updateHelp = function() {
    const item = this.item();

    this.setHelpWindowItem( item );

    if ( !this._summary_window ) return;

    if ( item ) {
        this._summary_window.setItem( this.item() );
        this._summary_window.InitText();
        this._summary_window.refresh();
    }
    else {
        this._summary_window.setText("Select a skill from the active category of the current character, to view a summary of the skill here, and a description of the skill at the bottom of the screen.");
        this._summary_window.refresh();
    }
};

///-----------------------------------------------------------------------------
/// Scene_Skill
///
/// The scene class of the skill screen.
Scene_Skill.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createSkillTypeWindow();
    this.createStatusWindow();
    this.createItemWindow();
    this.CreateSkillSummaryWindow();
    this.createActorWindow();
};
Scene_Skill.prototype.actorWindowRect = function() {
    const wx = 0;
    const wy = Math.min(this.mainAreaTop(), this.helpAreaTop());
    const ww = 875; // 575
    const wh = this.mainAreaHeight() + this.helpAreaHeight();

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Skill.prototype.showActorWindow = function() {
    this._actorWindow.x = Graphics.boxWidth - this._actorWindow.width;
    this._actorWindow.show();
    this._actorWindow.activate();
    this._actorWindow.select( 0 );
};
Scene_Skill.prototype.statusWindowRect = function() {
    const ww = 875;
    const wh = this._skillTypeWindow.height;
    const wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;
    const wy = this.mainAreaTop();
    return new Rectangle(wx, wy, ww, wh);
};
Scene_Skill.prototype.SummaryWindowRect = function() {
    const rect = this.skillTypeWindowRect();

    const ww = Graphics.boxWidth - (rect.x + rect.width);
    const wh = rect.height;
    const wx = rect.x + rect.width;
    const wy = this.mainAreaTop();

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Skill.prototype.skillTypeWindowRect = function() {
    const rect = this.actorWindowRect();

    const ww = this.mainCommandWidth() * 2;
    const wh = this.calcWindowHeight(3, true);
    const wx = rect.width;
    const wy = this.mainAreaTop();

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Skill.prototype.createActorWindow = function() {
    const rect = this.actorWindowRect();

    this._actorWindow = new Window_MenuActor(rect);
    this._actorWindow.setHandler("ok", this.onActorOk.bind(this));
    this._actorWindow.setHandler("cancel", this.onActorCancel.bind(this));

    this.addWindow(this._actorWindow);
};
Scene_Skill.prototype.CreateSkillSummaryWindow = function() {
    const rect = this.SummaryWindowRect();

    this._skill_summary_window = new Window_Tjs_BasicHelp(rect);
    this.addWindow(this._skill_summary_window);
    this._itemWindow.SetSummaryWindow(this._skill_summary_window);

    this.ResetSummaryWindowText();
};
Scene_Skill.prototype.createItemWindow = function() {
    const rect = this.itemWindowRect();

    this._itemWindow = new Window_Tjs_CustomSkillList(rect);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler("ok", this.onItemOk.bind(this));
    this._itemWindow.setHandler("cancel", this.onItemCancel.bind(this));
    this._skillTypeWindow.setSkillWindow(this._itemWindow);

    this.addWindow(this._itemWindow);
};
Scene_Skill.prototype.refreshActor = function() {
    const actor = this.actor();

    this._skillTypeWindow.setActor(actor);
    this._statusWindow.setActor(actor);
    this._itemWindow.setActor(actor);

    this._skill_summary_window.SetActor(actor);
};
Scene_Skill.prototype.onItemCancel = function() {
    this._itemWindow.deselect();
    this._skillTypeWindow.activate();

    this.ResetSummaryWindowText();
};
Scene_Skill.prototype.onActorChange = function() {
    Scene_MenuBase.prototype.onActorChange.call(this);
    this.refreshActor();
    this._itemWindow.deselect();
    this._skillTypeWindow.activate();

    this.ResetSummaryWindowText();
};
Scene_Skill.prototype.ResetSummaryWindowText = function() {
    this._skill_summary_window.setText("Select a skill from the active category of the current character, to view a summary of the skill here, and a description of the skill at the bottom of the screen.");
    this._skill_summary_window.refresh();
};
Scene_Skill.prototype.playSeForItem = function() {
    TJS_auto.PlayItemSoundEffect( this._itemWindow.item() );
};

///-----------------------------------------------------------------------------
/// Scene_Item
///
/// The scene class of the item screen.
Scene_Item.prototype.actorWindowRect = function() {
    const ww = 875; // 575
    const wh = this.mainAreaHeight() + this.helpAreaHeight();
    const wx = Graphics.boxWidth - ww;
    const wy = Math.min(this.mainAreaTop(), this.helpAreaTop());

    return new Rectangle(wx, wy, ww, wh);
};
Scene_Item.prototype.showActorWindow = function() {
    this._actorWindow.show();
    this._actorWindow.activate();
    this._actorWindow.select( 0 );
};
Scene_Item.prototype.playSeForItem = function() {
    TJS_auto.PlayItemSoundEffect( this._itemWindow.item() );
};

///-----------------------------------------------------------------------------
/// Scene_Menu
///
/// The scene class of the menu screen.
Scene_Menu.prototype.createCommandWindow = function() {
    const rect = this.commandWindowRect();
    const commandWindow = new Window_MenuCommand(rect);

    commandWindow.setHandler("item", this.commandItem.bind(this));
    commandWindow.setHandler("itemData", this.commandItemData.bind(this));
    commandWindow.setHandler("skill", this.commandPersonal.bind(this));
    commandWindow.setHandler("equip", this.commandPersonal.bind(this));
    commandWindow.setHandler("status", this.commandPersonal.bind(this));
    commandWindow.setHandler("effects", this.commandPersonal.bind(this));
    commandWindow.setHandler("creaturepedia", this.commandCreaturepedia.bind(this));
    if ( $gameSystem.inside_vehicle == false ) commandWindow.setHandler("formation", this.commandFormation.bind(this));
    commandWindow.setHandler("rename", this.commandPersonal.bind(this));
    commandWindow.setHandler("options", this.commandOptions.bind(this));
    commandWindow.setHandler("save", this.commandSave.bind(this));
    if ( $gameSystem.inside_vehicle == true ) commandWindow.setHandler("vehicle", this.commandVehicle.bind(this));
    commandWindow.setHandler("gameEnd", this.commandGameEnd.bind(this));

    commandWindow.setHandler("cancel", this.popScene.bind(this));

    this.addWindow(commandWindow);
    this._commandWindow = commandWindow;
};
Scene_Menu.prototype.commandPersonal = function() {
    this._statusWindow.setFormationMode(false);
    this._statusWindow.select( 0 );
    this._statusWindow.activate();
    this._statusWindow.setHandler("ok", this.onPersonalOk.bind(this));
    this._statusWindow.setHandler("cancel", this.onPersonalCancel.bind(this));
};
Scene_Menu.prototype.commandFormation = function() {
    this._statusWindow.setFormationMode(true);
    this._statusWindow.select( 0 );
    this._statusWindow.activate();
    this._statusWindow.setHandler("ok", this.onFormationOk.bind(this));
    this._statusWindow.setHandler("cancel", this.onFormationCancel.bind(this));
};
Scene_Menu.prototype.onPersonalOk = function() {
    switch (this._commandWindow.currentSymbol()) {
        case "skill":
            SceneManager.push(Scene_Skill);
            break;
        case "equip":
            SceneManager.push(Scene_Equip);
            break;
        case "status":
            SceneManager.push(Scene_Status);
            break;
        case "effects":
            SceneManager.push(Scene_Tjs_Effects);
            break;
        case "rename":
            this.RenameActor();
            break;
    }
};
Scene_Menu.prototype.commandItemData = function() {
    SceneManager.push(Scene_Tjs_ItemData);
};
Scene_Menu.prototype.commandCreaturepedia = function() {
    SceneManager.push(Scene_Tjs_Creaturepedia);
};
Scene_Menu.prototype.commandVehicle = function() {
    $gamePlayer.ReturnToVehicle();

    this.popScene();
};
Scene_Menu.prototype.RenameActor = function() {
    const selection_index = this._statusWindow.index();
    const actor_index = $gameParty.members()[selection_index].actorId();

    SceneManager.push(Scene_Name);
    SceneManager.prepareNextScene( actor_index, 16 );
};

///-----------------------------------------------------------------------------
/// Scene_Name
///
/// The scene class of the name input screen.
Scene_Name.prototype.onInputOk = function() {
    const new_name = this._editWindow.name();

    if ( new_name.length < 1 ) {
        this.popScene();

        return;
    }
    else if ( new_name === "Turbo Twit" ) {
        AudioManager.playSe( {name: 'tjs/triangle', volume: 98, pitch: 100, pan: 0} );
        $gameSystem.ToggleCheats();

        this.popScene();
        return;
    }
    else if ( new_name === "DevDB" ) {
        AudioManager.playSe( {name: 'tjs/triangle', volume: 98, pitch: 100, pan: 0} );
        DataManager.WriteTjsDataFiles();

        this.popScene();
        return;
    }
    else if ( new_name === "DevPrepDB" ) {
        AudioManager.playSe( {name: 'tjs/triangle', volume: 98, pitch: 100, pan: 0} );
        DataManager.PrepareTjsDataFiles();

        this.popScene();
        return;
    }

    this._actor.setName( new_name );
    this.popScene();
};

///-----------------------------------------------------------------------------
/// Window_MenuCommand
///
/// The window for selecting a command on the menu screen.
Window_MenuCommand.prototype.addMainCommands = function() {
    const enabled = this.areMainCommandsEnabled();
    if (this.needsCommand("item")) {
        this.addCommand( "Inventory / Use Item", "item", enabled );
    }
    if (this.needsCommand("itemData")) {
        this.addCommand( "Item Data", "itemData", enabled );
    }
    if (this.needsCommand("skill")) {
        this.addCommand(TextManager.skill, "skill", enabled);
    }
    if (this.needsCommand("equip")) {
        this.addCommand(TextManager.equip, "equip", enabled);
    }
    if (this.needsCommand("status")) {
        this.addCommand(TextManager.status, "status", enabled);
    }
    if (this.needsCommand("effects")) {
        this.addCommand( "Effects", "effects", enabled );
    }
    if (this.needsCommand("creaturepedia")) {
        this.addCommand( "Creaturepedia", "creaturepedia", enabled );
    }
    if (this.needsCommand("rename")) {
        this.addCommand( "Rename Character", "rename", enabled );
    }
    if ( this.needsCommand("vehicle") && ($gameSystem.inside_vehicle == true) ) {
        this.addCommand( "Drive Vehicle", "vehicle", enabled );
    }
};
Window_MenuCommand.prototype.addFormationCommand = function() {
    if (this.needsCommand("formation")) {
        const enabled = this.isFormationEnabled() && ($gameSystem.inside_vehicle == false);
        this.addCommand(TextManager.formation, "formation", enabled);
    }
};

///-----------------------------------------------------------------------------
/// Scene_Map
///
/// The scene class of the map screen.
Scene_Map.prototype.callMenu = function() {
    if ( $gamePlayer.isInVehicle() ) {
        const vehicle = $gamePlayer.vehicle();
        if ( vehicle ) {
            if ( vehicle.vehicle().interior_map > 0 ) {
                $gamePlayer.GoToVehicleInterior();

                return;
            }
        }
    }

    SoundManager.playOk();
    SceneManager.push(Scene_Menu);
    Window_MenuCommand.initCommandPosition();
    $gameTemp.clearDestination();
    this._mapNameWindow.hide();
    this._waitCount = 2;
};

///-----------------------------------------------------------------------------
/// Game_Vehicle
///
/// The game object class for a vehicle.
Game_Vehicle.prototype.initialize = function(type, sub_type="generic") {
    Game_Character.prototype.initialize.call(this);
    this._type = type;
    this._sub_type = sub_type;
    this.resetDirection();
    this.initMoveSpeed();
    this.loadSystemSettings();
};
Game_Vehicle.prototype.initMembers = function() {
    Game_Character.prototype.initMembers.call(this);
    this._type = "";
    this._sub_type = "";
    this._mapId = 0;
    this._altitude = 0;
    this._driving = false;
    this._bgm = null;
};
Game_Vehicle.prototype.IsLandCraft = function() {
    return this._type === "landcraft";
};
Game_Vehicle.prototype.IsVehicle = function(text) {
    return (this._sub_type === text);
};
Game_Vehicle.prototype.SubType = function() {
    return this._sub_type;
};
Game_Vehicle.prototype.initMoveSpeed = function() {
    const v = this.vehicle();

    if ( v )
        this.setMoveSpeed( v.move_speed );
    else
        this.setMoveSpeed( 4 );
};
Game_Vehicle.prototype.vehicle = function() {
    if ( this.isBoat() ) {
        const v = tjs_vehicles_boat.filter( vehicle => this._sub_type === vehicle.name );
        return (v.length > 0) ? v[0] : null;
    } else if ( this.isShip() ) {
        const v = tjs_vehicles_ship.filter( vehicle => this._sub_type === vehicle.name );
        return (v.length > 0) ? v[0] : null;
    } else if ( this.isAirship() ) {
        const v = tjs_vehicles_skycraft.filter( vehicle => this._sub_type === vehicle.name );
        return (v.length > 0) ? v[0] : null;
    } else if ( this.IsLandCraft() ) {
        const v = tjs_vehicles_landcraft.filter( vehicle => this._sub_type === vehicle.name );
        return (v.length > 0) ? v[0] : null;
    } else {
        return null;
    }
};
Game_Vehicle.prototype.isMapPassable = function(x, y, d) {
    const x2 = $gameMap.roundXWithDirection(x, d);
    const y2 = $gameMap.roundYWithDirection(y, d);
    if (this.isBoat()) {
        return $gameMap.isBoatPassable(x2, y2);
    } else if (this.isShip()) {
        return $gameMap.isShipPassable(x2, y2);
    } else if (this.isAirship()) {
        return true;
    } else if (this.IsLandCraft()) {
        return $gameMap.isAirshipLandOk(x2, y2);
    } else {
        return false;
    }
};
Game_Vehicle.prototype.update = function() {
    Game_Character.prototype.update.call(this);
    if ( this.isAirship() ) {
        this.updateAirship();
    }

    if ( TJS_auto.vehicle_transition_count ) {
        if ( ($gameSystem.vehicle_data.name === this._sub_type) && (TJS_auto.vehicle_transition_count > 0) ) TJS_auto.vehicle_transition_count--;
    }

    if ( this._mapId === $gameMap.mapId() )
        this._opacity = 255;
    else
        this._opacity = 0;
};
Game_Vehicle.prototype.updateAirship = function() {
    this.updateAirshipAltitude();

    if ( TJS_auto.vehicle_transition_count ) {
        if ( ($gameSystem.vehicle_data.name === this._sub_type) && (TJS_auto.vehicle_transition_count > 0) ) this._altitude = this.maxAltitude();
    }

    this.setStepAnime(this.isHighest());
    this.setPriorityType(this.isLowest() ? 0 : 2);
};

///-----------------------------------------------------------------------------
/// Scene_Boot
///
/// The scene class for initializing the entire game.
const alias_TJS_Scene_Boot_initialize = Scene_Boot.prototype.initialize;
Scene_Boot.prototype.initialize = function() {
	alias_TJS_Scene_Boot_initialize.apply(this, arguments);

    this._TjsCustomFunctionsRan = false;
};
const alias_TJS_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	alias_TJS_Scene_Boot_start.apply(this, arguments);

    this.CustomTjs();
};
Scene_Boot.prototype.CustomTjs = function() {
    if ( this._TjsCustomFunctionsRan ) return;

    if ( DataManager.tjs_custom_data_files_exist == true ) {
        $gameSystem.InitDiscoveredArrays();

        DataManager.PrepareTjsDataFiles();

        return;
    }

    $gameSystem.InitDiscoveredArrays();

    this.CustomTjsReallocateAndCompactLevels();
    this.CustomTjsCompactEnemies();

    this.CustomTjsInitObjectVariables();

    this.CustomTjsSetStateTexts();

    // this.CustomTjsSetEquipmentIndicies();
    this.CustomTjsSetDataSkills();

    this.CustomTjsSetEquipmentGroups();
    this.CustomTjsSetSkillGroups();

    this.CustomTjsSetLeveledRates();
    this.CustomTjsSetLeveledParamaterValues();

    this.CustomTjsResetActorEquips();
    // this.CustomTjsSetActorTraits();

    this.CustomTjsStripMetaTags();

    DataManager.PrepareTjsDataFiles();

    this._TjsCustomFunctionsRan = true;
};
Scene_Boot.prototype.CustomTjsStripMetaTags = function() {
    const actors_size = $dataActors.length;
    const enemies_size = $dataEnemies.length;
    const classes_size = $dataClasses.length;
    const weapons_size = $dataWeapons.length;
    const armors_size = $dataArmors.length;
    const items_size = $dataItems.length;
    const skills_size = $dataSkills.length;
    const states_size = $dataStates.length;

    for ( let i = 1; i < actors_size; i++ ) {
        delete $dataActors[i].meta;
        $dataActors[i].note = "";
    }

    for ( let i = 1; i < enemies_size; i++ ) {
        delete $dataEnemies[i].meta;
        $dataEnemies[i].note = "";
    }

    for ( let i = 1; i < classes_size; i++ ) {
        delete $dataClasses[i].meta;
        $dataClasses[i].note = "";
    }

    for ( let i = 1; i < weapons_size; i++ ) {
        delete $dataWeapons[i].meta;
        $dataWeapons[i].note = "";
    }

    for ( let i = 1; i < armors_size; i++ ) {
        delete $dataArmors[i].meta;
        $dataArmors[i].note = "";
    }

    for ( let i = 1; i < items_size; i++ ) {
        delete $dataItems[i].meta;
        $dataItems[i].note = "";
    }

    for ( let i = 1; i < skills_size; i++ ) {
        var new_note = "";
        if ( $dataSkills[i].note.includes("<tjsEnemySkill>") == true ) new_note += "<tjsEnemySkill>";
        if ( $dataSkills[i].note.includes("<tjsSpecialSkill>") == true ) new_note += "<tjsSpecialSkill>";
        if ( $dataSkills[i].note.includes("<tjsUnarmedCombat>") == true ) new_note += "<tjsUnarmedCombat>";
        if ( $dataSkills[i].note.includes("<tjsMiscellaneous>") == true ) new_note += "<tjsMiscellaneous>";

        delete $dataSkills[i].meta;
        $dataSkills[i].note = new_note;
    }

    for ( let i = 1; i < states_size; i++ ) {
        delete $dataStates[i].meta;
        $dataStates[i].note = "";
    }
};
Scene_Boot.prototype.GenerateBlankWeapon = function() {
    const data = {id:2,animationId:0,description:"",etypeId:1,traits:[],iconIndex:0,name:"",note:"",params:[0,0,0,0,0,0,0,0],price:0,wtypeId:0};

    return data;
};
Scene_Boot.prototype.GenerateBlankArmor = function() {
    const data = {id:14,atypeId:0,description:"",etypeId:2,traits:[],iconIndex:0,name:"",note:"",params:[0,0,0,0,0,0,0,0],price:0};

    return data;
};
Scene_Boot.prototype.CustomTjsReallocateAndCompactLevels = function() {
    const weapons_size = $dataWeapons.length;
    const armors_size = $dataArmors.length;

    if ( tjs_max_item_levels < 2 ) return;

    // Weapons
    const blank_weapon = this.GenerateBlankWeapon();
    var new_weapons = [];
    new_weapons.push( null );
    for ( let i = 1; i <= 20; i++ )
        new_weapons.push( $dataWeapons[i].Deep() );

    // Grouped
    for ( let i = 21; i < weapons_size; i++ ) {
        if ( !$dataWeapons[i] ) return;
        const blank = blank_weapon;
        var data = $dataWeapons[i].Deep();

        if ( data.name.length < 1 ) continue;
        if ( data.name[0] === "-" ) continue;
        var has_number_for_name = false;
        for ( let n = 0; n <= 20; n++ ) {
            if ( data.name === String(n) )
                has_number_for_name = true;
        }
        if ( has_number_for_name == true ) continue;

        if ( !data.meta ) continue;
        if ( (!data.meta.tjsGroup) && (!data.meta.tjsHasLevels) ) continue;

        let note_weapon = blank.Deep();
        note_weapon.name = "- " + data.name.Deep();

        data.description = "";
        new_weapons.push( data );

        for ( let d = 2; d <= tjs_max_item_levels; d++ ) {
            let item = blank.Deep();
            item.etypeId = data.etypeId;
            item.wtypeId = data.wtypeId;
            item.name = data.name.Deep() + " " + String(d);

            new_weapons.push( item );
        }
    }
    let note_ungrouped = blank_weapon.Deep();
    note_ungrouped.name = "- Ungrouped";
    note_ungrouped.special = TJS_SPECIAL_NOTE;
    new_weapons.push( note_ungrouped );
    // Non-grouped
    for ( let i = 21; i < weapons_size; i++ ) {
        if ( !$dataWeapons[i] ) return;
        const blank = blank_weapon;
        var data = $dataWeapons[i].Deep();

        if ( data.name.length < 1 ) continue;
        if ( data.name[0] === "-" ) continue;
        var has_number_for_name = false;
        for ( let n = 0; n <= 20; n++ ) {
            if ( data.name === String(n) )
                has_number_for_name = true;
        }
        if ( has_number_for_name == true ) continue;

        if ( !data.meta ) continue;
        if ( (data.meta.tjsGroup) || (data.meta.tjsHasLevels) ) continue;

        new_weapons.push( data );
    }

    // Armors
    const blank_armor = this.GenerateBlankArmor();
    var new_armors = [];
    new_armors.push( null );
    for ( let i = 1; i <= 20; i++ )
        new_armors.push( $dataArmors[i].Deep() );

    // Grouped
    for ( let i = 21; i < armors_size; i++ ) {
        if ( !$dataArmors[i] ) return;
        const blank = blank_armor;
        var data = $dataArmors[i].Deep();

        if ( data.name.length < 1 ) continue;
        if ( data.name[0] === "-" ) continue;
        var has_number_for_name = false;
        for ( let n = 0; n <= 20; n++ ) {
            if ( data.name === String(n) )
                has_number_for_name = true;
        }
        if ( has_number_for_name == true ) continue;

        if ( !data.meta ) continue;
        if ( (!data.meta.tjsGroup) && (!data.meta.tjsHasLevels) ) continue;

        let note_armor = blank.Deep();
        note_armor.name = "- " + data.name.Deep();

        data.description = "";
        new_armors.push( data );

        for ( let d = 2; d <= tjs_max_item_levels; d++ ) {
            let item = blank.Deep();
            item.etypeId = data.etypeId;
            item.atypeId = data.atypeId;
            item.name = data.name.Deep() + " " + String(d);

            new_armors.push( item );
        }
    }
    new_armors.push( blank_armor.Deep() );
    let note_ungrouped2 = blank_armor.Deep();
    note_ungrouped2.name = "- Ungrouped";
    note_ungrouped2.special = TJS_SPECIAL_NOTE;
    new_armors.push( note_ungrouped2 );
    // Non-grouped
    for ( let i = 21; i < armors_size; i++ ) {
        if ( !$dataArmors[i] ) return;
        const blank = blank_armor;
        var data = $dataArmors[i].Deep();

        if ( data.name.length < 1 ) continue;
        if ( data.name[0] === "-" ) continue;
        var has_number_for_name = false;
        for ( let n = 0; n <= 20; n++ ) {
            if ( data.name === String(n) )
                has_number_for_name = true;
        }
        if ( has_number_for_name == true ) continue;

        if ( !data.meta ) continue;
        if ( (data.meta.tjsGroup) || (data.meta.tjsHasLevels) ) continue;

        new_armors.push( data );
    }

    $dataWeapons = new_weapons;
    $dataArmors = new_armors;

    const ids_items = $dataItems.map( (data, idx) => { if (idx < 1) return 0; return data.id; } );
    const ids_weapons = $dataWeapons.map( (data, idx) => { if (idx < 1) return 0; return data.id; } );
    const ids_armors = $dataArmors.map( (data, idx) => { if (idx < 1) return 0; return data.id; } );

    // Actors Equip Data
    for ( let i = 1; i < $dataActors.length; i++ ) {
        var data = $dataActors[i];
        if ( !data ) continue;
        if ( data.name.length < 1 ) continue;

        for ( let equip_index = 0; equip_index < data.equips.length; equip_index++ ) {
            if ( equip_index <= 1 )
                data.equips[equip_index] = ids_weapons.indexOf( data.equips[equip_index] );
            else
                data.equips[equip_index] = ids_armors.indexOf( data.equips[equip_index] );
        }
    }
    // Enemies Drop Item Data
    for ( let i = 1; i < $dataEnemies.length; i++ ) {
        var data = $dataEnemies[i];
        if ( !data ) continue;
        if ( data.name.length < 1 ) continue;

        for ( var drop_item of data.dropItems ) {
            if ( drop_item.kind == 1 )
                drop_item.dataId = ids_items.indexOf( drop_item.dataId );
            else if ( drop_item.kind == 2 )
                drop_item.dataId = ids_weapons.indexOf( drop_item.dataId );
            else if ( drop_item.kind == 3 )
                drop_item.dataId = ids_armors.indexOf( drop_item.dataId );
        }
    }

    for ( let i = 1; i < $dataWeapons.length; i++ ) $dataWeapons[i].id = i;
    for ( let i = 1; i < $dataArmors.length; i++ ) $dataArmors[i].id = i;
};
Scene_Boot.prototype.CustomTjsCompactEnemies = function() {
    var enemies_start = [];
    enemies_start.push( null );

    const enemies_original = $dataEnemies.filter( data => { if (!data) return false; if (!data.meta) return false; if (!data.meta.tjsEncounterCategories) return false; return true; } );
    const enemies = enemies_start.concat( enemies_original.Deep() );

    $dataEnemies = enemies;

    for ( let i = 1; i < $dataEnemies.length; i++ ) $dataEnemies[i].id = i;
};
Scene_Boot.prototype.CustomTjsInitObjectVariables = function() {
    const actors_size = $dataActors.length;
    const enemies_size = $dataEnemies.length;
    const classes_size = $dataClasses.length;
    const weapons_size = $dataWeapons.length;
    const armors_size = $dataArmors.length;
    const items_size = $dataItems.length;
    const skills_size = $dataSkills.length;
    const states_size = $dataStates.length;

    for ( let i = 1; i < actors_size; i++ ) { // Bleck
        var data = $dataActors[i];
        data.description2 = "";
        data.custom_traits = {
            to_hit_physical_add: 0,
            to_hit_physical_multiply: 1,
            to_hit_magical_add: 0,
            to_hit_magical_multiply: 1,
            magic_focus_add: 0,
            magic_focus_multiply: 1,
            magic_focus_debuff_rate: 1,
            max_tactical_points_add: 100,
            max_tactical_points_multiply: 1,
            physical_critical_hit_rate: 0.05,
            magical_critical_hit_rate: 0.05,
            physical_critical_evade_rate: 0,
            magical_critical_evade_rate: 0,
        };

        for ( const trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                data.custom_traits.to_hit_physical_add += trait.value;
                data.custom_traits.to_hit_magical_add += trait.value;
            }
        }

        if ( !data.meta ) continue;

        if ( data.meta.tjsTraitsToHitPhysical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitPhysical );
            data.custom_traits.to_hit_physical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_physical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsToHitMagical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitMagical );
            data.custom_traits.to_hit_magical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_magical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocus ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMagicFocus );
            data.custom_traits.magic_focus_add = data_array[0];
            data.custom_traits.magic_focus_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocusDebuff ) data.custom_traits.magic_focus_debuff_rate = Number( data.meta.tjsTraitsMagicFocusDebuff ) * 0.01;
        if ( data.meta.tjsTraitsMaxTacticalPoints ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMaxTacticalPoints );
            data.custom_traits.max_tactical_points_add = data_array[0];
            data.custom_traits.max_tactical_points_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalHitRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalHitRate );
            data.custom_traits.physical_critical_hit_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_hit_rate = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalEvadeRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalEvadeRate );
            data.custom_traits.physical_critical_evade_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_evade_rate = data_array[1] * 0.01;
        }

        if ( data.meta.tjsEquipPrimaryWeapon ) data.equips[ TJS_auto.GetIndexForEquipmentType("weapon") - 1 ] = Number( data.meta.tjsEquipPrimaryWeapon );
        if ( data.meta.tjsEquipSecondaryWeapon ) data.equips[ TJS_auto.GetIndexForEquipmentType("2nd weapon") - 1 ] = Number( data.meta.tjsEquipSecondaryWeapon );
        if ( data.meta.tjsEquipBackupWeapon ) data.equips[ TJS_auto.GetIndexForEquipmentType("backup weapon") - 1 ] = Number( data.meta.tjsEquipBackupWeapon );
        if ( data.meta.tjsEquipBook ) data.equips[ TJS_auto.GetIndexForEquipmentType("book") - 1 ] = Number( data.meta.tjsEquipBook );
        if ( data.meta.tjsEquipShield ) data.equips[ TJS_auto.GetIndexForEquipmentType("shield") - 1 ] = Number( data.meta.tjsEquipShield );
        if ( data.meta.tjsEquipBelt ) data.equips[ TJS_auto.GetIndexForEquipmentType("belt") - 1 ] = Number( data.meta.tjsEquipBelt );
        if ( data.meta.tjsEquipWristband ) data.equips[ TJS_auto.GetIndexForEquipmentType("wristband") - 1 ] = Number( data.meta.tjsEquipWristband );
        if ( data.meta.tjsEquipGlove ) data.equips[ TJS_auto.GetIndexForEquipmentType("glove") - 1 ] = Number( data.meta.tjsEquipGlove );
        if ( data.meta.tjsEquipSocks ) data.equips[ TJS_auto.GetIndexForEquipmentType("socks") - 1 ] = Number( data.meta.tjsEquipSocks );
        if ( data.meta.tjsEquipShoes ) data.equips[ TJS_auto.GetIndexForEquipmentType("shoes") - 1 ] = Number( data.meta.tjsEquipShoes );
        if ( data.meta.tjsEquipNecklace ) data.equips[ TJS_auto.GetIndexForEquipmentType("necklace") - 1 ] = Number( data.meta.tjsEquipNecklace );
        if ( data.meta.tjsEquipBracelet ) data.equips[ TJS_auto.GetIndexForEquipmentType("bracelet") - 1 ] = Number( data.meta.tjsEquipBracelet );
        if ( data.meta.tjsEquipEarring ) data.equips[ TJS_auto.GetIndexForEquipmentType("earring") - 1 ] = Number( data.meta.tjsEquipEarring );
        if ( data.meta.tjsEquipRing ) data.equips[ TJS_auto.GetIndexForEquipmentType("ring") - 1 ] = Number( data.meta.tjsEquipRing );
        if ( data.meta.tjsEquipAccessory ) data.equips[ TJS_auto.GetIndexForEquipmentType("accessory") - 1 ] = Number( data.meta.tjsEquipAccessory );

        if ( data.meta.tjsInfo ) data.profile = ( data.meta.tjsInfo );
        if ( data.meta.tjsInfo2 ) data.description2 = ( data.meta.tjsInfo2 );
    }

    for ( let i = 1; i < enemies_size; i++ ) { // Blagg
        var data = $dataEnemies[i];
        data.encounter_categories = [];
        data.skill_rules = [];
        data.flying = false;
        data.profile = "";
        data.description2 = "";
        data.initial_tp = 50;
        data.attack_levels = [100];
        data.custom_traits = {
            to_hit_physical_add: 0,
            to_hit_physical_multiply: 1,
            to_hit_magical_add: 0,
            to_hit_magical_multiply: 1,
            magic_focus_add: 1,
            magic_focus_multiply: 1,
            magic_focus_debuff_rate: 1,
            max_tactical_points_add: 100,
            max_tactical_points_multiply: 1,
            physical_critical_hit_rate: 0.05,
            magical_critical_hit_rate: 0.05,
            physical_critical_evade_rate: 0,
            magical_critical_evade_rate: 0,
        };

        for ( const trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                data.custom_traits.to_hit_physical_add += trait.value;
                data.custom_traits.to_hit_magical_add += trait.value;
            }
        }

        if ( !data.meta ) continue;

        if ( data.meta.tjsTraitsToHitPhysical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitPhysical );
            data.custom_traits.to_hit_physical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_physical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsToHitMagical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitMagical );
            data.custom_traits.to_hit_magical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_magical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocus ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMagicFocus );
            data.custom_traits.magic_focus_add = data_array[0];
            data.custom_traits.magic_focus_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocusDebuff ) data.custom_traits.magic_focus_debuff_rate = Number( data.meta.tjsTraitsMagicFocusDebuff ) * 0.01;
        if ( data.meta.tjsTraitsMaxTacticalPoints ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMaxTacticalPoints );
            data.custom_traits.max_tactical_points_add = data_array[0];
            data.custom_traits.max_tactical_points_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalHitRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalHitRate );
            data.custom_traits.physical_critical_hit_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_hit_rate = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalEvadeRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalEvadeRate );
            data.custom_traits.physical_critical_evade_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_evade_rate = data_array[1] * 0.01;
        }

        data.params[0] *= tjs_enemy_hp_adjust * tjs_master_hp_adjust;
        data.params[1] *= tjs_enemy_mp_adjust;
        data.params[2] *= tjs_enemy_strength_adjust;
        data.params[3] *= tjs_enemy_defense_adjust;
        data.params[4] *= tjs_enemy_mana_adjust;
        data.params[5] *= tjs_enemy_magic_defense_adjust;
        data.params[6] *= tjs_enemy_agility_adjust;
        data.custom_traits.magic_focus_add *= tjs_enemy_magic_focus_adjust;
        data.params[7] *= tjs_enemy_luck_adjust;

        if ( data.meta.tjsFlying ) data.flying = true;
        if ( data.meta.tjsInitTp ) data.initial_tp = Number( data.meta.tjsInitTp );
        if ( data.meta.tjsAttackLevels ) {
            try {
                data.attack_levels = JSON.parse( data.meta.tjsAttackLevels );
            } catch (e) {
                console.log( "Error setting attack levels for $dataEnemies[" + i + "]: (ID: " + data.id + ") " + data.name + ", " + e );
            }
        }
        if ( data.actions.length != data.attack_levels.length )
            console.log( "Warning: $dataEnemies[" + i + "] " + data.name + " has " + data.actions.length + " skills, but has " + data.attack_levels.length + " total attack levels set." );

        const categories = ( data.meta.tjsEncounterCategories ) ? JSON.parse( data.meta.tjsEncounterCategories ) : [];
        for ( const category of categories ) {
            data.encounter_categories.push( TJS_auto.GetCategoryNumberFromText(category) );
        }

        if ( data.meta.tjsSkillRules ) {
            data.skill_rule_list_text = data.meta.tjsSkillRules;
            var rule_list = [];
            var list_data_index = 0;
            var finished = false;

            try {
                rule_list = JSON.parse( data.meta.tjsSkillRules );
            } catch (e) {
                console.log( "Error setting skill rule list for: $dataEnemies[" + i + "] " + data.name + ", " + e );

                finished = true;
            }

            while ( finished == false ) {
                if ( (rule_list.length - 1) < (list_data_index + 1) ) {
                    finished = true;

                    break;
                }

                var rule_skill_index = rule_list[list_data_index];
                if ( rule_skill_index >= data.actions.length )
                    console.log( "Warning: $dataEnemies[" + i + "] " + data.name + " has " + data.actions.length + " skills, but has a skill rule for skill index " + rule_skill_index + "." );

                var rule_rule_type_text = rule_list[list_data_index + 1];
                var rule_rule_type = 0;
                var number_elements = 2;

                if ( rule_rule_type_text === "enemy grade" ) {
                    rule_rule_type = TJS_ENEMY_SKILL_RULE_ENEMY_GRADE;
                    number_elements = 4;
                }
                else if ( rule_rule_type_text === "party level" ) {
                    rule_rule_type = TJS_ENEMY_SKILL_RULE_PARTY_LEVEL;
                    number_elements = 4;
                }
                else if ( rule_rule_type_text === "tp level" ) {
                    rule_rule_type = TJS_ENEMY_SKILL_RULE_TP_LEVEL;
                    number_elements = 4;
                }
                else {
                    finished = true;

                    break;
                }

                if ( (rule_list.length - 1) < (list_data_index + number_elements - 1) ) {
                    finished = true;

                    break;
                }

                if ( rule_rule_type_text === "enemy grade" ) {
                    var rule = {};
                    rule.skill_index = rule_skill_index;
                    rule.type = rule_rule_type;
                    rule.grade_min = rule_list[list_data_index + 2];
                    rule.grade_max = rule_list[list_data_index + 3];

                    data.skill_rules.push( rule );
                    list_data_index += 4;
                }
                else if ( rule_rule_type_text === "party level" ) {
                    var rule = {};
                    rule.skill_index = rule_skill_index;
                    rule.type = rule_rule_type;
                    rule.level_min = rule_list[list_data_index + 2];
                    rule.level_max = rule_list[list_data_index + 3];

                    data.skill_rules.push( rule );
                    list_data_index += 4;
                }
                else if ( rule_rule_type_text === "tp level" ) {
                    var rule = {};
                    rule.skill_index = rule_skill_index;
                    rule.type = rule_rule_type;
                    rule.tp_min = rule_list[list_data_index + 2];
                    rule.tp_max = rule_list[list_data_index + 3];

                    data.skill_rules.push( rule );
                    list_data_index += 4;
                }
            }
        }

        if ( data.meta.tjsInfo ) data.profile = data.meta.tjsInfo;
        if ( data.meta.tjsInfo2 ) data.description2 = data.meta.tjsInfo2;
    }

    for ( let i = 1; i < classes_size; i++ ) {
        var data = $dataClasses[i];
        data.custom_traits = {
            to_hit_physical_add: 0,
            to_hit_physical_multiply: 1,
            to_hit_magical_add: 0,
            to_hit_magical_multiply: 1,
            magic_focus_add: 0,
            magic_focus_multiply: 1,
            magic_focus_debuff_rate: 1,
            max_tactical_points_add: 0,
            max_tactical_points_multiply: 1,
            physical_critical_hit_rate: 0,
            magical_critical_hit_rate: 0,
            physical_critical_evade_rate: 0,
            magical_critical_evade_rate: 0,
        };

        for ( const trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                data.custom_traits.to_hit_physical_add += trait.value;
                data.custom_traits.to_hit_magical_add += trait.value;
            }
        }

        if ( !data.meta ) continue;

        if ( data.meta.tjsTraitsToHitPhysical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitPhysical );
            data.custom_traits.to_hit_physical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_physical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsToHitMagical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitMagical );
            data.custom_traits.to_hit_magical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_magical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocus ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMagicFocus );
            data.custom_traits.magic_focus_add = data_array[0];
            data.custom_traits.magic_focus_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocusDebuff ) data.custom_traits.magic_focus_debuff_rate = Number( data.meta.tjsTraitsMagicFocusDebuff ) * 0.01;
        if ( data.meta.tjsTraitsMaxTacticalPoints ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMaxTacticalPoints );
            data.custom_traits.max_tactical_points_add = data_array[0];
            data.custom_traits.max_tactical_points_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalHitRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalHitRate );
            data.custom_traits.physical_critical_hit_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_hit_rate = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalEvadeRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalEvadeRate );
            data.custom_traits.physical_critical_evade_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_evade_rate = data_array[1] * 0.01;
        }
    }

    for ( let i = 1; i < weapons_size; i++ ) {
        var data = $dataWeapons[i];
        data.level = 1;
        // data.description2 = "";
        data.durability = -5000;
        data.max_count = tjs_max_items;
        data.leveled_by_chapter_price = false;
        data.has_levels = false;
        data.weapon_type = 0; // NA.
        data.armor_type = 0; // NA.
        data.equip_type = 1; // Weapon.
        data.special = TJS_SPECIAL_NORMAL;
        data.treasure_type = TJS_TREASURE_PRIMARY_NONE;
        data.custom_traits = {
            to_hit_physical_add: 0,
            to_hit_physical_multiply: 1,
            to_hit_magical_add: 0,
            to_hit_magical_multiply: 1,
            magic_focus_add: 0,
            magic_focus_multiply: 1,
            magic_focus_debuff_rate: 1,
            max_tactical_points_add: 0,
            max_tactical_points_multiply: 1,
            physical_critical_hit_rate: 0,
            magical_critical_hit_rate: 0,
            physical_critical_evade_rate: 0,
            magical_critical_evade_rate: 0,
        };

        for ( const trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                data.custom_traits.to_hit_physical_add += trait.value;
                data.custom_traits.to_hit_magical_add += trait.value;
            }
        }

        if ( !data.meta ) continue;

        if ( data.meta.tjsTreasurePrimaryNone ) data.treasure_type = TJS_TREASURE_PRIMARY_NONE;
        if ( data.meta.tjsTreasurePrimaryCommon ) data.treasure_type = TJS_TREASURE_PRIMARY_COMMON;
        if ( data.meta.tjsTreasurePrimaryUncommon ) data.treasure_type = TJS_TREASURE_PRIMARY_UNCOMMON;
        if ( data.meta.tjsTreasurePrimaryRare ) data.treasure_type = TJS_TREASURE_PRIMARY_RARE;
        if ( data.meta.tjsTreasureSecondaryCommon ) data.treasure_type = TJS_TREASURE_SECONDARY_COMMON;
        if ( data.meta.tjsTreasureSecondaryUncommon ) data.treasure_type = TJS_TREASURE_SECONDARY_UNCOMMON;
        if ( data.meta.tjsTreasureSecondaryRare ) data.treasure_type = TJS_TREASURE_SECONDARY_RARE;

        if ( data.meta.tjsWeaponLevel ) data.level = Number( data.meta.tjsWeaponLevel );
        if ( data.meta.tjsBookLevel ) data.level = Number( data.meta.tjsBookLevel );
        if ( data.meta.tjsItemLevel ) data.level = Number( data.meta.tjsItemLevel );
        if ( data.meta.tjsLevel ) data.level = Number( data.meta.tjsLevel );

        if ( (data.meta.tjsGroup) || (data.meta.tjsHasLevels) ) data.has_levels = true;

        if ( data.meta.tjsTraitsToHitPhysical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitPhysical );
            data.custom_traits.to_hit_physical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_physical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsToHitMagical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitMagical );
            data.custom_traits.to_hit_magical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_magical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocus ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMagicFocus );
            data.custom_traits.magic_focus_add = data_array[0];
            data.custom_traits.magic_focus_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocusDebuff ) data.custom_traits.magic_focus_debuff_rate = Number( data.meta.tjsTraitsMagicFocusDebuff ) * 0.01;
        if ( data.meta.tjsTraitsMaxTacticalPoints ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMaxTacticalPoints );
            data.custom_traits.max_tactical_points_add = data_array[0];
            data.custom_traits.max_tactical_points_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalHitRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalHitRate );
            data.custom_traits.physical_critical_hit_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_hit_rate = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalEvadeRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalEvadeRate );
            data.custom_traits.physical_critical_evade_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_evade_rate = data_array[1] * 0.01;
        }

        if ( data.meta.tjsWeaponType ) data.durability = TJS_auto.GetNumberOfUsesForWeaponAuto( data.meta.tjsWeaponType );
        if ( data.meta.tjsWeaponDurability ) {
            if ( data.meta.tjsWeaponDurability !== "auto" ) data.durability = Number( data.meta.tjsWeaponDurability );
        }
        if ( data.meta.tjsDurability ) {
            if ( data.meta.tjsDurability !== "auto" ) data.durability = Number( data.meta.tjsDurability );
        }
        if ( data.meta.tjsMaxCount ) data.max_count = Number( data.meta.tjsMaxCount );
        if ( (data.meta.tjsLeveledByChapterPrice) || (data.meta.tjsWeapon) || (data.meta.tjsGear) || (data.meta.tjsArmor) || (data.meta.tjsBook) ) data.leveled_by_chapter_price = true;

        if ( data.meta.tjsWeaponType ) data.weapon_type = TJS_auto.GetIndexForWeaponType( data.meta.tjsWeaponType );
        if ( data.meta.tjsArmorType ) data.armor_type = TJS_auto.GetIndexForArmorType( data.meta.tjsArmorType );
        if ( data.meta.tjsEquipType ) data.equip_type = TJS_auto.GetIndexForEquipmentType( data.meta.tjsEquipType );
        if ( data.meta.tjsGearType ) data.equip_type = TJS_auto.GetIndexForEquipmentType( data.meta.tjsGearType );
        if ( data.meta.tjsWeaponType ) data.custom_traits.max_tactical_points_multiply += TJS_auto.GetTpAdjustedMaximumForWeaponAuto( data.meta.tjsWeaponType ) - 1;

        if ( data.meta.tjsSpecial ) {
            try {
                const value = eval( data.meta.tjsSpecial );
                if ( !isNaN(value) ) data.special = value;
            } catch (e) {
                console.log( "Error setting SPECIAL for $dataWeapons[" + i + "]: (ID: " + data.id + ") " + data.name + ", " + e );
            }
        }

        data.params[0] *= tjs_master_hp_adjust;

        data.etypeId = 1;
        if ( data.weapon_type > 0 ) data.wtypeId = data.weapon_type;

        // if ( data.meta.tjsInfo ) data.description = ( data.meta.tjsInfo );
        // if ( data.meta.tjsInfo2 ) data.description2 = ( data.meta.tjsInfo2 );
    }

    for ( let i = 1; i < armors_size; i++ ) {
        var data = $dataArmors[i];
        data.level = 1;
        // data.description2 = "";
        data.durability = -5000;
        data.max_count = tjs_max_items;
        data.leveled_by_chapter_price = false;
        data.has_levels = false;
        data.weapon_type = 0; // NA.
        data.armor_type = 0; // NA.
        data.equip_type = 0; // NA.
        data.special = TJS_SPECIAL_NORMAL;
        data.treasure_type = TJS_TREASURE_PRIMARY_NONE;
        data.custom_traits = {
            to_hit_physical_add: 0,
            to_hit_physical_multiply: 1,
            to_hit_magical_add: 0,
            to_hit_magical_multiply: 1,
            magic_focus_add: 0,
            magic_focus_multiply: 1,
            magic_focus_debuff_rate: 1,
            max_tactical_points_add: 0,
            max_tactical_points_multiply: 1,
            physical_critical_hit_rate: 0,
            magical_critical_hit_rate: 0,
            physical_critical_evade_rate: 0,
            magical_critical_evade_rate: 0,
        };

        for ( const trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                data.custom_traits.to_hit_physical_add += trait.value;
                data.custom_traits.to_hit_magical_add += trait.value;
            }
        }

        if ( !data.meta ) continue;

        if ( data.meta.tjsTreasurePrimaryNone ) data.treasure_type = TJS_TREASURE_PRIMARY_NONE;
        if ( data.meta.tjsTreasurePrimaryCommon ) data.treasure_type = TJS_TREASURE_PRIMARY_COMMON;
        if ( data.meta.tjsTreasurePrimaryUncommon ) data.treasure_type = TJS_TREASURE_PRIMARY_UNCOMMON;
        if ( data.meta.tjsTreasurePrimaryRare ) data.treasure_type = TJS_TREASURE_PRIMARY_RARE;
        if ( data.meta.tjsTreasureSecondaryCommon ) data.treasure_type = TJS_TREASURE_SECONDARY_COMMON;
        if ( data.meta.tjsTreasureSecondaryUncommon ) data.treasure_type = TJS_TREASURE_SECONDARY_UNCOMMON;
        if ( data.meta.tjsTreasureSecondaryRare ) data.treasure_type = TJS_TREASURE_SECONDARY_RARE;

        if ( data.meta.tjsWeaponLevel ) data.level = Number( data.meta.tjsWeaponLevel );
        if ( data.meta.tjsBookLevel ) data.level = Number( data.meta.tjsBookLevel );
        if ( data.meta.tjsItemLevel ) data.level = Number( data.meta.tjsItemLevel );
        if ( data.meta.tjsLevel ) data.level = Number( data.meta.tjsLevel );

        if ( (data.meta.tjsGroup) || (data.meta.tjsHasLevels) ) data.has_levels = true;

        if ( data.meta.tjsTraitsToHitPhysical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitPhysical );
            data.custom_traits.to_hit_physical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_physical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsToHitMagical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitMagical );
            data.custom_traits.to_hit_magical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_magical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocus ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMagicFocus );
            data.custom_traits.magic_focus_add = data_array[0];
            data.custom_traits.magic_focus_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocusDebuff ) data.custom_traits.magic_focus_debuff_rate = Number( data.meta.tjsTraitsMagicFocusDebuff ) * 0.01;
        if ( data.meta.tjsTraitsMaxTacticalPoints ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMaxTacticalPoints );
            data.custom_traits.max_tactical_points_add = data_array[0];
            data.custom_traits.max_tactical_points_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalHitRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalHitRate );
            data.custom_traits.physical_critical_hit_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_hit_rate = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalEvadeRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalEvadeRate );
            data.custom_traits.physical_critical_evade_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_evade_rate = data_array[1] * 0.01;
        }

        if ( data.meta.tjsWeaponType ) data.weapon_type = TJS_auto.GetIndexForWeaponType( data.meta.tjsWeaponType );
        if ( data.meta.tjsArmorType ) data.armor_type = TJS_auto.GetIndexForArmorType( data.meta.tjsArmorType );
        if ( data.meta.tjsEquipType ) data.equip_type = TJS_auto.GetIndexForEquipmentType( data.meta.tjsEquipType );
        if ( data.meta.tjsGearType ) data.equip_type = TJS_auto.GetIndexForEquipmentType( data.meta.tjsGearType );
        if ( (data.meta.tjsArmorType) && (data.meta.tjsEquipType) ) data.custom_traits.max_tactical_points_multiply += TJS_auto.GetTpAdjustedMaximumForGearAuto( data.meta.tjsEquipType, data.meta.tjsArmorType ) - 1;
        if ( (data.meta.tjsArmorType) && (data.meta.tjsGearType) ) data.custom_traits.max_tactical_points_multiply += TJS_auto.GetTpAdjustedMaximumForGearAuto( data.meta.tjsGearType, data.meta.tjsArmorType ) - 1;

        if ( (data.meta.tjsArmorType) && (data.meta.tjsEquipType) ) data.durability = TJS_auto.GetNumberOfUsesForArmorAuto( data.meta.tjsArmorType, data.meta.tjsEquipType );
        if ( (data.meta.tjsArmorType) && (data.meta.tjsGearType) ) data.durability = TJS_auto.GetNumberOfUsesForArmorAuto( data.meta.tjsArmorType, data.meta.tjsGearType );
        if ( data.meta.tjsWeaponDurability ) {
            if ( data.meta.tjsWeaponDurability !== "auto" ) data.durability = Number( data.meta.tjsWeaponDurability );
        }
        if ( data.meta.tjsDurability ) {
            if ( data.meta.tjsDurability !== "auto" ) data.durability = Number( data.meta.tjsDurability );
        }
        if ( data.meta.tjsMaxCount ) data.max_count = Number( data.meta.tjsMaxCount );
        if ( (data.meta.tjsLeveledByChapterPrice) || (data.meta.tjsWeapon) || (data.meta.tjsGear) || (data.meta.tjsArmor) || (data.meta.tjsBook) ) data.leveled_by_chapter_price = true;

        data.params[0] *= tjs_master_hp_adjust;

        if ( data.meta.tjsSpecial ) {
            try {
                const value = eval( data.meta.tjsSpecial );
                if ( !isNaN(value) ) data.special = value;
            } catch (e) {
                console.log( "Error setting SPECIAL for $dataArmors[" + i + "]: (ID: " + data.id + ") " + data.name + ", " + e );
            }
        }

        if ( data.equip_type > 0 ) data.etypeId = data.equip_type;
        if ( data.armor_type > 0 ) data.atypeId = data.armor_type;

        // if ( data.meta.tjsInfo ) data.description = ( data.meta.tjsInfo );
        // if ( data.meta.tjsInfo2 ) data.description2 = ( data.meta.tjsInfo2 );
    }

    for ( let i = 1; i < items_size; i++ ) {
        var data = $dataItems[i];
        data.level = 1;
        data.description2 = "";
        data.aim_adjust = 0;
        data.weapon_type = 0; // NA.
        data.armor_type = 0; // NA.
        data.equip_type = 0; // NA.
        data.special = TJS_SPECIAL_NORMAL;
        data.treasure_type = TJS_TREASURE_PRIMARY_NONE;
        data.skill_type_name = "";
        data.max_count = tjs_max_items;
        data.leveled_by_chapter_price = false;
        data.has_levels = false;
        data.level_count = 1;
        data.food_price = 0;
        data.priority = 9;
        data.ranged = false;
        data.half_physical = 1;
        data.message1 = "";
        data.message2 = "";
        data.auto_message = TJS_SKILL_MESSAGE_CUSTOM;
        data.custom_effects = {
            apply_buff_magic_focus: 0,
            apply_debuff_magic_focus: 0,
            remove_buff_magic_focus: false,
            remove_debuff_magic_focus: false,
            alter_tactical_points: 0,
            alter_magic_focus: 0,
        };

        if ( !data.meta ) continue;

        if ( data.meta.tjsTreasurePrimaryNone ) data.treasure_type = TJS_TREASURE_PRIMARY_NONE;
        if ( data.meta.tjsTreasurePrimaryCommon ) data.treasure_type = TJS_TREASURE_PRIMARY_COMMON;
        if ( data.meta.tjsTreasurePrimaryUncommon ) data.treasure_type = TJS_TREASURE_PRIMARY_UNCOMMON;
        if ( data.meta.tjsTreasurePrimaryRare ) data.treasure_type = TJS_TREASURE_PRIMARY_RARE;
        if ( data.meta.tjsTreasureSecondaryCommon ) data.treasure_type = TJS_TREASURE_SECONDARY_COMMON;
        if ( data.meta.tjsTreasureSecondaryUncommon ) data.treasure_type = TJS_TREASURE_SECONDARY_UNCOMMON;
        if ( data.meta.tjsTreasureSecondaryRare ) data.treasure_type = TJS_TREASURE_SECONDARY_RARE;

        if ( data.meta.tjsArmorLevel ) data.level = Number( data.meta.tjsArmorLevel );
        if ( data.meta.tjsWeaponLevel ) data.level = Number( data.meta.tjsWeaponLevel );
        if ( data.meta.tjsBookLevel ) data.level = Number( data.meta.tjsBookLevel );
        if ( data.meta.tjsItemLevel ) data.level = Number( data.meta.tjsItemLevel );
        if ( data.meta.tjsLevel ) data.level = Number( data.meta.tjsLevel );

        if ( data.meta.tjsSkillTypeName ) data.skill_type_name = data.meta.tjsSkillTypeName;
        if ( data.meta.tjsSkillTypeNamePrepend ) data.skill_type_name = data.meta.tjsSkillTypeNamePrepend + " " + data.skill_type_name;

        if ( (data.meta.tjsGroup) || (data.meta.tjsHasLevels) ) data.has_levels = true;
        if ( data.meta.tjsLevelCount ) data.level_count = Number( data.meta.tjsLevelCount );
        if ( data.meta.tjsMaxCount ) data.max_count = Number( data.meta.tjsMaxCount );

        if ( data.meta.tjsEffectsBuffMagicFocus ) data.custom_effects.apply_buff_magic_focus = Number( data.meta.tjsEffectsBuffMagicFocus );
        if ( data.meta.tjsEffectsDebuffMagicFocus ) data.custom_effects.apply_debuff_magic_focus = Number( data.meta.tjsEffectsDebuffMagicFocus );
        if ( data.meta.tjsEffectsRemoveBuffMagicFocus ) data.custom_effects.remove_buff_magic_focus = true;
        if ( data.meta.tjsEffectsRemoveDebuffMagicFocus ) data.custom_effects.remove_debuff_magic_focus = true;
        if ( data.meta.tjsEffectsAlterTacticalPoints ) data.custom_effects.alter_tactical_points = Number( data.meta.tjsEffectsAlterTacticalPoints );
        if ( data.meta.tjsEffectsAlterMagicFocus ) data.custom_effects.alter_magic_focus = Number( data.meta.tjsEffectsAlterMagicFocus );

        if ( data.meta.tjsWeaponType ) data.weapon_type = TJS_auto.GetIndexForWeaponType( data.meta.tjsWeaponType );
        if ( data.meta.tjsArmorType ) data.armor_type = TJS_auto.GetIndexForArmorType( data.meta.tjsArmorType );
        if ( data.meta.tjsEquipType ) data.equip_type = TJS_auto.GetIndexForEquipmentType( data.meta.tjsEquipType );
        if ( data.meta.tjsGearType ) data.equip_type = TJS_auto.GetIndexForEquipmentType( data.meta.tjsGearType );
        if ( (data.meta.tjsArmorType) && (data.meta.tjsEquipType) ) data.custom_traits.max_tactical_points_multiply += TJS_auto.GetTpAdjustedMaximumForGearAuto( data.meta.tjsEquipType, data.meta.tjsArmorType ) - 1;
        if ( (data.meta.tjsArmorType) && (data.meta.tjsGearType) ) data.custom_traits.max_tactical_points_multiply += TJS_auto.GetTpAdjustedMaximumForGearAuto( data.meta.tjsGearType, data.meta.tjsArmorType ) - 1;

        if ( (data.meta.tjsLeveledByChapterPrice) || (data.meta.tjsWeapon) || (data.meta.tjsGear) || (data.meta.tjsArmor) || (data.meta.tjsBook) ) data.leveled_by_chapter_price = true;
        if ( data.meta.tjsAimAdjust ) data.aim_adjust = Number( data.meta.tjsAimAdjust );
        if ( data.meta.tjsFoodPrice ) data.food_price = Number( data.meta.tjsFoodPrice );
        if ( data.meta.tjsPriority ) data.priority = Number( data.meta.tjsPriority );
        if ( data.meta.tjsRanged ) data.ranged = true;
        if ( data.meta.tjsMessageOverride1 ) data.message1 = data.meta.tjsMessageOverride1;
        if ( data.meta.tjsMessageOverride2 ) data.message2 = data.meta.tjsMessageOverride2;
        if ( data.meta.tjsMessageCustom ) data.auto_message = TJS_SKILL_MESSAGE_CUSTOM;
        if ( data.meta.tjsMessageUses ) data.auto_message = TJS_SKILL_MESSAGE_USES;
        if ( data.meta.tjsMessageAttacks ) data.auto_message = TJS_SKILL_MESSAGE_ATTACKS;
        if ( data.meta.tjsMessageAttacksWith ) data.auto_message = TJS_SKILL_MESSAGE_ATTACKS_WITH;
        if ( data.meta.tjsMessageCasts ) data.auto_message = TJS_SKILL_MESSAGE_CASTS;
        if ( data.meta.tjsTpGain ) data.tpGain = Number( data.meta.tjsTpGain );

        if ( data.meta.tjsSpecial ) {
            try {
                const value = eval( data.meta.tjsSpecial );
                if ( !isNaN(value) ) data.special = value;
            } catch (e) {
                console.log( "Error setting SPECIAL for $dataItems[" + i + "]: (ID: " + data.id + ") " + data.name + ", " + e );
            }
        }

        if ( data.meta.tjsInfo ) data.description = ( data.meta.tjsInfo );
        if ( data.meta.tjsInfo2 ) data.description2 = ( data.meta.tjsInfo2 );
    }

    for ( let i = 1; i < skills_size; i++ ) {
        var data = $dataSkills[i];
        data.aim_adjust = 0;
        data.weapon_type = 0; // NA.
        data.armor_type = 0; // NA.
        data.equip_type = 0; // NA.
        data.skill_type_name = "";
        data.priority = 9;
        data.ranged = false;
        data.durability_uses = 1;
        data.half_physical = 1;
        data.auto_message = TJS_SKILL_MESSAGE_CUSTOM;
        data.show_level = false;
        // data.group_start = -1;
        data.custom_effects = {
            apply_buff_magic_focus: 0,
            apply_debuff_magic_focus: 0,
            remove_buff_magic_focus: false,
            remove_debuff_magic_focus: false,
            alter_tactical_points: 0,
            alter_magic_focus: 0,
        };

        if ( !data.meta ) continue;
        if ( data.meta.tjsWeaponType ) data.weapon_type = TJS_auto.GetIndexForWeaponType( data.meta.tjsWeaponType );
        if ( data.meta.tjsArmorType ) data.armor_type = TJS_auto.GetIndexForArmorType( data.meta.tjsArmorType );
        if ( data.meta.tjsEquipType ) data.equip_type = TJS_auto.GetIndexForEquipmentType( data.meta.tjsEquipType );
        if ( data.meta.tjsGearType ) data.equip_type = TJS_auto.GetIndexForEquipmentType( data.meta.tjsGearType );

        data.skill_type_name = TJS_auto.GetSkillTypeNameAuto( data.weapon_type, data.armor_type, data.equip_type );
        if ( data.meta.tjsSkillTypeName ) data.skill_type_name = data.meta.tjsSkillTypeName;
        if ( data.meta.tjsSkillTypeNamePrepend ) data.skill_type_name = data.meta.tjsSkillTypeNamePrepend + " " + data.skill_type_name;

        if ( data.meta.tjsEffectsBuffMagicFocus ) data.custom_effects.apply_buff_magic_focus = Number( data.meta.tjsEffectsBuffMagicFocus );
        if ( data.meta.tjsEffectsDebuffMagicFocus ) data.custom_effects.apply_debuff_magic_focus = Number( data.meta.tjsEffectsDebuffMagicFocus );
        if ( data.meta.tjsEffectsRemoveBuffMagicFocus ) data.custom_effects.remove_buff_magic_focus = true;
        if ( data.meta.tjsEffectsRemoveDebuffMagicFocus ) data.custom_effects.remove_debuff_magic_focus = true;
        if ( data.meta.tjsEffectsAlterTacticalPoints ) data.custom_effects.alter_tactical_points = Number( data.meta.tjsEffectsAlterTacticalPoints );
        if ( data.meta.tjsEffectsAlterMagicFocus ) data.custom_effects.alter_magic_focus = Number( data.meta.tjsEffectsAlterMagicFocus );

        var skill_equip_type = "none";
        var skill_weapon_type = "none";
        var skill_armor_type = "none";
        if ( data.meta.tjsEquipType ) skill_equip_type = data.meta.tjsEquipType;
        if ( data.meta.tjsGearType ) skill_equip_type = data.meta.tjsGearType;
        if ( data.meta.tjsWeaponType ) skill_weapon_type = data.meta.tjsWeaponType;
        if ( data.meta.tjsArmorType ) skill_armor_type = data.meta.tjsArmorType;

        data.aim_adjust = TJS_auto.GetAimAdjustForSkill( skill_equip_type, skill_weapon_type, skill_armor_type );
        if ( data.meta.tjsAimAdjust ) data.aim_adjust += Number( data.meta.tjsAimAdjust ) * 0.01;
        if ( data.meta.tjsPriority ) data.priority = Number( data.meta.tjsPriority );
        if ( data.meta.tjsRanged ) data.ranged = true;
        if ( data.meta.tjsDurabilityUses ) data.durability_uses = Number( data.meta.tjsDurabilityUses );
        if ( data.meta.tjsMessageCustom ) data.auto_message = TJS_SKILL_MESSAGE_CUSTOM;
        if ( data.meta.tjsMessageUses ) data.auto_message = TJS_SKILL_MESSAGE_USES;
        if ( data.meta.tjsMessageAttacks ) data.auto_message = TJS_SKILL_MESSAGE_ATTACKS;
        if ( data.meta.tjsMessageAttacksWith ) data.auto_message = TJS_SKILL_MESSAGE_ATTACKS_WITH;
        if ( data.meta.tjsMessageCasts ) data.auto_message = TJS_SKILL_MESSAGE_CASTS;
        if ( data.meta.tjsMessageOverride1 ) data.message1 = data.meta.tjsMessageOverride1;
        if ( data.meta.tjsMessageOverride2 ) data.message2 = data.meta.tjsMessageOverride2;
        if ( data.meta.tjsTpCost ) data.tpCost = Number( data.meta.tjsTpCost );
        if ( data.meta.tjsTpGain ) data.tpGain = Number( data.meta.tjsTpGain );
        if ( data.meta.tjsShowItemLevelInSkillCost ) data.show_level = true;
        // if ( data.meta.tjsSkillGroupStart ) data.group_start = Number( data.meta.tjsSkillGroupStart );

        if ( data.meta.tjsInfo ) data.description = ( data.meta.tjsInfo );
    }

    for ( let i = 1; i < states_size; i++ ) {
        var data = $dataStates[i];
        data.level = 1;
        data.description = "";
        data.description2 = "";
        // data.multi_level_state = -1;
        // data.multi_level_state_averaged = -1;
        data.custom_traits = {
            to_hit_physical_add: 0,
            to_hit_physical_multiply: 1,
            to_hit_magical_add: 0,
            to_hit_magical_multiply: 1,
            magic_focus_add: 0,
            magic_focus_multiply: 1,
            magic_focus_debuff_rate: 1,
            max_tactical_points_add: 0,
            max_tactical_points_multiply: 1,
            physical_critical_hit_rate: 0,
            magical_critical_hit_rate: 0,
            physical_critical_evade_rate: 0,
            magical_critical_evade_rate: 0,
        };

        for ( const trait of data.traits ) {
            if ( (trait.code == Game_BattlerBase.TRAIT_XPARAM) && (trait.dataId == 0) ) {
                data.custom_traits.to_hit_physical_add += trait.value;
                data.custom_traits.to_hit_magical_add += trait.value;
            }
        }

        if ( !data.meta ) continue;
        if ( data.meta.tjsLevel ) data.level = Number( data.meta.tjsLevel );
        if ( data.meta.tjsMessage1 ) data.message1 = data.meta.tjsMessage1;
        if ( data.meta.tjsMessage2 ) data.message2 = data.meta.tjsMessage2;
        if ( data.meta.tjsMessage3 ) data.message3 = data.meta.tjsMessage3;
        if ( data.meta.tjsMessage4 ) data.message4 = data.meta.tjsMessage4;
        // if ( data.meta.tjsMultiLevelState ) data.multi_level_state = Number( data.meta.tjsMultiLevelState );
        // if ( data.meta.tjsMultiLevelStateAveraged ) data.multi_level_state_averaged = Number( data.meta.tjsMultiLevelStateAveraged );

        if ( data.meta.tjsTraitsToHitPhysical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitPhysical );
            data.custom_traits.to_hit_physical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_physical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsToHitMagical ) {
            const data_array = JSON.parse( data.meta.tjsTraitsToHitMagical );
            data.custom_traits.to_hit_magical_add = data_array[0] * 0.01;
            data.custom_traits.to_hit_magical_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocus ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMagicFocus );
            data.custom_traits.magic_focus_add = data_array[0];
            data.custom_traits.magic_focus_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsMagicFocusDebuff ) data.custom_traits.magic_focus_debuff_rate = Number( data.meta.tjsTraitsMagicFocusDebuff ) * 0.01;
        if ( data.meta.tjsTraitsMaxTacticalPoints ) {
            const data_array = JSON.parse( data.meta.tjsTraitsMaxTacticalPoints );
            data.custom_traits.max_tactical_points_add = data_array[0];
            data.custom_traits.max_tactical_points_multiply = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalHitRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalHitRate );
            data.custom_traits.physical_critical_hit_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_hit_rate = data_array[1] * 0.01;
        }
        if ( data.meta.tjsTraitsCriticalEvadeRate ) {
            const data_array = JSON.parse( data.meta.tjsTraitsCriticalEvadeRate );
            data.custom_traits.physical_critical_evade_rate = data_array[0] * 0.01;
            data.custom_traits.magical_critical_evade_rate = data_array[1] * 0.01;
        }

        if ( data.meta.tjsInfo ) data.description = ( data.meta.tjsInfo );
        if ( data.meta.tjsInfo2 ) data.description2 = ( data.meta.tjsInfo2 );
    }

    TJS_auto.highest_enemy_category = TJS_auto.GetCategoryNumberFromText( "MAX" );
};
/**
 * Deprecated
 */
Scene_Boot.prototype.CustomTjsSetActorTraits = function() {
    const actors_size = $dataActors.length;
    const enemies_size = $dataEnemies.length;

    // Actors
    for ( let i = 1; i < actors_size; i++ ) {
        if ( !$dataActors[i] ) continue;
        const actor = $dataActors[i];

        const traits_size = actor.traits.length;
        if ( traits_size < 1 ) continue;
        var n_traits = [];

        for ( let t = 0; t < traits_size; t++ ) {
            if ( !actor.traits[t] ) continue;
            var trait_t = TJS_auto.DeepCopy( actor.traits[t] );

            if ( (trait_t.code == Game_BattlerBase.TRAIT_STATE_RATE) || (trait_t.code == Game_BattlerBase.TRAIT_STATE_RESIST) ) {
                if ( $dataStates[trait_t.dataId].meta ) {
                    if ( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged ) {
                        const multistate_id = Number( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged );

                        for ( let s = 0; s < 10; s++ ) {
                            var trait_state_rate = TJS_auto.DeepCopy( trait_t );

                            trait_state_rate.dataId = s + multistate_id;
                            n_traits.push( trait_state_rate );
                        }

                        continue;
                    }
                }
            }

            n_traits.push( trait_t );
        }

        actor.traits = TJS_auto.DeepCopy( n_traits );
    }

    // Enemies
    for ( let i = 1; i < enemies_size; i++ ) {
        if ( !$dataEnemies[i] ) continue;
        const actor = $dataEnemies[i];

        const traits_size = actor.traits.length;
        if ( traits_size < 1 ) continue;
        var n_traits = [];

        for ( let t = 0; t < traits_size; t++ ) {
            if ( !actor.traits[t] ) continue;
            var trait_t = TJS_auto.DeepCopy( actor.traits[t] );

            if ( (trait_t.code == Game_BattlerBase.TRAIT_STATE_RATE) || (trait_t.code == Game_BattlerBase.TRAIT_STATE_RESIST) ) {
                if ( $dataStates[trait_t.dataId].meta ) {
                    if ( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged ) {
                        const multistate_id = Number( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged );

                        for ( let s = 0; s < 10; s++ ) {
                            var trait_state_rate = TJS_auto.DeepCopy( trait_t );

                            trait_state_rate.dataId = s + multistate_id;
                            n_traits.push( trait_state_rate );
                        }

                        continue;
                    }
                }
            }

            n_traits.push( trait_t );
        }

        actor.traits = TJS_auto.DeepCopy( n_traits );
    }
};
Scene_Boot.prototype.CustomTjsResetActorEquips = function() {
    const actors_size = $dataActors.length;

    for ( let i = 1; i < actors_size; i++ ) {
        if ( !$dataActors[i].meta ) continue;
        const actor = $dataActors[i];
        var equipment_list = [];

        for ( let gear_index = 0; gear_index < $dataSystem.equipTypes.length; gear_index++ ) {
            if ( gear_index < $dataActors[i].equips.length ) {
                equipment_list.push( Number($dataActors[i].equips[gear_index]) );
            } else {
                equipment_list.push( 0 );
            }
        }

        if ( actor.meta.tjsEquipPrimaryWeapon ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "weapon" ) - 1 ] = Number( actor.meta.tjsEquipPrimaryWeapon );
        if ( actor.meta.tjsEquipSecondaryWeapon ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "2nd weapon" ) - 1 ] = Number( actor.meta.tjsEquipSecondaryWeapon );
        if ( actor.meta.tjsEquipBackupWeapon ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "backup weapon" ) - 1 ] = Number( actor.meta.tjsEquipBackupWeapon );
        if ( actor.meta.tjsEquipBook ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "book" ) - 1 ] = Number( actor.meta.tjsEquipBook );
        if ( actor.meta.tjsEquipShield ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "shield" ) - 1 ] = Number( actor.meta.tjsEquipShield );
        if ( actor.meta.tjsEquipBelt ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "belt" ) - 1 ] = Number( actor.meta.tjsEquipBelt );
        if ( actor.meta.tjsEquipWristband ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "wristband" ) - 1 ] = Number( actor.meta.tjsEquipWristband );
        if ( actor.meta.tjsEquipGlove ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "glove" ) - 1 ] = Number( actor.meta.tjsEquipGlove );
        if ( actor.meta.tjsEquipSocks ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "socks" ) - 1 ] = Number( actor.meta.tjsEquipSocks );
        if ( actor.meta.tjsEquipShoes ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "shoes" ) - 1 ] = Number( actor.meta.tjsEquipShoes );
        if ( actor.meta.tjsEquipNecklace ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "necklace" ) - 1 ] = Number( actor.meta.tjsEquipNecklace );
        if ( actor.meta.tjsEquipBracelet ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "bracelet" ) - 1 ] = Number( actor.meta.tjsEquipBracelet );
        if ( actor.meta.tjsEquipEarring ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "earring" ) - 1 ] = Number( actor.meta.tjsEquipEarring );
        if ( actor.meta.tjsEquipRing ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "ring" ) - 1 ] = Number( actor.meta.tjsEquipRing );
        if ( actor.meta.tjsEquipAccessory ) equipment_list[ TJS_auto.GetIndexForEquipmentType( "accessory" ) - 1 ] = Number( actor.meta.tjsEquipAccessory );

        $dataActors[i].equips = equipment_list;
    }
};
Scene_Boot.prototype.CustomTjsSetDataSkills = function() {
    const skills_size = $dataSkills.length;
    const items_size = $dataItems.length;

    for ( let i = 1; i < skills_size; i++ ) {
        if ( !$dataSkills[i].meta ) continue;

        var data = TJS_auto.DeepCopy( $dataSkills[i] );
        // data.aim_adjust = 0.00000; // GetAimAdjustForSkill = function(equipTypeText, weaponTypeText, armorTypeText)

        var data_equip_type = "none";
        var data_weapon_type = "none";
        var data_armor_type = "none";
        if ( data.meta.tjsEquipType ) data_equip_type = data.meta.tjsEquipType;
        if ( data.meta.tjsWeaponType ) data_weapon_type = data.meta.tjsWeaponType;
        if ( data.meta.tjsArmorType ) data_armor_type = data.meta.tjsArmorType;

        if ( data.meta.tjsHalfPhysical ) {
            if ( data.meta.tjsHalfPhysical === "auto" ) {

                if ( data.damage.elementId == 1 )
                    data.meta.tjsHalfPhysical = 1.00000;
                else
                    data.meta.tjsHalfPhysical = TJS_auto.GetHalfPhysicalValueForSkill( data_equip_type, data_weapon_type, data_armor_type );
            }

            data.half_physical = data.meta.tjsHalfPhysical;
        }
        else {
            data.half_physical = -1;
        }
        if ( data.meta.tjsTpCost ) data.tpCost = Number( data.meta.tjsTpCost );
        if ( data.meta.tjsTpGain ) data.tpGain = Number( data.meta.tjsTpGain );
        if ( data.meta.tjsMessageOverride1 ) data.message1 = data.meta.tjsMessageOverride1;
        if ( data.meta.tjsMessageOverride2 ) data.message2 = data.meta.tjsMessageOverride2;

        $dataSkills[i] = data;
    }

    for ( let i = 1; i < items_size; i++ ) {
        if ( !$dataItems[i].meta ) continue;

        var data = TJS_auto.DeepCopy( $dataItems[i] );

        var data_equip_type = "none";
        var data_weapon_type = "none";
        var data_armor_type = "none";
        if ( data.meta.tjsEquipType ) data_equip_type = data.meta.tjsEquipType;
        if ( data.meta.tjsWeaponType ) data_weapon_type = data.meta.tjsWeaponType;
        if ( data.meta.tjsArmorType ) data_armor_type = data.meta.tjsArmorType;

        if ( data.meta.tjsHalfPhysical ) {
            if ( data.meta.tjsHalfPhysical === "auto" ) {

                if ( data.damage.elementId == 1 )
                    data.meta.tjsHalfPhysical = 1.00000;
                else
                    data.meta.tjsHalfPhysical = TJS_auto.GetHalfPhysicalValueForSkill( data_equip_type, data_weapon_type, data_armor_type );
            }

            data.half_physical = data.meta.tjsHalfPhysical;
        }
        else {
            data.half_physical = -1;
        }
        if ( data.meta.tjsTpCost ) data.tpCost = Number( data.meta.tjsTpCost );
        if ( data.meta.tjsTpGain ) data.tpGain = Number( data.meta.tjsTpGain );
        if ( data.meta.tjsMessageOverride1 ) data.message1 = data.meta.tjsMessageOverride1;
        if ( data.meta.tjsMessageOverride2 ) data.message2 = data.meta.tjsMessageOverride2;

        $dataItems[i] = data;
    }
};
Scene_Boot.prototype.CustomTjsSetEquipmentIndicies = function() {
    const weapons_size = $dataWeapons.length;
    const armors_size = $dataArmors.length;

    for ( let i = 1; i < weapons_size; i++ ) {
        if ( !$dataWeapons[i].meta ) continue;

        if ( $dataWeapons[i].meta.tjsGearType ) $dataWeapons[i].etypeId = TJS_auto.GetIndexForEquipmentType( $dataWeapons[i].meta.tjsGearType );
        if ( $dataWeapons[i].meta.tjsEquipType ) $dataWeapons[i].etypeId = TJS_auto.GetIndexForEquipmentType( $dataWeapons[i].meta.tjsEquipType );
        if ( $dataWeapons[i].meta.tjsWeaponType ) $dataWeapons[i].wtypeId = TJS_auto.GetIndexForWeaponType( $dataWeapons[i].meta.tjsWeaponType );
    }
    for ( let i = 1; i < armors_size; i++ ) {
        if ( !$dataArmors[i].meta ) continue;

        if ( $dataArmors[i].meta.tjsGearType ) $dataArmors[i].etypeId = TJS_auto.GetIndexForEquipmentType( $dataArmors[i].meta.tjsGearType );
        if ( $dataArmors[i].meta.tjsEquipType ) $dataArmors[i].etypeId = TJS_auto.GetIndexForEquipmentType( $dataArmors[i].meta.tjsEquipType );
        if ( $dataArmors[i].meta.tjsArmorType ) $dataArmors[i].atypeId = TJS_auto.GetIndexForArmorType( $dataArmors[i].meta.tjsArmorType );
    }
};
Scene_Boot.prototype.CustomTjsSetSkillGroups = function() {
    const skills_size = $dataSkills.length;

    var apply_count = 0;
    var item = {};

    // Skills
    for ( let i = 1; i < skills_size; i++ ) {
        if ( apply_count == 0 ) {
            if ( !$dataSkills[i] ) continue;
            if ( !$dataSkills[i].meta ) continue;
            if ( i > skills_size - tjs_max_item_levels ) continue;

            if ( $dataSkills[i].meta.tjsGroup ) {
                item = TJS_auto.DeepCopy( $dataSkills[i] );

                apply_count = 9;

                $dataSkills[i].name = item.name + " 1";

                if ( item.effects.length < 1 ) continue;

                var effect_array = [];

                for ( let f = 0; f < item.effects.length; f++ ) {
                    if ( item.effects[f].code == Game_Action.EFFECT_ADD_STATE ) {
                        const item_state_id = item.effects[f].dataId;
                        const starting_state_id = Number( $dataStates[item_state_id].meta.tjsMultiLevelStateAveraged );

                        var effect = TJS_auto.DeepCopy( item.effects[f] );
                        effect.dataId = starting_state_id;
                        effect_array.push( effect );
                    }
                    else if ( item.effects[f].code == Game_Action.EFFECT_RECOVER_HP ) {
                        const effect = TJS_auto.DeepCopy( item.effects[f] );
                        effect.value1 *= 0.10000;
                        effect.value2 *= 0.10000;

                        effect_array.push( effect );
                    }
                    else if ( item.effects[f].code == Game_Action.EFFECT_RECOVER_MP ) {
                        const effect = TJS_auto.DeepCopy( item.effects[f] );
                        effect.value1 *= 0.10000;
                        effect.value2 *= 0.10000;

                        effect_array.push( effect );
                    }
                    else if ( item.effects[f].code == Game_Action.EFFECT_GAIN_TP ) {
                        const effect = TJS_auto.DeepCopy( item.effects[f] );
                        effect.value1 *= 0.10000;

                        effect_array.push( effect );
                    }
                    else if ( item.effects[f].code == Game_Action.EFFECT_GROW ) {
                        const effect = TJS_auto.DeepCopy( item.effects[f] );
                        effect.value2 *= 0.10000;

                        effect_array.push( effect );
                    }
                    else {
                        const effect = TJS_auto.DeepCopy( item.effects[f] );
                        effect_array.push( effect );
                    }
                }

                $dataSkills[i].effects = effect_array;
            }
        }
        else if ( apply_count > 0 ) {
            $dataSkills[i] = TJS_auto.DeepCopy( item );

            const item_lvl = 11 - apply_count;

            $dataSkills[i].id = i;
            $dataSkills[i].name = item.name + " " + String( item_lvl );

            apply_count--;

            if ( item.effects.length < 1 ) continue;

            var effect_array = [];

            for ( let f = 0; f < item.effects.length; f++ ) {
                if ( item.effects[f].code == Game_Action.EFFECT_ADD_STATE ) {
                    const item_state_id = item.effects[f].dataId;
                    const starting_state_id = Number( $dataStates[item_state_id].meta.tjsMultiLevelStateAveraged );

                    var effect = TJS_auto.DeepCopy( item.effects[f] );
                    effect.dataId = starting_state_id + item_lvl - 1;
                    effect_array.push( effect );
                }
                else if ( item.effects[f].code == Game_Action.EFFECT_RECOVER_HP ) {
                    const effect = TJS_auto.DeepCopy( item.effects[f] );
                    effect.value1 *= 0.10000 * item_lvl;
                    effect.value2 *= 0.10000 * item_lvl;

                    effect_array.push( effect );
                }
                else if ( item.effects[f].code == Game_Action.EFFECT_RECOVER_MP ) {
                    const effect = TJS_auto.DeepCopy( item.effects[f] );
                    effect.value1 *= 0.10000 * item_lvl;
                    effect.value2 *= 0.10000 * item_lvl;

                    effect_array.push( effect );
                }
                else if ( item.effects[f].code == Game_Action.EFFECT_GAIN_TP ) {
                    const effect = TJS_auto.DeepCopy( item.effects[f] );
                    effect.value1 *= 0.10000 * item_lvl;

                    effect_array.push( effect );
                }
                else if ( item.effects[f].code == Game_Action.EFFECT_GROW ) {
                    const effect = TJS_auto.DeepCopy( item.effects[f] );
                    effect.value2 *= 0.10000 * item_lvl;

                    effect_array.push( effect );
                }
                else {
                    const effect = TJS_auto.DeepCopy( item.effects[f] );
                    effect_array.push( effect );
                }
            }

            $dataSkills[i].effects = effect_array;
        }
    }
};
Scene_Boot.prototype.CustomTjsSetEquipmentGroups = function() {
    const weapons_size = $dataWeapons.length;
    const armors_size = $dataArmors.length;
    const items_size = $dataItems.length;
    const states_size = $dataStates.length;

    var apply_count = 0;
    var item = {};

    // Weapons
    apply_count = 0;
    item = {};
    for ( let i = 1; i < weapons_size; i++ ) {
        if ( apply_count == 0 ) {
            if ( !$dataWeapons[i] ) continue;
            if ( !$dataWeapons[i].meta ) continue;
            if ( i > weapons_size - tjs_max_item_levels ) continue;

            if ( $dataWeapons[i].meta.tjsGroup ) {
                item = JSON.parse(JSON.stringify( $dataWeapons[i] ));
                apply_count = tjs_max_item_levels - 1;
                $dataWeapons[i].name = tjs_item_level_names[0] + " " + item.name;
            }
        }
        else if ( apply_count > 0 ) {
            $dataWeapons[i] = JSON.parse(JSON.stringify( item ));

            const item_lvl = 1 + tjs_max_item_levels - apply_count;

            $dataWeapons[i].id = i;
            $dataWeapons[i].name = String( tjs_item_level_names[item_lvl - 1] ) + " " + item.name;
            $dataWeapons[i].level = item_lvl;

            if ( item.meta.tjsLevel ) $dataWeapons[i].meta.tjsLevel = Number( item_lvl );
            if ( item.meta.tjsWeaponLevel ) $dataWeapons[i].meta.tjsWeaponLevel = String( item_lvl );
            if ( item.meta.tjsItemLevel ) $dataWeapons[i].meta.tjsItemLevel = String( item_lvl );

            apply_count--;
        }
    }

    // Armors
    apply_count = 0;
    item = {};
    for ( let i = 1; i < armors_size; i++ ) {
        if ( apply_count == 0 ) {
            if ( !$dataArmors[i] ) continue;
            if ( !$dataArmors[i].meta ) continue;
            if ( i > armors_size - tjs_max_item_levels ) continue;

            if ( $dataArmors[i].meta.tjsGroup ) {
                item = JSON.parse(JSON.stringify( $dataArmors[i] ));
                apply_count = tjs_max_item_levels - 1;
                $dataArmors[i].name = tjs_item_level_names[0] + " " + item.name;
            }
        }
        else if ( apply_count > 0 ) {
            $dataArmors[i] = JSON.parse(JSON.stringify( item ));

            const item_lvl = 1 + tjs_max_item_levels - apply_count;

            $dataArmors[i].id = i;
            $dataArmors[i].name = String( tjs_item_level_names[item_lvl - 1] ) + " " + item.name;
            $dataArmors[i].level = item_lvl;

            if ( item.meta.tjsLevel ) $dataArmors[i].meta.tjsLevel = Number( item_lvl );
            if ( item.meta.tjsWeaponLevel ) $dataArmors[i].meta.tjsWeaponLevel = String( item_lvl );
            if ( item.meta.tjsItemLevel ) $dataArmors[i].meta.tjsItemLevel = String( item_lvl );

            apply_count--;
        }
    }

    // Items
    apply_count = 0;
    item = {};
    for ( let i = 1; i < items_size; i++ ) {
        if ( apply_count == 0 ) {
            if ( !$dataItems[i] ) continue;
            if ( !$dataItems[i].meta ) continue;
            if ( i > items_size - tjs_max_item_levels ) continue;

            if ( $dataItems[i].meta.tjsGroup ) {
                item = JSON.parse(JSON.stringify( $dataItems[i] ));
                apply_count = tjs_max_item_levels - 1;
                $dataItems[i].name = tjs_item_level_names[0] + " " + item.name;
            }
        }
        else if ( apply_count > 0 ) {
            $dataItems[i] = JSON.parse(JSON.stringify( item ));

            const item_lvl = 1 + tjs_max_item_levels - apply_count;

            $dataItems[i].id = i;
            $dataItems[i].name = String( tjs_item_level_names[item_lvl - 1] ) + " " + item.name;
            $dataItems[i].level = item_lvl;

            if ( item.meta.tjsLevel ) $dataItems[i].meta.tjsLevel = Number( item_lvl );
            if ( item.meta.tjsWeaponLevel ) $dataItems[i].meta.tjsWeaponLevel = String( item_lvl );
            if ( item.meta.tjsItemLevel ) $dataItems[i].meta.tjsItemLevel = String( item_lvl );

            apply_count--;
        }
    }

    // States
    apply_count = 0;
    item = {};
    for ( let i = 1; i < states_size; i++ ) {
        if ( apply_count == 0 ) {
            if ( !$dataStates[i] ) continue;
            if ( !$dataStates[i].meta ) continue;
            if ( i > states_size - 10 ) continue;

            if ( $dataStates[i].meta.tjsGroup ) {
                if ( Number($dataStates[i].meta.tjsGroup) == i ) {
                    item = TJS_auto.DeepCopy( $dataStates[i] );
                    apply_count = 9;
                }
            }
        }
        else if ( apply_count > 0 ) {
            $dataStates[i] = TJS_auto.DeepCopy( item );

            const item_lvl = 1 + 10 - apply_count;

            $dataStates[i].id = i;
            $dataStates[i].level = item_lvl;

            if ( item.meta.tjsLevel ) $dataStates[i].meta.tjsLevel = Number( item_lvl );

            apply_count--;
        }
    }
};
Scene_Boot.prototype.CustomTjsSetStateTexts = function() {
    const states_size = $dataStates.length;

    for ( let i = 1; i < states_size; i++ ) {
        if ( !$dataStates[i] ) continue;
        if ( !$dataStates[i].meta ) continue;

        if ( $dataStates[i].meta.tjsMessage1 ) $dataStates[i].message1 = ( $dataStates[i].meta.tjsMessage1 );
        if ( $dataStates[i].meta.tjsMessage2 ) $dataStates[i].message2 = ( $dataStates[i].meta.tjsMessage2 );
        if ( $dataStates[i].meta.tjsMessage3 ) $dataStates[i].message3 = ( $dataStates[i].meta.tjsMessage3 );
        if ( $dataStates[i].meta.tjsMessage4 ) $dataStates[i].message4 = ( $dataStates[i].meta.tjsMessage4 );
    }
};
Scene_Boot.prototype.ScaledCustomTraits = function(custom_traits, item_level_factor) {
    var traits = TJS_auto.DeepCopy( custom_traits );

    traits.to_hit_physical_add = custom_traits.to_hit_physical_add * item_level_factor;
    traits.to_hit_physical_multiply = TJS_auto.Lerp( 1.00000, custom_traits.to_hit_physical_multiply, item_level_factor );
    traits.to_hit_magical_add = custom_traits.to_hit_magical_add * item_level_factor;
    traits.to_hit_magical_multiply = TJS_auto.Lerp( 1.00000, custom_traits.to_hit_magical_multiply, item_level_factor );
    traits.magic_focus_add = custom_traits.magic_focus_add * TJS_auto.LerpSkew( 0.00000, 1.00000, item_level_factor, tjs_item_parameter_effect_skew );
    traits.magic_focus_multiply = TJS_auto.Lerp( 1.00000, custom_traits.magic_focus_multiply, item_level_factor );
    traits.magic_focus_debuff_rate = TJS_auto.Lerp( 1.00000, custom_traits.magic_focus_debuff_rate, item_level_factor );
    traits.max_tactical_points_add = custom_traits.max_tactical_points_add * item_level_factor;
    traits.max_tactical_points_multiply = TJS_auto.Lerp( 1.00000, custom_traits.max_tactical_points_multiply, item_level_factor );
    traits.physical_critical_hit_rate = custom_traits.physical_critical_hit_rate * item_level_factor;
    traits.magical_critical_hit_rate = custom_traits.magical_critical_hit_rate * item_level_factor;
    traits.physical_critical_evade_rate = custom_traits.physical_critical_evade_rate * item_level_factor;
    traits.magical_critical_evade_rate = custom_traits.magical_critical_evade_rate * item_level_factor;

    return traits;
};
Scene_Boot.prototype.CustomTjsSetLeveledRates = function() {
    const weapons_size = $dataWeapons.length;
    const armors_size = $dataArmors.length;
    const items_size = $dataItems.length;
    const states_size = $dataStates.length;

    // Weapons
    for ( let i = 1; i < weapons_size; i++ ) {
        if ( !$dataWeapons[i] ) continue;
        if ( !$dataWeapons[i].traits ) continue;
        if ( !$dataWeapons[i].meta ) continue;
        var item_level = $dataWeapons[i].level;
        var item = $dataWeapons[i];

        const item_level_factor = TJS_auto.Lerp( 0.08, 1.0, item_level / tjs_max_item_levels );
        const traits_size = item.traits.length;
        var n_traits = [];

        for ( let t = 0; t < traits_size; t++ ) {
            if ( !item.traits[t] ) continue;
            var trait_t = TJS_auto.DeepCopy( item.traits[t] );

            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledElementRates)) && (trait_t.code == Game_BattlerBase.TRAIT_ELEMENT_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_element_rate_skew );
            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledDebuffRates)) && (trait_t.code == Game_BattlerBase.TRAIT_DEBUFF_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_debuff_rate_skew );
            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledStateRates)) && (trait_t.code == Game_BattlerBase.TRAIT_STATE_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_state_rate_skew );

            if ( (item.meta.tjsLeveledRates) || (item.meta.tjsLeveledParamRates) ) {
                if ( trait_t.code == Game_BattlerBase.TRAIT_PARAM ) trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_XPARAM ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_SPARAM ) trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
            }

            if ( trait_t.code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
                const orig_added_skill = $dataSkills[trait_t.dataId];

                if ( orig_added_skill.meta ) {
                    if ( orig_added_skill.meta.tjsSkillGroupStart ) {
                        var skill_id_addition = Math.round(item_level_factor * 10) - 1;
                        if ( skill_id_addition < 0 ) skill_id_addition = 0;
                        if ( skill_id_addition > 9 ) skill_id_addition = 9;
                        const target_skill_id = Number( orig_added_skill.meta.tjsSkillGroupStart ) + skill_id_addition;
                        var trait_skill_add_corrected = TJS_auto.DeepCopy( trait_t );
                        trait_skill_add_corrected.dataId = target_skill_id;

                        n_traits.push( trait_skill_add_corrected );
                        continue;
                    }
                }
            }

            if ( item.meta.tjsLeveledRates ) {
                if ( trait_t.code == Game_BattlerBase.TRAIT_ACTION_PLUS ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_general_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_ATTACK_SPEED ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_general_skew );
            }

            if ( trait_t.code == Game_BattlerBase.TRAIT_STATE_RATE ) {
                if ( $dataStates[trait_t.dataId].meta ) {
                    if ( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged ) {
                        const multistate_id = Number( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged );

                        for ( let s = 0; s < 10; s++ ) {
                            var trait_state_rate = TJS_auto.DeepCopy( trait_t );

                            trait_state_rate.dataId = s + multistate_id;
                            n_traits.push( trait_state_rate );
                        }

                        continue;
                    }
                }
            }

            n_traits.push( trait_t );
        }

        item.traits = TJS_auto.DeepCopy( n_traits );
        if ( item.meta.tjsLeveledRates ) item.custom_traits = this.ScaledCustomTraits( item.custom_traits, item_level_factor );
    }

    // Armors
    for ( let i = 1; i < armors_size; i++ ) {
        if ( !$dataArmors[i] ) continue;
        if ( !$dataArmors[i].traits ) continue;
        if ( !$dataArmors[i].meta ) continue;
        var item_level = $dataArmors[i].level;
        var item = $dataArmors[i];

        const item_level_factor = TJS_auto.Lerp( 0.08, 1.0, item_level / tjs_max_item_levels );
        const traits_size = item.traits.length;
        var n_traits = [];

        for ( let t = 0; t < traits_size; t++ ) {
            if ( !item.traits[t] ) continue;
            var trait_t = TJS_auto.DeepCopy( item.traits[t] );

            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledElementRates)) && (trait_t.code == Game_BattlerBase.TRAIT_ELEMENT_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_element_rate_skew );
            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledDebuffRates)) && (trait_t.code == Game_BattlerBase.TRAIT_DEBUFF_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_debuff_rate_skew );
            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledStateRates)) && (trait_t.code == Game_BattlerBase.TRAIT_STATE_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_state_rate_skew );

            if ( (item.meta.tjsLeveledRates) || (item.meta.tjsLeveledParamRates) ) {
                if ( trait_t.code == Game_BattlerBase.TRAIT_PARAM ) trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_XPARAM ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_SPARAM ) trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
            }

            if ( trait_t.code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
                const orig_added_skill = $dataSkills[trait_t.dataId];

                if ( orig_added_skill.meta ) {
                    if ( orig_added_skill.meta.tjsSkillGroupStart ) {
                        var skill_id_addition = Math.round(item_level_factor * 10) - 1;
                        if ( skill_id_addition < 0 ) skill_id_addition = 0;
                        if ( skill_id_addition > 9 ) skill_id_addition = 9;
                        const target_skill_id = Number( orig_added_skill.meta.tjsSkillGroupStart ) + skill_id_addition;
                        var trait_skill_add_corrected = TJS_auto.DeepCopy( trait_t );
                        trait_skill_add_corrected.dataId = target_skill_id;

                        n_traits.push( trait_skill_add_corrected );
                        continue;
                    }
                }
            }

            if ( item.meta.tjsLeveledRates ) {
                if ( trait_t.code == Game_BattlerBase.TRAIT_ACTION_PLUS ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_general_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_ATTACK_SPEED ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_general_skew );
            }

            if ( trait_t.code == Game_BattlerBase.TRAIT_STATE_RATE ) {
                if ( $dataStates[trait_t.dataId].meta ) {
                    if ( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged ) {
                        const multistate_id = Number( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged );

                        for ( let s = 0; s < 10; s++ ) {
                            var trait_state_rate = TJS_auto.DeepCopy( trait_t );

                            trait_state_rate.dataId = s + multistate_id;
                            n_traits.push( trait_state_rate );
                        }

                        continue;
                    }
                }
            }

            n_traits.push( trait_t );
        }

        item.traits = TJS_auto.DeepCopy( n_traits );
        if ( item.meta.tjsLeveledRates ) item.custom_traits = this.ScaledCustomTraits( item.custom_traits, item_level_factor );
    }

    // Items
    /*
    for ( let i = 1; i < items_size; i++ ) {
        if ( !$dataItems[i] ) continue;
        if ( !$dataItems[i].traits ) continue;
        if ( !$dataItems[i].meta ) continue;
        var item_level = $dataItems[i].level;
        var item = $dataItems[i];

        const item_level_factor = TJS_auto.Lerp( 0.08, 1.0, item_level / tjs_max_item_levels );
        const traits_size = item.traits.length;
        var n_traits = [];

        for ( let t = 0; t < traits_size; t++ ) {
            if ( !item.traits[t] ) continue;
            var trait_t = TJS_auto.DeepCopy( item.traits[t] );

            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledElementRates)) && (trait_t.code == Game_BattlerBase.TRAIT_ELEMENT_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_element_rate_skew );
            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledDebuffRates)) && (trait_t.code == Game_BattlerBase.TRAIT_DEBUFF_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_debuff_rate_skew );
            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledStateRates)) && (trait_t.code == Game_BattlerBase.TRAIT_STATE_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_state_rate_skew );

            if ( (item.meta.tjsLeveledRates) || (item.meta.tjsLeveledParamRates) ) {
                if ( trait_t.code == Game_BattlerBase.TRAIT_PARAM ) trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_XPARAM ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_SPARAM ) trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
            }

            if ( trait_t.code == Game_BattlerBase.TRAIT_SKILL_ADD ) {
                const orig_added_skill = $dataSkills[trait_t.dataId];

                if ( orig_added_skill.meta ) {
                    if ( orig_added_skill.meta.tjsSkillGroupStart ) {
                        var skill_id_addition = Math.round(item_level_factor * 10) - 1;
                        if ( skill_id_addition < 0 ) skill_id_addition = 0;
                        if ( skill_id_addition > 9 ) skill_id_addition = 9;
                        const target_skill_id = Number( orig_added_skill.meta.tjsSkillGroupStart ) + skill_id_addition;
                        var trait_skill_add_corrected = TJS_auto.DeepCopy( trait_t );
                        trait_skill_add_corrected.dataId = target_skill_id;

                        n_traits.push( trait_skill_add_corrected );
                        continue;
                    }
                }
            }

            if ( item.meta.tjsLeveledRates ) {
                if ( trait_t.code == Game_BattlerBase.TRAIT_ACTION_PLUS ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_general_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_ATTACK_SPEED ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_general_skew );
            }

            if ( trait_t.code == Game_BattlerBase.TRAIT_STATE_RATE ) {
                if ( $dataStates[trait_t.dataId].meta ) {
                    if ( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged ) {
                        const multistate_id = Number( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged );

                        for ( let s = 0; s < 10; s++ ) {
                            var trait_state_rate = TJS_auto.DeepCopy( trait_t );

                            trait_state_rate.dataId = s + multistate_id;
                            n_traits.push( trait_state_rate );
                        }

                        continue;
                    }
                }
            }

            n_traits.push( trait_t );
        }

        item.traits = TJS_auto.DeepCopy( n_traits );
        item.custom_traits = this.ScaledCustomTraits( item.custom_traits, item_level_factor );
    }
    */

    // States
    for ( let i = 1; i < states_size; i++ ) {
        if ( !$dataStates[i] ) continue;
        if ( !$dataStates[i].traits ) continue;
        if ( !$dataStates[i].meta ) continue;
        var item_level = $dataStates[i].level;
        var item = $dataStates[i];

        const item_level_factor = item_level / tjs_max_item_levels;
        const traits_size = item.traits.length;
        var n_traits = [];

        for ( let t = 0; t < traits_size; t++ ) {
            if ( !item.traits[t] ) continue;
            var trait_t = TJS_auto.DeepCopy( item.traits[t] );

            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledElementRates)) && (trait_t.code == Game_BattlerBase.TRAIT_ELEMENT_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_element_rate_skew );
            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledDebuffRates)) && (trait_t.code == Game_BattlerBase.TRAIT_DEBUFF_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_debuff_rate_skew );
            if ( ((item.meta.tjsLeveledRates) || (item.meta.tjsLeveledStateRates)) && (trait_t.code == Game_BattlerBase.TRAIT_STATE_RATE) )
                trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_state_rate_skew );

            if ( (item.meta.tjsLeveledRates) || (item.meta.tjsLeveledParamRates) ) {
                if ( trait_t.code == Game_BattlerBase.TRAIT_PARAM ) trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_XPARAM ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_SPARAM ) trait_t.value = TJS_auto.LerpSkew( 1.00000, trait_t.value, item_level_factor, tjs_item_trait_param_rate_skew );
            }

            if ( item.meta.tjsLeveledRates ) {
                if ( trait_t.code == Game_BattlerBase.TRAIT_ACTION_PLUS ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_general_skew );
                if ( trait_t.code == Game_BattlerBase.TRAIT_ATTACK_SPEED ) trait_t.value = TJS_auto.LerpSkew( 0.00000, trait_t.value, item_level_factor, tjs_item_trait_general_skew );
            }

            if ( trait_t.code == Game_BattlerBase.TRAIT_STATE_RATE ) {
                if ( $dataStates[trait_t.dataId].meta ) {
                    if ( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged ) {
                        const multistate_id = Number( $dataStates[trait_t.dataId].meta.tjsMultiLevelStateAveraged );

                        for ( let s = 0; s < 10; s++ ) {
                            var trait_state_rate = TJS_auto.DeepCopy( trait_t );

                            trait_state_rate.dataId = s + multistate_id;
                            n_traits.push( trait_state_rate );
                        }

                        continue;
                    }
                }
            }

            n_traits.push( trait_t );
        }

        item.traits = TJS_auto.DeepCopy( n_traits );
        if ( item.meta.tjsLeveledRates ) item.custom_traits = this.ScaledCustomTraits( item.custom_traits, item_level_factor );
    }
};
Scene_Boot.prototype.CustomTjsSetLeveledParamaterValues = function() {
    const weapons_size = $dataWeapons.length;
    const armors_size = $dataArmors.length;

    for ( let i = 1; i < weapons_size; i++ ) {
        if ( !$dataWeapons[i] ) continue;
        const item_level_factor = TJS_auto.Lerp( 0.01, 1.0, $dataWeapons[i].level / tjs_max_item_levels );

        for ( let p = 0; p < 8; p++ ) {
            $dataWeapons[i].params[p] = Math.ceil($dataWeapons[i].params[p] * TJS_auto.LerpSkew( 0.00000, 1.00000, item_level_factor, tjs_item_parameter_effect_skew ));
        }
    }
    for ( let i = 1; i < armors_size; i++ ) {
        if ( !$dataArmors[i] ) continue;
        const item_level_factor = TJS_auto.Lerp( 0.01, 1.0, $dataArmors[i].level / tjs_max_item_levels );

        for ( let p = 0; p < 8; p++ ) {
            $dataArmors[i].params[p] = Math.ceil($dataArmors[i].params[p] * TJS_auto.LerpSkew( 0.00000, 1.00000, item_level_factor, tjs_item_parameter_effect_skew ));
        }
    }
};

})();
