import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera, Ring} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constan/index.js";
import Charmander from "../components/Charmander.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Controller from "../components/Controller.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className={"min-h-screen w-full flex flex-col relative"}>
            <div className={"w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3"}>
                <p className={"sm:text-3xl text-xl font-medium text-white text-center font-generalsans"}>Hi, I'm
                    Jason <span className={"waving-hand"}>👋</span></p>
                <p className={"hero_tag text-gray_gradient"}>Building Products & Brands</p>
            </div>

            <div className={"w-full h-full absolute inset-0"}>
                {/*<Leva/>*/}
                <Canvas className={"w-full h-full"}>
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                // scale={0.07}
                                // position={[0, 0, 0]}
                                // rotation={[0, 280, 0]}
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                            />
                        </HeroCamera>

                        <group>
                            <Charmander position={sizes.charmanderPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Controller
                                position={sizes.controllerPosition}
                                scale={sizes.controllerScale}
                            />
                        </group>

                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>

            <div className={"absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center"}>
                <a href="#contact" className={"w-full max-w-[950px] px-5 sm:px-10"}>
                    <Button
                        name={"Let's work together"}
                        isBeam
                        containerClass="w-full"
                    />
                </a>
            </div>
        </section>
    )
}
export default Hero
