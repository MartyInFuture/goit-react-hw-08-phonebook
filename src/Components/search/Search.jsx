import { useDispatch } from 'react-redux';
import { searchActions } from '../../redux/search';
import { Input } from 'semantic-ui-react';

const Search = () => {
  const dispatch = useDispatch();
  const search = (e) => dispatch(searchActions.search(e.target.value));
  return (
    <Input
      className="icon"
      icon="search"
      placeholder="Search..."
      onChange={search}
      type="text"
    />
  );
};

export default Search;
