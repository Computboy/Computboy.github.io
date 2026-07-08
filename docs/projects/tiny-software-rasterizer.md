# Tiny Software Rasterizer

<p class="project-meta"><strong>Stack:</strong> C++ · Rasterization · Shadow Mapping · SSAO</p>

## Overview

A pure C++ renderer implementing the graphics pipeline from triangle rasterization to shading, normal mapping, shadows, and screen-space effects.

## Motivation

The project studies what graphics APIs normally hide by rebuilding the essential stages of rasterization in software.

## What I Built

A compact rendering pipeline with programmable transformation, triangle setup, depth testing, texture sampling, and per-fragment shading.

## System Architecture

The code is organized around geometry input, vertex processing, rasterization, fragment shading, framebuffer operations, and post-processing stages.

## Core Features

- Triangle rasterization and barycentric interpolation.
- Depth buffering and perspective-correct attribute interpolation.
- Texture and normal mapping.
- Shadow mapping.
- Screen-space ambient occlusion.

## Technical Implementation

Implementation notes, equations, and performance measurements will be documented as each stage is stabilized.

## Demo

Rendered outputs and stage-by-stage comparisons will be added here.

## Challenges

Current areas of focus include numerical robustness, clipping, coordinate-space consistency, and balancing readable code with efficient inner loops.

## Reflection

Rebuilding the pipeline makes rendering behavior easier to reason about and provides a stronger basis for debugging GPU-based graphics work.

## Links

- Repository: to be added
- Related notes: [Rendering Pipeline](../notes/graphics/rendering-pipeline.md)

