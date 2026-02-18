/*:
 * @target MZ
 * @plugindesc Global variables and objects.
 * @author DGN
 *
 * @help DGN_globals.js
 *
 * Globals.
 *
 * ----- Plugin List:
 * DGN_globals.js
 * DGN_core.js
 * DGN_classes.js
 * DGN_functions.js
 * DGN_managers.js
 * DGN_dgn.js
 * DGN_database.js
 * DGN_system.js
 * DGN_actor.js
 * DGN_object.js
 * DGN_window.js
 * DGN_scene.js
 * DGN_final.js
 */

/// Custom Databases
var $dataRaces = [];

/// Declare Objects
let DGN = {};
var DRAGON_map = {};

/// Globals
const dragon_reorder_system_database_types = true;

const dragon_write_new_skills_database = false;
const dragon_number_blank_skills_per_category = 1;
const dragon_number_blank_skills_specific_categories = 0;
const dragon_number_blank_skills_prepend_specific_categories = 5;
const dragon_number_blank_skills_postpend_specific_categories = 10;
const dragon_skills_specific_spaced_categories = ["- Spell, Ninja","- Spell, Cleric"];

const dragon_write_new_animations_database = false;
const dragon_number_blank_animations_per_category = 1;
const dragon_number_blank_animations_specific_categories = 3;
const dragon_animations_specific_spaced_categories = ["- Lunar", "- Earth"];

const dragon_text_scale_horizontal_inverse = 1.15;

const dragon_item_level_names = [
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
const dragon_chapter_names = [
    "Prologue",
    "Acrydia",
    "White Sky",
];
const dragon_level_scaling_factor = 2;
const dragon_chapter_level_caps = [
    Math.round( 5 * dragon_level_scaling_factor ), // 0 - Prologue
    Math.round( 14.5 * dragon_level_scaling_factor ), // 1 - Acrydia
    Math.round( 24 * dragon_level_scaling_factor ), // 2
    Math.round( 33.5 * dragon_level_scaling_factor ), // 3
    Math.round( 43 * dragon_level_scaling_factor ), // 4
    Math.round( 52.5 * dragon_level_scaling_factor ), // 5
    Math.round( 62 * dragon_level_scaling_factor ), // 6
    Math.round( 71.5 * dragon_level_scaling_factor ), // 7
    Math.round( 81 * dragon_level_scaling_factor ), // 8
    Math.round( 90.5 * dragon_level_scaling_factor ), // 9
    Math.round( 100 * dragon_level_scaling_factor ), // 10
];
const dragon_max_character_level = Math.round( 100 * dragon_level_scaling_factor );
const dragon_max_monster_level = Math.round( 100 * dragon_level_scaling_factor );
const dragon_max_item_levels = dragon_max_character_level; // dragon_item_level_names.length;
const dragon_max_inv_items = 500;
const dragon_item_parameter_effect_skew = 0.250;
const dragon_item_trait_element_rate_skew = 0.500;
const dragon_item_trait_debuff_rate_skew = 0.500;
const dragon_item_trait_state_rate_skew = 0.500;
const dragon_item_trait_param_rate_skew = 0.500;
const dragon_item_trait_general_skew = 0.500;
const dragon_number_of_random_chests = 32;
const dragon_variable_game_chapter = 21;
const dragon_variable_max_game_chapter = 22;
const dragon_max_chapters = 10;
const dragon_max_enemies_per_battle = 25;
const dragon_monsters_per_exp_level = 75;
const dragon_enemy_gold_multiplier = 5000.0 / dragon_monsters_per_exp_level;
const dragon_max_party_size = 32;
const dragon_max_battlemember_size = 32;
const dragon_max_starting_party_member_index = 23;
const dragon_max_starting_party_members = 12;
const dragon_variance_physical_attack = 0.42500;
const dragon_variance_magical_attack = 0.42500;
const dragon_variance_physical_defense = 0.25000;
const dragon_variance_magical_defense = 0.25000;

const dragon_starting_gp = 0;
const dragon_starting_sp = 100;
const dragon_starting_cp = 2000;
const dragon_sp_per_gp = 200;
const dragon_cp_per_sp = 500;

const dragon_EXP_levels_base_min = 100;
const dragon_EXP_levels_base_max = 5000000;
const dragon_EXP_levels_base_pow = 2.0;
const dragon_EXP_levels_add_min = 0;
const dragon_EXP_levels_add_max = 100000;
const dragon_EXP_levels_add_pow = 1.625;

const dragon_master_damage_adjust = 0.08000;
// const dragon_master_hp_adjust = 0.08000;
const dragon_master_hp_adjust = 0.16000;

const dragon_actor_parameter_skew = -0.25;
const dragon_max_hp_multiplier = 160.0;
const dragon_max_stat_multiplier = 50.00;
// const dragon_enemy_hp_adjust = 0.67250;
const dragon_enemy_hp_adjust = 0.33625;
const dragon_enemy_mp_adjust = 1.00000;
const dragon_enemy_strength_adjust = 2.82500;
const dragon_enemy_defense_adjust = 2.50000;
const dragon_enemy_mana_adjust = 2.82500;
const dragon_enemy_magic_defense_adjust = 2.50000;
const dragon_enemy_agility_adjust = 1.00000;
const dragon_enemy_magic_focus_adjust = 0.6250;
const dragon_enemy_luck_adjust = 1.40000;

const dragon_attack_adjust_static = 0.80000;
const dragon_attack_adjust_physical = 0.72000;
const dragon_attack_adjust_magical = 0.72000;
const dragon_attack_adjust_combo = 0.72000;
const dragon_defense_adjust_static = 1.86250;
const dragon_defense_adjust_physical = 1.86250;
const dragon_defense_adjust_magical = 1.86250;
const dragon_defense_adjust_combo = 1.86250;

const dragon_combat_hp_dampening = 0.81250;  // bad guys attacking good guys
const dragon_combat_hp_dampening_inverse = 0.12500;  // good guys attacking bad guys
const dragon_battle_rewards_variance = 0.32500;
const dragon_max_items = 999;
const dragon_max_items_digits = 3;
const dragon_item_selling_divisor = 2;
const dragon_max_mp_cost_multiplier = 25.00000;
const dragon_max_tp_cost_multiplier = 2.00000;
const dragon_highest_item_priority = 9;

const dragon_multiplier_weapon_break_counts = 1.00000;
const dragon_weaponID_broken_weapon = 1;
const dragon_armorID_broken_backup_weapon = 1;
const dragon_armorID_broken_book = 2;
const dragon_armorID_broken_shield = 3;
const dragon_armorID_broken_belt = 4;
const dragon_armorID_broken_wristband = 5;
const dragon_armorID_broken_glove = 6;
const dragon_armorID_broken_socks = 7;
const dragon_armorID_broken_shoes = 8;
const dragon_armorID_broken_necklace = 9;
const dragon_armorID_broken_bracelet = 10;
const dragon_armorID_broken_earring = 11;
const dragon_armorID_broken_ring = 12;
const dragon_armorID_broken_accessory = 13;
const dragon_state_broken_weapon = 32;
const dragon_state_broken_equipment = 38;

const dragon_max_number_discovered_actors = 101;
const dragon_max_number_discovered_enemies = 1001;

const dragon_skill_DNA_condition_1 = 1951;
const dragon_skill_DNA_condition_2 = 1952;
const dragon_skill_DNA_condition_3 = 1953;
const dragon_skill_class_swordmaster = 1954;
const dragon_skill_class_axemaster = 1955;
const dragon_skill_class_kenshi = 1956;
const dragon_skill_class_ninja = 1957;
const dragon_skill_class_rifleman = 1958;
const dragon_skill_class_cleric = 1959;
const dragon_skill_class_mage = 1960;
const dragon_skill_class_wizard = 1961;
const dragon_skill_class_martial_artist = 1962;
const dragon_skill_class_kensei = 1963;

const dragon_string_line_width_face = 180;
const dragon_string_line_width_noFace = 198;
const dragon_char_width = 9.5;

const DRAGON_SKILL_TYPE_MELEE = 1;
const DRAGON_SKILL_TYPE_GUNS = 2;
const DRAGON_SKILL_TYPE_MAGIC = 3;
const DRAGON_SKILL_TYPE_SPECIAL = 4;
const DRAGON_SKILL_TYPE_MAGIC_BLOOD = 5;
const DRAGON_SKILL_TYPE_ELF_MAGIC = 6;
const DRAGON_SKILL_TYPE_ARCANE_MAGIC = 7;
const DRAGON_SKILL_TYPE_HOLY_MAGIC = 8;
const DRAGON_SKILL_TYPE_NINJA_MAGIC = 9;
const DRAGON_SKILL_TYPE_MAGIC_SPIRIT = 10;
const DRAGON_SKILL_TYPE_INNATE = 11;
const DRAGON_SKILL_TYPE_CLAN_MAGIC = 12;
const DRAGON_SKILL_TYPE_CLAN_MAGIC_GAZE = 13;
const DRAGON_SKILL_TYPE_NATURE_MAGIC = 14;
const DRAGON_SKILL_TYPE_GRENADES = 15;

const DRAGON_SKILL_MESSAGE_CUSTOM = 1;
const DRAGON_SKILL_MESSAGE_USES = 2;
const DRAGON_SKILL_MESSAGE_ATTACKS = 3;
const DRAGON_SKILL_MESSAGE_ATTACKS_WITH = 4;
const DRAGON_SKILL_MESSAGE_CASTS = 5;

const DRAGON_PARAM_MAGIC_FOCUS = 8;

const DRAGON_CUSTOM_XPARAM_PHYSICAL_HIT_BONUS = 10;
const DRAGON_CUSTOM_XPARAM_MAGICAL_HIT_BONUS = 11;
const DRAGON_CUSTOM_XPARAM_PHYSICAL_CRITICAL_HIT_RATE = 12;
const DRAGON_CUSTOM_XPARAM_MAGICAL_CRITICAL_HIT_RATE = 13;
const DRAGON_CUSTOM_XPARAM_PHYSICAL_CRITICAL_EVADE_RATE = 14;
const DRAGON_CUSTOM_XPARAM_MAGICAL_CRITICAL_EVADE_RATE = 15;

const DRAGON_CUSTOM_PARAM_MAX_TACTICAL_POINTS = 0;
const DRAGON_CUSTOM_PARAM_PHYSICAL_HIT_BONUS = 1;
const DRAGON_CUSTOM_PARAM_MAGICAL_HIT_BONUS = 2;

const DRAGON_ENEMY_SKILL_RULE_ENEMY_GRADE = 1;
const DRAGON_ENEMY_SKILL_RULE_PARTY_LEVEL = 2;
const DRAGON_ENEMY_SKILL_RULE_TP_LEVEL = 3;

const DRAGON_GEAR_WEAPON = 1;
const DRAGON_GEAR_BACKUP_WEAPON = 3;
const DRAGON_GEAR_BOOK = 4;
const DRAGON_GEAR_SHIELD = 5;
const DRAGON_GEAR_BELT = 6;
const DRAGON_GEAR_WRISTBAND = 7;
const DRAGON_GEAR_GLOVE = 8;
const DRAGON_GEAR_SOCKS = 9;
const DRAGON_GEAR_SHOES = 10;
const DRAGON_GEAR_NECKLACE = 11;
const DRAGON_GEAR_BRACELET = 12;
const DRAGON_GEAR_EARRING = 13;
const DRAGON_GEAR_RING = 14;
const DRAGON_GEAR_ACCESSORY = 15;

const DRAGON_WEAPON_BROKEN = 1;
const DRAGON_WEAPON_LONGSWORD = 2;
const DRAGON_WEAPON_DUAL_SWORDS = 3;
const DRAGON_WEAPON_GREATSWORD = 4;
const DRAGON_WEAPON_AXE = 5;
const DRAGON_WEAPON_DUAL_AXES = 6;
const DRAGON_WEAPON_BATTLEAXE = 7;
const DRAGON_WEAPON_KAIKEN = 8;
const DRAGON_WEAPON_TANTO = 9;
const DRAGON_WEAPON_KATANA = 10;
const DRAGON_WEAPON_DUAL_KATANAS = 11;
const DRAGON_WEAPON_NINJATO = 12;
const DRAGON_WEAPON_DUAL_NINJATOS = 13;
const DRAGON_WEAPON_NODACHI = 14;
const DRAGON_WEAPON_CLUB = 15;
const DRAGON_WEAPON_WHIP = 16;
const DRAGON_WEAPON_MAGIC_STAFF = 17;
const DRAGON_WEAPON_MAGIC_WAND = 18;
const DRAGON_WEAPON_MINOR_SPELLBOOK = 19;
const DRAGON_WEAPON_GRENADES = 20;
const DRAGON_WEAPON_SHOTGUN = 21;
const DRAGON_WEAPON_LIGHT_PISTOL = 22;
const DRAGON_WEAPON_MEDIUM_PISTOL = 23;
const DRAGON_WEAPON_HEAVY_PISTOL = 24;
const DRAGON_WEAPON_SMG = 25;
const DRAGON_WEAPON_ASSAULT_RIFLE = 26;
const DRAGON_WEAPON_MACHINE_GUN = 27;

const DRAGON_ARMOR_BROKEN = 1;
const DRAGON_ARMOR_ACCESSORY = 2;
const DRAGON_ARMOR_BOOK_SWORDMASTER = 3;
const DRAGON_ARMOR_BOOK_AXEMASTER = 4;
const DRAGON_ARMOR_BOOK_KENSHI = 5;
const DRAGON_ARMOR_BOOK_NINJA = 6;
const DRAGON_ARMOR_BOOK_MARTIAL_ARTIST = 7;
const DRAGON_ARMOR_BOOK_RIFLEMAN = 8;
const DRAGON_ARMOR_BOOK_CLERIC = 9;
const DRAGON_ARMOR_BOOK_MAGE = 10;
const DRAGON_ARMOR_BOOK_WIZARD = 11;
const DRAGON_ARMOR_BOOK_KENSEI = 12;
const DRAGON_ARMOR_SHIELD_LIGHT = 13;
const DRAGON_ARMOR_SHIELD_MEDIUM = 14;
const DRAGON_ARMOR_SHIELD_HEAVY = 15;
const DRAGON_ARMOR_CLAN_SHIELD_LIGHT = 16;
const DRAGON_ARMOR_CLAN_SHIELD_MEDIUM = 17;
const DRAGON_ARMOR_CLAN_SHIELD_HEAVY = 18;
const DRAGON_ARMOR_FIGHTER_LIGHT = 19;
const DRAGON_ARMOR_FIGHTER_MEDIUM = 20;
const DRAGON_ARMOR_FIGHTER_HEAVY = 21;
const DRAGON_ARMOR_KENSHI_LIGHT = 22;
const DRAGON_ARMOR_KENSHI_MEDIUM = 23;
const DRAGON_ARMOR_KENSHI_HEAVY = 24;
const DRAGON_ARMOR_WIZARD_LIGHT = 25;
const DRAGON_ARMOR_WIZARD_MEDIUM = 26;
const DRAGON_ARMOR_WIZARD_HEAVY = 27;
const DRAGON_ARMOR_CLERIC_LIGHT = 28;
const DRAGON_ARMOR_CLERIC_MEDIUM = 29;
const DRAGON_ARMOR_CLERIC_HEAVY = 30;
const DRAGON_ARMOR_MARTIAL_ARTS_LIGHT = 31;
const DRAGON_ARMOR_MARTIAL_ARTS_MEDIUM = 32;
const DRAGON_ARMOR_MARTIAL_ARTS_HEAVY = 33;
const DRAGON_ARMOR_NINJA_LIGHT = 34;
const DRAGON_ARMOR_NINJA_MEDIUM = 35;
const DRAGON_ARMOR_NINJA_HEAVY = 36;
const DRAGON_ARMOR_CLAN_LIGHT = 37;
const DRAGON_ARMOR_CLAN_MEDIUM = 38;
const DRAGON_ARMOR_CLAN_HEAVY = 39;
/*
const DRAGON_ARMOR_LIGHT = 0000;
const DRAGON_ARMOR_MEDIUM = 0000;
const DRAGON_ARMOR_HEAVY = 0000;
*/

const DRAGON_INV_SLOT_WEAPON = 1;
const DRAGON_INV_SLOT_BACKUP_WEAPON = 2;
const DRAGON_INV_SLOT_GRENADES = 3;
const DRAGON_INV_SLOT_BOOK = 4;
const DRAGON_INV_SLOT_SHIELD = 5;
const DRAGON_INV_SLOT_TORSO = 6;
const DRAGON_INV_SLOT_LEGS = 7;
const DRAGON_INV_SLOT_FEET = 8;
const DRAGON_INV_SLOT_HEAD = 9;
const DRAGON_INV_SLOT_FACE = 10;
const DRAGON_INV_SLOT_HANDS = 11;
const DRAGON_INV_SLOT_SHIRT = 12;
const DRAGON_INV_SLOT_JACKET = 13;
const DRAGON_INV_SLOT_CLOAK = 14;
const DRAGON_INV_SLOT_BELT = 15;
const DRAGON_INV_SLOT_NECKLACE = 16;
const DRAGON_INV_SLOT_WRISTBAND = 17;
const DRAGON_INV_SLOT_BRACELET = 18;
const DRAGON_INV_SLOT_RING = 19;
const DRAGON_INV_SLOT_EARRING = 20;
const DRAGON_INV_SLOT_EAR_CUFF = 21;
const DRAGON_INV_SLOT_SOCKS = 22;
const DRAGON_INV_SLOT_ACCESSORY = 23;
const DRAGON_INV_SLOT_TOOTH = 24;
const DRAGON_INV_SLOT_FACE_PIERCING = 25;
const DRAGON_INV_SLOT_BODY_PIERCING = 26;
const DRAGON_INV_SLOT_MAGIC_BODY_ART = 27;
const DRAGON_INV_SLOT_ITEM = 28;

const DRAGON_TREASURE_PRIMARY_NONE = 2;
const DRAGON_TREASURE_PRIMARY_COMMON = 3;
const DRAGON_TREASURE_PRIMARY_UNCOMMON = 4;
const DRAGON_TREASURE_PRIMARY_RARE = 5;
const DRAGON_TREASURE_SECONDARY_COMMON = 6;
const DRAGON_TREASURE_SECONDARY_UNCOMMON = 7;
const DRAGON_TREASURE_SECONDARY_RARE = 8;

/// Specials
const DRAGON_SPECIAL_BLANK = 1;
const DRAGON_SPECIAL_DEBUG = 2;
const DRAGON_SPECIAL_NOTE = 3;
const DRAGON_SPECIAL_BROKEN = 4;
const DRAGON_SPECIAL_NORMAL = 5;
const DRAGON_SPECIAL_KEY_ITEM = 6;
const DRAGON_SPECIAL_ENCHANTED = 8;
const DRAGON_SPECIAL_FIRE = 10;
const DRAGON_SPECIAL_ICE = 11;
const DRAGON_SPECIAL_LIGHTNING = 12;
const DRAGON_SPECIAL_METAL = 13;
const DRAGON_SPECIAL_WATER = 14;
const DRAGON_SPECIAL_EARTH = 15;
const DRAGON_SPECIAL_WIND = 16;
const DRAGON_SPECIAL_DARKNESS = 17;
const DRAGON_SPECIAL_ACID = 18;
const DRAGON_SPECIAL_BIOLOGICAL = 19;
const DRAGON_SPECIAL_POISON = 25;
const DRAGON_SPECIAL_IMMORTALITY = 36;
const DRAGON_SPECIAL_MULTI_ELEMENTAL = 40;
const DRAGON_SPECIAL_NATURE = 43;
const DRAGON_SPECIAL_RAINBOW = 47;
const DRAGON_SPECIAL_HASTED = 50;
const DRAGON_SPECIAL_WEAPON_RUNE = 55;
const DRAGON_SPECIAL_ARMOR_RUNE = 56;
const DRAGON_SPECIAL_BLEEDING = 100;
const DRAGON_SPECIAL_STUNNING = 110;
const DRAGON_SPECIAL_ANTIMAGICAL = 120;
const DRAGON_SPECIAL_WEAPON_REFLEX = 155;
const DRAGON_SPECIAL_ARMOR_REFLEX = 156;
const DRAGON_SPECIAL_POWER = 250;
const DRAGON_SPECIAL_MAGIC_WAND = 300;
const DRAGON_SPECIAL_SCROLL = 500;
const DRAGON_SPECIAL_HEALING_HP = 1000;
const DRAGON_SPECIAL_HEALING_MP = 1010;
const DRAGON_SPECIAL_HEALING_TP = 1020;
const DRAGON_SPECIAL_HEALING_DEATH = 1100;
const DRAGON_SPECIAL_HEALING_OTHER = 1200;
const DRAGON_SPECIAL_CURATIVE_SPECIFIC = 1500;
const DRAGON_SPECIAL_CURATIVE_OMNI = 1550;
const DRAGON_SPECIAL_ABILITY_BOOST = 1600;
const DRAGON_SPECIAL_ABILITY_GROW = 1700;
const DRAGON_SPECIAL_POWER_UP_GENERIC = 1800;
const DRAGON_SPECIAL_SPECIAL_PURPOSE = 1900;
const DRAGON_SPECIAL_FOOD = 1950;
const DRAGON_SPECIAL_MONSTER_DROP = 2000;
const DRAGON_SPECIAL_EXPLOSIVE = 2005;
const DRAGON_SPECIAL_COMBAT_SCROLL = 2050;
const DRAGON_SPECIAL_WIZARD_SCROLL = 2051;
const DRAGON_SPECIAL_HEALING_SCROLL = 2052;
const DRAGON_SPECIAL_TREASURE = 2500;
const DRAGON_SPECIAL_ORB = 3000;
const DRAGON_SPECIAL_ORB_SHARDS = 3100;
const DRAGON_SPECIAL_RING = 4000;
const DRAGON_SPECIAL_CLASS_BOOK = 20000;
const DRAGON_SPECIAL_RUNE = 22000;
const DRAGON_SPECIAL_ENABLE_SHIELD_LIGHT = 25001;
const DRAGON_SPECIAL_ENABLE_SHIELD_MEDIUM = 25002;
const DRAGON_SPECIAL_ENABLE_SHIELD_HEAVY = 25003;
const DRAGON_SPECIAL_REQUIRE_SHIELD_LIGHT = 28001;
const DRAGON_SPECIAL_REQUIRE_SHIELD_MEDIUM = 28002;
const DRAGON_SPECIAL_REQUIRE_SHIELD_HEAVY = 28003;
const DRAGON_SPECIAL_NOT_SOLD_IN_STORES = 30000;
const DRAGON_SPECIAL_NOT_SELLABLE_TO_MERCHANTS = 30001;
const DRAGON_SPECIAL_CLOTHING = 30500;
const DRAGON_SPECIAL_ARMOR = 30501;
const DRAGON_SPECIAL_WIZARD_WEAR = 30502;
const DRAGON_SPECIAL_CLERIC_CLOTHING = 30503;
const DRAGON_SPECIAL_MARTIAL_ARTS_CLOTHING = 30504;
const DRAGON_SPECIAL_NINJA_CLOTHING = 30505;
const DRAGON_SPECIAL_WESTERN_CLOTHING = 30506;
const DRAGON_SPECIAL_ASIAN_CLOTHING = 30507;
const DRAGON_SPECIAL_JEWELRY = 31000;
const DRAGON_SPECIAL_GEAR_MAGICAL_RING_MINOR = 60000;
const DRAGON_SPECIAL_GEAR_MAGICAL_RING_MAJOR = 60010;
const DRAGON_SPECIAL_GEAR_MAGICAL_RING_ULTRA = 60020;
const DRAGON_SPECIAL_GEAR_MAGICAL_RING_LEVELED = 60050;
const DRAGON_SPECIAL_FREE_ITEM = 100000;

const dragon_vehicles_boat = [
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
const dragon_vehicles_ship = [
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
const dragon_vehicles_skycraft = [
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
const dragon_vehicles_landcraft = [
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
        bgm: { name: "dgn/Adventure Tune", pan: 0, pitch: 100, volume: 95 }
    }
];

/// Custom Colors
var dragon_color_tp = "rgba(64, 255, 64, 1)";
var dragon_color_mp = "rgba(128, 128, 255, 1)";
var dragon_color_lvl = "rgba(255, 160, 64, 1)";
var dragon_color_uses = "rgba(160, 255, 127, 1)";
var dragon_color_highlight = "rgba(0, 255, 0, 0.75)";

var dragon_color_white = "rgba(255, 255, 255, 1)";
var dragon_color_gray = "rgba(144, 144, 144, 1)";
var dragon_color_yellow = "rgba(255, 255, 0, 1)";
var dragon_color_gold = "rgba(255, 176, 48, 1)";
var dragon_color_silver = "rgba(176, 176, 176, 1)";
var dragon_color_copper = "rgba(255, 96, 72, 1)";
var dragon_color_red = "rgba(255, 32, 32, 1)";
var dragon_color_green = "rgba(64, 255, 64, 1)";
var dragon_color_blue = "rgba(128, 128, 255, 1)";
var dragon_color_magenta = "rgba(255, 64, 255, 1)";
var dragon_color_cyan = "rgba(32, 255, 255, 1)";
var dragon_color_pale_violet = "rgba(208, 160, 255, 1)";

var dragon_color_hp_max = "rgba(255, 255, 255, 1)";
var dragon_color_hp_slight = "rgba(255, 255, 127, 1)";
var dragon_color_hp_medium = "rgba(255, 255, 0, 1)";
var dragon_color_hp_medium_low = "rgba(255, 192, 0, 1)";
var dragon_color_hp_low = "rgba(255, 128, 0, 1)";
var dragon_color_hp_very_low = "rgba(255, 64, 0, 1)";
var dragon_color_hp_near_zero = "rgba(255, 0, 0, 1)";
var dragon_color_hp_zero = "rgba(160, 0, 0, 1)";
