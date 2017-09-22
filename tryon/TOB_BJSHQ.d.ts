declare module TOB_BJSHQ{

    export function initScene(scene : BABYLON.Scene, resourcesRootDir : string = "./", positionOffset? : BABYLON.Vector3, sceneTransitionName? : string, overriddenMillis? : number, overriddenSound? : BABYLON.Sound, options? : {}) : void;
    class MeshFactory implements TOWER_OF_BABEL.FactoryModule {
        constructor(_scene : BABYLON.Scene, materialsRootDir: string);
        getModuleName() : string;
        instance(meshName : string, cloneSkeleton? : boolean) : BABYLON.Mesh;
    }
    export function getStats() : [number];

    export function matReadAhead(materialsRootDir) : void;
    export function defineMaterials(scene : BABYLON.Scene, materialsRootDir : string = "./") : void;

    class eyelash extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : eyelash);
    }

    class eyes_inner extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : eyes_inner);
    }

    class light extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : light);
    }

    class hair_inner extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : hair_inner);
    }

    class cloth extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : cloth);
    }

    class fur extends BABYLON.Mesh {
        public fur1 : BABYLON.Mesh;
        public fur2 : BABYLON.Mesh;
        public fur3 : BABYLON.Mesh;
        public fur4 : BABYLON.Mesh;
        public fur5 : BABYLON.Mesh;
        public fur6 : BABYLON.Mesh;
        public fur7 : BABYLON.Mesh;
        public fur8 : BABYLON.Mesh;
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : fur);
    }

    class eyes_outer extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : eyes_outer);
    }

    class hair_outer extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : hair_outer);
    }

    class tear extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : tear);
    }

    class ring extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : ring);
    }

    class body extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : body);
    }

    class ground extends BABYLON.Mesh {
        constructor(name: string, scene: BABYLON.Scene, materialsRootDir: string = "./", source? : ground);
    }

    export function defineCameras(scene : BABYLON.Scene, positionOffset? : BABYLON.Vector3) : void;

    export function defineLights(scene : BABYLON.Scene, positionOffset? : BABYLON.Vector3) : void;

    export function freshenShadowRenderLists(scene : BABYLON.Scene) : void;
}
