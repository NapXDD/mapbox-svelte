import type { SourceSpecification } from 'mapbox-gl';
import type { Coordinates } from './type';
import type { GeoEntityDataGeoJsonProperties } from '$lib/aoh/gis/types';

export const polygonInitialDataSource = (
	coordinate: Coordinates,
	properties?: GeoEntityDataGeoJsonProperties
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
