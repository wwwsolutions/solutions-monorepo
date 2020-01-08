import { CHILDREN, findNeedsForChild } from './db-data';

import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAGWR5I8D5UljddECURibZU3Va1D7i9KIM',
  authDomain: 'solutions-monorepo.firebaseapp.com',
  databaseURL: 'https://solutions-monorepo.firebaseio.com',
  projectId: 'solutions-monorepo',
  storageBucket: 'solutions-monorepo.appspot.com',
  messagingSenderId: '477677879658',
  appId: '1:477677879658:web:bf6ee2391a791c114da513',
  measurementId: 'G-N7VZ51WCLS'
};

console.log('Uploading data to the database with the following config:\n');

console.log(JSON.stringify(config));

console.log(
  '\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n'
);

firebase.initializeApp(config);

const db = firebase.firestore();

async function uploadData() {
  const batch = db.batch();

  const children = db.collection('children');

  Object.values(CHILDREN)
    .sort((c1: any, c2: any) => c1.seqNo - c2.seqNo)
    .forEach(async (child: any) => {
      const newChild = removeId(child);

      const childRef = await children.add(newChild);

      const needs = childRef.collection('needs');

      const childNeeds = findNeedsForChild(child.id);

      childNeeds.forEach(async need => {
        const newNeed = removeId(need);

        await needs.add(newNeed);
      });
    });

  return batch.commit();
}

function removeId(data: any) {
  const newData: any = { ...data };

  delete newData.id;

  return newData;
}

uploadData()
  .then(() => {
    console.log('Writing data, exiting in 10 seconds ...\n\n');

    setTimeout(() => {
      console.log('\n\n\nData Upload Completed.\n\n\n');
      process.exit(0);
    }, 10000);
  })
  .catch(err => {
    console.log('Data upload failed, reason:', err, '\n\n\n');
    process.exit(-1);
  });
