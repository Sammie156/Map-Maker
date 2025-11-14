import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";

function Editor3D() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = mountRef.current!;
        if (!container) {
            return;
        }

        // ThreeJS Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x111111);

        // ThreeJS Camera
        const camera = new THREE.PerspectiveCamera(
            60,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );

        camera.position.set(5, 5, 0);

        // ThreeJS Renderer
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Orbital controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Grid and Lighting
        const grid = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
        scene.add(grid);

        const ambient = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambient);

        const directional = new THREE.DirectionalLight(0xffffff, 1);
        directional.position.set(5, 10, 5);
        const directionalHelper = new THREE.DirectionalLightHelper(directional);
        scene.add(directionalHelper);

        // Render Loop
        let frameID: number;
        const animate = () => {
            frameID = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            camera.aspect = width/height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(frameID);
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
            container.removeChild(renderer.domElement);
        }
    }, []);

    return <div ref={mountRef} className="w-full h-full" />
}

export default Editor3D;