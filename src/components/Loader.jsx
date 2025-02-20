import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>

    <div className="flex justify-center items-centre">
        <div className="w-20 h-20 border border-opacity-20 border-blue-500 border-t-500 rounded-full animate-spin"/>
    </div>
    </Html>
  )
}

export default Loader