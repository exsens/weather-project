import { useDispatch, useSelector } from 'react-redux';
import { selectCities, removeCity } from './cities-slice';

export const useCities = () => {
  const dispatch = useDispatch();
  const citiesList = useSelector(selectCities.selectAll);
  const { status } = useSelector(state => state.cities);
  const onDeleted = (id) => { 
    dispatch(removeCity(id))
  }

  return [citiesList, status, onDeleted];
}
