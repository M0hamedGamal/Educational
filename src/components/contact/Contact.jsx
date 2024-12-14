import './contact.css'
import Back from "../common/back/Back.jsx";

function Contact() {
    const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13835.007854761263!2d31.0679065!3d29.900246799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1733419378265!5m2!1sen!2seg"
    return (
        <>
            <Back title='Contact Us'/>
            <section className="contact padding">
                <div className="container shadow flexsb">
                    <div className="left row">
                        <iframe src={map}></iframe>
                    </div>
                    <div className="right row">
                        <h1>Contact Us</h1>
                        <p>suscipit velit voluptatibus voluptatum?</p>

                        <div className="items grid2">
                            <div className="box">
                                <h4>ADDRESS:</h4>
                                <p>198 west 21st street, suite 751 New York NY 10016</p>
                            </div>
                            <div className="box">
                                <h4>Email:</h4>
                                <p>info@gmail.com</p>
                            </div>
                            <div className="box">
                                <h4>Phone:</h4>
                                <p>+123 456 789</p>
                            </div>
                        </div>
                        <form action="">
                            <div className="flexsb">
                                <input type="text" placeholder='Name'/>
                                <input type="email" placeholder='Email'/>
                            </div>
                            <input type="email" placeholder='Subject'/>
                            <textarea cols="30" rows="10">
                                Create a message here...
                            </textarea>
                            <button className='primary-btn'>SEND MESSAGE</button>
                        </form>
                        <h3>Follow use here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;