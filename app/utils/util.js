import React from 'react';
import moment from 'moment';

export const trueOrFalse = (item) => {
    if (item) {
        return <i className="fa fa-check-square-o"></i>;
    }
    else {
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


export const alphabetize = (list) => {
    return list.sort(function(a, b){
        
        const aValue = a.scoutLastName;
        const bValue = b.scoutLastName;
        
        if(aValue < bValue) return -1;
        if(aValue > bValue) return 1;
        return 0;
    });
    
};

export const byDen = list => {
    
    list = alphabetize(list);
    
    const scoutDens = {
        lion: [],
        tiger: [],
        wolf: [],
        bear: [],
        web1: [],
        web2: [],
        paid: [],
        unpaid: []
    };
    
    list.map(scout => {
        if (scout.den === 'Lion') scoutDens.lion.push(scout);
        if (scout.den === 'Tiger') scoutDens.tiger.push(scout);
        if (scout.den === 'Wolf') scoutDens.wolf.push(scout);
        if (scout.den === 'Bear') scoutDens.bear.push(scout);
        if (scout.den === 'Webelos 1') scoutDens.web1.push(scout);
        if (scout.den === 'Webelos 2') scoutDens.web2.push(scout);
        if (scout.dues === true) scoutDens.paid.push(scout);
        if (scout.dues === false) scoutDens.unpaid.push(scout);
        
    });
    
    return scoutDens;
    
} ;

export const filterBy = (scouts, filter) => {
    let title = '';
        
    if (filter === 'all') {
        return {
            scouts: alphabetize(scouts),
            title: 'All Scouts'
        };
    }
    if (filter === 'byDen') {
        return {
            scouts: byDen(scouts),
            title: 'Scouts by Den'
        };
    }
    if (filter === 'Lion') {
        scouts = byDen(scouts);
        return {
            scouts: scouts.lion,
            title: 'Lion Den'
        };
    }
    if (filter === 'Tiger') {
        scouts = byDen(scouts);
        return {
            scouts: scouts.tiger,
            title: 'Tiger Den'
        };
    }
    if (filter === 'Wolf') {
        scouts = byDen(scouts);
        return {
            scouts: scouts.wolf,
            title: 'Wolf Den'
        };
    }
    if (filter === 'Bear') {
        scouts = byDen(scouts);
        return {
            scouts: scouts.bear,
            title: 'Bear Den'
        };
    }
    if (filter === 'Webelos 1') {
        scouts = byDen(scouts);
        return {
            scouts: scouts.web1,
            title: 'Webelos 1'
        };
    }
    if (filter === 'Webelos 2') {
        scouts = byDen(scouts);
        return {
            scouts: scouts.web2,
            title: 'Webelos 2'
        };
    }
    if (filter === 'paid') {
        scouts = byDen(scouts);
        return {
            scouts: scouts.paid,
            title: 'Dues Paid'
        };
    }
    if (filter === 'unpaid') {
        scouts = byDen(scouts);
        return {
            scouts: scouts.unpaid,
            title: 'Dues Unpaid'
        };
    }
    
    
};





