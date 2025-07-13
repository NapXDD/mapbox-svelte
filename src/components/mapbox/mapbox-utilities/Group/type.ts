import type { LayerSpecification } from "mapbox-gl";
import type { Snippet } from "svelte";

export interface GroupProps {
	children?: Snippet;
	groupName: string;
}

export interface GroupContext {
	groupName: string;
	getLayer: (layer: string) => {};
	pushLayer: (layer: LayerSpecification) => {};
}
