import styles from "./LocationsList.module.scss";

type Location = {
	name: string;
};

type Locations = Location[];

interface LocationsListProps {
	locations: Locations;
}

export function LocationsList({ locations }: LocationsListProps) {
	return (
		<ul className={styles.locationsList}>
			<li className={styles.locationsItem}>
				<LocationCard />
			</li>
			<li className={styles.locationsItem}>
				<LocationCard />
			</li>
			<li className={styles.locationsItem}>
				<LocationCard />
			</li>
			<li className={styles.locationsItem}>
				<LocationCard />
			</li>
			<li className={styles.locationsItem}>
				<LocationCard />
			</li>
			<li className={styles.locationsItem}>
				<LocationCard />
			</li>
			<li className={styles.locationsItem}>
				<LocationCard />
			</li>
			<li className={styles.locationsItem}>
				<LocationCard />
			</li>
			<li className={styles.locationsItem}>
				<LocationCard />
			</li>
		</ul>
	);
}

export function LocationCard() {
	return (
		<div className={styles.locationCard}>
			<h3 className={styles.locationsCardTitle}>Location Name</h3>
		</div>
	);
}
