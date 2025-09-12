import type { SourceSpecification } from 'mapbox-gl';
import type { Coordinates } from './type';
import type { GeoJsonProperties } from 'geojson';

export const polygonInitialDataSource = (
	coordinate: Coordinates,
	properties?: GeoJsonProperties
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
