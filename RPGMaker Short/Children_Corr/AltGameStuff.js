//=============================================================================
// RPG Maker MZ - Alternative Game Stuff
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Alternative menu screen layout and other stuff.
 * @author David Reeves
 *
 * @help AltGameStuff.js
 *
 * This plugin changes stuff.
 */

(() => {

Sprite_Battleback.prototype.terrainBattleback1Name = function(type) {
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
            return "cst_PalmTrees_1";
    }
};

/*
Sprite_Battleback.prototype.defaultBattleback1Name = function() {
    return "Grassland";
};

Sprite_Battleback.prototype.defaultBattleback2Name = function() {
    return "Grassland";
};

Sprite_Battleback.prototype.shipBattleback1Name = function() {
    return "Ship";
};

Sprite_Battleback.prototype.shipBattleback2Name = function() {
    return "Ship";
};

Window_BattleStatus.prototype.maxCols = function() {
    return 4;
};
*/

Game_Party.prototype.maxBattleMembers = function() {
    return 8;
};

})();
