var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var createScene = function() {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    return scene;
}

var scene = createScene();

var loadModel = function() {
    BABYLON.SceneLoader.Append("", "Muse3domgeving3.glb", scene, function (scene) {
        scene.createDefaultCameraOrLight(true, true, true);
        scene.createDefaultEnvironment();
    }, null, function (scene, message) {
        console.error(message);
    });
};

// Automatisch het model laden wanneer de pagina wordt geladen
window.addEventListener("load", function() {
    loadModel();
});

// Laad het model wanneer op de knop wordt geklikt
document.getElementById("loadButton").addEventListener("click", function() {
    loadModel();
});

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener("resize", function() {
    engine.resize();
});
