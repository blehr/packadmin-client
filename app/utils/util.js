import React from 'react';
import moment from 'moment';

import bobcat from '../json/bobcat.json';
import lion from '../json/lion.json';
import tiger from '../json/tiger.json';
import wolf from '../json/wolf.json';
import bear from '../json/bear.json';
import webelos from '../json/webelos.json';

export const denArray = [
  'bobcat',
  'lion',
  'tiger',
  'wolf',
  'bear',
  'webelos',
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

const byDen = (list) => {
  const sortedList = alphabetize(list);

  const scoutDens = {
    lion: [],
    tiger: [],
    wolf: [],
    bear: [],
    web1: [],
    web2: [],
    paid: [],
    unpaid: [],
  };

  sortedList.map((scout) => {
    if (scout.den === 'Lion') {
      scoutDens.lion.push(scout);
    }
    if (scout.den === 'Tiger') {
      scoutDens.tiger.push(scout);
    }
    if (scout.den === 'Wolf') {
      scoutDens.wolf.push(scout);
    }
    if (scout.den === 'Bear') {
      scoutDens.bear.push(scout);
    }
    if (scout.den === 'Webelos 1') {
      scoutDens.web1.push(scout);
    }
    if (scout.den === 'Webelos 2') {
      scoutDens.web2.push(scout);
    }
    if (scout.dues === true) {
      scoutDens.paid.push(scout);
    }
    if (scout.dues === false) {
      scoutDens.unpaid.push(scout);
    }
    return null;
  });

  return scoutDens;
};

export const filterBy = (list, filter) => {
  let sortedScouts = '';

  if (filter === 'all') {
    return { scouts: alphabetize(list), title: 'All Scouts' };
  }
  if (filter === 'byDen') {
    return { scouts: byDen(list), title: 'Scouts by Den' };
  }
  if (filter === 'Lion') {
    sortedScouts = byDen(list);
    return { scouts: sortedScouts.lion, title: 'Lion Den' };
  }
  if (filter === 'Tiger') {
    sortedScouts = byDen(list);
    return { scouts: sortedScouts.tiger, title: 'Tiger Den' };
  }
  if (filter === 'Wolf') {
    sortedScouts = byDen(list);
    return { scouts: sortedScouts.wolf, title: 'Wolf Den' };
  }
  if (filter === 'Bear') {
    sortedScouts = byDen(list);
    return { scouts: sortedScouts.bear, title: 'Bear Den' };
  }
  if (filter === 'Webelos 1') {
    sortedScouts = byDen(list);
    return { scouts: sortedScouts.web1, title: 'Webelos 1' };
  }
  if (filter === 'Webelos 2') {
    sortedScouts = byDen(list);
    return { scouts: sortedScouts.web2, title: 'Webelos 2' };
  }
  if (filter === 'paid') {
    sortedScouts = byDen(list);
    return { scouts: sortedScouts.paid, title: 'Dues Paid' };
  }
  if (filter === 'unpaid') {
    sortedScouts = byDen(list);
    return { scouts: sortedScouts.unpaid, title: 'Dues Unpaid' };
  }
  return null;
};

export const getDen = (x) => {
  switch (x) {
    case 'Bobcat':
      return {
        denObj: bobcat,
        denString: 'bobcat',
      };
    case 'Lion':
      return {
        denObj: lion,
        denString: 'lion',
      };
    case 'Tiger':
      return {
        denObj: tiger,
        denString: 'tiger',
      };
    case 'Wolf':
      return {
        denObj: wolf,
        denString: 'wolf',
      };
    case 'Bear':
      return {
        denObj: bear,
        denString: 'bear',
      };
    case 'Webelos 1':
    case 'Webelos 2':
      return {
        denObj: webelos,
        denString: 'webelos',
      };
    default:
      return null;
  }
};


export const formatDenAdvDates = (scout) => {
  if (scout.tiger) {
    const advArray = Object.keys(scout.tiger);
    advArray.shift();
    advArray.map(item => {
      if (scout.tiger[item] && scout.tiger[item] !== '_id') {
        scout.tiger[item] = new Date(scout.tiger[item]);
      }
    });
  }
  if (scout.lion) {
    const advArray = Object.keys(scout.lion);
    advArray.shift();
    advArray.map(item => {
      if (scout.lion[item] && item !== '_id') {
        scout.lion[item] = new Date(scout.lion[item]);
      }
    });
  }
  if (scout.bobcat) {
    const advArray = Object.keys(scout.bobcat);
    advArray.shift();
    advArray.map(item => {
      if (scout.bobcat[item] && item !== '_id') {
        scout.bobcat[item] = new Date(scout.bobcat[item]);
      }
    });
  }
  if (scout.wolf) {
    const advArray = Object.keys(scout.wolf);
    advArray.shift();
    advArray.map(item => {
      if (scout.wolf[item] && item !== '_id') {
        scout.wolf[item] = new Date(scout.wolf[item]);
      }
    });
  }
  if (scout.bear) {
    const advArray = Object.keys(scout.bear);
    advArray.shift();
    advArray.map(item => {
      if (scout.bear[item] && item !== '_id') {
        scout.bear[item] = new Date(scout.bear[item]);
      }
    });
  }
  if (scout.webelos) {
    const advArray = Object.keys(scout.webelos);
    advArray.shift();
    advArray.map(item => {
      if (scout.webelos[item] && item !== '_id') {
        scout.webelos[item] = new Date(scout.webelos[item]);
      }
    });
  }
  return scout;
};
