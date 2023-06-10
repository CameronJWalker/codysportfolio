import Head from "next/head"
import AboutStyles from "../styles/About.module.css"
import ContactForm from "../components/contactForm.js"

export default function About() {

    const Cody = "https://codysportfoliobucket.s3.us-west-1.amazonaws.com/cody.png"

    return(
        <div>
            <Head> 
                <title> About </title>
            </Head>
            <div className={AboutStyles.container}>
                    <img className={AboutStyles.box} alt="Photo of cody meyer" src={Cody}/>
                    <div className={AboutStyles.about}>
                        <h2>Artist Statement</h2>
                    <p>
                        In my work I use photography as a tool to challenge and interrupt 
                        the cycle of the everyday. We are constantly surrounded by technology 
                        that enables endless distraction. The weight of this loop diminishes 
                        the aspects of life that are often taken for granted. Each day we constantly 
                        consume a warped view of politics, capitalism, self perception, environmental 
                        crisis—each amplifying hopelessness and anxiety—ultimately misleading our 
                        efforts in life and taking a toll on our mental health.
                    </p>
                    <p>
                        I want my art to invite the viewer to see their surroundings and environment in a new light. 
                        I want them to recognize how hard it can be to break the endless cycle and feel encouraged in 
                        taking the first step. My photography is proof that small moments of peace can exist once you 
                        interrupt the loop. My practice has taught me to appreciate the process and experience while 
                        capturing a glimpse of the world. The piece “Wake Up” is a view of Las Vegas from above while 
                        my brother took me flying for the first time; it is a valued moment where we could share the 
                        beauty of Las Vegas without all the noise of it. My intention to help others make a change in 
                        their life has also made a difference in my own.
                    </p>
                    <p>
                        Landscapes are often overlooked and underappreciated as nothing more than the backdrop to our 
                        lives, especially in the west where we are used to our beautiful surroundings and don't really stop to look 
                        at it. We become passive to our surroundings while we are herded through each day of school, work, home. School,
                        work, home. The landscapes I have chosen have been my sense of quiet and my place to escape to. I share these 
                        captured moments in time in hopes others can escape too, even a few moments. I encourage others to look up from their 
                        phones and see the real world, to heal the numbness of technology, and to break the endless cycle.
                    </p>
                    
                </div>
            </div>
            {/* <ContactForm /> */}
        </div>
    )
}