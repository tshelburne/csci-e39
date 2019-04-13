import React from 'react'

class FAQ extends React.Component {

    render() {
        return <main id='faq-container'>
            <h1>Frequently Asked Questions :)</h1>
            <div id='faq-questions'>
                <ol>
                    <li>
                        <b>What is this album about?</b><br/> This album is mainly just a layout tester for cooler (hopefully)
                        pictures in the near future. I might or might not have uploaded my personal images to it. Whoops ;X
                    </li>
                    <li>
                        <b>What are some cool features this thing has?</b><br/> Well, one of the niftier features here is that
                        you can click on an image and then have that image be in a larger pop-up modal for the viewer to
                        check out along with the name of the image file at the bottom.
                    </li>
                    <li>
                        <b>How long did it take for you to make this site?</b><br/> About 2 days and very little sleep due to my
                        lack of experience with react and css grid. Overall, it was a fun and educational project that I
                        would be excited to add to in the future.
                    </li>
                    <li>
                        <b>What did you think of using react as the backbone to the project?</b><br/> I really enjoyed it and
                        had some great teachers (hint hint).
                    </li>
                    <li>
                        <b>If you were to do anything differently, what would it be?</b><br/> I would probably look into doing a harder
                        layout with CSS Grid because of how fun it was to do research and realize how many cool things css can do
                        that no one really talks about.
                    </li>
                    <li>
                        <b>Why is your photo album so pink?</b><br/> I started off with using gray and black but eventually that got
                        boring and I realized that millenial pink would be a fun color to stare at for 5 hours straight.
                    </li>
                    <li>
                        <b>Do you feel like your experiences as a developer helped you in this project?</b><br/> Yes and no, it was
                        easier for me to pick up the logic around this project but I wish I had a designer to help me with this!
                    </li>
                </ol>
            </div>
        </main>
    }

}

export default FAQ
