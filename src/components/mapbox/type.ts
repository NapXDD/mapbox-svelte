import type { Snippet } from "svelte";

export interface MapboxContainerProps {
	children?: Snippet;
	initialState?: {
		longitude: number;
		latitude: number;
		zoom: number;
	};
}
