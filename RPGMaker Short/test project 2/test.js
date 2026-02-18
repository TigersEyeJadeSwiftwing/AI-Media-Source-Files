/*:
 * @target MZ
 * @plugindesc Play .webm videos with alpha inside scenes, pause game until finished.
 * @author You
 */

/** Makes a deep copy of any object.  Doesn't copy functions, just data.
 * @return {object} A deep copy of the input object.
 */
Object.defineProperty(Object.prototype,'Deep',{value:function(){return JSON.parse(JSON.stringify(this));},enumerable:false});

function Lerp(a, b, t) {
    return (a * (1.0 - t)) + (b * t);
};

SceneManager.videos = {};
SceneManager.video_busy = false;

function QueueVideo(v_src, v_x, v_y, v_width, v_height, v_fullscreen, v_vol, v_video_bg) {
    let vid = {
        src:v_src,
        x:v_x,
        y:v_y,
        width:v_width,
        height:v_height,
        fullscreen:v_fullscreen,
        vol:v_vol,
        video_bg:v_video_bg
    };

    SceneManager.videos.push(vid);
};

Game_Interpreter.prototype.executeCommand = function() {
    if (SceneManager.video_busy == true)
        return true;

    const command = this.currentCommand();
    if (command) {
        this._indent = command.indent;
        const methodName = "command" + command.code;
        if (typeof this[methodName] === "function") {
            if (!this[methodName](command.parameters)) {
                return false;
            }
        }
        this._index++;
    } else {
        this.terminate();
    }
    return true;
};

// Play a video at given position/size, return a Promise that resolves when done
function playVideoOnScene(src, x, y, width, height, fullscreen = false, vol = 1.0) {
    return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.src = src;
        video.autoplay = true;
        video.loop = false;
        video.muted = false;
        video.volume = vol;
        video.crossOrigin = "anonymous"; // needed for PIXI texture
        video.playsInline = true;

        // Create PIXI texture from video
        const baseTexture = PIXI.BaseTexture.from(video, { scaleMode: PIXI.SCALE_MODES.LINEAR });
        const texture = new PIXI.Texture(baseTexture);
        const sprite = new PIXI.Sprite(texture);

        if (fullscreen) {
            sprite.x = 0;
            sprite.y = 0;
            sprite.width = Graphics.width;
            sprite.height = Graphics.height;

            if (sprite.width > sprite.height) {
                sprite.x = Math.round((sprite.width - sprite.height) * 0.5);
                sprite.width = sprite.height;
            }
        } else {
            sprite.x = x;
            sprite.y = y;
            sprite.width = width;
            sprite.height = height;
        }

        // Add to current scene
        const scene = SceneManager._scene;
        scene.addChild(sprite);

        // Pause game updates while video plays
        const oldUpdate = SceneManager.updateMain;
        SceneManager.updateMain = function() {
            // Only update rendering, not game logic
            // this.updateManagers();
            // this.renderScene();

            SceneManager.video_busy = true;

            // this.updateFrameCount();
            this.updateInputData();
            // this.updateEffekseer();
            // this.changeScene();
            // this.updateScene();
            // this._scene.update();
            // $gameMap.update(true);
            // $gamePlayer.update(true);
            // $gameTimer.update(true);
            this._scene.updateFade();
            this._scene.updateColorFilter();
            // $gameScreen.update();

            if (this._scene && this._scene.constructor === Scene_Map) {
                // this._scene.updateWaitCount();
            }

            if (SceneManager.isGameActive() == true) {
                if (Input.isTriggered("ok")) {
                    if (video.paused)
                        video.play();
                    else
                        video.pause();
                }
            } else {
                video.pause();
            }

            if (video.ended) {
                // restore normal update
                SceneManager.updateMain = oldUpdate;
                SceneManager.video_busy = false;
                scene.removeChild(sprite);
                resolve();
            }
        };

        video.onerror = (e) => {
            SceneManager.updateMain = oldUpdate;
            SceneManager.video_busy = false;
            scene.removeChild(sprite);
            reject(e);
        };
    });
}

// Example: call this from an event with Script command
window.PlayVideoTest = async function() {
    SceneManager.video_busy = true;
    await playVideoOnScene("movies/uh hey how's it going B0.webm", 100, 100, 512, 512, false, 1.0);
    // game resumes here after video ends
    console.log("Video finished, game resumes");
};

window.PlayVideo = async function(src, x, y, width, height, fullscreen, vol) {
    SceneManager.video_busy = true;
    await playVideoOnScene(src, x, y, width, height, fullscreen, vol);
};

window.PlayVideoFullScreen = async function(src, vol) {
    SceneManager.video_busy = true;
    await playVideoOnScene(src, 0, 0, 0, 0, true, vol);
};

SceneManager.PlayVideo = async function(src, x, y, width, height, fullscreen, vol) {
    SceneManager.video_busy = true;
    await playVideoOnScene(src, x, y, width, height, fullscreen, vol);
};

SceneManager.PlayVideoFullScreen = async function(src, vol) {
    SceneManager.video_busy = true;
    await playVideoOnScene(src, 0, 0, 0, 0, true, vol);
};

let dgn_screen = {
    x: 3840,
    y: 2160,
    map: {
        scale_min: 1.0,
        scale_max: 10.0,
        scale_map: 2.0,
        scale_wide: 0.2,
        scale: 2.0
    }
};

Scene_Boot.prototype.resizeScreen = function() {
    // const screenWidth = $dataSystem.advanced.screenWidth;
    // const screenHeight = $dataSystem.advanced.screenHeight;
    // const screenWidth = 2560;
    // const screenHeight = 1440;
    const screenWidth = dgn_screen.x;
    const screenHeight = dgn_screen.y;

    Graphics.resize(screenWidth, screenHeight);
    Graphics.defaultScale = this.screenScale();
    this.adjustBoxSize();
    this.adjustWindow();
};

Scene_Boot.prototype.adjustBoxSize = function() {
    // const uiAreaWidth = $dataSystem.advanced.uiAreaWidth;
    // const uiAreaHeight = $dataSystem.advanced.uiAreaHeight;
    // const uiAreaWidth = 2560;
    // const uiAreaHeight = 1440;
    const uiAreaWidth = dgn_screen.x;
    const uiAreaHeight = dgn_screen.y;

    const boxMargin = 4;
    Graphics.boxWidth = uiAreaWidth - boxMargin * 2;
    Graphics.boxHeight = uiAreaHeight - boxMargin * 2;
};

Game_Screen.prototype.zoomX = function() {
    return this._zoomX * dgn_screen.map.scale;
};

Game_Screen.prototype.zoomY = function() {
    return this._zoomY * dgn_screen.map.scale;
};

Game_Screen.prototype.zoomScale = function() {
    return this._zoomScale * dgn_screen.map.scale;
};

Game_Map.prototype.screenTileX = function() {
    return Math.round(( (1.0 / dgn_screen.map.scale) * Graphics.width / this.tileWidth() ) * 16) / 16;
};

Game_Map.prototype.screenTileY = function() {
    return Math.round(( (1.0 / dgn_screen.map.scale) * Graphics.height / this.tileHeight() ) * 16) / 16;
};

Game_Map.prototype.InitMapScale = function() {
    const tiles_x = dgn_screen.x / this.tileWidth();
    const tiles_y = dgn_screen.y / this.tileHeight();


    const factor_scale = dgn_screen.map.scale_max - dgn_screen.map.scale_min;
    const factor_min_x = (dgn_screen.x / this.tileWidth()) / dgn_screen.map.scale_max;
    const factor_min_y = (dgn_screen.y / this.tileHeight()) / dgn_screen.map.scale_max;
    const limit_x = (this.width().clamp(factor_min_x, factor_min_x * factor_scale) - factor_min_x) / (factor_min_x * (factor_scale - 1.0));
    const limit_y = (this.height().clamp(factor_min_y, factor_min_y * factor_scale) - factor_min_y) / (factor_min_y * (factor_scale - 1.0));
    const limit_factor = 1.0 - Math.max(limit_x, limit_y);

    dgn_screen.map.scale_map = Lerp( dgn_screen.map.scale_min, dgn_screen.map.scale_max, limit_factor );

    const limit_factor_wide_x = factor_min_x / this.width();
    const limit_factor_wide_y = factor_min_y / this.height();
    const limit_factor_wide = Math.min(factor_min_x, factor_min_y, 0.2);

    dgn_screen.map.scale_wide = limit_factor_wide;
};

Game_Map.prototype.SetMapScale_Normal = function() {
    dgn_screen.map.scale = dgn_screen.map.scale_map;
};

Game_Map.prototype.SetMapScale_Wide = function() {
    dgn_screen.map.scale = dgn_screen.map.scale_wide;
};

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

    this.InitMapScale();
    this.SetMapScale_Normal();
};
