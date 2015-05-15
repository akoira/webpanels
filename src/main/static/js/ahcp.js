var $j = jQuery.noConflict();

function init() {
    var renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb});
    document.body.appendChild(renderer.view);

    // create the root of the scene graph
    var stage = new PIXI.Container();
    stage.interactive = true;

    var toggle1 = new Toggle3();
    toggle1.sprite.position.set(230, 264);

    var toggle2 = new Toggle3();
    toggle2.sprite.position.set(330, 264);

    var toggle3 = new Toggle3();
    toggle3.sprite.position.set(430, 264);


    stage.addChild(toggle1.sprite);
    stage.addChild(toggle2.sprite);
    stage.addChild(toggle3.sprite);

    // start animating
    animate();

    function animate() {

        requestAnimationFrame(animate);

        // render the root container
        renderer.render(stage);
    }
}

$j(document).ready(function() {
});
