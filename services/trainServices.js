export const getBestRoute = async (from, to) => {
  return [
      { from, via: 'XYZ Junction', to, trainName: 'Superfast Express' },
      { from, via: 'ABC Junction', to, trainName: 'Intercity Express' }
  ];
};

export const predictFare = async (currentFare) => {
  return currentFare * (1 + Math.random() * 0.2); // +/- 20% variation
};

export const checkDelays = async (trainNumber) => {
  return Math.floor(Math.random() * 30); // 0 to 30 min delay
};


export const getAlternativeTransport = async (from, to) => {
  return [
      { type: "Bus", provider: "RedBus", travelTime: "4 hrs", fare: 250 },
      { type: "Taxi", provider: "Ola", travelTime: "3.5 hrs", fare: 1200 },
      { type: "Metro", provider: "MetroRail", travelTime: "3 hrs", fare: 180 }
  ];
};

