/*:
 * @target MZ
 * @plugindesc Play .webm videos with alpha inside scenes, pause game until finished.
 * @author You
 */

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
