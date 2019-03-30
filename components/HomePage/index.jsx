import { Component } from 'react';
import SearchBox from '../SearchBox';
import { getFullData, getDataByIndex } from '../../api/getData';
import CampaignsList from '../CampaignsList'
import {
    Container,
    Header,
    Body,
    Footer,
    FooterEl,
    Arrow,
} from './styles';

class HomePage extends Component {
    state = {
        data: [],
        dataArr: [],
        index: 0,
    }

    componentDidMount = () => {
        this.setState({
            data: getFullData(),
            dataArr: getDataByIndex(),
        });
    }

    onSearch = (dataArr) => {
        this.setState({
            dataArr: dataArr,
        });
    }

    getPaginationArr = (data) =>{
        const size = data.length / 10;
        const pagArr = [];
        for( let i = 0; i < size; i ++){
            pagArr.push(i+1);
        }
        return pagArr;
    }

    changeData = (arrEl) =>{
        let index = Number(arrEl);
        index = index < 1 ? 1 : index; 
        const { data } = this.state;
        this.setState({
            dataArr: getDataByIndex(((index - 1) * 10), 10, data),
            index: index - 1,
        })

    }

    editDelAction = (indexVal, type) =>{
       const { data, index } = this.state;
       let result = data.slice();
       if(type === "del"){
           result.splice(indexVal,1);
           this.setState({
               data: result,
               dataArr: getDataByIndex(index * 10, 10, result),
           });
       }
       else{
        alert("Yet to do :-)");
       }
    }

    render() {
        const { dataArr, searchStr, data, index } = this.state;
        let arrState = index + 1;
        const paginationArr = this.getPaginationArr(data);
        return (
            <Container>
                <Header>
                    <SearchBox searchStr={searchStr} onSearch={this.onSearch} />
                </Header>
                <Body>
                    <CampaignsList dataArr={dataArr} mainIndex={(index * 10)} editDelAction={this.editDelAction} />
                </Body>
                <Footer>
                    <Arrow onClick={() => { this.changeData(arrState - 1)}}> {'<'} </Arrow>
                    { 
                        paginationArr.map((arrEl) =>{
                            const isActive = Number(arrEl) - 1 === index ? true : false;
                            return (
                                <FooterEl isActive={isActive} onClick={()=>{this.changeData(arrEl)}} > { arrEl } </FooterEl>
                            );
                        })
                    }
                    <Arrow onClick={() => { this.changeData(arrState + 1)}}> {'>'} </Arrow>
                </Footer>
            </Container>
        );
    }
};

export default HomePage;