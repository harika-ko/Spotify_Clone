export const ADD_SONG_TO_SELECTED = "ADD_SONG_TO_SELECTED";
export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const addSongToSelectedAction = (songSelected) => {
    return (dispatch, getState) => {
        console.log(" check current state here: ", getState());
        dispatch({
            type: ADD_SONG_TO_SELECTED,
            payload: songSelected,
        });
    };
};


export const addLike = (song) => ({
    type: ADD_LIKE,
    payload: song,
});

export const removeLike = (song) => ({
    type: REMOVE_LIKE,
    payload: song,
});