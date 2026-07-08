# Realtime 3D Scene Editor

<p class="project-meta"><strong>Stack:</strong> C++ · OpenGL · GLSL · ImGui Docking · Assimp</p>

## Overview

A lightweight 3D scene editing and rendering system that combines scene construction, parameter tuning, and a stable real-time viewport in one application.

## Motivation

The project began as a way to study graphics systems beyond isolated shader exercises. The goal was to connect rendering, asset management, interaction, and tooling into a small but coherent editor workflow.

## What I Built

- An editor-style multi-panel interface with ImGui Docking.
- A real-time viewport with camera navigation and object manipulation.
- Procedural voxel geometry and external OBJ model loading.
- Runtime controls for lights, materials, textures, and rendering parameters.
- Mouse interaction, voxel placement, and basic collision logic.

## System Architecture

The application separates the editor interface, scene state, resource layer, and rendering pipeline. Model and Mesh abstractions manage imported assets, while the renderer owns shader state, geometry buffers, textures, lights, and shadow resources.

## Core Features

- Scene construction and interactive transformation.
- Per-pixel lighting, texture sampling, and shadow sampling.
- Procedural cube, sphere, and cylinder geometry.
- Multi-mesh OBJ import through Assimp.
- An explorable voxel-based scene inside the editor viewport.

## Technical Implementation

The renderer uses OpenGL with GLSL shaders. Geometry is managed through VAO and VBO objects, imported assets are normalized behind Model and Mesh layers, and texture binding and render state are encapsulated to keep the drawing path predictable. ImGui Docking separates controls, viewport, and diagnostic panels without splitting the application state across unrelated windows.

## Demo

![Realtime 3D Scene Editor interface](../assets/images/representation-of-openglscene.png)

Additional video and interaction captures will be added as the tool evolves.

## Challenges

The main challenge was coordinating editor input with viewport input while keeping scene state and rendering state synchronized. Asset loading also required careful ownership of geometry, textures, and per-mesh material data.

## Reflection

This project turned individual graphics techniques into a system-level exercise. It established a foundation for future work on rendering tools, simulation interfaces, and small engine architectures.

## Links

- Repository: to be added
- Technical notes: [OpenGL](../notes/graphics/opengl.md) and [Rendering Pipeline](../notes/graphics/rendering-pipeline.md)

