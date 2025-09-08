<script lang="ts">
	import type { PolygonProps } from './type';
	import { polygonInitialDataSource } from './polygonDataSource';
	import { getMapboxContext, setMapboxContext } from '../utilities';
	import { getContext } from 'svelte';
	import type { GroupContext } from '../Group/type';

	let { children, coordinates, source, properties }: PolygonProps = $props();

	const group: GroupContext = getContext('group');

	if (group) {
		group.pushSource(source);
	}

	const map: mapboxgl.Map = getMapboxContext();
	setMapboxContext(map);

	if (!coordinates) throw 'Coordinates not found';
	const dataSource = polygonInitialDataSource(coordinates, properties);
	map.addSource(source, dataSource);
</script>

{@render children?.()}
