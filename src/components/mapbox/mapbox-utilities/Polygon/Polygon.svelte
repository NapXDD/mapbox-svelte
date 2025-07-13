<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { PolygonProps } from './type';
	import { polygonInitialDataSource } from './polygonDataSource';
	import type { LayerSpecification } from 'mapbox-gl';
	import { getMapboxContext, setMapboxContext } from '../utilities';

	let { children, coordinates, source }: PolygonProps = $props();

	const map: mapboxgl.Map = getMapboxContext();
	setMapboxContext(map);
	map.on('load', () => {
		if (!coordinates) throw 'Coordinates not found';
		const dataSource = polygonInitialDataSource(coordinates);
		map.addSource(source, dataSource);
	});
</script>

{@render children?.()}
