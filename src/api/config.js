const { REACT_APP_KEY, REACT_APP_URL} = process.env;

export const searchByCity = (name) => `${REACT_APP_URL}&q=${name}&${REACT_APP_KEY}`;
export const searchByLocation = ({ latitude: lat, longitude: lon }) => `${REACT_APP_URL}&lat=${lat}&lon=${lon}&${REACT_APP_KEY}`;
