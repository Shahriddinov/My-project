import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import qs from "query-string";
import { get } from "lodash";

import EntityActions from "modules/entity/actions";
import { Grid, Header, Board } from "components";
import { useNotification } from "hooks";

// import MapFormCreate from "./form/create";
// import MapFormUpdate from "./form/update";
import MapForm from "./form";
import MapView from "./map";
import { regions } from "./helpers";

const MapPage = ({ location, history, match }) => {
	const dispatch = useDispatch();
	//eslint-disable-next-line
	const params = qs.parse(location.search);

	const { id } = match.params;

	const { notification } = useNotification();
	const [mapLocations, setMapLocations] = useState(null);
	const [mapDetails, setMapDetails] = useState(null);
	const [repairLocations, setRepairLocations] = useState();
	const [selectedRoad, setSelectedRoad] = useState(null);
	const [activeRegion, setActiveRegion] = useState({});
	//eslint-disable-next-line
	const [downloadProgress, setDownloadProgress] = useState();

	const loadMapDetails = () => {
		dispatch(
			EntityActions.LoadDefault.request({
				url: `/properties/${id}`,
				params: {
					include: "contractor,scheduler,location",
					extra: {
						append: "gallery0"
					}
				},
				cb: {
					success: data => {
						setMapDetails(data);
						const active_region = regions.find(region => region.id === get(data, "location.region_id"));
						setActiveRegion(active_region);
						setRepairLocations(get(data, "location"));
						loadMapLocations(get(data, "location.region_id"));
					},
					error: error => {
						notification(get(error, "message", "Something went wrong"), { type: "danger" });
					},
					finally: () => {}
				}
			})
		);
	};

	const loadMapLocations = id => {
		dispatch(
			EntityActions.LoadDefault.request({
				url: "/locations",
				params: {
					extra: {
						region_id: id
					}
				},
				cb: {
					success: data => {
						setMapLocations(data);
					},
					error: error => {
						notification(get(error, "message", "Something went wrong"), { type: "danger" });
					},
					finally: () => {}
				}
			})
		);
	};

	useEffect(() => {
		if (id) {
			loadMapDetails(id);
		}
	}, [id]);

	useEffect(() => {
		if (activeRegion.id) {
			loadMapLocations(get(activeRegion, "id"));
		}
	}, [activeRegion.id]);

	return (
		<div className="pageContainer">
			<Header title={`Билет${id ? "-" + id : ""}`} backBtn={true} hasButton={false} hasSearch={false} />
			<Board className="mt-5">
				<Grid.Row>
					<Grid.Column xs={12} xl={4} xxl={3}>
						<MapForm
							data={mapDetails}
							{...{
								mapLocations,
								repairLocations,
								setRepairLocations,
								selectedRoad
							}}
						/>
					</Grid.Column>
					<Grid.Column xs={12} xl={8} xxl={9}>
						<MapView {...{ mapLocations, selectedRoad, setSelectedRoad, repairLocations, mapDetails, setActiveRegion, activeRegion }} />
					</Grid.Column>
				</Grid.Row>
			</Board>
		</div>
	);
};

export default withRouter(MapPage);
