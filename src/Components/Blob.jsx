import React from 'react'
import {Sphere, MeshDistortMaterial} from '@react-three/drei'
import {MeshNormalMaterial} from 'react-three-fiber'

function Blob(props) {
  return (
    <Sphere visible args={[1, 100, 200]} scale={props.zoom}>
        <MeshDistortMaterial color="#8352FD" attach="material" distort={0.4} roughness={0}/>
    </Sphere>
  )
}

export default Blob