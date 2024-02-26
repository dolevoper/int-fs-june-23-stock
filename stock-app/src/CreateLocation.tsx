import "./locations.scss"
export default function CreateLocation() {
	return (
		<main className="">
			<div className="title-container">
				<h1>create location</h1>
			</div>
			<div className="title-location-select-separator"></div>
			<form>
				<div className="location-select-container">
					<label htmlFor="location">Location</label>
					<select name="location" id="location" className="location-select">
						<option value="office">Office</option>
						<option value="kitchen">Kitchen</option>
						<option value="living-room">Living Room</option>
						<option value="Balcony">Balcony</option>
					</select>
				</div>
			</form>
		</main>
	)
}
