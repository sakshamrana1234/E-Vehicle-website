import React from 'react'

function footer() {
  return (
    <div className="w-[50vw] h-[12vw] footer-content">
         {["Privacy Policy","Refund policy","Website policy","Contact us","Products"
,"Rentals"
].map((item,index) => (<a key=
      {index} className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
))}
                <div className="footer-social">
                    <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className="<FontAwesomeIcon icon= fa-brands fa-instagram </div>">
                        <img src="path/to/instagram-icon.png" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                        <img src="path/to/linkedin-icon.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>

);
}

export default footer
