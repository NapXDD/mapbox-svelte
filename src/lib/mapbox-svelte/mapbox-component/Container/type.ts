import type { MapOptions } from 'mapbox-gl';
import type { Snippet } from 'svelte';

export interface ContainerProps {
	children?: Snippet;
	initialState?: Omit<MapOptions, 'container'>;
}
