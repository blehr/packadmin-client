class Test extends Component {
  createDenAchievementLists(denArray, scout) {
    const elem = [];
    let keyValues = 0;
    denArray.forEach((den) => {
      elem.push(<h2 key={keyValues++}>{den.Den}</h2>);
      const denHeadings = Object.keys(den);
      denHeadings.shift();
      denHeadings.forEach((heading) => {
        const part1 = (<table key={keyValues++}>);
        const part2 = (
          <tr>
            <td>{heading}</td>
            <td>Completed</td>
          </tr>);
        den[heading].forEach((item) => {
          const denString = getDen(den.Den);
          const scoutDen = denString.denString;

          elem.push(
            <table key={keyValues++}>
            <tr>
              <td>{item.name}</td>
              <td>{
                scout[scoutDen] &&
                scout[scoutDen][item.formName] &&
                  <strong className="text-danger">
                    {displayBirthday(scout[scoutDen][item.formName])}
                  </strong>
                }</td>
            </tr>

            </table>
          );
        });
      });
    });
    console.log(elem);
    return elem;
  }

  render() {
    return (
      <div>
        {this.createDenAchievementLists(denArray, this.props.scout)}
      </div>
    );
  }
}

Test.propTypes = {
  scout: PropTypes.object,
};

export default Test;
