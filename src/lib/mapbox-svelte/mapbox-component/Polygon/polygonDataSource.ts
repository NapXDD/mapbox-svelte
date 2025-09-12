import type { SourceSpecification } from 'mapbox-gl';
import type { Coordinates } from './type';
import type { Feature, GeoJsonProperties, Polygon } from 'geojson';

export const polygonInitialDataSource = (
	coordinate: Coordinates,
	properties?: Record<string, string>
): SourceSpecification => {
	return {
		type: 'geojson',
		data: {
			type: 'Feature',
			geometry: {
				type: 'Polygon',
				// These coordinates outline Maine.
				coordinates: [coordinate]
			},
			properties: properties ? properties : {}
		}
	};
};

export function polygonFeatureGenerate(
	coordinate: Coordinates,
	properties?: GeoJsonProperties,
): Feature<Polygon, GeoJsonProperties> {
	return {
		type: 'Feature',
		geometry: {
			type: 'Polygon',
			// These coordinates outline Maine.
			coordinates: [coordinate],
		},
		properties: properties ? properties : {},
	};
}