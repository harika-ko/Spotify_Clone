import React from "react";
import { connect } from "react-redux";
import { addSongToSelectedAction } from "../redux/actions";

import { useSelector, useDispatch } from "react-redux";
import { HeartFill, Heart } from "react-bootstrap-icons";
import { addLike, removeLike } from "../redux/actions";

/*const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    addSongToSelected: (songSelected) => {
        dispatch(addSongToSelectedAction(songSelected));
    },
});*/

const Song = ({ track }) => {

    const songs = useSelector((state) => state.likes.songs);

    const dispatch = useDispatch();

    const isLike = songs.includes(track.title);

    const toggleLike = () => {
        isLike ? dispatch(removeLike(track.title)) : dispatch(addLike(track.title));
    };

    return (
        <div className="py-3 trackHover"

            onClick={() => {
                dispatch(addSongToSelectedAction(track));
            }}>

            {isLike ? (
                <HeartFill color="red" onClick={toggleLike} />
            ) : (
                <Heart color="white" onClick={toggleLike} />
            )}

            <span className="card-title trackHover px-3" style={{ color: "white" }}
            >
                {track.title}
            </span>
            <small className="duration" style={{ color: "white" }}>
                {Math.floor(parseInt(track.duration) / 60)}:
                {parseInt(track.duration) % 60 < 10
                    ? "0" + (parseInt(track.duration) % 60)
                    : parseInt(track.duration) % 60}
            </small>
        </div>
    )
};

export default Song;


