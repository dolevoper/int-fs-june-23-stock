import styles from './LocationsPage.module.scss';

type Location = {
  name: string;
};

type Locations = Location[];

type LocationsPageProps = {
  locations: Locations;
};

export function LocationsPage({ locations }: LocationsPageProps) {
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
