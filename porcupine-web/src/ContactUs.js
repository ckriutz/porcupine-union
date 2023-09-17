

function ContactUs() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert('Submitted!');
        //const resp = await axios.get(`https://api.github.com/users/${this.state.companyName}`);
        //this.props.onSubmit(resp.data);
        //this.setState({ companyName: '' });
    };

    return (
        <section>
            <h1>Contact Us</h1>
            <div>
                <p>Thanks for expressing an interest in the Libertarian Party of Union County. Please fill out some details so we can get back to you.</p>
                <form onSubmit={handleSubmit}>
                    <span className="formtext">Your Name:</span>
    	            <input type="text" placeholder="Name" required  />
                    <span className="formtext">Email Address:</span>
    	            <input type="text" placeholder="Email Address" required  />
                    <span className="formtext">Message:</span>
    	            <textarea placeholder="Message" required  />
                    <button>Submit!</button>
    	        </form>

            </div>
        </section>
        
    )
}

export default ContactUs;