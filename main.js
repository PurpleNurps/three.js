import * as THREE from 'three';

// Let's take a moment to explain what's going on here. We have now set up the scene, our camera and the renderer. The scene is where all of our 3D objects will be stored. The camera is what we will use to view the scene. The renderer is what will take the scene and camera and draw them to the screen.

const scene = new THREE.Scene();

// There are a few different cameras in three.js. For now, let's use a PerspectiveCamera. This camera mimics the way that the human eye sees. It is the most common camera used in three.js.

// The first attribute is the field of view. FOV is the extent of the scene that is seen on the display at any given moment. The value is in degrees.

// The second attribute is the aspect ratio. This is the ratio of the width of the scene to the height of the scene. You almost always want to use the width of the element divided by the height, or you'll get the same result as when you play old movies on a widescreen TV - the image looks squished.

// The third attribute is the near clipping plane. This is the closest point at which the camera can see. Any objects closer to the camera than the near point will not be rendered.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// The renderer is what takes the scene and the camera and draws them on the screen. It's like the painter. The renderer is what makes everything come together. We'll also set the size of the renderer to the size of the window.

// It's a good idea to use the width and height of the area we want to fill with our app - in this case, the width and height of the browser window. For performance intensive apps, you can also give setSize smaller values, like window.innerWidth/2 and window.innerHeight/2, which will make the app render at quarter size.

// If you wish to keep the size of your app but render it at a lower resolution, you can do so by calling setSize with false as updateStyle (the third argument). For example, setSize(window.innerWidth/2, window.innerHeight/2, false) will render your app at half resolution, given that your <canvas> has 100% width and height.

// The renderer will create a canvas element, which you can append to the document. It will fill the entire window, but you can insert it into a specific div by passing the div as an argument to the appendChild method, like so: container.appendChild(renderer.domElement);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Now that we have a scene, a camera, and a renderer, we need to add something to the scene. Let's add a cube.

// A mesh is an object that takes a geometry, and applies a material to it. This will allow us to define what the shape looks like and how it should interact with light. We'll get into materials in the next section. For now, let's just focus on the geometry.

// A geometry is a set of points that make up a model. A cube is made up of 8 points. These points are then connected to make faces, and these faces fill the space inside of the cube. We'll get into this in more detail in the next section.

// The BoxGeometry is an object that contains all the points (vertices) and fill (faces) of the cube. We'll be using this in combination with a MeshBasicMaterial to make the cube. The BoxGeometry takes 3 arguments: width, height and depth. We'll set each of these to 1.

// The MeshBasicMaterial is a material that will not be affected by light. It will just be a solid color. We'll use this to make a green cube. We'll get into materials in more detail in the next section.

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// The camera starts out at (0,0,0). We'll move it back so we can see the cube. The z position is how far in front of the scene the camera is. We'll set it to 5, which is a good distance to view the cube.

camera.position.z = 5;

// Now we need to make the cube appear. We can do this by rendering the scene with the camera.

// The renderer will take the scene and the camera and draw them. The result will be drawn to the canvas.

// The renderer will be calling the render function about 60 times per second. This will give us a smooth animation. We'll get into this in more detail in the next section.

function animate() {
  requestAnimationFrame(animate);

  // This will rotate the cube every frame.
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();