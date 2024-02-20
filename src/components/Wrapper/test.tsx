import React, { memo, useEffect } from 'react'
import { WrapperStyle } from './style'
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  sRGBEncoding,
  ACESFilmicToneMapping,
  DirectionalLight,
  EquirectangularReflectionMapping,
  CircleGeometry,
  Vector2,
  PointLight,
  Group,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { Water } from 'three/examples/jsm/objects/Water2'
// import gsap from 'gsap'

const Wrapper = () => {
  useEffect(() => {
    // const container = document.getElementById('my_three') as HTMLElement
    // // 初始化场景
    // const scene = new Scene()
    // // 初始化相机
    // const camera = new PerspectiveCamera(
    //   75,
    //   container.clientWidth / container.clientHeight,
    //   0.1,
    //   1000
    // )
    // camera.position.set(-3.23, 2.98, 4.06)
    // camera.updateProjectionMatrix()
    // // 初始化渲染器
    // const renderer = new WebGLRenderer({
    //   // 设置抗锯齿
    //   antialias: true
    // })
    // renderer.setSize(container.clientWidth, container.clientHeight)
    // container.appendChild(renderer.domElement)
    // // 设置色调映射
    // renderer.outputEncoding = sRGBEncoding
    // renderer.toneMapping = ACESFilmicToneMapping
    // renderer.toneMappingExposure = 0.5
    // renderer.shadowMap.enabled = true
    // renderer.physicallyCorrectLights = true
    // const controls = new OrbitControls(camera, container)
    // controls.target.set(-8, 2, 0)
    // controls.enableDamping = true
    // // 初始化loader
    // const dracoLoader = new DRACOLoader()
    // dracoLoader.setDecoderPath('/draco/')
    // const gltfLoader = new GLTFLoader()
    // gltfLoader.setDRACOLoader(dracoLoader)
    // // 加载环境纹理
    // const rgbeLoader = new RGBELoader()
    // rgbeLoader.load('/textures/sky.hdr', (texture) => {
    //   texture.mapping = EquirectangularReflectionMapping
    //   scene.background = texture
    //   scene.environment = texture
    // })
    // // 创建水面
    // const waterGeometry = new CircleGeometry(300, 32)
    // const water = new Water(waterGeometry, {
    //   textureWidth: 1024,
    //   textureHeight: 1024,
    //   color: 0xeeeeff,
    //   flowDirection: new Vector2(1, 1),
    //   scale: 100
    // })
    // water.rotation.x = -Math.PI / 2
    // water.position.y = -0.4
    // scene.add(water)
    // // 加载模型
    // gltfLoader.load('/model/scene.glb', (gltf) => {
    //   const model = gltf.scene
    //   model.traverse((child) => {
    //     if (child.name === 'Plane') {
    //       child.visible = false
    //     }
    //     // @ts-ignore
    //     if (child.isMesh) {
    //       child.castShadow = true
    //       child.receiveShadow = true
    //     }
    //   })
    //   scene.add(model)
    // })
    // // 添加平行光
    // const light = new DirectionalLight(0xffffff, 1)
    // light.position.set(0, 50, 0)
    // scene.add(light)
    // // 添加点光源
    // const pointLight = new PointLight(0xffffff, 50)
    // pointLight.position.set(0.1, 2.4, 0)
    // pointLight.castShadow = true
    // scene.add(pointLight)
    // // 创建点光源组
    // const pointLightGroup = new Group()
    // pointLightGroup.position.set(-8, 2.5, -1.5)
    // const radius = 3
    // const pointLightArr = []
    // for (let i = 0; i < 3; i++) {
    //   // 创建球体当灯泡
    //   const sphereGeometry = new SphereGeometry(0.2, 32, 32)
    //   const sphereMaterial = new MeshStandardMaterial({
    //     color: 0xffffff,
    //     emissive: 0xffffff,
    //     emissiveIntensity: 10
    //   })
    //   const sphere = new Mesh(sphereGeometry, sphereMaterial)
    //   pointLightArr.push(sphere)
    //   sphere.position.set(
    //     radius * Math.cos((i * 2 * Math.PI) / 3),
    //     Math.cos((i * 2 * Math.PI) / 3),
    //     radius * Math.sin((i * 2 * Math.PI) / 3)
    //   )
    //   const pointLight = new PointLight(0xffffff, 50)
    //   sphere.add(pointLight)
    //   pointLightGroup.add(sphere)
    // }
    // scene.add(pointLightGroup)
    // function render() {
    //   requestAnimationFrame(render)
    //   renderer.render(scene, camera)
    //   controls.update()
    // }
    // render()
  }, [])

  // return <WrapperStyle id="my_three"></WrapperStyle>
  return <></>
}

export default memo(Wrapper)
