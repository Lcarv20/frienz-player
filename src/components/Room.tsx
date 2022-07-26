function Room(props: { handleClose: () => void; roomData: any }) {
	return (
		<div className="h-screen w-screen absolute left-0 top-0 bg-base-100">
			<button className="btn btn-primary" onClick={props.handleClose}>
				Back
			</button>
			<h1>Room: {props.roomData.name}</h1>
		</div>
	);
}

export default Room;
