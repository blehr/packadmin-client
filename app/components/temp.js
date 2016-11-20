<div className="col-sm-12">
  <h3>Lion Den
    <span className="scout-count">
      ({filteredScouts.scouts.lion.length})
    </span>
  </h3>
  <div>
    {filteredScouts.scouts.lion.map(scout => (
      <RosterItem scout={scout} key={scout._id} />
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
      <RosterItem scout={scout} key={scout._id} />
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
      <RosterItem scout={scout} key={scout._id} />
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
      <RosterItem scout={scout} key={scout._id} />
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
      <RosterItem scout={scout} key={scout._id} />
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
      <RosterItem scout={scout} key={scout._id} />
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
    <RosterItem scout={scout} key={scout._id} />
))}
</div>
</div>
);


// pdf

if (filter === 'byDen') {
  return (
    <div className="col-sm-12">
      <h4>Lion Den
        <span className="scout-count">
          ({filteredScouts.scouts.lion.length})
        </span>
      </h4>
      <div>
        {filteredScouts.scouts.lion.map(scout => (
          <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
        ))}
      </div>
      <hr />
      <h4>Tiger Den
        <span className="scout-count">
          ({filteredScouts.scouts.tiger.length})
        </span>
      </h4>
      <div>
        {filteredScouts.scouts.tiger.map(scout => (
          <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
        ))}
      </div>
      <hr />
      <h4>Wolf Den
        <span className="scout-count">
          ({filteredScouts.scouts.wolf.length})
        </span>
      </h4>
      <div>
        {filteredScouts.scouts.wolf.map(scout => (
          <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
        ))}
      </div>
      <hr />
      <h4>Bear Den
        <span className="scout-count">
          ({filteredScouts.scouts.bear.length})
        </span>
      </h4>
      <div>
        {filteredScouts.scouts.bear.map(scout => (
          <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
        ))}
      </div>
      <hr />
      <h4>Webelos 1
        <span className="scout-count">
          ({filteredScouts.scouts.web1.length})
        </span>
      </h4>
      <div>
        {filteredScouts.scouts.web1.map(scout => (
          <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
        ))}
      </div>
      <hr />
      <h4>Webelos 2
        <span className="scout-count">
          ({filteredScouts.scouts.web2.length})
        </span>
      </h4>
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
    <h4>{filteredScouts.title}
      <span className="scout-count">
        ({filteredScouts.scouts.length})
      </span>
    </h4>
    <ErrorDisplay />
    <div>
      {filteredScouts.scouts.map(scout => (
        <PdfScout scout={scout} key={scout._id} showAdv={showAdv} />
    ))}
    </div>
  </div>
);

// pdfAdvancement

createDenAchievementLists(scout) {
  const elem = [];
  let keyValues = 0;
  const den = getDen(scout.den);
  let tableBody = [];
  const denHeadings = Object.keys(den.denObj);
  denHeadings.shift();
  denHeadings.map((heading) => {
    tableBody = den.denObj[heading].map((item) => {
      const scoutDen = den.denString;
      return (
        <tr key={keyValues++}>
          <td>{item.name}</td>
          <td>{
            scout[scoutDen] &&
            scout[scoutDen][item.formName] &&
              <strong className="adv-item">
                {displayBirthday(scout[scoutDen][item.formName])}
              </strong>
            }</td>
        </tr>
      );
    });
    const table = (
      <div className={den.Den} key={keyValues++}>
        <h3>{den.Den}</h3>
        <table className="table table-striped table-condensed table-hover">
          <tbody>
            <tr>
              <th>{heading}</th>
              <th className="cell-2">Completed</th>
            </tr>
            {tableBody}
          </tbody>
        </table>
      </div>
  );
    elem.push(table);
  });
  return elem;
}

render() {
  return (
    <div>
      {this.createDenAchievementLists(this.props.scout)}
      <span className="end-of-file">
        * end of file {this.props.scout.scoutFirstName} {this.props.scout.scoutLastName}
      </span>
    </div>
  );
}
