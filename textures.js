let materials = {
    walls:{
        1: 'textures/wall1.png'
    },
    floor:{
        1: 'textures/ground1.png'
    },
    ceiling:{
        1: 'textures/ceiling1.png'
    }
};



let loader = new THREE.TextureLoader();

let texture1 = loader.load( materials.walls[1], ( texture )=>{

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 40, 2 );

} );

let wall1material = new THREE.MeshLambertMaterial( { map: texture1,  side: THREE.DoubleSide } );




let texture3 = loader.load( materials.walls[1], ( texture )=>{
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 0.5, 2 );

} );
let wall3material = new THREE.MeshLambertMaterial( { map: texture3} );


let texture4 = loader.load( materials.walls[1], ( texture )=>{

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 10, 2 );

} );


let wall4material = new THREE.MeshLambertMaterial( { map: texture4} );


let texture5 = loader.load( materials.walls[1], ( texture )=>{

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 20, 2 );

} );


let wall5material = new THREE.MeshLambertMaterial( { map: texture5} );

let texture6 = loader.load( materials.walls[1], ( texture )=>{

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 5, 2 );

} );


let wall6material = new THREE.MeshLambertMaterial( { map: texture6} );

let texture7 = loader.load( materials.ceiling[1], ( texture )=>{

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 40, 40 );

} );


let ceiling1material = new THREE.MeshLambertMaterial( { map: texture7} );

let texture2 = loader.load( materials.floor[1], ( texture )=>{

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 40, 40 );


} );
let ground1material = new THREE.MeshLambertMaterial( { map: texture2  } );




var wall10materials = [
       wall3material,
       wall3material,
       wall3material,
       wall3material,
       wall4material,
       wall4material
    ];

var wall20materials = [
       wall3material,
       wall3material,
       wall3material,
       wall3material,
       wall5material,
       wall5material
    ];

var wall5materials = [
       wall3material,
       wall3material,
       wall3material,
       wall3material,
       wall6material,
       wall6material
    ];
/*let escenario={
    walls: {

    }
};*/