import { Component } from 'react';
import { getSearchData } from '../../api/getData';
import { Input } from './styles';

class SearchBox extends Component {
    state = {
        searchStr: '',
    }

    handleInputChange = (ev) =>{
        const str = ev.target.value.trim();
        const { onSearch } = this.props;
        const searchData = getSearchData(str);
        this.setState({
            searchStr: str
        });
        onSearch(searchData);
    }

    render() {
        const { searchStr } = this.state;
        return (
            <Input value={searchStr} placeholder='Type something to search!!!' onChange={this.handleInputChange} />
        );
    }
}

export default SearchBox;