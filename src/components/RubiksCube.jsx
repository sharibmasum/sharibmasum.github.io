/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: SDC PERFORMANCE™️ (https://sketchfab.com/3Duae)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-rubiks-cube-3d-9b2f1ae73cf842779b23833909f238ff
Title: ( FREE ) Rubik's cube 3D
*/

import React, { useRef, forwardRef, Suspense } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const RubiksCube = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/rubiks_cube.glb')
  const { actions } = useAnimations(animations, group)

  React.useEffect(() => {
    console.log('Animations object:', animations)
    console.log('Available actions:', actions)
    if (animations.length > 0) {
      console.log('First animation name:', animations[0].name)
    }
  }, [actions, animations])

  React.useImperativeHandle(ref, () => ({
    playAnimation: (name) => {
      console.log('All available actions:', Object.keys(actions))
      console.log('Attempting to play animation:', name)
      if (actions[name]) {
        console.log('Found animation, playing it')
        const action = actions[name]
        action.reset()
        action.setLoop(0, 1)
        action.clampWhenFinished = true
        action.timeScale = 2.5
        
        return new Promise((resolve) => {
          action.play()
          action.getMixer().addEventListener('finished', () => {
            console.log('Animation completed')
            resolve(true)
          })
        })
      } else {
        console.log('Animation not found:', name)
        return Promise.resolve(false)
      }
    }
  }))

  return (
    <Suspense fallback={null}>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, 0]}>
              <group name="root">
                <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                  <group
                    name="Cube_0"
                    position={[3.993, 4, 0.007]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_4"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_4.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_5"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_5.geometry}
                      material={materials['Material.001']}
                    />
                    <mesh
                      name="Object_6"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_6.geometry}
                      material={materials['Material.006']}
                    />
                    <mesh
                      name="Object_7"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_7.geometry}
                      material={materials['Material.008']}
                    />
                  </group>
                  <group
                    name="Cube001_1"
                    position={[4.001, 2, -3.999]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}>
                    <mesh
                      name="Object_9"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_9.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_10"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                      material={materials['Material.006']}
                    />
                    <mesh
                      name="Object_11"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_11.geometry}
                      material={materials['Material.008']}
                    />
                  </group>
                  <group
                    name="Cube002_2"
                    position={[4.008, 0, -0.008]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_13"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_13.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_14"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_14.geometry}
                      material={materials['Material.005']}
                    />
                    <mesh
                      name="Object_15"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_15.geometry}
                      material={materials['Material.006']}
                    />
                    <mesh
                      name="Object_16"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_16.geometry}
                      material={materials['Material.008']}
                    />
                  </group>
                  <group
                    name="Cube003_3"
                    position={[1.993, 4, 0.007]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_18"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_18.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_19"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_19.geometry}
                      material={materials['Material.001']}
                    />
                    <mesh
                      name="Object_20"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_20.geometry}
                      material={materials['Material.008']}
                    />
                  </group>
                  <group
                    name="Cube004_4"
                    position={[4.001, 2, -1.999]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}>
                    <mesh
                      name="Object_22"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_22.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_23"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_23.geometry}
                      material={materials['Material.008']}
                    />
                  </group>
                  <group
                    name="Cube005_5"
                    position={[2.008, 0, -0.008]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_25"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_25.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_26"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_26.geometry}
                      material={materials['Material.005']}
                    />
                    <mesh
                      name="Object_27"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_27.geometry}
                      material={materials['Material.008']}
                    />
                  </group>
                  <group
                    name="Cube006_6"
                    position={[-0.007, 3.979, -4.014]}
                    rotation={[3.131, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_29"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_29.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_30"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_30.geometry}
                      material={materials['Material.001']}
                    />
                    <mesh
                      name="Object_31"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_31.geometry}
                      material={materials['Material.004']}
                    />
                    <mesh
                      name="Object_32"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_32.geometry}
                      material={materials['Material.008']}
                    />
                  </group>
                  <group
                    name="Cube007_7"
                    position={[-0.001, -0.006, -2.014]}
                    rotation={[-Math.PI, 0.011, 0]}>
                    <mesh
                      name="Object_34"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_34.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_35"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_35.geometry}
                      material={materials['Material.004']}
                    />
                    <mesh
                      name="Object_36"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_36.geometry}
                      material={materials['Material.008']}
                    />
                  </group>
                  <group
                    name="Cube008_8"
                    position={[-0.007, 4.021, -0.014]}
                    rotation={[3.131, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_38"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_38.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_39"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_39.geometry}
                      material={materials['Material.004']}
                    />
                    <mesh
                      name="Object_40"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_40.geometry}
                      material={materials['Material.005']}
                    />
                    <mesh
                      name="Object_41"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_41.geometry}
                      material={materials['Material.008']}
                    />
                  </group>
                  <group
                    name="Cube009_9"
                    position={[-0.001, 3.994, -1.993]}
                    rotation={[-Math.PI, -1.571, 0]}>
                    <mesh
                      name="Object_43"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_43.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_44"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_44.geometry}
                      material={materials['Material.001']}
                    />
                    <mesh
                      name="Object_45"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_45.geometry}
                      material={materials['Material.006']}
                    />
                  </group>
                  <group name="Cube010_10" position={[1.999, 0.001, -2]} rotation={[0, -1.571, 0]}>
                    <mesh
                      name="Object_47"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_47.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_48"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_48.geometry}
                      material={materials['Material.006']}
                    />
                  </group>
                  <group
                    name="Cube011_11"
                    position={[3.999, 4.009, -2.008]}
                    rotation={[-Math.PI, -1.571, 0]}>
                    <mesh
                      name="Object_50"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_50.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_51"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_51.geometry}
                      material={materials['Material.005']}
                    />
                    <mesh
                      name="Object_52"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_52.geometry}
                      material={materials['Material.006']}
                    />
                  </group>
                  <group name="Cube012_12" position={[1.994, 1.994, -4]} rotation={[-Math.PI, 0, 0]}>
                    <mesh
                      name="Object_54"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_54.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_55"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_55.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group name="Cube013_13" position={[2, 2, -2]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                    <mesh
                      name="Object_57"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_57.geometry}
                      material={materials.Material}
                    />
                  </group>
                  <group
                    name="Cube014_14"
                    position={[2.001, 2.001, 0]}
                    rotation={[-Math.PI, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_59"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_59.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_60"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_60.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube015_15"
                    position={[0.001, 1.979, 0.001]}
                    rotation={[1.573, -1.56, 0.002]}>
                    <mesh
                      name="Object_62"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_62.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_63"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_63.geometry}
                      material={materials['Material.001']}
                    />
                    <mesh
                      name="Object_64"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_64.geometry}
                      material={materials['Material.004']}
                    />
                  </group>
                  <group name="Cube016_16" position={[1.999, 4.001, -2]} rotation={[0, 0.011, 0]}>
                    <mesh
                      name="Object_66"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_66.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_67"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_67.geometry}
                      material={materials['Material.004']}
                    />
                  </group>
                  <group
                    name="Cube017_17"
                    position={[4.001, 2.021, 0.001]}
                    rotation={[1.573, -1.56, 0.002]}>
                    <mesh
                      name="Object_69"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_69.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_70"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_70.geometry}
                      material={materials['Material.004']}
                    />
                    <mesh
                      name="Object_71"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_71.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube018_18"
                    position={[3.993, 4, -3.993]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_73"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_73.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_74"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_74.geometry}
                      material={materials['Material.001']}
                    />
                    <mesh
                      name="Object_75"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_75.geometry}
                      material={materials['Material.003']}
                    />
                    <mesh
                      name="Object_76"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_76.geometry}
                      material={materials['Material.006']}
                    />
                  </group>
                  <group
                    name="Cube019_19"
                    position={[0.001, 2, -3.999]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}>
                    <mesh
                      name="Object_78"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_78.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_79"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_79.geometry}
                      material={materials['Material.003']}
                    />
                    <mesh
                      name="Object_80"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_80.geometry}
                      material={materials['Material.006']}
                    />
                  </group>
                  <group
                    name="Cube020_20"
                    position={[4.008, 0, -4.008]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_82"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_82.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_83"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_83.geometry}
                      material={materials['Material.003']}
                    />
                    <mesh
                      name="Object_84"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_84.geometry}
                      material={materials['Material.005']}
                    />
                    <mesh
                      name="Object_85"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_85.geometry}
                      material={materials['Material.006']}
                    />
                  </group>
                  <group
                    name="Cube021_21"
                    position={[1.993, 4, -3.993]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_87"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_87.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_88"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_88.geometry}
                      material={materials['Material.001']}
                    />
                    <mesh
                      name="Object_89"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_89.geometry}
                      material={materials['Material.003']}
                    />
                  </group>
                  <group
                    name="Cube022_22"
                    position={[0.001, 2, -1.999]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}>
                    <mesh
                      name="Object_91"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_91.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_92"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_92.geometry}
                      material={materials['Material.003']}
                    />
                  </group>
                  <group
                    name="Cube023_23"
                    position={[2.008, 0, -4.008]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_94"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_94.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_95"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_95.geometry}
                      material={materials['Material.003']}
                    />
                    <mesh
                      name="Object_96"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_96.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube024_24"
                    position={[0.008, -0.021, -3.987]}
                    rotation={[3.131, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_98"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_98.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_99"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_99.geometry}
                      material={materials['Material.001']}
                    />
                    <mesh
                      name="Object_100"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_100.geometry}
                      material={materials['Material.003']}
                    />
                    <mesh
                      name="Object_101"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_101.geometry}
                      material={materials['Material.004']}
                    />
                  </group>
                  <group
                    name="Cube025_25"
                    position={[3.999, 0.009, -1.987]}
                    rotation={[-Math.PI, 0.011, 0]}>
                    <mesh
                      name="Object_103"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_103.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_104"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_104.geometry}
                      material={materials['Material.003']}
                    />
                    <mesh
                      name="Object_105"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_105.geometry}
                      material={materials['Material.004']}
                    />
                  </group>
                  <group
                    name="Cube026_26"
                    position={[0.008, 0.021, 0.013]}
                    rotation={[3.131, 0, Math.PI / 2]}>
                    <mesh
                      name="Object_107"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_107.geometry}
                      material={materials.Noire}
                    />
                    <mesh
                      name="Object_108"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_108.geometry}
                      material={materials['Material.003']}
                    />
                    <mesh
                      name="Object_109"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_109.geometry}
                      material={materials['Material.004']}
                    />
                    <mesh
                      name="Object_110"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_110.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </Suspense>
  )
})

useGLTF.preload('/models/rubiks_cube.glb')

export default RubiksCube;