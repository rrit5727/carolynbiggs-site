import React from "react";
import { Link } from "react-router-dom";

function Resources () {

const urls = [
  'http://circleofsecurity.net/',
  'https://www.beyondblue.org.au/',
  'https://www.youthbeyondblue.com/', 
  'http://yourroom.com.au/', 
  'http://www.parentline.org.au/', 
  'http://au.reachout.com/', 
  'http://www.kidshelpline.com.au/', 
  'http://www.blackdoginstitute.org.au/', 
  'http://headspace.org.au/', 
  'http://www.livingisforeveryone.com.au/Home.html', 
  'https://www.beyondblue.org.au/resources/for-me/lesbian-gay-bi-trans-and-intersex-lgbti-people/helpful-contacts-and-websites',
  'http://www.familyrelationships.gov.au/Pages/default.aspx', 
  'http://www.abcdparenting.org/', 
  'http://raisingchildren.net.au/'
]

const names = [

  'Circle of Security', 
  'beyond blue',
  'youth beyond blue',
  'Your Room',
  'parent line',
  'reach out',
  'kidshelpline',
  'Blackdog Institute',
  'headspace',
  'livingisforeveryone',
  '',
  'Family Relationships',
  'Abcd Parenting',
  'raisingchildren',
]

const imageUrls = [

  'https://static.wixstatic.com/media/e1f077_393b62d2e6254ae48b9d6f3725d47c5e.jpg/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_393b62d2e6254ae48b9d6f3725d47c5e.jpg/v1/fill/w_369', 'https://static.wixstatic.com/media/e1f077_4afd1716427d472ab0ee36e605267310.png/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_4afd1716427d472ab0ee36e605267310.png/v1/fill/w_350', 'https://static.wixstatic.com/media/e1f077_b2f21e6f483646f2898bb2eb3114fad9.jpg/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_b2f21e6f483646f2898bb2eb3114fad9.jpg/v1/fill/w_436', 'https://static.wixstatic.com/media/e1f077_0654fd8fb49f4ef6aa57cdb19a4c6556.png/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_0654fd8fb49f4ef6aa57cdb19a4c6556.png/v1/fill/w_436', 'https://static.wixstatic.com/media/e1f077_423768c8e04a4202bf060d0f2aaae38a.jpg/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_423768c8e04a4202bf060d0f2aaae38a.jpg/v1/fill/w_436', 'https://static.wixstatic.com/media/e1f077_56efed7a6f124892a819603a094dc27d.jpg/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_56efed7a6f124892a819603a094dc27d.jpg/v1/fill/w_436', 'https://static.wixstatic.com/media/e1f077_bc4b1f52460848bcbdec2a06e4f16c07.jpg/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_bc4b1f52460848bcbdec2a06e4f16c07.jpg/v1/fill/w_436', 'https://static.wixstatic.com/media/e1f077_6936d6a76a18460e8f9702c49c6ba8de.jpg/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_6936d6a76a18460e8f9702c49c6ba8de.jpg/v1/fill/w_436', 'https://static.wixstatic.com/media/e1f077_fa5dc3f4f0c74272a102892933b4eaf2.jpg/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_fa5dc3f4f0c74272a102892933b4eaf2.jpg/v1/fill/w_436', 'https://static.wixstatic.com/media/e1f077_2954ea2dc25f477e9d4fbe0b32c4ed81.jpg/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_2954ea2dc25f477e9d4fbe0b32c4ed81.jpg/v1/fill/w_436', 'https://static.wixstatic.com/media/e1f077_9e50f211842f4cd38c9283c8ad8609a9.png/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_9e50f211842f4cd38c9283c8ad8609a9.png/v1/fill/w_420', 'https://static.wixstatic.com/media/e1f077_f0885ab106ff483e9e81a5ea8f5193a1.jpg/v1/fill/w_218', 'https://static.wixstatic.com/media/e1f077_f0885ab106ff483e9e81a5ea8f5193a1.jpg/v1/fill/w_436'

]

 return (

  <div>
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
      ))}
    </div>


 )  

}

export default Resources