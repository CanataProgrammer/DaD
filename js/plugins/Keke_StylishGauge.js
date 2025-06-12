//=============================================================================
// Keke_StylishGauge - スタイリッシュゲージ
// バージョン: 1.0.3
//=============================================================================
// Copyright (c) 2023 ケケー
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MZ
 * @plugindesc ゲージをカッコよく改造する
 * @author ケケー
 * @url https://kekeelabo.com
 * 
 * @help
 * 【ver.1.0.3】
 * ゲージ(HP、MP、TPゲージ)をカッコよく、好きな形に改造できる
 * ◎ゲージの大きさを調整
 * ◎ゲージの位置を調整
 * ◎ゲージの色を変更
 * ◎ゲージの形を変更(斜めな形、丸い形、四角い形)
 * ◎ゲージに光沢を付ける
 * ◎ダメージ部分を光らせて強調する演出
 * ◎ゲージのフォント設定を変更
 * ◎最大値(最大HP等)を表示
 * 
 * 
 * ● 利用規約 ●
 * MITライセンスのもと、自由に使ってくれて大丈夫です
 * 
 * 
 * 
 * You can customize the gauges (HP gauge, MP gauge, TP gauge) to your liking
 * ◎Adjust the size of the gauge
 * ◎Adjust the position of the gauge
 * ◎Change the color of the gauge
 * ◎Change the Form of the gauge (diagonal, round, square)
 * ◎Add luster to the gauge
 * ◎Make damaged areas shine to highlight them
 * ◎Change the font settings of the gauge
 * ◎Display max values ​​(max HP, etc.)
 * 
 * 
 * ● Terms of Use ●
 * Feel free to use it under the MIT license.
 *
 *
 *
 * @param ■ゲージの大きさ
 * 
 * @param ゲージの横幅
 * @parent ■ゲージの大きさ
 * @desc gaugeWidth ゲージの横幅。100 なら 100ピクセル。基本 136
 * @default 136
 * 
 * @param …ラベルまで伸ばす
 * @parent ■ゲージの大きさ
 * @desc extendToLabel ゲージをラベルの部分まで伸ばす。基本 true
 * @type boolean
 * @default true
 * 
 * @param テキストの高さ
 * @parent ■ゲージの大きさ
 * @desc textHeight ゲージの上に表示されるHP値等の縦高。増やすとゲージと数値の間隔が広がる。5 なら 5 ピクセル。基本 32
 * @default 32
 * 
 * @param 一行の高さ
 * @parent ■ゲージの大きさ
 * @desc gaugeLineHeight ゲージの1行あたりの縦高。増やすとゲージとゲージの間隔が広がる。5 なら 5 ピクセル。基本 26
 * @default 26
 *
 * @param ラベルの横幅
 * @parent ■ゲージの大きさ
 * @desc labelWidth HP等のラベルの横幅。5 なら 5 ピクセル。基本 20
 * @default 20
 * 
 * @param ■全てのゲージの位置ずらし
 * 
 * @param 全体ずらしX
 * @parent ■全てのゲージの位置ずらし
 * @desc allOffsetX ゲージ全体のX位置ずらし。5 なら 5ピクセル右へ、-5 なら 5ピクセル左へ。基本 0
 * @default 0
 * 
 * @param 全体ずらしY
 * @parent ■全てのゲージの位置ずらし
 * @desc allOffsetY ゲージ全体のY位置ずらし。5 なら 5ピクセル下へ、-5 なら 5ピクセル上へ。基本 -4
 * @default -4
 * 
 * @param 全ラベルのずらしX
 * @parent ■全てのゲージの位置ずらし
 * @desc allLabelOffsetX 全ラベルのX位置ずらし。5 なら 5ピクセル右へ、-5 なら 5ピクセル左へ。基本 0
 * @default 0
 * 
 * @param 全ラベルのずらしY
 * @parent ■全てのゲージの位置ずらし
 * @desc allLabelOffsetY 全ラベルのY位置ずらし。5 なら 5ピクセル下へ、-5 なら 5ピクセル上へ。基本 0
 * @default 0
 * 
 * @param 全数値のずらしX
 * @parent ■全てのゲージの位置ずらし
 * @desc allValueOffsetX 全数値のX位置ずらし。5 なら 5ピクセル右へ、-5 なら 5ピクセル左へ。基本 0
 * @default 0
 * 
 * @param 全数値のずらしY
 * @parent ■全てのゲージの位置ずらし
 * @desc allValueOffsetY 全数値のY位置ずらし。5 なら 5ピクセル下へ、-5 なら 5ピクセル上へ。基本 0
 * @default 0
 * 
 * @param ■フォント設定
 * 
 * @param ラベル-フォント
 * @parent ■フォント設定
 * @desc label-fontFaceラベルに使用するフォント。プラグイン『Keke_CommonData』で登録したフォント名を記入
 * @default 
 * 
 * @param ラベル-文字サイズ
 * @parent ■フォント設定
 * @desc label-fontSize HP等のラベルの文字サイズ。基本 18
 * @default 18
 * 
 * @param ラベル-縁取り幅
 * @parent ■フォント設定
 * @desc label-outlineWidth HP等のラベルの文字縁取り幅。基本 5
 * @default 5
 * 
 * @param 数値-フォント
 * @parent ■フォント設定
 * @desc value-fontFace 数値に使用するフォント。プラグイン『Keke_CommonData』で登録したフォント名を記入
 * @default 
 * 
 * @param 数値-文字サイズ
 * @parent ■フォント設定
 * @desc value-fontSize HP等の数値の文字サイズ。基本 18
 * @default 18
 * 
 * @param 数値-縁取り幅
 * @parent ■フォント設定
 * @desc value-outlineWidth HP等の数値の文字縁取り幅。基本 4
 * @default 4
 * 
 * @param 最大値の文字サイズ補正
 * @parent ■フォント設定
 * @desc maxValue_changeFontSize 最大HP等の文字サイズ補正。-5 なら標準より 5 小さくする。基本 -3
 * @default -3
 * 
 * @param ■ゲージ別の設定
 * 
 * @param HPゲージの設定
 * @parent ■ゲージ別の設定
 * @desc hpGaugeCfg HPゲージの各種設定
 * @type struct<gaugeEachCfg>
 * @default {"■ゲージの大きさ":"","ゲージの太さ":"12","ゲージの縁取り幅":"1","■ゲージの位置":"","ゲージのずらしX":"-12","ゲージのずらしY":"0","■ゲージの色":"","ラベルの色":"0, 224, 0","ゲージの色1":"0, 192, 0","ゲージの色2":"255, 255, 255","下地の色":"192, 0, 0","縁取りの色":"255, 255, 255","■ゲージの形":"","ゲージの形状":"斜めな形","…斜めな形-傾き":"10","…丸い形-角丸み":"7","■ゲージの装飾":"","光沢を付ける":"true","…光沢の太さ":"6","…光沢の色":"255, 255, 255","…光沢のグラデ":"0.5","■ゲージの演出":"","ダメージ強調":"true","…強調色":"255, 255, 0","ゲージスムーズ時間":"30","■その他":"","最大値を表示":"true","数値のみ表示":"false"}
 * 
 * @param MPゲージの設定
 * @parent ■ゲージ別の設定
 * @desc mpGaugeCfg MPゲージの各種設定
 * @type struct<gaugeEachCfg>
 * @default {"■ゲージの大きさ":"","ゲージの太さ":"10","ゲージの縁取り幅":"1","■ゲージの位置":"","ゲージのずらしX":"-6","ゲージのずらしY":"0","■ゲージの色":"","ラベルの色":"255, 128, 255","ゲージの色1":"128, 0, 255","ゲージの色2":"255, 255, 255","下地の色":"0, 0, 0","縁取りの色":"255, 255, 255","■ゲージの形":"","ゲージの形状":"斜めな形","…斜めな形-傾き":"10","…丸い形-角丸み":"6","■ゲージの装飾":"","光沢を付ける":"true","…光沢の太さ":"5","…光沢の色":"255, 255, 255","…光沢のグラデ":"0.5","■ゲージの演出":"","ダメージ強調":"false","…強調色":"255, 255, 0","ゲージスムーズ時間":"20","■その他":"","最大値を表示":"true","数値のみ表示":"false"}
 * 
 * @param TPゲージの設定
 * @parent ■ゲージ別の設定
 * @desc tpGaugeCfg TPゲージの各種設定
 * @type struct<gaugeEachCfg>
 * @default {"■ゲージの大きさ":"","ゲージの太さ":"10","ゲージの縁取り幅":"1","■ゲージの位置":"","ゲージのずらしX":"0","ゲージのずらしY":"0","■ゲージの色":"","ラベルの色":"255, 160, 0","ゲージの色1":"255, 64, 0","ゲージの色2":"255, 255, 255","下地の色":"0, 0, 0","縁取りの色":"255, 255, 255","■ゲージの形":"","ゲージの形状":"斜めな形","…斜めな形-傾き":"10","…丸い形-角丸み":"6","■ゲージの装飾":"","光沢を付ける":"true","…光沢の太さ":"5","…光沢の色":"255, 255, 255","…光沢のグラデ":"0.5","■ゲージの演出":"","ダメージ強調":"false","…強調色":"255, 255, 0","ゲージスムーズ時間":"20","■その他":"","最大値を表示":"false","数値のみ表示":"false"}
 * 
 * @param ■その他
 * 
 * @param 表示項目
 * @parent ■その他
 * @desc showContents どのゲージを表示するかの設定
 * @type struct<showGauge>[]
 * @default ["{\"表示するゲージ\":\"HP\"}","{\"表示するゲージ\":\"MP\"}","{\"表示するゲージ\":\"TP\"}"]
 */



//==================================================
/*~struct~gaugeEachCfg:
//==================================================
 * @param ■ゲージの大きさ
 * 
 * @param ゲージの太さ
 * @parent ■ゲージの大きさ
 * @desc gaugeHeight ゲージの太さ。5 なら 5ピクセル。基本 12
 * @default 12
 * 
 * @param ゲージの縁取り幅
 * @parent ■ゲージの大きさ
 * @desc gaugeOutlineWidth ゲージの外枠の太さ。1 なら 1 ピクセル。基本 1
 * @default 1
 * 
 * 
 * @param ■ゲージの位置
 *
 * @param ゲージのずらしX
 * @parent ■ゲージの位置
 * @desc gaugeOffsetX ゲージのX位置ずらし。5 なら 5ピクセル右へ、-5 なら 5ピクセル左へ。基本 0
 * @default 0
 * 
 * @param ゲージのずらしY
 * @parent ■ゲージの位置
 * @desc gaugeOffsetY ゲージのY位置ずらし。5 なら 5ピクセル下へ、-5 なら 5ピクセル上へ。基本 0
 * @default 0
 * 
 * @param ■ゲージの色
 * 
 * @param ラベルの色
 * @parent ■ゲージの色
 * @desc labelColor ラベルの色。赤, 緑, 青。各0～255。空欄だとシステムカラー
 * @default 0, 224, 0
 * 
 * @param ゲージの色1
 * @parent ■ゲージの色
 * @desc gaugeColor1 ゲージ本体の色その1。赤, 緑, 青。各0～255
 * @default 0, 192, 0
 * 
 * @param ゲージの色2
 * @parent ■ゲージの色
 * @desc gaugeColor2 ゲージ本体の色その2。赤, 緑, 青。各0～255
 * @default 255, 255, 255
 * 
 * @param 下地の色
 * @parent ■ゲージの色
 * @desc backColor ゲージの下地の色。赤, 緑, 青。各0～255
 * @default 0, 0, 0
 * 
 * @param 縁取りの色
 * @parent ■ゲージの色
 * @desc outlineColor ゲージの縁取りの色。赤, 緑, 青。各0～255
 * @default 255, 255, 255
 * 
 * @param ■ゲージの形
 * 
 * @param ゲージの形状
 * @parent ■ゲージの形
 * @desc gaugeForm ゲージの形状。丸い形、斜めな形、四角い形のどれか。基本 斜めな形
 * @type select
 * @option 四角い形
 * @option 斜めな形
 * @option 斜めな形-反転
 * @option 丸い形
 * @default 四角い形
 * 
 * @param …斜めな形-傾き
 * @parent ■ゲージの形
 * @desc diagonalForm-slope 形状が斜めな形の時の、左右両辺の傾きの大きさ。5 なら 5 ピクセル。基本 10
 * @default 10
 * 
 * @param …丸い形-角丸み
 * @parent ■ゲージの形
 * @desc roundForm-edgeRound 形状が丸い形の時の、角の丸みの大きさ。5 なら 5 ピクセル。基本 6
 * @default 6
 * 
 * @param ■ゲージの装飾
 * 
 * @param 光沢を付ける
 * @parent ■ゲージの装飾
 * @desc validLuster ゲージの光沢を付ける。基本 true
 * @type boolean
 * @default true
 * 
 * @param …光沢の太さ
 * @parent ■ゲージの装飾
 * @desc lusterWidth ゲージの光沢の太さ。5 なら 5ピクセル。基本 6
 * @default 6
 * 
 * @param …光沢の色
 * @parent ■ゲージの装飾
 * @desc lusterColor ゲージに付ける光沢の色。赤, 緑, 青。各0～255
 * @default 255, 255, 255
 *
 * 
 * @param …光沢のグラデ
 * @parent ■ゲージの装飾
 * @desc lusterGradation ゲージの光沢のグラデーション設定。0～1。0.5 なら 1→0.5と不透明度が推移。基本 0.5
 * @default 0.5
 * 
 * @param ■ゲージの演出
 * 
 * @param ダメージ強調
 * @parent ■ゲージの演出
 * @desc damageHighlight ゲージの減少部分を光らせて強調する。基本 true
 * @type boolean
 * @default true
 * 
 * @param …強調色
 * @parent ■ゲージの演出
 * @desc highlightColor HPダメージ強調の色。赤, 緑, 青。各0～255
 * @default 255, 255, 0
 * 
 * @param ゲージスムーズ時間
 * @parent ■ゲージの演出
 * @desc gaugeSmoothnessTIme ゲージをスムーズに増減させる所用時間。5 なら 5フレーム
 * @default 20
 * 
 * @param ■その他
 * 
 * @param 最大値を表示
 * @parent ■その他
 * @desc showMaxValue 最大値を表示する。HPなら最大HP、MPなら最大MP
 * @type boolean
 * @default true
 * 
 * @param 数値のみ表示
 * @parent ■その他
 * @desc showValueOnly ゲージを消して数値のみ表示する
 * @type boolean
 * @default false
 */



//==================================================
/*~struct~showGauge:
//==================================================
 * @param 表示するゲージ
 * @desc showGauge 表示するゲージの種類。HPかMPかTP
 * @type select
 * @option HP
 * @option MP
 * @option TP
 * @default HP
 */
 
 
 
(() => {
    //- プラグイン名
    const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];



    //==================================================
    //--  文字列オート変換 /ベーシック
    //==================================================
    
    //- 文字列のハッシュ化
    function strToHash(str) {
        if (!str || !str.length) { return {}; }
        let hash = {};
        const strs = JSON.parse(str);
        let val = null;
        let val2 = null;
        for (const key in strs) {
            val = strs[key];
            if (!key || !val) { continue; }
            val2 = strToAuto(val, key);
            hash[key] = val2;
        }
        return hash;
    };
    
    
    //- 文字列のリスト化
    function strToList(str) {
        if (!str || !str.length) { return []; }
        let array = JSON.parse(str);
        return array.map((val, i) => {
            return strToAuto(val);
        });
    };
    
    
    //- 文字列の自動処理
    function strToAuto(val, key = "") {
        let val2 = null;
        let match = null;
        let end = false;
        if (!end) {
            if (val[0] == "{") {
                val2 = strToHash(val);
                end = true;
            }
        }
        if (!end) {
            if (val[0] == "[") {
                val2 = strToList(val);
                end = true;
            }
        }
        if (!end) { val = val + ","; }
        if (!end) {
            match = val.match(/^\s*(-?\d+,\s*-?\d+,\s*-?\d+,?\s*-?\d*\.?\d*)\s*,$/);
            if (match && !val.match(/[^\d\.\-,\s]/)) {
                if (key.match(/(カラー|色|塗り)/) && !key.includes("トーン") && !key.includes("ブレンド") && !key.includes("配色") && !key.includes("着色") &&  !key.includes("フラッシュ") && !key.includes("チェンジ") &&  !key.includes("選択")) {
                    val2 = "rgba(" +  match[1] + ")";
                } else {
                    val2 = JSON.parse("[" +  match[1] + "]");
                }
                end = true;
            }
        }
        if (!end) {
            match = val.match(/(-?\d+\.?\d*),\s*/g);
            if (match && match.length >= 2 && !val.match(/[^\d\.\-,\s]/)) {
                val2 = JSON.parse("[" + match.reduce((r, s) => r + s).replace(/,$/, "") + "]");
                end = true;
            }
        }
        if (!end) {
            match = val.match(/^(true|false)\s*,/);
            if (match) {
                val2 = match[1] == "true" ? true : false;
                end = true;
            }
        }
        if (!end) {
            match = val.match(/^(-?\d+\.?\d*)\s*,/);
            if (match && !val.match(/[a-z]/)) {
                val2 = Number(match[1]); end = true;
                end = true;
            }
        }
        if (!end) {
            if (val[0] == "\"") { val = val.slice(1); }
            val2 = val.slice(0, -1);
        }
        return val2;
    };



    //==================================================
    //--  パラメータ受け取り
    //==================================================
    
    //- 真偽化
    function toBoolean(str) {
        if (!str) { return false; }
        const str2 = str.toString().toLowerCase();
        if (str2 == "true" || str2 == "on") { return true; }
        if (str2 == "false" || str2 == "off") { return false; }
        return Number(str);
    };

    let parameters = PluginManager.parameters(pluginName);

    //- ゲージの大きさ
    const keke_extendToLabel = toBoolean(parameters["…ラベルまで伸ばす"]);

    //- ゲージ別の設定
    const keke_gaugeCfgs = {};
    keke_gaugeCfgs["hp"] = strToHash(parameters["HPゲージの設定"]);
    keke_gaugeCfgs["mp"] = strToHash(parameters["MPゲージの設定"]);
    keke_gaugeCfgs["tp"] = strToHash(parameters["TPゲージの設定"]);
    keke_showGauges = strToList(parameters["表示項目"]);

    const keke_hpAbbreviation = true;



    //==================================================
    //--  ■ゲージの大きさ
    //==================================================

    //- ゲージスブライト/ビットマップ横幅(処理追加)
    const _Sprite_Gauge_bitmapWidth = Sprite_Gauge.prototype.bitmapWidth;
    Sprite_Gauge.prototype.bitmapWidth = function() {
        return Number(parameters["ゲージの横幅"] || _Sprite_Gauge_bitmapWidth.apply(this));
    };


    //- ゲージスブライト/ビットマップの高さ(再定義)
    Sprite_Gauge.prototype.bitmapHeight = function() {
        return 64;
    };


    //- ゲージスブライト/テキストの高さ(処理追加)
    const _Sprite_Gauge_textHeight = Sprite_Gauge.prototype.textHeight;
    Sprite_Gauge.prototype.textHeight = function() {
        return Number(parameters["テキストの高さ"] || _Sprite_Gauge_textHeight.apply(this));
    };


    //- ゲージスブライト/ゲージの高さ(処理追加)
    const _Sprite_Gauge_gaugeHeight = Sprite_Gauge.prototype.gaugeHeight;
    Sprite_Gauge.prototype.gaugeHeight = function() {
        if (this._statusType.match(/hp|mp|tp/i)) {
            return keke_gaugeCfgs[this._statusType]["ゲージの太さ"];
        }
        return _Sprite_Gauge_gaugeHeight.apply(this);
    };


    //- ゲージの一行の高さ(処理追加)
    const _Window_StatusBase_gaugeLineHeight = Window_StatusBase.prototype.gaugeLineHeight;
    Window_StatusBase.prototype.gaugeLineHeight = function() {
        return Number(parameters["一行の高さ"] || _Window_StatusBase_gaugeLineHeight.apply(this));
    };


    //- ゲージスブライト/ラベルの横幅(処理追加)
    const _Sprite_Gauge_measureLabelWidth = Sprite_Gauge.prototype.measureLabelWidth;
    Sprite_Gauge.prototype.measureLabelWidth = function() {
        return Number(parameters["ラベルの横幅"] || _Sprite_Gauge_measureLabelWidth.apply(this));
    };


    //- ゲージスブライト/ラベルY(再定義)
    Sprite_Gauge.prototype.labelY = function() {
        if (keke_extendToLabel) {
            return this.valueOutlineWidth() / 2 + Number(parameters["全ラベルのずらしY"]);
        } else {
            return this.textHeight() - this.gaugeHeight() + Number(parameters["全ラベルのずらしY"]);
        }
    };


    //- ゲージスプライト/ゲージX(処理追加)
    const _Sprite_Gauge_gaugeX = Sprite_Gauge.prototype.gaugeX;
    Sprite_Gauge.prototype.gaugeX = function() {
        if (keke_extendToLabel) {
            return 0;
        } else {
            return _Sprite_Gauge_gaugeX.apply(this) + 2;
        }
    };



    //==================================================
    //--  ゲージの色
    //==================================================

    //- ゲージスブライト/ラベルの文字サイズ(処理追加)
    const _Sprite_Gauge_labelFontSize = Sprite_Gauge.prototype.labelFontSize;
    Sprite_Gauge.prototype.labelFontSize = function() {
        return Number(parameters["ラベル-文字サイズ"] || _Sprite_Gauge_labelFontSize.apply(this));
    };


    //- ゲージスブライト/ラベルの縁取り幅(処理追加)
    const _Sprite_Gauge_labelOutlineWidth = Sprite_Gauge.prototype.labelOutlineWidth;
    Sprite_Gauge.prototype.labelOutlineWidth = function() {
        return Number(parameters["ラベル-縁取り幅"] || _Sprite_Gauge_labelOutlineWidth.apply(this));
    };


    //- ゲージスブライト/数値の文字サイズ(処理追加)
    const _Sprite_Gauge_valueFontSize = Sprite_Gauge.prototype.valueFontSize;
    Sprite_Gauge.prototype.valueFontSize = function() {
        return Number(parameters["数値-文字サイズ"] || _Sprite_Gauge_valueFontSize.apply(this));
    };


    //- ゲージスブライト/数値の縁取り幅(処理追加)
    const _Sprite_Gauge_valueOutlineWidth = Sprite_Gauge.prototype.valueOutlineWidth;
    Sprite_Gauge.prototype.valueOutlineWidth = function() {
        return Number(parameters["数値-縁取り幅"] || _Sprite_Gauge_valueOutlineWidth.apply(this));
    };



    //==================================================
    //--  ■ゲージの色
    //==================================================

    const _ColorManager_hpGaugeColor1 = ColorManager.hpGaugeColor1;
    ColorManager.hpGaugeColor1 = function() {
        return keke_gaugeCfgs["hp"]["ゲージの色1"] || _ColorManager_hpGaugeColor1.apply(this);
    };
    
    const _ColorManager_hpGaugeColor2 = ColorManager.hpGaugeColor2;
    ColorManager.hpGaugeColor2 = function() {
        return keke_gaugeCfgs["hp"]["ゲージの色2"] || _ColorManager_hpGaugeColor2.apply(this);
    };
    
    const _ColorManager_mpGaugeColor1 = ColorManager.mpGaugeColor1;
    ColorManager.mpGaugeColor1 = function() {
        return keke_gaugeCfgs["mp"]["ゲージの色1"] || _ColorManager_mpGaugeColor1.apply(this);
    };
    
    const _ColorManager_mpGaugeColor2 = ColorManager.mpGaugeColor2;
    ColorManager.mpGaugeColor2 = function() {
        return keke_gaugeCfgs["mp"]["ゲージの色2"] || _ColorManager_mpGaugeColor2.apply(this);
    };

    const _ColorManager_tpGaugeColor1 = ColorManager.tpGaugeColor1;
    ColorManager.tpGaugeColor1 = function() {
        return keke_gaugeCfgs["tp"]["ゲージの色1"] || _ColorManager_tpGaugeColor1.apply(this);
    };
    
    const _ColorManager_tpGaugeColor2 = ColorManager.tpGaugeColor2;
    ColorManager.tpGaugeColor2 = function() {
        return keke_gaugeCfgs["tp"]["ゲージの色2"] || _ColorManager_tpGaugeColor2.apply(this);
    };



    //==================================================
    //--  ゲージの描画
    //==================================================

    //- ウインドウステータスベース/基本ゲージの配置(処理追加)
    const _Window_StatusBase_placeBasicGauges = Window_StatusBase.prototype.placeBasicGauges;
    Window_StatusBase.prototype.placeBasicGauges = function(actor, x, y) {
        // 表示項目を取得
        let showGauges = [];
        keke_showGauges.forEach(e => {
            const type = e["表示するゲージ"];
            if (type == "HP") { showGauges.push("hp"); }
            if (type == "MP") { showGauges.push("mp"); }
            if (type == "TP") { showGauges.push("tp"); }
        });
        // 表示項目に変更がなければ通常の配置
        if (!showGauges.length || (showGauges.length == 3 && showGauges[0] == "hp" && showGauges[1] == "mp" && showGauges[2] == "tp")) {
            _Window_StatusBase_placeBasicGauges.apply(this, arguments);
            return;
        }
        // カスタム表示項目の配置
        showGauges.forEach(gaugeName => {
            if (gaugeName == "tp" && !$dataSystem.optDisplayTp) { return; }
            this.placeGauge(actor, gaugeName, x, y);
            y += this.gaugeLineHeight();
        });
    };


    //- ゲージスブライト/ラベルの描画(再定義)
    Sprite_Gauge.prototype.drawLabel = function() {
        const labelOffsetY = 0;  //5;
        // 位置とサイズを取得
        const label = this.label();
        const x = this.labelOutlineWidth() / 2 + Number(parameters["全ラベルのずらしX"] || 0);
        let y = this.labelY();
        const width = this.measureLabelWidth();
        this.setupLabelFont();
        const height = keke_extendToLabel ? this.textHeight() : this.bitmap.fontSize + this.bitmap.outlineWidth / 2;
        // Y位置の補正
        if (!keke_extendToLabel) { y += (this.gaugeHeight() - height) / 2; }
        // フォントを適用
        this.bitmap.textColor = keke_gaugeCfgs[this._statusType]["ラベルの色"] || ColorManager.systemColor();
        const oriFontFace = this.bitmap.fontFace;
        const font = parameters["ラベル-フォント"]
        if (font) { this.bitmap.fontFace = font; }
        // 描画
        this.bitmap.paintOpacity = this.labelOpacity();
        this.bitmap.drawText(label, x, y, width, height, "left");
        this.bitmap.paintOpacity = 255;
        // フォントを戻す
        this.bitmap.fontFace = oriFontFace;
    };


    //- ゲージスブライト/値の描画(再定義)
    Sprite_Gauge.prototype.drawValue = function() {
        const showMaxHp = keke_gaugeCfgs[this._statusType]["最大値を表示"];
        const maxValueFontSize = Number(parameters["最大値の文字サイズ補正"] || 0);
        const ow = this.valueOutlineWidth();
        // 位置とサイズを取得
        const valueX = this.gaugeX() + Number(parameters["全数値のずらしX"] || 0);
        const valueY = ow / 2 + Number(parameters["全数値のずらしY"] || 0);
        const width = this.bitmapWidth() - this.gaugeX() - this.bitmap.outlineWidth / 2;
        const height = keke_gaugeCfgs[this._statusType]["数値のみ表示"] ? this.labelY() + this.labelFontSize() + this.labelOutlineWidth() / 2 : this.textHeight();
        this.setupValueFont();
        // フォントを適用
        const oriFontFace = this.bitmap.fontFace;
        const font = parameters["数値-フォント"]
        if (font) { this.bitmap.fontFace = font; }
        // 最大値を表示する場合の描画
        if (showMaxHp) {
            // 最大値
            this.bitmap.fontSize += maxValueFontSize;
            const maxValue = gaugeMaxValue(this);
            const maxValueAbb = keke_hpAbbreviation ? abbreviationValue(maxValue, this._battler, this._statusType) : maxValue;
            const maxValueStr = "/" + maxValueAbb;
            const maxValueW = Math.min(width / 2, this.bitmap.measureTextWidth(maxValueStr));
            this.bitmap.drawText(maxValueStr, valueX + (width - maxValueW), valueY, maxValueW, height, "right");
            this.bitmap.fontSize -= maxValueFontSize;
            // 現在値
            const currentValue = this.currentValue();
            const currentValueAbb = keke_hpAbbreviation ? abbreviationValue(currentValue, this._battler, this._statusType) : currentValue;
            const currentValueW = Math.min(width / 2, this.bitmap.measureTextWidth(currentValueAbb));
            this.bitmap.drawText(currentValueAbb, valueX + (width - maxValueW - currentValueW), valueY, currentValueW, height, "right");
        // 最大値を表示しない場合の描画
        } else {
            const currentValue = this.currentValue();
            const currentValueAbb = keke_hpAbbreviation ? abbreviationValue(currentValue, this._battler, this._statusType) : currentValue;
            this.bitmap.drawText(currentValueAbb, valueX, valueY, width, height, "right");
        }
        // フォントを戻す
        this.bitmap.fontFace = oriFontFace;
    };


    //- ゲージの最大値を取得
    function gaugeMaxValue(gauge) {
        if (gauge._battler) {
            switch (gauge._statusType) {
                case "hp":
                    return gauge._battler.mhp;
                case "mp":
                    return gauge._battler.mmp;
                case "tp":
                    return gauge._battler.maxTp();
            }
        }
        return NaN;        
    };


    //- ゲージスブライト/ゲージ矩形の描画(処理追加)
    const _Sprite_Gauge_drawGaugeRect =  Sprite_Gauge.prototype.drawGaugeRect;
    Sprite_Gauge.prototype.drawGaugeRect = function(x, y, width, height) {
        if (!this._statusType.match(/hp|mp|tp/i)) {
            _Sprite_Gauge_drawGaugeRect.apply(this, arguments);
            return;
        }
        if (keke_gaugeCfgs[this._statusType]["数値のみ表示"]) { return; }
        const gaugeOffsetY = 0;
        const ow = this.valueOutlineWidth();
        // 形状
        const form = keke_gaugeCfgs[this._statusType]["ゲージの形状"];
        const slope = keke_gaugeCfgs[this._statusType]["…斜めな形-傾き"];
        const roundEdge = keke_gaugeCfgs[this._statusType]["…丸い形-角丸み"];
        const gaugeOw = keke_gaugeCfgs[this._statusType]["ゲージの縁取り幅"];
        const validLuster = keke_gaugeCfgs[this._statusType]["光沢を付ける"];
        const lusterHeight =keke_gaugeCfgs[this._statusType]["…光沢の太さ"];
        // カラー
        const backColor = keke_gaugeCfgs[this._statusType]["下地の色"];
        const gradation = "横";
        const lineColor = keke_gaugeCfgs[this._statusType]["縁取りの色"];
        const lusterColor1 = strToColor(keke_gaugeCfgs[this._statusType]["…光沢の色"], 1);
        const lusterColor2 = strToColor(keke_gaugeCfgs[this._statusType]["…光沢の色"], keke_gaugeCfgs[this._statusType]["…光沢のグラデ"]);
        const gaugeColor1 = this.gaugeColor1();
        const gaugeColor2 = this.gaugeColor2();
        // ダメージ強調
        const validDamageHighlight = keke_gaugeCfgs[this._statusType]["ダメージ強調"] && this._duration && this._targetValue < this._preValueKe;
        const damageAlpha = this._duration / (this._durationMaxKe / 2);
        const damageColor = strToColor(keke_gaugeCfgs[this._statusType]["…強調色"], damageAlpha);
        const restRate = this.currentMaxValue() > 0 ? this._targetValue / this.currentMaxValue() : 0;
        const restW = Math.floor(width * restRate);
        const damageRate =this.currentMaxValue() > 0 ? (this._preValueKe - this._targetValue) / this.currentMaxValue() : 0;
        const damageW = Math.floor(width * damageRate);
        // 現在値の割合を取得
        const rate = validDamageHighlight ?
            this._duration > (this._durationMaxKe / 2) ? this._preValueKe / this._maxValue : this._value / this._maxValue
            : this.gaugeRate();
        const fillW = Math.floor(width * rate);
        const lostW = width - fillW;
        // 斜めな形
        if (form.includes("斜め")) {
            const reverse = form.includes("反転");
            // ゲージ残り
            fillDiagonalSquare(this.bitmap, x, y + ow / 2 + gaugeOffsetY, width, height, [gaugeColor1, gaugeColor2, gradation], slope, reverse);
            // 光沢
            if (validLuster) {
                this.bitmap.context.save();
                designDiagonalSquare(this.bitmap, x, y + ow / 2 + gaugeOffsetY, width, height, slope, reverse);
                this.bitmap.context.clip();
                fillSquare(this.bitmap, x, y + ow / 2 + gaugeOffsetY, width, lusterHeight, [lusterColor1, lusterColor2, "縦"], 0, 0, "", true);
                this.bitmap.context.restore();
            }
            // ゲージ減り
            fillDiagonalSquare(this.bitmap, x + fillW, y + ow / 2 + gaugeOffsetY, lostW, height, backColor, slope, reverse);
            // ダメージ強調
            if (validDamageHighlight) {
                fillDiagonalSquare(this.bitmap, x + restW, y + ow / 2 + gaugeOffsetY, damageW, height, damageColor, slope, reverse);
            }
            // 外枠
            strokeDiagonalSquare(this.bitmap, x + gaugeOw / 2, y + ow / 2 + gaugeOffsetY + gaugeOw / 2, width - gaugeOw, height - gaugeOw, lineColor, gaugeOw, slope, reverse);
        // 丸い形
        } else if (form.includes("丸い")) {
            const corner = "";
            // ゲージ残り
            fillSquare(this.bitmap, x, y + ow / 2 + gaugeOffsetY, width, height, [gaugeColor1, gaugeColor2, gradation], 0, roundEdge, corner);
            // 光沢
            if (validLuster) {
                this.bitmap.context.save();
                designSquare(this.bitmap, x, y + ow / 2 + gaugeOffsetY, width, height, 0, roundEdge, corner);
                this.bitmap.context.clip();
                fillSquare(this.bitmap, x, y + ow / 2 + gaugeOffsetY, width, lusterHeight, [lusterColor1, lusterColor2, "縦"], 0, 0, "", true);
                this.bitmap.context.restore();
            }
            // ゲージ減り
            const lostCorner = restW < roundEdge ? "" : "12";
            fillSquare(this.bitmap, x + fillW, y + ow / 2 + gaugeOffsetY, lostW, height, backColor, 0, roundEdge, lostCorner);
            // ダメージ強調
            if (validDamageHighlight) {
                fillSquare(this.bitmap, x + restW, y + ow / 2 + gaugeOffsetY, damageW, height, damageColor, 0, roundEdge, corner);
            }
            // 外枠
            strokeSquare(this.bitmap, x + gaugeOw / 2, y + ow / 2 + gaugeOffsetY + gaugeOw / 2, width - gaugeOw, height - gaugeOw, lineColor, gaugeOw, 0, roundEdge, corner);
        // 四角い形
        } else {
            // ゲージ残り
            fillSquare(this.bitmap, x, y + ow / 2 + gaugeOffsetY, width, height, [gaugeColor1, gaugeColor2, gradation]);
            // 光沢
            if (validLuster) {
                this.bitmap.context.save();
                designSquare(this.bitmap, x, y + ow / 2 + gaugeOffsetY, width, height);
                this.bitmap.context.clip();
                fillSquare(this.bitmap, x, y + ow / 2 + gaugeOffsetY, width, lusterHeight, [lusterColor1, lusterColor2, "縦"], 0, 0, "", true);
                this.bitmap.context.restore();
            }
            // ゲージ減り
            fillSquare(this.bitmap, x + fillW, y + ow / 2 + gaugeOffsetY, lostW, height, backColor);
            // ダメージ強調
            if (validDamageHighlight) {
                fillSquare(this.bitmap, x + restW, y + ow / 2 + gaugeOffsetY, damageW, height, damageColor);
            }
            // 外枠
            strokeSquare(this.bitmap, x + gaugeOw / 2, y + ow / 2 + gaugeOffsetY + gaugeOw / 2, width - gaugeOw, height - gaugeOw, lineColor, gaugeOw);
        }
    };


    //- ウインドウステータスベース/ゲージの配置(処理追加)
    const _Window_StatusBase_placeGauge = Window_StatusBase.prototype.placeGauge;
    Window_StatusBase.prototype.placeGauge = function(actor, type, x, y) {
        if (type.match(/hp|mp|tp/i)) {
            // ゲージ全体の位置ずらし
            x += Number(parameters["全体ずらしX"] || 0) + keke_gaugeCfgs[type]["ゲージのずらしX"];
            y += -Sprite_Gauge.prototype.valueOutlineWidth() / 2 + Number(parameters["全体ずらしY"] || 0) + keke_gaugeCfgs[type]["ゲージのずらしY"];
        }
        _Window_StatusBase_placeGauge.call(this, actor, type, x, y, )
    };


    //- スブライトゲージ/目標値の更新(処理追加)
    const _Sprite_Gauge_updateTargetValue = Sprite_Gauge.prototype.updateTargetValue;
    Sprite_Gauge.prototype.updateTargetValue = function(value, maxValue) {
        // 前回の値を保存
        this._preValueKe = this._targetValue;
        _Sprite_Gauge_updateTargetValue.apply(this, arguments);
        // 動作時間を保存
        this._durationMaxKe = this._duration;
    };


    //- スブライトゲージ/スムーズ時間(再定義)
    Sprite_Gauge.prototype.smoothness = function() {
        return this._statusType === "time" ? 5 : keke_gaugeCfgs[this._statusType]["ゲージスムーズ時間"];
    };



    //==================================================
    //--  テキスト基本 /ベーシック
    //==================================================

    //- 数値を丸める
    function abbreviationValue(val, battler, type) {
        const str = val.toString();
        const length = str.length;
        // 無限とする値か判定
        const infinity = checkInfinityVal(battler, type);
        if (infinity) { return infinity; }
        // 桁数に応じた判定
        if (length >= 13) {
            const cutEnd = length - 12;
            let head = str.slice(0, cutEnd);
            const restTop = str.slice(cutEnd, cutEnd + 1);
            if (Number(restTop) >= 5) { head = Number(head) + 1; }
            return `${head}兆`
        } else if (length >= 9) {
            const cutEnd = length - 8;
            let head = str.slice(0, cutEnd);
            const restTop = str.slice(cutEnd, cutEnd + 1);
            if (Number(restTop) >= 5) { head = Number(head) + 1; }
            return `${head}億`
        } else if (length >= 7) {
            const cutEnd = length - 4;
            let head = str.slice(0, cutEnd);
            const restTop = str.slice(cutEnd, cutEnd + 1);
            if (Number(restTop) >= 5) { head = Number(head) + 1; }
            return `${head}万`
        }
        return `${val}`
    };


    //- 無限とする値か判定
    function checkInfinityVal(battler, type) {
        const gt = $gameTemp;
        // 無限に関する設定がなければリターン
        if (!gt._infinityValueKe || !gt._infinityWordKe) { return null; }
        // 無限にする値か判定
        if (getBaseParam(battler, type) == gt._infinityValueKe) {
            return gt._infinityWordKe;
        }
        return null;
    };


    //- ベースパラムの取得
    function getBaseParam(battler, type) {
        if (type.match(/hp|mp/i)) {
            return battler.paramBasePlus(getParamId(type));
        } else {
            return battler.maxTp();
        }
    };


    //- パラムIDの取得
    function getParamId(type) {
        if (type.match(/hp/i)) { return 0; } else
        if (type.match(/mp/i)) { return 1; } else
        { return null; }
    };
    
    
    //- 文字列をカラーに
    function strToColor(str, forcedAlpha) {
        const match = str.match(/\d+\s*,*\s*\d*\s*,*\s*\d*\s*,*\s*\d*/i);
        if (!match) { return "rgba(0, 0, 0)"};
        const strs = match[0].replace("\s", "").split(",");
        const red = strs[0] || 0;
        const green = strs[1] || 0;
        const blue = strs[2] || 0;
        const alpha = strs[3] || (forcedAlpha != null ? forcedAlpha : 1);
        return `rgba(${red}, ${green}, ${blue}, ${alpha})`; 
    };


    //- フォント設定のコピー
    function copyFontSettings(tageBitmap, fromBitmap) {
        tageBitmap.fontFace = fromBitmap.fontFace;
        tageBitmap.fontSize = fromBitmap.fontSize;
        tageBitmap.textColor = fromBitmap.textColor;
        tageBitmap.outlineWidth = fromBitmap.outlineWidth;
        tageBitmap.outlineColor = fromBitmap.outlineColor;
    };



    //==================================================
    //--  図形描画 /ベーシック
    //==================================================
    
    //- スクエアの塗り潰し
    function fillSquare(bitmap, x, y, w, h, color = "rgba(0,0,0,1)", roundLine = 0, roundEdge = 0, corner = "", noSave) {
        const context = bitmap.context;
        if (!noSave) { context.save(); }
        if (Array.isArray(color)) {
            const gradType = color[2] || "縦";
            const x1 = gradType.includes("横") ? x + w : x;
            const y1 = gradType.includes("横") ? y : y + h;
            grad = context.createLinearGradient(x, y, x1, y1);
            if (gradType.includes("中央")) {
                grad.addColorStop(0, color[0]);
                grad.addColorStop(0.5, color[1]);
                grad.addColorStop(1, color[0]);
            } else {
                grad.addColorStop(0, color[0]);
                grad.addColorStop(1, color[1]);
            }
            context.fillStyle = grad;
        } else {
            context.fillStyle = color;
        }
        designSquare(bitmap, x, y, w, h, roundLine, roundEdge, corner);
        context.fill();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    
    //- スクエアの線画
    function strokeSquare(bitmap, x, y, w, h, color = "rgba(0,0,0,1)", lineW = 1,  roundLine = 0, roundEdge = 0, corner = "", noSave) {
        const context = bitmap.context;
        if (!noSave) { context.save(); }
        context.strokeStyle = color;
        context.lineWidth = lineW;
        designSquare(bitmap, x, y, w, h, roundLine, roundEdge, corner, lineW);
        context.stroke();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    
    //- スクエアのデザイン
    function designSquare(bitmap, x, y, w, h, roundLine = 0, roundEdge = 0, corner = "", lineW = 0, airUp) {
        const context = bitmap.context;
        context.beginPath();
        roundEdge = Math.min(roundEdge, w);
        const x2 = x + w / 2;
        const y2 = y + h / 2;
        const x3 = x + w;
        const y3 = y + h;
        const c1 = corner.includes("1") ? 0 : roundEdge;    // 左上
        const c2 = corner.includes("2") ? 0 : roundEdge;    // 左下
        const c3 = corner.includes("3") ? 0 : roundEdge;    // 右上
        const c4 = corner.includes("4") ? 0 : roundEdge;    // 右下
        // 左上
        context.moveTo(x + c1,  y);
        // 右上
        if (roundLine && !airUp) {
            context.quadraticCurveTo(x2,  y + roundLine,  x3 - c3,  y);
        } else {
            context.lineTo(x3 - c3,  y);
        }
        context.quadraticCurveTo(x3,  y,  x3,  y + c3);
        // 右下
        if (roundLine) {
            context.quadraticCurveTo(x3 - roundLine,  y2,  x3,  y3 - c4);
        } else {
            context.lineTo(x3,  y3 - c4);
        }
        context.quadraticCurveTo(x3,  y3,  x3 - c4,  y3);
        // 左下
        if (roundLine) {
            context.quadraticCurveTo(x2,  y3 - roundLine,  x + c2,  y3);
        } else {
            context.lineTo(x + c2,  y3);
        }
        context.quadraticCurveTo(x,  y3,  x,  y3 - c2);
        // 左上
        if (roundLine) {
            context.quadraticCurveTo(x + roundLine,  y2,  x,  y + c1);
        } else {
            context.lineTo(x,  y + c1);
        }
        if (c1) {
            context.quadraticCurveTo(x,  y,  x + c1,  y);
        } else {
            context.lineTo(x,  y - lineW / 2);
        }
    };


    //- 斜めスクエアの塗り潰し
    function fillDiagonalSquare(bitmap, x, y, w, h, color = "rgba(0,0,0,1)", slope = 0, reverse, noSave) {
        const context = bitmap.context;
        if (!noSave) { context.save(); }
        if (Array.isArray(color)) {
            const gradType = color[2] || "縦";
            const x1 = gradType.includes("横") ? x + w : x;
            const y1 = gradType.includes("横") ? y : y + h;
            grad = context.createLinearGradient(x, y, x1, y1);
            if (gradType.includes("中央")) {
                grad.addColorStop(0, color[0]);
                grad.addColorStop(0.5, color[1]);
                grad.addColorStop(1, color[0]);
            } else {
                grad.addColorStop(0, color[0]);
                grad.addColorStop(1, color[1]);
            }
            context.fillStyle = grad;
        } else {
            context.fillStyle = color;
        }
        designDiagonalSquare(bitmap, x, y, w, h, slope, reverse);
        context.fill();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    
    //- 斜めスクエアの線画
    function strokeDiagonalSquare(bitmap, x, y, w, h, color = "rgba(0,0,0,1)", lineW = 1,  slope = 0, reverse, noSave) {
        const context = bitmap.context;
        if (!noSave) { context.save(); }
        context.strokeStyle = color;
        context.lineWidth = lineW;
        designDiagonalSquare(bitmap, x, y, w, h, slope, reverse);
        context.stroke();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    
    //- 斜めスクエアのデザイン
    function designDiagonalSquare(bitmap, x, y, w, h, slope = 0, reverse) {
        const context = bitmap.context;
        context.beginPath();
        w = Math.max(slope, w);
        const x3 = x + w;
        const y3 = y + h;
        // 反転バージョン
        if (reverse) {
            // 左上
            context.moveTo(x + slope,  y);
            // 右上
            context.lineTo(x3,  y);
            // 右下
            context.lineTo(x3 - slope,  y3);
            // 左下
            context.lineTo(x,  y3);
            // 左上
            context.lineTo(x + slope,  y);
        // 通常バージョン
        } else {
            // 左上
            context.moveTo(x,  y);
            // 右上
            context.lineTo(x3 - slope,  y);
            // 右下
            context.lineTo(x3,  y3);
            // 左下
            context.lineTo(x + slope,  y3);
            // 左上
            context.lineTo(x,  y);
        }
    };
    
})();