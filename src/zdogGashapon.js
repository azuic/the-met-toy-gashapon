// Made with Zdog
import * as Zdog from 'zdog';

let isSpinning = true;

let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
    onDragStart: function() {
        isSpinning = true;
    },
});

new Zdog.Box({
    addTo: illo,
    width: 120,
    height: 100,
    depth: 80,
    stroke: false,
    color: '#F9744B', // default face color
    leftFace: '#F78700',
    rightFace: '#F7D700',
    topFace: '#F78700',
    bottomFace: '#6565EA',
});

function animate() {
    illo.rotate.y += isSpinning ? 0.03 : 0;
    illo.rotate.x += isSpinning ? 0.03 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
}

animate();