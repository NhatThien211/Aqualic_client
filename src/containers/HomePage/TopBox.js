import React from 'react';
import './Dashboard.css';
import { history } from './../../App';
import { Button } from 'reactstrap';

class TopBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            learning_course: '',
            learning_course_id: '',
            learning_lesson: '',
            learning_lesson_id: ''
        }
    }
    componentWillReceiveProps(nextProps, prevState) {
        if (nextProps === prevState) return;
        this.setState({
            learning_course: nextProps.learning_course,
            learning_course_id: nextProps.learning_course_id,
            learning_lesson: nextProps.learning_lesson,
            learning_lesson_id: nextProps.learning_lesson_id,
        });
        // this.getLearning(this.props.info.course.course);
    }

    startLesson() {
        localStorage.setItem("COURSE",parseInt(this.state.learning_course_id));
        history.push("/lesson/" + this.state.learning_lesson_id);
    }
    render() {
        let { info, course } = this.props;

        let { learning_course, learning_lesson } = this.state;
        return (
            <div className="topbox" >
                <div className="topbox-contain">
                    <div className="topbox-contain-title">
                        <div className="topbox-contain-title-bigicon">
                            <img src={info.icon} className="topbox-contain-title-smallicon" alt="logo" />
                        </div>
                        <div className="topbox-contain-title-text">
                            <div className="playlist-title">
                                {info.playlist_title}
                            </div>
                            <div className="playlist-subtitle">
                                {info.playlist_subtitle}
                            </div>
                        </div>
                        <div className="topbox-contain-title-button">
                            <button className="playlist-button">
                                <img src={info.sub_icon} className="playlist-button-icon" alt="icon" /> CURRICULUM</button>
                        </div>
                    </div>
                    <div className="topbox-contain-description">
                        {info.description}
                    </div>
                    <div className="topbox-contain-boxline">
                        <hr className="topbox-contain-line"></hr>
                    </div>
                    {learning_lesson ?
                        <div className="topbox-contain-courcemode">
                            <div className="topbox-contain-courcemode-text">
                                <div className="topbox-contain-courcemode-stream">{learning_course}</div>
                                <div className="topbox-contain-courcemode-lession">{learning_lesson}</div>
                            </div>
                            <Button color="success" className="topbox-contain-courcemode-button" onClick={(e) => { e.preventDefault(); this.startLesson() }}>START</Button>
                        </div> : ''}

                </div>
            </div>
        );
    };
}
export default TopBox;