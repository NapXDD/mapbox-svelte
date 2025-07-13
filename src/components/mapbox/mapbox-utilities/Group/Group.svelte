<script lang="ts">
	import { setContext } from 'svelte';
	import { getMapboxContext, setMapboxContext } from '../utilities';
	import type { GroupProps } from './type';
	import type { LayerSpecification } from 'mapbox-gl';

	let { children, groupName }: GroupProps = $props();

	const map: mapboxgl.Map = getMapboxContext();
	setMapboxContext(map);

	const layers: LayerSpecification[] = [];

	const getLayer = (info: string) => {};

	const pushLayer = (layerName: LayerSpecification) => {
		layers.push(layerName);
	};

	const group = setContext('group', { groupName, getLayer, pushLayer, layers });

	export function getGroup() {
		return group;
	}
</script>

{@render children?.()}
