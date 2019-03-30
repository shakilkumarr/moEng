import {
    Container, Element, CheckBox, EmptyMsg, Action, Edit, Delete,
} from './styles';

const CampaignsList = ({ dataArr, mainIndex, editDelAction }) => {
    if (!dataArr.length){
        return (
            <EmptyMsg> *** NO DATA FOUND *** </EmptyMsg>
        )
    }
    mainIndex = Number(mainIndex);
    return (
        dataArr.map((obj, index) => {
            return (
                <Container key={obj.id}>
                    {
                        Object.keys(obj).map((key) => {
                            if (key === '_id') {
                                return <CheckBox type='checkbox' key={Math.random()} />;
                            }
                            return <Element key={Math.random()} name={key}>{obj[key]}</Element>;
                        })
                    }
                    <Action>
                        <Edit onClick={() => { editDelAction((mainIndex + index), 'edit') }}>Edit</Edit>
                        <Delete onClick={() => { editDelAction((mainIndex + index), 'del') }}>Del</Delete>
                    </Action>
                        
                </Container>
            )
        })
    )
}

export default CampaignsList;


