var test = require('./scriptcraft/plugins/FirstJoin+/config.json');
var utils = require('utils');
var particle_handler = Packages.org.bukkit.Particle;


var particle_list = {
    "cloud": particle_handler.CLOUD,
    "crit": particle_handler.CRIT,
    "crit_magic": particle_handler.CRIT_MAGIC,
    "dragon": particle_handler.DRAGON_BREATH,
    "lava": particle_handler.LAVA,
    "water": particle_handler.WATER,
    "explosion": particle_handler.EXPLOSION,
    "fire": particle_handler.FLAME,
    "heart": particle_handler.HEART
};

function apply_color(object, color) {
    switch (color) {
        case "red":
            return (object.red());
            break;
        case "orange":
            return (object.orange());
            break;
        case "pink":
            return (object.pink());
            break;
        case "yellow":
            return (object.yellow());
            break;
        case "green":
            return (object.green());
            break;
        case "cyan":
            return (object.cyan());
            break;
        case "blue":
            return (object.blue());
            break;
        case "magenta":
            return (object.magenta());
            break;
        case "purple":
            return (object.purple());
            break;
        case "brown":
            return (object.brown());
            break;
        case "grey":
            return (object.grey());
            break;
        case "black":
            return (object.black());
            break;
        default:
            return (object.white());

    }
}

events.playerJoin(function(event, player) {
    var player_name = event.player.getName();
    Player_Position = utils.getPlayerPos(utils.player(player_name));
    event.player.sendTitle(apply_color(test.title, test.title_color), apply_color(test.sub_title, test.sub_title_color));
    for (i = 0; i < 10; i++) {
        event.player.spawnParticle(particle_list[test.particle], Player_Position.x, Player_Position.y + 0.5, Player_Position.z, 15);
    }
});