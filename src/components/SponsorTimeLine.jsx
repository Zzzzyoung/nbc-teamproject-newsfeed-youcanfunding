import { db } from '../firebase';
import { ref } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { collection, getDocs } from 'firebase/firestore';

const SponsorTimeLine = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchReceiptPrices = async () => {
      try {
        const sponsorUserRef = db.collection('sponsorUser', 'receiptPrice');
        const snapshot = await sponsorUserRef.get();

        let total = 0;
        snapshot.forEach((doc) => {
          const receiptPrice = doc.data().receiptPrice;
          total += receiptPrice;
        });

        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching receipt prices: ', error);
      }
    };

    fetchReceiptPrices();
  }, []);

  return (
    <div>
      <h2>Total Price: {totalPrice}</h2>
    </div>
  );
};

export default SponsorTimeLine;
