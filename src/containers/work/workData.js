import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const fetchCardsData = async () => {
  try {
    const cardsCollection = collection(db, 'projects');
    const cardsSnapshot = await getDocs(cardsCollection);
    const cardsData = cardsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return cardsData;
  } catch (error) {
    console.error("Error fetching cards data:", error);
    return [];
  }
};

export default fetchCardsData;
