import React from 'react'


const Contact = () => {
  return (
   <>
   <div className="contact" >
    
    <main>

   
        <h2>Contact Form</h2>

        <form>
            <div>
                <label>Name</label>
                <input type="text" placeholder='abc'/>
            </div>
            <div>
                <label>E-mail</label>
                <input type="email" placeholder='abc@xyzgmail.com'/>
            </div>
            <div>
                <label>message</label>
                <input type="text" placeholder='Write about us...'/>
            </div>
            <button>Submit</button>
        </form>
   </main>
   </div>
   </>
  )
}

export default Contact
