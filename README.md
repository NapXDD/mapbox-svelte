# mapbox-svelte

A Svelte component library for Mapbox GL JS, providing easy-to-use components for building interactive maps.

## Installation

```bash
npm i @napxdd/mapbox-svelte
```

## Usage

Add your mapbox key to env

```env
PUBLIC_MAPBOX_KEY=your_key
```

```svelte
<script>
	import * as Mapbox from 'mapbox-svelte';

	let mapComponent: Mapbox.Container;
</script>

<div class="map-container">
	<Mapbox.Container></Mapbox.Container>
</div>

<style>
	.map-container {
		width: 100%;
		height: 500px;
	}
</style>
```

For more information visit [Mapbox-svelte documentation](https://napxdd-mapbox-svelte-docs.vercel.app/)

## Requirements

- Svelte 5.0+
- Mapbox GL JS 3.13.0+

## License

MIT
