import React, {Component} from 'react'

class Aboutme extends Component {
    render() {
        return(
            <div className={"about-me-div"}><h1>About Me</h1>
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <p>I lived in New Mexico and Texas for most of my life as I went through school in those two areas.
            I actively participated in groups such as FFA where I learned more about public speaking
            and eventually became the president of my local chapter. As I entered college I became involved in groups
            like the New Mexico State University Game Development Club, where I was able to apply my hard skills more directly.
            As I neared my graduation I began working on my most ambitious project yet with the Eastern New Mexico University Biochemistry department.
            Together I lead a small team to build a web portal that allowed them to process large amounts of data from their custom sampling facility online.
            The program not only handled complex statistical analyses, but also allowed other researchers from around the nation to compile their results and advance the field.
            While this is certainly my current crowning achievement, I look forward to helping with many other great works.</p></div>
        )
    }
}

export default Aboutme