declare module TOB_mdcloth1{

    export function initScene(scene : BABYLON.Scene, resourcesRootDir : string = "./", positionOffset? : BABYLON.Vector3, sceneTransitionName? : string, overriddenMillis? : number, overriddenSound? : BABYLON.Sound, options? : {}) : void;
    class MeshFactory implements TOWER_OF_BABEL.FactoryModule {
        constructor(_scene : BABYLON.Scene, materialsRootDir: string);
        getModuleName() : string;
        instance(meshName : string, cloneSkeleton? : boolean) : BABYLON.Mesh;
    }
    export function getStats() : [number];

    export function matReadAhead(materialsRootDir) : void;
    export function defineMaterials(scene : BABYLON.Scene, materialsRootDir : string = "./") : void;

    class height100weight100 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height100weight100);
    }

    class height100weight75 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height100weight75);
    }

    class height100weight50 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height100weight50);
    }

    class height100weight25 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height100weight25);
    }

    class height100weight0 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height100weight0);
    }

    class height75weight100 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height75weight100);
    }

    class height75weight75 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height75weight75);
    }

    class height75weight50 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height75weight50);
    }

    class height75weight25 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height75weight25);
    }

    class height75weight0 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height75weight0);
    }

    class height50weight100 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height50weight100);
    }

    class height50weight75 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height50weight75);
    }

    class height50weight50 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height50weight50);
    }

    class height50weight25 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height50weight25);
    }

    class height50weight0 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height50weight0);
    }

    class height25weight100 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height25weight100);
    }

    class height25weight75 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height25weight75);
    }

    class height25weight50 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height25weight50);
    }

    class height25weight25 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height25weight25);
    }

    class height25weight0 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height25weight0);
    }

    class height0weight100 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height0weight100);
    }

    class height0weight75 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height0weight75);
    }

    class height0weight50 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height0weight50);
    }

    class height0weight25 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height0weight25);
    }

    class height0weight0 extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : height0weight0);
    }

    export function defineCameras(scene : BABYLON.Scene, positionOffset? : BABYLON.Vector3) : void;

    export function defineLights(scene : BABYLON.Scene, positionOffset? : BABYLON.Vector3) : void;

    export function freshenShadowRenderLists(scene : BABYLON.Scene) : void;
}
