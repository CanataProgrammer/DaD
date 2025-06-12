/*:
 * @target MZ
 * @plugindesc 特定ステートが付与されている場合、逃走を禁止します。
 * @author Canata_Zer0 + ChatGPT
 */

(() => {
    const _Scene_Battle_commandEscape = Scene_Battle.prototype.commandEscape;
    Scene_Battle.prototype.commandEscape = function() {
        const members = $gameParty.members();
        const cannotEscape = members.some(actor => actor.isStateAffectedByNoEscape());
        if (cannotEscape) {
            SoundManager.playBuzzer();
            $gameMessage.add("逃走できない状態だ！");
            this._partyCommandWindow.activate();
            return;
        }
        _Scene_Battle_commandEscape.call(this);
    };

    Game_BattlerBase.prototype.isStateAffectedByNoEscape = function() {
        return this.states().some(state => state && state.meta.NoEscape);
    };
})();
