const NativeUI = require('NativeUI');
const Scene = require('Scene');
const Textures = require('Textures');


const A3d = Scene.root.find('A3d');
const A3d2 = Scene.root.find('A3d2');
const B3d = Scene.root.find('B3d');
const C3d = Scene.root.find('C3d');
const D3d = Scene.root.find('D3d');
const E3d = Scene.root.find('E3d');
const U3d = Scene.root.find('U3d');
const P3d = Scene.root.find('P3d');


const texture0 = Textures.get('clear');
const texture1 = Textures.get('A');
const texture2 = Textures.get('B');
const texture3 = Textures.get('C');
const texture4 = Textures.get('D');
const texture5 = Textures.get('E');
const texture6 = Textures.get('U');
const texture7 = Textures.get('P');

const picker = NativeUI.picker;

const index = 0;
index2 = 0; //for character order
aUsed = 0;
factor =0.18;

const configuration = {

  selectedIndex: index,

  items: [
    {image_texture: texture0},
    {image_texture: texture1},
    {image_texture: texture2},
    {image_texture: texture3},
    {image_texture: texture4},
    {image_texture: texture5},
    {image_texture: texture6},
    {image_texture: texture7},

  ]

};

picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(index) {
   // plane.material.diffuse = configuration.items[index.newValue].image_texture;

   index2++;

   if (index.newValue == 0) {
      A3d.hidden = true;
      A3d2.hidden = true;
      B3d.hidden = true;
      C3d.hidden = true;
      D3d.hidden = true;
      E3d.hidden = true;
      U3d.hidden = true;
      P3d.hidden = true;
      index2 = 0;
   }

   if (index.newValue == 1) {
    if (aUsed == 0) {
   		A3d.hidden = false;

      A3d.transform.x = index2*factor-0.2;
      aUsed = 1;
    }
    else {
      A3d2.hidden = false;

      A3d2.transform.x = index2*factor-0.2;
    }

   }

   if (index.newValue == 2) {
   		B3d.hidden = false;
   		B3d.transform.x = index2*factor-0.2;
   }


   if (index.newValue == 3) {
      C3d.hidden = false;
      C3d.transform.x = index2*factor-0.2;
      
   }

     if (index.newValue == 4) {
      D3d.hidden = false;
      D3d.transform.x = index2*factor-0.2;
      
   }

     if (index.newValue == 5) {
      E3d.hidden = false;
      E3d.transform.x = index2*factor-0.2;
      
   }

     if (index.newValue == 6) {
      U3d.hidden = false;
      U3d.transform.x = index2*factor-0.2;
      
   }

     if (index.newValue == 7) {
      P3d.hidden = false;
      P3d.transform.x = index2*factor-0.2;
      
   }
   
}); 