import React from 'react';
import moment from 'moment';

export const trueOrFalse = (item) => {
  if (item) {
    return <i className="fa fa-check-square-o"></i>;
  } else {
    return <i className="fa fa-square-o"></i>;
  }
};

const formatDate = date => {
  const regex = /T.+/;
  const birth = date.replace(regex, '');
  return moment(birth);
};

export const getAge = date => {
  return formatDate(date).fromNow(true);
};

export const displayBirthday = date => {
  return formatDate(date).format('MMM D, YYYY');
};

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
  console.log(list);
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
    if (scout.den === 'Lion')
      scoutDens.lion.push(scout);
    if (scout.den === 'Tiger')
      scoutDens.tiger.push(scout);
    if (scout.den === 'Wolf')
      scoutDens.wolf.push(scout);
    if (scout.den === 'Bear')
      scoutDens.bear.push(scout);
    if (scout.den === 'Webelos 1')
      scoutDens.web1.push(scout);
    if (scout.den === 'Webelos 2')
      scoutDens.web2.push(scout);
    if (scout.dues === true)
      scoutDens.paid.push(scout);
    if (scout.dues === false)
      scoutDens.unpaid.push(scout);
  });

  return scoutDens;
};

export const filterBy = (list, filter) => {
  console.log(list);
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
};
