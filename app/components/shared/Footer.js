import React from 'react'
import Link from "next/link"
function Footer() {
    return (
        <div className="p-3 bg-gray-200 mt-auto text-center">

                {/* <img className="h-7 w-7 mx-auto" src="https://media-exp1.licdn.com/dms/image/C4D03AQGljX322fRI8Q/profile-displayphoto-shrink_200_200/0/1621277184610?e=1642032000&v=beta&t=zyIZgodnniPfp4C9EBActZxeFO4Ul2tjBoRlewgXGjA" /> */}
            <p>

            Copyright
            <Link href="https://www.linkedin.com/in/richard-bathiebo/">© Richard Bathiebo</Link>  - Tous droits réservés
            </p>
            
        </div>
    )
}

export default Footer
