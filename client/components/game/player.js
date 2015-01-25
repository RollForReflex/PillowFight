/**
* Created by wfallows on 1/23/15.
*/
var PillowFight = PillowFight || {};
var Game = PillowFight.Game ||{};

Game.Player = function(gameWrapper){
  this.gameWrapper = gameWrapper || {};
  this.phRef = this.gameWrapper.phaserGame || {};

  this.id = 0;
  this.items = [];
  this.name = "";
  this.effects = [];
  this.inputController = {};

  this.inputController = new PillowFight.Game.PlayerInputController();
  return this;
};

Game.Player.prototype.addItem = function(itemToAdd){
    if (this.items.indexOf(itemToAdd) == -1) {
      this.items.push(itemToAdd);
    }
};

Game.Player.prototype.addEffect = function (effectToAdd) {
    if (this.effects.indexOf(effectToAdd) == -1) {
      this.effects.push(effectToAdd);
    }
};

Game.Player.prototype.removeItem = function(itemToRemove) {
    if (this.effects.indexOf(itemToRemove) != -1) {
      this.effects.splice(index, 1);
    }
};

Game.Player.prototype.removeEffect =  function (removedEffect) {
    if (this.effects.indexOf(removedEffect) != -1) {
      this.effects.splice(index, 1);
    }
};

Game.Player.prototype.preload = function(){
    this.phRef.load.image('player', '/client/assets/images/yeoman.png');
    //this.sprite.anchor.setTo(0.5, 0.5);

    this.phRef.add.sprite(0, 0, 'player');
};

Game.Player.prototype.update = function(){
    this.inputController.update();
};

Game.Player.prototype.render = function(){

};
