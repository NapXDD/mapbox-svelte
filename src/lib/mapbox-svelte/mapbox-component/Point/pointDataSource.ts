import type { SourceSpecification } from 'mapbox-gl';
import type { Coordinate, Coordinates } from '../Polygon/type';
import type {Feature, Point} from 'geojson'

export const pointInitialDataSource = (coordinates: Coordinates): SourceSpecification => {
	const pointData = coordinates.map((coordinate) => pointFeatureGenerate(coordinate));
	return {
		type: 'geojson',
		data: {
			type: 'FeatureCollection',
			features: pointData
		}
	};
};

export const pointFeatureGenerate = (
	coordinate: Coordinate,
	properties?: GeoJSON.GeoJsonProperties
): Feature<Point, GeoJSON.GeoJsonProperties> => {
	return {
		type: 'Feature',
		geometry: {
			type: 'Point',
			// These coordinates outline Maine.
			coordinates: coordinate
		},
		properties: properties ? properties : {}
	};
};
