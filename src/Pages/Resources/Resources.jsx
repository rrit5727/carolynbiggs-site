import React from "react";
import { Link } from "react-router-dom";

function Resources() {
  // Consolidating arrays into an array of objects
  const resources = [
    {
      name: 'Circle of Security',
      url: 'http://circleofsecurity.net/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_393b62d2e6254ae48b9d6f3725d47c5e.jpg'
    },
    {
      name: 'beyond blue',
      url: 'https://www.beyondblue.org.au/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_4afd1716427d472ab0ee36e605267310.png'
    },
    {
      name: 'youth beyond blue',
      url: 'https://www.youthbeyondblue.com/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_b2f21e6f483646f2898bb2eb3114fad9.jpg'
    },
    {
      name: 'Your Room',
      url: 'http://yourroom.com.au/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_0654fd8fb49f4ef6aa57cdb19a4c6556.png'
    },
    {
      name: 'parent line',
      url: 'http://www.parentline.org.au/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_423768c8e04a4202bf060d0f2aaae38a.jpg'
    },
    {
      name: 'reach out',
      url: 'http://au.reachout.com/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_56efed7a6f124892a819603a094dc27d.jpg'
    },
    {
      name: 'kids helpline',
      url: 'http://www.kidshelpline.com.au/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_bc4b1f52460848bcbdec2a06e4f16c07.jpg'
    },
    {
      name: 'Blackdog Institute',
      url: 'http://www.blackdoginstitute.org.au/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_6936d6a76a18460e8f9702c49c6ba8de.jpg'
    },
    {
      name: 'headspace',
      url: 'http://headspace.org.au/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_fa5dc3f4f0c74272a102892933b4eaf2.jpg'
    },
    {
      name: 'E-headspace',
      url: 'https://eheadspace.org.au/online-and-phone-support/connect-with-us/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_2954ea2dc25f477e9d4fbe0b32c4ed81.jpg'
    },
    {
      name: 'Living is for everyone',
      url: 'http://www.livingisforeveryone.com.au/Home.html',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_9e50f211842f4cd38c9283c8ad8609a9.png'
    },
    {
      name: 'Family Relationships',
      url: 'http://www.familyrelationships.gov.au/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_4a3750b3a44b4ac3bab0756209d1a587.jpg'
    },
    {
      name: 'raisingchildren',
      url: 'http://raisingchildren.net.au/',
      imageUrl: 'https://static.wixstatic.com/media/e1f077_a406ded938fa4be595f342d45395657a.png'
    }
  ];

  return (
    <>
      <div className="h-[150px] bg-red-200"></div> {/* Example red header */}
      <div className="flex justify-center pt-10 bg-orange-100">
        <div className="flex flex-wrap w-4/5">
          {resources.map((resource, index) => (
            <div key={index} className="text-center p-4">
              <img 
                src={resource.imageUrl} 
                alt={`Image ${index + 1}`} 
                className="w-[250px] h-[250px] object-cover rounded-lg"
              />
              <div className="border border-green-400 mt-2 p-2 bg-white">
                <Link to={resource.url} className="text-blue-600 hover:underline">
                  {resource.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resources;