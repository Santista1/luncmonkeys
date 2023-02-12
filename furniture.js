function room (p = {}) {

  meshes({
    group_name: 'room',
    name: ['floor', 'ceiling', 'leftwall', 'rightwall', 'backwall', 'frontwall'],
    scene: p.scene,
    geometry: box,
    material: p.material,
    x: [p.x || 0, p.x || 0, -p.width / 2 + (p.x || 0), p.width / 2 + (p.x || 0), p.x || 0, p.x || 0],
    y: [-p.height / 2 + (p.y || 0), p.height / 2 + (p.y || 0), p.y || 0, p.y || 0, p.y || 0, p.y || 0],
    z: [p.z || 0, p.z || 0, p.z || 0, p.z || 0, -p.depth / 2 + (p.z || 0), p.depth / 2 + (p.z || 0)],
    sx: [p.width, p.width, p.thickness, p.thickness, p.width, p.width],
    sy: [p.thickness, p.thickness, p.height, p.height, p.height, p.height],
    sz: [p.depth, p.depth, p.depth, p.depth, p.thickness, p.thickness],
    visible: p.visible,
    cull: p.cull
  });

};

function chair (p = {}) {

  const legx = p.width / 2 + (p.x || 0);
  const frontlegz = p.depth / 2 + (p.z || 0);
  const backlegz = -p.depth / 2 + (p.z || 0);
  const y = p.y || 0;

  meshes({
    group_name: 'chair',
    name: ['leg1', 'leg2', 'leg3', 'leg4', 'seat', 'back'],
    scene: p.scene,
    geometry: p.geometry,
    material: p.material,
    x: [legx, -legx, legx, -legx, p.x || 0, p.x || 0],
    y: [y, y,  p.height / 4 + y + p.thickness / 2, p.height / 4 + y + p.thickness / 2, p.height / 4 + y, p.height / 2 + y + p.thickness],
    z: [frontlegz, frontlegz, backlegz, backlegz, p.z || 0, backlegz],
    sx: [p.thickness, p.thickness, p.thickness, p.thickness, p.width + p.thickness, p.width],
    sy: [p.height / 2, p.height / 2, p.height + p.thickness, p.height + p.thickness, p.thickness, p.height / 3],
    sz: [p.thickness, p.thickness, p.thickness, p.thickness, p.depth + p.thickness, p.thickness],
    visible: p.visible
  });

};

function painting (p = {}) {

  meshes({
    group_name: 'painting',
    name: 'canvas',
    scene: p.scene,
    geometry: p.geometry,
    material: p.material,
    x: p.x || 0,
    y: p.y || 0,
    z: p.z || 0,
    sx: p.sx || 4,
    sy: p.sy || 3,
    sz: p.sz || 0.01,
    function: p.function
  });

};

function chair (p = {}) {

  const frontlegz = p.depth / 2 + (p.z || 0);
  const backlegz = -p.depth / 2 + (p.z || 0);
  const y = p.y || 0;

  meshes({
    group_name: 'chair',
    name: ['leg1', 'leg2', 'leg3', 'leg4', 'seat', 'back'],
    scene: p.scene,
    geometry: p.geometry,
    material: p.material,
    x: [p.width / 2 + (p.x || 0), -p.width / 2 + (p.x || 0), p.width / 2 + (p.x || 0), -p.width / 2 + (p.x || 0), p.x || 0, p.x || 0],
    y: [y, y,  p.height / 4 + y + p.thickness / 2, p.height / 4 + y + p.thickness / 2, p.height / 4 + y, p.height / 2 + y + p.thickness],
    z: [frontlegz, frontlegz, backlegz, backlegz, p.z || 0, backlegz],
    sx: [p.thickness, p.thickness, p.thickness, p.thickness, p.width + p.thickness, p.width],
    sy: [p.height / 2, p.height / 2, p.height + p.thickness, p.height + p.thickness, p.thickness, p.height / 3],
    sz: [p.thickness, p.thickness, p.thickness, p.thickness, p.depth + p.thickness, p.thickness],
    visible: p.visible
  });

};

function lamp (p = {}) {

  if (typeof cylinder == 'undefined') { geometry({name: 'cylinder', type: 'cylinder'}) };
  if (typeof openended_cylinder == 'undefined') { geometry({name: 'openended_cylinder', type: 'cylinder', openEnded: true}) };

  meshes({
    group_name: 'lamp',
    name: ['base', 'pipe', 'shade'],
    scene: p.scene,
    geometry: [cylinder, cylinder, openended_cylinder],
    material: p.material,
    x: p.x || 2,
    y: [-1.5 + (p.y || 0), -0.5 + (p.y || 0), 0.5 + (p.y || 0)],
    z: p.z || 0,
    sx: [p.sx || 0.2, p.sx || 0.02, p.sx || 0.25],
    sy: [p.sy || 0.02, p.sy || 2, p.sy || 0.5],
    sz: [p.sz || 0.2, p.sz || 0.02, p.sz || 0.25]
  });

};
