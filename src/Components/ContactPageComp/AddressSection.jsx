import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import {ImOffice} from 'react-icons/im';
const AddressSection = () => {

  const handleEmailClick = () => {
    window.location.href = `mailto:${"info@siteocean.in"}`;
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center h-screen p-6 sm:p-0">
      <div className="sm:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-3 mb-2 text-gray-600">
              <div>
              <h3 className="text-xl font-bold mb-2 ">Company</h3>
              <p className="text-gray-700 font-serif lg:w-[50%]">Site Ocean Private Limited</p>
              </div> 
              <div>
            <h3 className="text-xl font-bold mb-1">Office Address</h3>
            <p className="text-gray-700 font-serif lg:w-[50%] capitalize">2nd floor, iswarya complex, nethaji rd, pappanaickenpalayam, coimbatore, tamilNadu.<br />641037</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Registered Office Address</h3>
            <p className="text-gray-700 font-serif lg:w-[50%]">No. 40/1 & 41/2, Nehru Garden, Dr. A.P.J. AbdulKalam-Block, Nehru Arts & Science College, Madhukarai, Thirumalayampalayam <br />Coimbatore,TamilNadu.<br/>PinCode : 641105</p>
          
          </div>

            <div>
              <h3 className="text-xl font-bold space-y-2">Mobile</h3>
              <p className="font-semibold text-[#5f5c5c]">+91 - 8122183129</p>
              </div> 
            {/* <div>
              <h3 className="text-xl font-bold mb-2 space-y-2">Email</h3>
              <p className=" underline text-[blue]">info@siteocean.in</p>
              </div>    */}
            </div>
      </div>
    </div>
  )
}

export default AddressSection
