import type { Snippet } from "svelte";

export interface Props {
	backgroundImage?: string;
	coordinates?: [number, number];
	tooltip?: string;
	children?: Snippet;
}
