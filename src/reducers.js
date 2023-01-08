export function keyboardClickReducer(state, payload)
{   let points_ = state.points;
    let clone = state.letters.map( (elem) => 
    {
        let e = elem;
        if(elem.letter === payload.payload)
        {
            e.isVisible = true;
            points_ ++;
        }
        return e;
    
    } );

    if(JSON.stringify(clone) == JSON.stringify(state.letters))
    {
        points_--;
    }
    

        return {letters : clone, points : points_ }

}