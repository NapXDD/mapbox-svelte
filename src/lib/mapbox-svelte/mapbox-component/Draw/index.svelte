<script lang="ts">
	import MapboxDraw from '@mapbox/mapbox-gl-draw';
	import { getMapboxContext } from '../utilities';
	import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

	let {
		drawConfig = {
			displayControlsDefault: false,
			// Select which mapbox-gl-draw control buttons to add to the map.
			controls: {
				polygon: true,
				trash: true
			}
			// Set mapbox-gl-draw to draw by default.
			// The user does not have to click the polygon control button first.
		}
	}: { drawConfig?: MapboxDraw.MapboxDrawOptions } = $props();

	const map: mapboxgl.Map = getMapboxContext();
	const draw = new MapboxDraw(drawConfig);

	map.on('load', () => {
		map.addControl(draw);
	});

	export function getDrawer() {
		return draw;
	}
</script>
