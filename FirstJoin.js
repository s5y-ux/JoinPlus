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

events.playerJoin(function(event, player){
  Player_Position = utils.getPlayerPos(utils.player(event.player.getName()));
  event.player.sendTitle(test.title, event.player.getName().yellow());
  for(i=0; i<10; i++){
    event.player.spawnParticle(particle_list["cloud"], Player_Position.x, Player_Position.y+0.5, Player_Position.z, 15);
  }
});
