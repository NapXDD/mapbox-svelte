<!-- @svelte-runes -->
<script lang="ts">
	import { env } from '$env/dynamic/public';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	import { onMount } from 'svelte';
	import type { ContainerProps } from './type';
	import { setMapboxContext } from '../utilities';

	let {
		children,
		initialState = {
			center: [-71.224518, 42.213995],
			zoom: 9
		}
	}: ContainerProps = $props();
	let map = $state<mapboxgl.Map | null>(null);
	let mapContainer: HTMLElement;
	let childrenRender = $state(false);

	onMount(() => {
		mapboxgl.accessToken = env.PUBLIC_MAPBOX_KEY;
		map = new mapboxgl.Map({
			container: mapContainer,
			...initialState
		});
		setMapboxContext(map);
		childrenRender = true;
		return () => map?.remove();
	});

	export function getMap() {
		return map;
	}
</script>

<div class="map" bind:this={mapContainer}>
	{#if childrenRender}
		{@render children?.()}
	{/if}
</div>

<style>
	.map {
		width: 100%;
		height: 100%;
	}
</style>
