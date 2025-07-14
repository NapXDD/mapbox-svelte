<script lang="ts">
	import * as Mapbox from '$lib/mapbox-svelte/index';
	import { type Coordinates } from '$lib/mapbox-svelte/mapbox-component/Polygon/type';

	const geojsonData = [
		{
			id: 'polygon1',
			coordinates: [
				[-67.13734, 45.13745],
				[-66.96466, 44.8097],
				[-68.03252, 44.3252],
				[-69.06, 43.98],
				[-67.13734, 45.13745]
			],
			properties: {}
		},
		{
			id: 'polygon2',
			coordinates: [
				[-68.5, 44.5],
				[-67.5, 44.5],
				[-67.5, 45.5],
				[-68.5, 45.5],
				[-68.5, 44.5]
			],
			properties: {}
		}
	];

	let mapComponent: Mapbox.Container;
	let groupRefs: Mapbox.Group[] = [];

	$effect(() => {
		const map = mapComponent.getMap();
		console.log(map);
		groupRefs.forEach((groupRef, i) => {
			if (groupRef) {
				const group = groupRef.getGroup();
				console.log(`Group ${i}:`, group);
			}
		});
	});
</script>

<div class="map-container">
	<Mapbox.Container bind:this={mapComponent}>
		{#each geojsonData as data, index}
			<Mapbox.Group groupName={`group-${index}`} bind:this={groupRefs[index]}>
				<Mapbox.Layer
					layerConfig={{
						id: data.id,
						source: `source-${data.id}`,
						type: 'fill',
						paint: { 'fill-color': '#0080ff', 'fill-opacity': 0.5 }
					}}
				></Mapbox.Layer>
				<Mapbox.Polygon source={`source-${data.id}`} coordinates={data.coordinates as Coordinates}
				></Mapbox.Polygon>
			</Mapbox.Group>
		{/each}
	</Mapbox.Container>
</div>

<style>
	.map-container {
		width: 100%;
		height: 500px;
		border: 1px solid #ccc;
	}
</style>
