import React from 'react';
import moment from 'moment';

import bobcat from '../json/bobcat.json';
import lion from '../json/lion.json';
import tiger from '../json/tiger.json';
import wolf from '../json/wolf.json';
import bear from '../json/bear.json';
import webelos from '../json/webelos.json';

export const denArray = [
  bobcat,
  lion,
  tiger,
  wolf,
  bear,
  webelos,
];

export const standardDens = [
  { name: 'Lion', rank: 'Lion' },
  { name: 'Tiger', rank: 'Tiger' },
  { name: 'Wolf', rank: 'Wolf' },
  { name: 'Bear', rank: 'Bear' },
  { name: 'Webelos 1', rank: 'Webelos' },
  { name: 'Webelos 2', rank: 'Webelos' },
];

export const Ranks = [
  { name: 'Lion', rank: 'Lion' },
  { name: 'Bobcat', rank: 'Bobcat' },
  { name: 'Tiger', rank: 'Tiger' },
  { name: 'Wolf', rank: 'Wolf' },
  { name: 'Bear', rank: 'Bear' },
  { name: 'Webelos 1', rank: 'Webelos' },
  { name: 'Webelos 2', rank: 'Webelos' },
];


export const trueOrFalse = (item) => {
  if (item) {
    return <i className="fa fa-check-square-o" />;
  }
  return <i className="fa fa-square-o" />;
};

export const formatDate = (date) => {
  if (date) {
    const regex = /T.+/;
    const birth = date.replace(regex, '');
    return moment(birth);
  }
  return null;
};

export const getAge = date => (
  moment(date).fromNow(true)
);

export const displayBirthday = date => (
  moment(date).format('MMM D, YYYY')
);

export const alphabetize = list => (
  list.sort((a, b) => {
    const aValue = a.scoutLastName;
    const bValue = b.scoutLastName;

    if (aValue < bValue) {
      return -1;
    }
    if (aValue > bValue) {
      return 1;
    }
    return 0;
  })
);

const byDen = (list, customDens) => {
  const sortedList = alphabetize(list);

  const scoutDens = customDens.length === 0 ? standardDens : customDens;

  const denArraysObject = {};

  denArraysObject.paid = [];
  denArraysObject.unpaid = [];

  const createDenArrays = () => {
    scoutDens.forEach((den) => {
      denArraysObject[den.name] = [];
    });
    return denArraysObject;
  };

  createDenArrays();

  sortedList.forEach((scout) => {
    const den = scout.den;
    denArraysObject[den].push(scout);
  });

  sortedList.forEach((scout) => {
    if (scout.dues) {
      denArraysObject.paid.push(scout);
    } else {
      denArraysObject.unpaid.push(scout);
    }
  });

  return denArraysObject;
};

export const filterBy = (list, filter, customDens) => {
  if (filter === 'all') {
    return { scouts: alphabetize(list), title: 'All Scouts' };
  }

  const densObject = byDen(list, customDens);

  if (filter === 'byDen') {
    return { scouts: densObject, title: 'Scouts by Den' };
  }

  if (filter === 'paid') {
    return { scouts: densObject.paid, title: 'Dues Paid' };
  }

  if (filter === 'unpaid') {
    return { scouts: densObject.unpaid, title: 'Dues Unpaid' };
  }

  return { scouts: densObject[filter], title: `${filter} Den` };
};


export const getRankObj = (rank) => {
  switch (rank) {
    case 'Bobcat':
      return bobcat;
    case 'Lion':
      return lion;
    case 'Tiger':
      return tiger;
    case 'Wolf':
      return wolf;
    case 'Bear':
      return bear;
    case 'Webelos':
    case 'Webelos 1':
    case 'Webelos 2':
      return webelos;
    default:
      return null;
  }
};
