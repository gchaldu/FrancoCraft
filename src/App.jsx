/* eslint-disable react/no-unknown-property */
import {Canvas} from '@react-three/fiber'
import {Sky} from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import {FPV} from './components/FPV'

function App() {

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100,50,100]}></Sky>
        <ambientLight intensity={0.5}></ambientLight>
        <FPV/>
        <Physics>
          <Ground></Ground>
        </Physics>
      </Canvas>
    </>
  )
}

export default App
