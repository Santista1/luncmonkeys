document.addEventListener('contextmenu', event => event.preventDefault());

geometry({name: 'sphere', type: 'sphere'});
geometry({name: 'box', type: 'box'});

texture({name: 'wood_texture', path: 'https://cdn.shopify.com/s/files/1/0324/1709/products/YNO_d806b4cf-5497-475c-9afc-7e091580e6f3_1024x.jpeg?v=1571629949'});
texture({name: 'wood_floor', path: 'https://res.cloudinary.com/dexin8o58/image/upload/v1675404737/brown-wood_hyhiiv.jpg', repeat_u: 17});
texture({name: 'wall_texture', path: 'https://4.bp.blogspot.com/-5xNMmxVjWKg/UA5bNp_0jaI/AAAAAAAAB4s/QXcwBUUPPKw/s1600/Seamless+wall+white+paint+stucco+plaster+texture.jpg', repeat_u: 7, repeat_v: 5});
texture({name: 'ceiling_texture', path: 'https://4.bp.blogspot.com/-5xNMmxVjWKg/UA5bNp_0jaI/AAAAAAAAB4s/QXcwBUUPPKw/s1600/Seamless+wall+white+paint+stucco+plaster+texture.jpg', repeat_u: 40, repeat_v: 7});
texture({name: 'watermelon_pattern', path: 'https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.jpg'});
texture({name: 'flowers_pattern', path: 'https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.jpg'});
texture({name: 'calendar_texture', path: 'https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/IMG_5667_fhvrbt.jpg'});
texture({name: 'contact_texture', path: 'https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/IMG_5638_vqwa7h.jpg'});

material({ name: 'wood', type: 'standard', map: wood_texture});
material({ name: 'wood_floor', type: 'physical', map: wood_floor, roughness: 0});
material({ name: 'wall', type: 'standard', map: wall_texture});
material({ name: 'ceiling', type: 'standard', map: ceiling_texture});
material({ name: 'watermelon', type: 'standard', map: watermelon_pattern});
material({ name: 'flowers', type: 'standard', map: flowers_pattern});
material({ name: 'calendar', type: 'standard', map: calendar_texture});
material({ name: 'contact', type: 'standard', map: contact_texture});

material({ name: 'blue', type: 'standard', color: 'blue' });
material({ name: 'black', type: 'standard', color: 'black' });
material({ name: 'beige', type: 'standard', color: 'beige', side: 2 });
material({ name: 'maroon', type: 'standard', color: 0x57232f });
material({ name: 'mediumvioletred', type: 'standard', color: 'mediumvioletred' });

material({ name: 'skin', roughness: 0, transmission: 0.5, type: 'physical', color: 0xF8CBA6 });
material({ name: 'skin_transparent', roughness: 0.5, type: 'standard', color: 0xF8CBA6, transparent: true, opacity: 0.5 });

//WORLD_________________________________________________________________________

init({name: 'world'});

light({name: 'light2', type: 'point', scene: 'world', color: 'red', distance: 30});
light({name: 'light2', type: 'point', scene: 'world', color: 'orange', x: 10, distance: 30});
light({name: 'light2', type: 'point', scene: 'world', color: 'green', x: 20, distance: 30});
light({name: 'light2', type: 'point', scene: 'world', color: 'blue', x: 30, distance: 30});

room({
  material: [wood_floor, ceiling, wall, wall, ceiling],
  scene: world,
  width: 40,
  height: 4,
  depth: 5,
  thickness: 0.1,
  x: 15,
  z: 0,
  cull: [false, false, false, false, false, true]
});

chair({geometry: box, material: wood, scene: world, width: 2, height: 1, depth: 0.5, thickness: 0.05, x: 15, y: -1.7, z: -2});
lamp({material: [black, black, beige], scene: world, x: 2.5, z: -2, y: -0.45});

painting({
  geometry: box,
  material: watermelon,
  scene: world,
  z: -2.45,
  function: function (mesh) {
    mesh.on('click', (ev) => {
      if (mesh.clicked) {new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start()}
      else {new TWEEN.Tween(world_camera.position).to({z: 0}, 500).start()};
      if (mesh.clicked) {mesh.clicked = false} else {mesh.clicked = true};
    });
    mesh.on('mouseout', (ev) => {
      new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start(); mesh.clicked = false
    });
    mesh.on('mouseover', (ev) => {
      new TWEEN.Tween(world_camera.position).to({x: 0}, 500).start(); mesh.clicked = false
    });
  }
});

painting({
  geometry: box,
  material: calendar,
  scene: world,
  x: 10, z: -2.45,
  function: function (mesh) {
    mesh.on('click', (ev) => {
      if (mesh.clicked) {new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start()}
      else {new TWEEN.Tween(world_camera.position).to({z: 0}, 500).start()};
      if (mesh.clicked) {mesh.clicked = false} else {mesh.clicked = true};
    });
    mesh.on('mouseout', (ev) => {
      new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start(); mesh.clicked = false
    });
    mesh.on('mouseover', (ev) => {
      new TWEEN.Tween(world_camera.position).to({x: 10}, 500).start(); mesh.clicked = false
    });
  }
});

painting({
  geometry: box,
  material: flowers,
  scene: world,
  x: 20, z: -2.45,
  function: function (mesh) {
    mesh.on('click', (ev) => {
      if (mesh.clicked) {new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start()}
      else {new TWEEN.Tween(world_camera.position).to({z: 0}, 500).start()};
      if (mesh.clicked) {mesh.clicked = false} else {mesh.clicked = true};
    });
    mesh.on('mouseout', (ev) => {
      new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start(); mesh.clicked = false
    });
    mesh.on('mouseover', (ev) => {
      new TWEEN.Tween(world_camera.position).to({x: 20}, 500).start(); mesh.clicked = false
    });
  }
});

painting({
  geometry: box,
  material: contact,
  scene: world,
  x: 30, z: -2.45,
  function: function (mesh) {
    mesh.on('click', (ev) => {
      if (mesh.clicked) {new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start()}
      else {new TWEEN.Tween(world_camera.position).to({z: 0}, 500).start()};
      if (mesh.clicked) {mesh.clicked = false} else {mesh.clicked = true};
    });
    mesh.on('mouseout', (ev) => {
      new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start(); mesh.clicked = false
    });
    mesh.on('mouseover', (ev) => {
      new TWEEN.Tween(world_camera.position).to({x: 30}, 500).start(); mesh.clicked = false
    });
  }
});

//MENU__________________________________________________________________________

init({name: 'menu', type: 'orthographic'});

new THREE.Interaction(menu_renderer, menu, menu_camera);
new THREE.Interaction(menu_renderer, world, world_camera);

light({name: 'light1', type: 'point', scene: 'menu', color: 'white', y: 40, z: 50})

meshes({
  group_name: 'menu',
  name: ['button0', 'button1', 'button2', 'button3'],
  scene: menu,
  geometry: sphere,
  material: skin,
  x: [-24, -8, 8, 24],
  y: 45,
  z: -1,
  sx: 4, sy: 4, sz:4,
  cursor: 'pointer',
  function: [

    function (object) {
      object.on('mouseover', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 0}, 500).start() });
      object.on('click', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 0}, 500).start() });
    },

    function (object) {
      object.on('mouseover', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 10}, 500).start() });
      object.on('click', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 10}, 500).start() });
    },

    function (object) {
      object.on('mouseover', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 20}, 500).start() });
      object.on('click', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 20}, 500).start() });
    },

    function (object) {
      object.on('mouseover', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 30}, 500).start() });
      object.on('click', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 30}, 500).start() });
    },

  ],
  group_function: function (name) {
    name.on('mouseover', (ev) => { name.material = skin_transparent });
    name.on('mouseout', (ev) => { name.material = skin })
  }
});

// controls({name: 'drag_controls', type: 'drag', camera: menu_camera, renderer: menu_renderer, enabled: false, objects: [menu.button0, menu.button1, menu.button2, menu.button3]});
// controls({name: 'orbit_controls', type: 'orbit', camera: world_camera, renderer: menu_renderer, enabled: false});
//
// meshes({
//   group_name: 'controls_menu',
//   name: ['drag_toggle', 'orbit_toggle'],
//   scene: menu,
//   geometry: sphere,
//   material: skin,
//   x: -80,
//   y: [40, 30],
//   z: -1,
//   sx: 3, sy: 3, sz: 3,
//   cursor: 'pointer',
//   function: [
//     function (name) { name.on('click', (ev) => { drag_controls.enabled = !drag_controls.enabled; name.material = 'blue' }) },
//     function (name) { name.on('click', (ev) => { orbit_controls.enabled = !orbit_controls.enabled }) }
//   ],
//   group_function: function (name) {
//     name.on('mouseover', (ev) => { name.material = skin_transparent }),
//     name.on('mouseout', (ev) => { name.material = skin })
//   }
// });


function animate() {

  requestAnimationFrame( animate );

  TWEEN.update();

  menu_renderer.render( menu, menu_camera);
  world_renderer.render( world, world_camera);

};

animate();

window.addEventListener('resize', onWindowResize, false);
function onWindowResize(){

  world_camera.aspect = window.innerWidth / window.innerHeight;
  world_camera.updateProjectionMatrix();
  world_renderer.setSize( window.innerWidth, window.innerHeight );

  aspect = window.innerWidth / window.innerHeight;

  menu_camera.left = 100 * (window.innerWidth / window.innerHeight) / - 2;
  menu_camera.right = 100 * (window.innerWidth / window.innerHeight) / 2;
  menu_camera.top = 100 / 2;
  menu_camera.bottom = - 100 / 2;

  menu_camera.updateProjectionMatrix();
  menu_renderer.setSize( window.innerWidth, window.innerHeight );


}
