import { useEffect, useState } from 'react'
import { MENU_URL } from './constants';


const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);

    const data = await response.json();
    // console.log(data);
    setMenu(data);
  };

  return menu;
};

export default useRestaurantMenu;
