import initState from '../../state/bakingRing'
import actionType from '../../actionType/bakingRing'

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))

    return state;
}
