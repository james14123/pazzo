var texture_from_file = new BABYLON.Texture("dress.jpg", scene);
        
var pbr = new BABYLON.PBRSpecularGlossinessMaterial("pbr", scene);

for (var i = 0; i < scene.meshes.length; i++){
            scene.meshes[i].material.diffuseTexture = texture_from_file;

            }