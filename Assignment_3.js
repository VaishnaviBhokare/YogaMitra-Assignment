function List(props) {
  const stringList = props.stringList;
  const listItems = stringList.map((stringItem) =>
    <li key={stringItem}>
      {stringItem}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const stringList = ["hello","good","bye"];

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( < List stringList={stringList} />);