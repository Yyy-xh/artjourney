import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../styles/components/VirtualTour.scss';

const VirtualTour = () => {
    const mountRef = useRef(null);
    const requestRef = useRef();

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        // 添加一个立方体作为示例
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            requestRef.current = requestAnimationFrame(animate);
        };

        animate();

        // 清理资源
        return () => {
            cancelAnimationFrame(requestRef.current);
            if (currentMount.contains(renderer.domElement)) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <section className="virtual-tour">
            <h2>虚拟导览</h2>
            <div className="tour-container" ref={mountRef}></div>
        </section>
    );
};

export default VirtualTour;
