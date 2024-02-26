import { useLoaderData } from 'react-router';
import styles from './LocationsPage.module.scss';

type Location = {
  name: string;
};

type Locations = Location[];

export function LocationsPage() {
  const { locationsListData } = useLocationsListData();

  return (
    <ul className={styles.locationsList}>
      {locationsListData &&
        locationsListData.map(location => <LocationCard location={location} />)}
    </ul>
  );
}

type LocationCardProps = {
  location: Location;
};

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className={styles.locationCard}>
      <h3 className={styles.locationsCardTitle}>{location.name}</h3>
    </div>
  );
}

function useLocationsListData() {
  const locationsListData = useLoaderData() as Locations;

  return {
    locationsListData,
  };
}
