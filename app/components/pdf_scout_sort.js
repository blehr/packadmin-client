import React, { PropTypes } from 'react';
import PdfScout from './pdf_scout';
import { filterBy } from '../utils/util';
import ErrorDisplay from '../containers/error_container';

const PdfScoutSort = (props) => {
  const { scouts, filter, showAdv, customDens } = props;
  const filteredScouts = filterBy(scouts, filter, customDens);
  const filteredScoutsKeys = Object.keys(filteredScouts.scouts);
  if (filter === 'byDen') {
    let keyValue = 0;
    const byDenKeys = filteredScoutsKeys.filter(key => (
      key !== 'paid' && key !== 'unpaid'
    ));
    const elem = byDenKeys.map(key => (
      <span key={keyValue += 1}>
        <h3>{key}
          <span className="scout-count">
            ({filteredScouts.scouts[key].length})
          </span>
        </h3>
        <div>
          {filteredScouts.scouts[key].map(scout => (
            <PdfScout scout={scout} key={scout._id} showAdv={showAdv} customDens={customDens} />
          ))}
        </div>
        <hr />
      </span>
    ));
    return (
      <div className="col-sm-12" >
        {elem}
      </div>
    );
  }
  return (
    <div className="col-sm-12">
      <h3>{filteredScouts.title}
        <span className="scout-count">
          ({filteredScouts.scouts.length})
        </span>
      </h3>
      <ErrorDisplay />
      <div>
        {filteredScouts.scouts.map(scout => (
          <PdfScout scout={scout} key={scout._id} showAdv={showAdv} customDens={customDens} />
      ))}
      </div>
    </div>
  );
};

PdfScoutSort.propTypes = {
  customDens: PropTypes.array,
  showAdv: PropTypes.bool,
  scouts: PropTypes.array,
  filter: PropTypes.string,
};

export default PdfScoutSort;
