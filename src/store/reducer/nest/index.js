import initState from '../../state/nest'
import actionType from '../../actionType/nest'

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))

    return state;
}
