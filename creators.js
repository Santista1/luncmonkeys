function canvas(p = {}) {

  this[p.name] = document.createElement("canvas");
  this[p.name].width = p.width || window.innerWidth;
  this[p.name].height = p.height || window.innerHeight;
  this[p.name].style.position = "absolute";
  document.body.appendChild(this[p.name]);

};

function scene({name = 'world', background = null}) {

  this[name] = new THREE.Scene();
  this[name].background = background;

};

function camera(p = {}) {

  switch (p.type) {

    case undefined:
    case 'perspective':
      this[p.name] = new THREE.PerspectiveCamera(
        p.fov || 75,
        p.aspect || window.innerWidth / window.innerHeight,
        p.near || 0.1,
        p.far || 1000
      );
    break;

    case 'orthographic':
      this[p.name] = new THREE.OrthographicCamera(
        ((p.frustumSize || 100) * (p.aspect || window.innerWidth / window.innerHeight)) / -2,
        ((p.frustumSize || 100) * (p.aspect || window.innerWidth / window.innerHeight)) / 2,
        (p.frustumSize || 100) / 2,
        (p.frustumSize || 100) / -2,
        p.near || 0.1,
        p.far || 1000
      );
    break;

  };

  this[p.name].position.set(p.x || 0, p.y || 0, p.z || 5);

  this[p.name].rotation.set(
    p.rx * (Math.PI / 180) || 0,
    p.ry * (Math.PI / 180) || 0,
    p.rz * (Math.PI / 180) || 0
  );

};

function renderer(p = {}) {

  if (!p.antialias) { p.antialias = true };
  if (!p.alpha) {p.alpha = true };
  if (!p.canvas) {canvas({name: p.name}); p.canvas = this[p.name];};
  this[p.name] = new THREE.WebGLRenderer(p);

};

function init(p = {}) {

  scene({name: p.name, background: p.background});
  camera({name: p.name + '_camera', type: p.type, x: p.x, y: p.y, z: p.z, rx: p.rx, ry: p.ry, z: p.rz});
  renderer({name: p.name + '_renderer'});

};

function geometry(p = {}) {

  switch (p.type) {
    case "box": this[p.name] = new THREE.BoxGeometry(p.width, p.height, p.depth, p.widthSegments, p.heightSegments, p.depthSegments); break;
    case "roundedbox": this[p.name] = new THREE.RoundedBoxGeometry(p.width, p.height, p.depth, p.segments, p.radius); break;
    case "capsule": this[p.name] = new THREE.CapsuleGeometry(p.radius, p.length, p.capSubdivisions || 10, p.radialSegments || 20); break;
    case "circle": this[p.name] = new THREE.CircleGeometry(p.radius, p.segments, p.thetaStart, p.thetaLength); break;
    case "cone": this[p.name] = new THREE.ConeGeometry(p.radius, p.height, p.radialSegments, p.heightSegments, p.openEnded, p.thetaStart, p.thetaLength); break;
    case "cylinder": this[p.name] = new THREE.CylinderGeometry (p.radiusTop, p.radiusBottom, p.height, p.radialSegments || 20, p.heightSegments, p.openEnded, p.thetaStart, p.thetaLength); break;
    case "dodecahedron": this[p.name] = new THREE.DodecahedronGeometry(p.radius, p.detail); break;
    case "edges": this[p.name] = new THREE.EdgesGeometry(p.geometry, p.thresholdAngle); break;
    case "extrude": this[p.name] = new THREE.ExtrudeGeometry(p.shapes, p.options); break;
    case "icosahedron": this[p.name] = new THREE.IcosahedronGeometry(p.radius, p.detail); break;
    case "lathe": this[p.name] = new THREE.LatheGeometry(p.points, p.segments, p.phiStart, p.phiLength); break;
    case "octahedron": this[p.name] = new THREE.OctahedronGeometry(p.radius, p.detail); break;
    case "plane": this[p.name] = new THREE.PlaneGeometry(p.width, p.height, p.widthSegments, p.heightSegments); break;
    case "polyhedron": this[p.name] = new THREE.PolyhedronGeometry( p.vertices, p.indices, p.radius, p.detail); break;
    case "ring": this[p.name] = new THREE.RingGeometry(p.innerRadius, p.outerRadius, p.thetaSegments, p.phiSegments, p.thetaStart, p.thetaLength); break;
    case "shape": this[p.name] = new THREE.ShapeGeometry(p.shapes, p.curveSegments); break;
    case "sphere": this[p.name] = new THREE.SphereGeometry(p.radius, p.widthSegments, p.heightSegments, p.phiStart, p.phiLength, p.thetaStart, p.thetaLength); break;
    case "tetrahedron": this[p.name] = new THREE.TetrahedronGeometry(p.radius, p.detail); break;
    case "torus": this[p.name] = new THREE.TorusGeometry(p.radius, p.tube, p.radialSegments, p.tubularSegments, p.arc ); break;
    case "torusknot": this[p.name] = new THREE.TorusKnotGeometry(p.radius, p.tube, p.tubularSegments, p.radialSegments, p.p, p.q); break;
    case "tube": this[p.name] = new THREE.TubeGeometry(p.path, p.tubularSegments, p.radius, p.radialSegments, p.closed);break;
    case "wireframe": this[p.name] = new THREE.WireframeGeometry(p.geometry); break;
  };

  this[p.name].side = p.side;

};

function texture(p = {}) {

  this[p.name] = new THREE.TextureLoader().load( p.path );
  this[p.name].wrapS = THREE.RepeatWrapping;
  this[p.name].wrapT = THREE.RepeatWrapping;
  this[p.name].repeat.set( p.repeat_u || 1, p.repeat_v || 1 );

};

function material(p = {}) {

  const {name, type, ...properties} = p;

  switch (p.type) {
    case "basic": this[p.name] = new THREE.MeshBasicMaterial(properties); break;
    case "depth": this[p.name] = new THREE.MeshDepthMaterial(properties); break;
    case "lambert": this[p.name] = new THREE.MeshLambertMaterial(properties); break;
    case "matcap": this[p.name] = new THREE.MeshMatcapMaterial(properties); break;
    case "normal": this[p.name] = new THREE.MeshNormalMaterial(properties); break;
    case "phong": this[p.name] = new THREE.MeshPhongMaterial(properties); break;
    case "physical": this[p.name] = new THREE.MeshPhysicalMaterial(properties); break;
    case "standard": this[p.name] = new THREE.MeshStandardMaterial(properties); break;
    case "toon": this[p.name] = new THREE.MeshToonMaterial(properties); break;
  };

};

function meshes(p = {}) {

  // if (p.group_name) {this[p.group_name] = new THREE.Group()};

  for (const key of Object.keys(p)) { if ( !Array.isArray(p[key]) ) { p[key] = [].concat(p[key]) } };
  for (var i = 0; i < Object.values(p).reduce((a, v) => { if ( v.length > a.length ){ return v }; return a }).length; i++) {

    const mesh = new THREE.Mesh(
      p.geometry[i % p.geometry.length],
      p.material[i % p.material.length]
    );

    mesh.name = p.name[i % p.name.length];

    mesh.position.set(
      p.x ? p.x[i % p.x.length] : 0,
      p.y ? p.y[i % p.y.length] : 0,
      p.z ? p.z[i % p.z.length] : 0
    );

    mesh.rotation.set(
      p.rx ? p.rx[i % p.rx.length] * (Math.PI / 180) : 0,
      p.ry ? p.ry[i % p.ry.length] * (Math.PI / 180) : 0,
      p.rz ? p.rz[i % p.rz.length] * (Math.PI / 180) : 0
    );

    mesh.scale.set(
      p.s ? p.s[i % p.s.length] : p.sx ? p.sx[i % p.sx.length] : 1,
      p.s ? p.s[i % p.s.length] : p.sy ? p.sy[i % p.sy.length] : 1,
      p.s ? p.s[i % p.s.length] : p.sz ? p.sz[i % p.sz.length] : 1
    );

    mesh.visible = p.visible ? p.visible[i % p.visible.length] : true;

    if (p.function) { p.function[i % p.function.length]( mesh ) };

    if (p.group_function) { p.group_function[0]( mesh ) };

    if (p.cursor) { mesh.cursor = p.cursor[i % p.cursor.length] };

    if (p.cull) { if (!p.cull[i % p.cull.length]) {p.scene[i % p.scene.length].add(mesh)} }

    else { p.scene[i % p.scene.length].add(mesh) }

  };

};

function light(p = {}){

  switch (p.type) {
    case "point": this[p.name] = new THREE.PointLight(p.color, p.intensity, p.distance, p.decay); break;
    case 'ambient': this[p.name] = new THREE.AmbientLight(p.color, p.intensity); break;
  };

  this[p.name].position.set(
    p.x || 0,
    p.y || 0,
    p.z || 0
  )

  this[p.scene].add(this[p.name]);

};

function controls(p = {}) {

  switch (p.type) {

    case 'drag':
      this[p.name] = new THREE.DragControls(p.objects, p.camera, p.renderer.domElement);
      this[p.name].addEventListener("dragstart", function (event) { event.object.material.opacity = 0.5 });
      this[p.name].addEventListener("dragend", function (event) { event.object.material.opacity = 1 });
    break;

    case 'orbit':
      this[p.name] = new THREE.OrbitControls( p.camera, p.renderer.domElement );
    break;

  }

  this[p.name].enabled = p.enabled
};
