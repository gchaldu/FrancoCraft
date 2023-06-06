/* eslint-disable react/no-unknown-property */
import { usePlane } from "@react-three/cannon"

export const Ground = () => {
    const [ref] = usePlane(()=>
    (
        {
            position: [0, 0, 0],
            rotation: [0,0,0] 
        }
    ))
  return (
    <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[100,100]} />
        <meshStandardMaterial attach="material" color="green" />
    </mesh>
  )
}
