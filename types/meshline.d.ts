// 保存为: types/meshline.d.ts (在项目根目录创建 types 文件夹)

declare module "meshline" {
  import * as THREE from "three";

  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[] | Float32Array): void;
  }

  export class MeshLineMaterial extends THREE.ShaderMaterial {
    constructor(parameters?: {
      color?: THREE.ColorRepresentation;
      lineWidth?: number;
      map?: THREE.Texture;
      useMap?: boolean;
      alphaMap?: THREE.Texture;
      useAlphaMap?: boolean;
      repeat?: THREE.Vector2 | [number, number];
      resolution?: THREE.Vector2 | [number, number];
      sizeAttenuation?: boolean;
      dashArray?: number;
      dashOffset?: number;
      dashRatio?: number;
      depthTest?: boolean;
      blending?: THREE.Blending;
      transparent?: boolean;
      opacity?: number;
    });
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: React.DetailedHTMLProps<any, any>;
      meshLineMaterial: React.DetailedHTMLProps<any, any>;
    }
  }
}

export {};
