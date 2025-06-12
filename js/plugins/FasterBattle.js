// FasterBattle.js Ver.2.0.1
// MIT License (C) 2023 あわやまたな
// http://opensource.org/licenses/mit-license.php

/*:
* @target MZ MV
* @plugindesc Speed up battle.
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/article/498870606.html
* @help Ver.2.0.1
* Battle speed will be slightly faster.
* Probably more modest than the existing ones.
*
* @param animationSpeedup
* @text Animation Speedup
* @desc Reduces animation playback time to 80% during acceleration.
* @type boolean
* @default true
*
*/

/*:ja
* @target MZ MV
* @plugindesc 戦闘を高速化します。
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/article/498870606.html
* @help 戦闘スピードが若干早くなります。
* たぶん既存のものより控えめです。
*
* [更新履歴]
* 2023/04/03：Ver.1.0.0　公開
* 2023/11/02：Ver.2.0.0　アニメーションを高速化する機能を追加。
* 2023/11/17：Ver.2.0.1　連続攻撃が速すぎたので高速化を緩和。
*
* @param animationSpeedup
* @text アニメーション高速化
* @desc 高速化中にアニメーションの再生時間を80%に短縮します。
* @type boolean
* @default true
*
*/

'use strict';

{

	const useMZ = Utils.RPGMAKER_NAME === "MZ";
	const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];
	const parameters = PluginManager.parameters(pluginName);
	const animationSpeedup = parameters["animationSpeedup"] === "true";

	//-----------------------------------------------------------------------------
	// Spriteset_Battle

	if (useMZ) {
		Spriteset_Battle.prototype.animationBaseDelay = function() {
			return $gameSystem.isSideView() ? Spriteset_Base.prototype.animationBaseDelay.call(this) : 0;
		};

		const _Spriteset_Battle_animationNextDelay = Spriteset_Battle.prototype.animationNextDelay;
		Spriteset_Battle.prototype.animationNextDelay = function() {
			const delay = _Spriteset_Battle_animationNextDelay.call(this);
			return BattleManager._logWindow.isFastForward() ? Math.floor(delay / 2) : delay;
		};
	}

	const _Spriteset_Battle_isEffecting = Spriteset_Battle.prototype.isEffecting;
	Spriteset_Battle.prototype.isEffecting = function() {
		return BattleManager._logWindow.isFastForward() ? false : _Spriteset_Battle_isEffecting.call(this);
	};
	const _Spriteset_Battle_isAnyoneMoving = Spriteset_Battle.prototype.isAnyoneMoving;
	Spriteset_Battle.prototype.isAnyoneMoving = function() {
		return BattleManager._logWindow.isFastForward() ? false : _Spriteset_Battle_isAnyoneMoving.call(this);
	};

	Spriteset_Battle.prototype.isBusy = function() {
		return BattleManager._logWindow.isFastForward() ? false : this.isAnimationPlaying();
	};

	const animationRate = animationSpeedup ? 0.8 : 1;
	if (useMZ && animationRate < 1) {
		const _Spriteset_Battle_createAnimationSprite = Spriteset_Battle.prototype.createAnimationSprite;
		Spriteset_Battle.prototype.createAnimationSprite = function(targets, animation, mirror, delay) {
			_Spriteset_Battle_createAnimationSprite.apply(this, arguments);
			if (!(BattleManager._logWindow && BattleManager._logWindow.isFastForward())) {
				return;
			}
			const sprite = this.lastAnimationSprite();
			if (this.isMVAnimation(animation)) {
				sprite._rate = Math.floor(sprite._rate * animationRate);
				sprite.setupDuration();
			} else {
				animation = JsonEx.makeDeepCopy(animation);
				animation.speed = Math.floor(animation.speed / animationRate);
				animation.flashTimings.forEach(timing => timing.frame = Math.floor(timing.frame * animationRate));
				if (animation.timings) {
					animation.timings.forEach(timing => timing.frame = Math.floor(timing.frame * animationRate));
				}
				animation.soundTimings.forEach(timing => timing.frame = Math.floor(timing.frame * animationRate));
				sprite._maxTimingFrames = 0;
				sprite.setup(sprite._targets, animation, sprite._mirror, sprite._delay, sprite._previous);
			}
		};
	}

	//-----------------------------------------------------------------------------
	// Sprite_Battler

	if (!useMZ && animationRate < 1) {
		const _Sprite_Battler_startAnimation = Sprite_Battler.prototype.startAnimation;
		Sprite_Battler.prototype.startAnimation = function(animation, mirror, delay) {
			_Sprite_Battler_startAnimation.apply(this, arguments);
			if (!(BattleManager._logWindow && BattleManager._logWindow.isFastForward())) {
				return;
			}
			const sprite = this._animationSprites[this._animationSprites.length - 1];
			sprite._rate = Math.floor(sprite._rate * animationRate);
			sprite.setupDuration();
		};
	}

	//-----------------------------------------------------------------------------
	// Window_BattleLog

	Window_BattleLog.prototype.messageSpeed = function() {
		return 10;
	};

	if (!useMZ) {
		const _Window_BattleLog_animationBaseDelay = Window_BattleLog.prototype.animationBaseDelay;
		Window_BattleLog.prototype.animationBaseDelay = function() {
			return $gameSystem.isSideView() ? _Window_BattleLog_animationBaseDelay.call(this) : 0;
		};

		const _Window_BattleLog_animationNextDelay = Window_BattleLog.prototype.animationNextDelay;
		Window_BattleLog.prototype.animationNextDelay = function() {
			const delay = _Window_BattleLog_animationNextDelay.call(this)
			return this.isFastForward() ? Math.floor(delay / 2) : delay;
		};
	}


}