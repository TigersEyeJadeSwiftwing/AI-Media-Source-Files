/*:
 * @target MZ
 * @plugindesc Play .webm videos with alpha inside scenes, pause game until finished.
 * @author You
 */

(() => {
    // Play a video at given position/size, return a Promise that resolves when done
    function playVideoOnScene(src, x, y, width, height, fullscreen = false) {
        return new Promise((resolve, reject) => {
            const video = document.createElement("video");
            video.src = src;
            video.autoplay = true;
            video.loop = false;
            video.muted = false;
            video.volume = 1.0;
            video.crossOrigin = "anonymous"; // needed for PIXI texture
            video.playsInline = true;

            // Create PIXI texture from video
            const baseTexture = PIXI.BaseTexture.from(video, { scaleMode: PIXI.SCALE.LINEAR });
            const texture = new PIXI.Texture(baseTexture);
            const sprite = new PIXI.Sprite(texture);

            if (fullscreen) {
                sprite.x = 0;
                sprite.y = 0;
                sprite.width = Graphics.width;
                sprite.height = Graphics.height;
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
                this.updateManagers();
                this.renderScene();
                if (video.ended) {
                    // restore normal update
                    SceneManager.updateMain = oldUpdate;
                    scene.removeChild(sprite);
                    resolve();
                }
            };

            video.onerror = (e) => {
                SceneManager.updateMain = oldUpdate;
                scene.removeChild(sprite);
                reject(e);
            };
        });
    }

    // Example: call this from an event with Script command
    window.PlayVideo = async function() {
        await playVideoOnScene("movies/um excuse me can we talk B0.webm", 100, 100, 512, 512, false);
        // game resumes here after video ends
        console.log("Video finished, game resumes");
    };
})();