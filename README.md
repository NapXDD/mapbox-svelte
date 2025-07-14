# mapbox-svelte

A Svelte component library for Mapbox GL JS, providing easy-to-use components for building interactive maps.

## Installation

```bash
npm install mapbox-svelte
```

## Usage

Add your mapbox key to env

```env
PUBLIC_MAPBOX_KEY=your_key
```

```svelte
<script>
	import * as Mapbox from 'mapbox-svelte';

	let mapComponent: Mapbox.Container
</script>

<div class="map-container">
	<Mapbox.Container bind:this={mapComponent}>
		<Mapbox.Polygon source="source" {coordinates}></Mapbox.Polygon>
		<Mapbox.Layer
			layerConfig={{
				id: 'hehe',
				source: 'source',
				type: 'fill',
				paint: { 'fill-color': '#0080ff', 'fill-opacity': 0.5 }
			}}
		></Mapbox.Layer>
	</Mapbox.Container>
</div>

<style>
	.map-container {
		width: 100%;
		height: 500px;
	}
</style>
```

## Components

- `Container` - Main map container
- `Group` - Group multiple map elements
- `Layer` - Mapbox layer wrapper
- `Mark` - Simple map marker
- `Point` - Point geometry
- `Polygon` - Polygon geometry
- `Popup` - Map popup
- `Tooltip` - Hover tooltip

## Requirements

- Svelte 5.0+
- Mapbox GL JS 3.13.0+

## License

MIT
