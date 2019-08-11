import React from "react";
import one from "@asset/img/one.png"
import two from '@asset/img/two.png'
import three from "@asset/img/three.png"
import "../../../asset/css/nest/Me/Curriculum.scss"
export default class Curriculum extends React.Component {
    render() {
        return (
            <div className={"Curriculum"}>
                <div className={"Curriculum_son"}>
                    <div className={"Curriculum_top"}>
                        <img src={one} alt=""/>
                    </div>
                    <div className={"Curriculum_center"}>
                        <img src={two} alt=""/>
                    </div>
                </div>

                <div className={'Curriculum_bottom'}>
                    <img src={three} alt=""/>
                </div>
            </div>
        )

    }
}
