import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 states= [
    {
      "id": 1,
      "state": "Andhra Pradesh",
      "img": "https://media.gettyimages.com/id/547692463/photo/sunset-over-golconda.jpg?s=612x612&w=0&k=20&c=c6BL-j48yuzJFNp5TjJIW4xfaMz6rixgvOCAsyeVrUs=",
      "description": "Known for its temples, beaches, and Tirupati, Andhra Pradesh also offers rich cultural heritage and the serene Araku Valley.",
      "path": 1
    },
    {
      "id": 2,
      "state": "Arunachal Pradesh",
      "img": "https://media.gettyimages.com/id/1149536227/photo/mountain-scene.jpg?s=612x612&w=0&k=20&c=BZEKuYxw5qLrjGcO1SXxU57XcTyKaoRhpOWPB_NjIII=",
      "description": "Famed for its lush green valleys, monasteries, and snow-capped mountains, Arunachal Pradesh is a paradise for nature lovers.",
      "path": 2 
    },
    {
      "id": 3,
      "state": "Assam",
      "img": "https://media.gettyimages.com/id/174704997/photo/karenghar-assam-india-the-ahom-palace-of-karenghar-a-seven-floor-building-with-three.jpg?s=612x612&w=0&k=20&c=HDS3o05fVtzw_Dxt3lpq8_rxceOjy93qY0aA0j2-5gg=",
      "description": "Home to Kaziranga National Park, tea gardens, and the mighty Brahmaputra River, Assam offers unique wildlife and cultural experiences.",
      "path": 3
    },
    {
      "id": 4,
      "state": "Bihar",
      "img": "https://media.gettyimages.com/id/1756540656/photo/view-of-stupa-in-kathmandu-from-balcony.jpg?s=612x612&w=0&k=20&c=XiGgvdwNOlc5stlxGNcETw4OYffOySyA8wcWTw1ezTg=",
      "description": "Known for its historical and religious significance, Bihar is home to Bodh Gaya, Nalanda, and the Mahabodhi Temple.",
      "path": 4
    },
    {
      "id": 5,
      "state": "Chhattisgarh",
      "img": "https://media.gettyimages.com/id/1206665405/photo/ram-mandir-in-raipur-chhattisgarh.jpg?s=612x612&w=0&k=20&c=V4NACjQCkP_I8JJPfVx1JbjRBEFBxKI-seyvAjsVqF4=",
      "description": "Rich in tribal culture and natural beauty, Chhattisgarh features waterfalls, caves, and dense forests, such as Chitrakoot Falls.",
      "path": 5
    },
    {
      "id": 6,
      "state": "Goa",
      "img": "https://media.gettyimages.com/id/157579910/photo/the-beach.jpg?s=612x612&w=0&k=20&c=aMk67AmzIVD_S1Nibww8ytUdyub2ck3HNQ3uTvuPWPI=",
      "description": "A tropical paradise, Goa is famous for its beaches, Portuguese heritage, and vibrant nightlife.",
      "path": 6
    },
    {
      "id": 7,
      "state": "Gujarat",
      "img": "https://media.gettyimages.com/id/1223232939/photo/india-gujarat-ahmedabad-hazrat-harir-mosque.jpg?s=612x612&w=0&k=20&c=ydhGU7JJ0_L_lyY5tNeMPq_Rjfmm_PA5-jTAHDn6CTA=",
      "description": "Known for Gir National Park, Rann of Kutch, and Somnath Temple, Gujarat blends wildlife, culture, and history.",
      "path": 7
    },
    {
      "id": 8,
      "state": "Haryana",
      "img": "https://media.gettyimages.com/id/1247130052/photo/faridabad-haryana-india-a-crowd-is-seen-at-the-36th-surajkund-international-crafts-fair-at.jpg?s=612x612&w=0&k=20&c=jkG2AbTnBkkaJC6CWvCBD889Q3UeNDWCthheYhKQfbA=",
      "description": "Known for its vibrant culture, Haryana features historical sites, including Kurukshetra, the land of the Mahabharata.",
      "path": 8

    },
    {
      "id": 9,
      "state": "Himachal Pradesh",
      "img": "https://media.gettyimages.com/id/993213346/photo/a-view-of-street-market-in-manali-town-himachal-pradesh-india-on-6th-july-2018-manali-is-a.jpg?s=612x612&w=0&k=20&c=nvPWf3iWZ97urdGdGcsREy4Oj_GyfUxtcL0K-s1rGJE=",
      "description": "A picturesque state with snow-capped mountains, Himachal Pradesh is ideal for adventure sports and serene hill stations like Manali.",
      "path": 9
    },
    {
      "id": 10,
      "state": "Jharkhand",
      "img": "https://media.gettyimages.com/id/665888262/photo/ranchi-jharkhand-india-people-enjoy-themselves-at-the-rock-garden-where-there-is-a-replica-of.jpg?s=612x612&w=0&k=20&c=ne9hJ9MSaVYj4X69nMt37yuWgfvKa9NiFJjmSVeZwrw=",
      "description": "Known for its waterfalls, wildlife, and temples, Jharkhand is home to destinations like Betla National Park and Ranchi.",
      "path": 10
    },
    {
      "id": 11,
      "state": "Karnataka",
      "img": "https://media.gettyimages.com/id/137336783/photo/vittala-temple-stone-chariot-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=mQq4me5Nr_8uWnr4eQcJCSy5tcZ46H-QzIxrYsn6f2E=",
      "description": "A blend of modernity and history, Karnataka features Hampi, Mysore, Coorg, and Bengaluru, its capital city.",
      "path": 11
    },
    {
      "id": 12,
      "state": "Kerala",
      "img": "https://media.gettyimages.com/id/472909442/photo/backwaters-of-kerala.jpg?s=612x612&w=0&k=20&c=ibwRiZJZGcxG5MLWFUowcXM9XK3nZnklk9ZH1Qus3C4=",
      "description": "God's Own Country, Kerala, offers serene backwaters, tea plantations, and beautiful beaches.",
      "path": 12
    },
    {
      "id": 13,
      "state": "Madhya Pradesh",
      "img": "https://media.gettyimages.com/id/1223353161/photo/india-madhya-pradesh-state-sanchi-buddhist-monuments.jpg?s=612x612&w=0&k=20&c=hsbyNg1xvJ58NeoLXI3gUawB9xkfu2Jj9R7mrDM5kbI=",
      "description": "The heart of India, Madhya Pradesh, boasts Khajuraho Temples, Bandhavgarh National Park, and historical sites like Gwalior Fort.",
      "path": 13
    },
    {
      "id": 14,
      "state": "Maharashtra",
      "img": "https://media.gettyimages.com/id/663507425/photo/the-gateway-of-india-mumbai-india.jpg?s=612x612&w=0&k=20&c=4023ICzc5XE8a9KCZ7ADF69UT9TByAeW7iXLD1JpM0M=",
      "description": "Home to Mumbai, Maharashtra also features Ajanta-Ellora Caves, hill stations, and pristine beaches.",
      "path": 14
    },
    {
      "id": 15,
      "state": "Manipur",
      "img": "https://media.gettyimages.com/id/1303580675/photo/sentinel-fort-in-the-kangla-palace-imphal-manipur-india-asia.jpg?s=612x612&w=0&k=20&c=RHQPulyyw8pNvfERU3fXJO0VilKgTDClL355xdUOTmU=",
      "description": "Known for its natural beauty, Manipur is home to Loktak Lake and the Ima Keithel market run exclusively by women.",
      "path": 15
    },
    {
      "id": 16,
      "state": "Meghalaya",
      "img": "https://media.gettyimages.com/id/1352486289/photo/scenic-view-of-mountains-against-sky-during-sunset-meghalaya-india.jpg?s=612x612&w=0&k=20&c=hTPZzO6lNqZgZEJ6jY9SY9lud41faIbqD-gURCNJnYE=",
      "description": "Known as the 'Abode of Clouds,' Meghalaya features living root bridges, waterfalls, and caves.",
      "path": 16
    },
    {
      "id": 17,
      "state": "Mizoram",
      "img": "https://media.gettyimages.com/id/1303580643/photo/view-over-the-houses-perched-on-the-hills-in-aizawl-mizoram-india-asia.jpg?s=612x612&w=0&k=20&c=PYrFHlJLW0v8sTbZ_3YbJx_YeE1WuaXgbRFf3gjwnuM=",
      "description": "A land of rolling hills and lush greenery, Mizoram is perfect for cultural immersion and exploring untouched nature.",
      "path": 17
    },
    {
      "id": 18,
      "state": "Nagaland",
      "img": "https://media.gettyimages.com/id/1183950278/photo/view-across-the-slopes-of-the-naga-hills-and-small-naga-village-phek-district-nagaland-india.jpg?s=612x612&w=0&k=20&c=8C9kxlD5OMJehIjjHJhfRmKXhGYJDHjA7KQOZ1vnEXQ=",
      "description": "Nagaland is famed for its tribal culture, festivals like Hornbill, and scenic landscapes.",
      "path": 18
    },
    {
      "id": 19,
      "state": "Odisha",
      "img": "https://media.gettyimages.com/id/536030036/photo/konark-sun-temple-in-orissa.jpg?s=612x612&w=0&k=20&c=w4W5AxmIIdmKhy0K1jJtSdJmLcWUFoW85JKqqWfWtRo=",
      "description": "Known for Konark Sun Temple, Jagannath Temple, and Chilika Lake, Odisha is rich in heritage and natural beauty.",
      "path": 19
    },
    {
      "id": 20,
      "state": "Punjab",
      "img": "https://media.gettyimages.com/id/168304680/photo/golden-temple-amritsar-punjab-india.jpg?s=612x612&w=0&k=20&c=0nh-32zJnA1noGh08amdkwiJtE--nprqbRnOBbqW8Gw=",
      "description": "The vibrant state of Punjab features the Golden Temple, Wagah Border, and traditional Punjabi hospitality.",
      "path": 20
    },
    {
      "id": 21,
      "state": "Rajasthan",
      "img": "https://media.gettyimages.com/id/825020012/photo/indian-palace.jpg?s=612x612&w=0&k=20&c=5Y7pbZ5SU9OwebA8oIzgzgVov1wZHxE_yL108ikfPBo=",
      "description": "Famous for its palaces, forts, and desert, Rajasthan is a royal destination offering a blend of history and culture.",
      "path": 21
    },
    {
      "id": 22,
      "state": "Sikkim",
      "img": "https://media.gettyimages.com/id/1589827102/photo/high-angle-view-of-townscape-and-mountains-against-sky-gangtok-sikkim.jpg?s=612x612&w=0&k=20&c=v458sVSFuXw7J3DiPQBNnEISvKJFtNt3V_vCpmHRNjU=",
      "description": "A Himalayan gem, Sikkim features monasteries, mountain vistas, and the pristine Tsomgo Lake.",
      "path": 22
    },
    {
      "id": 23,
      "state": "Tamil Nadu",
      "img": "https://media.gettyimages.com/id/1189145465/photo/meenakshi-temple-lights-turns-on-during-dazzling-twilight.jpg?s=612x612&w=0&k=20&c=3fY3mKo9r1YoIt4dsrivKV_N5MjRltJ9Yuy0KemysRQ=",
      "description": "Tamil Nadu is known for its ancient temples, hill stations like Ooty, and beautiful coastal cities like Chennai.",
      "path": 23
    },
    {
      "id": 24,
      "state": "Telangana",
      "img": "https://media.gettyimages.com/id/2157396962/photo/the-qutub-shahi-tombs-ibrahim-bagh-hyderabad-telangana-india.jpg?s=612x612&w=0&k=20&c=zk3TfGXCn5ztgv0suIrJY9-Mehes3_B2hyzQhogPlBg=",
      "description": "Telangana boasts rich heritage sites like Charminar, Golconda Fort, and Ramoji Film City.",
      "path": 24
    },
    {
      "id": 25,
      "state": "Tripura",
      "img": "https://media.gettyimages.com/id/170980061/photo/ujjayanta-palace-agartala-tripura-north-east-india.jpg?s=612x612&w=0&k=20&c=qkIwHQce74OONWGRz06hDdTMurS9nY_Aff_Vqcd9nPo=",
      "description": "Tripura is known for its temples, royal palaces, and tribal culture.",
      "path": 25
    },
    {
      "id": 26,
      "state": "Uttar Pradesh",
      "img": "https://media.gettyimages.com/id/912417392/photo/gwalior-fort-is-an-hill-fort-near-gwalior-madhya-pradesh-india.jpg?s=612x612&w=0&k=20&c=JTIi8C_6m9zQSTxvzxLUMClJ5Px18GSgbMRfT3VMUZQ=",
      "description": "Home to the Taj Mahal, Varanasi, and Mathura, Uttar Pradesh is a land of spirituality and history.",
      "path": 26
    },
    {
      "id": 27,
      "state": "Uttarakhand",
      "img": "https://media.gettyimages.com/id/170972437/photo/kedarnath-temple-nestled-in-the-garhwal-himalayas-a-sacred-pilgrimage-for-the-hindus-kedarnath.jpg?s=612x612&w=0&k=20&c=7JLXWZSIrUHd-9ra82HlrWcHbZQuyuxftRn0rBydgQM=",
      "description": "Famous for its Himalayan beauty, Uttarakhand offers adventure sports, spiritual retreats, and hill stations.",
      "path": 27
    },
    {
      "id": 28,
      "state": "West Bengal",
      "img": "https://media.gettyimages.com/id/535166840/photo/victoria-memorial-hall-kolkata-india.jpg?s=612x612&w=0&k=20&c=pE9Fj8iS1HQAuUIc_UpJb-SRN4BIiakvvEO9XUbrh0M=",
      "description": "West Bengal features Darjeeling, the Sundarbans, and Kolkata, offering a mix of culture and natural wonders.",
      "path": 28
    }
  ]
  

  constructor() { }
  getStates(){
    return this.states;
  }
  
  getStateByID(id:any){
    return this.states.find(state => state.id == id);
  }
  
}
