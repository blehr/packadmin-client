import React, { PropTypes } from 'react';
import PdfScout from './pdf_scout';
import { filterBy } from '../utils/util';
import ErrorDisplay from '../containers/error_container';

const PdfScoutSort = (props) => {
  const { scouts, filter, showAdv } = props;
  const filteredScouts = filterBy(scouts, filter);
  if (filter === 'byDen') {
    return (
      <div className="col-sm-12">
        <h3>Lion Den
          <span className="scout-count">
            ({filteredScouts.scouts.lion.length})
          </span>
        </h3>
        <div>
          {filteredScouts.scouts.lion.map(scout => (
            <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
          ))}
        </div>
        <hr />
        <h3>Tiger Den
          <span className="scout-count">
            ({filteredScouts.scouts.tiger.length})
          </span>
        </h3>
        <div>
          {filteredScouts.scouts.tiger.map(scout => (
            <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
          ))}
        </div>
        <hr />
        <h3>Wolf Den
          <span className="scout-count">
            ({filteredScouts.scouts.wolf.length})
          </span>
        </h3>
        <div>
          {filteredScouts.scouts.wolf.map(scout => (
            <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
          ))}
        </div>
        <hr />
        <h3>Bear Den
          <span className="scout-count">
            ({filteredScouts.scouts.bear.length})
          </span>
        </h3>
        <div>
          {filteredScouts.scouts.bear.map(scout => (
            <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
          ))}
        </div>
        <hr />
        <h3>Webelos 1
          <span className="scout-count">
            ({filteredScouts.scouts.web1.length})
          </span>
        </h3>
        <div>
          {filteredScouts.scouts.web1.map(scout => (
            <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
          ))}
        </div>
        <hr />
        <h3>Webelos 2
          <span className="scout-count">
            ({filteredScouts.scouts.web2.length})
          </span>
        </h3>
        <div>
          {filteredScouts.scouts.web2.map(scout => (
            <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
          ))}
        </div>
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
          <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
      ))}
      </div>
    </div>
  );
};

PdfScoutSort.propTypes = {
  scouts: PropTypes.array,
  filter: PropTypes.string,
};

export default PdfScoutSort;
